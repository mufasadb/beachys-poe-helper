; HTTP Module for POE Popup Helper
; Handles API requests and content fetching

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