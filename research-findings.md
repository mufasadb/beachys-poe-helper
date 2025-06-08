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