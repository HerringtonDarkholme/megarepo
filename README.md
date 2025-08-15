# megarepo
A comprehensive repository with AI setup and configuration for various AI tools and services.

## AI Tools Configuration

### Gemini CLI
Google's command-line interface for interacting with Gemini AI models through an interactive chat interface.

- **Documentation**: [Gemini CLI Configuration](./docs/gemini-cli/configuration.md) - Complete setup guide based on official documentation
- **Settings**: [Example settings.json](./docs/gemini-cli/settings.json) - Valid configuration options
- **Environment**: [.env.example](./.env.example) - Environment variables template

#### Quick Setup
1. Install: `npm install -g @google/gemini-cli`
2. Copy `.env.example` to `.env` and add your `GEMINI_API_KEY`
3. Start: `gemini` for interactive mode or `gemini --prompt "Your question"`
4. Follow the [configuration guide](./docs/gemini-cli/configuration.md) for advanced setup

#### Key Features
- Interactive AI chat with file operations and shell commands
- Context-aware responses using `GEMINI.md` files
- Sandboxed execution for safety
- Built-in tools for code editing and analysis
- Configurable themes and behavior

## Getting Started

1. **Environment Setup**: Copy `.env.example` to `.env` and configure your API keys
2. **Choose your tools**: Review the documentation for each AI service
3. **Configure settings**: Customize configuration files based on your workflow

## Documentation

- [Gemini CLI Configuration](./docs/gemini-cli/configuration.md) - Complete guide to setting up and configuring Google's Gemini CLI
