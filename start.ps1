# ExamSlotAI - One-click startup script
# Smart Exam Slot Management System
# Math Club Hackathon - Infinite Innovators

Write-Host ""
Write-Host "  =============================================" -ForegroundColor Cyan
Write-Host "   ExamSlotAI - Smart Exam Slot Management" -ForegroundColor Cyan
Write-Host "   Welsh-Powell Graph Coloring Algorithm" -ForegroundColor Cyan
Write-Host "  =============================================" -ForegroundColor Cyan
Write-Host ""

$root = $PSScriptRoot

# Start Python Backend
Write-Host "[1/3] Starting Python FastAPI Solver (port 8000)..." -ForegroundColor Green
Start-Process -FilePath "python" -ArgumentList "main.py" -WorkingDirectory "$root\backend" -WindowStyle Minimized

Start-Sleep -Seconds 2

# Start Node.js Gateway
Write-Host "[2/3] Starting Node.js API Gateway (port 3001)..." -ForegroundColor Green
Start-Process -FilePath "node" -ArgumentList "index.js" -WorkingDirectory "$root\server" -WindowStyle Minimized

Start-Sleep -Seconds 2

# Start React Frontend
Write-Host "[3/3] Starting React Dashboard (port 5173)..." -ForegroundColor Green
Start-Process -FilePath "cmd.exe" -ArgumentList "/c npm run dev" -WorkingDirectory "$root\frontend" -WindowStyle Minimized

Start-Sleep -Seconds 3

Write-Host ""
Write-Host "  All services initiated!" -ForegroundColor Green
Write-Host ""
Write-Host "  Dashboard   -> http://localhost:5173" -ForegroundColor Cyan
Write-Host "  API Gateway -> http://localhost:3001" -ForegroundColor Cyan
Write-Host "  Python API  -> http://localhost:8000" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Tip: Click the Offline Mock button on the dashboard for an instant demo!" -ForegroundColor Yellow
Write-Host ""

# Open browser
Start-Sleep -Seconds 1
Start-Process "http://localhost:5173"

