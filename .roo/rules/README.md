# Roo Code Rules for Megarepo

This directory contains workspace-wide rules for Roo Code AI to follow when working on the megarepo AI setup repository.

## How Roo Code Uses These Rules

Roo Code automatically applies these rules as custom instructions when developers work within this project workspace. The rules define coding standards, best practices, and guidelines specific to AI development in this repository.

## Rule Organization

### General Workspace Rules (`/rules/`)
- **01-ai-development-core.md** - Core AI development guidelines and repository context
- **02-security-api-keys.md** - API key management and security practices for AI services
- **03-code-quality.md** - TypeScript/JavaScript coding standards for AI projects
- **04-project-structure.md** - File organization and architecture patterns
- **05-documentation.md** - Documentation requirements for AI integrations

### Code Mode Rules (`/rules-code/`)
- **typescript-patterns.md** - TypeScript-specific patterns for AI development
- **ai-integration.md** - Code-specific AI service integration patterns

## Rule Design Principles

- **AI-First Development**: All rules prioritize AI integration patterns and best practices
- **Minimal Changes**: Guidelines emphasize surgical, precise modifications
- **Security Focus**: Comprehensive API key and secret management practices
- **Consistency**: Aligned with existing AI tool configurations in this repository
- **Node.js/Next.js**: Optimized for the repository's target technology stack

## Integration with Other AI Tools

These rules complement existing AI assistant configurations:
- `.cursor/rules/` - Cursor AI workspace rules
- `.continue/rules/` - Continue AI development rules
- `.windsurf/rules/` - Windsurf AI guidelines
- `.amazonq/rules/` - Amazon Q Developer rules
- `AGENT.md` - Universal AI agent instructions
- `CLAUDE.md` - Claude-specific guidelines

## Usage

Roo Code will automatically discover and apply these rules when working within the project workspace. Rules are loaded in order:

1. Global rules (from `~/.roo/rules/`) - if configured
2. Workspace rules (from `.roo/rules/`) - these files
3. Mode-specific rules (from `.roo/rules-code/`) - for code mode

Files are read recursively and appended to the system prompt in alphabetical order based on filename.