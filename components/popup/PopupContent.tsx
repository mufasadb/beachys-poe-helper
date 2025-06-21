import LevelingGuidePopup from './LevelingGuidePopup'
import AtlasQuickPopup from './AtlasQuickPopup'
import MovementBootsPopup from './MovementBootsPopup'
import TradingQuickPopup from './TradingQuickPopup'
import VendorRecipesPopup from './VendorRecipesPopup'
import HeistTablePopup from './HeistTablePopup'
import WeaponBasesPopup from './WeaponBasesPopup'
import SettlersPopup from './SettlersPopup'
import CurrencyRecipesPopup from './CurrencyRecipesPopup'
import ChaosRecipePopup from './ChaosRecipePopup'
import WeaponModsPopup from './WeaponModsPopup'
import MovementRecipePopup from './MovementRecipePopup'
import BootSearchPopup from './BootSearchPopup'
import TwoHandWeaponsPopup from './TwoHandWeaponsPopup'
import OneHandWeaponsPopup from './OneHandWeaponsPopup'
import WeaponCraftingPopup from './WeaponCraftingPopup'

interface PopupContentProps {
  category: string
  title?: string
}

export default function PopupContent({ category, title }: PopupContentProps) {
  const renderPopup = () => {
    switch (category) {
      case 'leveling-guide':
        return <LevelingGuidePopup />
      case 'atlas-quick':
        return <AtlasQuickPopup />
      case 'movement-boots':
        return <MovementBootsPopup />
      case 'trading-quick':
        return <TradingQuickPopup />
      case 'vendor-recipes':
        return <VendorRecipesPopup />
      case 'heist-table':
        return <HeistTablePopup />
      case 'weapon-bases':
        return <WeaponBasesPopup />
      case 'settlers':
        return <SettlersPopup />
      case 'currency-recipes':
        return <CurrencyRecipesPopup />
      case 'chaos-recipe':
        return <ChaosRecipePopup />
      case 'weapon-mods':
        return <WeaponModsPopup />
      case 'movement-recipe':
        return <MovementRecipePopup />
      case 'boot-search':
        return <BootSearchPopup />
      case 'two-hand-weapons':
        return <TwoHandWeaponsPopup />
      case 'one-hand-weapons':
        return <OneHandWeaponsPopup />
      case 'weapon-crafting':
        return <WeaponCraftingPopup />
      default:
        return (
          <div className="text-red-400 text-center p-4">
            Popup content not found for category: {category}
          </div>
        )
    }
  }

  return (
    <div className="popup-container">
      {title && (
        <div className="mb-3 pb-2 border-b border-poe-gold">
          <h2 className="text-poe-gold font-bold text-sm">{title}</h2>
        </div>
      )}
      {renderPopup()}
    </div>
  )
}