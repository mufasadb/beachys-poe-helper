export default function TradingQuickPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Essential Sites</h3>
        <div className="text-[10px] space-y-1">
          <div><span className="text-yellow-400">Official Trade:</span> pathofexile.com/trade</div>
          <div><span className="text-yellow-400">POE Ninja:</span> poe.ninja (prices)</div>
          <div><span className="text-yellow-400">Awakened Trade:</span> github overlay</div>
        </div>
      </div>
      
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Quick Search Tips</h3>
        <div className="text-[10px] space-y-1">
          <div>• Use stat filters for specific mods</div>
          <div>• Set max price for budget searches</div>
          <div>• Check &quot;online only&quot; for faster trades</div>
          <div>• Use pseudo mods for life/resist totals</div>
        </div>
      </div>
      
      <div>
        <h3 className="text-poe-gold font-bold">Currency Exchange</h3>
        <div className="text-[10px] space-y-1">
          <div>• Use currency.poe.ninja for rates</div>
          <div>• Bulk exchanges save time</div>
          <div>• Watch for market manipulation</div>
          <div>• Buy in bulk for better rates</div>
        </div>
      </div>
    </div>
  )
}