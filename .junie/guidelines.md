# JetBrains Junie Guidelines for Megarepo

**AI code generation guidelines for JetBrains Junie working on the Megarepo AI setup repository.**

## Repository Overview

Megarepo is a minimal repository template designed for AI-related projects. It serves as a foundation for AI development with pre-configured setup files and guidelines for Node.js/Next.js AI applications.

**Current State**: Minimal setup repository with basic configuration files
- No source code or build system exists yet
- Pre-configured for Node.js/Next.js development patterns  
- Designed to be expanded with AI-specific tooling and projects

## Core Development Principles

### Minimal Change Philosophy
- Make the **smallest possible changes** to achieve objectives
- Respect the intentional simplicity of this AI setup repository
- Avoid unnecessary complexity or premature optimization
- Focus on surgical, precise modifications that maintain existing patterns

### Repository Awareness
- **ALWAYS** check current repository state before making changes
- Verify existence of `package.json` before running npm commands
- Understand the minimal nature - do not attempt builds/tests without source code
- This repository is currently in minimal template state with only configuration files

### AI-First Development Approach
- Prioritize AI integration patterns and best practices in all development
- Consider AI service limitations: rate limits, token usage, API efficiency
- Design for scalability with AI workloads and concurrent requests
- Implement comprehensive error handling for AI service failures and timeouts
- Structure code to support multiple AI providers and model switching

## Technology Stack & Coding Style

### Primary Technologies
- **Frontend**: Next.js, React (when source code is added)
- **Runtime**: Node.js
- **Language**: TypeScript (preferred for type safety)
- **Package Manager**: npm
- **License**: MIT

### Code Quality Standards
- Write clean, readable, and well-documented code with meaningful function names
- Use modern ES6+ JavaScript/TypeScript features and async/await patterns
- Implement proper async/await patterns for AI API calls with timeout handling
- Include JSDoc comments for complex AI algorithms and integrations
- Follow established linting and formatting rules when they exist

### File Organization Patterns
- Keep configuration files in the root directory
- Place source code in `src/` directory when added
- Use clear, descriptive file names
- Group related functionality together
- Structure AI-related code in logical, modular components under `src/lib/`

### Expected File Structure (when populated)
```
.
├── .junie/                   # JetBrains Junie configuration (this directory)
├── .clinerules/              # Cline AI rules
├── .cursor/                  # Cursor AI configuration  
├── .windsurf/                # Windsurf AI rules
├── .kiro/                    # Kiro AI steering files
├── .github/                  # GitHub workflows and AI instructions
├── src/                      # Main source code (when added)
│   ├── components/           # React components for AI interfaces
│   ├── lib/                  # AI clients and utilities
│   ├── app/                  # Next.js App Router (pages and API routes)
│   └── types/                # TypeScript definitions
├── public/                   # Static assets
├── package.json              # Dependencies and scripts (when added)
└── Configuration files       # Various AI config files in root
```

## Security Guidelines

### API Key Management
- **Never commit API keys, secrets, or credentials to version control**
- Use environment variables for all sensitive configuration
- Create `.env.example` files to document required environment variables
- Include proper validation for missing environment variables
- Document security requirements in code comments

### AI Service Security
- Implement rate limiting to prevent API abuse
- Validate all inputs before sending to AI services
- Sanitize AI responses before displaying to users
- Log security-relevant events for monitoring
- Consider data privacy implications of AI service usage

## AI Integration Best Practices

### Service Integration Patterns
- Create abstraction layers for AI services to enable easy switching
- Implement circuit breaker patterns for AI service failures
- Use connection pooling for better performance
- Include proper timeout handling (30+ seconds for most AI operations)
- Design for graceful degradation when AI services are unavailable

### Error Handling
- Implement comprehensive error handling for AI service failures
- Provide meaningful error messages for different failure scenarios
- Include retry logic with exponential backoff for transient failures
- Log errors appropriately for debugging and monitoring
- Consider fallback behavior when AI services are unavailable

### Performance Considerations
- Optimize token usage and API efficiency
- Implement caching strategies for expensive AI operations
- Consider streaming responses for long-running AI tasks
- Monitor and limit concurrent AI service requests
- Document performance characteristics and limitations

## Documentation Requirements

### Code Documentation
- Use JSDoc comments for complex AI algorithms and integrations
- Document function parameters and return types for AI service calls
- Include examples in code comments for non-obvious AI implementations
- Explain AI model choice rationale and configuration decisions

### Project Documentation
- Update README.md when adding significant functionality
- Document AI service setup and configuration steps
- Include examples of AI integrations and usage patterns
- Maintain changelog for AI-related changes

## Development Workflow

### Before Making Changes
1. Check current repository state with `git status`
2. Verify build system existence before attempting builds
3. Review existing patterns in similar AI configuration files
4. Plan minimal changes that achieve the objective

### During Development
1. Follow TypeScript best practices and AI patterns
2. Implement proper error handling and timeout management
3. Test with mock AI services during development
4. Maintain consistency with existing code style

### After Changes
1. Validate changes don't break existing minimal structure
2. Test error scenarios and edge cases
3. Update relevant documentation
4. Ensure security guidelines are followed

## Testing Strategy

### AI Component Testing
- Include tests for AI functionality when source code is added
- Test error scenarios (API failures, rate limits, invalid responses)
- Include integration tests for AI service connections
- Document how to run tests with mock AI services for CI/CD
- Test timeout handling and circuit breaker functionality

### Mock Strategy
- Create comprehensive mocks for AI services
- Test both success and failure scenarios
- Validate error handling and retry logic
- Test with various response types and delays

## Environment Management

### Development Environment
- Use `.env.local` for local development variables
- Never commit `.env` files with real credentials
- Provide clear `.env.example` with all required variables
- Document environment setup in README.md

### Production Considerations
- Use secure credential management systems
- Implement proper logging and monitoring
- Consider geographic restrictions for AI services
- Plan for service quota management and billing alerts

## Compatibility Guidelines

### Consistency with Other AI Assistants
These guidelines should complement existing AI configurations:
- GitHub Copilot (`.github/copilot-instructions.md`)
- Claude AI (`CLAUDE.md`)
- Cursor AI (`.cursorrules`, `.cursor/`)
- Windsurf AI (`.windsurf/`)
- Cline AI (`.clinerules/`)
- Kiro AI (`.kiro/`)
- Gemini CLI (`GEMINI.md`)
- Universal AI guidelines (`AGENT.md`, `AGENTS.md`)

All configurations share common principles while being optimized for each assistant's specific capabilities.

### Version Control Standards
- Maintain clear, descriptive commit messages
- Follow established branching and merge patterns
- Keep the repository clean and focused on its AI setup purpose
- Use semantic versioning for releases when appropriate

## Constraints and Limitations

### Repository Constraints
- Repository is currently minimal - respect this intentional simplicity
- Do not add unnecessary complexity or dependencies prematurely
- Maintain compatibility with the existing MIT license
- Follow the existing .gitignore patterns for Node.js/Next.js projects
- Respect the established minimal change philosophy

### AI Service Limitations
- Consider token limits and API rate restrictions
- Plan for service availability and downtime scenarios  
- Understand billing implications of AI service usage
- Document known limitations and workarounds
- Consider geographic availability of AI services

---

*These guidelines ensure JetBrains Junie generates code that follows the established patterns and principles of the Megarepo AI setup repository while maintaining security, performance, and consistency standards.*