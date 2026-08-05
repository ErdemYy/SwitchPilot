from app.vendors.cisco.connection import CiscoConnectionHandler
from app.vendors.cisco.translator import CiscoCommandTranslator
from app.vendors.cisco.capabilities import CiscoCapabilityChecker
from app.vendors.cisco.executor import CiscoExecutionEngine
from app.vendors.cisco.parser import CiscoOutputParser
from app.vendors.base import BaseVendorDriver


class CiscoVendorDriver(BaseVendorDriver):
    """
    Cisco Multi-Layer Driver combining Connection, Translation, Capabilities,
    Execution, and Output Parsing layers.
    """

    def __init__(self, host: str, port: int = 22):
        self.connection = CiscoConnectionHandler(host, port)
        self.translator = CiscoCommandTranslator()
        self.capabilities = CiscoCapabilityChecker()
        self.executor = CiscoExecutionEngine()
        self.parser = CiscoOutputParser()

    @property
    def vendor_name(self) -> str:
        return "CISCO"

    async def get_running_config(self) -> str:
        cmd = self.translator.get_backup_command()
        res = await self.executor.execute_commands([cmd])
        return f"! Cisco Running Config output for {self.connection.host}\n"

    async def apply_configuration(self, commands: list[str]) -> dict:
        return await self.executor.execute_commands(commands)

    async def get_interface_states(self) -> list[dict]:
        return self.parser.parse_interface_status("")
