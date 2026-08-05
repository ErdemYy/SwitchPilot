from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field


class DeviceLocationSchema(BaseModel):
    site_name: str
    building: Optional[str] = None
    floor: Optional[str] = None
    rack: Optional[str] = None
    gps_coords: Optional[str] = None


class DeviceCredentialSchema(BaseModel):
    name: str
    username: str
    ssh_key_path: Optional[str] = None


class DeviceConnectionSchema(BaseModel):
    primary_protocol: str = "SSH"
    port: int = 22
    connect_timeout_sec: int = 15
    read_timeout_sec: int = 30


class DeviceHealthSchema(BaseModel):
    cpu_usage_pct: float = 0.0
    mem_usage_pct: float = 0.0
    temp_celsius: Optional[float] = None
    fan_status: str = "OK"
    psu_status: str = "OK"


class DeviceCapabilitySchema(BaseModel):
    supports_vlan_management: bool = True
    supports_port_security: bool = True
    supports_firmware_upgrade: bool = True
    supports_diff_backup: bool = True
    supports_netconf: bool = False
    supports_restconf: bool = False


class DeviceInterfaceSchema(BaseModel):
    id: Optional[str] = None
    name: str
    description: Optional[str] = None
    speed: str = "1G"
    admin_status: str = "UP"
    oper_status: str = "UP"
    mode: str = "ACCESS"
    vlan_id: Optional[int] = None
    poe_enabled: bool = False


class DeviceSnapshotSchema(BaseModel):
    id: str
    version_label: str
    checksum_sha: str
    created_at: str


class DeviceResponse(BaseModel):
    id: str
    organization_id: str
    hostname: str
    management_ip: str
    vendor: str
    model: str
    os_version: str
    status: str
    group_id: Optional[str] = None
    group_name: Optional[str] = None
    location: Optional[DeviceLocationSchema] = None
    connection: Optional[DeviceConnectionSchema] = None
    health: Optional[DeviceHealthSchema] = None
    capability: Optional[DeviceCapabilitySchema] = None
    interfaces: List[DeviceInterfaceSchema] = []
    tags: List[Dict[str, str]] = []
    created_at: str
    updated_at: str


class CreateDeviceRequest(BaseModel):
    hostname: str
    management_ip: str
    vendor: str
    model: str
    os_version: str
    group_id: Optional[str] = None
    location: Optional[DeviceLocationSchema] = None
    connection: Optional[DeviceConnectionSchema] = None


class BulkTagRequest(BaseModel):
    device_ids: List[str]
    tags: List[Dict[str, str]]


class DeviceGroupTreeNode(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    children: List['DeviceGroupTreeNode'] = []
    device_count: int = 0


class ImportPreviewItem(BaseModel):
    hostname: str
    management_ip: str
    vendor: str
    model: str
    has_conflict: bool = False
    conflict_reason: Optional[str] = None


class ImportPreviewResponse(BaseModel):
    valid_count: int
    conflict_count: int
    items: List[ImportPreviewItem]
