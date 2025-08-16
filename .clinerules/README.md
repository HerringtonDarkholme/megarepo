# Cline Rules for Megarepo

This directory contains Cline Rules that provide system-level guidance for the Cline AI assistant when working on this AI setup repository.

## Rules Structure

The rules are organized into focused files that build upon each other:

1. **`01-core-principles.md`** - Fundamental principles including minimal change philosophy and AI-first development
2. **`02-development.md`** - Development guidelines for Node.js/Next.js AI projects  
3. **`03-documentation.md`** - Documentation requirements and standards
4. **`04-security.md`** - Security guidelines for AI projects and API key management

## How Cline Uses These Rules

Cline automatically processes all Markdown files in this directory, combining them into a unified set of rules. The numeric prefixes help organize the files in a logical sequence, ensuring core principles are established before specific guidelines.

## Customization

These rules are tailored specifically for the Megarepo AI setup repository and should be updated as the project evolves. The rules emphasize:

- **Minimal Changes**: Surgical, precise modifications that respect the repository's intentional simplicity
- **AI-First Development**: Patterns and practices optimized for AI service integrations
- **Security Best Practices**: Safe handling of API keys and sensitive data
- **Node.js/Next.js Patterns**: Guidelines specific to the target technology stack

## Rules Bank Approach

This repository follows the "active rules" pattern where the `.clinerules/` directory contains only the rules that should be active. For projects with multiple contexts, consider creating a `clinerules-bank/` directory with additional rule sets that can be activated as needed.

## Consistency with Other AI Assistants

These rules are designed to work alongside other AI assistant configurations in this repository:
- GitHub Copilot (`.github/copilot-instructions.md`)
- Claude AI (`CLAUDE.md`)
- Cursor AI (`.cursorrules`)
- Gemini CLI (`GEMINI.md`)
- Universal AI guidelines (`AGENT.md`, `AGENTS.md`)

All configurations share common principles while being optimized for each assistant's specific capabilities.