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
      result: "1x",
      resultImage: "/images/items/chromatic-orb.png",
      resultAlt: "Chromatic Orb"
    },
    {
      name: "Jeweller's Orb",
      ingredients: "Any item with 6 sockets",
      result: "7x",
      resultImage: "/images/items/jewellers-orb.png",
      resultAlt: "Jeweller's Orb"
    },
    {
      name: "Fusing Orb",
      ingredients: "Any item with 6 linked sockets",
      result: "20x",
      resultImage: "/images/items/orb-of-fusing.png",
      resultAlt: "Orb of Fusing"
    },
    {
      name: "Orb of Alchemy",
      ingredients: "3 of same base type rare items (different names)",
      result: "1x",
      resultImage: "/images/items/alchemy-orb.png",
      resultAlt: "Orb of Alchemy"
    },
    {
      name: "Orb of Chance",
      ingredients: "3 of same base type magic items (different names)",  
      result: "1x",
      resultImage: "/images/items/orb-of-chance.png",
      resultAlt: "Orb of Chance"
    },
    {
      name: "Orb of Augmentation",
      ingredients: "3 of same base type normal items (different names)",
      result: "1x",
      resultImage: "/images/items/orb-augmentation.png",
      resultAlt: "Orb of Augmentation"
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
      ingredients: [
        { text: "Normal", image: "/images/items/boots.png", alt: "Boots" },
        { text: " + " },
        { text: "", image: "/images/items/quicksilver-flask.png", alt: "Quicksilver Flask" },
        { text: " + " },
        { text: "", image: "/images/items/orb-augmentation.png", alt: "Orb of Augmentation" }
      ],
      result: "Magic boots with 10% increased Movement Speed"
    },
    {
      name: "+1 Lightning Gems Weapon",
      ingredients: [
        { text: "Normal", image: "/images/items/weapon.png", alt: "Weapon" },
        { text: " + " },
        { text: "Topaz Ring", image: "/images/items/ring-icon.png", alt: "Topaz Ring" },
        { text: " + " },
        { text: "", image: "/images/items/orb-of-alteration.png", alt: "Orb of Alteration" }
      ],
      result: "Magic weapon with +1 to Level of Lightning Gems"
    },
    {
      name: "+1 Cold Gems Weapon", 
      ingredients: [
        { text: "Normal", image: "/images/items/weapon.png", alt: "Weapon" },
        { text: " + " },
        { text: "Sapphire Ring", image: "/images/items/ring-icon.png", alt: "Sapphire Ring" },
        { text: " + " },
        { text: "", image: "/images/items/orb-of-alteration.png", alt: "Orb of Alteration" }
      ],
      result: "Magic weapon with +1 to Level of Cold Gems"
    },
    {
      name: "+1 Fire Gems Weapon",
      ingredients: [
        { text: "Normal", image: "/images/items/weapon.png", alt: "Weapon" },
        { text: " + " },
        { text: "Ruby Ring", image: "/images/items/ring-icon.png", alt: "Ruby Ring" },
        { text: " + " },
        { text: "", image: "/images/items/orb-of-alteration.png", alt: "Orb of Alteration" }
      ],
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
      ingredients: [
        { text: "3 Life Flasks + " },
        { text: "Ruby Ring", image: "/images/items/ring-icon.png", alt: "Ruby Ring" },
        { text: " + " },
        { text: "", image: "/images/items/orb-of-alteration.png", alt: "Orb of Alteration" }
      ],
      result: "Magic Iron Flask with increased life recovery"
    },
    {
      name: "Granite Flask",
      ingredients: [
        { text: "3 Utility Flasks + " },
        { text: "", image: "/images/items/whetstone.png", alt: "Blacksmith's Whetstone" }
      ],
      result: "Granite Flask"
    }
  ]

  return (
    <RecipeSection title="Flask Recipes" recipes={recipes} />
  )
}

function RecipeSection({ title, recipes }: { title: string, recipes: Array<{name: string, ingredients: string | Array<{text: string, image?: string, alt?: string}>, result: string, resultImage?: string, resultAlt?: string}> }) {
  const getSectionImage = (title: string) => {
    if (title.includes('Currency')) return '/images/items/Divine_Orb_inventory_icon.png'
    if (title.includes('Equipment')) return '/images/items/Splendour_inventory_icon.png'
    if (title.includes('Gem')) return '/images/items/Support_Skill_Gem_inventory_icon.png'
    if (title.includes('Flask')) return '/images/items/quicksilver-flask.png'
    return '/images/items/Chaos_Orb_inventory_icon.png'
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <img 
          src={getSectionImage(title)} 
          alt={title} 
          className="w-8 h-8 mr-3"
        />
        <h2 className="text-2xl font-bold text-poe-gold">{title}</h2>
      </div>
      <div className="space-y-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="border-b border-gray-700 pb-4 last:border-b-0">
            <h3 className="text-lg font-semibold text-white mb-2">{recipe.name}</h3>
            <div className="text-sm space-y-1">
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">Ingredients:</span>
                <div className="flex items-center">
                  {Array.isArray(recipe.ingredients) ? (
                    recipe.ingredients.map((ingredient, idx) => (
                      <span key={idx} className="flex items-center">
                        {ingredient.image ? (
                          <img 
                            src={ingredient.image} 
                            alt={ingredient.alt || ''} 
                            className="w-6 h-6 inline-block mx-1"
                          />
                        ) : null}
                        {ingredient.text && <span className="text-gray-200">{ingredient.text}</span>}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-200">{recipe.ingredients}</span>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">Result:</span>
                <div className="flex items-center">
                  {recipe.resultImage ? (
                    <>
                      <span className="text-poe-gold mr-1">{recipe.result}</span>
                      <img 
                        src={recipe.resultImage} 
                        alt={recipe.resultAlt || ''} 
                        className="w-6 h-6 inline-block ml-1"
                      />
                    </>
                  ) : (
                    <span className="text-poe-gold">{recipe.result}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}