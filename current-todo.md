# Current Todo

## Completed ✅
- ✅ Initialize project structure and GitHub repository
- ✅ Create Docker Hub repository (callmebeachy/beachys-poe-helper)  
- ✅ Update CLAUDE.md with detailed project description
- ✅ Set up Next.js with TypeScript and Tailwind CSS
- ✅ Install all dependencies (npm install completed)
- ✅ Verify development environment (server running at localhost:3000)
- ✅ Create GitHub repository: https://github.com/mufasadb/beachys-poe-helper
- ✅ Push initial code to GitHub
- ✅ Complete all research tasks for implementation planning

## Ready to Implement - High Priority Features
1. Create vendor recipes page (from community spreadsheet)
2. Create inventory search templates (movement speed boots)
3. Display community cheat sheet content
4. Build POE dashboard with external tool links

## Development Environment Ready 🚀
- **Local Server**: http://localhost:3000
- **GitHub**: https://github.com/mufasadb/beachys-poe-helper
- **Docker Hub**: callmebeachy/beachys-poe-helper

## Next Steps
   - League start checklist and copy-paste templates
   - Community cheat sheets section (from Google Sheets)
   - Leveling guide with acts/zones/quests
   - Atlas progression strategies

## Detailed Feature Breakdown

### AutoHotkey Scripts (ToS-Compliant Only)
- Download page with approved scripts only
- Scripts to include:
  - lutbot (approved automation)
  - Community-vetted scripts that don't violate ToS
  - Note: No flask macros (against ToS)

### Build Lists
- Search/filter UI for builds
- POE Ninja API integration for current meta builds
- Build categories: league starter, boss killer, mapper, etc.

### Item Filters
- Host popular filters (Neversink, others)
- Filter preview functionality
- Customization instructions
- Quick download links

### Inventory Search Templates
- Copy-paste search strings for trade site
- Movement speed boots with socket colors:
  - 3 blue (3b)
  - 3 green (3g) 
  - 3 red (3r)
  - 2 blue 1 green (2b1g)
  - 2 green 1 blue (2g1b)
  - 2 red 1 green (2r1g)
  - 2 green 1 red (2g1r)
- Research existing tools to reference or copy implementation

### Vendor Recipes Page
- Complete list from community spreadsheet
- Organized by category (currency, gems, equipment)
- Easy copy-paste format

### Research Tasks (before implementation)
- **Atlas Progression**: Research existing atlas guides, decide on format (interactive tree, static guide, step-by-step)
- **Leveling Guide**: Compare existing leveling resources, determine best presentation method
- **Inventory Search Tools**: Find existing tools to reference implementation

### Community Cheat Sheets (from spreadsheet)
- Display community content from Google Sheets
- League mechanics guides:
  - Settlers mechanics
  - Sanctum strategies  
  - Expedition optimization
  - Heist cheat sheet
  - Betrayal board setup
  - Delve biome farming
  - Incursion temple priorities

### POE Dashboard
- Categorized external tool links:
  - Information: POE Wiki, poedb
  - Trading: Official trade, Awakened POE Trade
  - Crafting: Craft of Exile
  - Build Planning: Path of Building, POB.party
  - Economy: POE Ninja

## AWS Deployment Planning
- Choose between App Runner (simplest), ECS with Fargate, or EC2
- Set up CI/CD pipeline with GitHub Actions
- Configure environment variables and secrets

## Feature Implementation Order
1. Static content first (scripts, filters, templates)
2. POE Dashboard with external links
3. Dynamic content (lab layouts, POE Ninja builds)
4. Community features and ad integration