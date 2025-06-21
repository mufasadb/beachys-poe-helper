export default function IncursionRoomsPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div>
        <h3 className="text-poe-gold font-bold mb-2">Temple Room Priority</h3>
        <div className="text-[10px] space-y-2">
          <div>
            <div className="text-green-400 font-semibold mb-1">Must Have (T3):</div>
            <div>• Apex of Ascension (+1 skill point)</div>
            <div>• Locus of Corruption (double corrupt)</div>
            <div>• Doryani's Institute (upgrade gems)</div>
            <div>• Factory (engineer orbs)</div>
          </div>
          
          <div>
            <div className="text-yellow-400 font-semibold mb-1">High Value (T3):</div>
            <div>• Currency Exchange (currency)</div>
            <div>• Gemcutter's Workshop (gem quality)</div>
            <div>• Cartographer's Room (maps)</div>
            <div>• Museum of Artifacts (unique items)</div>
          </div>
          
          <div>
            <div className="text-red-400 font-semibold mb-1">Skip (Low Value):</div>
            <div>• Sparring Room (poor rewards)</div>
            <div>• Storage Room (random junk)</div>
            <div>• Trap Workshop (niche use)</div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-2 rounded text-[10px]">
        <div className="text-yellow-400 mb-1">Strategy:</div>
        <div>• Always upgrade Apex first</div>
        <div>• Connect high-value rooms</div>
        <div>• Plan temple layout ahead</div>
      </div>
    </div>
  )
}