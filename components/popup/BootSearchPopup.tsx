export default function BootSearchPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div>
        <h3 className="text-poe-gold font-bold mb-2">Vendor Search Patterns</h3>
        <div className="text-[10px] font-mono space-y-1">
          <div className="text-blue-400">{`"nt speed".*"b-b-b"`} (3 Blue sockets)</div>
          <div className="text-green-400">{`"nt speed".*"g-g-g"`} (3 Green sockets)</div>
          <div className="text-red-400">{`"nt speed".*"r-r-r"`} (3 Red sockets)</div>
          <div className="text-purple-400">{`"nt speed".*"[rgb]-[rgb]-[rgb]"`} (RGB)</div>
        </div>
      </div>
      
      <div>
        <h3 className="text-poe-gold font-bold mb-2">Shopping Priority</h3>
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