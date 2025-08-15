# Gemini CLI Documentation

This directory contains documentation and configuration files for Google's Gemini CLI.

## Files

- **[configuration.md](./configuration.md)** - Comprehensive guide to Gemini CLI configuration
- **[settings.json](./settings.json)** - Example settings.json file with common configuration options

## Quick Reference

### Essential Configuration
- API Key: Set `GEMINI_API_KEY` environment variable
- Model: Choose between `gemini-pro`, `gemini-pro-vision`
- Temperature: Control creativity (0.0-1.0)
- Safety Settings: Configure content filtering

### Usage
```bash
# Basic usage with default settings
gemini generate "Your prompt here"

# Custom configuration
gemini generate "Your prompt" --config ./settings.json
```

For detailed information, see [configuration.md](./configuration.md).