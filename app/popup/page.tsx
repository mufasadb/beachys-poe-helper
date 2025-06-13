'use client'

import { useSearchParams } from 'next/navigation'
import PopupContent from '../../components/popup/PopupContent'

const POPUP_TITLES: Record<string, string> = {
  'leveling-guide': 'Leveling Guide',
  'atlas-quick': 'Atlas Quick Ref',
  'movement-boots': 'Movement Boots',
  'trading-quick': 'Trading Links',
  'vendor-recipes': 'Vendor Recipes',
  'heist-table': 'Heist Quick Ref',
  'weapon-bases': 'Weapon Bases'
}

export default function PopupPage() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-red-400">No category specified</div>
      </div>
    )
  }

  if (!POPUP_TITLES[category]) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-red-400">Invalid category: {category}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="p-2">
        <div className="popup-container text-xs leading-tight" style={{
          fontSize: '11px',
          lineHeight: '1.3',
          textShadow: '0 0 2px rgba(0,0,0,0.8)'
        }}>
          <PopupContent 
            category={category} 
            title={POPUP_TITLES[category]}
          />
        </div>
      </div>
    </div>
  )
}