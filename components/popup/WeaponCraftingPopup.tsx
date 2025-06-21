export default function WeaponCraftingPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div>
        <h3 className="text-poe-gold font-bold mb-2">Crafting Priority</h3>
        <div className="text-[10px] space-y-1">
          <div>1. <span className="text-yellow-400">Item Level 83+</span> (T1 mods)</div>
          <div>2. <span className="text-green-400">Influenced bases</span> (Elder/Shaper)</div>
          <div>3. <span className="text-blue-400">6-linked</span> (for 2H weapons)</div>
          <div>4. <span className="text-purple-400">Good base type</span> (DPS or speed)</div>
        </div>
      </div>
      
      <div>
        <h3 className="text-poe-gold font-bold mb-2">Socket Priority</h3>
        <div className="text-[10px] space-y-1">
          <div className="flex items-center gap-1">
            <img src="/images/popup/Jeweller%27s_Orb_inventory_icon.png" alt="Jewellers" className="w-3 h-3 inline" />
            • 2H: 6L for main skill
          </div>
          <div>• 1H: 3L for support gems</div>
          <div>• Colors: depends on skill gems</div>
          <div>• Use jewellers/fusings wisely</div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-2 rounded text-[10px]">
        <div className="text-yellow-400 mb-1">Quick Tips:</div>
        <div>• Buy 6L bases instead of linking</div>
        <div>• Check poe.ninja for base prices</div>
        <div>• Quality before linking</div>
      </div>
    </div>
  )
}