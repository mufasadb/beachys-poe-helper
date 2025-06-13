'use client'
import { useState } from 'react'

export default function AHKDownload() {
  const [downloadStarted, setDownloadStarted] = useState(false)

  const downloadScripts = async () => {
    setDownloadStarted(true)
    
    try {
      // Download the new POE Web Overlay script
      const link = document.createElement('a')
      link.href = '/downloads/poe-web-overlay.ahk'
      link.download = 'poe-web-overlay.ahk'
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Show success message
      alert('Download started! The POE Web Overlay script will be downloaded.')
    } catch (error) {
      alert('Download failed. Please try again.')
      console.error('Download error:', error)
    }
    
    setTimeout(() => setDownloadStarted(false), 2000)
  }

  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-poe-gold mb-4">AutoHotkey Popup Scripts</h1>
        <p className="text-xl text-gray-300">
          Download hotkey-triggered popups for instant access to POE guides and tools
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Download Section */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-poe-gold mb-4">Download Package</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">What You Get:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-poe-gold mr-2">•</span>
                <span>POE Web Overlay script (poe-web-overlay.ahk)</span>
              </li>
              <li className="flex items-center">
                <span className="text-poe-gold mr-2">•</span>
                <span>Uses WebView2 for modern web-based overlays</span>
              </li>
              <li className="flex items-center">
                <span className="text-poe-gold mr-2">•</span>
                <span>Built-in content for all major POE activities</span>
              </li>
              <li className="flex items-center">
                <span className="text-poe-gold mr-2">•</span>
                <span>Dynamic configuration from remote server</span>
              </li>
              <li className="flex items-center">
                <span className="text-poe-gold mr-2">•</span>
                <span>Default hotkeys F1-F5 for instant access</span>
              </li>
            </ul>
          </div>

          <div className="mb-6 p-4 bg-gray-800 border border-gray-700 rounded">
            <h4 className="font-semibold text-poe-gold mb-2">Requirements:</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• AutoHotkey v2.0+ installed</li>
              <li>• Windows 10/11 (WebView2 Runtime)</li>
              <li>• Required libraries from ahk2_lib GitHub repo</li>
              <li>• Internet connection for initial setup</li>
            </ul>
          </div>

          <button
            onClick={downloadScripts}
            disabled={downloadStarted}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors ${
              downloadStarted 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-poe-gold text-poe-dark hover:bg-yellow-400'
            }`}
          >
            {downloadStarted ? 'Download Starting...' : 'Download AHK Scripts'}
          </button>

          <div className="mt-4 text-center">
            <a 
              href="/downloads/SETUP.md"
              download="SETUP.md"
              className="text-poe-gold hover:text-yellow-400 underline"
            >
              Download Setup Guide →
            </a>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-poe-gold mb-4">Installation Guide</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Step 1: Install AutoHotkey</h3>
              <p className="text-gray-300 text-sm mb-2">
                Download and install AutoHotkey from the official website:
              </p>
              <a 
                href="https://www.autohotkey.com/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-2 bg-gray-800 text-poe-gold rounded hover:bg-gray-700 transition-colors"
              >
                Download AutoHotkey
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Step 2: Setup Libraries</h3>
              <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                <li>Download the POE Web Overlay script above</li>
                <li>Create a &apos;Lib&apos; folder next to the script</li>
                <li>Download libraries from: <a href="https://github.com/thqby/ahk2_lib" target="_blank" className="text-poe-gold hover:text-yellow-400">thqby/ahk2_lib</a></li>
                <li>Extract WebView2/ and ComVar.ahk to the Lib folder</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Step 3: Run & Test</h3>
              <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                <li>Double-click the .ahk file to run it</li>
                <li>Press F1 for Leveling Guide overlay</li>
                <li>Press F2 for Atlas Guide overlay</li>
                <li>Press Ctrl+Alt+H for help and all hotkeys</li>
                <li>Press Ctrl+Alt+M to enter Move Mode for repositioning</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Step 4: Position Overlays</h3>
              <p className="text-gray-300 text-sm mb-2">
                Use Move Mode to position overlays exactly where you want them:
              </p>
              <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                <li>Press Ctrl+Alt+M to enter Move Mode</li>
                <li>Drag overlays to desired positions</li>
                <li>Press Ctrl+Alt+M again to save positions</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-8 bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-poe-gold mb-4">Available Popup Content</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Cheat Sheets</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Leveling Guide</li>
              <li>• Atlas Progression</li>
              <li>• Sanctum Strategy</li>
              <li>• Expedition Guide</li>
              <li>• Heist Planning</li>
              <li>• Betrayal Board</li>
              <li>• Delve Strategy</li>
              <li>• Incursion Temple</li>
              <li>• Settlers League</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Search Templates</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Movement Speed Boots</li>
              <li>• Socket Combinations</li>
              <li>• Quality Items</li>
              <li>• Linked Items</li>
              <li>• Chaos Recipe Items</li>
              <li>• High Life Rolls</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Tool Links</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Trading Sites</li>
              <li>• Build Planners</li>
              <li>• Crafting Tools</li>
              <li>• Filter Tools</li>
              <li>• Information Wikis</li>
              <li>• Progression Trackers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Vendor Recipes</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Currency Recipes</li>
              <li>• Equipment Crafting</li>
              <li>• Gem Recipes</li>
              <li>• Flask Recipes</li>
              <li>• Socket Recipes</li>
              <li>• Quality Recipes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="mt-8 bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-poe-gold mb-4">Support & Customization</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Default Hotkeys</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li><span className="text-poe-gold">F1</span> - Leveling Guide</li>
              <li><span className="text-poe-gold">F2</span> - Atlas Guide</li>
              <li><span className="text-poe-gold">F3</span> - Boot Search</li>
              <li><span className="text-poe-gold">F4</span> - Trading Tools</li>
              <li><span className="text-poe-gold">F5</span> - Currency Recipes</li>
              <li><span className="text-poe-gold">Ctrl+Alt+H</span> - Show Help</li>
              <li><span className="text-poe-gold">Ctrl+Alt+R</span> - Reload Script</li>
              <li><span className="text-poe-gold">Ctrl+Alt+M</span> - Toggle Move Mode</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Troubleshooting</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Ensure AutoHotkey v2.0+ is installed</li>
              <li>• Check WebView2 Runtime is installed</li>
              <li>• Verify Lib folder structure is correct</li>
              <li>• Ensure internet connection works</li>
              <li>• Run as administrator if needed</li>
              <li>• Check Windows antivirus settings</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Web-based overlays with modern UI</li>
              <li>• Draggable positioning with Move Mode</li>
              <li>• Auto-saves overlay positions</li>
              <li>• Dynamic content from server</li>
              <li>• Transparent overlays when not in Move Mode</li>
              <li>• Always-on-top for easy access</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}