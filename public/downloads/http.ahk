; HTTP Module for POE Popup Helper
; Handles API requests and content fetching

GetPopupContent(module, category := "") {
    global ApiBaseUrl, Cache
    
    ; Build API URL
    apiUrl := ApiBaseUrl . "?module=" . module
    if (category != "") {
        apiUrl .= "&category=" . category
    }
    
    ; Check cache first
    cacheKey := module . "_" . category
    if (Cache.HasKey(cacheKey)) {
        cachedItem := Cache[cacheKey]
        
        ; Check if cache is still valid (1 hour expiry)
        if (A_TickCount - cachedItem.timestamp < 3600000) {
            return cachedItem.content
        }
    }
    
    ; Make HTTP request
    content := HttpGet(apiUrl)
    if (content) {
        ; Parse JSON response
        response := ParseApiResponse(content)
        if (response && response.HasKey("content")) {
            ; Store in cache
            Cache[cacheKey] := {
                content: response.content,
                title: response.HasKey("title") ? response.title : module,
                timestamp: A_TickCount
            }
            
            return response.content
        }
    }
    
    ; Return cached content if API call failed
    if (Cache.HasKey(cacheKey)) {
        return Cache[cacheKey].content
    }
    
    return "Failed to load content for " . module . (category ? " - " . category : "")
}

HttpGet(url) {
    ; Create HTTP request object
    try {
        http := ComObjCreate("WinHttp.WinHttpRequest.5.1")
        http.Open("GET", url, false)
        http.SetRequestHeader("User-Agent", "POE Popup Helper/1.0")
        http.SetTimeouts(5000, 5000, 10000, 10000)  ; 5s connect, 10s receive timeout
        
        ; Send request
        http.Send()
        
        ; Check response status
        if (http.Status == 200) {
            return http.ResponseText
        } else {
            return ""
        }
    } catch e {
        ; Network error or timeout
        return ""
    }
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