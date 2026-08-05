"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskType = exports.TaskExecutionStatus = void 0;
var TaskExecutionStatus;
(function (TaskExecutionStatus) {
    TaskExecutionStatus["QUEUED"] = "QUEUED";
    TaskExecutionStatus["RUNNING"] = "RUNNING";
    TaskExecutionStatus["RETRYING"] = "RETRYING";
    TaskExecutionStatus["WAITING_APPROVAL"] = "WAITING_APPROVAL";
    TaskExecutionStatus["COMPLETED"] = "COMPLETED";
    TaskExecutionStatus["CANCELLED"] = "CANCELLED";
    TaskExecutionStatus["ROLLBACK_STARTED"] = "ROLLBACK_STARTED";
    TaskExecutionStatus["ROLLBACK_FINISHED"] = "ROLLBACK_FINISHED";
    TaskExecutionStatus["FAILED"] = "FAILED";
})(TaskExecutionStatus || (exports.TaskExecutionStatus = TaskExecutionStatus = {}));
var TaskType;
(function (TaskType) {
    TaskType["CONFIG_BACKUP"] = "CONFIG_BACKUP";
    TaskType["FIRMWARE_UPGRADE"] = "FIRMWARE_UPGRADE";
    TaskType["VLAN_SYNC"] = "VLAN_SYNC";
    TaskType["PORT_CONFIG"] = "PORT_CONFIG";
    TaskType["BULK_COMMAND"] = "BULK_COMMAND";
    TaskType["HEALTH_CHECK"] = "HEALTH_CHECK";
})(TaskType || (exports.TaskType = TaskType = {}));
