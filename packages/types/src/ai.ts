export enum AiIntentCategory {
  NATURAL_LANGUAGE_CONFIG = 'NATURAL_LANGUAGE_CONFIG',
  CONFIG_EXPLANATION = 'CONFIG_EXPLANATION',
  CONFIG_REVIEW = 'CONFIG_REVIEW',
  RISK_ADVISOR = 'RISK_ADVISOR',
  BEST_PRACTICE_ADVISOR = 'BEST_PRACTICE_ADVISOR',
  COMPLIANCE_ADVISOR = 'COMPLIANCE_ADVISOR',
  MIGRATION_ASSISTANT = 'MIGRATION_ASSISTANT',
  VENDOR_TRANSLATION_ASSISTANT = 'VENDOR_TRANSLATION_ASSISTANT',
  TROUBLESHOOTING_ASSISTANT = 'TROUBLESHOOTING_ASSISTANT',
  ROOT_CAUSE_ANALYSIS = 'ROOT_CAUSE_ANALYSIS',
  FIRMWARE_RECOMMENDATION = 'FIRMWARE_RECOMMENDATION',
  INTERFACE_ANALYZER = 'INTERFACE_ANALYZER',
  VLAN_ADVISOR = 'VLAN_ADVISOR',
  ACL_ADVISOR = 'ACL_ADVISOR',
  QOS_ADVISOR = 'QOS_ADVISOR',
  STP_ADVISOR = 'STP_ADVISOR',
  ROUTING_ADVISOR = 'ROUTING_ADVISOR',
  SECURITY_ADVISOR = 'SECURITY_ADVISOR',
  TOPOLOGY_EXPLANATION = 'TOPOLOGY_EXPLANATION',
  CHANGE_IMPACT_PREDICTION = 'CHANGE_IMPACT_PREDICTION',
}

export interface AiPlanStep {
  stepNumber: number;
  description: string;
  targetComponent: string;
  riskRating: 'SAFE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface AiPlanEntity {
  id: string;
  intent: string;
  steps: AiPlanStep[];
  ccmPayload: Record<string, unknown>;
}

export interface AiMessageEntity {
  id: string;
  sender: 'USER' | 'AI_ENGINEER';
  intentCategory: AiIntentCategory;
  content: string;
  ccmPayload?: Record<string, unknown>;
  riskLevel?: string;
  createdAt: string;
}

export interface AiConversationEntity {
  id: string;
  organizationId: string;
  userId: string;
  title: string;
  messages: AiMessageEntity[];
  plans?: AiPlanEntity[];
  createdAt: string;
}

export interface RagKnowledgeItem {
  id: string;
  source: 'VENDOR_DOCS' | 'RFCS' | 'COMPANY_POLICIES' | 'GOLDEN_CONFIGS' | 'BEST_PRACTICES';
  title: string;
  snippet: string;
  relevanceScore: number;
}
