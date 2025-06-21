export default function SettlersShipsPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div>
        <h3 className="text-poe-gold font-bold mb-2">Settlers Shipping Priority</h3>
        <div className="text-[10px] space-y-2">
          <div>
            <div className="text-green-400 font-semibold mb-1">High Profit:</div>
            <div>• Currency (chaos, divine orbs)</div>
            <div>• Maps (red tier maps)</div>
            <div>• Essences (high tier)</div>
            <div>• Fossils (rare types)</div>
          </div>
          
          <div>
            <div className="text-yellow-400 font-semibold mb-1">Medium Profit:</div>
            <div>• Fragments (sacrifice pieces)</div>
            <div>• Gems (quality/leveled)</div>
            <div>• Uniques (meta items)</div>
          </div>
          
          <div>
            <div className="text-blue-400 font-semibold mb-1">Ship Upgrades (Priority):</div>
            <div>• Speed (faster returns)</div>
            <div>• Capacity (more items)</div>
            <div>• Safety (less risk)</div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-2 rounded text-[10px]">
        <div className="text-yellow-400 mb-1">Strategy:</div>
        <div>• Send ships constantly</div>
        <div>• Focus on high-value trade routes</div>
        <div>• Upgrade ship capacity first</div>
        <div>• Check prices before shipping</div>
      </div>
    </div>
  )
}