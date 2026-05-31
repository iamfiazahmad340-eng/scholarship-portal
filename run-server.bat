@echo off
title Scholarship Portal Server Launcher
echo --------------------------------------------------
echo [⚡] INITIALIZING SCHOLARSHIP PORTAL BACKEND...
echo --------------------------------------------------
echo.
echo [1/2] Checking local Node engine configuration...
set PATH=%APPDATA%\npm;C:\Program Files\nodejs\;%PATH%
echo [OK] Paths successfully forced into runtime session.
echo.
echo [2/2] Launching backend application server...
node server.js
if %errorlevel% neq 0 (
    echo.
    echo [❌] ERROR: Could not trigger server.js.
    echo Please ensure Node.js is installed on this PC!
    pause
)