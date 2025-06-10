; POE Popup Helper - Main Script
; https://beachys-poe-helper.com
; 
; Architecture Overview:
; - Main script (this file): Entry point, hotkey registration
; - config.ahk: Configuration loading and management
; - http.ahk: HTTP requests and API communication
; - popup.ahk: Popup window creation and management
; - cache.ahk: Content caching for performance
;
; Usage:
; 1. Download poe-popup-config.json from https://beachys-poe-helper.com/popup-config
; 2. Place config file in same directory as this script
; 3. Run script, hotkeys will be automatically registered
; 4. Press configured hotkeys to display popups

#NoEnv
#SingleInstance Force
#Persistent
SendMode Input
SetWorkingDir %A_ScriptDir%

; Global variables
global ConfigFile := "poe-popup-config.json"
global ApiBaseUrl := "https://beachys-poe-helper.com/api/popup"
global AppTitle := "POE Popup Helper"
global PopupWindows := {}
global Config := {}
global Cache := {}

; Include modules
#Include config.ahk
#Include http.ahk
#Include popup.ahk
#Include cache.ahk

; Initialize application
Init()

Init() {
    ; Load configuration
    if (!LoadConfig()) {
        MsgBox, 16, %AppTitle%, Could not load configuration file: %ConfigFile%`n`nPlease download the configuration from:`nhttps://beachys-poe-helper.com/popup-config
        ExitApp
    }
    
    ; Initialize cache
    InitCache()
    
    ; Register hotkeys based on configuration
    RegisterHotkeys()
    
    ; Show tray notification
    TrayTip, %AppTitle%, Popup helper loaded successfully!`nHotkeys registered for %ConfiguredPopupCount% popups, 3, 1
    
    ; Preload content for enabled popups
    PreloadContent()
}

RegisterHotkeys() {
    global Config
    
    for index, popup in Config.popups {
        if (popup.enabled) {
            ; Convert hotkey format (e.g., "Ctrl+1" to "^1")
            ahkHotkey := ConvertHotkey(popup.hotkey)
            
            ; Create hotkey function dynamically
            Hotkey, %ahkHotkey%, ShowPopup%index%, On
            
            ; Store popup index for hotkey callback
            PopupIndexMap[ahkHotkey] := index
        }
    }
}

ConvertHotkey(webHotkey) {
    ; Convert web format hotkeys to AHK format
    ; Ctrl+1 -> ^1, Alt+Q -> !q, F1 -> F1, etc.
    
    result := webHotkey
    result := StrReplace(result, "Ctrl+", "^")
    result := StrReplace(result, "Alt+", "!")
    result := StrReplace(result, "Shift+", "+")
    result := StrReplace(result, "Win+", "#")
    
    return result
}

; Dynamic hotkey handlers (generated based on config)
ShowPopup1:
    ShowPopupById(1)
return

ShowPopup2:
    ShowPopupById(2)
return

ShowPopup3:
    ShowPopupById(3)
return

ShowPopup4:
    ShowPopupById(4)
return

ShowPopup5:
    ShowPopupById(5)
return

ShowPopupById(index) {
    global Config, PopupWindows
    
    if (index > Config.popups.Length() || !Config.popups[index].enabled)
        return
        
    popup := Config.popups[index]
    
    ; Check if popup already exists and toggle visibility
    if (PopupWindows.HasKey(popup.id)) {
        TogglePopup(popup.id)
    } else {
        CreatePopup(popup)
    }
}

PreloadContent() {
    global Config
    
    ; Preload content for all enabled popups to improve performance
    for index, popup in Config.popups {
        if (popup.enabled) {
            GetPopupContent(popup.module, popup.category)
        }
    }
}

; Cleanup on exit
OnExit("Cleanup")

Cleanup() {
    ; Close all popup windows
    for id, window in PopupWindows {
        ClosePopup(id)
    }
    
    ; Save cache to disk
    SaveCache()
}

; Hotkey to reload configuration
^!r::
    MsgBox, 4, %AppTitle%, Reload configuration and restart hotkeys?
    IfMsgBox Yes
    {
        Reload
    }
return

; Hotkey to show help
^!h::
    ShowHelp()
return

ShowHelp() {
    global Config, AppTitle
    
    helpText := AppTitle . " - Active Hotkeys:`n`n"
    
    for index, popup in Config.popups {
        if (popup.enabled) {
            helpText .= popup.hotkey . " - " . popup.name . "`n"
        }
    }
    
    helpText .= "`nCtrl+Alt+R - Reload configuration"
    helpText .= "`nCtrl+Alt+H - Show this help"
    
    MsgBox, 0, %AppTitle% - Help, %helpText%
}