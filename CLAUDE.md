# Claude Code Guidelines for Beachy's POE Helper

## Project Description
Beachy's POE Helper is a comprehensive Path of Exile assistant application designed to provide essential tools and resources for players at league start and throughout their gameplay. The application serves as a centralized hub for:

- **AutoHotkey Scripts**: Host and distribute AHK scripts for common POE tasks with easy download functionality
- **Build Management**: Display and organize build lists (potentially integrating with POE Ninja for dynamic updates)
- **Item Filters**: Host and manage popular loot filters for easy access
- **League Start Templates**: Provide copy-paste templates for common league start setups
- **POE Dashboard**: Central hub linking to essential external tools and resources
- **Lab Layouts**: Display daily labyrinth layouts for efficient farming
- **Community Resources**: Curated collection of helpful tips, guides, and images from the POE community
- **Monetization**: Subtle ad integration to support hosting costs

The application aims to consolidate frequently-used POE tools and resources that players typically bookmark or search for at each league start, providing a streamlined experience for both new and veteran players.

## Technical Architecture
- **Frontend**: Modern web application with responsive design
- **Backend**: API for serving scripts, filters, and dynamic content
- **Storage**: File hosting for scripts, filters, and static resources
- **Deployment**: Containerized application deployed on AWS (EC2/ECS/App Runner)
- **External Integrations**: POE Ninja API for build data, potential integration with lab layout services

## Partnership Approach
Claude Code should act as a thoughtful development partner, not just executing instructions blindly. Always:
- Critically evaluate each task for context and potential unintended impacts
- Ask clarifying questions when requirements are unclear or seem problematic
- Consider how changes fit within the broader application architecture
- Start every task by crafting a todo list to clarify intentions and next steps

## Test-Driven Development (TDD)
All development must follow TDD principles:
- Write tests before implementing features
- Maintain a main line of end-to-end tests for smoke testing and regression prevention
- Update e2e tests when relevant to new features
- No feature is considered complete until tests pass

## Implementation Standards
- Consider upcoming work during implementation but avoid leaving TODO comments in code
- Avoid mocking data unless explicitly instructed
- Write production-ready code, not placeholders
- Follow existing code patterns and conventions

## Technical Documentation
Maintain a `tech-notes.md` file that:
- Collects technical implementation details as the codebase grows
- Documents architectural decisions, patterns, and implementation specifics
- Serves as a reference for complex technical aspects
- Keeps technical details separate from CLAUDE.md
- Should be updated continuously as features are developed

## Task Management
Maintain a `current-todo.md` file that:
- Contains detailed documentation of current and upcoming actions
- Provides continuity in case of disconnection or context switches
- Helps maintain focus on the current task flow
- Should be updated in real-time as tasks progress
- Includes both immediate next steps and broader project goals

## Feature Completion
- Before pushing confirm that no api keys are going into the repo, update git ignore if need be
- Commit and push all completed features to GitHub
- Ensure Docker images are built and pushed to Docker Hub

### Documentation Requirements
README must include:
- Environment variables and configuration
- AWS deployment instructions
- Port mappings and networking requirements

## Commands
- Test command: `npm test`
- Lint command: `npm run lint`
- Build command: `npm run build`
- Dev server: `npm run dev`
