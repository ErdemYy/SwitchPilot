# Contributing to SwitchPilot

Thank you for contributing to SwitchPilot enterprise multi-vendor network automation platform.

## 1. Development Workflow
1. **Branching**: Create feature branches off `main` using naming convention `feature/<short-desc>` or `fix/<short-desc>`.
2. **Quality Checks**: Run `pnpm lint`, `pnpm typecheck`, and `pnpm format:check` prior to creating pull requests.
3. **Commit Standard**: Ensure commit messages adhere to Conventional Commits (enforced by Husky commit-msg hook).

## 2. Adding Support for New Hardware Vendors
1. Define any new vendor-specific hardware metadata in `packages/types/src/vendor.ts`.
2. Create a new vendor driver module in `apps/api/app/vendors/<vendor_name>/`.
3. Implement the `BaseVendorDriver` contract defined in `apps/api/app/vendors/base.py`.
4. Register the driver in the vendor registry.
