# Gemini CLI Configuration

This document describes how to configure the Google Gemini CLI for optimal AI development workflows.

## Overview

The Gemini CLI is Google's command-line interface for interacting with Gemini AI models. It provides a powerful way to integrate AI capabilities into your development workflow.

## Installation

```bash
# Install Gemini CLI via npm
npm install -g @google/gemini-cli

# Or install locally in your project
npm install @google/gemini-cli
```

## Configuration Files

### settings.json

The primary configuration file for Gemini CLI is `settings.json`. This file should be placed in your project root or in a `.gemini` directory.

**Location Options:**
- `./settings.json` (project root)
- `./.gemini/settings.json` (project-specific)
- `~/.gemini/settings.json` (global user settings)

### Available Settings in settings.json

```json
{
  "apiKey": "${GEMINI_API_KEY}",
  "model": "gemini-pro",
  "temperature": 0.7,
  "maxTokens": 1024,
  "topP": 0.9,
  "topK": 40,
  "safetySettings": {
    "harassment": "BLOCK_MEDIUM_AND_ABOVE",
    "hateSpeech": "BLOCK_MEDIUM_AND_ABOVE", 
    "sexuallyExplicit": "BLOCK_MEDIUM_AND_ABOVE",
    "dangerousContent": "BLOCK_MEDIUM_AND_ABOVE"
  },
  "outputFormat": "json",
  "verbose": false,
  "timeout": 30000,
  "retryAttempts": 3,
  "logLevel": "info"
}
```

#### Configuration Options

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `apiKey` | string | - | Your Gemini API key (use environment variable) |
| `model` | string | "gemini-pro" | Model to use (gemini-pro, gemini-pro-vision) |
| `temperature` | number | 0.7 | Controls randomness (0.0-1.0) |
| `maxTokens` | number | 1024 | Maximum tokens in response |
| `topP` | number | 0.9 | Nucleus sampling parameter |
| `topK` | number | 40 | Top-k sampling parameter |
| `safetySettings` | object | - | Content safety filters |
| `outputFormat` | string | "json" | Output format (json, text, markdown) |
| `verbose` | boolean | false | Enable verbose logging |
| `timeout` | number | 30000 | Request timeout in milliseconds |
| `retryAttempts` | number | 3 | Number of retry attempts |
| `logLevel` | string | "info" | Logging level (debug, info, warn, error) |

## Environment Variables

Create a `.env` file in your project root:

```bash
# Gemini API Configuration
GEMINI_API_KEY=your_api_key_here
GEMINI_MODEL=gemini-pro
GEMINI_TEMPERATURE=0.7
```

## Usage Examples

### Basic Text Generation

```bash
# Generate text with default settings
gemini generate "Write a hello world function in Python"

# Generate with custom temperature
gemini generate "Explain quantum computing" --temperature 0.3

# Use specific model
gemini generate "Create a poem" --model gemini-pro-vision
```

### Configuration Override

```bash
# Override settings via command line
gemini generate "Hello" --max-tokens 500 --temperature 0.9

# Use custom config file
gemini generate "Hello" --config ./custom-settings.json
```

### Batch Processing

```bash
# Process multiple prompts from file
gemini batch --input prompts.txt --output responses.json

# Generate with custom format
gemini generate "Explain AI" --format markdown
```

## Best Practices

1. **Security**: Always use environment variables for API keys
2. **Model Selection**: Choose appropriate model for your use case
3. **Temperature**: Lower values (0.1-0.3) for factual content, higher (0.7-0.9) for creative
4. **Safety**: Configure safety settings based on your application needs
5. **Timeouts**: Set appropriate timeouts for your network conditions
6. **Logging**: Enable verbose mode for debugging

## Troubleshooting

### Common Issues

1. **Authentication Error**: Verify your API key is correct and has proper permissions
2. **Rate Limiting**: Implement retry logic and respect rate limits
3. **Model Unavailable**: Check if the specified model is available in your region
4. **Timeout Issues**: Increase timeout values for complex requests

### Debug Mode

Enable debug logging to troubleshoot issues:

```json
{
  "logLevel": "debug",
  "verbose": true
}
```

## Integration with Development Workflow

### VS Code Integration

Create `.vscode/settings.json` for VS Code integration:

```json
{
  "gemini.apiKey": "${env:GEMINI_API_KEY}",
  "gemini.model": "gemini-pro",
  "gemini.autoComplete": true
}
```

### Git Integration

Add to `.gitignore`:

```
# Gemini CLI
.gemini/cache/
gemini-responses/
*.gemini-log
```

## Advanced Configuration

### Custom Prompts

Create a `prompts/` directory with reusable prompts:

```
prompts/
├── code-review.md
├── documentation.md
└── translation.md
```

### Workflow Automation

Example GitHub Actions workflow:

```yaml
name: AI Code Review
on: [pull_request]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: AI Review
        run: |
          gemini generate "Review this code change" \
            --input diff.txt \
            --config .gemini/review-settings.json
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
```

## See Also

- [Gemini API Documentation](https://ai.google.dev/docs)
- [Authentication Guide](https://ai.google.dev/docs/authentication)
- [Model Capabilities](https://ai.google.dev/models/gemini)