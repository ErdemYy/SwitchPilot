from abc import ABC, abstractmethod
from typing import Dict, Any, List


class BaseProtocolAdapter(ABC):
    """
    Universal Protocol Adapter Contract.
    All protocol implementations (SSH, Telnet, NETCONF, RESTCONF, SNMP, REST API, gRPC)
    must plug into this abstraction layer.
    """

    @property
    @abstractmethod
    def protocol_name(self) -> str:
        """Name of the network connection protocol."""
        pass

    @abstractmethod
    async def establish_session(
        self, target_host: str, port: int, credentials: Dict[str, Any], timeout_sec: int
    ) -> Any:
        """Establish network session using specified protocol adapter."""
        pass

    @abstractmethod
    async def terminate_session(self, session: Any) -> None:
        """Safely terminate protocol session."""
        pass


class SSHProtocolAdapter(BaseProtocolAdapter):
    @property
    def protocol_name(self) -> str: return "SSH"

    async def establish_session(self, target_host: str, port: int, credentials: Dict[str, Any], timeout_sec: int) -> Any:
        return {"session_id": "ssh-sess-01", "host": target_host, "port": port}

    async def terminate_session(self, session: Any) -> None: pass


class NETCONFProtocolAdapter(BaseProtocolAdapter):
    @property
    def protocol_name(self) -> str: return "NETCONF"

    async def establish_session(self, target_host: str, port: int, credentials: Dict[str, Any], timeout_sec: int) -> Any:
        return {"session_id": "netconf-sess-01", "host": target_host, "port": 830}

    async def terminate_session(self, session: Any) -> None: pass


class RESTCONFProtocolAdapter(BaseProtocolAdapter):
    @property
    def protocol_name(self) -> str: return "RESTCONF"

    async def establish_session(self, target_host: str, port: int, credentials: Dict[str, Any], timeout_sec: int) -> Any:
        return {"session_id": "restconf-sess-01", "host": target_host, "port": 443}

    async def terminate_session(self, session: Any) -> None: pass


class SNMPProtocolAdapter(BaseProtocolAdapter):
    @property
    def protocol_name(self) -> str: return "SNMP"

    async def establish_session(self, target_host: str, port: int, credentials: Dict[str, Any], timeout_sec: int) -> Any:
        return {"session_id": "snmp-sess-01", "host": target_host, "port": 161}

    async def terminate_session(self, session: Any) -> None: pass
