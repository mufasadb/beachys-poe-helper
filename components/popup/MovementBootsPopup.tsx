export default function MovementBootsPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Recipe</h3>
        <div className="bg-gray-800 p-2 rounded text-[11px]">
          <div className="text-yellow-400">Normal Boots + Quicksilver Flask + Augmentation</div>
          <div className="mt-1">= Magic boots with 10% movement speed</div>
        </div>
      </div>
      
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Search Patterns (Vendor)</h3>
        <div className="text-[10px] font-mono space-y-1">
          <div className="text-blue-400">3 Blue: &quot;nt speed&quot;.*&quot;b-b-b&quot;</div>
          <div className="text-green-400">3 Green: &quot;nt speed&quot;.*&quot;g-g-g&quot;</div>
          <div className="text-red-400">3 Red: &quot;nt speed&quot;.*&quot;r-r-r&quot;</div>
          <div className="text-purple-400">RGB: &quot;nt speed&quot;.*&quot;[rgb]-[rgb]-[rgb]&quot;</div>
        </div>
      </div>
      
      <div>
        <h3 className="text-poe-gold font-bold">Priority Order</h3>
        <div className="text-[10px] space-y-1">
          <div>1. Any movement speed boots</div>
          <div>2. Correct socket colors</div>
          <div>3. Life/resistance rolls</div>
          <div>4. Base type (Iron, Steel, etc.)</div>
        </div>
      </div>
    </div>
  )
}