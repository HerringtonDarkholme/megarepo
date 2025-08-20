# Roo Code - Code Mode Rules

This directory contains code mode-specific rules for Roo Code AI when working on code files in the megarepo AI setup repository.

## Rule Files

### TypeScript and AI Development
- **typescript-patterns.md** - Advanced TypeScript patterns for AI service development
- **ai-integration.md** - Production-ready AI service integration patterns and examples

## Usage

These rules are automatically applied when Roo Code is in code mode and working with source files. They complement the general workspace rules in the parent `/rules/` directory.

## Code Mode Focus

The rules in this directory are specifically designed for:
- Writing TypeScript/JavaScript code for AI integrations
- Implementing AI service clients and API routes
- Creating React components for AI user interfaces
- Handling streaming responses and error management
- Building production-ready AI applications

## Rule Application Order

Roo Code loads rules in this order:
1. Global rules (from `~/.roo/rules/` if configured)
2. Workspace general rules (from `.roo/rules/`)
3. Code mode-specific rules (from `.roo/rules-code/` - these files)

Files are read recursively and appended to the system prompt in alphabetical order based on filename.