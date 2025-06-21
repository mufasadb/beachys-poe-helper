export default function HeistJobsPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div>
        <h3 className="text-poe-gold font-bold mb-2">Heist Jobs & Best Rogues</h3>
        <div className="text-[10px] space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 font-semibold w-20">Lockpicking:</span>
            <span>Karst (5) {'>'} Huck (3) {'>'} Niles (3)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400 font-semibold w-20">Demolition:</span>
            <span>Vinderi (5) {'>'} Huck (3) {'>'} Niles (2)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-semibold w-20">Engineering:</span>
            <span>Huck (5) {'>'} Vinderi (3) {'>'} Niles (2)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-semibold w-20">Perception:</span>
            <span>Niles (5) {'>'} Gianna (3) {'>'} Karst (2)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-400 font-semibold w-20">Brute Force:</span>
            <span>Tibbs (5) {'>'} Huck (2) {'>'} Tullina (2)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-orange-400 font-semibold w-20">Deception:</span>
            <span>Gianna (5) {'>'} Niles (3) {'>'} Tullina (2)</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-2 rounded text-[10px]">
        <div className="text-yellow-400 mb-1">Quick Tips:</div>
        <div>• Numbers in () = max job level</div>
        <div>• Focus on getting your best rogues first</div>
        <div>• Karst + Vinderi cover most content</div>
      </div>
    </div>
  )
}