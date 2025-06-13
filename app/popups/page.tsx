import Link from 'next/link'

const POPUPS = [
  { id: 'leveling-guide', title: 'Leveling Guide', hotkey: 'F1', description: 'Essential zones, resistances, and efficiency tips' },
  { id: 'atlas-quick', title: 'Atlas Quick Ref', hotkey: 'F2', description: 'Progression priority and league mechanics' },
  { id: 'movement-boots', title: 'Movement Boots', hotkey: 'F3', description: 'Vendor recipe and search patterns' },
  { id: 'trading-quick', title: 'Trading Links', hotkey: 'F4', description: 'Essential sites and search tips' },
  { id: 'vendor-recipes', title: 'Vendor Recipes', hotkey: 'F5', description: 'Chaos recipe, weapon mods, and more' },
  { id: 'heist-table', title: 'Heist Quick Ref', hotkey: 'F6', description: 'Rogue skills, alert management, rewards' },
  { id: 'weapon-bases', title: 'Weapon Bases', hotkey: 'F7', description: 'Axe types, crafting priority, sockets' }
]

export default function PopupsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-poe-gold mb-4">
            Quick Reference Popups
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Compact, information-dense popups designed for overlay use or quick reference. 
            Each popup is optimized for specific game scenarios and can be accessed via AutoHotkey overlays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPUPS.map((popup) => (
            <Link
              key={popup.id}
              href={`/popup/${popup.id}`}
              className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors border border-gray-700 hover:border-poe-gold"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-poe-gold">{popup.title}</h3>
                <span className="bg-poe-gold text-gray-900 px-2 py-1 rounded text-sm font-mono">
                  {popup.hotkey}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {popup.description}
              </p>
              <div className="mt-4 flex items-center text-poe-gold text-sm">
                <span>View Popup →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-bold text-poe-gold mb-4">Using with AutoHotkey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Download Script</h3>
              <p className="text-gray-300 text-sm mb-3">
                Get the AutoHotkey script to overlay these popups in-game with hotkeys F1-F7.
              </p>
              <Link
                href="/ahk-download"
                className="inline-block bg-poe-gold text-gray-900 px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors"
              >
                Download AHK Script
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Direct Access</h3>
              <p className="text-gray-300 text-sm mb-3">
                Access any popup directly via URL for bookmarking or custom integrations.
              </p>
              <code className="text-xs bg-gray-900 p-2 rounded block text-green-400">
                /popup/[category-name]
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}