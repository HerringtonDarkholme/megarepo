# AI Agent Instructions for Megarepo

**Universal instructions for AI agents working on the Megarepo AI setup repository.**

## Repository Overview

Megarepo is a minimal repository template designed for AI-related projects. It serves as a foundation for AI development with pre-configured setup files and guidelines for Node.js/Next.js AI applications.

**Current State**: Minimal setup repository with basic configuration files
- No source code or build system exists yet
- Pre-configured for Node.js/Next.js development patterns
- Designed to be expanded with AI-specific tooling and projects

## Core Principles for AI Agents

### 1. Minimal Change Philosophy
- Make the smallest possible changes to achieve objectives
- Respect the intentional simplicity of the repository
- Avoid unnecessary complexity or premature optimization
- Focus on surgical, precise modifications

### 2. Repository Awareness
- Always check current repository state before making changes
- Verify existence of package.json before running npm commands
- Understand the minimal nature - do not attempt builds/tests without source code
- Respect existing file patterns and structure

### 3. AI-Specific Considerations
- Prioritize security for API keys and sensitive data
- Never commit secrets or credentials
- Use environment variables for configuration
- Consider AI service integration patterns and best practices

## Working with This Repository

### Initial Assessment
Always start by understanding the current state:

```bash
# Check repository status
git status
ls -la

# Look for key files
test -f package.json && echo "Node.js project detected" || echo "No package.json found"
find . -type f -name "*.json" -o -name "*.js" -o -name "*.ts" -o -name "*.md"
```

### File Structure Guidelines
- **Root directory**: Configuration files and documentation
- **src/** (when added): Main source code directory
- **public/** (when added): Static assets
- **.env.example** (when needed): Environment variable templates
- **docs/** (when needed): Additional documentation

### Development Workflow

#### Before Making Changes
1. Verify current repository state and structure
2. Check for existing configurations and patterns
3. Understand the specific AI use case or requirements
4. Review existing documentation for context

#### When Adding Code
1. Follow Node.js/Next.js conventions
2. Use TypeScript when adding JavaScript functionality
3. Implement proper error handling for AI services
4. Include environment variable documentation
5. Test changes appropriately based on available infrastructure

#### After Making Changes
1. Validate changes don't break existing minimal structure
2. Update documentation if functionality is added
3. Ensure security best practices are followed
4. Run available linting/testing tools if present

## AI Integration Best Practices

### Security Guidelines
- Use environment variables for all API keys and secrets
- Create .env.example files to document required variables
- Never commit sensitive data to version control
- Implement proper authentication and authorization patterns

### Code Organization
- Structure AI-related code in logical, modular components
- Use clear, descriptive naming for AI functionality
- Include JSDoc comments for complex AI algorithms
- Organize imports: external dependencies first, then internal modules

### Error Handling
- Implement comprehensive error handling for AI service failures
- Consider rate limiting and quota management
- Provide fallback mechanisms for AI service unavailability
- Log errors appropriately for debugging and monitoring

### Performance Considerations
- Optimize AI API calls for efficiency
- Implement caching strategies where appropriate
- Consider streaming for long-running AI operations
- Monitor token usage and costs

## Documentation Standards

### Code Documentation
- Document all AI-related functions and integrations
- Include usage examples and configuration requirements
- Explain AI model dependencies and version requirements
- Provide troubleshooting guides for common issues

### Repository Documentation
- Update README.md when adding significant functionality
- Maintain consistency with existing documentation style
- Include setup instructions for AI services
- Document environment requirements and dependencies

## Testing Guidelines

### AI Functionality Testing
- Include tests for AI service integrations when source code exists
- Test error scenarios (API failures, rate limits, invalid responses)
- Mock AI services for consistent testing environments
- Document how to run tests with different AI configurations

### Validation Approach
- Verify AI responses before using them in applications
- Test with various input scenarios and edge cases
- Validate API key and configuration management
- Ensure proper handling of AI service limitations

## Common Patterns and Tools

### Environment Configuration
```bash
# Check for environment files
ls .env* || echo "No environment files found"

# Validate environment template
test -f .env.example && echo "Environment template found" || echo "Create .env.example"
```

### AI Package Detection
```bash
# Check for common AI packages
grep -E "(openai|langchain|tensorflow|pytorch|huggingface)" package.json 2>/dev/null || echo "No AI packages found"
```

### Development Commands (when package.json exists)
```bash
npm install          # Install dependencies
npm run dev          # Start development server  
npm run build        # Production build
npm run test         # Run tests
npm run lint         # Run linter
```

## Technology Stack Compatibility

### Expected Technologies
- **Frontend**: Next.js, React (when UI is needed)
- **Runtime**: Node.js
- **Package Manager**: npm
- **Language**: JavaScript/TypeScript
- **License**: MIT (maintain compatibility)

### AI Service Integration
- Support for multiple AI providers (OpenAI, Anthropic, Hugging Face, etc.)
- Flexible architecture for different AI model types
- Environment-based configuration for different deployment stages
- Proper error handling and retry mechanisms

## Constraints and Limitations

### Repository Constraints
- Maintain minimal, focused approach
- Do not add unnecessary dependencies prematurely
- Follow existing .gitignore patterns for Node.js/Next.js
- Respect MIT license compatibility
- Preserve intentional simplicity of the template

### AI Development Constraints
- Consider rate limits and usage quotas
- Implement proper cost management for AI services
- Ensure compliance with AI service terms of service
- Maintain user privacy and data protection standards

## Additional Resources

- **CLAUDE.md**: Claude-specific instructions and preferences
- **.cursorrules**: Cursor AI development rules and patterns
- **.github/copilot-instructions.md**: GitHub Copilot working guidelines
- **README.md**: Basic project overview and setup information

## Notes for AI Agents

- This repository is designed as a foundation for AI projects
- Always refer to specific AI agent configuration files when available
- Maintain consistency with established patterns across all AI configurations
- Update this file as the repository evolves and new patterns emerge
- Consider the specific strengths and capabilities of the AI agent being used
- Collaborate effectively with other AI agents that may work on this repository