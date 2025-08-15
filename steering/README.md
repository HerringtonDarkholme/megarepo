# Kiro Steering Files

This directory contains steering files for the Kiro AI system. These files control the behavior, configuration, and prompt templates for AI interactions.

## Files Overview

### `kiro.config.json`
Main configuration file in JSON format containing:
- Model settings (provider, model name, parameters)
- Behavior configuration (safety level, response style)
- Tool permissions and whitelists
- Prompt file references

### `steering/config.yaml`
Detailed YAML configuration with:
- Model parameters (temperature, tokens, etc.)
- Safety and content filtering settings
- Context and memory management
- Tool access controls
- Output formatting preferences

### `steering/system.md`
System prompt defining:
- Core principles for AI behavior
- Response guidelines and format
- Code review focus areas
- Professional standards

### `steering/user_template.md`
Template for structuring user requests with:
- Context fields (project, task type, priority)
- User message placeholder
- Output format specifications
- Constraint definitions

## Usage

These steering files work together to:
1. Configure the AI model's behavior and parameters
2. Define safety and content filtering rules
3. Structure interactions through prompt templates
4. Control tool access and permissions
5. Ensure consistent, high-quality responses

## Configuration

To modify AI behavior:
1. Update model parameters in `kiro.config.json` or `steering/config.yaml`
2. Adjust system prompts in `steering/system.md`
3. Customize user interaction templates in `steering/user_template.md`
4. Configure tool permissions in the configuration files

## Security

- Tool access is restricted to safe operations
- Content filtering is enabled by default
- PII and bias detection are active
- System commands and network access are restricted