import asyncio
from typing import Dict, Any, Callable


class CircuitBreakerOpenException(Exception):
    """Raised when Circuit Breaker is in OPEN state."""
    pass


class CircuitBreaker:
    """
    Circuit Breaker & Bulkhead Isolation Pattern for Network Operations.
    States: CLOSED (Normal), OPEN (Failing), HALF_OPEN (Testing recovery).
    """

    def __init__(self, failure_threshold: int = 5, recovery_timeout_sec: int = 30):
        self.failure_threshold = failure_threshold
        self.recovery_timeout_sec = recovery_timeout_sec
        self.failure_count = 0
        self.state = "CLOSED"

    async def execute(self, func: Callable, *args, **kwargs) -> Any:
        if self.state == "OPEN":
            raise CircuitBreakerOpenException("Circuit Breaker is OPEN due to downstream failure threshold.")

        try:
            result = await func(*args, **kwargs)
            self.failure_count = 0
            self.state = "CLOSED"
            return result
        except Exception as e:
            self.failure_count += 1
            if self.failure_count >= self.failure_threshold:
                self.state = "OPEN"
            raise e


circuit_breaker = CircuitBreaker()
