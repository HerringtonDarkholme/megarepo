# OpenCode Configuration Directory

This directory can be used for OpenCode-specific customizations including:

- **agents/** - Custom agent definitions
- **commands/** - Custom command implementations
- **modes/** - Custom operational modes
- **plugins/** - Custom plugins and extensions

## Usage

Files placed in this directory will be automatically loaded by OpenCode when it starts in this project.

## Configuration Precedence

The `.opencode` directory is part of OpenCode's configuration precedence system:

1. Remote config (from `.well-known/opencode`)
2. Global config (`~/.config/opencode/opencode.json`)
3. Custom config (`OPENCODE_CONFIG` env var)
4. Project config (`opencode.json` in project root)
5. **`.opencode` directories** - agents, commands, plugins
6. Inline config (`OPENCODE_CONFIG_CONTENT` env var)

## Documentation

For more information, see:
- [OpenCode Configuration Docs](https://opencode.ai/docs/config/)
- [OpenCode Rules Docs](https://opencode.ai/docs/rules/)
