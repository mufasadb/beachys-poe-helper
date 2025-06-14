import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          title="AutoHotkey Scripts"
          description="Download popup scripts for instant access to guides and tools"
          href="/ahk-download"
        />
        
        <FeatureCard
          title="Build Guides"
          description="Curated build guides from top content creators for 3.26"
          href="/builds"
        />
        
        <FeatureCard
          title="Item Filters"
          description="FilterBlade-compatible loot filters with sound packs"
          href="/filters"
        />
        
        <FeatureCard
          title="Vendor Search Templates"
          description="Copy-paste regex patterns for vendor inventory searches"
          href="/search-templates"
        />
        
        <FeatureCard
          title="POE Dashboard"
          description="Links to essential external tools"
          href="/dashboard"
        />
        
        <FeatureCard
          title="Lab Layouts"
          description="Daily labyrinth layouts"
          href="/lab"
        />
        
        <FeatureCard
          title="Cheat Sheets"
          description="Community-compiled quick reference guides"
          href="/cheat-sheets"
        />
        
        <FeatureCard
          title="Vendor Recipes"
          description="Essential vendor recipes for currency and equipment"
          href="/vendor-recipes"
        />
      </div>
    </main>
  )
}

function FeatureCard({ title, description, href }: {
  title: string
  description: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="block p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-poe-gold transition-colors"
    >
      <h2 className="text-xl font-bold mb-2 text-poe-gold">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </Link>
  )
}