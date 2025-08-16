---
name: Code Quality Standards
globs: ["src/**/*.{ts,tsx,js,jsx}", "app/**/*.{ts,tsx,js,jsx}", "pages/**/*.{ts,tsx,js,jsx}"]
description: TypeScript, code quality, and development standards for AI applications
---

# Code Quality Standards

## TypeScript Best Practices

### Type Safety Guidelines
- Use TypeScript strict mode for all new code
- Prefer interfaces over type aliases for object shapes
- Include proper JSDoc comments for public APIs
- Use readonly arrays and properties where possible
- Implement proper null/undefined handling

### AI-Specific Type Definitions
```typescript
// Example AI service response types
interface AIResponse {
  readonly id: string;
  readonly content: string;
  readonly model: string;
  readonly usage: {
    readonly promptTokens: number;
    readonly completionTokens: number;
    readonly totalTokens: number;
  };
  readonly finishReason: 'stop' | 'length' | 'content_filter';
}

// AI service configuration types
interface AIConfig {
  readonly apiKey: string;
  readonly model: string;
  readonly maxTokens: number;
  readonly temperature?: number;
  readonly topP?: number;
}
```

## Code Organization and Architecture

### File Structure Standards
```
src/
├── lib/
│   ├── ai/
│   │   ├── openai.ts         # OpenAI client configuration
│   │   ├── anthropic.ts      # Anthropic client configuration
│   │   ├── types.ts          # Shared AI types
│   │   └── utils.ts          # AI utility functions
│   ├── components/
│   │   ├── ui/               # Base UI components
│   │   └── ai/               # AI-specific components
│   └── utils/
│       ├── validation.ts     # Input validation utilities
│       └── errors.ts         # Error handling utilities
```

### Module Organization Patterns
- Keep AI service integrations in `src/lib/ai/`
- Create reusable AI components in `src/components/ai/`
- Implement utility functions in focused, single-purpose modules
- Use barrel exports for clean imports

## Development Best Practices

### Code Quality Standards
- Write clean, readable, and well-documented code with meaningful function names
- Use modern ES6+ JavaScript/TypeScript features and async/await patterns
- Implement proper async/await patterns for AI API calls with timeout handling
- Follow established linting and formatting rules when they exist

### Error Handling Patterns
```typescript
// Standardized error handling for AI operations
class AIServiceError extends Error {
  constructor(
    message: string,
    public readonly service: string,
    public readonly statusCode?: number,
    public readonly cause?: Error
  ) {
    super(message);
    this.name = 'AIServiceError';
  }
}

// Usage example
async function callAIService(prompt: string): Promise<AIResponse> {
  try {
    const response = await aiClient.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }]
    });
    
    return response;
  } catch (error) {
    throw new AIServiceError(
      'Failed to get AI response',
      'openai',
      error instanceof Error ? undefined : 500,
      error instanceof Error ? error : undefined
    );
  }
}
```

### Testing Guidelines
- Write unit tests for AI utility functions
- Mock AI services for consistent test environments
- Test error scenarios (rate limits, API failures, invalid responses)
- Include integration tests for AI service connections
- Validate AI response handling and edge cases

### Performance Considerations
- Implement caching strategies for repeated AI requests
- Use connection pooling for AI service clients
- Consider streaming for long-running AI operations
- Optimize token usage and request batching where possible
- Monitor and log performance metrics