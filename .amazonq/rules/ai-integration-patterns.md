**Comprehensive Guidelines for AI Service Integrations:**

When integrating AI services into this repository, follow these patterns for consistent, reliable, and maintainable implementations.

**Multi-Provider Architecture:**
Design AI integrations to support multiple providers and easy switching:
```typescript
// Abstract AI provider interface
interface AIProvider {
  generateResponse(prompt: string, options?: AIOptions): Promise<AIResponse>;
  generateEmbeddings(text: string): Promise<number[]>;
  getModels(): string[];
}

// Provider factory pattern
class AIProviderFactory {
  static create(provider: 'openai' | 'anthropic' | 'huggingface'): AIProvider {
    switch (provider) {
      case 'openai': return new OpenAIProvider();
      case 'anthropic': return new AnthropicProvider();
      case 'huggingface': return new HuggingFaceProvider();
    }
  }
}
```

**Request/Response Patterns:**
Implement consistent request and response handling across all AI services:
```typescript
interface AIRequest {
  prompt: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
  timeout?: number;
}

interface AIResponse {
  content: string;
  model: string;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    estimatedCost?: number;
  };
  metadata: {
    requestId: string;
    timestamp: Date;
    latency: number;
  };
}
```

**Error Handling Strategy:**
Implement comprehensive error handling with proper classification:
```typescript
// Error hierarchy for AI services
abstract class AIError extends Error {
  abstract readonly retryable: boolean;
  abstract readonly userFacing: string;
}

class AIRateLimitError extends AIError {
  readonly retryable = true;
  readonly userFacing = 'Service is busy. Please try again in a moment.';
}

class AIQuotaExceededError extends AIError {
  readonly retryable = false;
  readonly userFacing = 'API quota exceeded. Please check your billing.';
}

class AIServiceUnavailableError extends AIError {
  readonly retryable = true;
  readonly userFacing = 'AI service is temporarily unavailable.';
}
```

**Retry Logic with Exponential Backoff:**
```typescript
async function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxRetries || !error.retryable) {
        throw error;
      }
      
      const delay = baseDelay * Math.pow(2, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
```

**Streaming Response Handling:**
For real-time AI interactions, implement proper streaming:
```typescript
async function* streamAIResponse(
  prompt: string,
  options: AIStreamOptions = {}
): AsyncGenerator<string, void, unknown> {
  const stream = await aiClient.chat.completions.create({
    ...options,
    prompt,
    stream: true,
  });

  for await (const chunk of stream) {
    if (chunk.choices[0]?.delta?.content) {
      yield chunk.choices[0].delta.content;
    }
  }
}
```

**Caching Strategy:**
Implement intelligent caching for AI responses to reduce costs and improve performance:
```typescript
interface CacheEntry {
  response: AIResponse;
  timestamp: Date;
  ttl: number;
}

class AIResponseCache {
  private cache = new Map<string, CacheEntry>();
  
  generateKey(prompt: string, model: string): string {
    return `${model}:${crypto.createHash('sha256').update(prompt).digest('hex')}`;
  }
  
  async get(prompt: string, model: string): Promise<AIResponse | null> {
    const key = this.generateKey(prompt, model);
    const entry = this.cache.get(key);
    
    if (entry && Date.now() - entry.timestamp.getTime() < entry.ttl) {
      return entry.response;
    }
    
    this.cache.delete(key);
    return null;
  }
}
```

**Rate Limiting Implementation:**
```typescript
class RateLimiter {
  private requests: Date[] = [];
  
  constructor(
    private maxRequests: number,
    private windowMs: number
  ) {}
  
  async acquire(): Promise<void> {
    const now = new Date();
    const windowStart = new Date(now.getTime() - this.windowMs);
    
    // Clean old requests
    this.requests = this.requests.filter(req => req > windowStart);
    
    if (this.requests.length >= this.maxRequests) {
      const oldestRequest = this.requests[0];
      const waitTime = this.windowMs - (now.getTime() - oldestRequest.getTime());
      await new Promise(resolve => setTimeout(resolve, waitTime));
      return this.acquire();
    }
    
    this.requests.push(now);
  }
}
```

**Monitoring and Observability:**
Implement comprehensive monitoring for AI service usage:
```typescript
interface AIMetrics {
  requestCount: number;
  errorRate: number;
  averageLatency: number;
  tokenUsage: number;
  estimatedCost: number;
}

class AIMonitor {
  private metrics: AIMetrics = {
    requestCount: 0,
    errorRate: 0,
    averageLatency: 0,
    tokenUsage: 0,
    estimatedCost: 0,
  };
  
  recordRequest(latency: number, tokens: number, cost: number, error?: Error) {
    this.metrics.requestCount++;
    this.metrics.tokenUsage += tokens;
    this.metrics.estimatedCost += cost;
    
    // Update rolling averages
    this.updateLatency(latency);
    this.updateErrorRate(!!error);
  }
}
```

**Input Validation and Sanitization:**
Always validate and sanitize inputs before sending to AI services:
```typescript
function sanitizePrompt(prompt: string): string {
  // Remove potential injection attempts
  return prompt
    .replace(/\b(ignore|forget|disregard)\s+(previous|above|all)\s+(instructions?|prompts?)/gi, '')
    .replace(/\b(system|assistant|user):\s*/gi, '')
    .trim();
}

function validatePromptLength(prompt: string, maxLength: number = 4000): void {
  if (prompt.length > maxLength) {
    throw new Error(`Prompt exceeds maximum length of ${maxLength} characters`);
  }
}
```

**Configuration Management:**
Centralize AI service configuration with environment-based overrides:
```typescript
interface AIConfig {
  openai: {
    apiKey: string;
    baseURL?: string;
    defaultModel: string;
    timeout: number;
    maxRetries: number;
  };
  anthropic: {
    apiKey: string;
    defaultModel: string;
    timeout: number;
  };
  rateLimit: {
    requestsPerMinute: number;
    burstLimit: number;
  };
}

const aiConfig: AIConfig = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY!,
    baseURL: process.env.OPENAI_BASE_URL,
    defaultModel: process.env.OPENAI_DEFAULT_MODEL || 'gpt-3.5-turbo',
    timeout: parseInt(process.env.AI_TIMEOUT || '30000'),
    maxRetries: parseInt(process.env.AI_MAX_RETRIES || '3'),
  },
  // ... other providers
};
```

**Testing Strategies:**
Implement comprehensive testing for AI integrations:
```typescript
// Mock AI responses for testing
const mockAIProvider: AIProvider = {
  async generateResponse(prompt: string): Promise<AIResponse> {
    return {
      content: `Mock response for: ${prompt}`,
      model: 'mock-model',
      usage: { promptTokens: 10, completionTokens: 20, totalTokens: 30 },
      metadata: { requestId: 'mock-123', timestamp: new Date(), latency: 100 }
    };
  }
};

// Integration tests with real services (use sparingly)
describe('AI Integration (Live)', () => {
  it('should handle real API calls', async () => {
    if (!process.env.OPENAI_API_KEY) {
      console.warn('Skipping live AI test - no API key');
      return;
    }
    
    const response = await aiProvider.generateResponse('Hello');
    expect(response.content).toBeTruthy();
  });
});
```