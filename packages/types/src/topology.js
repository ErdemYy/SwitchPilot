"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutType = exports.TopologyLayer = exports.DiscoveryStatus = exports.DiscoveryMethod = void 0;
var DiscoveryMethod;
(function (DiscoveryMethod) {
    DiscoveryMethod["LLDP"] = "LLDP";
    DiscoveryMethod["CDP"] = "CDP";
    DiscoveryMethod["SNMP"] = "SNMP";
    DiscoveryMethod["NETCONF"] = "NETCONF";
    DiscoveryMethod["RESTCONF"] = "RESTCONF";
    DiscoveryMethod["REST_API"] = "REST_API";
    DiscoveryMethod["SSH_DISCOVERY"] = "SSH_DISCOVERY";
    DiscoveryMethod["ARP_TABLES"] = "ARP_TABLES";
    DiscoveryMethod["MAC_TABLES"] = "MAC_TABLES";
    DiscoveryMethod["ROUTING_TABLES"] = "ROUTING_TABLES";
    DiscoveryMethod["STREAMING_TELEMETRY"] = "STREAMING_TELEMETRY";
})(DiscoveryMethod || (exports.DiscoveryMethod = DiscoveryMethod = {}));
var DiscoveryStatus;
(function (DiscoveryStatus) {
    DiscoveryStatus["QUEUED"] = "QUEUED";
    DiscoveryStatus["SCANNING_SEEDS"] = "SCANNING_SEEDS";
    DiscoveryStatus["DISCOVERING_NEIGHBORS"] = "DISCOVERING_NEIGHBORS";
    DiscoveryStatus["FINGERPRINTING"] = "FINGERPRINTING";
    DiscoveryStatus["SYNCHRONIZING_INVENTORY"] = "SYNCHRONIZING_INVENTORY";
    DiscoveryStatus["COMPLETED"] = "COMPLETED";
    DiscoveryStatus["FAILED"] = "FAILED";
})(DiscoveryStatus || (exports.DiscoveryStatus = DiscoveryStatus = {}));
var TopologyLayer;
(function (TopologyLayer) {
    TopologyLayer["LAYER_1"] = "LAYER_1";
    TopologyLayer["LAYER_2"] = "LAYER_2";
    TopologyLayer["LAYER_3"] = "LAYER_3";
    TopologyLayer["VIRTUAL"] = "VIRTUAL";
})(TopologyLayer || (exports.TopologyLayer = TopologyLayer = {}));
var LayoutType;
(function (LayoutType) {
    LayoutType["FORCE_DIRECTED"] = "FORCE_DIRECTED";
    LayoutType["HIERARCHICAL"] = "HIERARCHICAL";
    LayoutType["RADIAL"] = "RADIAL";
    LayoutType["GRID"] = "GRID";
})(LayoutType || (exports.LayoutType = LayoutType = {}));
