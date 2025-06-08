# Technical Notes

## Architecture Overview
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with POE-themed colors
- **Deployment**: Docker container on AWS
- **Testing**: Jest with React Testing Library

## Project Structure
```
/app              # Next.js app directory
  /api           # API routes for dynamic content
  layout.tsx     # Root layout with metadata
  page.tsx       # Homepage with feature cards
/components      # Reusable React components
/public          # Static assets
  /scripts       # AutoHotkey scripts
  /filters       # POE item filters
  /images        # Community images and resources
```

## Key Design Decisions

### Static File Hosting
- Scripts and filters stored in `/public` directory
- Direct download links via Next.js static file serving
- No database required for initial version

### POE Theme Colors
- Gold: `#C8AA6E` (primary accent)
- Dark: `#0C0E0D` (background)
- Red: `#A93226` (danger/important)
- Blue: `#1B5E7D` (links/secondary)

### Docker Configuration
- Multi-stage build for optimized image size
- Standalone output mode for self-contained deployment
- Non-root user for security

## External Integrations

### POE Ninja API
- Endpoint: `https://poe.ninja/api/data/`
- Rate limiting considerations
- Caching strategy needed

### Lab Layout Services
- poelab.com API or web scraping
- Daily update mechanism required

## Performance Considerations
- Static generation for most pages
- ISR (Incremental Static Regeneration) for dynamic content
- CDN for static assets on AWS

## Security Notes
- No API keys in repository
- Environment variables for sensitive data
- CORS configuration for API routes