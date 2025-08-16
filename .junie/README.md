# JetBrains Junie Configuration for Megarepo

This directory contains configuration files for JetBrains Junie AI assistant to follow when working on the Megarepo AI setup repository.

## Configuration Files

### Guidelines
- **`guidelines.md`** - Comprehensive coding style, best practices, and AI development guidelines for Junie to follow when generating code

## How JetBrains Junie Uses These Guidelines

JetBrains Junie reads the `guidelines.md` file to understand:
- Project-specific coding conventions and style preferences
- AI development patterns and best practices
- Security requirements for API key management
- File organization and architecture standards
- Testing and documentation requirements

## Integration with Other AI Assistants

These guidelines are designed to work alongside other AI assistant configurations in this repository:
- GitHub Copilot (`.github/copilot-instructions.md`)
- Claude AI (`CLAUDE.md`)
- Cursor AI (`.cursorrules`, `.cursor/`)
- Windsurf AI (`.windsurf/`)
- Cline AI (`.clinerules/`)
- Kiro AI (`.kiro/`)
- Gemini CLI (`GEMINI.md`)
- Universal AI guidelines (`AGENT.md`, `AGENTS.md`)

All configurations share common principles while being optimized for each assistant's specific capabilities and interaction patterns.

## Customization

The guidelines are tailored specifically for the Megarepo AI setup repository and emphasize:

- **Minimal Changes**: Surgical, precise modifications that respect the repository's intentional simplicity
- **AI-First Development**: Patterns and practices optimized for AI service integrations
- **Security Best Practices**: Safe handling of API keys and sensitive data
- **Node.js/Next.js Patterns**: Guidelines specific to the target technology stack

Update the `guidelines.md` file as the project evolves to maintain consistency with the repository's development patterns and requirements.