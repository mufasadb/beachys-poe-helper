export default function VendorRecipes() {
  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-poe-gold mb-4">Vendor Recipes</h1>
        <p className="text-xl text-gray-300">Essential vendor recipes for Path of Exile</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CurrencyRecipes />
        <EquipmentRecipes />
        <GemRecipes />
        <FlaskRecipes />
      </div>
    </main>
  )
}

function CurrencyRecipes() {
  const recipes = [
    {
      name: "Chromatic Orb",
      ingredients: "Any item with 3 linked sockets of different colors (R-G-B)",
      result: "1 Chromatic Orb"
    },
    {
      name: "Jeweller's Orb",
      ingredients: "Any item with 6 sockets",
      result: "7 Jeweller's Orbs"
    },
    {
      name: "Fusing Orb",
      ingredients: "Any item with 6 linked sockets",
      result: "20 Orbs of Fusing"
    },
    {
      name: "Orb of Alchemy",
      ingredients: "3 of same base type rare items (different names)",
      result: "1 Orb of Alchemy"
    },
    {
      name: "Orb of Chance",
      ingredients: "3 of same base type magic items (different names)",  
      result: "1 Orb of Chance"
    },
    {
      name: "Orb of Augmentation",
      ingredients: "3 of same base type normal items (different names)",
      result: "1 Orb of Augmentation"
    }
  ]

  return (
    <RecipeSection title="Currency Recipes" recipes={recipes} />
  )
}

function EquipmentRecipes() {
  const recipes = [
    {
      name: "Movement Speed Boots",
      ingredients: "Normal boots + Quicksilver Flask + Orb of Augmentation",
      result: "Magic boots with 10% increased Movement Speed"
    },
    {
      name: "+1 Lightning Gems Weapon",
      ingredients: "Normal weapon + Topaz Ring + Orb of Alteration",
      result: "Magic weapon with +1 to Level of Lightning Gems"
    },
    {
      name: "+1 Cold Gems Weapon", 
      ingredients: "Normal weapon + Sapphire Ring + Orb of Alteration",
      result: "Magic weapon with +1 to Level of Cold Gems"
    },
    {
      name: "+1 Fire Gems Weapon",
      ingredients: "Normal weapon + Ruby Ring + Orb of Alteration", 
      result: "Magic weapon with +1 to Level of Fire Gems"
    },
    {
      name: "Life Flask",
      ingredients: "3 Life Flasks of same base type",
      result: "1 Life Flask of next tier"
    },
    {
      name: "Mana Flask",
      ingredients: "3 Mana Flasks of same base type", 
      result: "1 Mana Flask of next tier"
    }
  ]

  return (
    <RecipeSection title="Equipment Recipes" recipes={recipes} />
  )
}

function GemRecipes() {
  const recipes = [
    {
      name: "Gem Level Up",
      ingredients: "Gem + Orb of Fusing",
      result: "Same gem at level 1 with 20% quality"
    },
    {
      name: "Portal Gem",
      ingredients: "Portal Scroll",
      result: "Portal gem (from vendor)"
    },
    {
      name: "Wisdom Gem",
      ingredients: "Scroll of Wisdom",
      result: "Wisdom gem (from vendor)"
    }
  ]

  return (
    <RecipeSection title="Gem Recipes" recipes={recipes} />
  )
}

function FlaskRecipes() {
  const recipes = [
    {
      name: "Iron Flask",
      ingredients: "3 Life Flasks + Ruby Ring + Orb of Alteration",
      result: "Magic Iron Flask with increased life recovery"
    },
    {
      name: "Granite Flask",
      ingredients: "3 Utility Flasks + Blacksmith's Whetstone",
      result: "Granite Flask"
    }
  ]

  return (
    <RecipeSection title="Flask Recipes" recipes={recipes} />
  )
}

function RecipeSection({ title, recipes }: { title: string, recipes: Array<{name: string, ingredients: string, result: string}> }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-poe-gold">{title}</h2>
      <div className="space-y-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
            <h3 className="text-lg font-semibold text-white mb-2">{recipe.name}</h3>
            <div className="text-sm space-y-1">
              <p><span className="text-gray-400">Ingredients:</span> <span className="text-gray-200">{recipe.ingredients}</span></p>
              <p><span className="text-gray-400">Result:</span> <span className="text-poe-gold">{recipe.result}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}