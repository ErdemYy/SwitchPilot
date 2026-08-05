"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncStatus = exports.ReleaseChannel = exports.MfaType = exports.AuthProviderType = void 0;
var AuthProviderType;
(function (AuthProviderType) {
    AuthProviderType["LOCAL"] = "LOCAL";
    AuthProviderType["OIDC"] = "OIDC";
    AuthProviderType["OAUTH2"] = "OAUTH2";
    AuthProviderType["AZURE_AD"] = "AZURE_AD";
    AuthProviderType["GOOGLE"] = "GOOGLE";
    AuthProviderType["GITHUB"] = "GITHUB";
    AuthProviderType["SAML2"] = "SAML2";
    AuthProviderType["LDAP"] = "LDAP";
    AuthProviderType["ACTIVE_DIRECTORY"] = "ACTIVE_DIRECTORY";
})(AuthProviderType || (exports.AuthProviderType = AuthProviderType = {}));
var MfaType;
(function (MfaType) {
    MfaType["TOTP"] = "TOTP";
    MfaType["HARDWARE_KEY"] = "HARDWARE_KEY";
    MfaType["RECOVERY_CODE"] = "RECOVERY_CODE";
})(MfaType || (exports.MfaType = MfaType = {}));
var ReleaseChannel;
(function (ReleaseChannel) {
    ReleaseChannel["STABLE"] = "STABLE";
    ReleaseChannel["BETA"] = "BETA";
    ReleaseChannel["CANARY"] = "CANARY";
    ReleaseChannel["DEVELOPER"] = "DEVELOPER";
})(ReleaseChannel || (exports.ReleaseChannel = ReleaseChannel = {}));
var SyncStatus;
(function (SyncStatus) {
    SyncStatus["IDLE"] = "IDLE";
    SyncStatus["SYNCING"] = "SYNCING";
    SyncStatus["CONFLICT"] = "CONFLICT";
    SyncStatus["ERROR"] = "ERROR";
})(SyncStatus || (exports.SyncStatus = SyncStatus = {}));
