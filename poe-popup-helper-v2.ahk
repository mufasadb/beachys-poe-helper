; POE Popup Helper - Main Script (AutoHotkey v2)
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

#Requires AutoHotkey v2.0
#SingleInstance Force
SendMode("Input")
SetWorkingDir(A_ScriptDir)

; Global variables
ConfigFile := "poe-popup-config.json"
ApiBaseUrl := "https://beachys-poe-helper.com/api/popup"
AppTitle := "POE Popup Helper"
PopupWindows := Map()
Config := Map()
Cache := Map()

; Include modules (note: these would need to be converted to v2 as well)
; #Include config_v2.ahk
; #Include http_v2.ahk
; #Include popup_v2.ahk
; #Include cache_v2.ahk

; Initialize application
Init()

Init() {
    ; Load configuration
    if (!LoadConfig()) {
        MsgBox("Could not load configuration file: " . ConfigFile . "`n`nPlease download the configuration from:`nhttps://beachys-poe-helper.com/popup-config", AppTitle, "IconX")
        ExitApp()
    }
    
    ; Initialize cache
    InitCache()
    
    ; Register hotkeys based on configuration
    RegisterHotkeys()
    
    ; Show tray notification
    TrayTip("Popup helper loaded successfully!`nHotkeys registered", AppTitle)
    
    ; Preload content for enabled popups
    PreloadContent()
}

RegisterHotkeys() {
    try {
        if (!Config.Has("popups")) {
            MsgBox("No popups found in configuration", AppTitle, "IconX")
            return
        }
        
        popupArray := Config["popups"]
        for index, popup in popupArray {
            if (popup.Has("enabled") && popup["enabled"]) {
                ; Convert hotkey format (e.g., "Ctrl+1" to "^1")
                ahkHotkey := ConvertHotkey(popup["hotkey"])
                
                ; Create hotkey with closure to capture index
                Hotkey(ahkHotkey, (*) => ShowPopupById(index))
            }
        }
    } catch Error as e {
        MsgBox("Error registering hotkeys: " . e.message, AppTitle, "IconX")
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

ShowPopupById(index) {
    try {
        if (!Config.Has("popups")) {
            return
        }
        
        popupArray := Config["popups"]
        if (index > popupArray.Length || !popupArray[index].Has("enabled") || !popupArray[index]["enabled"]) {
            return
        }
            
        popup := popupArray[index]
        
        ; Check if popup already exists and toggle visibility
        if (PopupWindows.Has(popup["id"])) {
            TogglePopup(popup["id"])
        } else {
            CreatePopup(popup)
        }
    } catch Error as e {
        MsgBox("Error showing popup: " . e.message, AppTitle, "IconX")
    }
}

PreloadContent() {
    try {
        if (!Config.Has("popups")) {
            return
        }
        
        ; Preload content for all enabled popups to improve performance
        popupArray := Config["popups"]
        for index, popup in popupArray {
            if (popup.Has("enabled") && popup["enabled"]) {
                GetPopupContent(popup["module"], popup["category"])
            }
        }
    } catch Error as e {
        ; Silently handle preload errors
    }
}

; Cleanup on exit
OnExit(Cleanup)

Cleanup(*) {
    ; Close all popup windows
    try {
        for id, window in PopupWindows {
            ClosePopup(id)
        }
        
        ; Save cache to disk
        SaveCache()
    } catch {
        ; Ignore cleanup errors
    }
}

; Hotkey to reload configuration
^!r:: {
    result := MsgBox("Reload configuration and restart hotkeys?", AppTitle, "YesNo")
    if (result == "Yes") {
        Reload()
    }
}

; Hotkey to show help
^!h:: ShowHelp()

ShowHelp() {
    try {
        helpText := AppTitle . " - Active Hotkeys:`n`n"
        
        if (Config.Has("popups")) {
            popupArray := Config["popups"]
            for index, popup in popupArray {
                if (popup.Has("enabled") && popup["enabled"]) {
                    helpText .= popup["hotkey"] . " - " . popup["name"] . "`n"
                }
            }
        }
        
        helpText .= "`nCtrl+Alt+R - Reload configuration"
        helpText .= "`nCtrl+Alt+H - Show this help"
        
        MsgBox(helpText, AppTitle . " - Help")
    } catch Error as e {
        MsgBox("Error showing help: " . e.message, AppTitle, "IconX")
    }
}

; Placeholder functions that would normally be in included files
LoadConfig() {
    ; This should load from JSON file
    ; For now, return a basic config
    try {
        if (FileExist(ConfigFile)) {
            configText := FileRead(ConfigFile)
            ; In a real implementation, you'd parse JSON here
            ; For now, create a minimal config
            Config["popups"] := [
                {
                    "id": "cheat-sheet-1",
                    "name": "Leveling Guide", 
                    "hotkey": "F1",
                    "enabled": true,
                    "module": "cheat-sheets",
                    "category": "leveling",
                    "x": 100,
                    "y": 100,
                    "width": 600,
                    "height": 400
                }
            ]
            return true
        }
        return false
    } catch {
        return false
    }
}

InitCache() {
    ; Initialize cache system
    Cache := Map()
}

SaveCache() {
    ; Save cache to disk
}

GetPopupContent(module, category) {
    ; This would normally make HTTP request
    return "Sample content for " . module . " - " . category . "`n`nThis is a placeholder. The full version would fetch content from the API."
}