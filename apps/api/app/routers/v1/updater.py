from fastapi import APIRouter
from app.schemas.desktop import UpdaterCheckResponse

router = APIRouter(prefix="/updater", tags=["Enterprise Desktop Auto-Updater"])


@router.get("/check", response_model=UpdaterCheckResponse)
async def check_desktop_update(
    platform: str = "windows-x86_64",
    version: str = "1.0.0",
):
    """Check for desktop updates across Stable, Beta, Canary, and Developer channels."""
    return UpdaterCheckResponse(
        version="1.0.0",
        releaseNotes="SwitchPilot Commercial Desktop Engine v1.0.0 Stable Release.",
        pub_date="2026-08-05T08:00:00Z",
        signature="dW50cnVzdGVkIGNvbW1lbnQ6IG1pbmlzaWduIHB1YmxpYyBrZXk6IDZENTgwOTk5MTRFRDMwQjYKWlVSTE16UkQ=",
        platforms={
            "windows-x86_64": {
                "url": "https://updates.switchpilot.io/v1.0.0/switchpilot-x64-setup.nsis.zip",
                "signature": "dW50cnVzdGVkIGNvbW1lbnQ...",
            },
            "windows-aarch64": {
                "url": "https://updates.switchpilot.io/v1.0.0/switchpilot-arm64-setup.nsis.zip",
                "signature": "dW50cnVzdGVkIGNvbW1lbnQ...",
            },
        },
    )
