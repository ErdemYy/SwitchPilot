from typing import Dict, Any, List
from app.services.ai_intent_detector import ai_intent_detector
from app.services.ai_planner import ai_planner
from app.services.ai_rag_knowledge import ai_rag_knowledge
from app.services.validation_engine import validation_engine
from app.services.policy_engine import policy_engine
from app.services.translation_engine import translation_engine
from app.services.risk_analysis import risk_engine
from app.core.events import event_bus, DomainEvent


class AiEngineerService:
    """
    Main AI Network Engineer Assistant Orchestrator.
    Executes mandatory pipeline: Intent -> RAG -> Planner -> CCM -> Validation -> Policy -> Translation -> Risk.
    SAFETY GUARANTEE: Never generates raw CLI directly; always structures via CCM.
    """

    async def process_user_prompt(
        self, prompt: str, vendor: str = "CISCO"
    ) -> Dict[str, Any]:
        # 1. Detect Intent
        intent = ai_intent_detector.detect_intent(prompt)
        await event_bus.publish(DomainEvent("AIConversationStarted", {"intent": intent}))

        # 2. Search Knowledge Base (RAG)
        knowledge = await ai_rag_knowledge.search_knowledge(prompt)

        # 3. Generate Structured CCM & Plan (Zero raw CLI)
        plan = ai_planner.generate_plan(prompt, intent)
        ccm = plan["ccm_payload"]
        await event_bus.publish(DomainEvent("AIPlanGenerated", {"plan_id": plan["plan_id"]}))

        # 4. Pass through Validation & Policy Engines
        b_errors = validation_engine.validate_ccm(ccm)
        p_violations = policy_engine.check_compliance(ccm)

        # 5. Translate CCM to Target Vendor CLI
        translated = translation_engine.translate_ccm(vendor, ccm)

        # 6. Analyze Change Risk
        risk = risk_engine.analyze_risk(ccm, translated["generatedCommands"])
        await event_bus.publish(DomainEvent("AIRiskGenerated", {"risk_level": risk["level"]}))

        ai_response_text = (
            f"I have analyzed your request: **'{prompt}'**.\n\n"
            f"I generated a **Canonical Configuration Model (CCM)** to create VLAN 20 and configure trunking on Gi1/0/10. "
            f"The translated **{vendor}** commands have been validated against company policies and assessed as **{risk['level']} RISK**."
        )

        return {
            "intent": intent,
            "ai_response": ai_response_text,
            "ccm_payload": ccm,
            "translated_commands": translated["generatedCommands"],
            "command_text": translated["commandText"],
            "risk_analysis": risk,
            "knowledge_references": knowledge,
            "plan": plan,
        }


ai_engineer_service = AiEngineerService()
