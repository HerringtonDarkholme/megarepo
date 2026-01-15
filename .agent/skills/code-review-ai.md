# Code Review for AI Projects Skill

## Purpose
Conduct thorough code reviews for AI-related code, focusing on AI-specific patterns, security, performance, and best practices.

## When to Use
- Reviewing pull requests with AI integrations
- Auditing existing AI code
- Providing feedback on AI implementations
- Ensuring code quality standards

## Review Checklist

### 1. API Integration Review

#### Authentication & Security
- [ ] API keys stored in environment variables (not hardcoded)
- [ ] Proper error handling for authentication failures
- [ ] API key rotation strategy documented
- [ ] Rate limiting implemented
- [ ] Request/response logging without sensitive data

#### Error Handling
```typescript
// ❌ Bad: No error handling
const response = await openai.chat.completions.create(params);

// ✅ Good: Comprehensive error handling
try {
  const response = await openai.chat.completions.create(params);
  return response.choices[0].message.content;
} catch (error) {
  if (error.status === 429) {
    throw new RateLimitError('Rate limit exceeded, retry after delay');
  } else if (error.status === 401) {
    throw new AuthenticationError('Invalid API key');
  } else {
    logger.error('AI API error', { error: error.message });
    throw new AIServiceError('AI service temporarily unavailable');
  }
}
```

### 2. Prompt Security Review

#### Prompt Injection Prevention
```typescript
// ❌ Bad: Direct concatenation (vulnerable to injection)
const prompt = `Summarize: ${userInput}`;

// ✅ Good: Structured messages with clear boundaries
const messages = [
  { role: 'system', content: 'You are a summarization assistant.' },
  { role: 'user', content: userInput }
];
```

#### Input Validation
- [ ] User inputs validated and sanitized
- [ ] Length limits enforced
- [ ] Special characters handled safely
- [ ] Input allowlist/denylist implemented where appropriate

### 3. Performance Review

#### Token Efficiency
```typescript
// ❌ Bad: Verbose prompt wasting tokens
const prompt = `I would like you to please help me by carefully 
analyzing and then providing a detailed summary of the following text...`;

// ✅ Good: Concise and clear
const prompt = `Summarize the following text concisely:`;
```

#### Caching Strategy
- [ ] Repeated requests cached appropriately
- [ ] Cache invalidation strategy defined
- [ ] Embeddings cached for reuse
- [ ] Response caching for identical inputs

#### Async Operations
```typescript
// ❌ Bad: Sequential processing
for (const item of items) {
  await processWithAI(item);
}

// ✅ Good: Parallel processing with concurrency limit
const results = await pMap(items, processWithAI, { concurrency: 5 });
```

### 4. Code Quality Review

#### Type Safety
```typescript
// ❌ Bad: Untyped AI responses
const response = await callAI(prompt);
const data = response.data;

// ✅ Good: Strong typing with validation
interface AIResponse {
  content: string;
  tokensUsed: number;
  model: string;
}

const response = await callAI(prompt);
const validatedData = AIResponseSchema.parse(response);
```

#### Error Messages
- [ ] User-friendly error messages
- [ ] Technical details logged but not exposed to users
- [ ] No API keys or sensitive data in errors
- [ ] Actionable error descriptions

### 5. Testing Review

#### Test Coverage
- [ ] Unit tests for AI service wrappers
- [ ] Integration tests with mocked APIs
- [ ] Error scenario tests
- [ ] Edge case tests

```typescript
// Example: Good test structure
describe('AIService', () => {
  it('should handle rate limit errors gracefully', async () => {
    mockAPI.mockRejectedValueOnce(new RateLimitError());
    
    await expect(aiService.generate('test'))
      .rejects.toThrow(RateLimitError);
    
    expect(logger.warn).toHaveBeenCalledWith('Rate limit hit');
  });
  
  it('should retry on transient failures', async () => {
    mockAPI
      .mockRejectedValueOnce(new NetworkError())
      .mockResolvedValueOnce({ content: 'success' });
    
    const result = await aiService.generate('test');
    expect(result).toBe('success');
    expect(mockAPI).toHaveBeenCalledTimes(2);
  });
});
```

### 6. Monitoring & Observability

#### Logging
```typescript
// ❌ Bad: Missing context
logger.info('AI request completed');

// ✅ Good: Rich contextual logging
logger.info('AI request completed', {
  model: 'gpt-4',
  tokensUsed: response.usage.total_tokens,
  latencyMs: endTime - startTime,
  userId: req.user.id,
  cost: calculateCost(response.usage),
});
```

#### Metrics
- [ ] Token usage tracked
- [ ] Latency metrics collected
- [ ] Error rates monitored
- [ ] Cost per request calculated

### 7. Documentation Review

#### Code Comments
- [ ] Complex AI logic explained
- [ ] Prompt engineering decisions documented
- [ ] Model selection rationale provided
- [ ] Known limitations noted

```typescript
/**
 * Generates a summary using GPT-4.
 * 
 * We use GPT-4 (not GPT-3.5) because:
 * - Better handling of technical content
 * - More consistent formatting
 * - Worth the 10x cost increase for this use case
 * 
 * @param text - Text to summarize (max 4000 tokens)
 * @param maxLength - Target summary length in words
 * @returns Summary with metadata
 * @throws RateLimitError if rate limit exceeded
 */
```

## Review Process

### 1. Initial Scan
- Check file structure and organization
- Verify imports and dependencies
- Look for obvious security issues
- Identify AI service integrations

### 2. Deep Review
- Analyze prompt engineering approach
- Review error handling patterns
- Evaluate performance considerations
- Check test coverage

### 3. Security Audit
- Verify no hardcoded secrets
- Check input validation
- Review prompt injection risks
- Validate data privacy handling

### 4. Provide Feedback
- Prioritize critical issues (security, reliability)
- Suggest improvements with examples
- Explain rationale for recommendations
- Acknowledge good practices

## Common Issues to Flag

### Critical Issues
- Hardcoded API keys
- Missing error handling
- Prompt injection vulnerabilities
- Exposed sensitive data in logs
- Missing rate limiting

### Important Issues
- Inefficient token usage
- Missing type safety
- Inadequate testing
- Poor error messages
- Missing documentation

### Nice-to-Haves
- Code organization improvements
- Performance optimizations
- Better naming conventions
- Additional test coverage

## Review Comments Template

### Blocking Issue
```
🚨 BLOCKING: API key is hardcoded

This is a security vulnerability. Move the API key to environment variables:

```typescript
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) throw new Error('OPENAI_API_KEY not set');
```
```

### Important Suggestion
```
💡 Consider adding retry logic for transient failures

Current code fails immediately on network errors. Suggest:

```typescript
await retry(
  () => callAI(prompt),
  { retries: 3, factor: 2 }
);
```
```

### Optional Improvement
```
✨ Optional: This prompt could be more token-efficient

Current: 45 tokens
Suggested: 20 tokens (saves ~55%)

Consider: "Summarize concisely:" instead of longer version
```
