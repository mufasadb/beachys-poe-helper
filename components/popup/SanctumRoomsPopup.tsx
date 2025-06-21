export default function SanctumRoomsPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div>
        <h3 className="text-poe-gold font-bold mb-2">Sanctum Room Priority</h3>
        <div className="text-[10px] space-y-2">
          <div>
            <div className="text-green-400 font-semibold mb-1">High Value (Always Take):</div>
            <div>• Treasure Room (currency/items)</div>
            <div>• Accursed Forge (unique items)</div>
            <div>• Divination Room (cards)</div>
            <div>• Merchant (buy/sell)</div>
          </div>
          
          <div>
            <div className="text-yellow-400 font-semibold mb-1">Medium Value:</div>
            <div>• Sanctum Fountain (restore resolve)</div>
            <div>• Guard Room (remove afflictions)</div>
            <div>• Aureus Room (aureus coins)</div>
          </div>
          
          <div>
            <div className="text-red-400 font-semibold mb-1">Avoid When Low Resolve:</div>
            <div>• Deferral Room (costly afflictions)</div>
            <div>• Templar Quarters (risky)</div>
            <div>• Any room with heavy afflictions</div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-2 rounded text-[10px]">
        <div className="text-yellow-400 mb-1">Quick Tips:</div>
        <div>• Manage resolve carefully</div>
        <div>• Skip risky rooms when low</div>
        <div>• Prioritize currency rooms</div>
      </div>
    </div>
  )
}