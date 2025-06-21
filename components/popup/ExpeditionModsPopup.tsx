export default function ExpeditionModsPopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div>
        <h3 className="text-poe-gold font-bold mb-2">Expedition Remnant Priority</h3>
        <div className="text-[10px] space-y-2">
          <div>
            <div className="text-green-400 font-semibold mb-1">Always Take:</div>
            <div>• Monsters drop additional currency</div>
            <div>• Increased quantity/rarity</div>
            <div>• Monsters explode as corpses</div>
          </div>
          
          <div>
            <div className="text-yellow-400 font-semibold mb-1">Good to Take:</div>
            <div>• Double monster life (easy)</div>
            <div>• Monsters take reduced damage</div>
            <div>• Area contains additional monsters</div>
          </div>
          
          <div>
            <div className="text-red-400 font-semibold mb-1">Avoid Unless Necessary:</div>
            <div>• Monsters have elemental resistances</div>
            <div>• Monsters reflect damage</div>
            <div>• Monsters immune to damage types</div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-2 rounded text-[10px]">
        <div className="text-yellow-400 mb-1">Strategy:</div>
        <div>• Activate currency remnants first</div>
        <div>• Chain explosions for maximum coverage</div>
        <div>• Save immune/reflection remnants for last</div>
      </div>
    </div>
  )
}