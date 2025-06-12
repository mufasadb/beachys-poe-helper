'use client'
import { useState, useEffect } from 'react'

export default function CheatSheets() {
  const [activeTab, setActiveTab] = useState('leveling')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const tabs = [
    { id: 'leveling', name: 'Leveling', icon: '📈' },
    { id: 'atlas', name: 'Atlas', icon: '🗺️' },
    { id: 'settlers', name: 'Settlers', icon: '🏘️' },
    { id: 'sanctum', name: 'Sanctum', icon: '⛪' },
    { id: 'expedition', name: 'Expedition', icon: '💣' },
    { id: 'heist', name: 'Heist', icon: '🔓' },
    { id: 'betrayal', name: 'Betrayal', icon: '🗡️' },
    { id: 'delve', name: 'Delve', icon: '⛏️' },
    { id: 'incursion', name: 'Incursion', icon: '🏛️' },
    { id: 'mercenary', name: 'Mercenary Gear', icon: '⚔️' },
    { id: 'trial', name: 'Trial', icon: '⚖️' }
  ]

  if (!isClient) {
    return (
      <main className="min-h-screen p-8 max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-poe-gold mb-4">POE Cheat Sheets</h1>
          <p className="text-xl text-gray-300">Community-compiled guides and quick references for Path of Exile</p>
        </header>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-400">Loading...</div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-poe-gold mb-2">POE Cheat Sheets</h1>
        <p className="text-lg text-gray-300">Community-compiled guides and quick references for Path of Exile</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-poe-gold text-poe-dark font-semibold'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        {activeTab === 'leveling' && <LevelingGuide />}
        {activeTab === 'atlas' && <AtlasGuide />}
        {activeTab === 'settlers' && <SettlersGuide />}
        {activeTab === 'sanctum' && <SanctumGuide />}
        {activeTab === 'expedition' && <ExpeditionGuide />}
        {activeTab === 'heist' && <HeistGuide />}
        {activeTab === 'betrayal' && <BetrayalGuide />}
        {activeTab === 'delve' && <DelveGuide />}
        {activeTab === 'incursion' && <IncursionGuide />}
        {activeTab === 'mercenary' && <MercenaryGearGuide />}
        {activeTab === 'trial' && <TrialGuide />}
      </div>
    </main>
  )
}

function LevelingGuide() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <img src="/images/items/gem-icon.png" alt="Leveling" className="w-6 h-6 mr-3" />
        <h2 className="text-2xl font-bold text-poe-gold">Leveling Guide - Item Acquisition Pattern</h2>
      </div>
      
      {/* Essential Vendor Recipes Section */}
      <div className="mb-8 bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 border border-yellow-600/30 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-yellow-400">Essential Vendor Recipes</h3>
          <div className="flex gap-2">
            <a href="/search-templates" className="bg-poe-gold text-poe-dark px-3 py-1 rounded text-sm font-medium hover:bg-yellow-400 transition-colors">
              Vendor Search Filters →
            </a>
            <a href="/search-templates" className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-500 transition-colors">
              Search Templates →
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800/50 p-4 rounded">
            <h4 className="font-semibold text-poe-gold mb-2">Physical Damage % (Weapons)</h4>
            <div className="flex items-center gap-2 mb-2">
              <img src="/images/items/axe.png" alt="Magic/Rare Weapon" className="w-6 h-6" title="Magic/Rare Weapon" />
              <span className="text-gray-400">+</span>
              <img src="/images/items/rustic-sash.png" alt="Rustic Sash" className="w-6 h-6" title="Rustic Sash" />
              <span className="text-gray-400">+</span>
              <img src="/images/items/whetstone.png" alt="Blacksmith's Whetstone" className="w-6 h-6" title="Blacksmith's Whetstone" />
            </div>
            <p className="text-xs text-yellow-400">Result: Weapon with %increased Physical Damage modifier</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded">
            <h4 className="font-semibold text-poe-gold mb-2">Movement Speed (Boots)</h4>
            <div className="flex items-center gap-2 mb-2">
              <img src="/images/items/boots.png" alt="Normal Boots" className="w-6 h-6" title="Normal Boots" />
              <span className="text-gray-400">+</span>
              <img src="/images/items/quicksilver-flask.png" alt="Quicksilver Flask" className="w-6 h-6" title="Quicksilver Flask" />
              <span className="text-gray-400">+</span>
              <img src="/images/items/orb-augmentation.png" alt="Orb of Augmentation" className="w-6 h-6" title="Orb of Augmentation" />
            </div>
            <p className="text-xs text-yellow-400">Result: Magic boots with 10% increased Movement Speed</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Item Acquisition Checklist */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Item Acquisition Priority</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-3">Level 1-12 (Acts 1-2)</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-poe-gold" />
                  <span className="text-sm text-gray-300">Movement Speed Boots (vendor recipe)</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-poe-gold" />
                  <span className="text-sm text-gray-300">Quicksilver Flask</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-poe-gold" />
                  <span className="text-sm text-gray-300">4-link weapon/chest</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-poe-gold" />
                  <span className="text-sm text-gray-300">Basic resist gear (30%+ each)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-3">Level 12-32 (Acts 3-5)</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-poe-gold" />
                  <span className="text-sm text-gray-300">5-link setup</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-poe-gold" />
                  <span className="text-sm text-gray-300">Life &gt; 1000 HP</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-poe-gold" />
                  <span className="text-sm text-gray-300">Resist cap preparation (75%)</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-poe-gold" />
                  <span className="text-sm text-gray-300">Portal at Ossuary (Act 5)</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-3">Level 32-45 (Acts 6-8)</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-poe-gold" />
                  <span className="text-sm text-gray-300">Life &gt; 2000 HP</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-poe-gold" />
                  <span className="text-sm text-gray-300">All resist 75%+ after penalty</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-poe-gold" />
                  <span className="text-sm text-gray-300">Portal at Blood Aqueducts (farming)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Labyrinth Timing & Strategy */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Labyrinth Timing</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">Normal Lab - Level 33</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Complete after Act 3</li>
                <li>• 2000+ HP recommended</li>
                <li>• Bring extra life/mana flasks</li>
                <li>• Focus on Izaro mechanics</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">Cruel Lab - Level 55</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Complete after Act 7</li>
                <li>• 3500+ HP recommended</li>
                <li>• All resists capped</li>
                <li>• Bleed immunity flask helpful</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-400 mb-2">Merciless Lab - Level 68</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Complete after Act 10</li>
                <li>• 4500+ HP recommended</li>
                <li>• Consider twice enchanted prophecy</li>
                <li>• Practice Izaro phases</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded border-l-4 border-red-500">
              <h4 className="font-semibold text-red-400 mb-2">Eternal Lab - Level 75+</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Endgame lab farming</li>
                <li>• 6000+ HP recommended</li>
                <li>• Offering to the Goddess required</li>
                <li>• Helmet enchant farming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Keep Resistance Priority Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Resistance Priority</h3>
        <div className="bg-gray-800 p-4 rounded">
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
              <strong>Act 5:</strong> -30% all resistances penalty
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-red-600 rounded-full mr-3"></span>
              <strong>Act 10:</strong> -60% all resistances penalty (total)
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
              <strong>Priority order:</strong> Fire &gt; Cold &gt; Lightning &gt; Chaos
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-gray-500 rounded-full mr-3"></span>
              <strong>Chaos resistance:</strong> Not crucial early game
            </li>
          </ul>
        </div>
      </div>

      {/* 2H Axes Progression Section */}
      <div className="mt-8 bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-600/30 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center">
          <img src="/images/items/axe.svg" alt="2H Axes" className="w-6 h-6 mr-3" />
          2-Handed Axe Progression
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 p-4 rounded border border-gray-600">
            <div className="flex items-center mb-2">
              <img src="/images/items/stone-axe.png" alt="Stone Axe" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Stone Axe</h4>
                <p className="text-xs text-gray-400">Level 1 • Act 1</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">Starting weapon option</p>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded border border-gray-600">
            <div className="flex items-center mb-2">
              <img src="/images/items/timber-axe.png" alt="Timber Axe" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Timber Axe</h4>
                <p className="text-xs text-gray-400">Level 5 • Act 1</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">Early game upgrade</p>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded border border-gray-600">
            <div className="flex items-center mb-2">
              <img src="/images/items/headsman-axe.png" alt="Headsman Axe" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Headsman Axe</h4>
                <p className="text-xs text-gray-400">Level 12 • Act 1-2</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">Mid Act 1-2 weapon</p>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded border border-gray-600">
            <div className="flex items-center mb-2">
              <img src="/images/items/noble-axe.png" alt="Noble Axe" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Noble Axe</h4>
                <p className="text-xs text-gray-400">Level 24 • Act 3-4</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">Late Act 3-4 option</p>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded border border-gray-600">
            <div className="flex items-center mb-2">
              <img src="/images/items/ezomyte-axe.png" alt="Ezomyte Axe" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Ezomyte Axe</h4>
                <p className="text-xs text-gray-400">Level 40 • Act 6-7</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">Act 6-7 progression</p>
          </div>
          
          <div className="bg-gray-800/50 p-4 rounded border border-gray-600">
            <div className="flex items-center mb-2">
              <img src="/images/items/vaal-axe.png" alt="Vaal Axe" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Vaal Axe</h4>
                <p className="text-xs text-gray-400">Level 64 • Act 9-10</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">Endgame base type</p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-gray-800/30 rounded">
          <p className="text-sm text-gray-300">
            <strong className="text-orange-400">Tip:</strong> Use vendor recipes to upgrade your axes with physical damage modifiers for better leveling performance.
          </p>
        </div>
      </div>

      {/* External Links Section */}
      <div className="mt-8 bg-gray-800 p-4 rounded">
        <h3 className="text-lg font-semibold text-poe-gold mb-3">Useful External Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <a href="https://www.poelab.com" target="_blank" rel="noopener noreferrer" 
             className="text-blue-400 hover:text-blue-300 text-sm">
            → PoeLab (Daily Lab Layouts)
          </a>
          <a href="https://wraeclast.com" target="_blank" rel="noopener noreferrer"
             className="text-blue-400 hover:text-blue-300 text-sm">
            → Wraeclast (Interactive Atlas)
          </a>
        </div>
      </div>
    </div>
  )
}

function AtlasGuide() {
  const [activePath, setActivePath] = useState('trade')

  return (
    <div>
      <div className="flex items-center mb-6">
        <img src="/images/items/map-icon.png" alt="Atlas" className="w-6 h-6 mr-3" />
        <h2 className="text-2xl font-bold text-poe-gold">Atlas Strategy Guide - 3.26</h2>
      </div>
      
      {/* Path Selection */}
      <div className="mb-8">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActivePath('trade')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activePath === 'trade'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            💰 Trade League Path
          </button>
          <button
            onClick={() => setActivePath('ssf')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activePath === 'ssf'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            🏔️ Solo Self-Found Path
          </button>
        </div>

        {activePath === 'trade' && <TradeLeagueStrategy />}
        {activePath === 'ssf' && <SSFStrategy />}
      </div>

      {/* Map Tier Progression */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Map Tier Progression Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-white/10 to-gray-800 p-4 rounded-lg border border-gray-600">
            <h4 className="font-semibold text-white mb-3 flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
              White Maps (T1-T5)
            </h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Complete all for Atlas bonus</li>
              <li>• Focus on mechanics learning</li>
              <li>• Build your Atlas passive tree</li>
              <li>• Collect Watchstones</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-600/20 to-gray-800 p-4 rounded-lg border border-yellow-600/50">
            <h4 className="font-semibold text-yellow-400 mb-3 flex items-center">
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
              Yellow Maps (T6-T10)
            </h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Specialize Atlas passives</li>
              <li>• Start scarab usage</li>
              <li>• Elderslayer progression</li>
              <li>• Awakening level farming</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-red-600/20 to-gray-800 p-4 rounded-lg border border-red-600/50">
            <h4 className="font-semibold text-red-400 mb-3 flex items-center">
              <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
              Red Maps (T11-T16)
            </h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Endgame boss encounters</li>
              <li>• Maven progression</li>
              <li>• Maximum atlas bonuses</li>
              <li>• Pinnacle content farming</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Profitable Atlas Strategies */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">High-Profit Atlas Mechanics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {atlasStrategies.map((strategy, index) => (
            <div key={index} className={`p-4 rounded-lg border-2 ${strategy.borderColor} ${strategy.bgColor}`}>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{strategy.icon}</span>
                <h4 className="font-semibold text-white">{strategy.name}</h4>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-sm text-gray-400 mr-2">Profit:</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < strategy.profitRating ? 'text-yellow-400' : 'text-gray-600'}`}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-2">{strategy.description}</p>
              <div className="text-xs text-gray-400">
                <strong>Investment:</strong> {strategy.investment}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips and Tricks */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-poe-gold">Atlas Tips & Tricks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-white mb-2">Efficiency Tips</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Always check map mods before entering</li>
              <li>• Use appropriate map device crafts</li>
              <li>• Keep a chaos/alch orb stack ready</li>
              <li>• Monitor your atlas completion bonus</li>
              <li>• Save red tier maps for when you can handle them</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Resource Management</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Don&apos;t waste scarabs on low-tier maps</li>
              <li>• Plan your sextant usage around map runs</li>
              <li>• Keep a diverse map pool for flexibility</li>
              <li>• Trade maps to complete Atlas objectives</li>
              <li>• Use Horizon orbs strategically for completion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function TradeLeagueStrategy() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-900/20 border border-blue-600/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">Trade League Focus: Currency & Efficiency</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-white mb-3">Phase 1: League Start (Days 1-3)</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>✓ Rush to maps ASAP</li>
              <li>✓ Focus on Essence + Strongboxes</li>
              <li>✓ Sell early mapping essences for profit</li>
              <li>✓ Complete white map Atlas bonus quickly</li>
              <li>✓ Prioritize movement speed and survival</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Phase 2: Scaling (Days 4-7)</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>✓ Add Expedition for guaranteed currency</li>
              <li>✓ Start investing in scarabs</li>
              <li>✓ Focus on yellow map completion</li>
              <li>✓ Begin specialized Atlas passive tree</li>
              <li>✓ Trade for missing map completions</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-blue-800/20 rounded">
          <p className="text-sm text-blue-200">
            <strong>Pro Tip:</strong> In trade league, efficiency beats perfection. Don&apos;t min-max your Atlas tree early - focus on getting to red maps quickly and making currency.
          </p>
        </div>
      </div>
    </div>
  )
}

function SSFStrategy() {
  return (
    <div className="space-y-6">
      <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-400 mb-4">SSF Focus: Self-Sufficiency & Crafting</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-white mb-3">Phase 1: Foundation Building</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>✓ Heavy focus on Essence for gear crafting</li>
              <li>✓ Prioritize Harbinger for orb fragments</li>
              <li>✓ Complete ALL Atlas bonus objectives</li>
              <li>✓ Collect every Wisdom/Portal scroll</li>
              <li>✓ Hoard crafting materials</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Phase 2: Specialization</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>✓ Add Blight for anoint oils</li>
              <li>✓ Legion for additional gear and jewels</li>
              <li>✓ Delve for fossils and crafting bases</li>
              <li>✓ Incursion for corruption chambers</li>
              <li>✓ Build towards specific unique items</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-green-800/20 rounded">
          <p className="text-sm text-green-200">
            <strong>SSF Tip:</strong> Plan your Atlas tree around specific gear needs. If you need specific unique items, prioritize mechanics that drop them or provide relevant div cards.
          </p>
        </div>
      </div>
    </div>
  )
}

const atlasStrategies = [
  {
    name: "Essence Farming",
    icon: "💎",
    profitRating: 4,
    borderColor: "border-purple-500",
    bgColor: "bg-purple-900/20",
    description: "Guaranteed rare item crafting with specific modifiers",
    investment: "Low - Atlas points only"
  },
  {
    name: "Expedition Currency",
    icon: "💣",
    profitRating: 5,
    borderColor: "border-orange-500",
    bgColor: "bg-orange-900/20",
    description: "Consistent raw currency and vendor gambling",
    investment: "Low-Medium - Scarabs recommended"
  },
  {
    name: "Blight Oil Farm",
    icon: "🕸️",
    profitRating: 4,
    borderColor: "border-green-500",
    bgColor: "bg-green-900/20",
    description: "Valuable oils for anointments and selling",
    investment: "Medium - Requires tower strategy"
  },
  {
    name: "Legion Monoliths",
    icon: "⚔️",
    profitRating: 3,
    borderColor: "border-red-500",
    bgColor: "bg-red-900/20",
    description: "Splinters for 5-way carries and unique items",
    investment: "High - Need good clear speed"
  },
  {
    name: "Delirium Mirror",
    icon: "🌀",
    profitRating: 5,
    borderColor: "border-gray-500",
    bgColor: "bg-gray-900/20",
    description: "Highest currency per hour when optimized",
    investment: "Very High - Requires meta build"
  },
  {
    name: "Harbinger Shards",
    icon: "🌊",
    profitRating: 3,
    borderColor: "border-blue-500",
    bgColor: "bg-blue-900/20",
    description: "Steady currency income and ancient orbs",
    investment: "Low - Great for league start"
  }
]

function SettlersGuide() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <img src="/images/items/Ancient_City_Map_%28Settlers%29_inventory_icon.png" alt="Settlers" className="w-6 h-6 mr-3" />
        <h2 className="text-2xl font-bold text-poe-gold">Settlers of Kalguur</h2>
      </div>
      
      <div className="bg-gray-800 p-4 rounded mb-6">
        <h3 className="text-xl font-semibold mb-3 text-poe-gold">Overview</h3>
        <p className="text-gray-300">
          Settlers league focuses on building and managing a town with various NPCs that provide 
          specialized crafting and resource management services using Kalguuran materials.
        </p>
      </div>

      {/* Dust Usage Priority Table */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Dust Usage Priority Guide</h3>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left p-3 text-poe-gold">Priority</th>
                <th className="text-left p-3 text-poe-gold">Service</th>
                <th className="text-left p-3 text-poe-gold">Dust Cost</th>
                <th className="text-left p-3 text-poe-gold">Value Rating</th>
                <th className="text-left p-3 text-poe-gold">Notes</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold text-green-400">High</td>
                <td className="p-3">Currency Exchange</td>
                <td className="p-3">50-200</td>
                <td className="p-3">⭐⭐⭐⭐⭐</td>
                <td className="p-3">Essential for league start economy</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold text-green-400">High</td>
                <td className="p-3">Mapping Services</td>
                <td className="p-3">100-300</td>
                <td className="p-3">⭐⭐⭐⭐⭐</td>
                <td className="p-3">Atlas progression and map sustain</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold text-yellow-400">Medium</td>
                <td className="p-3">Weapon Crafting</td>
                <td className="p-3">150-400</td>
                <td className="p-3">⭐⭐⭐⭐</td>
                <td className="p-3">Significant gear upgrades</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold text-yellow-400">Medium</td>
                <td className="p-3">Gem Quality</td>
                <td className="p-3">75-250</td>
                <td className="p-3">⭐⭐⭐</td>
                <td className="p-3">20% quality gem upgrades</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold text-red-400">Low</td>
                <td className="p-3">Cosmetic Upgrades</td>
                <td className="p-3">500+</td>
                <td className="p-3">⭐</td>
                <td className="p-3">Visual improvements only</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-red-400">Low</td>
                <td className="p-3">Resource Stockpiling</td>
                <td className="p-3">Variable</td>
                <td className="p-3">⭐⭐</td>
                <td className="p-3">Save for better opportunities</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* NPC Services Table */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Essential NPC Services</h3>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left p-3 text-poe-gold">NPC</th>
                <th className="text-left p-3 text-poe-gold">Primary Service</th>
                <th className="text-left p-3 text-poe-gold">Unlock Cost</th>
                <th className="text-left p-3 text-poe-gold">Max Level</th>
                <th className="text-left p-3 text-poe-gold">Best Use Case</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Johan the King</td>
                <td className="p-3">Currency Exchange</td>
                <td className="p-3">Free</td>
                <td className="p-3">10</td>
                <td className="p-3">Converting basic currency</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Keira</td>
                <td className="p-3">Gem Quality</td>
                <td className="p-3">100 Dust</td>
                <td className="p-3">8</td>
                <td className="p-3">20% quality gems</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Raulf</td>
                <td className="p-3">Weapon Reforging</td>
                <td className="p-3">200 Dust</td>
                <td className="p-3">8</td>
                <td className="p-3">Weapon base improvements</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Tujen</td>
                <td className="p-3">Map Enhancement</td>
                <td className="p-3">150 Dust</td>
                <td className="p-3">10</td>
                <td className="p-3">Map quality and quantity</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Rog</td>
                <td className="p-3">Armor Crafting</td>
                <td className="p-3">250 Dust</td>
                <td className="p-3">8</td>
                <td className="p-3">Defensive gear upgrades</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Dannig</td>
                <td className="p-3">Logbook Enhancement</td>
                <td className="p-3">300 Dust</td>
                <td className="p-3">6</td>
                <td className="p-3">Expedition logistics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Resource Management Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Dust Farming Tips</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Efficient Collection</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Complete shipments every hour</li>
                <li>• Prioritize high-yield nodes</li>
                <li>• Use Atlas passive points for Kalguur</li>
                <li>• Run Kalguuran maps when available</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Conservation Strategy</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Don&apos;t upgrade all NPCs immediately</li>
                <li>• Focus on 2-3 key services first</li>
                <li>• Save dust for meta-relevant upgrades</li>
                <li>• Consider league duration for investments</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Town Planning Strategy</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Early League (Days 1-7)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Focus on Johan for currency needs</li>
                <li>• Unlock Tujen for mapping support</li>
                <li>• Save dust for key upgrades</li>
                <li>• Establish basic resource flow</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Mid League (Week 2+)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Max out highest value NPCs</li>
                <li>• Diversify service offerings</li>
                <li>• Optimize for endgame content</li>
                <li>• Consider specialized builds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mt-8 bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 border border-yellow-600/30 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-yellow-400 mb-3">Quick Reference - Best Value Upgrades</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-semibold text-poe-gold">League Start:</span>
            <div className="text-gray-300">Johan Level 5 → Currency flow</div>
          </div>
          <div>
            <span className="font-semibold text-poe-gold">Early Maps:</span>
            <div className="text-gray-300">Tujen Level 6 → Map sustain</div>
          </div>
          <div>
            <span className="font-semibold text-poe-gold">Endgame:</span>
            <div className="text-gray-300">Keira Level 8 → 20% gems</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SanctumGuide() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <img src="/images/items/Sacrifice_at_Dusk_inventory_icon.png" alt="Sanctum" className="w-6 h-6 mr-3" />
        <h2 className="text-2xl font-bold text-poe-gold">Sanctum Guide</h2>
      </div>
      
      <div className="bg-gray-800 p-4 rounded mb-6">
        <h3 className="text-xl font-semibold mb-3 text-poe-gold">Overview</h3>
        <p className="text-gray-300">
          Sanctum is a risk/reward mechanic where you navigate rooms using Resolve (health). 
          Plan your path carefully to maximize rewards while managing your limited Resolve pool.
        </p>
      </div>

      {/* Main Sanctum Room Table */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Sanctum Room Priority Guide</h3>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left p-3 text-poe-gold">Room Type</th>
                <th className="text-left p-3 text-poe-gold">Priority</th>
                <th className="text-left p-3 text-poe-gold">Resolve Cost</th>
                <th className="text-left p-3 text-poe-gold">Reward Type</th>
                <th className="text-left p-3 text-poe-gold">Notes</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Currency Room</td>
                <td className="p-3 text-green-400">⭐⭐⭐⭐⭐</td>
                <td className="p-3">Medium</td>
                <td className="p-3">Direct Currency</td>
                <td className="p-3">Always prioritize, guaranteed value</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Divination Cards</td>
                <td className="p-3 text-green-400">⭐⭐⭐⭐⭐</td>
                <td className="p-3">Medium</td>
                <td className="p-3">High-Value Cards</td>
                <td className="p-3">Potential jackpot rewards</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Unique Items</td>
                <td className="p-3 text-green-400">⭐⭐⭐⭐</td>
                <td className="p-3">High</td>
                <td className="p-3">Unique Equipment</td>
                <td className="p-3">Build-enabling or valuable uniques</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Resolve Fountain</td>
                <td className="p-3 text-blue-400">⭐⭐⭐⭐</td>
                <td className="p-3">None (Restores)</td>
                <td className="p-3">+50-100 Resolve</td>
                <td className="p-3">Essential for deep runs</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Relic Altar</td>
                <td className="p-3 text-yellow-400">⭐⭐⭐</td>
                <td className="p-3">Low</td>
                <td className="p-3">Sanctum Relics</td>
                <td className="p-3">Permanent Sanctum upgrades</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Accursed Ritual</td>
                <td className="p-3 text-yellow-400">⭐⭐⭐</td>
                <td className="p-3">Variable</td>
                <td className="p-3">High Risk/Reward</td>
                <td className="p-3">Can backfire, read carefully</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Templar Laboratory</td>
                <td className="p-3 text-yellow-400">⭐⭐⭐</td>
                <td className="p-3">Medium</td>
                <td className="p-3">Quality Gems</td>
                <td className="p-3">20% quality skill gems</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Merchant</td>
                <td className="p-3 text-yellow-400">⭐⭐</td>
                <td className="p-3">Low</td>
                <td className="p-3">Purchase Items</td>
                <td className="p-3">Situational, depends on stock</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Minor Treasure</td>
                <td className="p-3 text-gray-400">⭐⭐</td>
                <td className="p-3">Low</td>
                <td className="p-3">Small Rewards</td>
                <td className="p-3">Filler rooms, low impact</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Deferral Room</td>
                <td className="p-3 text-red-400">⭐</td>
                <td className="p-3">High</td>
                <td className="p-3">Delayed Punishment</td>
                <td className="p-3">Avoid unless desperate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Relic Priority Table */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Sanctum Relic Priority</h3>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left p-3 text-poe-gold">Relic Name</th>
                <th className="text-left p-3 text-poe-gold">Effect</th>
                <th className="text-left p-3 text-poe-gold">Priority</th>
                <th className="text-left p-3 text-poe-gold">Use Case</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Resolve Boost Relics</td>
                <td className="p-3">+Max Resolve</td>
                <td className="p-3 text-green-400">⭐⭐⭐⭐⭐</td>
                <td className="p-3">Enables deeper runs consistently</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Resolve Efficiency</td>
                <td className="p-3">Reduced room costs</td>
                <td className="p-3 text-green-400">⭐⭐⭐⭐</td>
                <td className="p-3">More rooms per run</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Aureus Coins</td>
                <td className="p-3">Improved room rewards</td>
                <td className="p-3 text-yellow-400">⭐⭐⭐</td>
                <td className="p-3">Better reward scaling</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 font-semibold">Room Reveal</td>
                <td className="p-3">See room types ahead</td>
                <td className="p-3 text-yellow-400">⭐⭐⭐</td>
                <td className="p-3">Better path planning</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Defensive Relics</td>
                <td className="p-3">Reduce guard damage</td>
                <td className="p-3 text-blue-400">⭐⭐</td>
                <td className="p-3">Safer but slower runs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Strategy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Path Planning Strategy</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Early Floors (1-3)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Focus on Resolve fountains and relics</li>
                <li>• Build sustainable resolve pool</li>
                <li>• Avoid high-cost rooms</li>
                <li>• Establish baseline for deeper floors</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Deep Floors (4+)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Prioritize currency and div card rooms</li>
                <li>• Calculate resolve costs carefully</li>
                <li>• Plan exit strategy</li>
                <li>• Don&apos;t get greedy with low resolve</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Build Considerations</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Recommended Builds</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• High mobility builds (avoid guards)</li>
                <li>• Tanky builds with recovery</li>
                <li>• Builds with good AoE clear</li>
                <li>• Minion builds (AI handles guards)</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Avoid These Builds</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Glass cannon builds</li>
                <li>• Builds requiring close combat</li>
                <li>• Slow movement builds</li>
                <li>• Heavy mana reservation builds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="mt-8 bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-600/30 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-blue-400 mb-3">Quick Sanctum Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-semibold text-poe-gold">Golden Rule:</span>
            <div className="text-gray-300">Always prioritize Resolve fountains early</div>
          </div>
          <div>
            <span className="font-semibold text-poe-gold">Safety First:</span>
            <div className="text-gray-300">Exit with 50+ resolve if possible</div>
          </div>
          <div>
            <span className="font-semibold text-poe-gold">Greed Check:</span>
            <div className="text-gray-300">Currency rooms are worth the risk</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ExpeditionGuide() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <img src="/images/items/fragment-icon.png" alt="Expedition" className="w-6 h-6 mr-3" />
        <h2 className="text-2xl font-bold text-poe-gold">Expedition Logbook Fragments</h2>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-white">Logbook Fragment Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-700/50 p-4 rounded border-l-4 border-red-500">
            <h4 className="font-semibold text-red-400 mb-2">Kalguuran Logbook</h4>
            <p className="text-sm text-gray-300">Base logbook type for general expedition areas</p>
          </div>
          
          <div className="bg-gray-700/50 p-4 rounded border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-400 mb-2">Black Scythe Logbook</h4>
            <p className="text-sm text-gray-300">Focuses on Black Scythe mercenary encounters</p>
          </div>
          
          <div className="bg-gray-700/50 p-4 rounded border-l-4 border-green-500">
            <h4 className="font-semibold text-green-400 mb-2">Order of the Chalice</h4>
            <p className="text-sm text-gray-300">Religious order themed expedition areas</p>
          </div>
          
          <div className="bg-gray-700/50 p-4 rounded border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-400 mb-2">Knights of the Sun</h4>
            <p className="text-sm text-gray-300">Templar-themed expedition encounters</p>
          </div>
          
          <div className="bg-gray-700/50 p-4 rounded border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-400 mb-2">Druids of the Broken Circle</h4>
            <p className="text-sm text-gray-300">Nature-based expedition areas with unique rewards</p>
          </div>
          
          <div className="bg-gray-700/50 p-4 rounded border-l-4 border-orange-500">
            <h4 className="font-semibold text-orange-400 mb-2">Medved Logbook</h4>
            <p className="text-sm text-gray-300">Focused on Medved faction encounters</p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gray-900/50 rounded">
          <p className="text-sm text-gray-400">
            <strong>Note:</strong> Logbook fragments are combined to create complete logbooks for running expedition encounters. 
            Each type offers different reward focuses and enemy encounters.
          </p>
        </div>
      </div>
    </div>
  )
}

function HeistGuide() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <img src="/images/items/lockpick-icon.png" alt="Heist" className="w-6 h-6 mr-3" />
        <h2 className="text-2xl font-bold text-poe-gold">Heist Guide</h2>
      </div>
      

      {/* Heist Skills & Rewards Table */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Heist Skills & Rewards</h3>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left p-3 text-poe-gold">Skill</th>
                <th className="text-left p-3 text-poe-gold">Rogues (Level)</th>
                <th className="text-left p-3 text-poe-gold">Rewards</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-700">
                <td className="p-3 flex items-center font-semibold">
                  <img src="/images/items/lockpick-icon.png" alt="Lockpicking" className="w-4 h-4 mr-2" />
                  Lockpicking
                </td>
                <td className="p-3">
                  <div className="space-y-1">
                    <div>Karst (5), Huck (3), Niles (3)</div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex gap-1">
                    <img src="/images/items/chaos-orb.png" alt="Currency" className="w-5 h-5" title="Currency" />
                    <img src="/images/items/Sacrifice_at_Dusk_inventory_icon.png" alt="Fragments" className="w-5 h-5" title="Fragments" />
                    <img src="/images/items/Unset_Ring_inventory_icon.png" alt="Jewelry" className="w-5 h-5" title="Jewelry" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 flex items-center font-semibold">
                  <img src="/images/items/brute-force-icon.png" alt="Brute Force" className="w-4 h-4 mr-2" />
                  Brute Force
                </td>
                <td className="p-3">
                  <div className="space-y-1">
                    <div>Tibbs (4), Huck (3)</div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex gap-1">
                    <img src="/images/items/chaos-orb.png" alt="Fossils" className="w-5 h-5" title="Fossils" />
                    <img src="/images/items/divine-orb.png" alt="Uniques" className="w-5 h-5" title="Uniques" />
                    <img src="/images/items/Bladestorm_inventory_icon.png" alt="Weapons" className="w-5 h-5" title="Weapons" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 flex items-center font-semibold">
                  <img src="/images/items/perception-icon.png" alt="Perception" className="w-4 h-4 mr-2" />
                  Perception
                </td>
                <td className="p-3">
                  <div className="space-y-1">
                    <div>Nenet (5), Karst (5)</div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex gap-1">
                    <img src="/images/items/Divination_card_inventory_icon.png" alt="Divination Cards" className="w-5 h-5" title="Divination Cards" />
                    <img src="/images/items/Unset_Ring_inventory_icon.png" alt="Jewelry" className="w-5 h-5" title="Jewelry" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 flex items-center font-semibold">
                  <img src="/images/items/demolition-icon.png" alt="Demolition" className="w-4 h-4 mr-2" />
                  Demolition
                </td>
                <td className="p-3">
                  <div className="space-y-1">
                    <div>Vinderi (4), Tibbs (4)</div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex gap-1">
                    <img src="/images/items/Alleyways_Map_%28Settlers%29_inventory_icon.png" alt="Delirium" className="w-5 h-5" title="Delirium" />
                    <img src="/images/items/exalted-orb.png" alt="Ultimatum" className="w-5 h-5" title="Ultimatum" />
                    <img src="/images/items/Ancient_City_Map_%28Settlers%29_inventory_icon.png" alt="Blight" className="w-5 h-5" title="Blight" />
                    <img src="/images/items/chaos-orb.png" alt="Generic" className="w-5 h-5" title="Generic" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 flex items-center font-semibold">
                  <img src="/images/items/engineering-icon.png" alt="Engineering" className="w-4 h-4 mr-2" />
                  Engineering
                </td>
                <td className="p-3">
                  <div className="space-y-1">
                    <div>Isla (5)</div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex gap-1">
                    <img src="/images/items/Bladestorm_inventory_icon.png" alt="Legion" className="w-5 h-5" title="Legion" />
                    <img src="/images/items/chaos-orb.png" alt="Harbinger" className="w-5 h-5" title="Harbinger" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 flex items-center font-semibold">
                  <img src="/images/items/trap-disarmament-icon.png" alt="Trap Disarmament" className="w-4 h-4 mr-2" />
                  Trap Disarmament
                </td>
                <td className="p-3">
                  <div className="space-y-1">
                    <div>Isla (5), Vinderi (4)</div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex gap-1">
                    <img src="/images/items/Bladestorm_inventory_icon.png" alt="Legion" className="w-5 h-5" title="Legion" />
                    <img src="/images/items/chaos-orb.png" alt="Harbinger" className="w-5 h-5" title="Harbinger" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 flex items-center font-semibold">
                  <img src="/images/items/boots.svg" alt="Agility" className="w-4 h-4 mr-2" />
                  Agility
                </td>
                <td className="p-3">
                  <div className="space-y-1">
                    <div>Tullina (5)</div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex gap-1">
                    <img src="/images/items/Bladestorm_inventory_icon.png" alt="Legion" className="w-5 h-5" title="Legion" />
                    <img src="/images/items/chaos-orb.png" alt="Harbinger" className="w-5 h-5" title="Harbinger" />
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-3 flex items-center font-semibold">
                  <img src="/images/items/deception-icon.png" alt="Deception" className="w-4 h-4 mr-2" />
                  Deception
                </td>
                <td className="p-3">
                  <div className="space-y-1">
                    <div>Gianna (5), Tullina (5)</div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex gap-1">
                    <img src="/images/items/chaos-orb.png" alt="Metamorph" className="w-5 h-5" title="Metamorph" />
                    <img src="/images/items/exalted-orb.png" alt="Essence" className="w-5 h-5" title="Essence" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-3 flex items-center font-semibold">
                  <img src="/images/items/counter-thaumaturgy-icon.png" alt="Counter-Thaumaturgy" className="w-4 h-4 mr-2" />
                  Counter-Thaumaturgy
                </td>
                <td className="p-3">
                  <div className="space-y-1">
                    <div>Nenet (5), Niles (3), Gianna (5)</div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex gap-1">
                    <img src="/images/items/chaos-orb.png" alt="Metamorph" className="w-5 h-5" title="Metamorph" />
                    <img src="/images/items/exalted-orb.png" alt="Essence" className="w-5 h-5" title="Essence" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Heist Skill Rewards */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Heist Skill Rewards</h3>
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Lockpicking</span>
              <div className="flex gap-2">
                <img src="/images/items/chaos-orb.png" alt="Currency" className="w-6 h-6" title="Currency" />
                <img src="/images/items/Sacrifice_at_Dusk_inventory_icon.png" alt="Fragments" className="w-6 h-6" title="Fragments" />
                <img src="/images/items/Unset_Ring_inventory_icon.png" alt="Jewelry" className="w-6 h-6" title="Jewelry" />
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Brute Force</span>
              <div className="flex gap-2">
                <img src="/images/items/chaos-orb.png" alt="Fossils" className="w-6 h-6" title="Fossils" />
                <img src="/images/items/divine-orb.png" alt="Uniques" className="w-6 h-6" title="Uniques" />
                <img src="/images/items/Bladestorm_inventory_icon.png" alt="Weapons" className="w-6 h-6" title="Weapons" />
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Perception</span>
              <div className="flex gap-2">
                <img src="/images/items/Divination_card_inventory_icon.png" alt="Divination Cards" className="w-6 h-6" title="Divination Cards" />
                <img src="/images/items/Unset_Ring_inventory_icon.png" alt="Jewelry" className="w-6 h-6" title="Jewelry" />
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Demolition</span>
              <div className="flex gap-2">
                <img src="/images/items/Alleyways_Map_%28Settlers%29_inventory_icon.png" alt="Delirium" className="w-6 h-6" title="Delirium" />
                <img src="/images/items/exalted-orb.png" alt="Ultimatum" className="w-6 h-6" title="Ultimatum" />
                <img src="/images/items/Ancient_City_Map_%28Settlers%29_inventory_icon.png" alt="Blight" className="w-6 h-6" title="Blight" />
                <img src="/images/items/chaos-orb.png" alt="Generic" className="w-6 h-6" title="Generic" />
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Trap Disarmament</span>
              <div className="flex gap-2">
                <img src="/images/items/Bladestorm_inventory_icon.png" alt="Legion" className="w-6 h-6" title="Legion" />
                <img src="/images/items/jewellers-orb.png" alt="Abyss" className="w-6 h-6" title="Abyss" />
                <img src="/images/items/Whispering_Essence_of_Contempt_inventory_icon.png" alt="Breach" className="w-6 h-6" title="Breach" />
                <img src="/images/items/Blackheart_inventory_icon.png" alt="Talisman" className="w-6 h-6" title="Talisman" />
                <img src="/images/items/boots.png" alt="Armour" className="w-6 h-6" title="Armour" />
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Agility</span>
              <div className="flex gap-2">
                <img src="/images/items/chaos-orb.png" alt="Currency" className="w-6 h-6" title="Currency" />
                <img src="/images/items/Whispering_Essence_of_Woe_inventory_icon.png" alt="Essence" className="w-6 h-6" title="Essence" />
                <img src="/images/items/chaos-orb.png" alt="Fossils" className="w-6 h-6" title="Fossils" />
                <img src="/images/items/orb-of-alteration.png" alt="Harbinger" className="w-6 h-6" title="Harbinger" />
                <img src="/images/items/boots.png" alt="Armour" className="w-6 h-6" title="Armour" />
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Deception</span>
              <div className="flex gap-2">
                <img src="/images/items/Divination_card_inventory_icon.png" alt="Divination Cards" className="w-6 h-6" title="Divination Cards" />
                <img src="/images/items/orb-of-alteration.png" alt="Harbinger" className="w-6 h-6" title="Harbinger" />
                <img src="/images/items/boots.png" alt="Armour" className="w-6 h-6" title="Armour" />
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Engineering</span>
              <div className="flex gap-2">
                <img src="/images/items/Academy_Map_%28Settlers%29_inventory_icon.png" alt="Maps" className="w-6 h-6" title="Maps" />
                <img src="/images/items/Whispering_Essence_of_Woe_inventory_icon.png" alt="Essence" className="w-6 h-6" title="Essence" />
                <img src="/images/items/divine-orb.png" alt="Uniques" className="w-6 h-6" title="Uniques" />
              </div>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-white font-medium">Counter-Thaumaturgy</span>
              <div className="flex gap-2">
                <img src="/images/items/chaos-orb.png" alt="Currency" className="w-6 h-6" title="Currency" />
                <img src="/images/items/Unset_Ring_inventory_icon.png" alt="Jewelry" className="w-6 h-6" title="Jewelry" />
                <img src="/images/items/Absolution_inventory_icon.png" alt="Skill Gems" className="w-6 h-6" title="Skill Gems" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BiS Gear Mods */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Best-in-Slot Heist Gear Modifiers</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-poe-gold mb-3">Cloak (Body Armour)</h4>
            <div className="bg-gray-800 p-4 rounded space-y-2">
              <div className="text-sm">
                <span className="text-green-400 font-medium">Prefixes:</span>
                <div className="ml-2 text-gray-300">
                  <div>• <span className="text-blue-400">10-15%</span> chance to Suppress Spell Damage</div>
                  <div>• <span className="text-blue-400">+90-120</span> to maximum Life</div>
                  <div>• <span className="text-blue-400">+12-16%</span> to all Elemental Resistances</div>
                </div>
              </div>
              <div className="text-sm">
                <span className="text-yellow-400 font-medium">Suffixes:</span>
                <div className="ml-2 text-gray-300">
                  <div>• <span className="text-blue-400">6-8%</span> increased Movement Speed</div>
                  <div>• <span className="text-blue-400">25-35%</span> increased Area Damage</div>
                  <div>• <span className="text-blue-400">+45-60%</span> to Lightning Resistance</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-poe-gold mb-3">Boots</h4>
            <div className="bg-gray-800 p-4 rounded space-y-2">
              <div className="text-sm">
                <span className="text-green-400 font-medium">Prefixes:</span>
                <div className="ml-2 text-gray-300">
                  <div>• <span className="text-blue-400">+75-90</span> to maximum Life</div>
                  <div>• <span className="text-blue-400">+45-60%</span> to Fire Resistance</div>
                  <div>• <span className="text-blue-400">+45-60%</span> to Cold Resistance</div>
                </div>
              </div>
              <div className="text-sm">
                <span className="text-yellow-400 font-medium">Suffixes:</span>
                <div className="ml-2 text-gray-300">
                  <div>• <span className="text-blue-400">25-35%</span> increased Movement Speed</div>
                  <div>• <span className="text-blue-400">120-140%</span> increased Armour and Energy Shield</div>
                  <div>• <span className="text-blue-400">+45-60%</span> to Lightning Resistance</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-poe-gold mb-3">Gloves</h4>
            <div className="bg-gray-800 p-4 rounded space-y-2">
              <div className="text-sm">
                <span className="text-green-400 font-medium">Prefixes:</span>
                <div className="ml-2 text-gray-300">
                  <div>• <span className="text-blue-400">+75-90</span> to maximum Life</div>
                  <div>• <span className="text-blue-400">16-24</span> to 30-42 Added Attack Damage</div>
                  <div>• <span className="text-blue-400">+45-60%</span> to Fire Resistance</div>
                </div>
              </div>
              <div className="text-sm">
                <span className="text-yellow-400 font-medium">Suffixes:</span>
                <div className="ml-2 text-gray-300">
                  <div>• <span className="text-blue-400">12-16%</span> increased Attack Speed</div>
                  <div>• <span className="text-blue-400">25-35%</span> increased Area Damage</div>
                  <div>• <span className="text-blue-400">+45-60%</span> to Lightning Resistance</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-poe-gold mb-3">Helmet</h4>
            <div className="bg-gray-800 p-4 rounded space-y-2">
              <div className="text-sm">
                <span className="text-green-400 font-medium">Prefixes:</span>
                <div className="ml-2 text-gray-300">
                  <div>• <span className="text-blue-400">+75-90</span> to maximum Life</div>
                  <div>• <span className="text-blue-400">+45-60%</span> to Cold Resistance</div>
                  <div>• <span className="text-blue-400">+45-60%</span> to Lightning Resistance</div>
                </div>
              </div>
              <div className="text-sm">
                <span className="text-yellow-400 font-medium">Suffixes:</span>
                <div className="ml-2 text-gray-300">
                  <div>• <span className="text-blue-400">40-60%</span> increased Armour and Energy Shield</div>
                  <div>• <span className="text-blue-400">+9-12%</span> to Chaos Resistance</div>
                  <div>• <span className="text-blue-400">25-35%</span> increased Area Damage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Heist Strategy</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Currency Farming Focus</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Prioritize Karst (Lockpicking) for currency rooms</li>
                <li>• Use Nenet (Perception) for chest-heavy contracts</li>
                <li>• Vinderi (Demolition) for duplication chance</li>
                <li>• Target currency and fragments blueprints</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Unique Item Hunting</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Focus on Tibbs (Brute Force) for weapon rooms</li>
                <li>• Isla (Engineering) for unique blueprints</li>
                <li>• Target replica unique blueprints specifically</li>
                <li>• Grand heists offer best unique item odds</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Grand Heist Tips</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Preparation</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Reveal all wings before starting</li>
                <li>• Assign rogues with appropriate skills</li>
                <li>• Level rogue equipment for job speed</li>
                <li>• Check rogue gear for relevant bonuses</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Execution</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Clear valuable rooms before lockdown</li>
                <li>• Plan escape route in advance</li>
                <li>• Save curio displays (main target) for last</li>
                <li>• Use movement skills for quick escapes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mt-8 bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-600/30 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-purple-400 mb-3">Quick Reference - Best Rogue Combos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-semibold text-poe-gold">Currency Focus:</span>
            <div className="text-gray-300">Karst + Nenet + Vinderi</div>
          </div>
          <div>
            <span className="font-semibold text-poe-gold">Speed Running:</span>
            <div className="text-gray-300">Tullina + Huck + Tibbs</div>
          </div>
          <div>
            <span className="font-semibold text-poe-gold">Blueprint Reveals:</span>
            <div className="text-gray-300">Gianna for -20% cost</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BetrayalGuide() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <img src="/images/items/Blackheart_inventory_icon.png" alt="Betrayal" className="w-6 h-6 mr-3" />
        <h2 className="text-2xl font-bold text-poe-gold">Betrayal Board</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Syndicate Positions</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Transportation</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• It That Fled (pure breachstones)</li>
                <li>• Vorici (white sockets)</li>
                <li>• Tora (gem experience)</li>
                <li>• Cameria (harbinger orbs)</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Research</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• It That Fled (pure breachstones)</li>
                <li>• Aisling (crafting bench)</li>
                <li>• Vorici (white sockets)</li>
                <li>• Janus (uniques/currency)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Board Management</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Optimal Setup</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Get It That Fled to Research rank 3</li>
                <li>• Aisling in Research for crafts</li>
                <li>• Vorici in Transportation/Research</li>
                <li>• Remove/demote unwanted members</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Strategy Tips</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Interrogate to remove members</li>
                <li>• Execute when boards are optimal</li>
                <li>• Bargain to move/rank up members</li>
                <li>• Betray to create rivalries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DelveGuide() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <img src="/images/items/Ancient_Orb_inventory_icon.png" alt="Delve" className="w-6 h-6 mr-3" />
        <h2 className="text-2xl font-bold text-poe-gold">Delve</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Delve Basics</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Sulphite Management</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Farm sulphite in maps with Niko</li>
                <li>• Higher tier maps = more sulphite</li>
                <li>• Atlas passives boost sulphite gains</li>
                <li>• Scarabs increase sulphite amounts</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Darkness Resistance</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Upgrade darkness resistance first</li>
                <li>• Use flares to light areas</li>
                <li>• Dynamite breaks walls</li>
                <li>• Some nodes require darkness travel</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Valuable Biomes</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Currency Biomes</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Fossil caverns (crafting materials)</li>
                <li>• Currency nodes (direct currency)</li>
                <li>• Gem nodes (quality gems)</li>
                <li>• Unique nodes (rare items)</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Boss Locations</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Aul (depth 130+, rare)</li>
                <li>• Kurgal (depth 100+)</li>
                <li>• Ahuatotli (depth 35+)</li>
                <li>• Unique drops and achievements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function IncursionGuide() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <img src="/images/items/vaal-orb.png" alt="Incursion" className="w-6 h-6 mr-3" />
        <h2 className="text-2xl font-bold text-poe-gold">Incursion Temple - Room Value Guide</h2>
      </div>
      
      <div className="bg-gray-800 p-4 rounded mb-6">
        <h3 className="text-xl font-semibold mb-3 text-poe-gold">Overview</h3>
        <p className="text-gray-300">
          Incursion rooms are categorized by their money-making and utility potential. 
          Focus on upgrading and connecting high-value rooms first.
        </p>
      </div>

      {/* High Value (Green) Rooms */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center">
          <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
          High Value Rooms (Green)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-green-900/30 to-gray-800 border border-green-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Support_Skill_Gem_inventory_icon.png" alt="Skill Point" className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-green-400">Apex of Ascension (T3)</h4>
            </div>
            <p className="text-xs text-gray-400 mb-1">T1: Hall of Ascension → T2: Sanctum of Ascension</p>
            <p className="text-sm text-gray-300 mb-2">Grants +1 passive skill point</p>
            <p className="text-xs text-green-300">Always prioritize - permanent character progression</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-gray-800 border border-green-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/vaal-orb.png" alt="Corruption" className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-green-400">Locus of Corruption (T3)</h4>
            </div>
            <p className="text-xs text-gray-400 mb-1">T1: Den of Corruption → T2: Chamber of Corruption</p>
            <p className="text-sm text-gray-300 mb-2">Double corruption altar for items</p>
            <p className="text-xs text-green-300">Extremely high risk/reward potential</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-gray-800 border border-green-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Support_Skill_Gem_inventory_icon.png" alt="Gem Corruption" className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-green-400">Doryani's Institute (T3)</h4>
            </div>
            <p className="text-xs text-gray-400 mb-1">T1: Gemcutter's Incubator → T2: Department of Thaumaturgy</p>
            <p className="text-sm text-gray-300 mb-2">Corrupts gems with chance for special outcomes</p>
            <p className="text-xs text-green-300">Level 21 gems or +1/+1 corruptions</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-gray-800 border border-green-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Divine_Orb_inventory_icon.png" alt="Currency" className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-green-400">Currency Exchange (T3)</h4>
            </div>
            <p className="text-xs text-gray-400 mb-1">T1: Vault → T2: Treasury</p>
            <p className="text-sm text-gray-300 mb-2">Exchanges currency at favorable rates</p>
            <p className="text-xs text-green-300">Guaranteed profit from currency conversion</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-gray-800 border border-green-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Unset_Ring_inventory_icon.png" alt="Unique Items" className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-green-400">Sanctum of Unity (T3)</h4>
            </div>
            <p className="text-xs text-gray-400 mb-1">T1: Hall of Offerings → T2: Shrine of Unification</p>
            <p className="text-sm text-gray-300 mb-2">Combines 3 unique items into 1 new unique</p>
            <p className="text-xs text-green-300">Potential for valuable unique outcomes</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-gray-800 border border-green-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Whispering_Essence_of_Greed_inventory_icon.png" alt="Crafting Materials" className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-green-400">Factory (T3)</h4>
            </div>
            <p className="text-xs text-gray-400 mb-1">T1: Workshop → T2: Engineering Department</p>
            <p className="text-sm text-gray-300 mb-2">Produces valuable crafting materials</p>
            <p className="text-xs text-green-300">High-value essences and fossils</p>
          </div>
        </div>
      </div>

      {/* Medium Value (Yellow) Rooms */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-400 flex items-center">
          <span className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></span>
          Medium Value Rooms (Yellow)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-yellow-900/30 to-gray-800 border border-yellow-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Support_Skill_Gem_inventory_icon.png" alt="Gem Quality" className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-yellow-400">Gemcutter's Workshop (T3)</h4>
            </div>
            <p className="text-xs text-gray-400 mb-1">T1: Jeweller's Workshop → T2: Lapidary</p>
            <p className="text-sm text-gray-300 mb-2">Improves gem quality to 20%</p>
            <p className="text-xs text-yellow-300">Useful for skill gem upgrades</p>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/30 to-gray-800 border border-yellow-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Divine_Orb_inventory_icon.png" alt="Valuable Items" className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-yellow-400">Wealth of the Vaal (T3)</h4>
            </div>
            <p className="text-xs text-gray-400 mb-1">T1: Storeroom → T2: Warehouses</p>
            <p className="text-sm text-gray-300 mb-2">Contains valuable items and currency</p>
            <p className="text-xs text-yellow-300">Consistent moderate rewards</p>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/30 to-gray-800 border border-yellow-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Ancient_City_Map_%28Settlers%29_inventory_icon.png" alt="Maps" className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-yellow-400">Atlas of Worlds (T3)</h4>
            </div>
            <p className="text-xs text-gray-400 mb-1">T1: Map Room → T2: Cartography Room</p>
            <p className="text-sm text-gray-300 mb-2">Provides maps and atlas progression</p>
            <p className="text-xs text-yellow-300">Helps with map sustain and completion</p>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/30 to-gray-800 border border-yellow-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Unset_Ring_inventory_icon.png" alt="Jewelry" className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-yellow-400">Jewelry Workshop (T3)</h4>
            </div>
            <p className="text-xs text-gray-400 mb-1">T1: Jeweller's Workshop → T2: Hall of Lords</p>
            <p className="text-sm text-gray-300 mb-2">Creates and improves jewelry</p>
            <p className="text-xs text-yellow-300">Chance for valuable ring/amulet outcomes</p>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/30 to-gray-800 border border-yellow-600/30 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-400 mb-2">Surveyor's Study (T3)</h4>
            <p className="text-sm text-gray-300 mb-2">Upgrades map quality and mods</p>
            <p className="text-xs text-yellow-300">Better map returns and atlas progress</p>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-900/30 to-gray-800 border border-yellow-600/30 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-400 mb-2">Strongbox Chamber (T3)</h4>
            <p className="text-sm text-gray-300 mb-2">Contains multiple enhanced strongboxes</p>
            <p className="text-xs text-yellow-300">Moderate loot with low investment</p>
          </div>
        </div>
      </div>

      {/* Low Value (Red) Rooms */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center">
          <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
          Low Value Rooms (Red)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-red-900/30 to-gray-800 border border-red-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Unset_Ring_inventory_icon.png" alt="Unique Items" className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-red-400">Hall of Legends (T3)</h4>
            </div>
            <p className="text-xs text-gray-400 mb-1">T1: Guardhouse → T2: Barracks</p>
            <p className="text-sm text-gray-300 mb-2">Provides low-value unique items</p>
            <p className="text-xs text-red-300">Usually contains common uniques only</p>
          </div>
          
          <div className="bg-gradient-to-r from-red-900/30 to-gray-800 border border-red-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/weapon.png" alt="Weapons and Armor" className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-red-400">Armory (T3)</h4>
            </div>
            <p className="text-xs text-gray-400 mb-1">T1: Armory → T2: Chamber of Iron</p>
            <p className="text-sm text-gray-300 mb-2">Contains weapons and armor</p>
            <p className="text-xs text-red-300">Usually low-value gear pieces</p>
          </div>
          
          <div className="bg-gradient-to-r from-red-900/30 to-gray-800 border border-red-600/30 rounded-lg p-4">
            <h4 className="font-semibold text-red-400 mb-2">Sparring Room (T3)</h4>
            <p className="text-sm text-gray-300 mb-2">Combat encounter with modest rewards</p>
            <p className="text-xs text-red-300">Time investment rarely worth rewards</p>
          </div>
          
          <div className="bg-gradient-to-r from-red-900/30 to-gray-800 border border-red-600/30 rounded-lg p-4">
            <h4 className="font-semibold text-red-400 mb-2">Workbench (T3)</h4>
            <p className="text-sm text-gray-300 mb-2">Provides basic crafting materials</p>
            <p className="text-xs text-red-300">Low-tier crafting components only</p>
          </div>
          
          <div className="bg-gradient-to-r from-red-900/30 to-gray-800 border border-red-600/30 rounded-lg p-4">
            <h4 className="font-semibold text-red-400 mb-2">Storage Room (T3)</h4>
            <p className="text-sm text-gray-300 mb-2">Contains miscellaneous items</p>
            <p className="text-xs text-red-300">Random loot, usually low value</p>
          </div>
          
          <div className="bg-gradient-to-r from-red-900/30 to-gray-800 border border-red-600/30 rounded-lg p-4">
            <h4 className="font-semibold text-red-400 mb-2">Trap Workshop (T3)</h4>
            <p className="text-sm text-gray-300 mb-2">Provides trap-related items</p>
            <p className="text-xs text-red-300">Very niche, limited audience</p>
          </div>
        </div>
      </div>

      {/* Strategy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Incursion Strategy</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Room Priority Order</h4>
              <ol className="text-sm text-gray-300 space-y-1">
                <li>1. Always prioritize Apex of Ascension</li>
                <li>2. Focus on high-value rooms (Green category)</li>
                <li>3. Upgrade medium-value rooms if accessible</li>
                <li>4. Connect rooms to create efficient paths</li>
                <li>5. Avoid upgrading low-value rooms unless necessary</li>
              </ol>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Room Connection Tips</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Plan connections before upgrading</li>
                <li>• Create paths to multiple high-value rooms</li>
                <li>• Don't waste connections on low-value rooms</li>
                <li>• Consider temple layout when planning</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Temple Execution</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Room Clearing Order</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Clear all connected high-value rooms first</li>
                <li>• Save corruption chambers for last</li>
                <li>• Bring valuable items for special rooms</li>
                <li>• Don't risk valuable items unnecessarily</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h4 className="font-semibold text-poe-gold mb-2">Risk Management</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Research corruption outcomes beforehand</li>
                <li>• Only corrupt items you can afford to lose</li>
                <li>• Consider selling temple access for guaranteed profit</li>
                <li>• Keep expectations realistic for RNG-based rooms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mt-8 bg-gradient-to-r from-orange-900/20 to-orange-800/20 border border-orange-600/30 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">Quick Reference - Must-Have Rooms</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="font-semibold text-poe-gold">Always Upgrade:</span>
            <div className="text-gray-300">Apex of Ascension (+1 skill point)</div>
          </div>
          <div>
            <span className="font-semibold text-poe-gold">High Priority:</span>
            <div className="text-gray-300">Locus of Corruption, Doryani's Institute</div>
          </div>
          <div>
            <span className="font-semibold text-poe-gold">Safe Profit:</span>
            <div className="text-gray-300">Currency Exchange, Factory</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MercenaryGearGuide() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <img src="/images/items/Splendour_inventory_icon.png" alt="Mercenary Gear" className="w-6 h-6 mr-3" />
        <h2 className="text-2xl font-bold text-poe-gold">Popular Leveling Unique Items</h2>
      </div>
      
      {/* Early Game Uniques */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-green-400">Early Game (Level 1-30)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-orange-900/30 to-gray-800 border border-orange-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Blackheart_inventory_icon.png" alt="Blackheart" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Blackheart</h4>
                <p className="text-xs text-gray-400">Level 1 Ring</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">Life and chaos damage for early leveling</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-900/30 to-gray-800 border border-orange-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/quicksilver-flask.png" alt="Quicksilver Flask" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Quicksilver Flask</h4>
                <p className="text-xs text-gray-400">Level 4 Utility Flask</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">Essential movement speed boost for all builds</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-900/30 to-gray-800 border border-orange-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/boots.png" alt="Wanderlust" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Wanderlust</h4>
                <p className="text-xs text-gray-400">Level 1 Boots</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">Movement speed and freeze immunity</p>
          </div>
        </div>
      </div>

      {/* Mid Game Uniques */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">Mid Game (Level 30-60)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-orange-900/30 to-gray-800 border border-orange-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Splendour_inventory_icon.png" alt="Tabula Rasa" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Tabula Rasa</h4>
                <p className="text-xs text-gray-400">Level 1 Body Armour</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">6-link white sockets for any gem setup</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-900/30 to-gray-800 border border-orange-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Unset_Ring_inventory_icon.png" alt="Goldrim" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Goldrim</h4>
                <p className="text-xs text-gray-400">Level 1 Helmet</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">All resistances and rarity for easy gearing</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-900/30 to-gray-800 border border-orange-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/Doedre%27s_Damning_inventory_icon.png" alt="Doedre's Damning" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Doedre's Damning</h4>
                <p className="text-xs text-gray-400">Level 30 Ring</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">+1 maximum number of Curses</p>
          </div>
        </div>
      </div>

      {/* High Level Uniques */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-red-400">Endgame Transition (Level 60+)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-orange-900/30 to-gray-800 border border-orange-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/The_Fiend_inventory_icon.png" alt="High-tier Unique" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Build-Specific Uniques</h4>
                <p className="text-xs text-gray-400">Level 60+ Various</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">Depends on your build's requirements</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-900/30 to-gray-800 border border-orange-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/boots.png" alt="Movement Boots" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Seven-League Step</h4>
                <p className="text-xs text-gray-400">Level 55 Boots</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">50% increased Movement Speed</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-900/30 to-gray-800 border border-orange-600/30 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img src="/images/items/weapon.png" alt="Unique Weapon" className="w-6 h-6 mr-3" />
              <div>
                <h4 className="font-semibold text-orange-400">Rare/Crafted Gear</h4>
                <p className="text-xs text-gray-400">Level 65+ Various</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">Transition to high-tier rares and crafted items</p>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Mercenary Gear Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-600/20 to-gray-800 p-4 rounded-lg border border-green-600/50">
            <h4 className="font-semibold text-green-400 mb-3 flex items-center">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
              Early Game Priority
            </h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Prioritize movement speed items first</li>
              <li>• Look for life rolls on all gear pieces</li>
              <li>• Upgrade weapons regularly for damage</li>
              <li>• Don't overlook low-level uniques</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-600/20 to-gray-800 p-4 rounded-lg border border-yellow-600/50">
            <h4 className="font-semibold text-yellow-400 mb-3 flex items-center">
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
              Resistance Management
            </h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Cap resistances after each difficulty</li>
              <li>• Use Goldrim for easy resist coverage</li>
              <li>• Keep resistance flasks as backup</li>
              <li>• Chaos resistance not crucial early</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-red-600/20 to-gray-800 p-4 rounded-lg border border-red-600/50">
            <h4 className="font-semibold text-red-400 mb-3 flex items-center">
              <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
              Economic Considerations
            </h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Many leveling uniques are very cheap</li>
              <li>• Tabula Rasa is worth the investment</li>
              <li>• Buy leveling gear early in league</li>
              <li>• Consider twink gear for alts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Popular Builds and Their Uniques */}
      <div className="mt-8 bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-poe-gold">Build-Specific Leveling Uniques</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-white mb-3">Spell Casters</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Tabula Rasa for 6-link setup</li>
              <li>• Lifesprig wand for early spell damage</li>
              <li>• Goldrim for easy resists</li>
              <li>• Wanderlust for movement</li>
              <li>• +1 gem level weapons from vendor recipes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Melee Builds</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• High damage rare weapons with links</li>
              <li>• Physical damage vendor recipe weapons</li>
              <li>• Rustic Sash for weapon upgrades</li>
              <li>• Meginord's Girdle belt for damage/life</li>
              <li>• Brightbeak for utility/movement builds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function TrialGuide() {
  return (
    <div className="flex items-center justify-center min-h-96">
      <div className="text-center">
        <div className="text-8xl font-bold text-gray-600 mb-4">TBD</div>
        <h2 className="text-3xl font-semibold text-gray-400 mb-2">To Be Determined</h2>
        <p className="text-lg text-gray-500">Trial content will be added in a future update.</p>
      </div>
    </div>
  )
}