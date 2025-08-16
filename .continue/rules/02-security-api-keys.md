---
name: Security and API Keys
alwaysApply: true
description: Security guidelines for AI projects and API key management
---

# Security and API Key Management

## API Key Security

### Environment Variable Management
- **Never commit API keys or secrets to version control**
- Use environment variables for all sensitive configuration
- Maintain `.env.example` with documented required variables
- Use descriptive variable names: `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`

### Example Environment Configuration
```bash
# AI Service API Keys
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
HUGGINGFACE_API_KEY=hf_...

# Model Configuration
OPENAI_MODEL=gpt-4
ANTHROPIC_MODEL=claude-3-sonnet-20240229
MAX_TOKENS=2048

# Rate Limiting
REQUESTS_PER_MINUTE=60
```

### API Key Validation Pattern
```javascript
// Validate API keys at startup
function validateApiKeys() {
  const requiredKeys = ['OPENAI_API_KEY', 'ANTHROPIC_API_KEY'];
  const missing = requiredKeys.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required API keys: ${missing.join(', ')}`);
  }
}
```

## Data Privacy and Handling

### User Data Protection
- Never store user data without explicit consent
- Implement data retention policies for AI interactions
- Use proper data sanitization techniques
- Consider privacy implications of AI processing
- Anonymize sensitive data before sending to AI services

### Input Validation and Sanitization
```javascript
// Sanitize user inputs before AI processing
function sanitizeInput(input) {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  
  // Remove potential injection patterns
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .slice(0, 10000); // Limit length
}
```

## Rate Limiting and Cost Control

### Implementation Guidelines
- Implement rate limiting for AI API calls
- Monitor token usage and costs
- Set maximum request limits per user/session
- Use circuit breakers for failing services

### Rate Limiting Example
```javascript
// Simple rate limiting implementation
const rateLimiter = new Map();

function checkRateLimit(userId, maxRequests = 10, windowMs = 60000) {
  const now = Date.now();
  const userRequests = rateLimiter.get(userId) || [];
  
  // Filter recent requests
  const recentRequests = userRequests.filter(time => now - time < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    throw new Error('Rate limit exceeded');
  }
  
  recentRequests.push(now);
  rateLimiter.set(userId, recentRequests);
}
```

## Secure Development Practices

### Code Security
- Validate all inputs to AI services
- Use secure HTTP headers in API responses
- Implement proper authentication and authorization
- Regular security audits of AI integrations
- Keep dependencies updated and scan for vulnerabilities