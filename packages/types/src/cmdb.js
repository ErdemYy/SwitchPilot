"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetLifecycleState = void 0;
var AssetLifecycleState;
(function (AssetLifecycleState) {
    AssetLifecycleState["PLANNED"] = "PLANNED";
    AssetLifecycleState["ORDERED"] = "ORDERED";
    AssetLifecycleState["IN_TRANSIT"] = "IN_TRANSIT";
    AssetLifecycleState["INSTALLED"] = "INSTALLED";
    AssetLifecycleState["PRODUCTION"] = "PRODUCTION";
    AssetLifecycleState["MAINTENANCE"] = "MAINTENANCE";
    AssetLifecycleState["DEPRECATED"] = "DEPRECATED";
    AssetLifecycleState["RETIRED"] = "RETIRED";
    AssetLifecycleState["DISPOSED"] = "DISPOSED";
})(AssetLifecycleState || (exports.AssetLifecycleState = AssetLifecycleState = {}));
