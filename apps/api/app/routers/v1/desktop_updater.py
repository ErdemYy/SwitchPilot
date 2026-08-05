from fastapi import APIRouter
from app.services.desktop_updater_service import desktop_updater_service

router = APIRouter(prefix="/desktop/updater", tags=["Electron Desktop Auto-Updater"])


@router.get("/manifest")
async def get_electron_update_manifest(
    platform: str = "win32",
    channel: str = "stable",
):
    """Retrieve electron-updater release manifest for Windows, macOS, or Linux targets."""
    return await desktop_updater_service.get_latest_manifest(platform, channel)
