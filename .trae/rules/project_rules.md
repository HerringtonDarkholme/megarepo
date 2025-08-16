# Project Rules for Megarepo AI Setup

## Overview

This document defines the project-specific rules and guidelines that must be followed when working on the Megarepo AI setup repository. These rules ensure consistency, security, and maintainability across all AI development activities.

## Code Style Guidelines

### Indentation and Formatting
- Use **2 spaces** for indentation (no tabs)
- Maintain consistent line endings (LF)
- Keep lines under 120 characters when possible
- Use meaningful whitespace to separate logical sections

### Naming Conventions
- Use **camelCase** for JavaScript/TypeScript variables and functions
- Use **PascalCase** for React components and classes
- Use **kebab-case** for file names and directories
- Use **SCREAMING_SNAKE_CASE** for environment variables and constants

### File Organization
- Keep configuration files in the root directory
- Place source code in `src/` directory when added
- Use clear, descriptive file names
- Group related functionality together

## Languages and Frameworks

### Preferred Stack
- **Runtime**: Node.js (latest LTS version)
- **Frontend Framework**: Next.js with React
- **Language**: TypeScript for all JavaScript code
- **Package Manager**: npm or pnpm (both supported; pnpm offers improved performance and workspace management for large AI projects)
- **License**: MIT (maintain consistency)

### AI Integration Libraries
When adding AI functionality, prefer these libraries:
- **OpenAI**: Official OpenAI SDK for GPT models
- **LangChain**: For complex AI workflows and chains
- **Hugging Face**: For open-source model integrations
- **Vercel AI SDK**: For streaming and UI integrations

## API and Security Restrictions

### Forbidden Practices
- **Never commit API keys, secrets, or tokens** to the repository
- **Never use** hardcoded credentials in source code
- **Avoid** deprecated or unmaintained AI libraries
- **Do not** include sensitive data in logs or error messages

### Required Security Measures
- Use environment variables for all sensitive configuration
- Create `.env.example` files to document required variables
- Implement proper error handling for API failures
- Add rate limiting for AI service calls
- Validate all AI service responses before use

## Development Workflow Rules

### Before Making Changes
1. Check current repository state: `git status && ls -la`
2. Verify package.json exists before running npm commands
3. Review existing documentation and patterns
4. Understand the minimal nature of the repository

### When Adding Code
1. Follow TypeScript strict mode requirements
2. Include JSDoc comments for complex AI algorithms
3. Implement comprehensive error handling
4. Add proper input validation and sanitization
5. Consider performance implications of AI operations

### Before Committing
1. Run linting if configured: `npm run lint`
2. Run tests if available: `npm run test`
3. Check for secrets using a dedicated tool (recommended):  
   - `gitleaks detect --staged`  
   - or `git secrets --scan`  
   If you cannot use these tools, use a broader grep pattern as a fallback:  
   - `git diff --cached --name-only | xargs grep -E -i 'key|secret|token|password|aws_|access[_-]?key|private[_-]?key|client[_-]?id|client[_-]?secret'`
4. Verify no build artifacts are included
5. Update documentation if functionality changes

## Project Structure Requirements

### Directory Structure
```
.
├── .trae/rules/          # Trae project rules (this file)
├── .github/              # GitHub workflows and configurations
├── src/                  # Source code (when added)
│   ├── components/       # React components
│   ├── pages/           # Next.js pages
│   ├── utils/           # Utility functions
│   └── lib/             # AI service integrations
├── public/              # Static assets
├── docs/                # Additional documentation
└── .env.example         # Environment variable template
```

### Configuration Files
- Keep AI agent configurations in root directory
- Maintain consistency with existing files (CLAUDE.md, AGENT.md, etc.)
- Use `.md` extension for documentation files
- Follow established naming patterns

## AI-Specific Rules

### Model Integration Guidelines
- Document model versions and requirements
- Implement fallback mechanisms for service failures
- Use streaming for long-running operations when possible
- Monitor token usage and implement cost controls

### Data Handling
- Never store user data without explicit consent
- Implement data retention policies
- Use proper data sanitization techniques
- Consider privacy implications of AI processing

### Error Handling
- Provide meaningful error messages for AI service failures
- Implement retry logic with exponential backoff
- Log errors appropriately for debugging
- Consider graceful degradation when AI services are unavailable

## Testing Requirements

### AI Functionality Testing
- Mock AI services for consistent test environments
- Test error scenarios (rate limits, API failures, invalid responses)
- Include integration tests for AI service connections
- Validate AI response handling and edge cases

### Test Organization
- Place tests in `__tests__` directories or `.test.ts` files
- Use descriptive test names that explain the scenario
- Include both unit and integration tests
- Document how to run tests with different AI configurations

## Documentation Standards

### Code Documentation
- Include JSDoc comments for all exported functions
- Document AI model dependencies and version requirements
- Provide usage examples for AI integrations
- Explain complex AI algorithms and decision logic

### Repository Documentation
- Update README.md when adding significant functionality
- Maintain consistency with existing documentation style
- Include setup instructions for AI services
- Document environment requirements and dependencies

## Constraints and Limitations

### Repository Philosophy
- Maintain the minimal, focused approach
- Respect the intentional simplicity of the setup
- Avoid unnecessary complexity or premature optimization
- Make surgical, precise modifications only

### Technical Constraints
- Repository is currently minimal - no source code exists yet
- Do not attempt builds/tests without source code
- Follow existing .gitignore patterns for Node.js/Next.js
- Maintain compatibility with the MIT license

## Notes

- These rules should be updated as the repository evolves
- Always refer to other AI agent configuration files for consistency
- The repository is designed as a foundation for AI projects
- Maintain the minimal, focused approach that characterizes this template
- Consider coordination with other AI agents working on this repository