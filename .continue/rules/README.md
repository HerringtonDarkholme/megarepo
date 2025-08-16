# Continue Rules for Megarepo

This directory contains rules for the Continue AI assistant extension when working on the Megarepo AI setup repository.

## About Continue

Continue is a VS Code extension that brings AI-powered coding assistance directly into your development environment. These rules provide instructions to the AI model for Agent, Chat, and Edit requests.

## Rules Structure

The rules are organized into focused files that build upon each other:

1. **`01-ai-development-core.md`** - Core AI development patterns and repository context
2. **`02-security-api-keys.md`** - Security guidelines and API key management practices  
3. **`03-code-quality.md`** - TypeScript, code quality, and development standards
4. **`04-project-structure.md`** - File organization and architecture patterns
5. **`05-documentation.md`** - Documentation requirements and standards

## How Continue Uses These Rules

Continue typically processes Markdown files in this directory, combining them into a unified set of rules. While numeric prefixes help organize the files in a logical sequence, actual processing order may depend on Continue's configuration and may not strictly follow the numeric order.

### Rule Activation

- **Always Applied Rules**: Core rules (`01-ai-development-core.md`, `02-security-api-keys.md`) are always active
- **File-Type Specific Rules**: Code quality rules (`03-code-quality.md`) apply to TypeScript/JavaScript files
- **Context-Aware Rules**: Project structure and documentation rules apply based on file context and glob patterns

## Customization

These rules are tailored specifically for the Megarepo AI setup repository and should be updated as the project evolves. The rules emphasize:

- **AI-First Development**: Patterns and practices optimized for AI service integrations
- **Security Best Practices**: Safe handling of API keys and sensitive data  
- **Code Quality**: TypeScript strict mode, proper error handling, and testing patterns
- **Project Organization**: Clear structure for AI-related code and components

## Usage with Continue

1. **Install Continue**: Add the Continue extension to VS Code
2. **Automatic Discovery**: Continue will automatically discover these rules when working in this repository
3. **Chat Integration**: Use Continue's chat feature to get context-aware assistance based on these rules
4. **Code Generation**: Generate code that follows the established patterns and best practices
5. **Rule Reference**: Ask Continue to explain or apply specific rules using natural language

## Example Continue Interactions

```
# Chat with AI about code structure
"How should I organize AI service integrations in this project?"

# Generate code following security patterns  
"Create an OpenAI client with proper error handling and API key management"

# Get help with testing
"Write tests for the AI service integration following the project patterns"
```

## Consistency with Other AI Assistants

These rules are designed to work alongside other AI assistant configurations in this repository:

- GitHub Copilot (`.github/copilot-instructions.md`)
- Cline AI (`.clinerules/`)
- Cursor AI (`.cursor/` and `.cursorrules`)
- Windsurf AI (`.windsurf/rules/`)
- Trae AI (`.trae/rules/`)
- JetBrains Junie (`.junie/`)
- Kiro AI (`.kiro/steering/`)
- Claude AI (`CLAUDE.md`)
- Gemini CLI (`GEMINI.md`)
- Universal AI guidelines (`AGENT.md`, `AGENTS.md`)

All configurations share common principles while being optimized for each assistant's specific capabilities.

## Contributing

When updating these rules:

1. **Maintain Consistency**: Ensure new rules align with existing AI assistant configurations
2. **Follow Patterns**: Use the established structure and formatting conventions
3. **Test Changes**: Verify rules work as expected with Continue's AI interactions
4. **Document Updates**: Update this README when adding new rule files
5. **Consider Impact**: Changes should enhance AI assistance without overwhelming the model

## Continue Documentation

For more information about Continue and rule syntax, see:
- [Continue Official Documentation](https://continue.dev/docs)
- [Rules Configuration Guide](https://continue.dev/docs/how-to-create-rules)
- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Continue.continue)