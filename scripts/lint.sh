#!/usr/bin/env bash
set -e

echo "🔍 Running Enterprise Lint & Type Checks across all packages and apps..."

pnpm lint
pnpm typecheck
pnpm format:check

echo "✅ All code quality checks passed!"
