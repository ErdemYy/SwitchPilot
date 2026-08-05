import pytest
from app.services.execution_engine import execution_engine


@pytest.mark.asyncio
async def test_execution_plan_creation():
    """Verify execution engine creates structured execution plan from CCM payload."""
    ccm_payload = {
        "vlan": {"id": 100, "name": "MANAGEMENT"},
    }
    plan = await execution_engine.create_execution_plan("dev-101", ccm_payload)
    assert plan["device_id"] == "dev-101"
    assert plan["status"] == "PLANNED"
    assert len(plan["steps"]) > 0
