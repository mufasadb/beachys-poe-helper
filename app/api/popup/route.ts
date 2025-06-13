import { NextRequest, NextResponse } from 'next/server'

interface PopupContent {
  id: string
  title: string
  content: string
  category: string
  lastUpdated: string
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const moduleName = searchParams.get('module')
  const category = searchParams.get('category')

  // Return available modules list if no specific module requested
  if (!moduleName) {
    const response = NextResponse.json({
      modules: [
        'cheat-sheets',
        'vendor-search',
        'dashboard',
        'vendor-recipes'
      ],
      categories: {
        'cheat-sheets': ['leveling', 'atlas', 'settlers', 'sanctum', 'expedition', 'heist', 'betrayal', 'delve', 'incursion'],
        'vendor-search': ['movement-boots', 'generic-searches'],
        'dashboard': ['info-wiki', 'trading-economy', 'build-planning', 'crafting-planning', 'filters-qol', 'leveling-progression'],
        'vendor-recipes': ['currency', 'equipment', 'gems', 'flasks']
      }
    })
    
    // Add caching headers for better performance
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600')
    response.headers.set('ETag', `"modules-list-v1"`)
    
    return response
  }

  // Route to specific module handlers
  switch (moduleName) {
    case 'cheat-sheets':
      return getCheatSheetContent(category)
    case 'vendor-search':
      return getVendorSearchContent(category)
    case 'dashboard':
      return getDashboardContent(category)
    case 'vendor-recipes':
      return getVendorRecipeContent(category)
    case 'popup':
      return getPopupContent(category)
    default:
      return NextResponse.json({ error: 'Invalid module' }, { status: 400 })
  }
}

function getCheatSheetContent(category: string | null): NextResponse {
  const cheatSheetData: Record<string, PopupContent> = {
    'leveling': {
      id: 'leveling',
      title: 'Leveling Guide',
      category: 'cheat-sheets',
      lastUpdated: new Date().toISOString(),
      content: `
Act 1 - Key Quests:
• Enemy at the Gate (skill gem reward)
• The Caged Brute (support gem reward)
• Breaking Some Eggs (respec point)
• The Dweller of the Deep (skill books)

Waypoints:
• The Coast • Mud Flats • The Ledge
• The Climb • The Lower Prison
• Prisoner's Gate • The Ship Graveyard

Efficiency Tips:
• Stay within 3 levels of zone level
• Don't over-farm - keep moving forward
• Get movement speed boots ASAP
• Use quicksilver flasks liberally
• Pick up rare items for chaos recipe

Resistance Priority:
• Act 5: -30% all resistances
• Act 10: -60% all resistances
• Prioritize fire > cold > lightning
• Chaos resistance not crucial early`
    },
    'atlas': {
      id: 'atlas',
      title: 'Atlas Progression',
      category: 'cheat-sheets',
      lastUpdated: new Date().toISOString(),
      content: `
Early Atlas (T1-T5):
• Complete all bonus objectives
• Focus on map completion
• Don't skip white maps
• Build atlas passive foundation

Mid Atlas (T6-T10):
• Specialize in 2-3 mechanics
• Start focusing on atlas passives
• Upgrade to rare maps for bonus
• Begin elderslayer progression

League Start Focus:
• Essence (guaranteed rare mods)
• Strongboxes (additional items)
• Expedition (currency/items)
• Harbinger (currency shards)

Currency Farming:
• Blight (oils and currency)
• Delirium (high-value rewards)
• Breach (splinters and items)
• Legion (emblems and currency)`
    },
    'settlers': {
      id: 'settlers',
      title: 'Settlers of Kalguur',
      category: 'cheat-sheets',
      lastUpdated: new Date().toISOString(),
      content: `
Overview:
Building and managing a town with NPCs that provide 
specialized crafting and resource management services.

Town Building:
• Recruit NPCs for specialized services
• Build infrastructure for town growth
• Manage resources and relationships
• Unlock advanced crafting options

Priority NPCs:
• Blacksmith (weapon/armor crafting)
• Trader (currency exchange)
• Mapmaker (atlas progression)
• Jeweler (gem services)`
    },
    'sanctum': {
      id: 'sanctum',
      title: 'Sanctum Guide',
      category: 'cheat-sheets',
      lastUpdated: new Date().toISOString(),
      content: `
Resolve Management:
• Resolve = your health in Sanctum
• Losing all resolve kicks you out
• Some rooms restore resolve
• Balance risk vs reward carefully

Room Types:
• Combat rooms (monsters and guards)
• Puzzle rooms (no combat)
• Treasure rooms (high rewards)
• Boss rooms (major challenges)

Path Planning:
• Plan your route before starting
• Prioritize resolve rooms when low
• Skip dangerous rooms if needed
• Save currency rooms for last

Rewards Priority:
• Unique items and divination cards
• Currency and crafting materials
• Experience and skill gems
• Atlas passives and maps`
    },
    'expedition': {
      id: 'expedition',
      title: 'Expedition Guide',
      category: 'cheat-sheets',
      lastUpdated: new Date().toISOString(),
      content: `
Explosive Placement:
• Prioritize chest and remnant chains
• Avoid immunity remnants
• Chain explosions for efficiency
• Read remnant mods carefully

Dangerous Mods:
• Monsters immune to damage types
• Monsters take reduced damage
• Monsters deal extra damage
• Monsters have extra life

NPC Priorities:
• Rog (item gambling/crafting)
• Tujen (currency exchange)
• Gwennen (unique item gambling)
• Dannig (expedition planning)

Currency Value:
• Exotic Coinage (most valuable)
• Astragali (Gwennen gambling)
• Burial Medallions (Dannig)
• Scrap Metal (Tujen currency)`
    },
    'heist': {
      id: 'heist',
      title: 'Heist Guide',
      category: 'cheat-sheets',
      lastUpdated: new Date().toISOString(),
      content: `
Rogue Skills:
• Lockpicking (doors and chests)
• Trap Disarmament (avoiding damage)
• Perception (finding secrets)
• Brute Force (breaking barriers)
• Engineering (machinery)

Alert Level:
• Killing monsters raises alert
• Opening doors/chests raises alert
• High alert = lockdown and escape
• Stealth approach often better

Grand Heist Rewards:
• Experimented items (alt quality)
• Replicas and unique items
• Enchanted items
• Currency and gems

Planning Tips:
• Bring rogues with required skills
• Level rogue equipment
• Plan escape route
• Prioritize high-value targets`
    },
    'betrayal': {
      id: 'betrayal',
      title: 'Betrayal Board',
      category: 'cheat-sheets',
      lastUpdated: new Date().toISOString(),
      content: `
Transportation:
• It That Fled (pure breachstones)
• Vorici (white sockets)
• Tora (gem experience)
• Cameria (harbinger orbs)

Research:
• It That Fled (pure breachstones)
• Aisling (crafting bench)
• Vorici (white sockets)
• Janus (uniques/currency)

Optimal Setup:
• Get It That Fled to Research rank 3
• Aisling in Research for crafts
• Vorici in Transportation/Research
• Remove/demote unwanted members

Strategy Tips:
• Interrogate to remove members
• Execute when boards are optimal
• Bargain to move/rank up members
• Betray to create rivalries`
    },
    'delve': {
      id: 'delve',
      title: 'Delve Guide',
      category: 'cheat-sheets',
      lastUpdated: new Date().toISOString(),
      content: `
Sulphite Management:
• Farm sulphite in maps with Niko
• Higher tier maps = more sulphite
• Atlas passives boost sulphite gains
• Scarabs increase sulphite amounts

Darkness Resistance:
• Upgrade darkness resistance first
• Use flares to light areas
• Dynamite breaks walls
• Some nodes require darkness travel

Currency Biomes:
• Fossil caverns (crafting materials)
• Currency nodes (direct currency)
• Gem nodes (quality gems)
• Unique nodes (rare items)

Boss Locations:
• Aul (depth 130+, rare)
• Kurgal (depth 100+)
• Ahuatotli (depth 35+)
• Unique drops and achievements`
    },
    'incursion': {
      id: 'incursion',
      title: 'Incursion Temple',
      category: 'cheat-sheets',
      lastUpdated: new Date().toISOString(),
      content: `
T3 High Value Rooms:
• Apex of Ascension (skill points)
• Doryani's Institute (corrupted gems)
• Locus of Corruption (double corrupt)
• Currency Exchange rooms

Useful T2 Rooms:
• Gemcutter's Workshop (quality gems)
• Strongbox rooms (extra items)
• Map rooms (atlas progression)
• Jewelry rooms (accessories)

Incursion Planning:
• Plan room connections early
• Upgrade valuable rooms to T3
• Connect rooms for accessibility
• Kill architects to change rooms

Temple Execution:
• Clear path to valuable rooms first
• Use corruption chamber carefully
• Save valuable items for T3 rooms
• Consider selling temple access`
    }
  }

  if (category && cheatSheetData[category]) {
    const response = NextResponse.json(cheatSheetData[category])
    
    // Add performance headers
    response.headers.set('Cache-Control', 'public, max-age=1800, s-maxage=1800') // 30 minutes
    response.headers.set('ETag', `"cheat-sheet-${category}-v1"`)
    
    return response
  }

  // Return all cheat sheet categories if no specific category
  const response = NextResponse.json(Object.values(cheatSheetData))
  response.headers.set('Cache-Control', 'public, max-age=1800, s-maxage=1800')
  response.headers.set('ETag', `"cheat-sheets-all-v1"`)
  
  return response
}

function getVendorSearchContent(category: string | null): NextResponse {
  const searchData: Record<string, PopupContent> = {
    'movement-boots': {
      id: 'movement-boots',
      title: 'Movement Speed Boots Search',
      category: 'vendor-search',
      lastUpdated: new Date().toISOString(),
      content: `
3 Blue Sockets:
"nt speed".*"b-b-b"

3 Green Sockets:
"nt speed".*"g-g-g"

3 Red Sockets:
"nt speed".*"r-r-r"

2 Blue 1 Green:
"nt speed".*"b-b-g|g-b-b|b-g-b"

2 Green 1 Blue:
"nt speed".*"g-g-b|b-g-g|g-b-g"

2 Red 1 Green:
"nt speed".*"r-r-g|g-r-r|r-g-r"

2 Green 1 Red:
"nt speed".*"g-g-r|r-g-g|g-r-g"`
    },
    'generic-searches': {
      id: 'generic-searches',
      title: 'Generic Search Patterns',
      category: 'vendor-search',
      lastUpdated: new Date().toISOString(),
      content: `
Chaos Recipe Items (60-74):
"rare".*"item level: ([6][0-9]|[7][0-4])"

6-Link Items:
"sockets: ([rgbw]-?){6}"

6-Socket Items:
"sockets: ([rgbw].?){6}"

Quality 10%+ Items:
"quality: \\+([1-9][0-9])"

RGB Linked Items:
"r-g-b|r-b-g|g-r-b|g-b-r|b-r-g|b-g-r"

High Life Items (70+):
"([1-9]\\d{2,}|[7-9]\\d).+life"`
    }
  }

  if (category && searchData[category]) {
    return NextResponse.json(searchData[category])
  }

  return NextResponse.json(Object.values(searchData))
}

function getDashboardContent(category: string | null): NextResponse {
  const dashboardData: Record<string, PopupContent> = {
    'info-wiki': {
      id: 'info-wiki',
      title: 'Information & Wiki',
      category: 'dashboard',
      lastUpdated: new Date().toISOString(),
      content: `
POE Wiki:
https://www.poewiki.net/
Official Path of Exile wiki with comprehensive game information

POEDB:
https://poedb.tw/
Database of game mechanics, items, and passive tree data

POE Lab:
https://www.poelab.com/
Daily labyrinth layouts and guides`
    },
    'trading-economy': {
      id: 'trading-economy',
      title: 'Trading & Economy Tools',
      category: 'dashboard',
      lastUpdated: new Date().toISOString(),
      content: `
Official Trade Site:
https://www.pathofexile.com/trade
GGG's official trade website

POE Ninja:
https://poe.ninja/
Economy tracking, build analytics, currency rates

Awakened POE Trade:
https://github.com/SnosMe/awakened-poe-trade
In-game overlay for price checking`
    },
    'build-planning': {
      id: 'build-planning',
      title: 'Build Planning Tools',
      category: 'dashboard',
      lastUpdated: new Date().toISOString(),
      content: `
Path of Building:
https://pathofbuilding.community/
Offline build planner with detailed calculations

POB.party:
https://pob.party/
Online Path of Building viewer and sharing

Maxroll POE Guides:
https://maxroll.gg/poe
Build guides and league starter recommendations`
    },
    'crafting-planning': {
      id: 'crafting-planning',
      title: 'Crafting & Planning',
      category: 'dashboard',
      lastUpdated: new Date().toISOString(),
      content: `
Craft of Exile:
https://www.craftofexile.com/
Crafting simulator and probability calculator

Vorici Calculator:
https://siveran.github.io/calc.html
Socket coloring cost calculator

POE Regex:
https://poe.re/
Generate search patterns for stash tab highlighting`
    },
    'filters-qol': {
      id: 'filters-qol',
      title: 'Filters & QoL',
      category: 'dashboard',
      lastUpdated: new Date().toISOString(),
      content: `
FilterBlade:
https://www.filterblade.xyz/
Neversink's loot filter customization tool

POE Overlay:
https://github.com/PoE-Overlay-Community/PoE-Overlay-Community-Fork
Community fork with trade integration

Exile Diary:
https://github.com/briansd9/exile-diary
Automatically track mapping progress and income`
    },
    'leveling-progression': {
      id: 'leveling-progression',
      title: 'Leveling & Progression',
      category: 'dashboard',
      lastUpdated: new Date().toISOString(),
      content: `
POE-Leveling-Guide:
https://github.com/JusKillmeQik/PoE-Leveling-Guide
AutoHotkey overlay with zone progression tracking

Grinding.Zone:
https://grinding.zone/
Comprehensive leveling guides and zone information

POE Atlas:
https://poeatlas.net/
Interactive atlas navigation and progression tracking`
    }
  }

  if (category && dashboardData[category]) {
    return NextResponse.json(dashboardData[category])
  }

  return NextResponse.json(Object.values(dashboardData))
}

function getVendorRecipeContent(category: string | null): NextResponse {
  const recipeData: Record<string, PopupContent> = {
    'currency': {
      id: 'currency',
      title: 'Currency Recipes',
      category: 'vendor-recipes',
      lastUpdated: new Date().toISOString(),
      content: `
Chromatic Orb:
R-G-B linked item → 1 Chromatic Orb

Jeweller's Orb:
6 socket item → 7 Jeweller's Orbs

Fusing Orb:
6 linked item → 20 Orbs of Fusing

Orb of Alchemy:
3 same base rare items (different names) → 1 Orb of Alchemy

Orb of Chance:
3 same base magic items (different names) → 1 Orb of Chance

Orb of Augmentation:
3 same base normal items (different names) → 1 Orb of Augmentation`
    },
    'equipment': {
      id: 'equipment',
      title: 'Equipment Recipes',
      category: 'vendor-recipes',
      lastUpdated: new Date().toISOString(),
      content: `
Movement Speed Boots:
Normal boots + Quicksilver Flask + Orb of Augmentation
→ Magic boots with 10% Movement Speed

+1 Lightning Gems Weapon:
Normal weapon + Topaz Ring + Orb of Alteration
→ Magic weapon with +1 to Level of Lightning Gems

+1 Cold Gems Weapon:
Normal weapon + Sapphire Ring + Orb of Alteration
→ Magic weapon with +1 to Level of Cold Gems

+1 Fire Gems Weapon:
Normal weapon + Ruby Ring + Orb of Alteration
→ Magic weapon with +1 to Level of Fire Gems

Life Flask Upgrade:
3 Life Flasks same base type → 1 Life Flask next tier

Mana Flask Upgrade:
3 Mana Flasks same base type → 1 Mana Flask next tier`
    },
    'gems': {
      id: 'gems',
      title: 'Gem Recipes',
      category: 'vendor-recipes',
      lastUpdated: new Date().toISOString(),
      content: `
Gem Quality Reset:
Gem + Orb of Fusing → Same gem level 1 with 20% quality

Portal Gem:
Available from vendors for 1 Portal Scroll

Wisdom Gem:
Available from vendors for 1 Scroll of Wisdom

Note: Most gems are obtained from quest rewards or purchased 
from vendors after completing certain quests. The gem + fusing 
recipe is mainly used for quality gems to restart leveling 
with maximum quality bonus.`
    },
    'flasks': {
      id: 'flasks',
      title: 'Flask Recipes',
      category: 'vendor-recipes',
      lastUpdated: new Date().toISOString(),
      content: `
Iron Flask:
3 Life Flasks + Ruby Ring + Orb of Alteration
→ Magic Iron Flask with increased life recovery

Granite Flask:
3 Utility Flasks + Blacksmith's Whetstone
→ Granite Flask

Note: Flask upgrading generally follows the pattern of 
3 flasks of same base type → 1 flask of next tier. 
Special flasks like Iron and Granite require specific 
combinations as shown above.`
    }
  }

  if (category && recipeData[category]) {
    return NextResponse.json(recipeData[category])
  }

  return NextResponse.json(Object.values(recipeData))
}

function getPopupContent(category: string | null): NextResponse {
  // Generate content using the same structure as the components
  const popupData: Record<string, PopupContent> = {
    'leveling-guide': {
      id: 'leveling-guide',
      title: 'Leveling Quick Ref',
      category: 'popup',
      lastUpdated: new Date().toISOString(),
      content: `
        <div class="text-xs leading-tight space-y-3">
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Key Zones & Levels</h3>
            <div class="grid grid-cols-2 gap-2 mt-1 text-[10px]">
              <div>A1: Coast (2), Mud (4), Ledge (5)</div>
              <div>A2: Forest (8), Wetlands (12), Vaal (15)</div>
              <div>A3: City (20), Docks (22), Library (24)</div>
              <div>A4: Mines (26), Belly (29), Dried (31)</div>
            </div>
          </div>
          
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Resistance Penalties</h3>
            <div class="text-[10px]">
              <div>Act 5: -30% all res</div>
              <div>Act 10: -60% all res</div>
              <div class="text-yellow-400">Priority: Fire > Cold > Lightning</div>
            </div>
          </div>
          
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Must-Have Items</h3>
            <div class="text-[10px] space-y-1">
              <div>• Movement speed boots (10%+)</div>
              <div>• Quicksilver flask (ASAP)</div>
              <div>• Life flasks with bleed immunity</div>
              <div>• Resist gear for act 5 & 10</div>
            </div>
          </div>
          
          <div>
            <h3 class="text-poe-gold font-bold">Efficiency Tips</h3>
            <div class="text-[10px] space-y-1">
              <div>• Stay within 3 levels of zone</div>
              <div>• Don't over-farm early zones</div>
              <div>• Complete skill point quests</div>
              <div>• Use movement skills constantly</div>
            </div>
          </div>
        </div>`
    },
    'atlas-quick': {
      id: 'atlas-quick',
      title: 'Atlas Quick Reference',
      category: 'popup',
      lastUpdated: new Date().toISOString(),
      content: `
        <div class="text-xs leading-tight space-y-3">
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Progression Priority</h3>
            <div class="text-[10px] space-y-1">
              <div>1. Complete all white map bonuses</div>
              <div>2. Complete yellow map bonuses (rare)</div>
              <div>3. Complete red map bonuses (corrupted)</div>
              <div>4. Maven witness (10 maps)</div>
            </div>
          </div>
          
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">League Start Mechanics</h3>
            <div class="grid grid-cols-2 gap-2 text-[10px]">
              <div>
                <div class="text-yellow-400">Easy Currency:</div>
                <div>• Essence</div>
                <div>• Strongbox</div>
                <div>• Expedition</div>
              </div>
              <div>
                <div class="text-yellow-400">Advanced:</div>
                <div>• Breach</div>
                <div>• Delirium</div>
                <div>• Blight</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-poe-gold font-bold">Atlas Passive Strategy</h3>
            <div class="text-[10px] space-y-1">
              <div>• Focus on 2-3 mechanics max</div>
              <div>• Take generic nodes first</div>
              <div>• Specialize after maven completion</div>
              <div>• Respec costs 5 orbs of regret</div>
            </div>
          </div>
        </div>`
    },
    'movement-boots': {
      id: 'movement-boots',
      title: 'Movement Boots Recipe',
      category: 'popup',
      lastUpdated: new Date().toISOString(),
      content: `
        <div class="text-xs leading-tight space-y-3">
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Recipe</h3>
            <div class="bg-gray-800 p-2 rounded text-[11px]">
              <div class="text-yellow-400">Normal Boots + Quicksilver Flask + Augmentation</div>
              <div class="mt-1">= Magic boots with 10% movement speed</div>
            </div>
          </div>
          
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Search Patterns (Vendor)</h3>
            <div class="text-[10px] font-mono space-y-1">
              <div class="text-blue-400">3 Blue: "nt speed".*"b-b-b"</div>
              <div class="text-green-400">3 Green: "nt speed".*"g-g-g"</div>
              <div class="text-red-400">3 Red: "nt speed".*"r-r-r"</div>
              <div class="text-purple-400">RGB: "nt speed".*"[rgb]-[rgb]-[rgb]"</div>
            </div>
          </div>
          
          <div>
            <h3 class="text-poe-gold font-bold">Priority Order</h3>
            <div class="text-[10px] space-y-1">
              <div>1. Any movement speed boots</div>
              <div>2. Correct socket colors</div>
              <div>3. Life/resistance rolls</div>
              <div>4. Base type (Iron, Steel, etc.)</div>
            </div>
          </div>
        </div>`
    },
    'trading-quick': {
      id: 'trading-quick',
      title: 'Trading Quick Links',
      category: 'popup',
      lastUpdated: new Date().toISOString(),
      content: `
        <div class="text-xs leading-tight space-y-3">
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Essential Sites</h3>
            <div class="text-[10px] space-y-1">
              <div><span class="text-yellow-400">Official Trade:</span> pathofexile.com/trade</div>
              <div><span class="text-yellow-400">POE Ninja:</span> poe.ninja (prices)</div>
              <div><span class="text-yellow-400">Awakened Trade:</span> github overlay</div>
            </div>
          </div>
          
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Quick Search Tips</h3>
            <div class="text-[10px] space-y-1">
              <div>• Use stat filters for specific mods</div>
              <div>• Set max price for budget searches</div>
              <div>• Check "online only" for faster trades</div>
              <div>• Use pseudo mods for life/resist totals</div>
            </div>
          </div>
          
          <div>
            <h3 class="text-poe-gold font-bold">Currency Exchange</h3>
            <div class="text-[10px] space-y-1">
              <div>• Use currency.poe.ninja for rates</div>
              <div>• Bulk exchanges save time</div>
              <div>• Watch for market manipulation</div>
              <div>• Buy in bulk for better rates</div>
            </div>
          </div>
        </div>`
    },
    'vendor-recipes': {
      id: 'vendor-recipes',
      title: 'Essential Vendor Recipes',
      category: 'popup',
      lastUpdated: new Date().toISOString(),
      content: `
        <div class="text-xs leading-tight space-y-2">
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Currency Recipes</h3>
            <div class="text-[10px] space-y-1">
              <div><span class="text-yellow-400">Chromatic:</span> RGB linked item</div>
              <div><span class="text-yellow-400">Jewellers:</span> 6 socket item → 7 jewellers</div>
              <div><span class="text-yellow-400">Fusing:</span> 6 link item → 20 fusing</div>
              <div><span class="text-yellow-400">Chaos:</span> Full rare set ilvl 60-74</div>
            </div>
          </div>
          
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Chaos Recipe Items</h3>
            <div class="grid grid-cols-2 gap-1 text-[10px]">
              <div>• Weapon (2H or 1H+Shield)</div>
              <div>• Helmet</div>
              <div>• Body Armor</div>
              <div>• Gloves</div>
              <div>• Boots</div>
              <div>• Belt</div>
              <div>• 2x Rings</div>
              <div>• Amulet</div>
            </div>
          </div>
          
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Weapon Mods</h3>
            <div class="text-[10px] space-y-1">
              <div><span class="text-red-400">+1 Fire:</span> Weapon + Ruby Ring + Alt</div>
              <div><span class="text-blue-400">+1 Cold:</span> Weapon + Sapphire Ring + Alt</div>
              <div><span class="text-yellow-400">+1 Lightning:</span> Weapon + Topaz Ring + Alt</div>
            </div>
          </div>
          
          <div>
            <h3 class="text-poe-gold font-bold">Movement Recipe</h3>
            <div class="text-[10px]">
              <div><span class="text-green-400">10% Move Speed:</span> Boots + Quicksilver + Aug</div>
            </div>
          </div>
        </div>`
    },
    'heist-table': {
      id: 'heist-table',
      title: 'Heist Quick Reference',
      category: 'popup',
      lastUpdated: new Date().toISOString(),
      content: `
        <div class="text-xs leading-tight space-y-3">
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Rogue Skills</h3>
            <div class="grid grid-cols-2 gap-2 text-[10px]">
              <div>
                <div class="text-yellow-400">Physical:</div>
                <div>• Lockpicking (doors/chests)</div>
                <div>• Brute Force (barriers)</div>
                <div>• Demolition (walls)</div>
              </div>
              <div>
                <div class="text-blue-400">Technical:</div>
                <div>• Engineering (devices)</div>
                <div>• Trap Disarmament</div>
                <div>• Perception (secrets)</div>
              </div>
            </div>
          </div>
          
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Alert Management</h3>
            <div class="text-[10px] space-y-1">
              <div>• Killing = high alert gain</div>
              <div>• Opening doors/chests = medium</div>
              <div>• Walking = no alert</div>
              <div>• <span class="text-red-400">Lockdown = mission failed</span></div>
            </div>
          </div>
          
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Valuable Rewards</h3>
            <div class="text-[10px] space-y-1">
              <div>• <span class="text-purple-400">Experimented items</span> (alt quality)</div>
              <div>• <span class="text-yellow-400">Replica uniques</span></div>
              <div>• <span class="text-green-400">Enchanted weapons/armor</span></div>
              <div>• <span class="text-blue-400">Currency/gems</span></div>
            </div>
          </div>
          
          <div>
            <h3 class="text-poe-gold font-bold">Strategy</h3>
            <div class="text-[10px] space-y-1">
              <div>• Plan route before starting</div>
              <div>• Upgrade rogue equipment</div>
              <div>• Avoid combat when possible</div>
              <div>• Focus on high-value targets</div>
            </div>
          </div>
        </div>`
    },
    'weapon-bases': {
      id: 'weapon-bases',
      title: 'Weapon Base Types',
      category: 'popup',
      lastUpdated: new Date().toISOString(),
      content: `
        <div class="text-xs leading-tight space-y-3">
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Two-Handed Axes</h3>
            <div class="grid grid-cols-2 gap-2 text-[10px]">
              <div>
                <div class="text-yellow-400">High DPS:</div>
                <div>• Vaal Axe (ilvl 64)</div>
                <div>• Fleshripper (ilvl 70)</div>
                <div>• Despot Axe (ilvl 66)</div>
              </div>
              <div>
                <div class="text-green-400">Speed:</div>
                <div>• Siege Axe (fast)</div>
                <div>• Reaver Axe (medium)</div>
                <div>• Headsman Axe (med)</div>
              </div>
            </div>
          </div>
          
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">One-Handed Axes</h3>
            <div class="grid grid-cols-2 gap-2 text-[10px]">
              <div>
                <div class="text-red-400">High Damage:</div>
                <div>• Siege Axe (ilvl 60)</div>
                <div>• Reaver Axe (ilvl 62)</div>
                <div>• Butcher Axe (ilvl 64)</div>
              </div>
              <div>
                <div class="text-blue-400">Fast:</div>
                <div>• Tomahawk (1.4 aps)</div>
                <div>• War Hatchet (1.25)</div>
                <div>• Cleaver (1.2 aps)</div>
              </div>
            </div>
          </div>
          
          <div class="border-b border-poe-gold pb-2">
            <h3 class="text-poe-gold font-bold">Crafting Priority</h3>
            <div class="text-[10px] space-y-1">
              <div>1. <span class="text-yellow-400">Item Level 83+</span> (T1 mods)</div>
              <div>2. <span class="text-green-400">Influenced bases</span> (Elder/Shaper)</div>
              <div>3. <span class="text-blue-400">6-linked</span> (for 2H weapons)</div>
              <div>4. <span class="text-purple-400">Good base type</span> (DPS or speed)</div>
            </div>
          </div>
          
          <div>
            <h3 class="text-poe-gold font-bold">Socket Priority</h3>
            <div class="text-[10px] space-y-1">
              <div>• 2H: 6L for main skill</div>
              <div>• 1H: 3L for support gems</div>
              <div>• Colors: depends on skill gems</div>
              <div>• Use jewellers/fusings wisely</div>
            </div>
          </div>
        </div>`
    }
  }

  if (category && popupData[category]) {
    const response = NextResponse.json(popupData[category])
    
    // Add performance headers
    response.headers.set('Cache-Control', 'public, max-age=1800, s-maxage=1800') // 30 minutes
    response.headers.set('ETag', `"popup-${category}-v1"`)
    
    return response
  }

  // Return all popup categories if no specific category
  const response = NextResponse.json(Object.values(popupData))
  response.headers.set('Cache-Control', 'public, max-age=1800, s-maxage=1800')
  response.headers.set('ETag', `"popup-all-v1"`)
  
  return response
}