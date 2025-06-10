export default function RFChieftainGuide() {
  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-2 text-gray-400 mb-4">
          <a href="/builds" className="hover:text-poe-gold">Builds</a>
          <span>/</span>
          <span>Righteous Fire Chieftain</span>
        </div>
        <h1 className="text-4xl font-bold text-poe-gold mb-4">Righteous Fire Chieftain</h1>
        <div className="flex gap-4 text-lg">
          <span className="text-gray-400">by <span className="text-white font-semibold">Pohx</span></span>
          <span className="text-green-400">● Very Easy</span>
          <span className="text-green-400">● Budget Friendly</span>
        </div>
      </header>

      {/* Quick Links */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-poe-gold mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="https://pohx.net" target="_blank" rel="noopener noreferrer" 
             className="flex items-center justify-center px-4 py-3 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
            <span className="text-poe-gold mr-2">📚</span>
            Official Wiki
          </a>
          <a href="#" className="flex items-center justify-center px-4 py-3 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
            <span className="text-poe-gold mr-2">📺</span>
            Video Guide
          </a>
          <a href="#" className="flex items-center justify-center px-4 py-3 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
            <span className="text-poe-gold mr-2">📊</span>
            Path of Building
          </a>
          <a href="#" className="flex items-center justify-center px-4 py-3 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
            <span className="text-poe-gold mr-2">💬</span>
            Discord
          </a>
        </div>
      </div>

      {/* Build Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-poe-gold">Build Overview</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            The Righteous Fire Chieftain is the gold standard for beginner builds in Path of Exile. 
            Created and maintained by Pohx, who has been perfecting this build since the game's release, 
            it offers the simplest possible gameplay: activate Righteous Fire and walk through maps while 
            enemies burn around you.
          </p>
          <p className="text-gray-300">
            This build excels at league starting with minimal investment and can scale all the way to 
            Uber bosses with proper gear. The Chieftain variant focuses on life regeneration and fire 
            resistance, making it incredibly tanky and forgiving for new players.
          </p>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4">Strengths</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-white">One-Button Gameplay:</strong>
                  <span className="text-gray-300"> Literally just turn on RF and walk</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-white">Extremely Tanky:</strong>
                  <span className="text-gray-300"> 85%+ max fire res, high life regen, 6k+ life</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-white">League Start Viable:</strong>
                  <span className="text-gray-300"> Works with basic gear from vendors</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-white">Comprehensive Guides:</strong>
                  <span className="text-gray-300"> Pohx has guides for every stage of progression</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-white">SSF Friendly:</strong>
                  <span className="text-gray-300"> No required uniques or specific items</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-400 mb-4">Weaknesses</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <div>
                  <strong className="text-white">Limited Damage Ceiling:</strong>
                  <span className="text-gray-300"> Struggles with uber bosses without investment</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <div>
                  <strong className="text-white">Can Be Boring:</strong>
                  <span className="text-gray-300"> Very passive playstyle not for everyone</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <div>
                  <strong className="text-white">Map Mod Restrictions:</strong>
                  <span className="text-gray-300"> Cannot run no regen or reduced recovery maps</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <div>
                  <strong className="text-white">Clear Speed:</strong>
                  <span className="text-gray-300"> Not a zoom-zoom build</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leveling Guide */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-poe-gold">Leveling Guide</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Act 1-3: Holy Flame Totem</h3>
              <p className="text-gray-300 mb-2">
                Start with Holy Flame Totem + Added Fire Damage. This carries you smoothly through early acts.
                Pick up Ancestral Bond keystone when available for dual totems.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <code className="text-sm text-green-400">
                  Links: Holy Flame Totem - Added Fire Damage - Combustion Support
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Act 4-10: Armageddon Brand</h3>
              <p className="text-gray-300 mb-2">
                Transition to Armageddon Brand for better clear speed. Keep using this until you can sustain RF.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <code className="text-sm text-green-400">
                  Links: Armageddon Brand - Combustion - Elemental Focus - Controlled Destruction
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Level 65+: Righteous Fire</h3>
              <p className="text-gray-300 mb-2">
                Once you have enough life regeneration and fire resistance, switch to Righteous Fire.
                You'll need approximately 75% fire resistance and 400+ life regen to sustain.
              </p>
              <div className="bg-gray-800 p-3 rounded">
                <code className="text-sm text-green-400">
                  Links: Righteous Fire - Elemental Focus - Burning Damage - Efficacy
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Items */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-poe-gold">Key Items & Progression</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">League Start Gear</h3>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-poe-gold">Weapon:</strong> Any sceptre with +fire gems</li>
              <li><strong className="text-poe-gold">Shield:</strong> Life + resistances</li>
              <li><strong className="text-poe-gold">Helmet:</strong> Life + resistances</li>
              <li><strong className="text-poe-gold">Body:</strong> Tabula Rasa or 4-link with life</li>
              <li><strong className="text-poe-gold">Gloves:</strong> Life + resistances</li>
              <li><strong className="text-poe-gold">Boots:</strong> Movement speed + life</li>
              <li><strong className="text-poe-gold">Rings:</strong> Life + resistances</li>
              <li><strong className="text-poe-gold">Amulet:</strong> Life + resistances</li>
              <li><strong className="text-poe-gold">Belt:</strong> Life + resistances</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Upgrade Priority</h3>
            <ol className="space-y-3 text-gray-300">
              <li><strong className="text-poe-gold">1.</strong> Rise of the Phoenix shield (extra max fire res)</li>
              <li><strong className="text-poe-gold">2.</strong> 6-link body armour with life/res</li>
              <li><strong className="text-poe-gold">3.</strong> Legacy of Fury boots (scorch + clear)</li>
              <li><strong className="text-poe-gold">4.</strong> Searing Touch staff (optional)</li>
              <li><strong className="text-poe-gold">5.</strong> Cluster jewels for damage</li>
              <li><strong className="text-poe-gold">6.</strong> Aegis Aurora (defensive option)</li>
              <li><strong className="text-poe-gold">7.</strong> Melding of the Flesh (90% all res)</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Passive Tree Priorities */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-poe-gold">Passive Tree Priority</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="text-poe-gold font-bold mr-3">1.</span>
              <div>
                <strong className="text-white">Life & Regeneration:</strong>
                <span className="text-gray-300"> Priority one is getting enough life and regen to sustain RF</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-poe-gold font-bold mr-3">2.</span>
              <div>
                <strong className="text-white">Maximum Fire Resistance:</strong>
                <span className="text-gray-300"> Each 1% max fire res is huge for sustain and defense</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-poe-gold font-bold mr-3">3.</span>
              <div>
                <strong className="text-white">Fire Damage Over Time:</strong>
                <span className="text-gray-300"> Scale your damage through DoT multiplier and burning damage</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-poe-gold font-bold mr-3">4.</span>
              <div>
                <strong className="text-white">Area of Effect:</strong>
                <span className="text-gray-300"> Improves clear speed significantly</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-poe-gold font-bold mr-3">5.</span>
              <div>
                <strong className="text-white">Jewel Sockets:</strong>
                <span className="text-gray-300"> Life + damage jewels are very efficient</span>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Tips & Tricks */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-poe-gold">Tips & Tricks</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <ul className="space-y-3 text-gray-300">
            <li>• Use Purity of Fire for extra max fire resistance early on</li>
            <li>• Vitality aura helps with sustaining RF while leveling</li>
            <li>• Fire Trap provides extra single target damage for bosses</li>
            <li>• Enduring Cry gives burst regen and endurance charges</li>
            <li>• Consider using Shield Charge for movement and fortify</li>
            <li>• Flammability curse significantly boosts your damage</li>
            <li>• Ruby flasks are your panic button if RF is degening you</li>
            <li>• Pantheon: Soul of Arakaali + Soul of Abberath recommended</li>
          </ul>
        </div>
      </section>

      {/* Community Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-poe-gold">Community & Support</h2>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <p className="text-gray-300 mb-4">
            Pohx maintains an active community around Righteous Fire with multiple resources:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li>• <strong className="text-white">Official Wiki:</strong> Comprehensive guides at pohx.net</li>
            <li>• <strong className="text-white">Twitch Stream:</strong> Live gameplay and Q&A sessions</li>
            <li>• <strong className="text-white">Discord Server:</strong> Active community for questions and discussion</li>
            <li>• <strong className="text-white">YouTube Channel:</strong> Video guides for each league</li>
            <li>• <strong className="text-white">PoE Forum Thread:</strong> Written guides with community feedback</li>
          </ul>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <a href="/builds" className="text-gray-400 hover:text-poe-gold transition-colors">
          ← Back to Builds
        </a>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-poe-gold transition-colors">
            Next Build: Kay's Summoner →
          </a>
        </div>
      </div>
    </main>
  )
}