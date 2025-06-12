; Popup Module for POE Popup Helper (AutoHotkey v2)
; Handles popup window creation, display, and management

PopupWindows := Map()
AppTitle := "POE Popup Helper"

CreatePopup(popupConfig) {
    ; Get content for popup
    content := GetPopupContent(popupConfig.module, popupConfig.category)
    title := GetContentTitle(popupConfig.module, popupConfig.category)
    
    ; Calculate font size based on popup dimensions
    fontSize := CalculateOptimalFontSize(popupConfig.width, popupConfig.height)
    
    ; Create GUI (AutoHotkey v2 syntax)
    myGui := Gui("+AlwaysOnTop -MaximizeBox -MinimizeBox", title)
    myGui.SetFont("s" . fontSize, "Consolas")
    
    ; Calculate control dimensions
    textWidth := popupConfig.width - 20
    textHeight := popupConfig.height - 60
    buttonY := popupConfig.height - 40
    
    ; Add content text control
    editControl := myGui.Add("Edit", "x10 y10 ReadOnly VScroll HScroll w" . textWidth . " h" . textHeight, content)
    
    ; Add close button
    closeBtn := myGui.Add("Button", "x10 y" . buttonY . " w80 h25", "Close")
    closeBtn.OnEvent("Click", (*) => ClosePopup(popupConfig.id))
    
    ; Add copy button for searchable content
    if (InStr(popupConfig.module, "search") > 0) {
        copyBtn := myGui.Add("Button", "x100 y" . buttonY . " w80 h25", "Copy All")
        copyBtn.OnEvent("Click", (*) => CopyContent(editControl))
    }
    
    ; Add refresh button
    refreshBtn := myGui.Add("Button", "x190 y" . buttonY . " w80 h25", "Refresh")
    refreshBtn.OnEvent("Click", (*) => RefreshPopupContent(popupConfig.id))
    
    ; Show popup at configured position
    myGui.Show("x" . popupConfig.x . " y" . popupConfig.y . " w" . popupConfig.width . " h" . popupConfig.height)
    
    ; Store popup reference
    PopupWindows[popupConfig.id] := {
        gui: myGui,
        config: popupConfig,
        editControl: editControl,
        hwnd: myGui.Hwnd
    }
    
    return myGui
}

CalculateOptimalFontSize(width, height) {
    ; Calculate appropriate font size based on popup dimensions
    if (width >= 500 && height >= 400) {
        return 10
    } else if (width >= 400 && height >= 300) {
        return 9
    } else {
        return 8
    }
}

TogglePopup(popupId) {
    if (!PopupWindows.Has(popupId)) {
        return
    }
    
    popup := PopupWindows[popupId]
    
    ; Check if window is visible
    try {
        if (WinExist("ahk_id " . popup.hwnd)) {
            popup.gui.Hide()
        } else {
            popup.gui.Show()
        }
    } catch {
        ; Window doesn't exist, recreate popup
        CreatePopup(popup.config)
    }
}

ClosePopup(popupId) {
    if (!PopupWindows.Has(popupId)) {
        return
    }
    
    popup := PopupWindows[popupId]
    
    ; Close GUI
    try {
        popup.gui.Close()
    }
    
    ; Remove from tracking
    PopupWindows.Delete(popupId)
}

CopyContent(editControl) {
    ; Copy content to clipboard
    try {
        A_Clipboard := editControl.Value
        
        ; Show brief notification
        ToolTip("Content copied to clipboard!")
        SetTimer(() => ToolTip(), -1500)
    } catch Error as e {
        ToolTip("Error copying content: " . e.message)
        SetTimer(() => ToolTip(), -2000)
    }
}

RefreshPopupContent(popupId) {
    if (!PopupWindows.Has(popupId)) {
        return
    }
    
    popup := PopupWindows[popupId]
    config := popup.config
    
    ; Clear cache for this content
    cacheKey := config.module . "_" . config.category
    if (Cache.Has(cacheKey)) {
        Cache.Delete(cacheKey)
    }
    
    ; Get fresh content
    content := GetPopupContent(config.module, config.category)
    
    ; Update GUI content
    popup.editControl.Value := content
}

CloseAllPopups() {
    for id, popup in PopupWindows {
        ClosePopup(id)
    }
}

GetActivePopupCount() {
    return PopupWindows.Count
}

; Placeholder functions that should be implemented in other modules
GetPopupContent(module, category) {
    ; This should be implemented in http.ahk or main script
    return "Content for " . module . " - " . category . "`n`nThis is placeholder content. Please implement GetPopupContent() function."
}

GetContentTitle(module, category) {
    ; This should be implemented in the main script
    return module . " - " . category
}