---
name: Megarepo AI Setup Guide
globs: ["README.md", "docs/**/*.md"]
alwaysApply: false
description: Guidance for working with the Megarepo AI setup repository template
---

# Megarepo AI Setup Repository

When working with this repository, remember:

## Repository Context
- This is a minimal AI setup repository template 
- Currently contains only configuration files for various AI assistants
- No source code or build system exists yet
- Pre-configured for Node.js/Next.js development patterns

## Before Making Changes
- Always check repository state: `git status && ls -la`
- Verify package.json exists before running npm commands  
- This repository is in minimal template state

## AI Assistant Configurations
This repository includes configurations for:
- Continue AI (`.continue/rules/`)
- Cline AI (`.clinerules/`)
- Cursor AI (`.cursor/` and `.cursorrules`)
- Windsurf AI (`.windsurf/rules/`)
- GitHub Copilot (`.github/copilot-instructions.md`)
- And many others...

## Development Approach
- Follow AI-first development patterns
- Maintain consistency across AI assistant configurations
- Focus on minimal, surgical changes
- Prioritize AI integration best practices