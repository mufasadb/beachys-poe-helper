export default function TwoHandWeaponsPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div>
        <h3 className="text-poe-gold font-bold mb-2">Two-Handed Axes</h3>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div>
            <div className="text-yellow-400 mb-1">High DPS:</div>
            <div className="flex items-center gap-1 mb-1">
              <img src="/images/popup/Vaal_Axe_inventory_icon.png" alt="Vaal Axe" className="w-3 h-3 inline" />
              • Vaal Axe (ilvl 64)
            </div>
            <div className="flex items-center gap-1 mb-1">
              <img src="/images/popup/Fleshripper_inventory_icon.png" alt="Fleshripper" className="w-3 h-3 inline" />
              • Fleshripper (ilvl 70)
            </div>
            <div>• Despot Axe (ilvl 66)</div>
          </div>
          <div>
            <div className="text-green-400 mb-1">Speed:</div>
            <div>• Siege Axe (fast)</div>
            <div>• Reaver Axe (medium)</div>
            <div>• Headsman Axe (med)</div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-poe-gold font-bold mb-2">Two-Handed Swords</h3>
        <div className="text-[10px] space-y-1">
          <div>• Tiger Sword (high DPS)</div>
          <div>• Lion Sword (balanced)</div>
          <div>• Exquisite Blade (endgame)</div>
        </div>
      </div>
    </div>
  )
}