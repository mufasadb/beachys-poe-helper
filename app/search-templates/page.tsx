'use client'
import { useState } from 'react'

export default function SearchTemplates() {
  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-poe-gold mb-4">Vendor Search Templates</h1>
        <p className="text-xl text-gray-300">Copy-paste regex patterns for vendor inventory searches (3.14+ feature)</p>
        <div className="mt-4 p-4 bg-gray-800 border border-poe-gold rounded-lg">
          <p className="text-sm text-gray-300">
            <strong className="text-poe-gold">How to use:</strong> Copy the pattern and paste it into the vendor search box (ctrl+v). 
            Items matching the pattern will be highlighted with a yellow border.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MovementSpeedBoots />
        <GenericSearches />
      </div>
      
      <div className="mt-8">
        <ExternalToolsReference />
      </div>
    </main>
  )
}

function MovementSpeedBoots() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const bootSearches = [
    {
      name: "MS Boots - 3 Blue Sockets",
      description: "Movement speed boots with 3 blue sockets (vendor regex)",
      searchString: `"nt speed".*"b-b-b"`
    },
    {
      name: "MS Boots - 3 Green Sockets", 
      description: "Movement speed boots with 3 green sockets (vendor regex)",
      searchString: `"nt speed".*"g-g-g"`
    },
    {
      name: "MS Boots - 3 Red Sockets",
      description: "Movement speed boots with 3 red sockets (vendor regex)", 
      searchString: `"nt speed".*"r-r-r"`
    },
    {
      name: "MS Boots - 2 Blue 1 Green",
      description: "Movement speed boots with 2 blue, 1 green socket (vendor regex)",
      searchString: `"nt speed".*"b-b-g|g-b-b|b-g-b"`
    },
    {
      name: "MS Boots - 2 Green 1 Blue",
      description: "Movement speed boots with 2 green, 1 blue socket (vendor regex)",
      searchString: `"nt speed".*"g-g-b|b-g-g|g-b-g"`
    },
    {
      name: "MS Boots - 2 Red 1 Green", 
      description: "Movement speed boots with 2 red, 1 green socket (vendor regex)",
      searchString: `"nt speed".*"r-r-g|g-r-r|r-g-r"`
    },
    {
      name: "MS Boots - 2 Green 1 Red",
      description: "Movement speed boots with 2 green, 1 red socket (vendor regex)", 
      searchString: `"nt speed".*"g-g-r|r-g-g|g-r-g"`
    }
  ]

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-poe-gold">Movement Speed Boots</h2>
      <p className="text-gray-400 mb-6">
        Common socket color combinations for movement speed boots. Click to copy the search string.
      </p>
      
      <div className="space-y-4">
        {bootSearches.map((search, index) => (
          <div key={index} className="border border-gray-700 rounded-lg p-4 hover:border-poe-gold transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white">{search.name}</h3>
              <button
                onClick={() => copyToClipboard(search.searchString, index)}
                className="px-3 py-1 bg-poe-gold text-poe-dark rounded text-sm font-medium hover:bg-yellow-400 transition-colors"
              >
                {copiedIndex === index ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <p className="text-gray-400 text-sm mb-3">{search.description}</p>
            <div className="bg-gray-800 p-3 rounded font-mono text-sm text-gray-200">
              {search.searchString}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function GenericSearches() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const genericSearches = [
    {
      name: "Chaos Recipe Items (60-74)",
      description: "Rare items level 60-74 for chaos recipe",
      searchString: `"rare".*"item level: ([6][0-9]|[7][0-4])"`
    },
    {
      name: "6-Link Items",
      description: "Items with 6 linked sockets",
      searchString: `"sockets: ([rgbw]-?){6}"`
    },
    {
      name: "6-Socket Items",
      description: "Items with 6 sockets (vendor for 7 jewellers)",
      searchString: `"sockets: ([rgbw].?){6}"`
    },
    {
      name: "Quality 10%+ Items",
      description: "Items with 10%+ quality",
      searchString: `"quality: \\+([1-9][0-9])"`
    },
    {
      name: "RGB Linked Items", 
      description: "Items with red-green-blue linked for chromatic orb",
      searchString: `"r-g-b|r-b-g|g-r-b|g-b-r|b-r-g|b-g-r"`
    },
    {
      name: "High Life Items (70+)",
      description: "Items with 70+ life rolls",
      searchString: `"([1-9]\\d{2,}|[7-9]\\d).+life"`
    }
  ]

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-poe-gold">Common Searches</h2>
      <p className="text-gray-400 mb-6">
        Frequently used search patterns for various gear types.
      </p>
      
      <div className="space-y-4">
        {genericSearches.map((search, index) => (
          <div key={index} className="border border-gray-700 rounded-lg p-4 hover:border-poe-gold transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white">{search.name}</h3>
              <button
                onClick={() => copyToClipboard(search.searchString, index)}
                className="px-3 py-1 bg-poe-gold text-poe-dark rounded text-sm font-medium hover:bg-yellow-400 transition-colors"
              >
                {copiedIndex === index ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <p className="text-gray-400 text-sm mb-3">{search.description}</p>
            <div className="bg-gray-800 p-3 rounded font-mono text-sm text-gray-200">
              {search.searchString}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ExternalToolsReference() {
  const tools = [
    {
      name: "Awakened PoE Trade",
      description: "In-game overlay for price checking and advanced searches",
      url: "https://github.com/SnosMe/awakened-poe-trade",
      features: ["Price checking", "Advanced search filters", "In-game overlay", "Hotkey support"]
    },
    {
      name: "Official POE Trade",
      description: "GGG's official trade website with comprehensive search options",
      url: "https://www.pathofexile.com/trade",
      features: ["Complete item database", "Advanced filters", "Real-time listings", "Currency exchange"]
    },
    {
      name: "Vorici Calculator",
      description: "Calculate chromatic orb costs for desired socket colors",
      url: "https://siveran.github.io/calc.html",
      features: ["Socket color planning", "Chromatic cost estimation", "Success probability calculation"]
    }
  ]

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-poe-gold">Advanced Search Tools</h2>
      <p className="text-gray-400 mb-6">
        For more advanced searching and price checking, check out these community tools:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div key={index} className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
            <ul className="text-sm text-gray-300 mb-4 space-y-1">
              {tool.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <span className="text-poe-gold mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-poe-gold text-poe-dark rounded text-sm font-medium hover:bg-yellow-400 transition-colors"
            >
              Visit Tool
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}