**TypeScript Requirements:**
Use TypeScript for all JavaScript code to ensure type safety and better developer experience with AI integrations.

**Strict Mode Configuration:**
Enable TypeScript strict mode in tsconfig.json:
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
```

**Type Definitions for AI Services:**
```typescript
// Define interfaces for AI service responses
interface AIResponse {
  content: string;
  model: string;
  usage?: {
    tokens: number;
    cost?: number;
  };
}

interface AIError {
  code: string;
  message: string;
  retryable: boolean;
}

// Use branded types for different AI services
type OpenAIModel = 'gpt-4' | 'gpt-3.5-turbo';
type AnthropicModel = 'claude-3-opus' | 'claude-3-sonnet';
```

**Function Documentation Requirements:**
Include JSDoc comments for all AI-related functions:
```typescript
/**
 * Generates a response using the specified AI model
 * @param prompt - The input prompt for the AI model
 * @param model - The AI model to use for generation
 * @param options - Optional configuration for the AI call
 * @returns Promise resolving to the AI response
 * @throws {AIServiceError} When the AI service is unavailable
 * @throws {AIRateLimitError} When rate limits are exceeded
 */
async function generateAIResponse(
  prompt: string,
  model: OpenAIModel,
  options?: AIRequestOptions
): Promise<AIResponse> {
  // Implementation
}
```

**Error Handling with Types:**
```typescript
// Define custom error classes for AI services
class AIServiceError extends Error {
  constructor(
    message: string,
    public readonly service: string,
    public readonly retryable: boolean = false
  ) {
    super(message);
    this.name = 'AIServiceError';
  }
}

class AIRateLimitError extends AIServiceError {
  constructor(service: string) {
    super('Rate limit exceeded', service, true);
    this.name = 'AIRateLimitError';
  }
}
```

**Async/Await Patterns:**
Use modern async/await patterns for AI API calls:
```typescript
// Correct async/await pattern with proper error handling
async function callAIService(prompt: string): Promise<string> {
  try {
    const response = await aiClient.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      timeout: 30000, // 30 second timeout
    });
    
    return response.choices[0].message.content ?? '';
  } catch (error) {
    if (error.code === 'rate_limit_exceeded') {
      throw new AIRateLimitError('OpenAI');
    }
    throw new AIServiceError('AI service failed', 'OpenAI');
  }
}
```

**Input Validation and Sanitization:**
```typescript
import { z } from 'zod';

// Define validation schemas
const PromptSchema = z.string()
  .min(1, 'Prompt cannot be empty')
  .max(4000, 'Prompt too long');

const AIRequestSchema = z.object({
  prompt: PromptSchema,
  model: z.enum(['gpt-4', 'gpt-3.5-turbo']),
  temperature: z.number().min(0).max(2).optional(),
});

// Validate inputs before processing
function validateAIRequest(input: unknown): AIRequest {
  return AIRequestSchema.parse(input);
}
```

**Code Style Requirements:**
- Use ESLint and Prettier for consistent formatting
- Prefer `const` over `let` when variables don't change
- Use descriptive variable and function names
- Avoid `any` type - use proper type definitions
- Use optional chaining (`?.`) and nullish coalescing (`??`) operators
- Implement proper error boundaries for React components

**Testing Patterns:**
```typescript
// Unit test example for AI functions
describe('AI Service', () => {
  it('should handle rate limit errors', async () => {
    const mockAIClient = {
      chat: {
        completions: {
          create: jest.fn().mockRejectedValue({ code: 'rate_limit_exceeded' })
        }
      }
    };
    
    await expect(callAIService('test prompt')).rejects.toThrow(AIRateLimitError);
  });
});
```

**Performance Considerations:**
- Implement request timeout handling (30-60 seconds for AI calls)
- Use connection pooling for multiple AI service calls
- Cache AI responses when appropriate
- Implement retry logic with exponential backoff
- Monitor and log performance metrics for AI operations