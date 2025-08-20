# Security and API Key Management

## API Key Security Best Practices

### Environment Variable Management
- Always use environment variables for API keys and sensitive configuration
- Never commit API keys, tokens, or credentials to version control
- Use `.env.local` for local development (never commit this file)
- Maintain `.env.example` with dummy values showing required variables

### Required Environment Variables for AI Services
```bash
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4
OPENAI_MAX_TOKENS=2048
OPENAI_TEMPERATURE=0.7

# Anthropic Configuration  
ANTHROPIC_API_KEY=your_anthropic_api_key_here
ANTHROPIC_MODEL=claude-3-sonnet-20240229

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### Secure API Implementation Patterns
```javascript
// Secure API route implementation
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Validate API key exists
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'API key not configured' }, 
      { status: 500 }
    );
  }

  // Rate limiting and validation
  const body = await request.json();
  if (!body.prompt || typeof body.prompt !== 'string') {
    return NextResponse.json(
      { error: 'Invalid prompt' }, 
      { status: 400 }
    );
  }

  // Safe API call with timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4',
        messages: [{ role: 'user', content: body.prompt }],
        max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS || '2048')
      }),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('AI API error:', error);
    return NextResponse.json(
      { error: 'AI service temporarily unavailable' }, 
      { status: 503 }
    );
  }
}
```

### Security Guidelines
- Implement proper request validation and sanitization
- Use server-side API routes to proxy AI service calls
- Never expose API keys in client-side code
- Implement rate limiting and request size limits
- Log security events and API usage for monitoring
- Use HTTPS in production environments
- Implement proper CORS policies for API endpoints