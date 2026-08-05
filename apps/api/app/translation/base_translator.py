from abc import ABC, abstractmethod
from typing import Dict, Any, List


class BaseVendorTranslator(ABC):
    """
    Abstract Base Class for all Multi-Vendor Configuration Translators.
    Translates vendor-agnostic Canonical Configuration Model (CCM) objects
    into target hardware CLI, NETCONF XML, or RESTCONF JSON payloads.
    """

    @property
    @abstractmethod
    def vendor_name(self) -> str:
        """Target hardware vendor identifier."""
        pass

    @abstractmethod
    def translate(self, ccm: Dict[str, Any]) -> List[str]:
        """Translate CCM object into vendor-specific CLI or API command list."""
        pass

    @abstractmethod
    def validate(self, ccm: Dict[str, Any]) -> List[str]:
        """Validate vendor compatibility and firmware constraints against CCM."""
        pass

    @abstractmethod
    def capabilities(self) -> List[Dict[str, Any]]:
        """Return list of supported, unsupported, and restricted vendor features."""
        pass

    @abstractmethod
    def supported_versions(self) -> List[str]:
        """Return list of supported operating system versions."""
        pass
