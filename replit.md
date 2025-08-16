# Megarepo - AI Setup Repository Guidelines

## Project Overview
Megarepo is a minimal repository template designed for AI-related projects and development. It serves as a foundational setup repository that provides basic configuration files and structure for Node.js/Next.js AI applications. The repository is currently in a minimal state and is intended to be expanded with AI-specific tooling, configurations, and project scaffolding.

## Technology Preferences
- **Frontend**: React with TypeScript, Next.js framework
- **Backend**: Node.js with TypeScript, Express.js
- **Package Manager**: npm (preferred for consistency)
- **Database**: PostgreSQL with modern ORMs (Drizzle, Prisma)
- **AI Integrations**: OpenAI, Anthropic Claude, Google Gemini APIs
- **Development**: TypeScript-first approach
- **Styling**: Tailwind CSS or CSS modules

## Coding Standards
- **TypeScript Configuration**: Strict mode enabled, compatible with Node.js 20+
- **Code Style**: Follow existing patterns in the repository
- **Component Structure**: Functional components with hooks for React
- **API Design**: RESTful conventions for endpoints
- **Error Handling**: Comprehensive error handling for AI service integrations
- **Security**: Environment variables for all API keys and secrets
- **Documentation**: JSDoc comments for complex AI algorithms and integrations

## AI Development Guidelines
- **Environment Variables**: Use .env files for AI service API keys (never commit secrets)
- **Service Integration**: Implement fallback mechanisms for AI service unavailability
- **Rate Limiting**: Consider quota management for AI API calls
- **Caching**: Implement caching strategies where appropriate for AI responses
- **Modular Design**: Structure AI-related code in logical, reusable components
- **Testing**: Mock AI services for consistent testing environments

## File Organization
- **Root Directory**: Configuration files and documentation
- **src/**: Main source code directory (when added)
- **src/components/**: React components, including AI-specific UI components
- **src/pages/**: Next.js pages (if using Next.js)
- **src/utils/**: Utility functions and AI helper functions
- **src/api/**: API routes and AI service integrations
- **public/**: Static assets
- **.env.example**: Document required environment variables

## Communication Style
- **Approach Explanation**: Always explain your approach before making changes
- **Minimal Changes**: Prioritize surgical, minimal modifications over large refactors
- **Code Comments**: Provide clear comments for AI-related logic and integrations
- **Documentation Updates**: Update relevant documentation when adding AI functionality
- **Question Clarification**: Ask questions if AI service requirements are ambiguous
- **Progress Updates**: Provide clear updates on AI integration progress

## Project Context
- **Current State**: Minimal template with AI agent configurations
- **Target Architecture**: Modular AI application with multiple service integrations
- **Constraints**: Maintain consistency with existing agent configurations
- **Security Focus**: Never commit API keys or sensitive AI service credentials
- **Multi-Agent Ready**: Prepared for multiple AI development assistants

## Development Workflow
- **Before Coding**: Check for existing patterns in agent configuration files
- **Environment Setup**: Use .env.example as a template for required variables
- **Testing Strategy**: Test AI integrations with mock services first
- **Code Review**: Ensure new code aligns with existing repository patterns
- **Documentation**: Update agent configuration files as the project evolves

## Integration Notes
- **AI Services**: Expect integration with OpenAI, Claude, Gemini, and other AI APIs
- **Monitoring**: Include appropriate logging for AI service calls and responses
- **Performance**: Optimize AI API calls for efficiency and cost management
- **Fallbacks**: Implement graceful degradation when AI services are unavailable
- **Scalability**: Design AI components to scale with project growth

## Repository Coordination
This replit.md file should be coordinated with other AI agent configurations in the repository:
- **CLAUDE.md**: Claude AI development assistance
- **GEMINI.md**: Gemini CLI configuration
- **AGENT.md**: Universal AI agent instructions
This replit.md file is intended to be coordinated with other AI agent configuration files (such as `CLAUDE.md`, `GEMINI.md`, `AGENT.md`, `AGENTS.md`) as the repository evolves. These files may not currently exist and are planned for future addition:
- **CLAUDE.md**: Claude AI development assistance (planned)
- **GEMINI.md**: Gemini CLI configuration (planned)
- **AGENT.md**: Universal AI agent instructions (planned)
- **AGENTS.md**: Overview of all configured agents (planned)

Maintain consistency across all AI agent configurations while respecting the unique capabilities of each service.