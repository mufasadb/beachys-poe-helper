export default function VendorRecipesPopup() {
  return (
    <div className="text-xs leading-tight space-y-2">
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Currency Recipes</h3>
        <div className="text-[10px] space-y-1">
          <div><span className="text-yellow-400">Chromatic:</span> RGB linked item</div>
          <div><span className="text-yellow-400">Jewellers:</span> 6 socket item → 7 jewellers</div>
          <div><span className="text-yellow-400">Fusing:</span> 6 link item → 20 fusing</div>
          <div><span className="text-yellow-400">Chaos:</span> Full rare set ilvl 60-74</div>
        </div>
      </div>
      
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Chaos Recipe Items</h3>
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
      
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Weapon Mods</h3>
        <div className="text-[10px] space-y-1">
          <div><span className="text-red-400">+1 Fire:</span> Weapon + Ruby Ring + Alt</div>
          <div><span className="text-blue-400">+1 Cold:</span> Weapon + Sapphire Ring + Alt</div>
          <div><span className="text-yellow-400">+1 Lightning:</span> Weapon + Topaz Ring + Alt</div>
        </div>
      </div>
      
      <div>
        <h3 className="text-poe-gold font-bold">Movement Recipe</h3>
        <div className="text-[10px]">
          <div><span className="text-green-400">10% Move Speed:</span> Boots + Quicksilver + Aug</div>
        </div>
      </div>
    </div>
  )
}