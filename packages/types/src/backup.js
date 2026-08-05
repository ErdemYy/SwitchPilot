"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeApprovalStatus = exports.ChangeCategory = exports.SnapshotType = void 0;
var SnapshotType;
(function (SnapshotType) {
    SnapshotType["RUNNING_CONFIG"] = "RUNNING_CONFIG";
    SnapshotType["STARTUP_CONFIG"] = "STARTUP_CONFIG";
    SnapshotType["CANDIDATE_CONFIG"] = "CANDIDATE_CONFIG";
    SnapshotType["GOLDEN_CONFIG"] = "GOLDEN_CONFIG";
    SnapshotType["LAST_KNOWN_GOOD"] = "LAST_KNOWN_GOOD";
    SnapshotType["PRE_CHANGE_SNAPSHOT"] = "PRE_CHANGE_SNAPSHOT";
    SnapshotType["POST_CHANGE_SNAPSHOT"] = "POST_CHANGE_SNAPSHOT";
    SnapshotType["EMERGENCY_SNAPSHOT"] = "EMERGENCY_SNAPSHOT";
})(SnapshotType || (exports.SnapshotType = SnapshotType = {}));
var ChangeCategory;
(function (ChangeCategory) {
    ChangeCategory["EMERGENCY"] = "EMERGENCY";
    ChangeCategory["STANDARD"] = "STANDARD";
    ChangeCategory["MAJOR"] = "MAJOR";
    ChangeCategory["MINOR"] = "MINOR";
})(ChangeCategory || (exports.ChangeCategory = ChangeCategory = {}));
var ChangeApprovalStatus;
(function (ChangeApprovalStatus) {
    ChangeApprovalStatus["DRAFT"] = "DRAFT";
    ChangeApprovalStatus["PENDING_REVIEW"] = "PENDING_REVIEW";
    ChangeApprovalStatus["PENDING_APPROVAL"] = "PENDING_APPROVAL";
    ChangeApprovalStatus["APPROVED"] = "APPROVED";
    ChangeApprovalStatus["REJECTED"] = "REJECTED";
    ChangeApprovalStatus["EXECUTED"] = "EXECUTED";
    ChangeApprovalStatus["CANCELLED"] = "CANCELLED";
})(ChangeApprovalStatus || (exports.ChangeApprovalStatus = ChangeApprovalStatus = {}));
