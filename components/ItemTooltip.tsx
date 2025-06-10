'use client'
import { useState } from 'react'

interface ItemTooltipProps {
  children: React.ReactNode
  tooltip: string
  itemName?: string
  rarity?: 'normal' | 'magic' | 'rare' | 'unique' | 'currency'
}

export default function ItemTooltip({ children, tooltip, itemName, rarity = 'normal' }: ItemTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = (e: React.MouseEvent) => {
    setShowTooltip(true)
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const getRarityColor = () => {
    switch (rarity) {
      case 'normal': return 'bg-gray-900 border-gray-600'
      case 'magic': return 'bg-gray-900 border-blue-500'
      case 'rare': return 'bg-gray-900 border-yellow-500'
      case 'unique': return 'bg-gray-900 border-orange-600'
      case 'currency': return 'bg-gray-900 border-amber-500'
      default: return 'bg-gray-900 border-gray-600'
    }
  }

  const getRarityTextColor = () => {
    switch (rarity) {
      case 'normal': return 'text-gray-200'
      case 'magic': return 'text-blue-400'
      case 'rare': return 'text-yellow-400'
      case 'unique': return 'text-orange-500'
      case 'currency': return 'text-amber-400'
      default: return 'text-gray-200'
    }
  }

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div 
          className={`fixed z-50 px-3 py-2 text-sm rounded shadow-lg border-2 ${getRarityColor()} pointer-events-none`}
          style={{
            left: `${position.x + 10}px`,
            top: `${position.y - 30}px`,
            maxWidth: '300px'
          }}
        >
          {itemName && (
            <div className={`font-bold mb-1 ${getRarityTextColor()}`}>
              {itemName}
            </div>
          )}
          <div className="text-gray-300 text-xs leading-relaxed">
            {tooltip}
          </div>
        </div>
      )}
    </div>
  )
}