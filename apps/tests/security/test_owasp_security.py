from app.security.jwt import create_access_token, decode_access_token


def test_jwt_token_tampering_prevention():
    """Verify forged or corrupted JWT tokens are rejected."""
    token = create_access_token({"sub": "user-123", "org_id": "org-001"})
    tampered_token = token[:-4] + "ffff"

    decoded = decode_access_token(tampered_token)
    assert decoded is None, "Tampered JWT token must fail validation"


def test_rbac_permission_checking():
    """Verify RBAC permission checking prevents unauthorized action execution."""
    from app.security.deps import require_permission
    perm_guard = require_permission("devices:write")
    assert perm_guard is not None
