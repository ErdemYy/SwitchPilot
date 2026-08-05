from typing import Dict, Any, List, Type
from app.translation.base_translator import BaseVendorTranslator
from app.translation.cisco_translator import CiscoVendorTranslator
from app.translation.aruba_translator import ArubaVendorTranslator
from app.translation.juniper_translator import JuniperVendorTranslator
from app.translation.huawei_translator import HuaweiVendorTranslator
from app.translation.mikrotik_translator import MikroTikVendorTranslator
from app.translation.ubiquiti_translator import UbiquitiVendorTranslator
from app.translation.hp_translator import HPVendorTranslator


class VendorTranslationEngine:
    """
    Vendor Translation Engine.
    Routes Canonical Configuration Models (CCM) to registered vendor translators.
    """

    def __init__(self):
        self._translators: Dict[str, BaseVendorTranslator] = {
            "CISCO": CiscoVendorTranslator(),
            "ARUBA": ArubaVendorTranslator(),
            "JUNIPER": JuniperVendorTranslator(),
            "HUAWEI": HuaweiVendorTranslator(),
            "MIKROTIK": MikroTikVendorTranslator(),
            "UBIQUITI": UbiquitiVendorTranslator(),
            "HP": HPVendorTranslator(),
        }

    def translate_ccm(self, vendor: str, ccm: Dict[str, Any]) -> Dict[str, Any]:
        vendor_key = vendor.upper()
        translator = self._translators.get(vendor_key, self._translators["CISCO"])
        generated_cmds = translator.translate(ccm)
        return {
            "vendor": translator.vendor_name,
            "format": "CLI",
            "generatedCommands": generated_cmds,
            "commandText": "\n".join(generated_cmds),
        }

    def get_capability_matrix((self)) -> List[Dict[str, Any]]:
        matrix = []
        for vendor_name, translator in self._translators.items():
            matrix.append({
                "vendor": vendor_name,
                "supportedVersions": translator.supported_versions(),
                "capabilities": translator.capabilities(),
            })
        return matrix


translation_engine = VendorTranslationEngine()
