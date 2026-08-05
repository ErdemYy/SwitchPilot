"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionProtocol = exports.NetworkVendor = void 0;
/**
 * Supported Network Hardware Vendors in SwitchPilot.
 * Architecture allows seamless extension for future vendors.
 */
var NetworkVendor;
(function (NetworkVendor) {
    NetworkVendor["CISCO"] = "CISCO";
    NetworkVendor["ARUBA"] = "ARUBA";
    NetworkVendor["JUNIPER"] = "JUNIPER";
    NetworkVendor["HUAWEI"] = "HUAWEI";
    NetworkVendor["MIKROTIK"] = "MIKROTIK";
    NetworkVendor["UBIQUITI"] = "UBIQUITI";
    NetworkVendor["HP"] = "HP";
    NetworkVendor["GENERIC"] = "GENERIC";
})(NetworkVendor || (exports.NetworkVendor = NetworkVendor = {}));
var ConnectionProtocol;
(function (ConnectionProtocol) {
    ConnectionProtocol["SSH"] = "SSH";
    ConnectionProtocol["TELNET"] = "TELNET";
    ConnectionProtocol["NETCONF"] = "NETCONF";
    ConnectionProtocol["RESTCONF"] = "RESTCONF";
    ConnectionProtocol["SNMP_V2C"] = "SNMP_V2C";
    ConnectionProtocol["SNMP_V3"] = "SNMP_V3";
    ConnectionProtocol["API"] = "API";
})(ConnectionProtocol || (exports.ConnectionProtocol = ConnectionProtocol = {}));
