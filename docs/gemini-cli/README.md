# Gemini CLI Documentation

This directory contains documentation and configuration files for Google's Gemini CLI.

## Files

- **[configuration.md](./configuration.md)** - Comprehensive guide to Gemini CLI configuration based on official documentation
- **[settings.json](./settings.json)** - Example settings.json file with valid configuration options

## Quick Setup

1. **Install Gemini CLI**:
   ```bash
   npm install -g @google/gemini-cli
   ```

2. **Set up API key**:
   ```bash
   cp .env.example .env
   # Edit .env and add your GEMINI_API_KEY
   ```

3. **Start using**:
   ```bash
   # Interactive mode
   gemini
   
   # One-time prompt
   gemini --prompt "Your question here"
   ```

## Essential Configuration

### Environment Variables
- **API Key**: Set `GEMINI_API_KEY` environment variable (required)
- **Model**: Set `GEMINI_MODEL` (optional, defaults to latest)
- **Sandbox**: Set `GEMINI_SANDBOX=true` for safer execution

### Settings File
Copy the example `settings.json` to `.gemini/settings.json` in your project and customize:

```json
{
  "theme": "GitHub",
  "autoAccept": false,
  "sandbox": false,
  "showLineNumbers": true
}
```

### Context Files
Create a `GEMINI.md` file in your project root with instructions for the AI:

```markdown
# Project Context
- Use TypeScript for all code
- Follow ESLint configuration
- Include error handling
```

## Common Commands

```bash
# Start interactive session
gemini

# Use specific model
gemini --model gemini-1.5-pro

# Enable sandbox for safety
gemini --sandbox

# Auto-approve safe operations
gemini --approval-mode auto_edit

# Include all files as context
gemini --all-files
```

For detailed information, see [configuration.md](./configuration.md).