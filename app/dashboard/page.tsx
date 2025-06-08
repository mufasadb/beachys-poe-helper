export default function POEDashboard() {
  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-poe-gold mb-4">POE Dashboard</h1>
        <p className="text-xl text-gray-300">Essential external tools and resources for Path of Exile</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ToolCategory
          title="Information & Wiki"
          icon="📚"
          tools={[
            {
              name: "POE Wiki",
              description: "Official Path of Exile wiki with comprehensive game information",
              url: "https://www.poewiki.net/",
              tags: ["Reference", "Game Info"]
            },
            {
              name: "POEDB",
              description: "Database of game mechanics, items, and passive tree data",
              url: "https://poedb.tw/",
              tags: ["Database", "Mechanics"]
            },
            {
              name: "POE Lab",
              description: "Daily labyrinth layouts and guides",
              url: "https://www.poelab.com/",
              tags: ["Lab", "Daily"]
            }
          ]}
        />

        <ToolCategory
          title="Trading & Economy"
          icon="💰"
          tools={[
            {
              name: "Official Trade Site",
              description: "GGG's official trade website",
              url: "https://www.pathofexile.com/trade",
              tags: ["Trading", "Official"]
            },
            {
              name: "POE Ninja",
              description: "Economy tracking, build analytics, and currency rates",
              url: "https://poe.ninja/",
              tags: ["Economy", "Builds", "Currency"]
            },
            {
              name: "Awakened POE Trade",
              description: "In-game overlay for price checking and advanced search",
              url: "https://github.com/SnosMe/awakened-poe-trade",
              tags: ["Overlay", "Price Check"]
            }
          ]}
        />

        <ToolCategory
          title="Build Planning"
          icon="⚔️"
          tools={[
            {
              name: "Path of Building",
              description: "Offline build planner with detailed calculations",
              url: "https://pathofbuilding.community/",
              tags: ["Build Planner", "Offline"]
            },
            {
              name: "POB.party",
              description: "Online Path of Building viewer and sharing platform",
              url: "https://pob.party/",
              tags: ["Build Sharing", "Online"]
            },
            {
              name: "Maxroll POE Guides",
              description: "Build guides and league starter recommendations",
              url: "https://maxroll.gg/poe",
              tags: ["Guides", "League Start"]
            }
          ]}
        />

        <ToolCategory
          title="Crafting & Planning"
          icon="🔨"
          tools={[
            {
              name: "Craft of Exile",
              description: "Crafting simulator and probability calculator",
              url: "https://www.craftofexile.com/",
              tags: ["Crafting", "Simulator"]
            },
            {
              name: "Vorici Calculator",
              description: "Socket coloring cost calculator",
              url: "https://siveran.github.io/calc.html",
              tags: ["Sockets", "Calculator"]
            },
            {
              name: "POE Regex",
              description: "Generate search patterns for stash tab highlighting",
              url: "https://poe.re/",
              tags: ["Regex", "Stash Search"]
            }
          ]}
        />

        <ToolCategory
          title="Filters & QoL"
          icon="🔍"
          tools={[
            {
              name: "FilterBlade",
              description: "Neversink's loot filter customization tool",
              url: "https://www.filterblade.xyz/",
              tags: ["Filters", "Customization"]
            },
            {
              name: "POE Overlay",
              description: "Community fork of POE overlay with trade integration",
              url: "https://github.com/PoE-Overlay-Community/PoE-Overlay-Community-Fork",
              tags: ["Overlay", "Community"]
            },
            {
              name: "Exile Diary",
              description: "Automatically track your mapping progress and income",
              url: "https://github.com/briansd9/exile-diary",
              tags: ["Tracking", "Income"]
            }
          ]}
        />

        <ToolCategory
          title="Leveling & Progression"
          icon="📈"
          tools={[
            {
              name: "POE-Leveling-Guide",
              description: "AutoHotkey overlay with zone progression tracking",
              url: "https://github.com/JusKillmeQik/PoE-Leveling-Guide",
              tags: ["Leveling", "Overlay"]
            },
            {
              name: "Grinding.Zone",
              description: "Comprehensive leveling guides and zone information",
              url: "https://grinding.zone/",
              tags: ["Leveling", "Guides"]
            },
            {
              name: "POE Atlas",
              description: "Interactive atlas navigation and progression tracking",
              url: "https://poeatlas.net/",
              tags: ["Atlas", "Interactive"]
            }
          ]}
        />
      </div>
    </main>
  )
}

function ToolCategory({ title, icon, tools }: {
  title: string
  icon: string
  tools: Array<{
    name: string
    description: string
    url: string
    tags: string[]
  }>
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h2 className="text-xl font-bold text-poe-gold">{title}</h2>
      </div>
      
      <div className="space-y-4">
        {tools.map((tool, index) => (
          <div key={index} className="border border-gray-700 rounded-lg p-4 hover:border-poe-gold transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-poe-gold text-poe-dark rounded text-sm font-medium hover:bg-yellow-400 transition-colors"
              >
                Visit
              </a>
            </div>
            <p className="text-gray-400 text-sm mb-3">{tool.description}</p>
            <div className="flex flex-wrap gap-2">
              {tool.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}