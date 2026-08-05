from typing import Dict, List, Set

# Declarative Permission Registry
PERMISSION_REGISTRY: Dict[str, Dict[str, str]] = {
    # Organization Management
    "organization:read": {"name": "View Organization Settings", "group": "Organization", "desc": "View organization profile and security policies."},
    "organization:write": {"name": "Manage Organization Settings", "group": "Organization", "desc": "Modify organization profile and security policies."},

    # Users & Identity
    "users:read": {"name": "View Users", "group": "Identity", "desc": "View user profiles within the organization."},
    "users:invite": {"name": "Invite Users", "group": "Identity", "desc": "Send invitation emails to join the organization."},
    "users:manage": {"name": "Manage Users", "group": "Identity", "desc": "Update roles, deactivate or remove users."},

    # Roles & RBAC
    "roles:read": {"name": "View Roles", "group": "RBAC", "desc": "View system and custom roles."},
    "roles:manage": {"name": "Manage Custom Roles", "group": "RBAC", "desc": "Create, edit, and assign permissions to custom roles."},

    # Hardware Devices
    "devices:read": {"name": "View Network Devices", "group": "Devices", "desc": "View device inventory and telemetry status."},
    "devices:create": {"name": "Register Devices", "group": "Devices", "desc": "Add new hardware switches/routers to inventory."},
    "devices:write": {"name": "Modify Devices", "group": "Devices", "desc": "Update device metadata and management parameters."},
    "devices:delete": {"name": "Delete Devices", "group": "Devices", "desc": "Remove devices from management inventory."},

    # Configurations & Backups
    "configs:read": {"name": "View Configurations", "group": "Configurations", "desc": "View running configuration backups and diffs."},
    "configs:write": {"name": "Apply Configurations", "group": "Configurations", "desc": "Push configuration commands to network devices."},
    "configs:rollback": {"name": "Rollback Configurations", "group": "Configurations", "desc": "Execute safe configuration rollbacks."},

    # Automation & Tasks
    "automation:read": {"name": "View Automation Queue", "group": "Automation", "desc": "Monitor Celery background task queue."},
    "automation:execute": {"name": "Execute Bulk Tasks", "group": "Automation", "desc": "Trigger bulk network commands and scripts."},

    # Audit & Security
    "audit:read": {"name": "View Audit Logs", "group": "Audit", "desc": "Access security audit logs and change records."},
    "sessions:manage": {"name": "Manage Active Sessions", "group": "Sessions", "desc": "View and revoke user active login sessions."},
}

# Role Inheritance Permission Mappings
SYSTEM_ROLE_PERMISSIONS: Dict[str, List[str]] = {
    "Owner": list(PERMISSION_REGISTRY.keys()),
    "Administrator": [
        p for p in PERMISSION_REGISTRY.keys() if p != "organization:write"
    ],
    "Network Engineer": [
        "devices:read", "devices:create", "devices:write",
        "configs:read", "configs:write", "configs:rollback",
        "automation:read", "automation:execute", "audit:read"
    ],
    "Operator": [
        "devices:read", "configs:read", "automation:read", "audit:read"
    ],
    "Read Only": [
        "devices:read", "configs:read", "audit:read"
    ],
}


class RBACPermissionEngine:
    @staticmethod
    def get_role_permissions(role_name: str) -> Set[str]:
        """Resolve all permission codes granted to a given role."""
        return set(SYSTEM_ROLE_PERMISSIONS.get(role_name, []))

    @staticmethod
    def has_permission(user_permissions: Set[str], required_permission: str) -> bool:
        """Check if user permission set satisfies required permission code."""
        return required_permission in user_permissions or "all" in user_permissions
