@echo off
if not exist node_modules (
  echo Installing dependencies...
  call npm install
)
echo Starting Baidyanath College of Medical Science frontend...
call npm run dev
