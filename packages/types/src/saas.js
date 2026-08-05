"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseType = exports.FeatureFlagScope = exports.TenantType = exports.PlatformPlan = void 0;
var PlatformPlan;
(function (PlatformPlan) {
    PlatformPlan["COMMUNITY"] = "COMMUNITY";
    PlatformPlan["PROFESSIONAL"] = "PROFESSIONAL";
    PlatformPlan["BUSINESS"] = "BUSINESS";
    PlatformPlan["ENTERPRISE"] = "ENTERPRISE";
    PlatformPlan["MSP"] = "MSP";
    PlatformPlan["CUSTOM"] = "CUSTOM";
})(PlatformPlan || (exports.PlatformPlan = PlatformPlan = {}));
var TenantType;
(function (TenantType) {
    TenantType["SINGLE_TENANT"] = "SINGLE_TENANT";
    TenantType["MULTI_TENANT"] = "MULTI_TENANT";
    TenantType["ENTERPRISE_TENANT"] = "ENTERPRISE_TENANT";
    TenantType["MSP_TENANT"] = "MSP_TENANT";
})(TenantType || (exports.TenantType = TenantType = {}));
var FeatureFlagScope;
(function (FeatureFlagScope) {
    FeatureFlagScope["GLOBAL"] = "GLOBAL";
    FeatureFlagScope["TENANT"] = "TENANT";
    FeatureFlagScope["ORGANIZATION"] = "ORGANIZATION";
    FeatureFlagScope["USER"] = "USER";
})(FeatureFlagScope || (exports.FeatureFlagScope = FeatureFlagScope = {}));
var LicenseType;
(function (LicenseType) {
    LicenseType["CLOUD"] = "CLOUD";
    LicenseType["OFFLINE"] = "OFFLINE";
    LicenseType["FLOATING"] = "FLOATING";
    LicenseType["TRIAL"] = "TRIAL";
    LicenseType["ACADEMIC"] = "ACADEMIC";
})(LicenseType || (exports.LicenseType = LicenseType = {}));
