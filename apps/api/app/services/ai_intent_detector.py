from typing import Dict, Any


class AiIntentDetector:
    """
    AI Intent Detector Engine.
    Classifies natural language prompts into 20 network intent categories.
    """

    def detect_intent(self, prompt: str) -> str:
        p_lower = prompt.lower()
        if "vlan" in p_lower:
            return "VLAN_ADVISOR"
        elif "trunk" in p_lower or "access" in p_lower or "port" in p_lower:
            return "NATURAL_LANGUAGE_CONFIG"
        elif "explain" in p_lower:
            return "CONFIG_EXPLANATION"
        elif "risk" in p_lower:
            return "RISK_ADVISOR"
        elif "convert" in p_lower or "translate" in p_lower:
            return "VENDOR_TRANSLATION_ASSISTANT"
        elif "why" in p_lower or "unreachable" in p_lower:
            return "TROUBLESHOOTING_ASSISTANT"
        return "NATURAL_LANGUAGE_CONFIG"


ai_intent_detector = AiIntentDetector()
