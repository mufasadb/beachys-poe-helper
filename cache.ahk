; Cache Module for POE Popup Helper
; Handles content caching for improved performance

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