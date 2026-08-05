from typing import List
from fastapi import APIRouter, Depends
from app.schemas.monitoring import (
    DeviceMetricResponse,
    AlertResponse,
    AlertAckRequest,
    CollectorResponse,
    CorrelationGroupResponse,
    EventTimelineItem,
)
from app.services.metrics_engine import metrics_engine
from app.services.alert_engine import alert_engine
from app.services.correlation_engine import correlation_engine
from app.services.telemetry_collector import telemetry_collector
from app.core.events import event_bus, DomainEventCategory
from app.security.deps import require_permission

router = APIRouter(prefix="/monitoring", tags=["Enterprise Monitoring & Telemetry Platform"])


@router.get("/metrics", response_model=List[DeviceMetricResponse])
async def get_device_metrics(
    device_id: str = "sw-core-fra-01",
    current_user: dict = Depends(require_permission("devices:read")),
):
    """Query normalized device metrics (CPU, Memory, Temp, Bandwidth, Latency)."""
    results = await metrics_engine.get_device_metrics(device_id)
    return [DeviceMetricResponse(**m) for m in results]


@router.get("/alerts", response_model=List[AlertResponse])
async def get_active_alerts(
    current_user: dict = Depends(require_permission("devices:read")),
):
    """List all active alerts with severity and acknowledgment status."""
    results = await alert_engine.get_active_alerts()
    return [AlertResponse(**a) for a in results]


@router.post("/alerts/{alert_id}/acknowledge", response_model=AlertResponse)
async def acknowledge_alert(
    alert_id: str,
    payload: AlertAckRequest,
    current_user: dict = Depends(require_permission("devices:write")),
):
    """Acknowledge an active alert."""
    result = await alert_engine.acknowledge_alert(alert_id, payload.user_id)
    return AlertResponse(
        id=alert_id,
        device_id="",
        type="",
        severity="",
        status=result["status"],
        title="",
        description="",
    )


@router.get("/collectors", response_model=List[CollectorResponse])
async def list_telemetry_collectors(
    current_user: dict = Depends(require_permission("devices:read")),
):
    """List all telemetry collector statuses."""
    results = telemetry_collector.list_collectors()
    return [CollectorResponse(**c) for c in results]


@router.get("/correlations", response_model=List[CorrelationGroupResponse])
async def get_alert_correlations(
    current_user: dict = Depends(require_permission("devices:read")),
):
    """View correlated alert groups."""
    alerts = await alert_engine.get_active_alerts()
    results = await correlation_engine.correlate_alerts(alerts)
    return [CorrelationGroupResponse(**c) for c in results]


@router.get("/events", response_model=List[EventTimelineItem])
async def get_event_timeline(
    category: str = "",
    limit: int = 50,
    current_user: dict = Depends(require_permission("devices:read")),
):
    """Query event timeline across all domains."""
    cat = None
    if category:
        try:
            cat = DomainEventCategory(category)
        except ValueError:
            pass

    events = event_bus.get_recent_events(limit=limit, category=cat)
    return [
        EventTimelineItem(
            event_name=e.event_name,
            category=e.category.value,
            timestamp=e.timestamp,
            payload=e.payload,
        )
        for e in events
    ]
