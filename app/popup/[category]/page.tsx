import PopupContent from '../../../components/popup/PopupContent'

const POPUP_TITLES: Record<string, string> = {
  'leveling-guide': 'Leveling Guide',
  'atlas-quick': 'Atlas Quick Ref',
  'movement-boots': 'Movement Boots',
  'trading-quick': 'Trading Links',
  'vendor-recipes': 'Vendor Recipes',
  'heist-table': 'Heist Quick Ref',
  'weapon-bases': 'Weapon Bases',
  'settlers': 'Settlers Guide'
}

interface PopupPageProps {
  params: Promise<{ category: string }>
}

export default async function PopupCategoryPage({ params }: PopupPageProps) {
  const { category } = await params

  if (!POPUP_TITLES[category]) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-red-400">Invalid category: {category}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="p-4">
        <div className="popup-container text-base leading-normal" style={{
          fontSize: '20px',
          lineHeight: '1.5',
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

// Generate static params for all popup categories
export async function generateStaticParams() {
  return Object.keys(POPUP_TITLES).map((category) => ({
    category,
  }))
}