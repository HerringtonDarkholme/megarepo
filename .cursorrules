# Cursor Rules for Megarepo - AI Setup Repository

You are an expert AI developer working in the Megarepo, a comprehensive AI setup repository designed for AI-related projects. Follow these rules when assisting with code development, analysis, and project setup.

## Repository Overview

This is a minimal AI setup repository template configured for Node.js/Next.js development. The repository serves as a foundation for AI-related projects and contains basic setup files with comprehensive development guidelines.

**Current State**: Minimal setup with basic configuration files
- Use these rules to guide development when source code is added
- Follow Node.js/Next.js patterns and best practices
- Prioritize AI-specific development patterns and security

## Core Development Principles

### 1. AI-First Development
- Prioritize AI integration patterns and best practices
- Consider model performance, API efficiency, and token usage
- Implement proper error handling for AI service failures
- Design for scalability with AI workloads

### 2. Security & API Key Management
- **NEVER** commit API keys, secrets, or credentials to version control
- Always use environment variables for sensitive data
- Create `.env.example` files to document required environment variables
- Implement proper API key rotation and management patterns
- Use secure storage solutions for production deployments

### 3. Code Quality Standards
- Write clean, readable, and well-documented code
- Use TypeScript for type safety when applicable
- Implement comprehensive error handling and logging
- Follow established linting and formatting rules
- Write meaningful commit messages and documentation

## Technology Stack Guidelines

### Node.js/Next.js Development
- Follow Next.js 13+ App Router patterns when applicable
- Use modern ES6+ JavaScript/TypeScript features
- Implement proper async/await patterns for AI API calls
- Use React Server Components where appropriate
- Optimize for both development and production environments

### AI Integration Patterns
```javascript
// Preferred AI API integration pattern
const aiResponse = await fetch('/api/ai-service', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.AI_API_KEY}`
  },
  body: JSON.stringify({ prompt, options })
});

if (!aiResponse.ok) {
  throw new Error(`AI service error: ${aiResponse.status}`);
}
```

### Common AI Dependencies
When adding AI functionality, prefer these well-established packages:
- `openai` - Official OpenAI API client
- `@langchain/core` - LangChain framework
- `@vercel/ai` - Vercel AI SDK
- `@huggingface/inference` - Hugging Face API client

## File Structure and Organization

### Expected Project Structure
```
.
├── README.md                 # Project documentation
├── LICENSE                   # MIT license
├── .gitignore               # Node.js/Next.js patterns
├── .cursorrules             # This file
├── .env.example             # Environment variable template
├── package.json             # Dependencies and scripts
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # React components
│   ├── lib/                 # Utility functions and AI clients
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Helper functions
├── public/                  # Static assets
└── docs/                    # Additional documentation
```

### Key Directories
- `src/lib/` - Place AI client configurations and utilities here
- `src/components/` - Reusable UI components, including AI-powered components
- `src/app/api/` - API routes for AI services and integrations
- `src/types/` - TypeScript definitions for AI responses and data models

## Development Workflow

### Before Writing Code
1. Check if `package.json` exists before running npm commands
2. Review existing environment variable requirements
3. Understand the AI service integrations being used
4. Consider rate limiting and usage patterns

### Code Development
1. Write TypeScript definitions for AI API responses
2. Implement proper error handling for AI service failures
3. Add loading states and user feedback for AI operations
4. Consider performance implications of AI API calls
5. Implement caching strategies where appropriate

### Testing AI Components
```javascript
// Example AI component test pattern
describe('AI Chat Component', () => {
  it('handles API errors gracefully', async () => {
    // Mock AI service failure
    mockAIService.mockRejectedValue(new Error('API Error'));
    
    render(<ChatComponent />);
    
    // Test error handling and user feedback
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
```

## Environment Setup

### Required Environment Variables
Create `.env.local` with these patterns:
```bash
# AI Service Keys
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here

# Application Settings
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Database (if needed)
DATABASE_URL=your_database_url_here
```

### Development Commands
When `package.json` exists, use these commands:
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Production build
npm run test         # Run tests
npm run lint         # Run linter
npm run type-check   # TypeScript validation
```

## AI-Specific Best Practices

### 1. Prompt Engineering
- Store prompts in separate files or constants
- Use template literals for dynamic prompt generation
- Implement prompt versioning for A/B testing
- Consider token limits and optimize prompt length

### 2. Response Handling
- Always validate AI responses before using them
- Implement fallback mechanisms for failed requests
- Log AI interactions for debugging and monitoring
- Handle streaming responses appropriately

### 3. Performance Optimization
- Cache AI responses when appropriate
- Implement request debouncing for user inputs
- Use background processing for long-running AI tasks
- Consider edge functions for AI API proxying

### 4. User Experience
- Provide clear loading indicators for AI operations
- Implement progressive disclosure for complex AI features
- Give users control over AI behavior and settings
- Provide feedback mechanisms for AI output quality

## Code Style and Formatting

### TypeScript Preferences
- Use strict type checking
- Define interfaces for all AI API responses
- Use union types for AI model selections
- Implement proper error type definitions

### React Patterns
- Use functional components with hooks
- Implement proper cleanup for AI subscriptions
- Use React.memo for expensive AI-powered components
- Handle loading and error states consistently

### API Development
- Follow RESTful principles for AI service endpoints
- Implement proper rate limiting and authentication
- Use middleware for common AI service operations
- Document API endpoints with clear examples

## Error Handling and Monitoring

### AI Service Errors
```javascript
// Comprehensive error handling pattern
try {
  const response = await aiClient.complete(prompt);
  return response;
} catch (error) {
  if (error.code === 'rate_limit_exceeded') {
    // Implement backoff strategy
    await delay(exponentialBackoff(retryCount));
    return retry();
  } else if (error.code === 'insufficient_quota') {
    // Handle quota issues
    throw new QuotaExceededError('AI service quota exceeded');
  } else {
    // Log and handle unexpected errors
    logger.error('AI service error', error);
    throw new AIServiceError('Unexpected AI service error');
  }
}
```

### Monitoring and Logging
- Log AI API usage and costs
- Monitor response times and error rates
- Track user interactions with AI features
- Implement health checks for AI services

## Documentation Requirements

### Code Documentation
- Document all AI-related functions and components
- Include usage examples for AI integrations
- Explain prompt engineering decisions
- Document environment setup requirements

### API Documentation
- Document all AI service endpoints
- Include request/response examples
- Explain rate limiting and authentication
- Provide troubleshooting guides

## Security Considerations

### Data Privacy
- Avoid sending sensitive user data to AI services
- Implement data anonymization where possible
- Follow GDPR and privacy regulations
- Document data usage and retention policies

### API Security
- Validate all inputs before sending to AI services
- Implement proper CORS settings
- Use HTTPS for all AI API communications
- Regularly rotate API keys and secrets

Remember: This repository is designed as a foundation for AI projects. Always consider the specific AI use case when implementing features, and prioritize user experience, security, and performance in all AI-related development.