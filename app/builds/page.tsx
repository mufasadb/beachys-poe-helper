'use client'
import { useState } from 'react'

export default function Builds() {
  const [activeTab, setActiveTab] = useState('meta')

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-poe-gold mb-4">POE Build Guides</h1>
        <p className="text-xl text-gray-300">
          Curated build guides from top content creators for Path of Exile 3.26 Secrets of the Atlas
        </p>
      </header>

      {/* Tab Navigation */}
      <div className="flex gap-4 mb-8 border-b border-gray-800">
        <button
          onClick={() => setActiveTab('meta')}
          className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
            activeTab === 'meta'
              ? 'text-poe-gold border-poe-gold'
              : 'text-gray-400 border-transparent hover:text-gray-200'
          }`}
        >
          Current Meta Builds
        </button>
        <button
          onClick={() => setActiveTab('beginner')}
          className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
            activeTab === 'beginner'
              ? 'text-poe-gold border-poe-gold'
              : 'text-gray-400 border-transparent hover:text-gray-200'
          }`}
        >
          Beginner Friendly
        </button>
      </div>

      {/* Content */}
      {activeTab === 'meta' && <MetaBuilds />}
      {activeTab === 'beginner' && <BeginnerBuilds />}
    </main>
  )
}

function MetaBuilds() {
  const metaBuilds = [
    {
      id: 'lightning-strike-warden',
      name: 'Lightning Strike Warden',
      creator: 'Multiple Creators',
      difficulty: 'Medium',
      cost: 'Medium',
      playstyle: 'Fast Mapper',
      description: 'The new Warden ascendancy breathes fresh life into Lightning Strike, offering superior elemental scaling and defensive options compared to the old Raider variant.',
      pros: [
        'Exceptional clear speed',
        'Strong defensive layers',
        'Scales well with investment',
        'Screen-wide coverage'
      ],
      cons: [
        'Requires good positioning',
        'Can be squishy early',
        'Needs accuracy solutions'
      ],
      links: [
        { name: 'Build Guide', url: 'https://www.pathofexile.com/forum/view-thread/lightning-strike-warden' },
        { name: 'PoB', url: '#' },
        { name: 'Video Guide', url: '#' }
      ],
      tags: ['Melee', 'Lightning', 'Speed Clear', 'Mapper']
    },
    {
      id: 'ball-lightning-archmage',
      name: 'Ball Lightning Archmage Hierophant',
      creator: 'TbXie',
      difficulty: 'Medium',
      cost: 'Low to High',
      playstyle: 'Mana Stacker',
      description: 'Despite Archmage adjustments, Ball Lightning of Orbiting remains a powerhouse. This mana-stacking build leverages Hierophant\'s incredible mana scaling for both offense and defense.',
      pros: [
        'Excellent single target',
        'Tanky with high mana/ES',
        'Good league starter',
        'Scales infinitely with investment'
      ],
      cons: [
        'Can feel slow early',
        'Mana management required',
        'Not the fastest mapper'
      ],
      links: [
        { name: 'TbXie\'s Guide', url: 'https://www.poe-vault.com/guides/ball-lightning-hierophant-build-guide' },
        { name: 'Maxroll Guide', url: 'https://maxroll.gg/poe/build-guides/archmage-ball-lightning-hierophant' },
        { name: 'PoB', url: '#' }
      ],
      tags: ['Spell', 'Lightning', 'Mana Stacker', 'Bosser']
    },
    {
      id: 'spectral-shield-throw',
      name: 'Spectral Shield Throw',
      creator: 'Zizaran',
      difficulty: 'Easy',
      cost: 'Low',
      playstyle: 'Shield Thrower',
      description: 'Zizaran\'s personal league starter combines solid defenses with respectable clear speed. The unique playstyle of throwing your shield makes this build both fun and effective.',
      pros: [
        'Cheap to start',
        'Good defenses',
        'Unique playstyle',
        'SSF viable'
      ],
      cons: [
        'Limited scaling potential',
        'Shield dependent',
        'Average boss damage'
      ],
      links: [
        { name: 'Zizaran\'s Guide', url: '#' },
        { name: 'Video Guide', url: '#' },
        { name: 'PoB', url: '#' }
      ],
      tags: ['Attack', 'Physical', 'League Starter', 'SSF']
    },
    {
      id: 'lacerate-gladiator',
      name: 'Lacerate Gladiator',
      creator: 'Zizaran',
      difficulty: 'Easy',
      cost: 'Low',
      playstyle: 'Bleed Melee',
      description: 'Taking advantage of the continued melee buffs, Lacerate Gladiator offers excellent league start potential with its bleed-focused gameplay and built-in defenses.',
      pros: [
        'Very tanky (max block)',
        'Smooth progression',
        'Great league starter',
        'Challenger charges for speed'
      ],
      cons: [
        'Melee range limitations',
        'Bleed damage takes time',
        'Not a zoom-zoom build'
      ],
      links: [
        { name: 'Build Guide', url: 'https://maxroll.gg/poe/build-guides/lacerate-gladiator-league-starter' },
        { name: 'Zizaran Video', url: '#' },
        { name: 'PoB', url: '#' }
      ],
      tags: ['Melee', 'Bleed', 'Physical', 'Tanky']
    },
    {
      id: 'explosive-arrow-ballista',
      name: 'Explosive Arrow Ballista Champion',
      creator: 'Multiple Creators',
      difficulty: 'Easy',
      cost: 'Low',
      playstyle: 'Totem',
      description: 'A time-tested totem build that remains one of the safest and most reliable league starters. Let your ballistas do the work while you focus on dodging.',
      pros: [
        'Extremely safe playstyle',
        'Excellent boss killer',
        'League start friendly',
        'Ignite proliferation for clear'
      ],
      cons: [
        'Totem playstyle not for everyone',
        'Can feel passive',
        'Slower early campaign'
      ],
      links: [
        { name: 'TbXie\'s Guide', url: 'https://www.poe-vault.com/guides/explosive-arrow-ballista-champion-build-guide' },
        { name: 'Maxroll Guide', url: 'https://maxroll.gg/poe/build-guides/explosive-arrow-ballista-champion-league-starter' },
        { name: 'PoB', url: '#' }
      ],
      tags: ['Totem', 'Fire', 'Ignite', 'Safe']
    }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-poe-gold mb-3">About Meta Builds</h2>
        <p className="text-gray-300">
          These builds represent the current strongest options in Path of Exile 3.26. They've been tested 
          by top players and content creators, offering the best balance of power, speed, and reliability 
          for the current league mechanics.
        </p>
      </div>

      <div className="grid gap-6">
        {metaBuilds.map(build => (
          <BuildCard key={build.id} build={build} />
        ))}
      </div>
    </div>
  )
}

function BeginnerBuilds() {
  const beginnerBuilds = [
    {
      id: 'rf-chieftain',
      name: 'Righteous Fire Chieftain',
      creator: 'Pohx',
      difficulty: 'Very Easy',
      cost: 'Low',
      playstyle: 'Walking Simulator',
      description: 'The gold standard for beginner builds. Activate Righteous Fire and walk through content while enemies burn around you. Pohx\'s comprehensive guides make this perfect for new players.',
      pros: [
        'One-button gameplay',
        'Extremely tanky',
        'Detailed guides available',
        'Works on minimal gear'
      ],
      cons: [
        'Lower damage ceiling',
        'Can be boring for some',
        'Struggles with some bosses'
      ],
      links: [
        { name: 'Official Wiki', url: 'https://pohx.net' },
        { name: 'Video Guide', url: '#' },
        { name: 'PoB', url: '#' }
      ],
      tags: ['Fire', 'DoT', 'Tanky', 'Beginner']
    },
    {
      id: 'minion-army',
      name: 'Kay\'s Summoner Builds',
      creator: 'Kay Gaming',
      difficulty: 'Easy',
      cost: 'Low',
      playstyle: 'Minion Master',
      description: 'Choose from various minion types including SRS, Skeletons, or Zombies. Kay\'s guides are incredibly detailed with options for every budget and playstyle preference.',
      pros: [
        'Minions tank for you',
        'Multiple build variants',
        'Scales well',
        'Great documentation'
      ],
      cons: [
        'Minion AI can be frustrating',
        'Screen clutter',
        'Passive early gameplay'
      ],
      links: [
        { name: 'Build Planner', url: 'https://kaygaming.netlify.app/minionarmy' },
        { name: 'Forum Guide', url: '#' },
        { name: 'Video Series', url: '#' }
      ],
      tags: ['Summoner', 'Minions', 'Safe', 'Versatile']
    },
    {
      id: 'toxic-rain-pathfinder',
      name: 'Toxic Rain Pathfinder',
      creator: 'TbXie',
      difficulty: 'Easy',
      cost: 'Low to Medium',
      playstyle: 'DoT Bow',
      description: 'A proven league starter that scales from act 1 to endgame. The chaos damage over time from Toxic Rain pods melts enemies while you stay mobile and safe.',
      pros: [
        'Excellent league starter',
        'Good clear and bossing',
        'Flask sustain',
        'Chaos damage bypasses resistance'
      ],
      cons: [
        'DoT damage takes time',
        'Flask piano required',
        'Squishy without investment'
      ],
      links: [
        { name: 'TbXie\'s Guide', url: 'https://www.poe-vault.com/guides/toxic-rain-dot-trickster-all-content-build-guide' },
        { name: 'Leveling Guide', url: '#' },
        { name: 'PoB', url: '#' }
      ],
      tags: ['Bow', 'Chaos', 'DoT', 'League Starter']
    },
    {
      id: 'cold-dot-occultist',
      name: 'Cold DoT Vortex Occultist',
      creator: 'GhazzyTV',
      difficulty: 'Easy',
      cost: 'Low',
      playstyle: 'DoT Caster',
      description: 'Drop Vortex on enemies and watch them freeze and die. This build laughs at dangerous content with its combination of freezes, ES recovery, and damage over time.',
      pros: [
        'Extremely safe',
        'Great defenses',
        'Freezes enemies',
        'Low APM required'
      ],
      cons: [
        'Not the fastest mapper',
        'DoT damage style',
        'Can feel slow'
      ],
      links: [
        { name: 'Build Guide', url: '#' },
        { name: 'GhazzyTV Video', url: '#' },
        { name: 'PoB', url: '#' }
      ],
      tags: ['Spell', 'Cold', 'DoT', 'Defensive']
    },
    {
      id: 'corrupting-fever-gladiator',
      name: 'Corrupting Fever Gladiator',
      creator: 'Multiple Creators',
      difficulty: 'Medium',
      cost: 'Low to Medium',
      playstyle: 'Physical DoT',
      description: 'Apply Corrupting Fever and use Kinetic Blast to spread physical damage over time. Benefits from both spell and attack scaling, making it versatile and powerful.',
      pros: [
        'Good clear speed',
        'Gladiator defenses',
        'Unique playstyle',
        'Strong with investment'
      ],
      cons: [
        'Requires some game knowledge',
        'Life cost management',
        'Not purely beginner friendly'
      ],
      links: [
        { name: 'Build Guide', url: '#' },
        { name: 'Video Guide', url: '#' },
        { name: 'PoB', url: '#' }
      ],
      tags: ['Physical', 'DoT', 'Hybrid', 'Gladiator']
    },
    {
      id: 'caustic-arrow-pathfinder',
      name: 'Caustic Arrow Pathfinder',
      creator: 'Multiple Creators',
      difficulty: 'Easy',
      cost: 'Very Low',
      playstyle: 'DoT Bow',
      description: 'An excellent league starter that transitions perfectly into Toxic Rain. The caustic ground from your arrows provides safe, consistent damage while leveling.',
      pros: [
        'Smooth leveling',
        'Very cheap to start',
        'Good progression path',
        'Safe playstyle'
      ],
      cons: [
        'Lower damage ceiling',
        'Usually transitions to TR',
        'Not the fastest'
      ],
      links: [
        { name: '3.26 Guide', url: 'https://www.rpgstash.com/blog/caustic-arrow-of-poison-pathfinder-path-of-exile' },
        { name: 'Leveling Tips', url: '#' },
        { name: 'PoB', url: '#' }
      ],
      tags: ['Bow', 'Chaos', 'DoT', 'Budget']
    }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-poe-gold mb-3">About Beginner Builds</h2>
        <p className="text-gray-300">
          These builds have stood the test of time, surviving multiple patches and league mechanics. 
          They feature comprehensive guides, low gear requirements, and forgiving gameplay that's 
          perfect for learning Path of Exile.
        </p>
      </div>

      <div className="grid gap-6">
        {beginnerBuilds.map(build => (
          <BuildCard key={build.id} build={build} />
        ))}
      </div>
    </div>
  )
}

function BuildCard({ build }: { build: any }) {
  const [expanded, setExpanded] = useState(false)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Very Easy': return 'text-green-400'
      case 'Easy': return 'text-green-500'
      case 'Medium': return 'text-yellow-500'
      case 'Hard': return 'text-red-500'
      default: return 'text-gray-400'
    }
  }

  const getCostColor = (cost: string) => {
    if (cost.includes('Low')) return 'text-green-400'
    if (cost.includes('Medium')) return 'text-yellow-500'
    if (cost.includes('High')) return 'text-red-500'
    return 'text-gray-400'
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-poe-gold mb-2">{build.name}</h3>
            <div className="flex gap-4 text-sm">
              <span className="text-gray-400">by <span className="text-white">{build.creator}</span></span>
              <span className={getDifficultyColor(build.difficulty)}>● {build.difficulty}</span>
              <span className={getCostColor(build.cost)}>● {build.cost}</span>
              <span className="text-purple-400">● {build.playstyle}</span>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {expanded ? '▼' : '▶'}
          </button>
        </div>

        <p className="text-gray-300 mb-4">{build.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {build.tags.map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {build.links.map((link: any) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-poe-gold text-poe-dark rounded font-medium hover:bg-yellow-400 transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {expanded && (
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Pros</h4>
                <ul className="space-y-1">
                  {build.pros.map((pro: string, index: number) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <span className="text-green-400 mr-2">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Cons</h4>
                <ul className="space-y-1">
                  {build.cons.map((con: string, index: number) => (
                    <li key={index} className="text-sm text-gray-300 flex items-start">
                      <span className="text-red-400 mr-2">-</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}