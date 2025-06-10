'use client'
import { useState } from 'react'

export default function CheatSheets() {
  const [activeTab, setActiveTab] = useState('leveling')

  const tabs = [
    { id: 'leveling', name: 'Leveling', icon: '📈' },
    { id: 'atlas', name: 'Atlas', icon: '🗺️' },
    { id: 'settlers', name: 'Settlers', icon: '🏘️' },
    { id: 'sanctum', name: 'Sanctum', icon: '⛪' },
    { id: 'expedition', name: 'Expedition', icon: '💣' },
    { id: 'heist', name: 'Heist', icon: '🔓' },
    { id: 'betrayal', name: 'Betrayal', icon: '🗡️' },
    { id: 'delve', name: 'Delve', icon: '⛏️' },
    { id: 'incursion', name: 'Incursion', icon: '🏛️' }
  ]

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-poe-gold mb-4">POE Cheat Sheets</h1>
        <p className="text-xl text-gray-300">Community-compiled guides and quick references for Path of Exile</p>
      </header>

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
      </div>
    </main>
  )
}

function LevelingGuide() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-poe-gold mb-6">Leveling Guide</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Act 1 - The Twilight Strand</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Key Quests</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Enemy at the Gate (skill gem reward)</li>
                <li>• The Caged Brute (support gem reward)</li>
                <li>• Breaking Some Eggs (respec point)</li>
                <li>• The Dweller of the Deep (skill books)</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Waypoints</h4>
              <ul className="text-sm text-gray-300 mt-2">
                <li>• The Coast • Mud Flats • The Ledge</li>
                <li>• The Climb • The Lower Prison</li>
                <li>• Prisoner's Gate • The Ship Graveyard</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">General Leveling Tips</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Efficiency Tips</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Stay within 3 levels of zone level</li>
                <li>• Don't over-farm - keep moving forward</li>
                <li>• Get movement speed boots ASAP</li>
                <li>• Use quicksilver flasks liberally</li>
                <li>• Pick up rare items for chaos recipe</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Resistance Priority</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Act 5: -30% all resistances</li>
                <li>• Act 10: -60% all resistances</li>
                <li>• Prioritize fire > cold > lightning</li>
                <li>• Chaos resistance not crucial early</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AtlasGuide() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-poe-gold mb-6">Atlas Progression</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Atlas Passive Strategy</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Early Atlas (T1-T5)</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Complete all bonus objectives</li>
                <li>• Focus on map completion</li>
                <li>• Don't skip white maps</li>
                <li>• Build atlas passive foundation</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Mid Atlas (T6-T10)</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Specialize in 2-3 mechanics</li>
                <li>• Start focusing on atlas passives</li>
                <li>• Upgrade to rare maps for bonus</li>
                <li>• Begin elderslayer progression</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Recommended Focuses</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">League Start</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Essence (guaranteed rare mods)</li>
                <li>• Strongboxes (additional items)</li>
                <li>• Expedition (currency/items)</li>
                <li>• Harbinger (currency shards)</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Currency Farming</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Blight (oils and currency)</li>
                <li>• Delirium (high-value rewards)</li>
                <li>• Breach (splinters and items)</li>
                <li>• Legion (emblems and currency)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SettlersGuide() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-poe-gold mb-6">Settlers of Kalguur</h2>
      
      <div className="bg-gray-800 p-4 rounded mb-6">
        <h3 className="text-xl font-semibold mb-3 text-poe-gold">Overview</h3>
        <p className="text-gray-300">
          Settlers league focuses on building and managing a town with various NPCs that provide 
          specialized crafting and resource management services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Key Mechanics</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Town Building</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Recruit NPCs for specialized services</li>
                <li>• Build infrastructure for town growth</li>
                <li>• Manage resources and relationships</li>
                <li>• Unlock advanced crafting options</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Priority NPCs</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Essential Services</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Blacksmith (weapon/armor crafting)</li>
                <li>• Trader (currency exchange)</li>
                <li>• Mapmaker (atlas progression)</li>
                <li>• Jeweler (gem services)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SanctumGuide() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-poe-gold mb-6">Sanctum</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Sanctum Basics</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Resolve Management</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Resolve = your health in Sanctum</li>
                <li>• Losing all resolve kicks you out</li>
                <li>• Some rooms restore resolve</li>
                <li>• Balance risk vs reward carefully</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Room Types</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Combat rooms (monsters and guards)</li>
                <li>• Puzzle rooms (no combat)</li>
                <li>• Treasure rooms (high rewards)</li>
                <li>• Boss rooms (major challenges)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Strategy Tips</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Path Planning</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Plan your route before starting</li>
                <li>• Prioritize resolve rooms when low</li>
                <li>• Skip dangerous rooms if needed</li>
                <li>• Save currency rooms for last</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Rewards Priority</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Unique items and divination cards</li>
                <li>• Currency and crafting materials</li>
                <li>• Experience and skill gems</li>
                <li>• Atlas passives and maps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ExpeditionGuide() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-poe-gold mb-6">Expedition</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Explosive Placement</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Targeting Strategy</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Prioritize chest and remnant chains</li>
                <li>• Avoid immunity remnants</li>
                <li>• Chain explosions for efficiency</li>
                <li>• Read remnant mods carefully</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Dangerous Mods</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Monsters immune to damage types</li>
                <li>• Monsters take reduced damage</li>
                <li>• Monsters deal extra damage</li>
                <li>• Monsters have extra life</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Vendors & Currency</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">NPC Priorities</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Rog (item gambling/crafting)</li>
                <li>• Tujen (currency exchange)</li>
                <li>• Gwennen (unique item gambling)</li>
                <li>• Dannig (expedition planning)</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Currency Value</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Exotic Coinage (most valuable)</li>
                <li>• Astragali (Gwennen gambling)</li>
                <li>• Burial Medallions (Dannig)</li>
                <li>• Scrap Metal (Tujen currency)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HeistGuide() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-poe-gold mb-6">Heist Skills & Rewards</h2>
      
      <div className="mb-6">
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-poe-gold mb-4">Heist Skill Rewards</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Lockpicking</span>
              <div className="flex gap-2">
                <span className="text-2xl" title="Currency">💰</span>
                <span className="text-2xl" title="Fragments">🧩</span>
                <span className="text-2xl" title="Jewelry">💍</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Brute Force</span>
              <div className="flex gap-2">
                <span className="text-2xl" title="Fossils">🦴</span>
                <span className="text-2xl" title="Uniques">⭐</span>
                <span className="text-2xl" title="Weapons">⚔️</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Perception</span>
              <div className="flex gap-2">
                <span className="text-2xl" title="Divination Cards">🎴</span>
                <span className="text-2xl" title="Jewelry">💍</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Demolition</span>
              <div className="flex gap-2">
                <span className="text-2xl" title="Delirium">🌀</span>
                <span className="text-2xl" title="Ultimatum">⚡</span>
                <span className="text-2xl" title="Blight">🕸️</span>
                <span className="text-2xl" title="Generic">📦</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Trap Disarmament</span>
              <div className="flex gap-2">
                <span className="text-2xl" title="Legion">⚔️</span>
                <span className="text-2xl" title="Abyss">🌊</span>
                <span className="text-2xl" title="Breach">💥</span>
                <span className="text-2xl" title="Talisman">🔮</span>
                <span className="text-2xl" title="Armour">🛡️</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Agility</span>
              <div className="flex gap-2">
                <span className="text-2xl" title="Currency">💰</span>
                <span className="text-2xl" title="Essence">💎</span>
                <span className="text-2xl" title="Fossils">🦴</span>
                <span className="text-2xl" title="Harbinger">🌊</span>
                <span className="text-2xl" title="Armour">🛡️</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Deception</span>
              <div className="flex gap-2">
                <span className="text-2xl" title="Divination Cards">🎴</span>
                <span className="text-2xl" title="Harbinger">🌊</span>
                <span className="text-2xl" title="Armour">🛡️</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-white font-medium">Engineering</span>
              <div className="flex gap-2">
                <span className="text-2xl" title="Maps">🗺️</span>
                <span className="text-2xl" title="Essence">💎</span>
                <span className="text-2xl" title="Uniques">⭐</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-white font-medium">Counter-Thaumaturgy</span>
              <div className="flex gap-2">
                <span className="text-2xl" title="Currency">💰</span>
                <span className="text-2xl" title="Jewelry">💍</span>
                <span className="text-2xl" title="Skill Gems">💠</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Heist Strategy</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Currency Farming</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Focus on Lockpicking, Agility, Counter-Thaumaturgy</li>
                <li>• Run currency blueprint reveals</li>
                <li>• Prioritize high-value currency rooms</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Unique Hunting</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Target Brute Force and Engineering</li>
                <li>• Look for replica unique blueprints</li>
                <li>• Grand heists have best unique odds</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Rogue Selection</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Best Rogues by Skill</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Lockpicking: Karst (reduced alert)</li>
                <li>• Brute Force: Tibbs (chance to not raise alert)</li>
                <li>• Demolition: Vinderi (chance to duplicate)</li>
                <li>• Perception: Nenet (no alert from chests)</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Grand Heist Tips</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Bring rogues with all required skills</li>
                <li>• Level rogue equipment for speed</li>
                <li>• Plan escape route before lockdown</li>
                <li>• Save best rewards for last</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BetrayalGuide() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-poe-gold mb-6">Betrayal Board</h2>
      
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
      <h2 className="text-2xl font-bold text-poe-gold mb-6">Delve</h2>
      
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
      <h2 className="text-2xl font-bold text-poe-gold mb-6">Incursion Temple</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Room Priorities</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">T3 High Value Rooms</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Apex of Ascension (skill points)</li>
                <li>• Doryani's Institute (corrupted gems)</li>
                <li>• Locus of Corruption (double corrupt)</li>
                <li>• Currency Exchange rooms</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Useful T2 Rooms</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Gemcutter's Workshop (quality gems)</li>
                <li>• Strongbox rooms (extra items)</li>
                <li>• Map rooms (atlas progression)</li>
                <li>• Jewelry rooms (accessories)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Temple Strategy</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Incursion Planning</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Plan room connections early</li>
                <li>• Upgrade valuable rooms to T3</li>
                <li>• Connect rooms for accessibility</li>
                <li>• Kill architects to change rooms</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-3 rounded">
              <h4 className="font-semibold text-poe-gold">Temple Execution</h4>
              <ul className="text-sm text-gray-300 mt-2 space-y-1">
                <li>• Clear path to valuable rooms first</li>
                <li>• Use corruption chamber carefully</li>
                <li>• Save valuable items for T3 rooms</li>
                <li>• Consider selling temple access</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}