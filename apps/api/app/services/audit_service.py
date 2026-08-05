from app.core.events import DomainEvent, event_bus


class AuditLogService:
    """
    Event-Driven Audit Service.
    Subscribes to domain events emitted across modules and persists audit log entries.
    """

    def __init__(self):
        # Register subscribers for key system events
        event_bus.subscribe("DeviceUpdated", self.handle_audit_event)
        event_bus.subscribe("ConfigApplied", self.handle_audit_event)
        event_bus.subscribe("UserRoleChanged", self.handle_audit_event)
        event_bus.subscribe("UserLoginFailed", self.handle_audit_event)

    async def handle_audit_event(self, event: DomainEvent) -> None:
        """Asynchronously process and persist audit log from emitted event."""
        event_data = event.payload
        # Persist audit record in DB (e.g. AuditLog model)
        print(f"[AUDIT EVENT] {event.event_name}: {event_data}")


audit_service = AuditLogService()
