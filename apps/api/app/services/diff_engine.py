import difflib
from typing import Dict, Any, List


class DiffEngine:
    """
    Configuration Diff Engine.
    Generates side-by-side and unified diffs comparing current vs desired configuration state.
    """

    def generate_diff(self, current_config: str, desired_config: str) -> Dict[str, Any]:
        curr_lines = current_config.splitlines()
        des_lines = desired_config.splitlines()

        diff_gen = difflib.unified_diff(
            curr_lines, des_lines, fromfile="current.cfg", tofile="desired.cfg", lineterm=""
        )
        unified_str = "\n".join(diff_gen)

        return {
            "unifiedDiff": unified_str or "No configuration changes detected.",
            "currentLines": curr_lines,
            "desiredLines": des_lines,
        }


diff_engine = DiffEngine()
