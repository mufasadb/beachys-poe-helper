export default function WeaponBasesPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Two-Handed Axes</h3>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div>
            <div className="text-yellow-400">High DPS:</div>
            <div>• Vaal Axe (ilvl 64)</div>
            <div>• Fleshripper (ilvl 70)</div>
            <div>• Despot Axe (ilvl 66)</div>
          </div>
          <div>
            <div className="text-green-400">Speed:</div>
            <div>• Siege Axe (fast)</div>
            <div>• Reaver Axe (medium)</div>
            <div>• Headsman Axe (med)</div>
          </div>
        </div>
      </div>
      
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">One-Handed Axes</h3>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div>
            <div className="text-red-400">High Damage:</div>
            <div>• Siege Axe (ilvl 60)</div>
            <div>• Reaver Axe (ilvl 62)</div>
            <div>• Butcher Axe (ilvl 64)</div>
          </div>
          <div>
            <div className="text-blue-400">Fast:</div>
            <div>• Tomahawk (1.4 aps)</div>
            <div>• War Hatchet (1.25)</div>
            <div>• Cleaver (1.2 aps)</div>
          </div>
        </div>
      </div>
      
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Crafting Priority</h3>
        <div className="text-[10px] space-y-1">
          <div>1. <span className="text-yellow-400">Item Level 83+</span> (T1 mods)</div>
          <div>2. <span className="text-green-400">Influenced bases</span> (Elder/Shaper)</div>
          <div>3. <span className="text-blue-400">6-linked</span> (for 2H weapons)</div>
          <div>4. <span className="text-purple-400">Good base type</span> (DPS or speed)</div>
        </div>
      </div>
      
      <div>
        <h3 className="text-poe-gold font-bold">Socket Priority</h3>
        <div className="text-[10px] space-y-1">
          <div>• 2H: 6L for main skill</div>
          <div>• 1H: 3L for support gems</div>
          <div>• Colors: depends on skill gems</div>
          <div>• Use jewellers/fusings wisely</div>
        </div>
      </div>
    </div>
  )
}