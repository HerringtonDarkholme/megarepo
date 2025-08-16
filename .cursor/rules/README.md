# Cursor Project Rules

This directory contains modular, version-controlled rules for the Cursor AI editor specific to the Megarepo AI setup repository.

## Rule Organization

### Main Rules (Always Applied)
- **ai-development.mdc** - Core AI development patterns and best practices
- **security.mdc** - API key management and security guidelines  
- **code-quality.mdc** - TypeScript, testing, and code standards
- **project-structure.mdc** - File organization and architecture patterns

### Specialized Rules (Conditional Application)
- **prompt-engineering.mdc** - Manual rule for prompt templates (use `@prompt-engineering`)
- **testing-advanced.mdc** - Advanced testing patterns for AI applications

### Nested Rules (Domain-Specific)
- **api/ai-endpoints.mdc** - API route patterns for AI services
- **components/ai-ui.mdc** - React component patterns for AI interfaces

## Rule Types

| Rule | Type | Description |
|------|------|-------------|
| ai-development.mdc | Always | Applied to all AI development work |
| security.mdc | Always | Applied to all security-related files |
| code-quality.mdc | Always | Applied to all code files |
| project-structure.mdc | Auto Attached | Applied when working with project structure |
| prompt-engineering.mdc | Manual | Use `@prompt-engineering` to include |
| testing-advanced.mdc | Agent Requested | AI decides based on testing context |
| api/ai-endpoints.mdc | Auto Attached | Applied when working with API files |
| components/ai-ui.mdc | Auto Attached | Applied when working with component files |

## Usage

These rules replace the legacy `.cursorrules` file with a modular, maintainable system that:

- ✅ Provides focused, actionable guidance for specific development areas
- ✅ Supports hierarchical organization with nested rules
- ✅ Enables version control and collaborative rule management
- ✅ Uses glob patterns for targeted rule application
- ✅ Follows MDC format for metadata and content

## Adding New Rules

When adding new rules:
1. Create `.mdc` files with proper metadata headers
2. Use descriptive names that indicate the rule's purpose
3. Include appropriate `globs` for targeted application
4. Set `alwaysApply` based on rule importance
5. Keep rules focused and under 500 lines
6. Provide concrete examples and templates