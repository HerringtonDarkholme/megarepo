**CRITICAL SECURITY REQUIREMENTS:**

Never commit API keys, secrets, or credentials to version control. This is an absolute requirement for AI projects that integrate with external services.

**API Key Management:**
- Use environment variables for all sensitive configuration
- Store API keys in `.env.local` (which is gitignored)
- Provide `.env.example` with placeholder values
- Never hardcode API keys in source code
- Use environment variable validation in production

**Environment Variable Patterns:**
```typescript
// Correct approach - environment variables
const openaiApiKey = process.env.OPENAI_API_KEY;
const anthropicApiKey = process.env.ANTHROPIC_API_KEY;

// NEVER do this - hardcoded secrets
const apiKey = "sk-1234567890abcdef"; // ❌ NEVER COMMIT
```

**Environment File Structure:**
```bash
# .env.example (committed to repo)
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
HUGGINGFACE_API_KEY=your_huggingface_api_key_here

# .env.local (never committed - in .gitignore)
OPENAI_API_KEY=sk-actual_secret_key_here
ANTHROPIC_API_KEY=claude-actual_secret_key_here
```

**Secret Validation Patterns:**
```typescript
// Validate environment variables at startup
function validateEnvironment() {
  const requiredEnvVars = ['OPENAI_API_KEY'];
  const missing = requiredEnvVars.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}
```

**Before Committing - Secret Detection:**
Always check for secrets before committing using one of these methods:

1. **Preferred**: Use dedicated tools like gitleaks or git-secrets:
   ```bash
   gitleaks detect --staged
   git secrets --scan
   ```

2. **Fallback**: Use grep pattern detection:
   ```bash
   git diff --cached --name-only | xargs grep -E -i 'key|secret|token|password|aws_|access[_-]?key|private[_-]?key|client[_-]?id|client[_-]?secret'
   ```

**AI Service Security Best Practices:**
- Implement rate limiting for AI API calls
- Use API key rotation strategies
- Monitor API usage and costs
- Implement request timeout handling
- Log API failures without exposing sensitive data
- Use different API keys for development and production environments

**Error Handling Without Exposing Secrets:**
```typescript
try {
  const response = await openai.chat.completions.create(request);
  return response;
} catch (error) {
  // Log error without exposing API key
  console.error('OpenAI API call failed:', {
    message: error.message,
    status: error.status,
    // Never log the full error object which may contain API keys
  });
  throw new AIServiceError('AI service temporarily unavailable');
}
```

**Client-Side Security:**
- Never expose API keys to client-side code
- Use server-side proxy endpoints for AI service calls
- Implement authentication for AI endpoints
- Validate and sanitize all user inputs before sending to AI services

**Production Security Checklist:**
- [ ] All API keys are in environment variables
- [ ] .env files are in .gitignore
- [ ] No secrets in source code or commit history
- [ ] API rate limiting implemented
- [ ] Error handling doesn't expose sensitive information
- [ ] Client-side code doesn't contain API keys
- [ ] Authentication implemented for AI endpoints