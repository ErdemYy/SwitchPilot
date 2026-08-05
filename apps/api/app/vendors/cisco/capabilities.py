class CiscoCapabilityChecker:
    """Capability Layer: Checks supported Cisco features."""

    @staticmethod
    def supports_vlan_mgmt() -> bool:
        return True

    @staticmethod
    def supports_diff_backup() -> bool:
        return True
