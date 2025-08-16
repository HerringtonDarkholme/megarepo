# TypeScript and JavaScript Rules

**Activation Mode**: Glob
**Pattern**: `**/*.{ts,tsx,js,jsx}`

<typescript_preferences>
- Use strict type checking and enable all strict TypeScript compiler options
- Define interfaces for all AI API responses and data models
- Use union types for AI model selections and configuration options
- Implement proper error type definitions for AI service failures
- Prefer type-safe patterns over any types, especially for AI data
</typescript_preferences>

<ai_integration_patterns>
- Implement proper async/await patterns for AI API calls with error handling
- Use React Server Components where appropriate for AI data fetching
- Handle loading and error states consistently across AI-powered components
- Implement request debouncing for user inputs to AI services
- Use background processing for long-running AI tasks and streaming responses
</ai_integration_patterns>

<code_organization>
- Place AI client configurations and utilities in src/lib/ directory
- Organize imports: external dependencies first, then internal modules
- Use meaningful variable names for AI-related functionality and prompts
- Group related AI functionality together in logical modules
- Follow Next.js 13+ App Router patterns when applicable
</code_organization>

<error_handling>
- Implement comprehensive error handling for AI service failures
- Handle rate limiting with exponential backoff strategies
- Provide fallback mechanisms for AI service unavailability
- Log AI interactions appropriately for debugging and monitoring
- Include proper cleanup for AI subscriptions and streaming connections
</error_handling>