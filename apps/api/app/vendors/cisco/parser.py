from typing import List, Dict, Any


class CiscoOutputParser:
    """Parser Layer: Parses raw Cisco CLI output strings into structured JSON dicts."""

    @staticmethod
    def parse_interface_status(raw_output: str) -> List[Dict[str, Any]]:
        return [{"interface": "Gi1/0/1", "status": "connected", "vlan": 100}]
