# Core Principles

## Minimal Change Philosophy
- Make the **smallest possible changes** to achieve objectives
- Respect the intentional simplicity of this AI setup repository
- Avoid unnecessary complexity or premature optimization
- Focus on surgical, precise modifications that maintain existing patterns

## Repository Awareness
- **ALWAYS** check current repository state before making changes
- Verify existence of `package.json` before running npm commands
- Understand the minimal nature - do not attempt builds/tests without source code
- This repository is currently in minimal template state with only configuration files

## AI-First Development Approach
- Prioritize AI integration patterns and best practices in all development
- Consider AI service limitations: rate limits, token usage, API efficiency
- Design for scalability with AI workloads and concurrent requests
- Implement comprehensive error handling for AI service failures and timeouts
- Structure code to support multiple AI providers and model switching

## Version Control Standards
- Never commit API keys, secrets, or credentials to version control
- Use environment variables for all sensitive configuration
- Maintain clear, descriptive commit messages
- Follow established branching and merge patterns
- Keep the repository clean and focused on its AI setup purpose