; Cache Module for POE Popup Helper
; Handles content caching for improved performance

InitCache() {
    global Cache
    
    ; Initialize cache object
    Cache := {}
    
    ; Load cache from disk if it exists
    LoadCacheFromDisk()
    
    ; Clean expired cache entries
    CleanExpiredCache()
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
    global Cache
    
    if (!Cache.HasKey(cacheKey)) {
        return false
    }
    
    age := A_TickCount - Cache[cacheKey].timestamp
    return age <= maxAge
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
    
    Cache[cacheKey] := {
        content: content,
        title: title,
        timestamp: A_TickCount
    }
}

; Cache management hotkeys (for debugging)
^!c::
    stats := GetCacheStats()
    MsgBox, 0, Cache Statistics, Cache entries: %stats.totalEntries%`nApprox size: %stats.totalSize% chars`nOldest entry: %stats.oldestEntry%ms ago`nNewest entry: %stats.newestEntry%ms ago
return

^!x::
    MsgBox, 4, Clear Cache, Clear all cached content?
    IfMsgBox Yes
    {
        ClearCache()
        TrayTip, Cache Cleared, All cached content has been removed, 2, 1
    }
return