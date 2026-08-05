# SwitchPilot Coding Guidelines & Enterprise Standards

## 1. Principles
- **Clean Architecture & SOLID**: Every module has single responsibility; high-level domain rules never depend on low-level UI or driver details.
- **DRY (Don't Repeat Yourself)**: Shared types live in `@switchpilot/types`; shared UI primitives live in `@switchpilot/ui`.
- **TypeScript Strictness**: `"strict": true` enforced. `any` is strictly prohibited unless explicitly exempted for low-level dynamic parser edge cases.
- **No Hardcoded Constants**: Use environment variables or central config objects (`apps/web/src/config` and `apps/api/app/config/settings.py`).

---

## 2. Naming & Case Conventions
- **TypeScript / React**:
  - Components & Interfaces: `PascalCase` (`DeviceCard.tsx`, `NetworkDevice`)
  - Utilities & Hooks: `camelCase` (`useVendor.ts`, `formatIpAddress.ts`)
  - Enums: `PascalCase` with `UPPERCASE` values (`NetworkVendor.CISCO`)
- **Python / FastAPI**:
  - Modules & Functions: `snake_case` (`base_vendor_driver.py`, `get_running_config()`)
  - Classes: `PascalCase` (`BaseVendorDriver`, `Settings`)
  - Constants: `UPPERCASE_SNAKE` (`API_V1_STR`)

---

## 3. Imports & Aliases
- **Absolute Imports**: Always use root-relative path aliases (`@/components`, `@services`, `@switchpilot/types`) in TypeScript.
- **Import Ordering**:
  1. Core framework / standard library
  2. External dependencies
  3. Shared workspace packages (`@switchpilot/*`)
  4. Local module imports

---

## 4. Git & Commit Message Standards
Commit messages must follow **Conventional Commits**:
- `feat(vendor): add cisco ios-xe running config parser driver`
- `fix(web): resolve device table status badge alignment`
- `docs(arch): update folder structure documentation`
- `chore(deps): update pnpm workspace configuration`
