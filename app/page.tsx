export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="mb-12">
        <h1 className="text-5xl font-bold text-poe-gold mb-4">Beachy's POE Helper</h1>
        <p className="text-xl text-gray-300">Essential Path of Exile tools for league start and beyond</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          title="AutoHotkey Scripts"
          description="Download essential AHK scripts for POE automation"
          href="/scripts"
          icon="📜"
        />
        
        <FeatureCard
          title="Build Lists"
          description="Browse and manage character builds"
          href="/builds"
          icon="⚔️"
        />
        
        <FeatureCard
          title="Item Filters"
          description="Access popular loot filters"
          href="/filters"
          icon="🔍"
        />
        
        <FeatureCard
          title="Vendor Search Templates"
          description="Copy-paste regex patterns for vendor inventory searches"
          href="/search-templates"
          icon="🔍"
        />
        
        <FeatureCard
          title="POE Dashboard"
          description="Links to essential external tools"
          href="/dashboard"
          icon="🔗"
        />
        
        <FeatureCard
          title="Lab Layouts"
          description="Daily labyrinth layouts"
          href="/lab"
          icon="🗺️"
        />
        
        <FeatureCard
          title="Community Resources"
          description="Tips, guides, and helpful images"
          href="/resources"
          icon="💡"
        />
        
        <FeatureCard
          title="Vendor Recipes"
          description="Essential vendor recipes for currency and equipment"
          href="/vendor-recipes"
          icon="⚖️"
        />
      </div>
    </main>
  )
}

function FeatureCard({ title, description, href, icon }: {
  title: string
  description: string
  href: string
  icon: string
}) {
  return (
    <a
      href={href}
      className="block p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-poe-gold transition-colors"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-xl font-bold mb-2 text-poe-gold">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </a>
  )
}