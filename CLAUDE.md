# Project: Megarepo - AI Setup Repository

## Overview
Megarepo is a minimal repository template designed for AI-related projects and development. It serves as a foundational setup repository that provides basic configuration files and structure for Node.js/Next.js AI applications. The repository is currently in a minimal state and is intended to be expanded with AI-specific tooling, configurations, and project scaffolding.

## Architecture
- **Current Structure**: Minimal setup with basic configuration files
- **Target Architecture**: Node.js/Next.js based AI applications
- **Key Directories** (when populated):
  - `src/` - Main source code directory
  - `src/pages/` - Next.js pages (if Next.js project)
  - `src/components/` - React components for AI interfaces
  - `src/utils/` - Utility functions and AI helpers
  - `public/` - Static assets and files
- **Configuration Files**:
  - `.gitignore` - Pre-configured for Node.js/Next.js projects
  - `LICENSE` - MIT license
  - `.github/copilot-instructions.md` - Detailed AI agent instructions

## Technology Stack
- **Frontend**: Next.js, React (intended)
- **Runtime**: Node.js
- **Package Manager**: npm
- **License**: MIT
- **AI Integrations**: To be determined based on project needs (OpenAI, LangChain, Hugging Face, etc.)

## Coding Preferences

### General Guidelines
- Follow existing patterns established in the repository
- Prioritize minimal, surgical changes over large refactors
- Maintain consistency with the existing file structure
- Use TypeScript when adding JavaScript code (based on .gitignore patterns)

### AI Development Specific
- Use environment variables for API keys and sensitive configuration
- Never commit API keys or secrets to the repository
- Structure AI-related code in logical, modular components
- Document AI model dependencies and version requirements
- Include error handling for AI service failures

### Code Style
- Follow standard Node.js/Next.js conventions
- Use meaningful variable and function names, especially for AI-related functionality
- Include JSDoc comments for complex AI algorithms or integrations
- Organize imports: external dependencies first, then internal modules

### File Organization
- Keep configuration files in the root directory
- Place source code in `src/` directory when added
- Use clear, descriptive file names
- Group related functionality together

## Instructions for Claude

### Project Understanding
- This repository is currently minimal and serves as a template/setup for AI projects
- No build system or source code exists yet - do not attempt to build, test, or run code
- The repository is pre-configured for Node.js/Next.js development patterns
- Focus on the intended AI setup purpose when making recommendations

### When Adding New Code
1. **Always check for existing package.json before running npm commands**
2. **Follow the patterns established in `.github/copilot-instructions.md`**
3. **Set appropriate timeouts for long-running operations** (builds: 60+ minutes, installs: 10+ minutes)
4. **Validate changes don't break existing minimal structure**

### AI-Specific Considerations
- When adding AI dependencies, verify compatibility with the intended Node.js/Next.js stack
- Create `.env.example` files to document required environment variables
- Consider rate limiting and error handling for AI service integrations
- Document AI model requirements, versions, and expected behavior

### Testing Strategy
- When source code is added, include tests for AI functionality
- Test error scenarios (API failures, rate limits, invalid responses)
- Include integration tests for AI service connections
- Document how to run tests with mock AI services for CI/CD

### Documentation Requirements
- Update README.md when adding significant functionality
- Document AI service setup and configuration steps
- Include examples of AI integrations and usage
- Maintain this claude.md file as the project evolves

### Constraints and Limitations
- Repository is currently minimal - respect this intentional simplicity
- Do not add unnecessary complexity or dependencies prematurely
- Maintain compatibility with the existing MIT license
- Follow the existing .gitignore patterns for Node.js/Next.js projects
- Respect the established minimal change philosophy outlined in copilot-instructions.md

## Development Workflow

### Initial Setup (when code is added)
```bash
# Verify package.json exists before running commands
test -f package.json && echo "Node.js project detected" || echo "No package.json found"

# Install dependencies if package.json exists
npm install

# Check for environment variables
ls .env* || echo "No environment files found"
```

### AI Service Integration
```bash
# Check for AI-related packages
grep -E "(openai|langchain|tensorflow|pytorch|huggingface)" package.json

# Validate environment configuration
test -f .env.example && echo "Environment template found" || echo "Create .env.example for required variables"
```

### Before Committing
```bash
# Run linting if configured
npm run lint 2>/dev/null || echo "No lint script found"

# Run tests if configured  
npm run test 2>/dev/null || echo "No test script found"

# Check for secrets in staged files
git diff --cached --name-only | xargs grep -l "api.*key\|secret\|token" || echo "No potential secrets found"
```

## Notes
- This configuration file should be updated as the repository evolves from its current minimal state
- The repository is designed to be a foundation for AI projects, so expect significant expansion
- Always refer to `.github/copilot-instructions.md` for additional context and detailed workflows
- Maintain the minimal, focused approach that characterizes this repository template