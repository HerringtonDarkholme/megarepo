# OpenHands Configuration

This repository includes an OpenHands configuration file located at `~/.openhands/config.toml`.

## Configuration Location

The OpenHands configuration has been created at:
- **Global Configuration**: `~/.openhands/config.toml`

This configuration file includes all major sections:
- `[core]` - Core OpenHands settings including workspace, debugging, and task management
- `[llm]` - Language model configuration for API settings and model parameters  
- `[agent]` - Agent behavior configuration including function calling and browsing
- `[sandbox]` - Sandbox environment settings for container execution
- `[security]` - Security settings including confirmation mode

## Usage

The configuration file uses sensible defaults and can be customized based on your specific needs:

1. **API Keys**: Add your LLM provider API keys to the `[llm]` section
2. **Model Selection**: Modify the `model` parameter to use different LLM models
3. **Security**: Enable `confirmation_mode` in the `[security]` section for additional safety
4. **Debugging**: Set `debug = true` in the `[core]` section for verbose logging

## Documentation

For complete configuration options and details, refer to the OpenHands documentation:
- Configuration Guide: https://docs.all-hands.dev/modules/usage/configuration

## File Structure

```
~/.openhands/
└── config.toml    # Main OpenHands configuration file
```

The configuration follows the TOML format and includes comprehensive comments explaining each setting.