import asyncio
from typing import Dict, Any, List


class VirtualMultiVendorDeviceSimulator:
    """
    Virtual Multi-Vendor Network Device Simulator.
    Simulates CLI SSH prompts, SNMP MIB polling responses, NETCONF XML payloads,
    and gNMI telemetry streams for Cisco IOS-XE/NX-OS, Aruba AOS-CX, Juniper JunOS,
    Huawei VRP, and Mikrotik RouterOS.
    """

    VENDOR_PROMPTS = {
        "cisco": "sw-core-fra-01#",
        "aruba": "sw-edge-lon-01#",
        "juniper": "admin@sw-dist-ber-01>",
        "huawei": "<sw-core-pek-01>",
        "mikrotik": "[admin@sw-edge-par-01] >",
    }

    def simulate_cli_command(self, vendor: str, command: str) -> Dict[str, Any]:
        prompt = self.VENDOR_PROMPTS.get(vendor.lower(), "switch#")
        if "show vlan" in command.lower() or "display vlan" in command.lower():
            output = f"VLAN Name                             Status    Ports\n---- -------------------------------- --------- -------------------------------\n1    default                          active    Gi1/0/1, Gi1/0/2\n100  MANAGEMENT                       active    Gi1/0/24"
        elif "show running-config" in command.lower():
            output = f"hostname {vendor}-device-01\n!\ninterface GigabitEthernet1/0/1\n switchport mode access\n switchport access vlan 100\n!"
        else:
            output = f"Command '{command}' executed successfully on simulated {vendor} device."

        return {
            "vendor": vendor,
            "command": command,
            "prompt": prompt,
            "raw_output": output,
            "status_code": 0,
        }

    def simulate_snmp_poll(self, vendor: str, oid: str) -> Dict[str, Any]:
        return {
            "vendor": vendor,
            "oid": oid,
            "sysDescr": f"SwitchPilot Virtual {vendor.upper()} OS v1.0.0",
            "sysUpTime": 8640000,
            "cpuUsagePct": 42.5,
            "memUsagePct": 61.2,
        }


virtual_device_simulator = VirtualMultiVendorDeviceSimulator()
