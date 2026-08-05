"use strict";
// ---------------------------------------------------------------------------
// Enterprise Monitoring, Telemetry & Event Platform — Domain Contracts
// ---------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEventCategory = exports.AlertStatus = exports.AlertType = exports.AlertSeverity = exports.MetricType = exports.TelemetrySource = void 0;
// ── Telemetry Sources ───────────────────────────────────────────────────────
var TelemetrySource;
(function (TelemetrySource) {
    TelemetrySource["SNMP_V2"] = "SNMP_V2";
    TelemetrySource["SNMP_V3"] = "SNMP_V3";
    TelemetrySource["STREAMING_TELEMETRY"] = "STREAMING_TELEMETRY";
    TelemetrySource["GNMI"] = "GNMI";
    TelemetrySource["SYSLOG"] = "SYSLOG";
    TelemetrySource["REST_API"] = "REST_API";
    TelemetrySource["NETCONF_NOTIFICATION"] = "NETCONF_NOTIFICATION";
    TelemetrySource["WEBHOOK"] = "WEBHOOK";
    TelemetrySource["CUSTOM_COLLECTOR"] = "CUSTOM_COLLECTOR";
})(TelemetrySource || (exports.TelemetrySource = TelemetrySource = {}));
// ── Metric Types ────────────────────────────────────────────────────────────
var MetricType;
(function (MetricType) {
    MetricType["CPU_USAGE"] = "CPU_USAGE";
    MetricType["MEMORY_USAGE"] = "MEMORY_USAGE";
    MetricType["TEMPERATURE"] = "TEMPERATURE";
    MetricType["POWER_SUPPLY"] = "POWER_SUPPLY";
    MetricType["FAN_STATUS"] = "FAN_STATUS";
    MetricType["STORAGE"] = "STORAGE";
    MetricType["LATENCY"] = "LATENCY";
    MetricType["PACKET_LOSS"] = "PACKET_LOSS";
    MetricType["JITTER"] = "JITTER";
    MetricType["UPTIME"] = "UPTIME";
    MetricType["INTERFACE_UTILIZATION"] = "INTERFACE_UTILIZATION";
    MetricType["CRC_ERRORS"] = "CRC_ERRORS";
    MetricType["DROPPED_PACKETS"] = "DROPPED_PACKETS";
    MetricType["BANDWIDTH"] = "BANDWIDTH";
    MetricType["POE_USAGE"] = "POE_USAGE";
    MetricType["MAC_TABLE_SIZE"] = "MAC_TABLE_SIZE";
    MetricType["ARP_TABLE_SIZE"] = "ARP_TABLE_SIZE";
    MetricType["ROUTING_TABLE_SIZE"] = "ROUTING_TABLE_SIZE";
    MetricType["STP_STATE"] = "STP_STATE";
})(MetricType || (exports.MetricType = MetricType = {}));
// ── Alert Severity ──────────────────────────────────────────────────────────
var AlertSeverity;
(function (AlertSeverity) {
    AlertSeverity["INFO"] = "INFO";
    AlertSeverity["WARNING"] = "WARNING";
    AlertSeverity["MINOR"] = "MINOR";
    AlertSeverity["MAJOR"] = "MAJOR";
    AlertSeverity["CRITICAL"] = "CRITICAL";
    AlertSeverity["EMERGENCY"] = "EMERGENCY";
})(AlertSeverity || (exports.AlertSeverity = AlertSeverity = {}));
var AlertType;
(function (AlertType) {
    AlertType["THRESHOLD"] = "THRESHOLD";
    AlertType["RATE"] = "RATE";
    AlertType["ANOMALY"] = "ANOMALY";
    AlertType["MISSING_TELEMETRY"] = "MISSING_TELEMETRY";
    AlertType["DEVICE_DOWN"] = "DEVICE_DOWN";
    AlertType["INTERFACE_DOWN"] = "INTERFACE_DOWN";
    AlertType["CONFIG_DRIFT"] = "CONFIG_DRIFT";
    AlertType["AUTH_FAILURE"] = "AUTH_FAILURE";
    AlertType["EXECUTION_FAILURE"] = "EXECUTION_FAILURE";
    AlertType["WORKFLOW_FAILURE"] = "WORKFLOW_FAILURE";
})(AlertType || (exports.AlertType = AlertType = {}));
var AlertStatus;
(function (AlertStatus) {
    AlertStatus["ACTIVE"] = "ACTIVE";
    AlertStatus["ACKNOWLEDGED"] = "ACKNOWLEDGED";
    AlertStatus["RESOLVED"] = "RESOLVED";
    AlertStatus["SUPPRESSED"] = "SUPPRESSED";
})(AlertStatus || (exports.AlertStatus = AlertStatus = {}));
// ── Domain Event Category Enum (mirrored from backend) ──────────────────────
var DomainEventCategory;
(function (DomainEventCategory) {
    DomainEventCategory["DEVICE"] = "DEVICE";
    DomainEventCategory["EXECUTION"] = "EXECUTION";
    DomainEventCategory["WORKFLOW"] = "WORKFLOW";
    DomainEventCategory["AI"] = "AI";
    DomainEventCategory["TELEMETRY"] = "TELEMETRY";
    DomainEventCategory["ALERT"] = "ALERT";
    DomainEventCategory["AUDIT"] = "AUDIT";
    DomainEventCategory["NOTIFICATION"] = "NOTIFICATION";
    DomainEventCategory["TOPOLOGY"] = "TOPOLOGY";
    DomainEventCategory["POLICY"] = "POLICY";
})(DomainEventCategory || (exports.DomainEventCategory = DomainEventCategory = {}));
