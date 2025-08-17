# Code Quality Guidelines for JetBrains AI Assistant

**TypeScript, testing, and code standards for AI development in the Megarepo repository.**

## Code Quality Standards

### TypeScript Best Practices

#### Type Safety
```typescript
// Use strict TypeScript configuration
// Always define proper types for AI service responses
interface AIResponse {
  content: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  model: string;
  created: number;
}

// Use generic types for reusable AI utilities
interface AIServiceClient<T> {
  generate(prompt: string, options?: GenerateOptions): Promise<T>;
  stream(prompt: string, options?: StreamOptions): AsyncIterable<T>;
}
```

#### Error Type Definitions
```typescript
// Define specific error types for AI services
class AIServiceError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly service: string,
    public readonly retryable: boolean = false
  ) {
    super(message);
    this.name = 'AIServiceError';
  }
}

class RateLimitError extends AIServiceError {
  constructor(service: string, resetTime?: number) {
    super(`Rate limit exceeded for ${service}`, 429, service, true);
    this.resetTime = resetTime;
  }
  
  public readonly resetTime?: number;
}
```

### Modern JavaScript/TypeScript Patterns

#### Async/Await Usage
```typescript
// Preferred: Modern async/await patterns
async function generateAIResponse(prompt: string): Promise<string> {
  try {
    const response = await aiClient.generate(prompt);
    return response.content;
  } catch (error) {
    if (error instanceof RateLimitError) {
      // Handle rate limiting with exponential backoff
      await delay(error.resetTime || 1000);
      return generateAIResponse(prompt); // Retry
    }
    throw error;
  }
}

// Avoid: Nested promises or callback patterns
// Don't do this:
// function generateAIResponse(prompt: string): Promise<string> {
//   return new Promise((resolve, reject) => {
//     aiClient.generate(prompt).then(response => {
//       resolve(response.content);
//     }).catch(reject);
//   });
// }
```

#### Destructuring and Modern Syntax
```typescript
// Use destructuring for cleaner code
const { content, usage: { total_tokens } } = await aiResponse;

// Use optional chaining and nullish coalescing
const modelName = response?.model ?? 'unknown';
const tokenCount = response?.usage?.total_tokens ?? 0;

// Prefer template literals for string construction
const logMessage = `AI request completed: ${tokenCount} tokens used by ${modelName}`;
```

### Function and Variable Naming

#### Meaningful Names
```typescript
// Good: Descriptive, clear purpose
async function generateChatCompletion(prompt: string, maxTokens: number): Promise<string> {
  // Implementation
}

function sanitizeUserInput(rawInput: string): string {
  // Implementation
}

const AI_SERVICE_TIMEOUT_MS = 30000;
const MAX_RETRY_ATTEMPTS = 3;

// Avoid: Unclear or abbreviated names
// function genAI(p: string, mt: number): Promise<string> { }
// function clean(input: string): string { }
// const TIMEOUT = 30000;
```

#### Consistent Naming Conventions
```typescript
// Use camelCase for variables and functions
const openaiApiKey = process.env.OPENAI_API_KEY;
const maxTokensPerRequest = 4000;

// Use PascalCase for classes and interfaces
class AIResponseParser {
  parse(response: unknown): ParsedResponse {
    // Implementation
  }
}

interface ChatCompletionRequest {
  prompt: string;
  maxTokens: number;
  temperature: number;
}

// Use SCREAMING_SNAKE_CASE for constants
const DEFAULT_MODEL = 'gpt-4';
const MAX_PROMPT_LENGTH = 10000;
```

## Documentation Standards

### JSDoc Comments
```typescript
/**
 * Generates an AI response using the specified model and parameters.
 * 
 * @param prompt - The input prompt for the AI model
 * @param options - Configuration options for the AI request
 * @param options.model - The AI model to use (default: 'gpt-4')
 * @param options.maxTokens - Maximum tokens in the response (default: 1000)
 * @param options.temperature - Randomness of the response, 0-1 (default: 0.7)
 * @returns Promise that resolves to the AI-generated content
 * 
 * @throws {AIServiceError} When the AI service is unavailable
 * @throws {RateLimitError} When rate limits are exceeded
 * 
 * @example
 * ```typescript
 * const response = await generateAIResponse("Explain TypeScript", {
 *   model: "gpt-4",
 *   maxTokens: 500,
 *   temperature: 0.3
 * });
 * console.log(response);
 * ```
 */
async function generateAIResponse(
  prompt: string,
  options: {
    model?: string;
    maxTokens?: number;
    temperature?: number;
  } = {}
): Promise<string> {
  // Implementation
}
```

### Code Comments
```typescript
// Explain complex AI algorithms and business logic
function calculateTokenCost(tokens: number, model: string): number {
  // Pricing varies by model - see https://openai.com/pricing
  const pricePerToken = {
    'gpt-4': 0.00003,          // $0.03 per 1K tokens
    'gpt-3.5-turbo': 0.000002, // $0.002 per 1K tokens
  };
  
  return tokens * (pricePerToken[model] || pricePerToken['gpt-3.5-turbo']);
}

// Document non-obvious configurations
const retryConfig = {
  attempts: 3,
  backoff: 'exponential', // 1s, 2s, 4s delays
  maxDelay: 10000,        // Cap at 10 seconds
};
```

## Testing Guidelines

### Unit Testing Patterns
```typescript
// Test AI service integrations with mocks
describe('AIService', () => {
  let aiService: AIService;
  let mockClient: jest.Mocked<OpenAI>;

  beforeEach(() => {
    mockClient = {
      chat: {
        completions: {
          create: jest.fn(),
        },
      },
    } as any;
    
    aiService = new AIService(mockClient);
  });

  it('should generate response with correct parameters', async () => {
    const mockResponse = {
      choices: [{ message: { content: 'Test response' } }],
      usage: { total_tokens: 50 },
    };
    
    mockClient.chat.completions.create.mockResolvedValue(mockResponse);
    
    const result = await aiService.generate('Test prompt');
    
    expect(result).toBe('Test response');
    expect(mockClient.chat.completions.create).toHaveBeenCalledWith({
      model: 'gpt-4',
      messages: [{ role: 'user', content: 'Test prompt' }],
      max_tokens: 1000,
      temperature: 0.7,
    });
  });

  it('should handle rate limit errors with retry', async () => {
    const rateLimitError = new Error('Rate limit exceeded');
    rateLimitError.status = 429;
    
    mockClient.chat.completions.create
      .mockRejectedValueOnce(rateLimitError)
      .mockResolvedValueOnce({ choices: [{ message: { content: 'Success' } }] });
    
    const result = await aiService.generate('Test prompt');
    
    expect(result).toBe('Success');
    expect(mockClient.chat.completions.create).toHaveBeenCalledTimes(2);
  });
});
```

### Integration Testing
```typescript
// Integration tests for AI services (use test API keys)
describe('AI Integration Tests', () => {
  const testApiKey = process.env.TEST_OPENAI_API_KEY;
  
  beforeAll(() => {
    if (!testApiKey) {
      throw new Error('TEST_OPENAI_API_KEY required for integration tests');
    }
  });

  it('should successfully call real AI service', async () => {
    const client = new OpenAI({ apiKey: testApiKey });
    const service = new AIService(client);
    
    const response = await service.generate('Say "test successful"');
    
    expect(response).toContain('test successful');
  }, 30000); // 30 second timeout for AI calls
});
```

## Error Handling Patterns

### Comprehensive Error Handling
```typescript
async function robustAICall(prompt: string): Promise<string> {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= MAX_RETRY_ATTEMPTS; attempt++) {
    try {
      const response = await aiClient.generate(prompt, {
        timeout: AI_SERVICE_TIMEOUT_MS,
      });
      
      if (!response?.content) {
        throw new Error('Empty response from AI service');
      }
      
      return response.content;
      
    } catch (error) {
      lastError = error;
      
      // Don't retry non-retryable errors
      if (error.statusCode === 400 || error.statusCode === 401) {
        throw error;
      }
      
      // Wait before retrying
      if (attempt < MAX_RETRY_ATTEMPTS) {
        const delay = Math.min(1000 * Math.pow(2, attempt - 1), 10000);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw new Error(`AI service failed after ${MAX_RETRY_ATTEMPTS} attempts: ${lastError.message}`);
}
```

### Input Validation
```typescript
function validateAIPrompt(prompt: string): void {
  if (!prompt || typeof prompt !== 'string') {
    throw new Error('Prompt must be a non-empty string');
  }
  
  if (prompt.length > MAX_PROMPT_LENGTH) {
    throw new Error(`Prompt exceeds maximum length of ${MAX_PROMPT_LENGTH} characters`);
  }
  
  // Check for potential security issues
  if (prompt.includes('<script>') || prompt.includes('javascript:')) {
    throw new Error('Prompt contains potentially unsafe content');
  }
}
```

## Performance Guidelines

### Efficient AI Operations
```typescript
// Cache expensive AI operations
const responseCache = new Map<string, { content: string; timestamp: number }>();
const CACHE_TTL_MS = 300000; // 5 minutes

async function getCachedAIResponse(prompt: string): Promise<string> {
  const cacheKey = createHash('sha256').update(prompt).digest('hex');
  const cached = responseCache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.content;
  }
  
  const response = await generateAIResponse(prompt);
  responseCache.set(cacheKey, {
    content: response,
    timestamp: Date.now(),
  });
  
  return response;
}

// Batch AI requests when possible
async function batchAIRequests(prompts: string[]): Promise<string[]> {
  const batchSize = 5; // Adjust based on API limits
  const results: string[] = [];
  
  for (let i = 0; i < prompts.length; i += batchSize) {
    const batch = prompts.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(prompt => generateAIResponse(prompt))
    );
    results.push(...batchResults);
  }
  
  return results;
}
```

---

*These code quality guidelines ensure maintainable, reliable, and performant AI applications that follow TypeScript and modern JavaScript best practices.*