# Gemini CLI Configuration

This document provides a comprehensive guide to configuring Google's Gemini CLI for AI development workflows. This information is based on the official [Gemini CLI documentation](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/configuration.md).

## Overview

Gemini CLI is Google's command-line interface for interacting with Gemini AI models. It provides powerful AI capabilities through an interactive chat interface with built-in tools for file operations, shell commands, and more.

## Installation

```bash
# Install via npm
npm install -g @google/gemini-cli

# Or using npx (no installation required)
npx @google/gemini-cli

# Or download from GitHub releases
# Visit: https://github.com/google-gemini/gemini-cli/releases
```

## Configuration Layers

Configuration is applied in the following order of precedence (higher numbers override lower):

1. **Default values** - Hardcoded defaults within the application
2. **User settings file** - Global settings for the current user (`~/.gemini/settings.json`)
3. **Project settings file** - Project-specific settings (`.gemini/settings.json`)
4. **System settings file** - System-wide settings (OS-dependent)
5. **Environment variables** - System or session-specific variables
6. **Command-line arguments** - Values passed when launching the CLI

## Settings Files

### File Locations

- **User settings**: `~/.gemini/settings.json`
- **Project settings**: `.gemini/settings.json` (in project root)
- **System settings**: OS-dependent location (see official docs)

### Available Settings in settings.json

The following settings are available in `settings.json`:

#### Core Settings

- **`theme`** (string): Visual theme for Gemini CLI
  - Default: `"Default"`
  - Example: `"GitHub"`, `"Dracula"`

- **`autoAccept`** (boolean): Auto-accept safe tool calls without confirmation
  - Default: `false`

- **`vimMode`** (boolean): Enable vim-style input editing
  - Default: `false`

- **`sandbox`** (boolean or string): Enable sandboxing for tool execution
  - Default: `false`
  - Values: `true`, `false`, `"docker"`, `"podman"`

#### Display Settings

- **`hideTips`** (boolean): Hide helpful tips in the CLI
  - Default: `false`

- **`hideBanner`** (boolean): Hide startup banner (ASCII art logo)
  - Default: `false`

- **`showLineNumbers`** (boolean): Show line numbers in code blocks
  - Default: `true`

#### Session Settings

- **`maxSessionTurns`** (number): Maximum turns per session
  - Default: `-1` (unlimited)

- **`usageStatisticsEnabled`** (boolean): Enable usage statistics collection
  - Default: `true`

#### File and Tool Settings

- **`fileFiltering`** (object): Control git-aware file filtering
  ```json
  {
    "respectGitIgnore": true,
    "enableRecursiveFileSearch": true
  }
  ```

- **`coreTools`** (array): Specify allowed core tools
  - Example: `["ReadFileTool", "GlobTool", "ShellTool(ls)"]`

- **`excludeTools`** (array): Specify tools to exclude
  - Example: `["run_shell_command", "findFiles"]`

#### Context Files

- **`contextFileName`** (string or array): Filename for context files
  - Default: `"GEMINI.md"`
  - Example: `"AGENTS.md"` or `["GEMINI.md", "CONTEXT.md"]`

#### Advanced Settings

- **`telemetry`** (object): Configure telemetry collection
  ```json
  {
    "enabled": false,
    "target": "local",
    "otlpEndpoint": "http://localhost:4317",
    "logPrompts": true
  }
  ```

- **`checkpointing`** (object): Configure conversation checkpointing
  ```json
  {
    "enabled": false
  }
  ```

- **`preferredEditor`** (string): Editor for viewing diffs
  - Default: `"vscode"`

### Example settings.json

```json
{
  "theme": "GitHub",
  "autoAccept": false,
  "vimMode": false,
  "sandbox": false,
  "hideTips": false,
  "hideBanner": false,
  "usageStatisticsEnabled": true,
  "showLineNumbers": true,
  "maxSessionTurns": -1,
  "fileFiltering": {
    "respectGitIgnore": true,
    "enableRecursiveFileSearch": true
  },
  "telemetry": {
    "enabled": false,
    "target": "local",
    "otlpEndpoint": "http://localhost:4317",
    "logPrompts": true
  },
  "checkpointing": {
    "enabled": false
  },
  "preferredEditor": "vscode"
}
```

## Environment Variables

The CLI automatically loads environment variables from `.env` files in this order:

1. `.env` in current working directory
2. Parent directories (searching upward to project root or home)
3. `~/.env` in user's home directory

### Required Variables

- **`GEMINI_API_KEY`** (Required): Your Gemini API key
  - Get from: https://aistudio.google.com/app/apikey

### Optional Variables

- **`GEMINI_MODEL`**: Override default model
  - Example: `gemini-2.0-flash-exp`, `gemini-1.5-pro`

- **`GOOGLE_API_KEY`**: Google Cloud API key (for Vertex AI express mode)

- **`GOOGLE_CLOUD_PROJECT`**: Google Cloud Project ID

- **`GOOGLE_APPLICATION_CREDENTIALS`**: Path to credentials JSON file

- **`GOOGLE_CLOUD_LOCATION`**: Google Cloud region (e.g., `us-central1`)

- **`GEMINI_SANDBOX`**: Enable sandboxing
  - Values: `true`, `false`, `docker`, `podman`

- **`DEBUG`**: Enable debug logging
  - Set to `true` or `1`

- **`NO_COLOR`**: Disable color output
  - Set to any value

## Command-Line Usage

### Basic Commands

```bash
# Start interactive session
gemini

# Run with specific model
gemini --model gemini-1.5-pro

# One-time prompt (non-interactive)
gemini --prompt "Explain quantum computing"

# Interactive session with initial prompt
gemini --prompt-interactive "Help me debug this code"

# Enable sandbox mode
gemini --sandbox

# Auto-approve all tool calls (YOLO mode)
gemini --yolo

# Set approval mode
gemini --approval-mode auto_edit
```

### Useful Flags

- **`--model <name>`** or **`-m <name>`**: Specify model
- **`--sandbox`** or **`-s`**: Enable sandboxing
- **`--debug`** or **`-d`**: Enable debug mode
- **`--all-files`** or **`-a`**: Include all files as context
- **`--yolo`**: Auto-approve all tool calls
- **`--approval-mode <mode>`**: Set approval mode
- **`--help`** or **`-h`**: Show help

## Context Files (Memory)

Context files provide instructions and background information to the AI model.

### Default Context File

By default, the CLI looks for `GEMINI.md` files to use as context:

- Global: `~/.gemini/GEMINI.md`
- Project: `./GEMINI.md` and in parent directories
- Local: `GEMINI.md` files in subdirectories

### Example GEMINI.md

```markdown
# Project Context

## Coding Standards
- Use TypeScript for all new code
- Follow ESLint configuration
- Write JSDoc comments for public APIs

## Project Structure
- `src/` - Source code
- `tests/` - Test files
- `docs/` - Documentation

## Specific Instructions
- When reviewing code, focus on performance and security
- Suggest modern JavaScript/TypeScript patterns
- Always include error handling
```

### Memory Commands

```bash
# Refresh context files
/memory refresh

# Show current context
/memory show
```

## Best Practices

### Security
- Always use environment variables for API keys
- Never commit `.env` files with real keys
- Use project-specific `.env` files for different environments

### Configuration
- Start with basic configuration and add settings as needed
- Use project-specific settings for team collaboration
- Document custom settings in your project README

### Context Files
- Create meaningful `GEMINI.md` files for better AI responses
- Include coding standards and project conventions
- Keep context relevant and up-to-date

## Troubleshooting

### Common Issues

1. **Missing API Key**: Ensure `GEMINI_API_KEY` is set
2. **Model Not Found**: Check if model name is correct
3. **Permission Denied**: Verify API key permissions
4. **Sandbox Issues**: Ensure Docker is installed and running

### Debug Mode

Enable debug logging for troubleshooting:

```bash
# Command line
gemini --debug

# Environment variable
export DEBUG=true
gemini

# In settings.json (not a direct setting, but enable telemetry)
{
  "telemetry": {
    "enabled": true,
    "logPrompts": true
  }
}
```

## Integration Examples

### VS Code

Add to your VS Code workspace settings:

```json
{
  "terminal.integrated.env.linux": {
    "GEMINI_API_KEY": "${env:GEMINI_API_KEY}"
  },
  "terminal.integrated.env.osx": {
    "GEMINI_API_KEY": "${env:GEMINI_API_KEY}"
  },
  "terminal.integrated.env.windows": {
    "GEMINI_API_KEY": "${env:GEMINI_API_KEY}"
  }
}
```

### GitHub Actions

```yaml
name: AI Code Review
on: [pull_request]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install Gemini CLI
        run: npm install -g @google/gemini-cli
      
      - name: AI Review
        run: |
          gemini --prompt "Review the changes in this PR for security and best practices"
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
```

## See Also

- [Official Gemini CLI Repository](https://github.com/google-gemini/gemini-cli)
- [Gemini API Documentation](https://ai.google.dev/docs)
- [Google AI Studio](https://aistudio.google.com/)
- [Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs)