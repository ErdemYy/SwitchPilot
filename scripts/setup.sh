#!/usr/bin/env bash
set -e

echo "🚀 Initializing SwitchPilot Enterprise Monorepo Environment..."

# Install Node dependencies
if command -v pnpm &> /dev/null; then
  echo "📦 Installing Node dependencies via pnpm..."
  pnpm install
else
  echo "⚠️ pnpm is not installed. Please install pnpm >= 9.0.0"
fi

# Setup Python environment for API
if [ -d "apps/api" ]; then
  echo "🐍 Setting up Python environment..."
  cd apps/api
  if command -v poetry &> /dev/null; then
    poetry install
  else
    echo "⚠️ Poetry not found. Installing requirements via pip..."
    pip install -r requirements.txt || true
  fi
  cd ../..
fi

# Initialize Git Hooks
if [ -d ".husky" ]; then
  echo "🐶 Setting up Husky git hooks..."
  pnpm prepare || true
fi

echo "✅ SwitchPilot Monorepo Setup Completed Successfully!"
