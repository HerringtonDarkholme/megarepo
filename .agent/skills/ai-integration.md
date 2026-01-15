# AI Integration Skill

## Purpose
Integrate AI services and APIs into the application with proper error handling, rate limiting, and best practices.

## When to Use
- Setting up new AI service integrations (OpenAI, Anthropic, Google AI, etc.)
- Configuring API clients and authentication
- Implementing API request/response handling
- Adding new AI capabilities to the application

## Steps

### 1. Environment Setup
- Add required API keys to `.env.example` with descriptive comments
- Never commit actual API keys to the repository
- Use environment variable validation on startup
- Document required permissions and scopes

### 2. API Client Configuration
```typescript
// Example: Configure AI client with proper error handling
import { OpenAI } from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 30000, // 30 second timeout
  maxRetries: 3,
});
```

### 3. Implement Error Handling
- Catch and handle API errors gracefully
- Implement exponential backoff for retries
- Log errors without exposing sensitive data
- Provide user-friendly error messages

### 4. Add Rate Limiting
- Implement request queuing
- Add rate limit headers handling
- Use token bucket or sliding window algorithms
- Monitor and alert on rate limit approaching

### 5. Testing Strategy
- Mock API calls in unit tests
- Use test API keys for integration tests
- Implement golden test datasets
- Test error scenarios and edge cases

## Best Practices

### API Key Security
- Store keys in environment variables
- Use key rotation policies
- Implement key usage monitoring
- Set up alerts for unusual activity

### Performance Optimization
- Cache frequently used responses
- Implement streaming for long responses
- Batch requests when possible
- Use appropriate model sizes

### Monitoring and Logging
- Log API usage and costs
- Monitor latency and error rates
- Track token usage
- Set up alerts for anomalies

## Example Implementation

```typescript
// AI Service Integration Example
import { RateLimiter } from './utils/rate-limiter';
import { CircuitBreaker } from './utils/circuit-breaker';

class AIService {
  private rateLimiter = new RateLimiter({ requestsPerMinute: 60 });
  private circuitBreaker = new CircuitBreaker({ threshold: 5 });

  async generateText(prompt: string): Promise<string> {
    await this.rateLimiter.acquire();
    
    return this.circuitBreaker.execute(async () => {
      try {
        const response = await this.client.chat.completions.create({
          model: 'gpt-4',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
        });
        
        return response.choices[0].message.content;
      } catch (error) {
        if (error.status === 429) {
          throw new RateLimitError('Rate limit exceeded');
        }
        throw error;
      }
    });
  }
}
```

## Common Pitfalls to Avoid
- Don't expose API keys in logs or error messages
- Don't skip error handling for "simple" API calls
- Don't ignore rate limits
- Don't use synchronous blocking calls
- Don't forget to implement timeouts
