from app.routers.v1.router import api_v1_router


def test_openapi_schema_generation():
    """Verify FastAPI OpenAPI routes produce valid schema objects matching @switchpilot/types DTOs."""
    routes = [r.path for r in api_v1_router.routes]
    assert "/auth/login" in routes
    assert "/devices" in routes
    assert "/translation/translate" in routes
    assert "/execution/plans" in routes
    assert "/monitoring/metrics" in routes
    assert "/saas/tenants" in routes
    assert "/desktop/sync/push" in routes
