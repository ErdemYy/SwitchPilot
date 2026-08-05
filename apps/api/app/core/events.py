import asyncio
from datetime import datetime, timezone
from enum import Enum
from typing import Any, Callable, Dict, List, Optional


class DomainEventCategory(str, Enum):
    """Standardized domain event categories across all SwitchPilot modules."""

    DEVICE = "DEVICE"
    EXECUTION = "EXECUTION"
    WORKFLOW = "WORKFLOW"
    AI = "AI"
    TELEMETRY = "TELEMETRY"
    ALERT = "ALERT"
    AUDIT = "AUDIT"
    NOTIFICATION = "NOTIFICATION"
    TOPOLOGY = "TOPOLOGY"
    POLICY = "POLICY"


# ---------------------------------------------------------------------------
# Canonical Domain Event Names
# ---------------------------------------------------------------------------
# DEVICE:       DeviceRegistered, DeviceUpdated, DeviceDeleted, DeviceOnline, DeviceOffline,
#               DeviceDiscovered, DeviceApproved, DeviceProvisioned, DeviceArchived, DeviceRetired, FirmwareUpdated, InventoryChanged
# EXECUTION:    ExecutionStarted, ExecutionCompleted, ExecutionFailed, ExecutionRolledBack
# WORKFLOW:     WorkflowCreated, WorkflowStarted, WorkflowCompleted, WorkflowFailed,
#               BulkExecutionStarted, BulkExecutionCompleted
# AI:           AIConversationStarted, AIPlanGenerated, AIConfigurationCreated,
#               AIReviewCompleted, AIRiskGenerated, AIRecommendationAccepted, AIRecommendationRejected
# TELEMETRY:    TelemetryReceived, MetricCollected, CollectorStarted, CollectorStopped
# ALERT:        AlertCreated, AlertAcknowledged, AlertResolved, AlertEscalated, AlarmCreated
# AUDIT:        AuditEntryCreated, SnapshotCreated, VersionCreated, RollbackStarted, ApprovalGranted
# NOTIFICATION: NotificationSent, NotificationFailed
# TOPOLOGY:     TopologyUpdated, TopologyDiscovered
# POLICY:       PolicyViolation, PolicyUpdated


# Map event name prefixes to their category for automatic classification
_EVENT_CATEGORY_MAP: Dict[str, DomainEventCategory] = {
    "Device": DomainEventCategory.DEVICE,
    "Execution": DomainEventCategory.EXECUTION,
    "Workflow": DomainEventCategory.WORKFLOW,
    "Bulk": DomainEventCategory.WORKFLOW,
    "AI": DomainEventCategory.AI,
    "Telemetry": DomainEventCategory.TELEMETRY,
    "Metric": DomainEventCategory.TELEMETRY,
    "Collector": DomainEventCategory.TELEMETRY,
    "Alert": DomainEventCategory.ALERT,
    "Alarm": DomainEventCategory.ALERT,
    "Audit": DomainEventCategory.AUDIT,
    "Snapshot": DomainEventCategory.AUDIT,
    "Version": DomainEventCategory.AUDIT,
    "Rollback": DomainEventCategory.AUDIT,
    "Approval": DomainEventCategory.AUDIT,
    "Notification": DomainEventCategory.NOTIFICATION,
    "Topology": DomainEventCategory.TOPOLOGY,
    "Policy": DomainEventCategory.POLICY,
    "Maintenance": DomainEventCategory.WORKFLOW,
    "Template": DomainEventCategory.WORKFLOW,
    "Correlation": DomainEventCategory.ALERT,
}


def _resolve_category(event_name: str) -> DomainEventCategory:
    """Resolve event name to its DomainEventCategory by prefix matching."""
    for prefix, category in _EVENT_CATEGORY_MAP.items():
        if event_name.startswith(prefix):
            return category
    return DomainEventCategory.AUDIT


class DomainEvent:
    """Base class for all application domain events."""

    def __init__(
        self,
        event_name: str,
        payload: Dict[str, Any],
        category: Optional[DomainEventCategory] = None,
    ):
        self.event_name = event_name
        self.payload = payload
        self.category = category or _resolve_category(event_name)
        self.timestamp = datetime.now(timezone.utc).isoformat()


class EventBus:
    """
    Asynchronous Event Bus for Event-Driven Architecture.

    Supports:
    - Named event subscriptions (e.g. subscribe("DeviceRegistered", handler))
    - Category-level wildcard subscriptions (e.g. subscribe_category(TELEMETRY, handler))
    - Global wildcard subscriptions (subscribe_all)
    - Event history ring buffer for recent event replay
    """

    MAX_HISTORY_SIZE = 500

    def __init__(self) -> None:
        self._subscribers: Dict[str, List[Callable[[DomainEvent], Any]]] = {}
        self._category_subscribers: Dict[
            DomainEventCategory, List[Callable[[DomainEvent], Any]]
        ] = {}
        self._global_subscribers: List[Callable[[DomainEvent], Any]] = []
        self._history: List[DomainEvent] = []

    # ── Named subscriptions ──────────────────────────────────────────────

    def subscribe(
        self, event_name: str, handler: Callable[[DomainEvent], Any]
    ) -> None:
        if event_name not in self._subscribers:
            self._subscribers[event_name] = []
        self._subscribers[event_name].append(handler)

    # ── Category-level wildcard subscriptions ────────────────────────────

    def subscribe_category(
        self, category: DomainEventCategory, handler: Callable[[DomainEvent], Any]
    ) -> None:
        if category not in self._category_subscribers:
            self._category_subscribers[category] = []
        self._category_subscribers[category].append(handler)

    # ── Global wildcard subscriptions ────────────────────────────────────

    def subscribe_all(self, handler: Callable[[DomainEvent], Any]) -> None:
        self._global_subscribers.append(handler)

    # ── Publish ──────────────────────────────────────────────────────────

    async def publish(self, event: DomainEvent) -> None:
        # Persist to ring buffer
        self._history.append(event)
        if len(self._history) > self.MAX_HISTORY_SIZE:
            self._history = self._history[-self.MAX_HISTORY_SIZE :]

        all_handlers: List[Callable[[DomainEvent], Any]] = []

        # Named handlers
        all_handlers.extend(self._subscribers.get(event.event_name, []))

        # Category handlers
        all_handlers.extend(self._category_subscribers.get(event.category, []))

        # Global handlers
        all_handlers.extend(self._global_subscribers)

        for handler in all_handlers:
            if asyncio.iscoroutinefunction(handler):
                asyncio.create_task(handler(event))
            else:
                handler(event)

    # ── History query ────────────────────────────────────────────────────

    def get_recent_events(
        self,
        limit: int = 50,
        category: Optional[DomainEventCategory] = None,
    ) -> List[DomainEvent]:
        events = self._history
        if category:
            events = [e for e in events if e.category == category]
        return events[-limit:]


event_bus = EventBus()
