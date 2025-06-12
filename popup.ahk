; Popup Module for POE Popup Helper
; Handles popup window creation, display, and management

CreatePopup(popupConfig) {
    global PopupWindows, AppTitle
    
    ; Get content for popup
    content := GetPopupContent(popupConfig.module, popupConfig.category)
    title := GetContentTitle(popupConfig.module, popupConfig.category)
    
    ; Create unique GUI name
    guiName := "PopupGui_" . popupConfig.id
    
    ; Calculate font size based on popup dimensions
    fontSize := CalculateOptimalFontSize(popupConfig.width, popupConfig.height)
    
    ; Create GUI (AutoHotkey v1 syntax)
    Gui, %guiName%:New, +AlwaysOnTop -MaximizeBox -MinimizeBox +LastFound, %title%
    Gui, %guiName%:Font, s%fontSize%, Consolas
    
    ; Calculate control dimensions
    textWidth := popupConfig.width - 20
    textHeight := popupConfig.height - 60
    
    ; Add content text control
    Gui, %guiName%:Add, Edit, x10 y10 ReadOnly VScroll HScroll w%textWidth% h%textHeight%, %content%
    
    ; Add close button
    Gui, %guiName%:Add, Button, gClosePopupButton, Close
    
    ; Add copy button for searchable content
    if (InStr(popupConfig.module, "search") > 0) {
        Gui, %guiName%:Add, Button, gCopyContentButton x+10, Copy All
    }
    
    ; Add refresh button
    Gui, %guiName%:Add, Button, gRefreshPopupButton x+10, Refresh
    
    ; Resize controls to fit popup
    ResizePopupControls(guiName, popupConfig)
    
    ; Show popup at configured position
    Gui, %guiName%:Show, % "x" . popupConfig.x . " y" . popupConfig.y . " w" . popupConfig.width . " h" . popupConfig.height
    
    ; Store popup reference
    PopupWindows[popupConfig.id] := {
        guiName: guiName,
        config: popupConfig,
        hwnd: WinExist(title)
    }
    
    ; Set window properties for better appearance
    WinSet, ExStyle, +0x80, % "ahk_id " . PopupWindows[popupConfig.id].hwnd  ; WS_EX_LAYERED for transparency support
    
    return guiName
}

ResizePopupControls(guiName, config) {
    ; Calculate control dimensions
    textWidth := config.width - 20
    textHeight := config.height - 60  ; Leave space for buttons
    buttonY := config.height - 40
    
    ; Resize text control
    GuiControl, %guiName%:Move, Edit1, w%textWidth% h%textHeight%
    
    ; Position buttons
    GuiControl, %guiName%:Move, Button1, y%buttonY%  ; Close button
    GuiControl, %guiName%:Move, Button2, y%buttonY%  ; Copy/Refresh button
    GuiControl, %guiName%:Move, Button3, y%buttonY%  ; Additional button if exists
}

CalculateOptimalFontSize(width, height) {
    ; Calculate appropriate font size based on popup dimensions
    baseSize := 9
    
    if (width >= 500 && height >= 400) {
        return 10
    } else if (width >= 400 && height >= 300) {
        return 9
    } else {
        return 8
    }
}

TogglePopup(popupId) {
    global PopupWindows
    
    if (!PopupWindows.HasKey(popupId)) {
        return
    }
    
    popup := PopupWindows[popupId]
    
    ; Check if window is visible
    WinGet, winState, MinMax, % "ahk_id " . popup.hwnd
    if (winState == -1) {  ; Minimized
        WinRestore, % "ahk_id " . popup.hwnd
    } else {
        WinGetPos, , , , , % "ahk_id " . popup.hwnd
        if (ErrorLevel) {  ; Window doesn't exist
            ; Recreate popup
            CreatePopup(popup.config)
        } else {
            ; Hide window
            WinHide, % "ahk_id " . popup.hwnd
        }
    }
}

ClosePopup(popupId) {
    global PopupWindows
    
    if (!PopupWindows.HasKey(popupId)) {
        return
    }
    
    popup := PopupWindows[popupId]
    
    ; Close GUI
    Gui, % popup.guiName . ":Destroy"
    
    ; Remove from tracking
    PopupWindows.Delete(popupId)
}

ClosePopupButton:
    ; Get the GUI name from the button
    GuiControlGet, guiName, Name
    
    ; Find popup by GUI name and close it
    for id, popup in PopupWindows {
        if (popup.guiName == A_Gui) {
            ClosePopup(id)
            break
        }
    }
return

CopyContentButton:
    ; Get current GUI content and copy to clipboard
    GuiControlGet, currentText, , Edit1
    Clipboard := currentText
    
    ; Show brief notification
    ToolTip, Content copied to clipboard!
    SetTimer, HideTooltip, 1500
return

RefreshPopupButton:
    ; Find current popup and refresh its content
    for id, popup in PopupWindows {
        if (popup.guiName == A_Gui) {
            RefreshPopupContent(id)
            break
        }
    }
return

RefreshPopupContent(popupId) {
    global PopupWindows, Cache
    
    if (!PopupWindows.HasKey(popupId)) {
        return
    }
    
    popup := PopupWindows[popupId]
    config := popup.config
    
    ; Clear cache for this content
    cacheKey := config.module . "_" . config.category
    if (Cache.HasKey(cacheKey)) {
        Cache.Delete(cacheKey)
    }
    
    ; Get fresh content
    content := GetPopupContent(config.module, config.category)
    
    ; Update GUI content
    GuiControl, % popup.guiName . ":Text", Edit1, %content%
}

HideTooltip:
    ToolTip
    SetTimer, HideTooltip, Off
return

CloseAllPopups() {
    global PopupWindows
    
    for id, popup in PopupWindows {
        ClosePopup(id)
    }
}

GetActivePopupCount() {
    global PopupWindows
    return PopupWindows.Length()
}

; Handle window close events
OnMessage(0x10, "WM_CLOSE")  ; WM_CLOSE

WM_CLOSE() {
    ; Handle X button clicks on popup windows
    for id, popup in PopupWindows {
        if (A_Gui == popup.guiName) {
            ClosePopup(id)
            return 0  ; Prevent default close
        }
    }
    return  ; Allow default handling for other windows
}