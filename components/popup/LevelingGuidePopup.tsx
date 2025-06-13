export default function LevelingGuidePopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Key Zones & Levels</h3>
        <div className="grid grid-cols-2 gap-2 mt-1 text-[10px]">
          <div>A1: Coast (2), Mud (4), Ledge (5)</div>
          <div>A2: Forest (8), Wetlands (12), Vaal (15)</div>
          <div>A3: City (20), Docks (22), Library (24)</div>
          <div>A4: Mines (26), Belly (29), Dried (31)</div>
        </div>
      </div>
      
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Resistance Penalties</h3>
        <div className="text-[10px]">
          <div>Act 5: -30% all res</div>
          <div>Act 10: -60% all res</div>
          <div className="text-yellow-400">Priority: Fire &gt; Cold &gt; Lightning</div>
        </div>
      </div>
      
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Must-Have Items</h3>
        <div className="text-[10px] space-y-1">
          <div>• Movement speed boots (10%+)</div>
          <div>• Quicksilver flask (ASAP)</div>
          <div>• Life flasks with bleed immunity</div>
          <div>• Resist gear for act 5 & 10</div>
        </div>
      </div>
      
      <div>
        <h3 className="text-poe-gold font-bold">Efficiency Tips</h3>
        <div className="text-[10px] space-y-1">
          <div>• Stay within 3 levels of zone</div>
          <div>• Don&apos;t over-farm early zones</div>
          <div>• Complete skill point quests</div>
          <div>• Use movement skills constantly</div>
        </div>
      </div>
    </div>
  )
}