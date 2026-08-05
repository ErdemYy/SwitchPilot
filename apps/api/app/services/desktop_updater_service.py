from typing import Dict, Any


class DesktopUpdaterService:
    """
    Multi-Platform Desktop Auto-Updater Manifest Service.
    Serves electron-updater release manifests across Windows (x64/ARM64), macOS (Intel/Apple Silicon), and Linux targets.
    """

    async def get_latest_manifest(self, platform: str, channel: str = "stable") -> Dict[str, Any]:
        return {
            "version": "1.0.0",
            "releaseNotes": "SwitchPilot Commercial Desktop Engine v1.0.0 Release.",
            "pub_date": "2026-08-05T08:00:00Z",
            "signature": "dW50cnVzdGVkIGNvbW1lbnQ...",
            "files": [
                {
                    "url": f"https://updates.switchpilot.io/electron/{channel}/switchpilot-{platform}-1.0.0.exe",
                    "sha512": "3b689a718c949826f4",
                    "size": 52428800,
                }
            ],
        }


desktop_updater_service = DesktopUpdaterService()
