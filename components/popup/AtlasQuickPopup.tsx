export default function AtlasQuickPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Progression Priority</h3>
        <div className="text-[10px] space-y-1">
          <div>1. Complete all white map bonuses</div>
          <div>2. Complete yellow map bonuses (rare)</div>
          <div>3. Complete red map bonuses (corrupted)</div>
          <div>4. Maven witness (10 maps)</div>
        </div>
      </div>
      
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">League Start Mechanics</h3>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div>
            <div className="text-yellow-400">Easy Currency:</div>
            <div>• Essence</div>
            <div>• Strongbox</div>
            <div>• Expedition</div>
          </div>
          <div>
            <div className="text-yellow-400">Advanced:</div>
            <div>• Breach</div>
            <div>• Delirium</div>
            <div>• Blight</div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-poe-gold font-bold">Atlas Passive Strategy</h3>
        <div className="text-[10px] space-y-1">
          <div>• Focus on 2-3 mechanics max</div>
          <div>• Take generic nodes first</div>
          <div>• Specialize after maven completion</div>
          <div>• Respec costs 5 orbs of regret</div>
        </div>
      </div>
    </div>
  )
}