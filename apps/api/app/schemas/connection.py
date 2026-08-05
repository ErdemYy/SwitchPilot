from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field


class ConnectionResponse(BaseModel):
    id: str
    device_id: str
    protocol: str
    port: int
    timeout_sec: int = 15
    retries: int = 3
    keep_alive: bool = True
    compression: bool = True
    bastion_id: Optional[str] = None
    status: str = "IDLE"
    last_connected_at: Optional[str] = None
    latency_ms: Optional[int] = None
    last_error_type: Optional[str] = None
    last_error_message: Optional[str] = None


class VaultSecretRequest(BaseModel):
    name: str
    type: str = "PASSWORD"
    payload: Dict[str, Any]


class VaultSecretResponse(BaseModel):
    id: str
    name: str
    type: str
    vault_engine_ref: Optional[str] = None
    created_at: str


class BastionHostRequest(BaseModel):
    name: str
    hostname: str
    port: int = 22
    username: str


class BastionHostResponse(BaseModel):
    id: str
    name: str
    hostname: str
    port: int
    username: str
    created_at: str


class TestConnectionRequest(BaseModel):
    target_ip: str
    protocol: str = "SSH"
    port: int = 22
    secret_id: Optional[str] = None


class TestConnectionStep(BaseModel):
    name: str
    status: str


class TestConnectionResponse(BaseModel):
    state: str
    target_host: str
    protocol: str
    port: int
    latency_ms: Optional[int] = None
    error_message: Optional[str] = None
    steps: List[TestConnectionStep]
