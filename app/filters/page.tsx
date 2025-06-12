'use client'

import { useState } from 'react'

interface Filter {
  name: string
  description: string
  author: string
  strictness?: string[]
  filterBladeProfile?: string
  saveStates?: { name: string; saveState: string }[]
}

interface SoundPack {
  name: string
  description: string
  downloadUrl: string
  fileCount: number
}

export default function FiltersPage() {
  const [activeTab, setActiveTab] = useState('filters')

  const racingFilters: Filter[] = [
    {
      name: 'TyTyKiller Racing Filters',
      description: 'Optimized filters for speedrunning and racing',
      author: 'TyTyKiller',
      filterBladeProfile: 'Tytykiller',
      saveStates: [
        { name: 'Ranged', saveState: 'AAAARanged' },
        { name: 'Melee', saveState: 'AAAAMelee' },
        { name: 'Caster', saveState: '800161' },
      ],
    },
    {
      name: 'Balormage Progression',
      description: 'Softcore progression filters from league start to pinnacle',
      author: 'Balormage',
      filterBladeProfile: 'Balormage',
      strictness: ['Regular', 'Strict', 'Very Strict'],
    },
  ]

  const earlyEndgameFilters: Filter[] = [
    {
      name: 'NeverSink Semi-Strict',
      description: 'Good balance for returning players entering maps',
      author: 'NeverSink',
      strictness: ['Semi-Strict'],
    },
    {
      name: 'NeverSink Strict',
      description: 'Recommended for yellow/early red maps',
      author: 'NeverSink',
      strictness: ['Strict'],
    },
  ]

  const lateEndgameFilters: Filter[] = [
    {
      name: 'NeverSink Very Strict',
      description: 'For established players farming red maps efficiently',
      author: 'NeverSink',
      strictness: ['Very Strict'],
    },
    {
      name: 'NeverSink Uber Strict',
      description: 'Maximum efficiency for pinnacle content',
      author: 'NeverSink',
      strictness: ['Uber Strict', 'Uber Plus Strict'],
    },
    {
      name: 'Exosta MF Filter',
      description: 'Magic find specialist filter for juiced content',
      author: 'MF Academy',
      filterBladeProfile: 'Exosta',
    },
  ]

  const soundPacks: SoundPack[] = [
    {
      name: 'Default',
      description: 'Standard POE filter sounds',
      downloadUrl: '',
      fileCount: 0,
    },
    {
      name: 'Diablo 2',
      description: 'Classic loot sounds from Diablo 2',
      downloadUrl: 'https://mega.nz/#!IdklhA5A!wI3I1w7Z78bSMOFqVnOPYjhOr8Rpx6AFiOlAdIzrbZk',
      fileCount: 10,
    },
    {
      name: 'Binding of Isaac',
      description: 'Enemy sounds from Binding of Isaac',
      downloadUrl: 'https://drive.google.com/file/d/1QSiDkLj_QcYud05SFyuu-8OrfWNy-aij/view',
      fileCount: 8,
    },
    {
      name: 'Anime Voices',
      description: 'Popular anime character voice lines',
      downloadUrl: 'https://drive.google.com/drive/folders/1ywZ_aMKlsVjRU5Nyu-5CBXhNRXyPgeCj',
      fileCount: 10,
    },
    {
      name: 'Tony Hawk Pro Skater',
      description: 'Skateboarding sound effects',
      downloadUrl: 'https://mega.nz/file/I4JwVCgQ#9-IBN9k7AUjMEXnrICUmAnq9KA0YtBaI6dMviH-Ts9U',
      fileCount: 10,
    },
    {
      name: 'StarCraft 2',
      description: 'Terran unit sounds from SC2',
      downloadUrl: 'https://drive.google.com/file/d/1Qv5Fx6PA-7LqeiQHiV_mhAjtssMVinwO/edit',
      fileCount: 10,
    },
    {
      name: 'Age of Empires 2',
      description: 'Classic RTS sound effects',
      downloadUrl: 'https://www.dropbox.com/s/o5w4qo0ykjty40t/aoe2filter.zip?dl=0',
      fileCount: 10,
    },
  ]

  const getFilterBladeUrl = (filter: Filter, saveState?: string) => {
    const baseUrl = 'https://www.filterblade.xyz/'
    
    if (filter.filterBladeProfile && saveState) {
      return `${baseUrl}?profile=${filter.filterBladeProfile}&saveState=${saveState}&platform=pc`
    }
    
    if (filter.strictness) {
      return baseUrl
    }
    
    return baseUrl
  }

  const getFilterImage = (filterName: string) => {
    if (filterName.includes('Racing')) return '/images/items/Academy_Map_%28Settlers%29_inventory_icon.png'
    if (filterName.includes('Balormage')) return '/images/items/Alleyways_Map_%28Settlers%29_inventory_icon.png'
    if (filterName.includes('Semi-Strict')) return '/images/items/Chaos_Orb_inventory_icon.png'
    if (filterName.includes('Strict')) return '/images/items/Exalted_Orb_inventory_icon.png'
    if (filterName.includes('Very Strict')) return '/images/items/Divine_Orb_inventory_icon.png'
    if (filterName.includes('Uber Strict')) return '/images/items/The_Fiend_inventory_icon.png'
    if (filterName.includes('MF Filter')) return '/images/items/Ancient_Orb_inventory_icon.png'
    return '/images/items/Divination_card_inventory_icon.png'
  }

  const FilterCard = ({ filter }: { filter: Filter }) => (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors">
      <div className="space-y-3">
        <div className="flex items-start">
          <img 
            src={getFilterImage(filter.name)} 
            alt={filter.name} 
            className="w-10 h-10 mr-3 mt-1 object-contain"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-poe-gold">{filter.name}</h3>
            <p className="text-sm text-gray-300">{filter.description}</p>
            <p className="text-xs text-gray-500 mt-1">by {filter.author}</p>
          </div>
        </div>

        <div className="space-y-2">
          {filter.saveStates ? (
            <div className="space-y-1">
              {filter.saveStates.map((state) => (
                <div key={state.saveState} className="flex items-center gap-2">
                  <button
                    onClick={() => window.open(getFilterBladeUrl(filter, state.saveState), '_blank')}
                    className="flex-1 px-3 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    📥 {state.name} Build
                  </button>
                </div>
              ))}
            </div>
          ) : filter.strictness ? (
            <div className="space-y-1">
              {filter.strictness.map((level) => (
                <div key={level} className="flex items-center gap-2">
                  <button
                    onClick={() => window.open(getFilterBladeUrl(filter), '_blank')}
                    className="flex-1 px-3 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    🔗 {level}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <button
              onClick={() => window.open(getFilterBladeUrl(filter), '_blank')}
              className="w-full px-3 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors text-sm flex items-center justify-center gap-2"
            >
              🔗 Open in FilterBlade
            </button>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-poe-gold mb-4">POE Loot Filters</h1>
        <p className="text-xl text-gray-300">
          FilterBlade-compatible filters with sound pack support
        </p>
      </header>

      <div className="mb-8 bg-blue-950 border border-blue-800 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <span className="text-blue-400 text-xl">ℹ️</span>
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-blue-300">Installation Guide:</p>
            <ol className="list-decimal list-inside space-y-1 text-blue-200">
              <li>Choose a filter below and click to open in FilterBlade</li>
              <li>Customize the filter if desired (optional)</li>
              <li>Download the filter file from FilterBlade</li>
              <li>Place filter in: <code className="bg-blue-900 px-1 rounded">Documents/My Games/Path of Exile</code></li>
              <li>If using custom sounds, place sound files in the same folder</li>
              <li>In-game: Go to Options → Game → Select your filter</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4 border-b border-gray-800">
          <button
            onClick={() => setActiveTab('filters')}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === 'filters'
                ? 'text-poe-gold border-poe-gold'
                : 'text-gray-400 border-transparent hover:text-gray-200'
            }`}
          >
            Loot Filters
          </button>
          <button
            onClick={() => setActiveTab('sounds')}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === 'sounds'
                ? 'text-poe-gold border-poe-gold'
                : 'text-gray-400 border-transparent hover:text-gray-200'
            }`}
          >
            Sound Packs
          </button>
        </div>

        {activeTab === 'filters' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-poe-gold mb-4">Racing Filters</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {racingFilters.map((filter) => (
                  <FilterCard key={filter.name} filter={filter} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-poe-gold mb-4">Early Endgame</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {earlyEndgameFilters.map((filter) => (
                  <FilterCard key={filter.name} filter={filter} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-poe-gold mb-4">Late Endgame</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {lateEndgameFilters.map((filter) => (
                  <FilterCard key={filter.name} filter={filter} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sounds' && (
          <div className="space-y-6">
            <div className="bg-amber-950 border border-amber-800 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-amber-400 text-xl">🔊</span>
                <div className="text-sm">
                  <p className="font-semibold text-amber-300">Sound Pack Compatibility:</p>
                  <p className="text-amber-200">
                    All sound packs below work with any FilterBlade-based filter. 
                    They replace the default POE sounds with custom audio.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {soundPacks.map((pack) => (
                <div key={pack.name} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <img 
                      src="/images/items/Anger_inventory_icon.png" 
                      alt="Sound Pack" 
                      className="w-8 h-8 mr-2"
                    />
                    <h3 className="text-lg font-semibold text-poe-gold">{pack.name}</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">{pack.description}</p>
                  {pack.fileCount > 0 && (
                    <p className="text-xs text-gray-500 mb-3">
                      Contains {pack.fileCount} sound files
                    </p>
                  )}
                  {pack.downloadUrl && (
                    <button
                      onClick={() => window.open(pack.downloadUrl, '_blank')}
                      className="w-full px-3 py-2 bg-poe-gold text-poe-dark rounded font-medium hover:bg-yellow-400 transition-colors text-sm flex items-center justify-center gap-2"
                      title="Extract to Documents/My Games/Path of Exile"
                    >
                      📥 Download
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gray-900 border border-gray-800 rounded-lg">
              <h3 className="font-semibold text-poe-gold mb-2">FilterBlade Sound Packs</h3>
              <p className="text-sm text-gray-300 mb-3">
                FilterBlade also includes built-in streamer sound packs. 
                Access them when customizing any filter on FilterBlade.
              </p>
              <button
                onClick={() => window.open('https://www.filterblade.xyz/', '_blank')}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors text-sm flex items-center gap-2"
              >
                🔗 Browse FilterBlade Sound Options
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}