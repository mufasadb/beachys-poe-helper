'use client'
import { useState, useEffect } from 'react'

interface PopupConfig {
  id: string
  name: string
  enabled: boolean
  hotkey: string
  x: number
  y: number
  width: number
  height: number
  module: string
  category?: string
}

interface ScreenConfig {
  width: number
  height: number
}

export default function PopupConfig() {
  const [screenConfig, setScreenConfig] = useState<ScreenConfig>({ width: 1920, height: 1080 })
  const [selectedPopup, setSelectedPopup] = useState<string | null>(null)
  const [configs, setConfigs] = useState<PopupConfig[]>([
    {
      id: 'leveling-guide',
      name: 'Leveling Guide',
      enabled: true,
      hotkey: 'Ctrl+1',
      x: 100,
      y: 100,
      width: 400,
      height: 600,
      module: 'cheat-sheets',
      category: 'leveling'
    },
    {
      id: 'vendor-search',
      name: 'Vendor Search',
      enabled: true,
      hotkey: 'Ctrl+2',
      x: 520,
      y: 100,
      width: 350,
      height: 500,
      module: 'vendor-search',
      category: 'movement-boots'
    },
    {
      id: 'vendor-recipes',
      name: 'Vendor Recipes',
      enabled: true,
      hotkey: 'Ctrl+3',
      x: 890,
      y: 100,
      width: 400,
      height: 550,
      module: 'vendor-recipes',
      category: 'currency'
    },
    {
      id: 'atlas-guide',
      name: 'Atlas Guide',
      enabled: false,
      hotkey: 'Ctrl+4',
      x: 100,
      y: 300,
      width: 400,
      height: 500,
      module: 'cheat-sheets',
      category: 'atlas'
    },
    {
      id: 'trading-tools',
      name: 'Trading Tools',
      enabled: false,
      hotkey: 'Ctrl+5',
      x: 520,
      y: 300,
      width: 400,
      height: 400,
      module: 'dashboard',
      category: 'trading-economy'
    }
  ])

  useEffect(() => {
    // Get actual screen dimensions if available
    if (typeof window !== 'undefined') {
      setScreenConfig({
        width: window.screen.width,
        height: window.screen.height
      })
    }
  }, [])

  const updateConfig = (id: string, updates: Partial<PopupConfig>) => {
    setConfigs(configs.map(config => 
      config.id === id ? { ...config, ...updates } : config
    ))
  }

  const exportConfig = () => {
    const configData = {
      screen: screenConfig,
      popups: configs.filter(c => c.enabled),
      exportDate: new Date().toISOString()
    }
    
    const blob = new Blob([JSON.stringify(configData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'poe-popup-config.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const previewPopup = (config: PopupConfig) => {
    setSelectedPopup(config.id)
    // In a real implementation, this would show a preview
  }

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-poe-gold mb-4">Popup Configuration</h1>
        <p className="text-xl text-gray-300">Configure popup positions, sizes, and hotkeys for your AutoHotkey script</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-poe-gold mb-4">Popup Settings</h2>
            
            {/* Screen Configuration */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Screen Resolution</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Width</label>
                  <input
                    type="number"
                    value={screenConfig.width}
                    onChange={(e) => setScreenConfig({...screenConfig, width: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Height</label>
                  <input
                    type="number"
                    value={screenConfig.height}
                    onChange={(e) => setScreenConfig({...screenConfig, height: parseInt(e.target.value)})}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white"
                  />
                </div>
              </div>
            </div>

            {/* Popup List */}
            <div className="space-y-4">
              {configs.map((config) => (
                <div
                  key={config.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedPopup === config.id
                      ? 'border-poe-gold bg-gray-800'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setSelectedPopup(config.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{config.name}</h4>
                    <input
                      type="checkbox"
                      checked={config.enabled}
                      onChange={(e) => updateConfig(config.id, { enabled: e.target.checked })}
                      className="w-4 h-4"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  <div className="text-sm text-gray-400">
                    Hotkey: {config.hotkey} | {config.width}x{config.height} at ({config.x}, {config.y})
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={exportConfig}
              className="w-full mt-6 py-3 bg-poe-gold text-poe-dark rounded font-semibold hover:bg-yellow-400 transition-colors"
            >
              Export Configuration
            </button>
          </div>
        </div>

        {/* Visual Preview */}
        <div className="lg:col-span-2">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-poe-gold mb-4">Screen Preview</h2>
            
            <div className="relative bg-gray-800 border-2 border-gray-700 rounded overflow-hidden"
                 style={{ 
                   width: '100%', 
                   paddingBottom: `${(screenConfig.height / screenConfig.width) * 100}%`,
                   maxHeight: '600px'
                 }}>
              <div className="absolute inset-0">
                {configs.filter(c => c.enabled).map((config) => (
                  <div
                    key={config.id}
                    className={`absolute border-2 rounded transition-colors cursor-pointer ${
                      selectedPopup === config.id
                        ? 'border-poe-gold bg-poe-gold bg-opacity-20'
                        : 'border-gray-500 bg-gray-600 bg-opacity-30 hover:border-gray-400'
                    }`}
                    style={{
                      left: `${(config.x / screenConfig.width) * 100}%`,
                      top: `${(config.y / screenConfig.height) * 100}%`,
                      width: `${(config.width / screenConfig.width) * 100}%`,
                      height: `${(config.height / screenConfig.height) * 100}%`,
                    }}
                    onClick={() => setSelectedPopup(config.id)}
                  >
                    <div className="p-2 text-xs text-white font-semibold">
                      {config.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Popup Configuration */}
            {selectedPopup && (
              <div className="mt-6">
                {(() => {
                  const config = configs.find(c => c.id === selectedPopup)
                  if (!config) return null
                  
                  return (
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-poe-gold mb-4">{config.name} Settings</h3>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">X Position</label>
                          <input
                            type="number"
                            value={config.x}
                            onChange={(e) => updateConfig(config.id, { x: parseInt(e.target.value) })}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Y Position</label>
                          <input
                            type="number"
                            value={config.y}
                            onChange={(e) => updateConfig(config.id, { y: parseInt(e.target.value) })}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Width</label>
                          <input
                            type="number"
                            value={config.width}
                            onChange={(e) => updateConfig(config.id, { width: parseInt(e.target.value) })}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">Height</label>
                          <input
                            type="number"
                            value={config.height}
                            onChange={(e) => updateConfig(config.id, { height: parseInt(e.target.value) })}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-sm text-gray-400 mb-1">Hotkey</label>
                        <input
                          type="text"
                          value={config.hotkey}
                          onChange={(e) => updateConfig(config.id, { hotkey: e.target.value })}
                          placeholder="e.g. Ctrl+1, Alt+Q, F1"
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                        />
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}

            <div className="mt-6 p-4 bg-gray-800 border border-gray-700 rounded">
              <h3 className="text-lg font-semibold text-poe-gold mb-2">Instructions</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Click on popups in the preview to select and configure them</li>
                <li>• Enable/disable popups using the checkboxes</li>
                <li>• Adjust screen resolution to match your setup</li>
                <li>• Export configuration and place it in the same folder as your AHK script</li>
                <li>• The AutoHotkey script will read this configuration on startup</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}