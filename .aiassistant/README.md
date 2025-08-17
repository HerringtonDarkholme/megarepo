# JetBrains AI Assistant Configuration for Megarepo

This directory contains configuration files for JetBrains AI Assistant to follow when working on the Megarepo AI setup repository.

## Configuration Structure

### Rules Directory
- **`rules/`** - Contains modular rules for different development contexts and patterns

## How JetBrains AI Assistant Uses These Rules

JetBrains AI Assistant reads the rules in this directory to understand:
- Project-specific coding conventions and style preferences
- AI development patterns and best practices
- Security requirements for API key management
- File organization and architecture standards
- Testing and documentation requirements

## Integration with Other AI Assistants

These rules are designed to work alongside other AI assistant configurations in this repository:
- GitHub Copilot (`.github/copilot-instructions.md`)
- Claude AI (`CLAUDE.md`)
- Cursor AI (`.cursorrules`, `.cursor/`)
- Windsurf AI (`.windsurf/`)
- Cline AI (`.clinerules/`)
- Kiro AI (`.kiro/`)
- JetBrains Junie (`.junie/`)
- Gemini CLI (`GEMINI.md`)
- Universal AI guidelines (`AGENT.md`, `AGENTS.md`)

All configurations share common principles while being optimized for each assistant's specific capabilities and interaction patterns.

## Customization

The rules are tailored specifically for the Megarepo AI setup repository and emphasize:

- **Minimal Changes**: Surgical, precise modifications that respect the repository's intentional simplicity
- **AI-First Development**: Patterns and practices optimized for AI service integrations
- **Security Best Practices**: Safe handling of API keys and sensitive data
- **Node.js/Next.js Patterns**: Guidelines specific to the target technology stack

Update the rules as the project evolves to maintain consistency with the repository's development patterns and requirements.