; Configuration Module for POE Popup Helper
; Handles loading and parsing JSON configuration files

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