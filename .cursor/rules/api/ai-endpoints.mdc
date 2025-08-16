---
description: "API route patterns and AI service integration guidelines"
globs: ["**/api/**/*", "src/lib/api/**/*"]
alwaysApply: false
---

# API Development Guidelines

Specific rules for API routes and AI service integrations.

## API Route Patterns

### 1. AI Service Endpoints
```typescript
// app/api/ai/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { prompt, model = 'gpt-3.5-turbo' } = await request.json();
    
    // Validate inputs
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Valid prompt required' },
        { status: 400 }
      );
    }
    
    // Call AI service
    const response = await aiClient.complete(prompt, { model });
    
    return NextResponse.json({ 
      content: response.content,
      usage: response.usage 
    });
  } catch (error) {
    console.error('AI API error:', error);
    return NextResponse.json(
      { error: 'AI service temporarily unavailable' },
      { status: 500 }
    );
  }
}
```

### 2. Middleware Patterns
- Implement authentication middleware for AI endpoints
- Add rate limiting for AI API calls
- Include request logging and monitoring
- Validate API keys and permissions

### 3. Error Response Standards
```typescript
// Consistent error response format
interface APIError {
  error: string;
  code?: string;
  details?: Record<string, any>;
}
```

### 4. Response Streaming
- Use streaming for long AI responses
- Implement proper cleanup for streaming connections
- Handle client disconnections gracefully