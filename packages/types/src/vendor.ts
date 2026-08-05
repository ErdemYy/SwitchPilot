/**
 * Supported Network Hardware Vendors in SwitchPilot.
 * Architecture allows seamless extension for future vendors.
 */
export enum NetworkVendor {
  CISCO = 'CISCO',
  ARUBA = 'ARUBA',
  JUNIPER = 'JUNIPER',
  HUAWEI = 'HUAWEI',
  MIKROTIK = 'MIKROTIK',
  UBIQUITI = 'UBIQUITI',
  HP = 'HP',
  GENERIC = 'GENERIC',
}

export enum ConnectionProtocol {
  SSH = 'SSH',
  TELNET = 'TELNET',
  NETCONF = 'NETCONF',
  RESTCONF = 'RESTCONF',
  SNMP_V2C = 'SNMP_V2C',
  SNMP_V3 = 'SNMP_V3',
  API = 'API',
}

export interface VendorCapabilities {
  vendor: NetworkVendor;
  supportedProtocols: ConnectionProtocol[];
  supportsVlanManagement: boolean;
  supportsPortSecurity: boolean;
  supportsFirmwareUpgrade: boolean;
  supportsDiffBackup: boolean;
  driverClassPath: string;
}
