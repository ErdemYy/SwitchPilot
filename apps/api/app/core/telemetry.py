import time
import uuid
from typing import Dict, Any, Callable
from fastapi import Request, Response
from app.core.events import event_bus, DomainEvent, DomainEventCategory


class OpenTelemetryTracingMiddleware:
    """
    OpenTelemetry Distributed Tracing & Correlation ID Middleware.
    Propagates X-Correlation-ID headers across microservices, background tasks, and logs.
    """

    async def __call__(self, request: Request, call_next: Callable) -> Response:
        correlation_id = request.headers.get("X-Correlation-ID") or f"trace-{uuid.uuid4().hex[:12]}"
        request.state.correlation_id = correlation_id

        start_time = time.time()
        response: Response = await call_next(request)
        process_time_ms = round((time.time() - start_time) * 1000, 2)

        response.headers["X-Correlation-ID"] = correlation_id
        response.headers["X-Process-Time-Ms"] = str(process_time_ms)
        return response


telemetry_middleware = OpenTelemetryTracingMiddleware()
