# Security Guidelines

## API Key and Credential Management
**CRITICAL**: Never commit sensitive data to version control.

### Environment Variable Patterns
```bash
# Required AI service keys
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
HUGGINGFACE_API_KEY=hf_...

# Optional service configurations
AI_MODEL_TEMPERATURE=0.7
AI_MAX_TOKENS=2048
AI_RATE_LIMIT_PER_HOUR=100
```

### Security Best Practices
- Use `.env.local` for development secrets (never commit)
- Create `.env.example` with dummy values to document required variables
- Implement API key rotation strategies for production deployments
- Use secure key management services (AWS Secrets Manager, Azure Key Vault, etc.)
- Validate API keys on application startup and fail fast if missing

## AI Service Security

### Input Validation
Always validate and sanitize inputs to AI services:
```javascript
// Validate prompt length and content
function validatePrompt(prompt) {
  if (!prompt || typeof prompt !== 'string') {
    throw new Error('Invalid prompt: must be a non-empty string');
  }
  
  if (prompt.length > 10000) {
    throw new Error('Prompt too long: maximum 10,000 characters');
  }
  
  // Remove potential injection attacks
  const sanitized = prompt.replace(/[<>]/g, '');
  return sanitized;
}
```

### Output Sanitization
Sanitize AI service responses before displaying to users:
```javascript
// Sanitize AI responses for display
function sanitizeAIResponse(response) {
  // Remove potential script injections
  return response
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .trim();
}
```

### Rate Limiting and Usage Control
Implement safeguards against API abuse:
```javascript
// Example rate limiting implementation
const rateLimiter = new Map();

function checkRateLimit(userId, maxRequests = 10, windowMs = 60000) {
  const now = Date.now();
  const userRequests = rateLimiter.get(userId) || [];
  
  // Remove old requests outside the window
  const validRequests = userRequests.filter(time => now - time < windowMs);
  
  if (validRequests.length >= maxRequests) {
    throw new Error('Rate limit exceeded');
  }
  
  validRequests.push(now);
  rateLimiter.set(userId, validRequests);
}
```

## Data Privacy and Compliance

### User Data Handling
- Never log sensitive user inputs or AI responses
- Implement data retention policies for AI interactions
- Consider GDPR and other privacy regulations
- Provide user controls for data deletion

### AI Service Data Policies
- Understand data usage policies of each AI provider
- Implement opt-out mechanisms for data training
- Consider on-premise or private cloud AI solutions for sensitive data
- Document data flow and processing for compliance audits

## Error Handling Security
Avoid exposing sensitive information in error messages:
```javascript
// Secure error handling
try {
  const response = await aiService.complete(prompt);
  return response;
} catch (error) {
  // Log detailed error internally
  console.error('AI service error:', error);
  
  // Return generic error to user
  throw new Error('AI service temporarily unavailable');
}
```

## Production Security Checklist
- [ ] All API keys stored in secure environment variables
- [ ] Input validation implemented for all AI service calls
- [ ] Output sanitization applied to AI responses
- [ ] Rate limiting configured for API endpoints
- [ ] Error messages don't expose sensitive information
- [ ] Data retention policies documented and implemented
- [ ] Security headers configured for web applications
- [ ] HTTPS enforced for all AI service communications