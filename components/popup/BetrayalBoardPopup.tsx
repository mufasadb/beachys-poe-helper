export default function BetrayalBoardPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div>
        <h3 className="text-poe-gold font-bold mb-2">Best Syndicate Positions</h3>
        <div className="text-[10px] space-y-1">
          <div className="flex justify-between">
            <span className="text-yellow-400 font-semibold">It That Fled:</span>
            <span>Transport/Research (Pure Breachstones)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-400 font-semibold">Aisling:</span>
            <span>Research (Veiled Crafts)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-400 font-semibold">Vorici:</span>
            <span>Transport (White Sockets)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-purple-400 font-semibold">Tora:</span>
            <span>Transport (Gem XP)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-red-400 font-semibold">Leo:</span>
            <span>Research (Exalt Slam)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-orange-400 font-semibold">Hillock:</span>
            <span>Transport (Quality)</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-2 rounded text-[10px]">
        <div className="text-yellow-400 mb-1">Priority Order:</div>
        <div>1. It That Fled (Transport/Research)</div>
        <div>2. Aisling (Research)</div>
        <div>3. Vorici (Transport)</div>
        <div>4. Tora (Transport for gem leveling)</div>
      </div>
    </div>
  )
}