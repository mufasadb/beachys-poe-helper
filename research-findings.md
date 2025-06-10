# Research Findings

## Inventory Search Tools

### Key Tools Found:
1. **Awakened PoE Trade** - Most popular in-game overlay for price checking and searching
2. **Looty** - Browser extension for advanced inventory filtering with socket color support
3. **Official PoE Trade Site** - GGG's official trade platform with comprehensive search filters
4. **Vorici Calculator** - For calculating chromatic orb costs to achieve desired socket colors
5. **Craft of Exile** - Crafting simulator with socket color probability calculations

### Implementation Recommendation:
Create simple copy-paste search strings that work with the official PoE trade site, similar to existing community tools. Focus on the most common use cases:
- Movement speed boots with specific socket color combinations
- Easy-to-copy format that users can paste directly into trade site

### Socket Color Combinations for Movement Speed Boots:
- 3 blue (3b) - for caster builds
- 3 green (3g) - for dexterity builds  
- 3 red (3r) - for strength builds
- 2 blue 1 green (2b1g) - hybrid builds
- 2 green 1 blue (2g1b) - hybrid builds
- 2 red 1 green (2r1g) - hybrid builds
- 2 green 1 red (2g1r) - hybrid builds

## Atlas Progression Tools

### Interactive Tool Examples:
1. **PoE Atlas (poeatlas.net)** - Interactive web-based atlas navigation
   - Features: zoom, pan, hover, clickable maps
   - Search by tier with prefixes (b for base, t for tier)
   - Visual map connections and information overlays

2. **Atlas-SSF (GitHub)** - Progress tracking tool
   - Checkbox system for completion tracking
   - Remembers progress between sessions
   - Can sync with character data

3. **PoE Atlas (poe-atlas.com)** - Strategy guides with interactive elements
   - Atlas passive tree builders
   - Build guides from league start to endgame

### Recommended Format:
**Hybrid approach** combining:
- Visual atlas overview (simplified map layout)
- Progressive checklist format
- Strategy tips for each tier/region
- Atlas passive tree recommendations

## Leveling Guide Tools

### Interactive Tool Examples:
1. **PoE-Leveling-Guide** - AutoHotkey overlay
   - Automatic zone detection from game files
   - In-game overlay with relevant notes
   - Gem tracking and quest reward reminders

2. **Path-of-Leveling** - Java desktop application
   - XP tracking and progression monitoring
   - Path of Building integration
   - Build planning with gem socket visualization

3. **Grinding.Zone** and other web-based guides
   - Static but comprehensive act-by-act progression
   - Quest and waypoint checklists

### Recommended Format:
**Progressive checklist approach**:
- Act-by-act breakdown with collapsible sections
- Quest tracking with important vs optional quests
- Waypoint checklist for each act
- Gem progression recommendations
- Zone-specific tips and strategies

## Implementation Priorities

Based on research, recommended implementation order:

1. **Simple and Effective First**: Start with basic copy-paste templates and checklists
2. **Progressive Enhancement**: Add interactive features gradually
3. **Community Integration**: Reference existing tools rather than competing
4. **Mobile-Friendly**: Ensure guides work well on mobile devices for second-screen use

## Technical Considerations

### Atlas Guide:
- Use accordion/collapsible sections for different tiers
- Simple progress tracking with localStorage
- Link to existing interactive tools rather than rebuilding complex features

### Leveling Guide:
- Act-based navigation with clear section headers
- Checkbox system for quest and waypoint tracking
- Responsive design for mobile/second screen usage
- Integration with community spreadsheet data

### Inventory Search:
- Pre-built search strings with one-click copy
- Visual examples of what each search finds
- Links to official trade site with search pre-filled where possible

## POE Filter Research Findings

### Filter Categories & Recommendations

#### Racing Filters
**TyTyKiller Racing Filters**
- Available through FilterBlade.xyz with different build variants:
  - Ranged build filter: `?profile=Tytykiller&saveState=AAAARanged&platform=pc`
  - Melee build filter: `?profile=Tytykiller&saveState=AAAAMelee&platform=pc`  
  - Caster build filter: `?profile=Tytykiller&saveState=800161&platform=pc`
- Can be downloaded from FilterBlade or synced directly to POE account
- Note: TyTyKiller's POE profile filters require authentication to view directly

#### Early Endgame Filters
**NeverSink's Filter (via FilterBlade)**
- Use "Strict" strictness for early mapping (yellow/red maps)
- Most popular and well-maintained filter
- Excellent quality-of-life features with customization options

**Cyberion's Filter**  
- Clean design focused on mapping efficiency
- Color-coded drops with beam effects and sounds
- Good for players who finished campaign and entering maps

#### Late Endgame Filters
**NeverSink's "Uber-Strict"**
- Maximum efficiency for red maps and pinnacle content
- Minimal visual clutter for speed mapping

**Exosta MF Filter**
- Specialized for magic find characters
- Only shows high-value items for speed farming
- Best for juiced content

**Pecham/LordMatos Filter**
- Tiered currency filtering
- Emphasizes high-value currency like Mirrors
- Good for currency-focused farming

### Sound Packages Research

#### Installation Location
- POE 1: `%USERPROFILE%/Documents/My Games/Path of Exile`
- POE 2: `%USERPROFILE%/Documents/My Games/Path of Exile 2`
- Sound files must match exact filenames (one-to-one replacement)
- Most sound packs include 8-10 custom audio files

#### Popular Sound Pack Sources
1. **Mega-Compilation**: 75+ sound packs available on GameFAQs forums
2. **Diablo 2 Sound Pack**: Classic loot sounds
3. **Binding of Isaac**: Enemy sounds 
4. **Anime Character Voices**: Popular anime voice lines
5. **Tony Hawk's Pro Skater**: Skateboarding sound effects
6. **StarCraft 2 Terran**: RTS sound effects
7. **Age of Empires 2**: Classic RTS audio
8. **Shaper Voicelines**: POE-themed audio

#### Download Links Found
- Diablo 2: `https://mega.nz/#!IdklhA5A!wI3I1w7Z78bSMOFqVnOPYjhOr8Rpx6AFiOlAdIzrbZk`
- Binding of Isaac: `https://drive.google.com/file/d/1QSiDkLj_QcYud05SFyuu-8OrfWNy-aij/view`
- Anime Voices: `https://drive.google.com/drive/folders/1ywZ_aMKlsVjRU5Nyu-5CBXhNRXyPgeCj`
- Tony Hawk: `https://mega.nz/file/I4JwVCgQ#9-IBN9k7AUjMEXnrICUmAnq9KA0YtBaI6dMviH-Ts9U`
- StarCraft 2: `https://drive.google.com/file/d/1Qv5Fx6PA-7LqeiQHiV_mhAjtssMVinwO/edit`
- Age of Empires 2: `https://www.dropbox.com/s/o5w4qo0ykjty40t/aoe2filter.zip?dl=0`

### Installation Process Summary

#### POE 1 Installation
1. Navigate to `Documents/My Games/Path of Exile`
2. Place .filter files in this directory
3. Place sound files (if included) in same directory
4. Activate via in-game Options > Game tab

#### POE 2 Installation  
1. Navigate to `Documents/My Games/Path of Exile 2` 
2. Some sources mention `OnlineFilters` subfolder
3. Place .filter files in correct location
4. Activate via in-game options

#### User Experience Considerations
- Need hover descriptions explaining installation process
- Should provide both direct download and FilterBlade integration options
- Include sound preview functionality if possible
- Clear categorization by use case (racing, early endgame, late endgame)
- Installation instructions should be simple and visual

### Implementation Recommendations

#### Filter Categories for Our Site
1. **Racing Filters**
   - TyTyKiller variants (Ranged/Melee/Caster)
   - One-click download with sounds included

2. **Early Endgame** 
   - NeverSink Strict
   - Cyberion's Clean Filter

3. **Late Endgame**
   - NeverSink Uber-Strict  
   - Exosta MF Filter
   - Pecham Currency-Focused

#### Sound Package Integration
- Bundle popular sound packs with each filter
- Provide sound previews on hover
- Include installation wizard/guide
- One-click download creates zip with filter + sounds + install guide

#### Technical Implementation Notes
- FilterBlade API integration for dynamic filter updates
- Direct download hosting for reliability
- Backup mirrors for popular filters
- Automated testing of download links