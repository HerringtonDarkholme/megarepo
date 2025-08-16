# Windsurf Rules for Megarepo

This directory contains workspace-level rules for Windsurf AI to follow when working on the megarepo AI setup repository.

## Rule Files

### Always On Rules (Applied Continuously)
- **ai-development-core.md** - Core AI development guidelines and repository context
- **security-api-keys.md** - Security guidelines and API key management practices

### Glob Pattern Rules (File-Type Specific)
- **typescript-javascript.md** - Applied to `**/*.{ts,tsx,js,jsx}` files
- **documentation-standards.md** - Applied to `**/*.md` files

### Model Decision Rules (Context-Aware)
- **testing-ai-components.md** - Applied when working on testing strategies or test files

### Manual Rules (On-Demand)
- **ai-optimization.md** - Use `@ai-optimization` for advanced performance optimization

## Usage

Windsurf automatically discovers and applies these rules based on their activation modes. The rules complement the existing AI agent configurations in the repository:

- `.cursorrules` - Cursor AI development rules
- `CLAUDE.md` - Claude-specific instructions
- `AGENT.md` - Universal AI agent instructions
- `.github/copilot-instructions.md` - GitHub Copilot guidelines

## Rule Design Principles

- Keep rules simple, concise, and specific to AI development
- Use XML tags to group related guidelines
- Format with bullet points and markdown for clarity
- Focus on AI-specific patterns rather than generic coding advice
- Maintain consistency with existing repository patterns