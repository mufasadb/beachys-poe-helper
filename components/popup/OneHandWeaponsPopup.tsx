export default function OneHandWeaponsPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div>
        <h3 className="text-poe-gold font-bold mb-2">One-Handed Axes</h3>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div>
            <div className="text-red-400 mb-1">High Damage:</div>
            <div>• Siege Axe (ilvl 60)</div>
            <div>• Reaver Axe (ilvl 62)</div>
            <div>• Butcher Axe (ilvl 64)</div>
          </div>
          <div>
            <div className="text-blue-400 mb-1">Fast:</div>
            <div>• Tomahawk (1.4 aps)</div>
            <div>• War Hatchet (1.25)</div>
            <div>• Cleaver (1.2 aps)</div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-poe-gold font-bold mb-2">One-Handed Swords</h3>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div>
            <div className="text-red-400 mb-1">High Damage:</div>
            <div>• Gladius (ilvl 56)</div>
            <div>• Corsair Sword (ilvl 58)</div>
            <div>• Cutlass (ilvl 60)</div>
          </div>
          <div>
            <div className="text-blue-400 mb-1">Fast:</div>
            <div>• Foil (1.6 aps)</div>
            <div>• Rapier (1.5 aps)</div>
            <div>• Estoc (1.5 aps)</div>
          </div>
        </div>
      </div>
    </div>
  )
}