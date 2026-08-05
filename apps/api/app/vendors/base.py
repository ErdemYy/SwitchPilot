from abc import ABC, abstractmethod
from typing import Any, Dict, List


class BaseVendorDriver(ABC):
    """
    Abstract Base Class for Multi-Vendor Network Hardware Drivers.
    All specific vendor drivers (Cisco, Aruba, Juniper, Huawei, MikroTik, Ubiquiti, HP)
    and future vendors must implement this contract.
    """

    @property
    @abstractmethod
    def vendor_name(self) -> str:
        """Returns the hardware vendor identifier."""
        pass

    @abstractmethod
    async def get_running_config(self) -> str:
        """Fetch running configuration from the device."""
        pass

    @abstractmethod
    async def apply_configuration(self, commands: List[str]) -> Dict[str, Any]:
        """Apply a set of configuration commands to the device."""
        pass

    @abstractmethod
    async def get_interface_states(self) -> List[Dict[str, Any]]:
        """Fetch current operational and administrative interface states."""
        pass
