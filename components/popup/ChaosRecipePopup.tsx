export default function ChaosRecipePopup() {
  return (
    <div className="text-xs leading-tight space-y-2">
      <div className="bg-gray-800 p-2 rounded">
        <div className="text-yellow-400 text-[11px] mb-1 flex items-center gap-1">
          <img src="/images/popup/Chaos_Orb_inventory_icon.png" alt="Chaos" className="w-3 h-3 inline" />
          Chaos Recipe Items (ilvl 60-74)
        </div>
        <div className="grid grid-cols-2 gap-1 text-[10px]">
          <div>• Weapon (2H or 1H+Shield)</div>
          <div>• Helmet</div>
          <div>• Body Armor</div>
          <div>• Gloves</div>
          <div>• Boots</div>
          <div>• Belt</div>
          <div>• 2x Rings</div>
          <div>• Amulet</div>
        </div>
      </div>
      
      <div className="text-[10px] text-gray-300">
        <div>• All items must be rare (yellow)</div>
        <div>• All items ilvl 60-74 for chaos</div>
        <div>• All items ilvl 75+ for regal</div>
        <div>• Unidentified = 2x orbs</div>
      </div>
    </div>
  )
}