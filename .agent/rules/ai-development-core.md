# AI Development Core Rules

**Activation Mode**: Always On

## AI Development Guidelines

- This is an AI setup repository template designed for AI-related projects
- Prioritize AI integration patterns and best practices in all code suggestions
- Consider model performance, API efficiency, and token usage optimization
- Design for scalability with AI workloads and multiple service integrations
- Follow Node.js/Next.js development patterns as the primary technology stack

## Repository Context

- Repository is currently in minimal state with basic configuration files
- Use TypeScript when adding JavaScript functionality for better type safety
- Implement comprehensive error handling for AI service failures and rate limits
- Structure AI-related code in logical, modular components under src/lib/
- Follow the existing patterns established in .cursorrules and other AI configuration files

## Code Quality Standards

- Write clean, readable, and well-documented code with meaningful function names
- Use modern ES6+ JavaScript/TypeScript features and async/await patterns
- Implement proper async/await patterns for AI API calls with timeout handling
- Include JSDoc comments for complex AI algorithms and integrations
- Follow established linting and formatting rules when they exist

## Environment and Security

- Never commit API keys, tokens, or sensitive configuration to the repository
- Use environment variables for all API credentials and secrets
- Check .env.example for required environment variable patterns
- Implement rate limiting and error handling for external AI services
- Follow security best practices for API key management and data handling
