# Security Guidelines for JetBrains AI Assistant

**Security guidelines and API key management best practices for AI development in the Megarepo repository.**

## Core Security Principles

### 1. API Key and Credential Management
- **NEVER** commit API keys, secrets, or credentials to version control
- Always use environment variables for sensitive data
- Create `.env.example` files to document required environment variables
- Implement proper API key rotation and management patterns
- Use secure storage solutions for production deployments

### 2. Environment Variable Security
Create `.env.local` with these patterns:
```env
# AI Service Keys (never commit these)
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here
HUGGINGFACE_API_KEY=your_huggingface_key_here
GOOGLE_AI_API_KEY=your_google_ai_key_here

# Application Settings
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Database (if needed)
DATABASE_URL=your_database_url_here
```

### 3. Secure Environment Variable Validation
```typescript
// Always validate required environment variables
function validateEnvironment() {
  const requiredVars = [
    'OPENAI_API_KEY',
    'ANTHROPIC_API_KEY'
  ];
  
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

// Call at application startup
validateEnvironment();
```

## AI Service Security

### Input Validation
```typescript
// Validate and sanitize inputs before sending to AI services
function sanitizeInput(input: string): string {
  // Remove potential injection attempts
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .trim();
}

// Limit input length to prevent excessive token usage
function validateInputLength(input: string, maxLength: number = 10000): void {
  if (input.length > maxLength) {
    throw new Error(`Input exceeds maximum length of ${maxLength} characters`);
  }
}
```

### Output Sanitization
```typescript
// Sanitize AI responses before displaying to users
function sanitizeAIResponse(response: string): string {
  // Remove potential XSS vectors
  return response
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '');
}
```

### Rate Limiting and Abuse Prevention
```typescript
// Implement rate limiting for AI service calls
const rateLimiter = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(userId: string, maxRequests: number = 100, windowMs: number = 3600000): boolean {
  const now = Date.now();
  const userLimit = rateLimiter.get(userId);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimiter.set(userId, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (userLimit.count >= maxRequests) {
    return false; // Rate limit exceeded
  }
  
  userLimit.count++;
  return true;
}
```

## Data Privacy Guidelines

### 1. Data Minimization
- Avoid sending sensitive user data to AI services
- Implement data anonymization where possible
- Only send necessary data for the AI task
- Consider using synthetic or mock data for development

### 2. Data Retention
- Document data usage and retention policies
- Implement automatic data deletion where appropriate
- Follow GDPR and privacy regulations
- Provide users with data control options

### 3. Geographic Restrictions
```typescript
// Handle geographic restrictions for AI services
function checkServiceAvailability(userCountry: string, service: string): boolean {
  const restrictions = {
    'openai': ['CN', 'RU'], // Example restricted countries
    'anthropic': ['CN']
  };
  
  const restrictedCountries = restrictions[service] || [];
  return !restrictedCountries.includes(userCountry);
}

// Provide graceful fallbacks
async function getAIResponse(prompt: string, userCountry: string) {
  if (!checkServiceAvailability(userCountry, 'openai')) {
    // Fallback to alternative service or show appropriate message
    throw new Error('AI service not available in your region');
  }
  
  return await openaiClient.generate(prompt);
}
```

## API Security Best Practices

### 1. Secure Communication
- Use HTTPS for all AI API communications
- Implement proper CORS settings
- Validate SSL certificates
- Use secure connection pooling

### 2. Authentication Patterns
```typescript
// Secure API client initialization
function createSecureAIClient(apiKey: string) {
  if (!apiKey || apiKey.length < 20) {
    throw new Error('Invalid API key format');
  }
  
  return new OpenAI({
    apiKey,
    timeout: 30000,
    maxRetries: 3,
    dangerouslyAllowBrowser: false // Never expose in browser
  });
}
```

### 3. Error Handling Security
```typescript
// Secure error handling - don't expose sensitive details
try {
  const response = await aiService.generate(prompt);
  return response;
} catch (error) {
  // Log full error details securely server-side
  console.error('AI service error:', {
    timestamp: Date.now(),
    service: 'openai',
    errorType: error.type,
    statusCode: error.status,
    // Don't log the actual API key or sensitive data
  });
  
  // Return generic error to client
  throw new Error('AI service temporarily unavailable');
}
```

## Security Monitoring

### 1. Logging Security Events
```typescript
// Security event logging
function logSecurityEvent(event: string, details: Record<string, any>) {
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    event,
    details: {
      ...details,
      // Redact sensitive information
      apiKey: details.apiKey ? '[REDACTED]' : undefined
    }
  }));
}

// Examples of security events to log
logSecurityEvent('api_key_rotation', { service: 'openai' });
logSecurityEvent('rate_limit_exceeded', { userId: 'user123' });
logSecurityEvent('suspicious_input_detected', { inputLength: 50000 });
```

### 2. Health Checks
```typescript
// Regular security health checks
async function performSecurityHealthCheck() {
  const checks = {
    envVarsPresent: checkRequiredEnvVars(),
    apiKeysValid: await validateApiKeys(),
    rateLimitsActive: checkRateLimiters(),
    httpsEnforced: checkHttpsEnforcement()
  };
  
  logSecurityEvent('security_health_check', checks);
  return checks;
}
```

## Compliance and Auditing

### 1. Security Audit Trail
- Maintain logs of all AI service interactions
- Track API key usage and rotation
- Monitor for unusual patterns or potential breaches
- Regular security assessments

### 2. Compliance Requirements
- Follow industry standards (SOC 2, ISO 27001)
- Implement data protection measures (GDPR, CCPA)
- Regular security training for development team
- Document security procedures and incident response

---

*These security guidelines ensure safe and compliant AI development practices while protecting sensitive data and maintaining user trust.*