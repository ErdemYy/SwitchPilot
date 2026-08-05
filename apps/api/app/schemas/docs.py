from typing import List, Optional, Dict, Any
from pydantic import BaseModel


class DocsSearchResponse(BaseModel):
    query: str
    results: List[Dict[str, Any]]
    total: int


class ErrorCodeResponse(BaseModel):
    error_codes: List[Dict[str, Any]]
