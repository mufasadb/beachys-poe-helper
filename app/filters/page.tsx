'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Download, ExternalLink, Info, Volume2 } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

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
  const [selectedSoundPack, setSelectedSoundPack] = useState<string>('default')

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

  const FilterCard = ({ filter, category }: { filter: Filter; category: string }) => (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-semibold">{filter.name}</h3>
          <p className="text-sm text-gray-600">{filter.description}</p>
          <p className="text-xs text-gray-500 mt-1">by {filter.author}</p>
        </div>

        <div className="space-y-2">
          {filter.saveStates ? (
            <div className="space-y-1">
              {filter.saveStates.map((state) => (
                <div key={state.saveState} className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(getFilterBladeUrl(filter, state.saveState), '_blank')}
                    className="flex-1"
                  >
                    <Download className="w-3 h-3 mr-1" />
                    {state.name} Build
                  </Button>
                </div>
              ))}
            </div>
          ) : filter.strictness ? (
            <div className="space-y-1">
              {filter.strictness.map((level) => (
                <div key={level} className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(getFilterBladeUrl(filter), '_blank')}
                    className="flex-1"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    {level}
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(getFilterBladeUrl(filter), '_blank')}
              className="w-full"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Open in FilterBlade
            </Button>
          )}
        </div>
      </div>
    </Card>
  )

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-4xl font-bold mb-2">POE Loot Filters</h1>
      <p className="text-gray-600 mb-8">
        FilterBlade-compatible filters with sound pack support
      </p>

      <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-2">
          <Info className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-blue-900">Installation Guide:</p>
            <ol className="list-decimal list-inside space-y-1 text-blue-800">
              <li>Choose a filter below and click to open in FilterBlade</li>
              <li>Customize the filter if desired (optional)</li>
              <li>Download the filter file from FilterBlade</li>
              <li>Place filter in: <code className="bg-blue-100 px-1">Documents/My Games/Path of Exile</code></li>
              <li>If using custom sounds, place sound files in the same folder</li>
              <li>In-game: Go to Options → Game → Select your filter</li>
            </ol>
          </div>
        </div>
      </div>

      <Tabs defaultValue="filters" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="filters">Loot Filters</TabsTrigger>
          <TabsTrigger value="sounds">Sound Packs</TabsTrigger>
        </TabsList>

        <TabsContent value="filters" className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Racing Filters</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {racingFilters.map((filter) => (
                <FilterCard key={filter.name} filter={filter} category="racing" />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Early Endgame</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {earlyEndgameFilters.map((filter) => (
                <FilterCard key={filter.name} filter={filter} category="early-endgame" />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Late Endgame</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {lateEndgameFilters.map((filter) => (
                <FilterCard key={filter.name} filter={filter} category="late-endgame" />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sounds" className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-2">
              <Volume2 className="w-5 h-5 text-amber-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-amber-900">Sound Pack Compatibility:</p>
                <p className="text-amber-800">
                  All sound packs below work with any FilterBlade-based filter. 
                  They replace the default POE sounds with custom audio.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {soundPacks.map((pack) => (
              <Card key={pack.name} className="p-4">
                <h3 className="text-lg font-semibold mb-2">{pack.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{pack.description}</p>
                {pack.fileCount > 0 && (
                  <p className="text-xs text-gray-500 mb-3">
                    Contains {pack.fileCount} sound files
                  </p>
                )}
                {pack.downloadUrl && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          variant="default"
                          onClick={() => window.open(pack.downloadUrl, '_blank')}
                          className="w-full"
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Extract to Documents/My Games/Path of Exile</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold mb-2">FilterBlade Sound Packs</h3>
            <p className="text-sm text-gray-600 mb-3">
              FilterBlade also includes built-in streamer sound packs. 
              Access them when customizing any filter on FilterBlade.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://www.filterblade.xyz/', '_blank')}
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Browse FilterBlade Sound Options
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}