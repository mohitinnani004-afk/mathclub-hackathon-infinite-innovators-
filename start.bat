@echo off
echo =============================================
echo   ExamSlotAI - Smart Exam Slot Management
echo   Starting all services...
echo =============================================
echo.

echo [1/3] Starting Python FastAPI Backend (port 8000)...
start "Python FastAPI Solver (8000)" /min cmd /c "cd /d "%~dp0backend" && python main.py"
timeout /t 2 /nobreak >nul

echo [2/3] Starting Node.js API Gateway (port 3001)...
start "Node.js API Gateway (3001)" /min cmd /c "cd /d "%~dp0server" && node index.js"
timeout /t 2 /nobreak >nul

echo [3/3] Starting React Dashboard (port 5173)...
start "React Dashboard (5173)" /min cmd /c "cd /d "%~dp0frontend" && npm run dev"
timeout /t 3 /nobreak >nul

echo.
echo All services started!
echo   Dashboard:   http://localhost:5173
echo   API Gateway: http://localhost:3001
echo   Python API:  http://localhost:8000
echo.

start http://localhost:5173
