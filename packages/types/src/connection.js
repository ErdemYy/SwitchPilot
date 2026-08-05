"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestConnectionState = exports.CredentialType = exports.ConnectionErrorType = exports.ConnectionProtocol = void 0;
var ConnectionProtocol;
(function (ConnectionProtocol) {
    ConnectionProtocol["SSH"] = "SSH";
    ConnectionProtocol["TELNET"] = "TELNET";
    ConnectionProtocol["NETCONF"] = "NETCONF";
    ConnectionProtocol["RESTCONF"] = "RESTCONF";
    ConnectionProtocol["SNMP_V2C"] = "SNMP_V2C";
    ConnectionProtocol["SNMP_V3"] = "SNMP_V3";
    ConnectionProtocol["HTTPS_API"] = "HTTPS_API";
    ConnectionProtocol["HTTP_API"] = "HTTP_API";
    ConnectionProtocol["GRPC"] = "GRPC";
})(ConnectionProtocol || (exports.ConnectionProtocol = ConnectionProtocol = {}));
var ConnectionErrorType;
(function (ConnectionErrorType) {
    ConnectionErrorType["AUTH_FAILED"] = "AUTH_FAILED";
    ConnectionErrorType["HOST_UNREACHABLE"] = "HOST_UNREACHABLE";
    ConnectionErrorType["DNS_FAILURE"] = "DNS_FAILURE";
    ConnectionErrorType["CONNECTION_REFUSED"] = "CONNECTION_REFUSED";
    ConnectionErrorType["TIMEOUT"] = "TIMEOUT";
    ConnectionErrorType["PERMISSION_DENIED"] = "PERMISSION_DENIED";
    ConnectionErrorType["PROTOCOL_UNSUPPORTED"] = "PROTOCOL_UNSUPPORTED";
    ConnectionErrorType["CERTIFICATE_ERROR"] = "CERTIFICATE_ERROR";
    ConnectionErrorType["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
})(ConnectionErrorType || (exports.ConnectionErrorType = ConnectionErrorType = {}));
var CredentialType;
(function (CredentialType) {
    CredentialType["PASSWORD"] = "PASSWORD";
    CredentialType["SSH_KEY"] = "SSH_KEY";
    CredentialType["API_TOKEN"] = "API_TOKEN";
    CredentialType["OAUTH_TOKEN"] = "OAUTH_TOKEN";
    CredentialType["SNMP_COMMUNITY"] = "SNMP_COMMUNITY";
    CredentialType["SNMP_V3_USER"] = "SNMP_V3_USER";
    CredentialType["CLIENT_CERTIFICATE"] = "CLIENT_CERTIFICATE";
})(CredentialType || (exports.CredentialType = CredentialType = {}));
var TestConnectionState;
(function (TestConnectionState) {
    TestConnectionState["QUEUED"] = "QUEUED";
    TestConnectionState["CONNECTING"] = "CONNECTING";
    TestConnectionState["AUTHENTICATING"] = "AUTHENTICATING";
    TestConnectionState["NEGOTIATING"] = "NEGOTIATING";
    TestConnectionState["SUCCESS"] = "SUCCESS";
    TestConnectionState["FAILED"] = "FAILED";
    TestConnectionState["TIMEOUT"] = "TIMEOUT";
    TestConnectionState["CANCELLED"] = "CANCELLED";
})(TestConnectionState || (exports.TestConnectionState = TestConnectionState = {}));
