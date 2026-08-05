Write-Host "🚀 Initializing SwitchPilot Enterprise Monorepo Environment..." -ForegroundColor Cyan

if (Get-Command pnpm -ErrorAction SilentlyContinue) {
    Write-Host "📦 Installing Node dependencies via pnpm..." -ForegroundColor Green
    pnpm install
} else {
    Write-Host "⚠️ pnpm is not installed. Please install pnpm >= 9.0.0" -ForegroundColor Yellow
}

if (Test-Path "apps/api") {
    Write-Host "🐍 Setting up Python environment..." -ForegroundColor Green
    Set-Location apps/api
    if (Get-Command poetry -ErrorAction SilentlyContinue) {
        poetry install
    }
    Set-Location ..\..
}

Write-Host "✅ SwitchPilot Monorepo Setup Completed Successfully!" -ForegroundColor Green
