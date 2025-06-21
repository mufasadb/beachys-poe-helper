export default function SettlersPopup() {
  return (
    <div className="text-xs leading-tight space-y-2">
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold flex items-center">
          <img src="/images/items/Ancient_City_Map_%28Settlers%29_inventory_icon.png" alt="" className="w-4 h-4 mr-1" />
          Dust Priority Guide
        </h3>
      </div>
      
      <div className="border-b border-poe-gold pb-2">
        <h4 className="text-green-400 font-bold text-[10px] mb-1">HIGH PRIORITY</h4>
        <div className="space-y-1 text-[10px]">
          <div className="flex items-center">
            <img src="/images/items/chaos-orb.png" alt="" className="w-3 h-3 mr-1" />
            <span className="text-yellow-400">Currency Exchange:</span>
            <span className="ml-1">50-200 dust ⭐⭐⭐⭐⭐</span>
          </div>
          <div className="flex items-center">
            <img src="/images/items/map-icon.png" alt="" className="w-3 h-3 mr-1" />
            <span className="text-yellow-400">Mapping Services:</span>
            <span className="ml-1">100-300 dust ⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>
      
      <div className="border-b border-poe-gold pb-2">
        <h4 className="text-yellow-400 font-bold text-[10px] mb-1">MEDIUM PRIORITY</h4>
        <div className="space-y-1 text-[10px]">
          <div className="flex items-center">
            <img src="/images/items/weapon.png" alt="" className="w-3 h-3 mr-1" />
            <span className="text-yellow-400">Weapon Crafting:</span>
            <span className="ml-1">150-400 dust ⭐⭐⭐⭐</span>
          </div>
          <div className="flex items-center">
            <img src="/images/items/gem-icon.png" alt="" className="w-3 h-3 mr-1" />
            <span className="text-yellow-400">Gem Quality:</span>
            <span className="ml-1">75-250 dust ⭐⭐⭐</span>
          </div>
        </div>
      </div>
      
      <div className="border-b border-poe-gold pb-2">
        <h4 className="text-red-400 font-bold text-[10px] mb-1">LOW PRIORITY</h4>
        <div className="space-y-1 text-[10px]">
          <div className="flex items-center">
            <span className="text-red-400">Cosmetics:</span>
            <span className="ml-1">500+ dust ⭐</span>
          </div>
          <div className="flex items-center">
            <span className="text-red-400">Stockpiling:</span>
            <span className="ml-1">Save for better ops ⭐⭐</span>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-poe-gold font-bold text-[10px] mb-1">KEY NPCs</h4>
        <div className="grid grid-cols-2 gap-1 text-[9px]">
          <div><span className="text-yellow-400">Johan:</span> Currency (Free)</div>
          <div><span className="text-blue-400">Keira:</span> Gems (100d)</div>
          <div><span className="text-green-400">Raulf:</span> Weapons (150d)</div>
          <div><span className="text-purple-400">Tujen:</span> Maps (200d)</div>
        </div>
      </div>
    </div>
  )
}