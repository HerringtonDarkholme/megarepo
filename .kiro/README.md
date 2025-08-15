# Kiro AI Configuration

This directory contains the Kiro AI configuration and steering files for the megarepo project.

## Structure

### `.kiro/steering/`
Contains markdown files with YAML frontmatter that define AI behavior and guidelines:

- **`ai-configuration.md`** - Core AI principles and behavior settings
- **`development-workflow.md`** - Development process and workflow guidelines  
- **`code-quality.md`** - Code quality standards and best practices

#### Frontmatter Options
- `inclusion: always` - Apply to all contexts
- `inclusion: fileMatch` with `fileMatchPattern` - Apply only to matching files

### `.kiro/settings/`
Contains JSON configuration files:

- **`mcp.json`** - Model Context Protocol server configuration and tool permissions

### `.kiro/hooks/`
Directory for workflow hooks (currently empty)

### `.kiro/specs/`
Directory for specifications (currently empty)

## Usage

The Kiro AI system automatically reads these configuration files to:

1. **Behavior Control** - Define how the AI responds and interacts
2. **Tool Access** - Configure which tools and operations are allowed
3. **Context Awareness** - Apply different rules based on file types and patterns
4. **Safety Controls** - Implement content filtering and security measures

## Customization

To modify AI behavior:

1. **Edit steering files** in `.kiro/steering/` to change guidelines and principles
2. **Update settings** in `.kiro/settings/mcp.json` for tool permissions and safety controls
3. **Add new steering files** with appropriate frontmatter for specific contexts
4. **Configure file patterns** to apply different rules to different file types

## File Format

Steering files use markdown with YAML frontmatter:

```markdown
---
inclusion: always
# or
inclusion: fileMatch
fileMatchPattern: '**/*.js'
---

# Steering Content
Your steering guidelines here...
```

Settings files use standard JSON format for configuration options.