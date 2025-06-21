%1 "C:\Windows\System32\mshta.exe" VBScript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/C %~s0 REM","","runas",1)(Window.Close) && EXIT /B
"C:\Windows\System32\reg.exe" ADD "HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Control\Session Manager\Memory Management" /v PagefileOnOsVolume /t REG_DWORD /d 0 /f
PAUSE