'use client'
import Link from 'next/link'

export default function LabLayouts() {
  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="mb-8 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <img src="/images/poe-helper-logo.png" alt="Beachy&apos;s POE Helper" className="w-12 h-12" />
        </Link>
        <div className="text-center flex-1">
          <h1 className="text-4xl font-bold text-poe-gold mb-4">Labyrinth Layouts</h1>
          <p className="text-xl text-gray-300">
            Daily labyrinth layouts and guides from PoELab.com
          </p>
        </div>
        <div className="w-12"></div>
      </header>

      <div className="mb-8 bg-blue-900/20 border border-blue-600/30 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-400 mb-3">About Labyrinth Layouts</h2>
        <p className="text-gray-300 mb-4">
          The labyrinth layouts change daily and are crowd-sourced by the community. 
          PoELab.com is the most trusted source for up-to-date lab layouts, showing the shortest paths, 
          treasure locations, and Izaro mechanics for each difficulty.
        </p>
        <p className="text-gray-300">
          Click on any lab type below to view today&apos;s layout on PoELab.com.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LabCard
          title="Normal Labyrinth"
          description="Required level: 33+ | First Ascendancy Points"
          details={[
            "Recommended: 2000+ Life",
            "Izaro has basic mechanics only",
            "Shortest and simplest layout",
            "2 Ascendancy Points awarded"
          ]}
          url="https://www.poelab.com/normal/"
          difficulty="Normal"
          color="green"
        />
        
        <LabCard
          title="Cruel Labyrinth"
          description="Required level: 55+ | Second Ascendancy Points"
          details={[
            "Recommended: 3500+ Life, Capped Resists",
            "Izaro gains additional mechanics",
            "More complex layout with traps",
            "2 Ascendancy Points awarded"
          ]}
          url="https://www.poelab.com/cruel/"
          difficulty="Cruel"
          color="yellow"
        />
        
        <LabCard
          title="Merciless Labyrinth"
          description="Required level: 68+ | Third Ascendancy Points"
          details={[
            "Recommended: 4500+ Life, Good DPS",
            "Izaro at full strength",
            "Complex layout with deadly traps",
            "2 Ascendancy Points awarded"
          ]}
          url="https://www.poelab.com/merciless/"
          difficulty="Merciless"
          color="orange"
        />
        
        <LabCard
          title="Eternal Labyrinth"
          description="Required level: 75+ | Final Ascendancy Points + Enchants"
          details={[
            "Recommended: 5500+ Life, High DPS",
            "Izaro at maximum difficulty",
            "Complex layout with all trap types",
            "2 Ascendancy Points + Helmet/Boot Enchants"
          ]}
          url="https://www.poelab.com/eternal/"
          difficulty="Eternal"
          color="red"
        />
      </div>

      {/* Tips Section */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-poe-gold mb-4">General Lab Tips</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-poe-gold mr-2">•</span>
              Study the layout before entering to plan your route
            </li>
            <li className="flex items-start">
              <span className="text-poe-gold mr-2">•</span>
              Bring extra life flasks and consider a bleed removal flask
            </li>
            <li className="flex items-start">
              <span className="text-poe-gold mr-2">•</span>
              Movement skills help navigate traps and tight spaces
            </li>
            <li className="flex items-start">
              <span className="text-poe-gold mr-2">•</span>
              You can log out to reset trap timing if needed
            </li>
            <li className="flex items-start">
              <span className="text-poe-gold mr-2">•</span>
              Complete all trials before attempting each difficulty
            </li>
          </ul>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-poe-gold mb-4">Izaro Fight Tips</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-poe-gold mr-2">•</span>
              Learn Izaro&apos;s attack patterns and timing
            </li>
            <li className="flex items-start">
              <span className="text-poe-gold mr-2">•</span>
              Disable his mechanics in phases 1 & 2 for easier final fight
            </li>
            <li className="flex items-start">
              <span className="text-poe-gold mr-2">•</span>
              Keep moving - most of his attacks are telegraphed
            </li>
            <li className="flex items-start">
              <span className="text-poe-gold mr-2">•</span>
              Bring a portal scroll to refill flasks between phases
            </li>
            <li className="flex items-start">
              <span className="text-poe-gold mr-2">•</span>
              Physical damage reduction is more important than resists
            </li>
          </ul>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex justify-between items-center border-t border-gray-800 pt-6">
        <Link href="/" className="text-gray-400 hover:text-poe-gold transition-colors">
          ← Back to Home
        </Link>
        <div className="flex gap-4">
          <Link href="/cheat-sheets" className="text-gray-400 hover:text-poe-gold transition-colors">
            Cheat Sheets →
          </Link>
        </div>
      </div>
    </main>
  )
}

function LabCard({ title, description, details, url, difficulty, color }: {
  title: string
  description: string
  details: string[]
  url: string
  difficulty: string
  color: string
}) {
  const colorClasses = {
    green: "from-green-900/30 to-gray-800 border-green-600/30 text-green-400",
    yellow: "from-yellow-900/30 to-gray-800 border-yellow-600/30 text-yellow-400", 
    orange: "from-orange-900/30 to-gray-800 border-orange-600/30 text-orange-400",
    red: "from-red-900/30 to-gray-800 border-red-600/30 text-red-400"
  }

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} border rounded-lg p-6 transition-all hover:scale-105`}>
      <div className="mb-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Requirements & Tips:</h4>
        <ul className="space-y-1">
          {details.map((detail, index) => (
            <li key={index} className="text-sm text-gray-300 flex items-start">
              <span className="mr-2">•</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-poe-gold text-poe-dark rounded font-medium hover:bg-yellow-400 transition-colors"
      >
        View Today&apos;s {difficulty} Lab
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  )
}