export default function HeistTablePopup() {
  return (
    <div className="text-xs leading-tight space-y-3">
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Rogue Skills</h3>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div>
            <div className="text-yellow-400">Physical:</div>
            <div>• Lockpicking (doors/chests)</div>
            <div>• Brute Force (barriers)</div>
            <div>• Demolition (walls)</div>
          </div>
          <div>
            <div className="text-blue-400">Technical:</div>
            <div>• Engineering (devices)</div>
            <div>• Trap Disarmament</div>
            <div>• Perception (secrets)</div>
          </div>
        </div>
      </div>
      
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Alert Management</h3>
        <div className="text-[10px] space-y-1">
          <div>• Killing = high alert gain</div>
          <div>• Opening doors/chests = medium</div>
          <div>• Walking = no alert</div>
          <div>• <span className="text-red-400">Lockdown = mission failed</span></div>
        </div>
      </div>
      
      <div className="border-b border-poe-gold pb-2">
        <h3 className="text-poe-gold font-bold">Valuable Rewards</h3>
        <div className="text-[10px] space-y-1">
          <div>• <span className="text-purple-400">Experimented items</span> (alt quality)</div>
          <div>• <span className="text-yellow-400">Replica uniques</span></div>
          <div>• <span className="text-green-400">Enchanted weapons/armor</span></div>
          <div>• <span className="text-blue-400">Currency/gems</span></div>
        </div>
      </div>
      
      <div>
        <h3 className="text-poe-gold font-bold">Strategy</h3>
        <div className="text-[10px] space-y-1">
          <div>• Plan route before starting</div>
          <div>• Upgrade rogue equipment</div>
          <div>• Avoid combat when possible</div>
          <div>• Focus on high-value targets</div>
        </div>
      </div>
    </div>
  )
}