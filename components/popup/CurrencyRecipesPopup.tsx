export default function CurrencyRecipesPopup() {
  return (
    <div className="text-xs leading-tight space-y-2">
      <div className="text-[10px] space-y-1">
        <div className="flex items-center gap-1">
          <img src="/images/popup/Chromatic_Orb_inventory_icon.png" alt="Chromatic" className="w-3 h-3 inline" />
          <span className="text-yellow-400">Chromatic:</span> RGB linked item
        </div>
        <div className="flex items-center gap-1">
          <img src="/images/popup/Jeweller%27s_Orb_inventory_icon.png" alt="Jewellers" className="w-3 h-3 inline" />
          <span className="text-yellow-400">Jewellers:</span> 6 socket item → 7 jewellers
        </div>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">Fusing:</span> 6 link item → 20 fusing
        </div>
        <div className="flex items-center gap-1">
          <img src="/images/popup/Chaos_Orb_inventory_icon.png" alt="Chaos" className="w-3 h-3 inline" />
          <span className="text-yellow-400">Chaos:</span> Full rare set ilvl 60-74
        </div>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">Regal:</span> Full rare set ilvl 75+
        </div>
      </div>
    </div>
  )
}