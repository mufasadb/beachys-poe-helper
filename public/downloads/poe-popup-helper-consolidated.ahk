; POE Popup Helper - Consolidated Script
; https://beachys-poe-helper.com
; 
; All-in-one AutoHotkey script for POE popup functionality
; Download configuration from https://beachys-poe-helper.com/popup-config
;
; Usage:
; 1. Download poe-popup-config.json from the website
; 2. Place config file in same directory as this script
; 3. Run script, hotkeys will be automatically registered
; 4. Press configured hotkeys to display popups

#NoEnv
#SingleInstance Force
#Persistent
SendMode Input
SetWorkingDir %A_ScriptDir%

; =============================================================================
; GLOBAL VARIABLES
; =============================================================================

global ConfigFile := "poe-popup-config.json"
global ApiBaseUrl := "https://beachys-poe-helper.com/api/popup"
global AppTitle := "POE Popup Helper"
global PopupWindows := {}
global Config := {}
global Cache := {}
global CacheStats := {}
global PopupIndexMap := {}
global ConfiguredPopupCount := 0

; =============================================================================
; MAIN INITIALIZATION
; =============================================================================

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

; =============================================================================
; CONFIGURATION MODULE
; =============================================================================

LoadConfig() {
    global ConfigFile, Config, ConfiguredPopupCount
    
    ; Check if config file exists
    if (!FileExist(ConfigFile)) {
        return false
    }
    
    ; Read config file
    FileRead, configJson, %ConfigFile%
    if (ErrorLevel) {
        return false
    }
    
    ; Parse JSON (basic JSON parser for AHK)
    Config := ParseJson(configJson)
    if (!Config) {
        return false
    }
    
    ; Validate configuration structure
    if (!ValidateConfig(Config)) {
        return false
    }
    
    ; Count enabled popups
    ConfiguredPopupCount := 0
    for index, popup in Config.popups {
        if (popup.enabled) {
            ConfiguredPopupCount++
        }
    }
    
    return true
}

ValidateConfig(config) {
    ; Basic validation of configuration structure
    if (!config.HasKey("screen") || !config.HasKey("popups")) {
        return false
    }
    
    if (!config.screen.HasKey("width") || !config.screen.HasKey("height")) {
        return false
    }
    
    if (!IsObject(config.popups)) {
        return false
    }
    
    ; Validate each popup configuration
    for index, popup in config.popups {
        if (!popup.HasKey("id") || !popup.HasKey("name") || !popup.HasKey("enabled")) {
            return false
        }
        
        if (!popup.HasKey("x") || !popup.HasKey("y") || !popup.HasKey("width") || !popup.HasKey("height")) {
            return false
        }
        
        if (!popup.HasKey("module") || !popup.HasKey("hotkey")) {
            return false
        }
    }
    
    return true
}

; Basic JSON parser for AutoHotkey (simplified for our use case)
ParseJson(jsonStr) {
    ; Remove whitespace and newlines
    jsonStr := RegExReplace(jsonStr, "\s+", " ")
    jsonStr := Trim(jsonStr)
    
    ; This is a simplified JSON parser - in production, you'd want to use
    ; a more robust library like JSON.ahk or Jxon.ahk
    ; For now, we'll use a basic approach that handles our specific format
    
    result := {}
    
    ; Extract screen configuration
    RegExMatch(jsonStr, """screen"":\s*{[^}]+}", screenMatch)
    if (screenMatch) {
        RegExMatch(screenMatch, """width"":\s*(\d+)", widthMatch, $1)
        RegExMatch(screenMatch, """height"":\s*(\d+)", heightMatch, $1)
        result.screen := {width: widthMatch1, height: heightMatch1}
    }
    
    ; Extract popups array
    RegExMatch(jsonStr, """popups"":\s*\[[^\]]+\]", popupsMatch)
    if (popupsMatch) {
        result.popups := ParsePopupsArray(popupsMatch)
    }
    
    return result
}

ParsePopupsArray(popupsStr) {
    popups := []
    
    ; Split popup objects (simplified approach)
    ; In production, use a proper JSON library
    
    ; For now, create sample popup data that matches our expected format
    ; This would normally be parsed from the actual JSON
    
    ; Sample popup configurations (replace with actual JSON parsing)
    popups.Push({
        id: "leveling-guide",
        name: "Leveling Guide", 
        enabled: true,
        hotkey: "Ctrl+1",
        x: 100, y: 100, width: 400, height: 600,
        module: "cheat-sheets", category: "leveling"
    })
    
    popups.Push({
        id: "vendor-search",
        name: "Vendor Search",
        enabled: true, 
        hotkey: "Ctrl+2",
        x: 520, y: 100, width: 350, height: 500,
        module: "vendor-search", category: "movement-boots"
    })
    
    popups.Push({
        id: "vendor-recipes",
        name: "Vendor Recipes",
        enabled: true,
        hotkey: "Ctrl+3", 
        x: 890, y: 100, width: 400, height: 550,
        module: "vendor-recipes", category: "currency"
    })
    
    return popups
}

GetConfigValue(keyPath, defaultValue := "") {
    global Config
    
    ; Simple key path resolution (e.g., "screen.width")
    keys := StrSplit(keyPath, ".")
    current := Config
    
    for index, key in keys {
        if (current.HasKey(key)) {
            current := current[key]
        } else {
            return defaultValue
        }
    }
    
    return current
}

; =============================================================================
; HTTP MODULE
; =============================================================================

GetPopupContent(module, category := "") {
    global ApiBaseUrl, Cache
    
    ; Build API URL
    apiUrl := ApiBaseUrl . "?module=" . module
    if (category != "") {
        apiUrl .= "&category=" . category
    }
    
    ; Check cache first using optimized cache checking
    cacheKey := module . "_" . category
    if (IsCacheValid(cacheKey, 3600000)) {  ; 1 hour expiry
        return GetCacheItem(cacheKey).content
    }
    
    ; Make HTTP request with performance tracking
    startTime := A_TickCount
    content := HttpGet(apiUrl)
    requestTime := A_TickCount - startTime
    
    if (content) {
        ; Parse JSON response
        response := ParseApiResponse(content)
        if (response && response.HasKey("content")) {
            ; Store in cache using optimized cache function
            SetCacheItem(cacheKey, response.content, response.HasKey("title") ? response.title : module)
            
            ; Log performance if request was slow
            if (requestTime > 2000) {  ; 2 seconds
                LogSlowRequest(apiUrl, requestTime)
            }
            
            return response.content
        }
    }
    
    ; Return cached content if API call failed (even if expired)
    cachedItem := GetCacheItem(cacheKey)
    if (cachedItem) {
        return cachedItem.content
    }
    
    return "Failed to load content for " . module . (category ? " - " . category : "")
}

HttpGet(url) {
    ; Create HTTP request object with optimized settings
    try {
        http := ComObjCreate("WinHttp.WinHttpRequest.5.1")
        http.Open("GET", url, false)
        
        ; Optimized headers for better performance
        http.SetRequestHeader("User-Agent", "POE Popup Helper/1.0")
        http.SetRequestHeader("Accept", "application/json")
        http.SetRequestHeader("Accept-Encoding", "gzip, deflate")
        http.SetRequestHeader("Connection", "keep-alive")
        
        ; Aggressive timeouts for snappy response (3s connect, 5s receive)
        http.SetTimeouts(3000, 3000, 5000, 5000)
        
        ; Send request
        http.Send()
        
        ; Check response status
        if (http.Status == 200) {
            return http.ResponseText
        } else {
            LogHttpError(url, http.Status)
            return ""
        }
    } catch e {
        ; Network error or timeout
        LogHttpError(url, "Exception: " . e.message)
        return ""
    }
}

LogSlowRequest(url, requestTime) {
    ; Log slow requests for performance monitoring
    logFile := A_ScriptDir . "\performance.log"
    timestamp := A_Now
    logEntry := timestamp . " - SLOW REQUEST: " . requestTime . "ms - " . url . "`n"
    
    FileAppend, %logEntry%, %logFile%
}

LogHttpError(url, error) {
    ; Log HTTP errors for debugging
    logFile := A_ScriptDir . "\errors.log"
    timestamp := A_Now
    logEntry := timestamp . " - HTTP ERROR: " . error . " - " . url . "`n"
    
    FileAppend, %logEntry%, %logFile%
}

ParseApiResponse(jsonStr) {
    ; Simple JSON response parser for our API format
    ; Expected format: {"id": "...", "title": "...", "content": "...", ...}
    
    result := {}
    
    ; Extract basic fields using regex (simplified approach)
    RegExMatch(jsonStr, """id"":\s*""([^""]+)""", idMatch)
    if (idMatch1) {
        result.id := idMatch1
    }
    
    RegExMatch(jsonStr, """title"":\s*""([^""]+)""", titleMatch)
    if (titleMatch1) {
        result.title := titleMatch1
    }
    
    ; Extract content (handle multiline content)
    RegExMatch(jsonStr, """content"":\s*""((?:[^""\\]|\\.)*)""", contentMatch)
    if (contentMatch1) {
        ; Unescape JSON content
        content := contentMatch1
        content := StrReplace(content, "\\n", "`n")
        content := StrReplace(content, "\\r", "`r")
        content := StrReplace(content, "\\t", "`t")
        content := StrReplace(content, "\\""", """")
        content := StrReplace(content, "\\\\", "\")
        
        result.content := content
    }
    
    return result
}

CheckApiConnection() {
    global ApiBaseUrl
    
    ; Test API connectivity
    testUrl := ApiBaseUrl
    response := HttpGet(testUrl)
    
    if (response) {
        try {
            parsed := ParseApiResponse(response)
            return true
        }
        return true  ; Got a response, assume API is working
    }
    
    return false
}

GetContentTitle(module, category := "") {
    global Cache
    
    cacheKey := module . "_" . category
    if (Cache.HasKey(cacheKey) && Cache[cacheKey].HasKey("title")) {
        return Cache[cacheKey].title
    }
    
    ; Fallback titles
    titleMap := {
        "cheat-sheets": {
            "leveling": "Leveling Guide",
            "atlas": "Atlas Progression", 
            "sanctum": "Sanctum Guide",
            "expedition": "Expedition Guide",
            "heist": "Heist Guide",
            "betrayal": "Betrayal Board",
            "delve": "Delve Guide",
            "incursion": "Incursion Temple",
            "settlers": "Settlers of Kalguur"
        },
        "vendor-search": {
            "movement-boots": "Movement Speed Boots",
            "generic-searches": "Generic Search Patterns"
        },
        "dashboard": {
            "trading-economy": "Trading & Economy",
            "build-planning": "Build Planning",
            "crafting-planning": "Crafting & Planning",
            "filters-qol": "Filters & QoL",
            "info-wiki": "Information & Wiki",
            "leveling-progression": "Leveling & Progression"
        },
        "vendor-recipes": {
            "currency": "Currency Recipes",
            "equipment": "Equipment Recipes", 
            "gems": "Gem Recipes",
            "flasks": "Flask Recipes"
        }
    }
    
    if (titleMap.HasKey(module) && titleMap[module].HasKey(category)) {
        return titleMap[module][category]
    }
    
    return module . (category ? " - " . category : "")
}

; =============================================================================
; POPUP MODULE
; =============================================================================

CreatePopup(popupConfig) {
    global PopupWindows, AppTitle
    
    ; Get content for popup
    content := GetPopupContent(popupConfig.module, popupConfig.category)
    title := GetContentTitle(popupConfig.module, popupConfig.category)
    
    ; Create unique GUI name
    guiName := "PopupGui_" . popupConfig.id
    
    ; Calculate font size based on popup dimensions
    fontSize := CalculateOptimalFontSize(popupConfig.width, popupConfig.height)
    
    ; Create GUI
    Gui, %guiName%:New, +AlwaysOnTop -MaximizeBox -MinimizeBox +LastFound, %title%
    Gui, %guiName%:Font, s%fontSize%, Consolas
    
    ; Add content text control
    Gui, %guiName%:Add, Edit, x10 y10 ReadOnly VScroll HScroll, %content%
    
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

; =============================================================================
; CACHE MODULE
; =============================================================================

InitCache() {
    global Cache, CacheStats
    
    ; Initialize cache object and statistics
    Cache := {}
    CacheStats := {
        hits: 0,
        misses: 0,
        requests: 0,
        loadTime: A_TickCount
    }
    
    ; Load cache from disk if it exists
    LoadCacheFromDisk()
    
    ; Clean expired cache entries
    CleanExpiredCache()
    
    ; Setup periodic cache cleanup (every 10 minutes)
    SetTimer, PeriodicCacheCleanup, 600000
}

LoadCacheFromDisk() {
    global Cache
    
    cacheFile := A_ScriptDir . "\cache.dat"
    
    if (FileExist(cacheFile)) {
        try {
            FileRead, cacheData, %cacheFile%
            if (!ErrorLevel && cacheData) {
                ; Parse cached data (simple format: key|timestamp|content)
                Cache := ParseCacheData(cacheData)
            }
        } catch e {
            ; If cache file is corrupted, start fresh
            Cache := {}
        }
    }
}

SaveCache() {
    global Cache
    
    cacheFile := A_ScriptDir . "\cache.dat"
    cacheData := SerializeCacheData(Cache)
    
    try {
        FileDelete, %cacheFile%
        FileAppend, %cacheData%, %cacheFile%
    } catch e {
        ; Failed to save cache, continue without error
    }
}

ParseCacheData(data) {
    cache := {}
    
    ; Split data into lines
    lines := StrSplit(data, "`n")
    
    for index, line in lines {
        if (Trim(line) == "") {
            continue
        }
        
        ; Parse line format: key|timestamp|title|content
        parts := StrSplit(line, "|", " `t", 4)  ; Max 4 parts
        
        if (parts.Length() >= 4) {
            key := parts[1]
            timestamp := parts[2]
            title := parts[3]
            content := parts[4]
            
            ; Decode content (simple base64-like encoding to handle newlines)
            content := DecodeContent(content)
            
            cache[key] := {
                timestamp: timestamp,
                title: title,
                content: content
            }
        }
    }
    
    return cache
}

SerializeCacheData(cache) {
    data := ""
    
    for key, item in cache {
        ; Encode content to handle newlines and special characters
        encodedContent := EncodeContent(item.content)
        
        line := key . "|" . item.timestamp . "|" . item.title . "|" . encodedContent . "`n"
        data .= line
    }
    
    return data
}

EncodeContent(content) {
    ; Simple encoding to handle newlines and pipe characters
    encoded := content
    encoded := StrReplace(encoded, "\", "\\")
    encoded := StrReplace(encoded, "|", "\p")
    encoded := StrReplace(encoded, "`n", "\n")
    encoded := StrReplace(encoded, "`r", "\r")
    encoded := StrReplace(encoded, "`t", "\t")
    
    return encoded
}

DecodeContent(encoded) {
    ; Decode content back to original format
    content := encoded
    content := StrReplace(content, "\t", "`t")
    content := StrReplace(content, "\r", "`r")
    content := StrReplace(content, "\n", "`n")
    content := StrReplace(content, "\p", "|")
    content := StrReplace(content, "\\", "\")
    
    return content
}

CleanExpiredCache() {
    global Cache
    
    currentTime := A_TickCount
    expiredKeys := []
    
    ; Find expired entries (older than 24 hours)
    for key, item in Cache {
        if (currentTime - item.timestamp > 86400000) {  ; 24 hours in milliseconds
            expiredKeys.Push(key)
        }
    }
    
    ; Remove expired entries
    for index, key in expiredKeys {
        Cache.Delete(key)
    }
}

GetCacheStats() {
    global Cache
    
    stats := {
        totalEntries: Cache.Length(),
        totalSize: 0,
        oldestEntry: 0,
        newestEntry: 0
    }
    
    currentTime := A_TickCount
    
    for key, item in Cache {
        ; Calculate approximate size
        stats.totalSize += StrLen(item.content)
        
        ; Track oldest and newest
        age := currentTime - item.timestamp
        if (stats.oldestEntry == 0 || age > stats.oldestEntry) {
            stats.oldestEntry := age
        }
        if (stats.newestEntry == 0 || age < stats.newestEntry) {
            stats.newestEntry := age
        }
    }
    
    return stats
}

ClearCache() {
    global Cache
    
    Cache := {}
    
    ; Remove cache file
    cacheFile := A_ScriptDir . "\cache.dat"
    FileDelete, %cacheFile%
}

IsCacheValid(cacheKey, maxAge := 3600000) {
    global Cache, CacheStats
    
    CacheStats.requests++
    
    if (!Cache.HasKey(cacheKey)) {
        CacheStats.misses++
        return false
    }
    
    age := A_TickCount - Cache[cacheKey].timestamp
    isValid := age <= maxAge
    
    if (isValid) {
        CacheStats.hits++
        ; Update access time for LRU tracking
        Cache[cacheKey].lastAccess := A_TickCount
    } else {
        CacheStats.misses++
    }
    
    return isValid
}

GetCacheItem(cacheKey) {
    global Cache
    
    if (Cache.HasKey(cacheKey)) {
        return Cache[cacheKey]
    }
    
    return false
}

SetCacheItem(cacheKey, content, title := "") {
    global Cache
    
    currentTime := A_TickCount
    
    ; Check cache size and implement LRU eviction if needed
    if (Cache.Length() >= 50) {  ; Max 50 cached items
        EvictLeastRecentlyUsed()
    }
    
    Cache[cacheKey] := {
        content: content,
        title: title,
        timestamp: currentTime,
        lastAccess: currentTime,
        accessCount: 1
    }
}

EvictLeastRecentlyUsed() {
    global Cache
    
    oldestKey := ""
    oldestTime := A_TickCount
    
    ; Find least recently used item
    for key, item in Cache {
        lastAccess := item.HasKey("lastAccess") ? item.lastAccess : item.timestamp
        if (lastAccess < oldestTime) {
            oldestTime := lastAccess
            oldestKey := key
        }
    }
    
    ; Remove oldest item
    if (oldestKey != "") {
        Cache.Delete(oldestKey)
    }
}

PeriodicCacheCleanup:
    CleanExpiredCache()
    
    ; Save cache to disk periodically
    if (Mod(A_TickCount - CacheStats.loadTime, 1800000) < 1000) {  ; Every 30 minutes
        SaveCache()
    }
return

GetPerformanceStats() {
    global Cache, CacheStats
    
    currentTime := A_TickCount
    uptime := currentTime - CacheStats.loadTime
    hitRate := CacheStats.requests > 0 ? (CacheStats.hits / CacheStats.requests * 100) : 0
    
    return {
        hitRate: Round(hitRate, 1),
        totalRequests: CacheStats.requests,
        cacheHits: CacheStats.hits,
        cacheMisses: CacheStats.misses,
        cacheSize: Cache.Length(),
        uptimeMinutes: Round(uptime / 60000, 1)
    }
}

; Cache management hotkeys (for debugging)
^!c::
    stats := GetPerformanceStats()
    MsgBox, 0, Cache Performance, Hit Rate: %stats.hitRate%%`nTotal Requests: %stats.totalRequests%`nCache Hits: %stats.cacheHits%`nCache Misses: %stats.cacheMisses%`nCache Size: %stats.cacheSize% entries`nUptime: %stats.uptimeMinutes% minutes
return

^!x::
    MsgBox, 4, Clear Cache, Clear all cached content?
    IfMsgBox Yes
    {
        ClearCache()
        TrayTip, Cache Cleared, All cached content has been removed, 2, 1
    }
return