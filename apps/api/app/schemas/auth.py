from typing import List, Optional
from pydantic import BaseModel, EmailStr, Field


class LoginRequest(BaseModel):
    email: EmailStr
    password: str
    remember_me: bool = False


class RegisterRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=12)
    full_name: str
    organization_name: str


class ForgotPasswordRequest(BaseModel):
    email: EmailStr


class ResetPasswordRequest(BaseModel):
    token: str
    new_password: str = Field(min_length=12)


class InviteUserRequest(BaseModel):
    email: EmailStr
    role_id: str


class AcceptInviteRequest(BaseModel):
    token: str
    password: str = Field(min_length=12)
    full_name: str


class AuthUserResponse(BaseModel):
    id: str
    email: str
    full_name: str
    avatar_url: Optional[str] = None
    organization_id: str
    organization_name: Optional[str] = None
    roles: List[str]
    permissions: List[str]
    is_email_verified: bool
    is_active: bool


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in: int
    user: AuthUserResponse
