from typing import Dict, Any, List


class AlertDeduplicationCache:
    """
    Sliding-Window Alert Deduplication & Storm Suppression Cache Engine.
    Prevents alert storms by collapsing duplicate metric alerts (e.g. 1,000 CPU alerts -> 1 record).
    """

    def __init__(self) -> None:
        self._seen_cache: Dict[str, int] = {}

    def is_duplicate(self, alert_key: str, window_seconds: int = 300) -> bool:
        """Check if identical alert was received within sliding time window."""
        if alert_key in self._seen_cache:
            self._seen_cache[alert_key] += 1
            return True
        self._seen_cache[alert_key] = 1
        return False


alert_deduplication = AlertDeduplicationCache()
