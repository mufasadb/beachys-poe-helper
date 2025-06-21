export default function DelveNodesPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div>
        <h3 className="text-poe-gold font-bold mb-2">Delve Node Priority</h3>
        <div className="text-[10px] space-y-2">
          <div>
            <div className="text-green-400 font-semibold mb-1">High Value:</div>
            <div>• Currency nodes (ancient orbs, chaos)</div>
            <div>• Fossil nodes (powerful crafting)</div>
            <div>• Resonator nodes (chaos/alch spam)</div>
            <div>• Azurite nodes (upgrade capacity)</div>
          </div>
          
          <div>
            <div className="text-yellow-400 font-semibold mb-1">Medium Value:</div>
            <div>• Map nodes (for atlas completion)</div>
            <div>• Gem nodes (quality gems)</div>
            <div>• Armor/Weapon nodes (bases)</div>
          </div>
          
          <div>
            <div className="text-blue-400 font-semibold mb-1">Deep Delving (Depth 300+):</div>
            <div>• Fossil rewards increase significantly</div>
            <div>• Better azurite per node</div>
            <div>• Rare fossil types available</div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-2 rounded text-[10px]">
        <div className="text-yellow-400 mb-1">Quick Tips:</div>
        <div>• Prioritize azurite early for upgrades</div>
        <div>• Go sideways at depth 270+ for fossils</div>
        <div>• Always grab currency nodes</div>
      </div>
    </div>
  )
}