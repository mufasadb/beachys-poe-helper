# Beachy's POE Helper

A comprehensive Path of Exile assistant application providing essential tools and resources for league start and beyond.

## Features

- **AutoHotkey Scripts**: Download common POE automation scripts
- **Build Lists**: Browse and manage character builds
- **Item Filters**: Access popular loot filters
- **League Start Templates**: Copy-paste configs for quick setup
- **POE Dashboard**: Links to essential external tools
- **Lab Layouts**: Daily labyrinth layouts
- **Community Resources**: Tips, guides, and helpful images

## Deployment (AWS)

### Docker Configuration

**Environment Variables:**
```
NODE_ENV=production
PORT=3000
```

### AWS Deployment Options

#### Option 1: AWS App Runner (Recommended for simplicity)
- Automatic scaling
- Built-in load balancing
- Direct Docker Hub integration

#### Option 2: ECS with Fargate
- More control over resources
- Cost-effective for consistent traffic

#### Option 3: EC2 with Docker
- Full control
- Most cost-effective for small deployments

### Installation

1. Docker image available at:
   ```
   callmebeachy/beachys-poe-helper:latest
   ```

2. Configure your chosen AWS service with the environment variables above

3. Set up appropriate security groups for port 3000

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## License

MIT