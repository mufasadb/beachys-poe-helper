export default function MovementRecipePopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div className="bg-gray-800 p-3 rounded text-center">
        <div className="text-yellow-400 flex items-center justify-center gap-1 text-[12px] mb-2">
          <img src="/images/popup/Iron_Greaves_inventory_icon.png" alt="Boots" className="w-5 h-5 inline" />
          Normal Boots + 
          <img src="/images/popup/Quicksilver_Flask_inventory_icon.png" alt="Quicksilver Flask" className="w-5 h-5 inline" />
          Quicksilver Flask + 
          <img src="/images/popup/Orb_of_Augmentation_inventory_icon.png" alt="Augmentation" className="w-5 h-5 inline" />
          Augmentation
        </div>
        <div className="text-green-400 text-[11px]">= Magic boots with 10% movement speed</div>
      </div>
      
      <div className="text-[10px] text-gray-300">
        <div className="text-yellow-400 mb-1">Tips:</div>
        <div>• Works with any normal boots</div>
        <div>• Guaranteed 10% movement speed</div>
        <div>• Essential for league start</div>
        <div>• Can be done at any vendor</div>
      </div>
    </div>
  )
}