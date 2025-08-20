# TypeScript Patterns for AI Development

## Advanced TypeScript Patterns for AI Services

### Generic AI Client Pattern
```typescript
// Flexible AI client that works with multiple providers
interface AIProvider<TOptions = any, TResponse = any> {
  name: string;
  generate(prompt: string, options?: TOptions): Promise<TResponse>;
  stream?(prompt: string, options?: TOptions): AsyncIterable<TResponse>;
}

class OpenAIProvider implements AIProvider<OpenAIOptions, OpenAIResponse> {
  constructor(private config: OpenAIConfig) {}
  
  async generate(prompt: string, options?: OpenAIOptions): Promise<OpenAIResponse> {
    // Implementation
  }
  
  async *stream(prompt: string, options?: OpenAIOptions): AsyncIterable<OpenAIResponse> {
    // Streaming implementation
  }
}

// Usage with type safety
const aiClient = new AIClient([
  new OpenAIProvider(openaiConfig),
  new AnthropicProvider(anthropicConfig)
]);
```

### Type-Safe Configuration Management
```typescript
// Environment configuration with validation
interface AIServiceConfig {
  readonly apiKey: string;
  readonly model: string;
  readonly maxTokens: number;
  readonly temperature: number;
  readonly timeout: number;
}

class ConfigManager {
  private static validateConfig<T>(config: Partial<T>, required: (keyof T)[]): T {
    for (const key of required) {
      if (!config[key]) {
        throw new Error(`Missing required configuration: ${String(key)}`);
      }
    }
    return config as T;
  }
  
  static getOpenAIConfig(): AIServiceConfig {
    return this.validateConfig({
      apiKey: process.env.OPENAI_API_KEY,
      model: process.env.OPENAI_MODEL || 'gpt-4',
      maxTokens: parseInt(process.env.OPENAI_MAX_TOKENS || '2048'),
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE || '0.7'),
      timeout: parseInt(process.env.OPENAI_TIMEOUT || '30000')
    }, ['apiKey', 'model', 'maxTokens', 'temperature', 'timeout']);
  }
}
```

### Error Handling with Custom Types
```typescript
// Custom error types for different AI service failures
abstract class AIError extends Error {
  abstract readonly code: string;
  abstract readonly retryable: boolean;
}

class APIKeyError extends AIError {
  readonly code = 'API_KEY_ERROR';
  readonly retryable = false;
  
  constructor(service: string) {
    super(`Invalid or missing API key for ${service}`);
  }
}

class RateLimitError extends AIError {
  readonly code = 'RATE_LIMIT_ERROR';
  readonly retryable = true;
  
  constructor(public readonly retryAfter?: number) {
    super('Rate limit exceeded');
  }
}

class ModelError extends AIError {
  readonly code = 'MODEL_ERROR';
  readonly retryable = false;
  
  constructor(model: string) {
    super(`Model '${model}' is not available`);
  }
}

// Error handling utility
function handleAIError(error: unknown): never {
  if (error instanceof AIError) {
    // Log structured error information
    console.error({
      code: error.code,
      message: error.message,
      retryable: error.retryable,
      ...(error instanceof RateLimitError && { retryAfter: error.retryAfter })
    });
    throw error;
  }
  
  // Handle unexpected errors
  console.error('Unexpected AI service error:', error);
  throw new Error('AI service temporarily unavailable');
}
```

### Streaming Response Handling
```typescript
// Type-safe streaming with proper cleanup
async function* streamAIResponse(
  provider: AIProvider,
  prompt: string,
  options?: any
): AsyncIterable<string> {
  if (!provider.stream) {
    throw new Error('Provider does not support streaming');
  }
  
  try {
    for await (const chunk of provider.stream(prompt, options)) {
      yield chunk.content;
    }
  } catch (error) {
    handleAIError(error);
  }
}

// Usage with proper resource management
async function processStreamingResponse(prompt: string) {
  const controller = new AbortController();
  
  try {
    for await (const chunk of streamAIResponse(openaiProvider, prompt)) {
      console.log('Received chunk:', chunk);
      
      // Handle cancellation
      if (controller.signal.aborted) {
        break;
      }
    }
  } finally {
    controller.abort(); // Cleanup
  }
}
```

### Utility Types for AI Operations
```typescript
// Utility types for AI service responses
type PromiseResult<T> = T extends Promise<infer U> ? U : T;
type ExtractContent<T> = T extends { content: infer U } ? U : never;

// Conditional types for different AI models
type ModelCapabilities<T extends string> = 
  T extends 'gpt-4' | 'gpt-3.5-turbo' ? { vision: boolean; functionCalling: boolean } :
  T extends 'claude-3' ? { vision: boolean; functionCalling: false } :
  { vision: false; functionCalling: false };

// Template literal types for model validation
type OpenAIModel = 'gpt-4' | 'gpt-3.5-turbo' | 'gpt-4-vision-preview';
type AnthropicModel = 'claude-3-sonnet-20240229' | 'claude-3-opus-20240229';
type SupportedModel = OpenAIModel | AnthropicModel;

function createAIRequest<M extends SupportedModel>(
  model: M,
  prompt: string
): AIRequest<ModelCapabilities<M>> {
  // Type-safe request creation based on model capabilities
  return {
    model,
    prompt,
    capabilities: getModelCapabilities(model)
  };
}
```