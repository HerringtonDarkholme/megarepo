# Antigravity Workspace Rules for Megarepo

This directory contains workspace-level rules for Google Antigravity to follow when working on the megarepo AI setup repository.

## About Antigravity Rules

Antigravity workspace rules enable precise control over how AI assistance is activated. Rules live in the `.agent/rules` folder of your workspace or git root.

Reference: https://antigravity.google/docs/skills

## Rule Activation Modes

### Always On
Rules that are continuously applied to all interactions. Use for core guidelines and best practices.

### Manual
Rules manually activated via @ mention in Agent's input box. Use for specialized features or advanced functionality.

### Model Decision
The model decides whether to apply the rule based on natural language descriptions. Use for context-aware assistance.

### Glob
Rules applied to files matching specific patterns (e.g., `*.js`, `src/**/*.ts`). Use for file-type specific guidance.

## Rule Files in This Directory

### Always On Rules
- **ai-development-core.md** - Core AI development guidelines and repository context
- **security-api-keys.md** - Security guidelines and API key management practices

### Manual Rules
- **ai-optimization.md** - Advanced performance optimization (@ai-optimization)

### Model Decision Rules
- **testing-ai-components.md** - Applied when working on testing strategies

### Glob Pattern Rules
- **typescript-javascript.md** - Applied to `**/*.{ts,tsx,js,jsx}` files
- **documentation-standards.md** - Applied to `**/*.md` files

## Usage

Antigravity automatically discovers and applies these rules based on their activation modes. The rules complement existing AI agent configurations in the repository:

- `.cursorrules` - Cursor AI development rules
- `CLAUDE.md` - Claude-specific instructions
- `AGENT.md` - Universal AI agent instructions
- `.github/copilot-instructions.md` - GitHub Copilot guidelines
- `.windsurf/rules/` - Windsurf workspace rules

## Rule Design Principles

- Keep rules simple, concise, and focused on AI development
- Use clear markdown formatting for readability
- Focus on AI-specific patterns and best practices
- Maintain consistency with existing repository standards
- Include activation mode clearly in each rule file
