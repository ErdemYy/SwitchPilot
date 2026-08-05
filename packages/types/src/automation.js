"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowNodeType = exports.TemplateCategory = void 0;
var TemplateCategory;
(function (TemplateCategory) {
    TemplateCategory["VLAN_MANAGEMENT"] = "VLAN_MANAGEMENT";
    TemplateCategory["PORT_CONFIG"] = "PORT_CONFIG";
    TemplateCategory["SYSTEM_IDENTITY"] = "SYSTEM_IDENTITY";
    TemplateCategory["TELEMETRY_LOGGING"] = "TELEMETRY_LOGGING";
    TemplateCategory["SECURITY_AAA"] = "SECURITY_AAA";
    TemplateCategory["FIRMWARE_MAINTENANCE"] = "FIRMWARE_MAINTENANCE";
    TemplateCategory["GOLDEN_BASELINE"] = "GOLDEN_BASELINE";
    TemplateCategory["COMPLIANCE"] = "COMPLIANCE";
})(TemplateCategory || (exports.TemplateCategory = TemplateCategory = {}));
var WorkflowNodeType;
(function (WorkflowNodeType) {
    WorkflowNodeType["STEP_EXECUTION"] = "STEP_EXECUTION";
    WorkflowNodeType["PARALLEL_BRANCH"] = "PARALLEL_BRANCH";
    WorkflowNodeType["CONDITIONAL_IF"] = "CONDITIONAL_IF";
    WorkflowNodeType["APPROVAL_GATE"] = "APPROVAL_GATE";
    WorkflowNodeType["WAIT_DELAY"] = "WAIT_DELAY";
    WorkflowNodeType["VERIFICATION"] = "VERIFICATION";
    WorkflowNodeType["ROLLBACK_TRIGGER"] = "ROLLBACK_TRIGGER";
    WorkflowNodeType["NOTIFICATION"] = "NOTIFICATION";
})(WorkflowNodeType || (exports.WorkflowNodeType = WorkflowNodeType = {}));
