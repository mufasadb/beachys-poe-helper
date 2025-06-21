export default function WeaponModsPopup() {
  return (
    <div className="text-xs leading-tight space-y-2">
      <div className="text-[10px] space-y-1">
        <div><span className="text-red-400">+1 Fire Gems:</span> Weapon + Ruby Ring + Alt</div>
        <div><span className="text-blue-400">+1 Cold Gems:</span> Weapon + Sapphire Ring + Alt</div>
        <div><span className="text-yellow-400">+1 Lightning Gems:</span> Weapon + Topaz Ring + Alt</div>
        <div><span className="text-purple-400">+1 Chaos Gems:</span> Weapon + Amethyst Ring + Alt</div>
      </div>
      
      <div className="bg-gray-800 p-2 rounded text-[10px]">
        <div className="text-green-400 mb-1">Movement Speed Recipe:</div>
        <div className="flex items-center gap-1">
          <img src="/images/popup/Iron_Greaves_inventory_icon.png" alt="Boots" className="w-3 h-3 inline" />
          Boots + 
          <img src="/images/popup/Quicksilver_Flask_inventory_icon.png" alt="Quicksilver" className="w-3 h-3 inline" />
          Quicksilver + 
          <img src="/images/popup/Orb_of_Augmentation_inventory_icon.png" alt="Aug" className="w-3 h-3 inline" />
          Aug = 10% move speed
        </div>
      </div>
    </div>
  )
}