'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Builds() {
  const [activeTab, setActiveTab] = useState('meta')

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="mb-8 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <img src="/images/poe-helper-logo.png" alt="Beachy&apos;s POE Helper" className="w-12 h-12" />
        </Link>
        <div className="text-center flex-1">
          <h1 className="text-4xl font-bold text-poe-gold mb-4">POE Build Guides</h1>
          <p className="text-xl text-gray-300">
            Curated S and A+ tier build guides from top content creators for Path of Exile 3.26 Secrets of the Atlas
          </p>
        </div>
        <div className="w-12"></div>
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
          S & A+ Tier Builds
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
      id: 'volcanic-fissure-berserker',
      name: 'Volcanic Fissure of Snaking Berserker',
      creator: 'Crouching Tuna',
      difficulty: 'Easy',
      cost: 'Low to Medium',
      playstyle: 'Slam Berserker',
      description: 'S+ tier devastating slam build utilizing Volcanic Fissure of Snaking. Creates multiple fissures that deal massive fire damage in overlapping areas. Berserker provides incredible damage scaling and defensive layers.',
      pros: [
        'S+ tier league starter',
        'Massive area damage overlap',
        'Strong Berserker defenses', 
        'Excellent boss damage',
        'Newbie friendly'
      ],
      cons: [
        'Requires positioning for overlap',
        'Melee range requirements',
        'Slower than projectile builds'
      ],
      links: [
        { name: 'Video Guide', url: 'https://www.youtube.com/live/rH7g7YM7eBQ?si=57HZGYxQoD_jKgoq&t=2888' },
        { name: 'PoB', url: 'https://pobb.in/8au7XbL9E7XY' },
        { name: 'Build Guide', url: 'https://pobarchives.com/build/CVXTV6KD' }
      ],
      tags: ['S+', 'Melee', 'Fire', 'Slam', 'League Starter']
    },
    {
      id: 'archmage-vortex',
      name: 'Archmage Vortex of Projection',
      creator: 'Waggle',
      difficulty: 'Medium',
      cost: 'Low to High',
      playstyle: 'Archmage Caster',
      description: 'S+ tier HC-focused build that excels in SC as well. Vortex of Projection creates multiple vortexes that stack damage. Archmage scaling provides incredible damage and mana-based defenses.',
      pros: [
        'S+ tier endgame potential',
        'Excellent in hardcore',
        'High damage ceiling',
        'Tanky with mana stacking',
        'Great scaling'
      ],
      cons: [
        'Complex mana management',
        'Requires positioning',
        'Not the fastest mapper early'
      ],
      links: [
        { name: 'PoB', url: 'https://pobb.in/2A_4sj_fLSyX' },
        { name: 'Build Guide', url: 'https://pobarchives.com/build/E3TTj6UM' }
      ],
      tags: ['S+', 'Spell', 'Cold', 'Archmage', 'HC Viable']
    },
    {
      id: 'poison-concoction-pathfinder',
      name: 'Poison Concoction of Bouncing Pathfinder',
      creator: 'Ruetoo',
      difficulty: 'Easy',
      cost: 'Low',
      playstyle: 'Poison Flask Build',
      description: 'S tier league starter that uses flask charges as ammo. Poison Concoction of Bouncing creates chains of poison projectiles. Pathfinder provides excellent flask sustain and poison scaling.',
      pros: [
        'S tier league starter',
        'No weapon required',
        'Excellent flask sustain',
        'Good clear and single target',
        'Very newbie friendly'
      ],
      cons: [
        'Flask management required',
        'Medium scaling ceiling',
        'Poison damage ramp-up'
      ],
      links: [
        { name: 'PoB', url: 'https://pobb.in/p724XQjNweWx' },
        { name: 'Video Guide', url: 'https://youtu.be/JWjNC0KWRq8' },
        { name: 'Written Guide', url: 'https://www.pathofexile.com/forum/view-thread/3286100' }
      ],
      tags: ['S', 'Poison', 'Flask', 'League Starter', 'No Weapon']
    },
    {
      id: 'explosive-concoction-slayer',
      name: 'Explosive Concoction Slayer',
      creator: 'Ruetoo',
      difficulty: 'Easy',
      cost: 'Low',
      playstyle: 'Flask Slayer',
      description: 'S tier league starter using flask charges for explosive area damage. Slayer provides excellent leech and defensive layers. Great for players who enjoy explosive clear.',
      pros: [
        'S tier league starter',
        'No weapon required',
        'Excellent area clear',
        'Strong Slayer defenses',
        'Simple mechanics'
      ],
      cons: [
        'Lower scaling potential',
        'Flask dependency',
        'Limited single target'
      ],
      links: [
        { name: 'PoB', url: 'https://pobb.in/-KNy7XQH5_4O' },
        { name: 'Build Guide', url: 'https://pobarchives.com/build/LqKxrjUg' }
      ],
      tags: ['S', 'Fire', 'Flask', 'League Starter', 'AoE']
    },
    {
      id: 'lightning-strike-slayer',
      name: 'Lightning Strike Slayer',
      creator: 'Fubgun',
      difficulty: 'Medium',
      cost: 'Medium to High',
      playstyle: 'Projectile Attack',
      description: 'A+ tier melee-projectile hybrid build. Lightning Strike creates projectiles on hit, providing excellent clear and single target. Slayer offers great sustain and damage scaling.',
      pros: [
        'A+ tier scaling potential',
        'Excellent clear speed',
        'Good single target',
        'Melee and ranged benefits',
        'Strong defensive layers'
      ],
      cons: [
        'Gear dependent for optimization',
        'Requires positioning knowledge',
        'Medium complexity'
      ],
      links: [
        { name: 'PoB', url: 'https://pobb.in/6f-404kwxW2u' },
        { name: 'Written Guide', url: 'https://odealo.com/articles/lightning-strike-slayer-build' },
        { name: 'Creator Builds', url: 'https://pobarchives.com/builds/VD6nELxN' }
      ],
      tags: ['A+', 'Attack', 'Lightning', 'Projectile', 'Melee']
    },
    {
      id: 'boneshatter-berserker',
      name: 'Boneshatter Berserker',
      creator: 'Multiple Creators',
      difficulty: 'Medium',
      cost: 'Low to Medium',
      playstyle: 'Trauma Stacker',
      description: 'A+ tier melee build that gains damage through Trauma stacks. Each hit increases damage but also self-damage. Berserker provides incredible scaling and defensive tools.',
      pros: [
        'A+ tier damage scaling',
        'Infinite trauma stacking',
        'Strong Berserker defenses',
        'Great league starter progression'
      ],
      cons: [
        'Self-damage mechanics',
        'Trauma stack management',
        'Melee positioning required'
      ],
      links: [
        { name: 'PoB', url: 'https://pobb.in/TB7fhaHktNh6' },
        { name: 'Build Guide', url: 'https://pobarchives.com/build/ppVNV7dM' }
      ],
      tags: ['A+', 'Melee', 'Physical', 'Trauma', 'Berserker']
    },
    {
      id: 'zoomancer-necro',
      name: 'Zoomancer Necromancer',
      creator: 'Helm Breaker',
      difficulty: 'Easy',
      cost: 'Very Low',
      playstyle: 'Fast Minions',
      description: 'A+ tier summoner build focused on speed and clear. Uses fast minions to quickly clear content. Necromancer provides excellent minion scaling and defensive auras.',
      pros: [
        'A+ tier clear speed',
        'Very budget friendly',
        'Minions tank damage',
        'Great for new players',
        'Excellent progression'
      ],
      cons: [
        'Minion AI limitations',
        'Screen clutter',
        'Medium single target'
      ],
      links: [
        { name: 'Build Guide', url: 'https://www.poe-vault.com/guides/zoomancer-necromancer-build-guide' },
        { name: 'GhazzyTV Hub', url: 'https://www.poe-vault.com/guides/ghazzy-guide-hub' }
      ],
      tags: ['A+', 'Summoner', 'Minions', 'Fast', 'Budget']
    },
    {
      id: 'storm-burst-totems',
      name: 'Storm Burst Totems',
      creator: 'Tatiantel2',
      difficulty: 'Easy',
      cost: 'Very Low',
      playstyle: 'Totem Caster',
      description: 'A+ tier totem build that places Storm Burst totems to channel lightning damage. Extremely budget-friendly, can handle T16 maps with just 30 chaos investment.',
      pros: [
        'A+ tier budget efficiency',
        'Totems tank for you',
        'T16 viable with 30 chaos',
        'Very safe playstyle',
        'Great league starter'
      ],
      cons: [
        'Totem AI dependency',
        'Requires totem placement',
        'Less direct control'
      ],
      links: [
        { name: 'Creator Twitch', url: 'https://www.twitch.tv/tatiantel2' },
        { name: '3.25 Build', url: 'https://www.pobarchives.com/build/FVRMHiXA' }
      ],
      tags: ['A+', 'Totem', 'Lightning', 'Budget', 'Safe']
    }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-poe-gold mb-3">About S & A+ Tier Builds</h2>
        <p className="text-gray-300">
          These builds represent the absolute strongest options in Path of Exile 3.26. Ranked S+ to A+ tier 
          by top players and content creators, they offer the best balance of power, speed, and reliability 
          for league start and the Secrets of the Atlas endgame content.
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
      description: 'The gold standard for beginner builds. Activate Righteous Fire and walk through content while enemies burn around you. Pohx&apos;s comprehensive guides make this perfect for new players.',
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
        { name: 'Official Website', url: 'https://pohx.net/' },
        { name: 'Written Guide', url: 'https://www.poe-vault.com/guides/righteous-fire-chieftain-build-guide' }
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
      description: 'Choose from various minion types including SRS, Skeletons, or Zombies. Kay&apos;s guides are incredibly detailed with options for every budget and playstyle preference.',
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
        { name: 'Forum Guide', url: 'https://www.pathofexile.com/forum/view-thread/3179145' }
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
        { name: 'PoB', url: 'https://pobb.in/yF_kxTOzhvQ0' },
        { name: 'Written Guide', url: 'https://maxroll.gg/poe/build-guides/toxic-rain-ballista-pathfinder' }
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
        { name: 'GhazzyTV Hub', url: 'https://www.poe-vault.com/guides/ghazzy-guide-hub' },
        { name: 'ShakCentral Guide', url: 'https://www.pathofexile.com/forum/view-thread/2661120' }
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
        { name: 'Written Guide', url: 'https://maxroll.gg/poe/build-guides/corrupting-fever-gladiator-league-starter-guide' },
        { name: 'Detailed Guide', url: 'https://odealo.com/articles/corrupting-fever-tornado-shot-gladiator-build' }
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
        { name: '3.26 Guide', url: 'https://www.rpgstash.com/blog/326-caustic-arrow-of-poison-pathfinder-build-poe-secrets-of-the-atlas' },
        { name: 'Video Demo', url: 'https://www.youtube.com/watch?v=UY4dJv2EBUU' }
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
          They feature comprehensive guides, low gear requirements, and forgiving gameplay that&apos;s 
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

  const getSkillImage = (name: string) => {
    if (name.includes('Lightning Strike')) return '/images/items/Anger_inventory_icon.png'
    if (name.includes('Ball Lightning')) return '/images/items/Anger_inventory_icon.png'
    if (name.includes('Volcanic Fissure')) return '/images/items/Anger_inventory_icon.png'
    if (name.includes('Boneshatter')) return '/images/items/Blackheart_inventory_icon.png'
    if (name.includes('Power Siphon')) return '/images/items/Ancient_Orb_inventory_icon.png'
    if (name.includes('Righteous Fire')) return '/images/items/Anger_inventory_icon.png'
    if (name.includes('Minion') || name.includes('Summoner')) return '/images/items/Absolution_inventory_icon.png'
    if (name.includes('Toxic Rain')) return '/images/items/Whispering_Essence_of_Contempt_inventory_icon.png'
    if (name.includes('Wintertide Brand')) return '/images/items/Whispering_Essence_of_Woe_inventory_icon.png'
    if (name.includes('Corrupting Fever')) return '/images/items/Blackheart_inventory_icon.png'
    if (name.includes('Caustic Arrow')) return '/images/items/Whispering_Essence_of_Greed_inventory_icon.png'
    return '/images/items/Bladestorm_inventory_icon.png'
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start">
            <img 
              src={getSkillImage(build.name)} 
              alt={build.name} 
              className="w-12 h-12 mr-4 mt-1 object-contain"
            />
            <div>
              <h3 className="text-2xl font-bold text-poe-gold mb-2">{build.name}</h3>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-400">by <span className="text-white">{build.creator}</span></span>
                <span className={getDifficultyColor(build.difficulty)}>● {build.difficulty}</span>
                <span className={getCostColor(build.cost)}>● {build.cost}</span>
                <span className="text-purple-400">● {build.playstyle}</span>
              </div>
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