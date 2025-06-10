'use client'
import { useState } from 'react'

export default function AHKDownload() {
  const [downloadStarted, setDownloadStarted] = useState(false)

  const downloadScripts = async () => {
    setDownloadStarted(true)
    
    try {
      // Get download information
      const response = await fetch('/api/download/ahk')
      const data = await response.json()
      
      if (data.files && data.files.length > 0) {
        // Download each file individually
        data.files.forEach((file: any) => {
          const link = document.createElement('a')
          link.href = `/downloads/${file.name}`
          link.download = file.name
          link.style.display = 'none'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        })
        
        // Show success message
        alert(`Download started! ${data.files.length} files will be downloaded.`)
      } else {
        alert('No files available for download')
      }
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
            <h3 className="text-lg font-semibold text-white mb-3">What's Included:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-poe-gold mr-2">•</span>
                <span>Main popup script (poe-popup-helper.ahk)</span>
              </li>
              <li className="flex items-center">
                <span className="text-poe-gold mr-2">•</span>
                <span>Configuration module (config.ahk)</span>
              </li>
              <li className="flex items-center">
                <span className="text-poe-gold mr-2">•</span>
                <span>HTTP communication module (http.ahk)</span>
              </li>
              <li className="flex items-center">
                <span className="text-poe-gold mr-2">•</span>
                <span>Popup display module (popup.ahk)</span>
              </li>
              <li className="flex items-center">
                <span className="text-poe-gold mr-2">•</span>
                <span>Content caching module (cache.ahk)</span>
              </li>
              <li className="flex items-center">
                <span className="text-poe-gold mr-2">•</span>
                <span>Installation guide (README.txt)</span>
              </li>
            </ul>
          </div>

          <div className="mb-6 p-4 bg-gray-800 border border-gray-700 rounded">
            <h4 className="font-semibold text-poe-gold mb-2">Requirements:</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• AutoHotkey v1.1.30+ installed</li>
              <li>• Windows 7/10/11</li>
              <li>• Internet connection for content fetching</li>
              <li>• Configuration file from popup config page</li>
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
              href="/popup-config"
              className="text-poe-gold hover:text-yellow-400 underline"
            >
              Configure Popup Settings First →
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
              <h3 className="text-lg font-semibold text-white mb-3">Step 2: Configure Popups</h3>
              <p className="text-gray-300 text-sm mb-2">
                Set up your popup positions and hotkeys using our configuration tool:
              </p>
              <a 
                href="/popup-config"
                className="inline-block px-3 py-2 bg-gray-800 text-poe-gold rounded hover:bg-gray-700 transition-colors"
              >
                Configure Popups
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Step 3: Download & Extract</h3>
              <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                <li>Download the script package above</li>
                <li>Extract all files to a folder (e.g., C:\POE-Helper\)</li>
                <li>Copy your config file (poe-popup-config.json) to the same folder</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Step 4: Run the Script</h3>
              <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
                <li>Right-click on poe-popup-helper.ahk</li>
                <li>Select "Compile Script" (optional, for performance)</li>
                <li>Double-click the .ahk file (or .exe if compiled)</li>
                <li>Look for the system tray icon</li>
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
              <li><span className="text-poe-gold">Ctrl+1</span> - Leveling Guide</li>
              <li><span className="text-poe-gold">Ctrl+2</span> - Vendor Search</li>
              <li><span className="text-poe-gold">Ctrl+3</span> - Vendor Recipes</li>
              <li><span className="text-poe-gold">Ctrl+Alt+H</span> - Show Help</li>
              <li><span className="text-poe-gold">Ctrl+Alt+R</span> - Reload Config</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Troubleshooting</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Ensure AutoHotkey is installed</li>
              <li>• Check config file is present</li>
              <li>• Verify internet connection</li>
              <li>• Run as administrator if needed</li>
              <li>• Check Windows antivirus settings</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Customization</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Modify hotkeys in config</li>
              <li>• Adjust popup positions/sizes</li>
              <li>• Enable/disable specific popups</li>
              <li>• Change content refresh rates</li>
              <li>• Customize popup appearance</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}