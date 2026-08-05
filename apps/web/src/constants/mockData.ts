import { DeviceCardData } from '../components/device/DeviceCard';

export interface AlertItem {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  device: string;
  vendor: string;
  message: string;
  time: string;
}

export interface TaskItem {
  id: string;
  name: string;
  targetCount: number;
  status: 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED';
  progress: number;
  startTime: string;
}

export interface AuditItem {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
}

export interface RollbackItem {
  id: string;
  device: string;
  vendor: string;
  previousVersion: string;
  restoredBy: string;
  timestamp: string;
}

export const MOCK_DEVICES: DeviceCardData[] = [
  {
    id: 'dev-1',
    hostname: 'sw-core-fra-01',
    ipAddress: '10.240.1.1',
    vendor: 'CISCO',
    model: 'Catalyst 9500-48Y4C',
    osVersion: 'Cisco IOS-XE 17.09.04',
    status: 'online',
    healthPercent: 98,
    uptime: '142 days, 12 hrs',
  },
  {
    id: 'dev-2',
    hostname: 'sw-dist-fra-02',
    ipAddress: '10.240.1.15',
    vendor: 'ARUBA',
    model: 'CX 8360-32Y4C',
    osVersion: 'ArubaOS-CX 10.12.1000',
    status: 'online',
    healthPercent: 94,
    uptime: '89 days, 04 hrs',
  },
  {
    id: 'dev-3',
    hostname: 'rt-edge-lon-01',
    ipAddress: '192.168.100.1',
    vendor: 'JUNIPER',
    model: 'MX240 3D Router',
    osVersion: 'Junos OS 22.4R1.10',
    status: 'online',
    healthPercent: 99,
    uptime: '310 days, 18 hrs',
  },
  {
    id: 'dev-4',
    hostname: 'sw-access-sing-04',
    ipAddress: '172.16.50.4',
    vendor: 'HUAWEI',
    model: 'CloudEngine S5732-H',
    osVersion: 'VRP v8.210',
    status: 'warning',
    healthPercent: 62,
    uptime: '12 days, 01 hr',
  },
  {
    id: 'dev-5',
    hostname: 'gw-branch-tky-01',
    ipAddress: '10.10.88.254',
    vendor: 'MIKROTIK',
    model: 'CCR2116-12G-4S+',
    osVersion: 'RouterOS v7.14.2',
    status: 'syncing',
    healthPercent: 88,
    uptime: '45 days, 09 hrs',
  },
  {
    id: 'dev-6',
    hostname: 'sw-poe-branch-03',
    ipAddress: '10.10.88.10',
    vendor: 'UBIQUITI',
    model: 'UniFi Switch Enterprise 48 PoE',
    osVersion: 'UniFi OS v3.2.12',
    status: 'online',
    healthPercent: 91,
    uptime: '67 days, 14 hrs',
  },
  {
    id: 'dev-7',
    hostname: 'sw-dc-hpe-01',
    ipAddress: '10.200.4.5',
    vendor: 'HP',
    model: 'ProCurve 2920-48G',
    osVersion: 'WB.16.10.0019',
    status: 'offline',
    healthPercent: 0,
    uptime: 'Unreachable',
  },
];

export const MOCK_ALERTS: AlertItem[] = [
  {
    id: 'alt-101',
    severity: 'critical',
    device: 'sw-dc-hpe-01',
    vendor: 'HP',
    message: 'SSH Connection Timed Out. Device un-pingable.',
    time: '4 mins ago',
  },
  {
    id: 'alt-102',
    severity: 'warning',
    device: 'sw-access-sing-04',
    vendor: 'HUAWEI',
    message: 'CPU Utilization exceeded threshold (89%).',
    time: '18 mins ago',
  },
  {
    id: 'alt-103',
    severity: 'info',
    device: 'sw-core-fra-01',
    vendor: 'CISCO',
    message: 'Running configuration backup completed successfully.',
    time: '1 hr ago',
  },
];

export const MOCK_TASKS: TaskItem[] = [
  {
    id: 'tsk-901',
    name: 'Scheduled Running Config Backup',
    targetCount: 142,
    status: 'RUNNING',
    progress: 74,
    startTime: '08:30 AM',
  },
  {
    id: 'tsk-902',
    name: 'Global VLAN 100 Sync (Guest Network)',
    targetCount: 38,
    status: 'PENDING',
    progress: 0,
    startTime: 'Scheduled 09:00 AM',
  },
  {
    id: 'tsk-903',
    name: 'Cisco IOS-XE Security Patch Push',
    targetCount: 12,
    status: 'SUCCESS',
    progress: 100,
    startTime: 'Yesterday',
  },
];

export const MOCK_AUDITS: AuditItem[] = [
  {
    id: 'aud-301',
    user: 'Erdem (Admin)',
    action: 'CONFIG_APPLY',
    target: 'sw-core-fra-01',
    timestamp: '10 mins ago',
  },
  {
    id: 'aud-302',
    user: 'Sarah (Network Eng)',
    action: 'PORT_DISABLE',
    target: 'sw-poe-branch-03 (Port 12)',
    timestamp: '42 mins ago',
  },
  {
    id: 'aud-303',
    user: 'System Queue',
    action: 'AUTO_BACKUP',
    target: 'rt-edge-lon-01',
    timestamp: '1 hr ago',
  },
];

export const MOCK_ROLLBACKS: RollbackItem[] = [
  {
    id: 'rol-501',
    device: 'sw-dist-fra-02',
    vendor: 'ARUBA',
    previousVersion: 'cfg-rev-418',
    restoredBy: 'Erdem Architect',
    timestamp: 'Yesterday 14:22',
  },
  {
    id: 'rol-502',
    device: 'gw-branch-tky-01',
    vendor: 'MIKROTIK',
    previousVersion: 'cfg-rev-209',
    restoredBy: 'Sarah (Engineer)',
    timestamp: '3 days ago',
  },
];
