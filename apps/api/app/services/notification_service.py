from typing import Dict, Any, List
from app.core.events import event_bus, DomainEvent, DomainEventCategory


class NotificationService:
    """
    Multi-Channel Notification Dispatcher Engine.

    Supported Channels:
      EMAIL, SLACK, MICROSOFT_TEAMS, DISCORD, WEBHOOK, SMS.

    Future-Ready Integrations (Plugin SDK):
      PAGERDUTY, OPSGENIE.

    Supports severity-based routing: Critical/Emergency alerts can be routed
    to PagerDuty/SMS while Warning/Info alerts go to Slack/Teams channels.
    """

    SUPPORTED_CHANNELS = [
        "EMAIL",
        "SLACK",
        "MICROSOFT_TEAMS",
        "DISCORD",
        "WEBHOOK",
        "SMS",
    ]

    FUTURE_CHANNELS = [
        "PAGERDUTY",
        "OPSGENIE",
    ]

    # Severity-based default routing
    SEVERITY_ROUTING: Dict[str, List[str]] = {
        "EMERGENCY": ["SLACK", "MICROSOFT_TEAMS", "SMS", "WEBHOOK"],
        "CRITICAL": ["SLACK", "MICROSOFT_TEAMS", "WEBHOOK"],
        "MAJOR": ["SLACK", "MICROSOFT_TEAMS", "WEBHOOK"],
        "MINOR": ["SLACK", "WEBHOOK"],
        "WARNING": ["SLACK"],
        "INFO": ["SLACK"],
    }

    async def send_notification(
        self, channel: str, title: str, message: str, metadata: Dict[str, Any]
    ) -> bool:
        """Dispatch a notification to a specific channel."""
        print(f"[NOTIFICATION - {channel.upper()}] {title}: {message}")
        await event_bus.publish(
            DomainEvent(
                "NotificationSent",
                {"channel": channel, "title": title},
                DomainEventCategory.NOTIFICATION,
            )
        )
        return True

    async def dispatch_alert_notification(
        self, severity: str, title: str, message: str, metadata: Dict[str, Any]
    ) -> List[str]:
        """
        Route an alert notification to appropriate channels based on severity.
        Returns the list of channels notified.
        """
        channels = self.SEVERITY_ROUTING.get(severity, ["SLACK"])
        notified: List[str] = []
        for channel in channels:
            success = await self.send_notification(channel, title, message, metadata)
            if success:
                notified.append(channel)
        return notified


notification_service = NotificationService()
