# AI Integration Code Patterns

## Production-Ready AI Service Integration

### Robust AI Client Implementation
```typescript
import { OpenAI } from 'openai';
import { Anthropic } from '@anthropic-ai/sdk';

class AIServiceClient {
  private openai: OpenAI;
  private anthropic: Anthropic;
  private retryConfig = { maxRetries: 3, baseDelay: 1000 };
  
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      timeout: 30000,
    });
    
    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }
  
  async generateWithRetry<T>(
    operation: () => Promise<T>,
    maxRetries: number = this.retryConfig.maxRetries
  ): Promise<T> {
    let lastError: Error;
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await operation();
      } catch (error) {
        lastError = error as Error;
        
        // Don't retry on non-retryable errors
        if (error instanceof APIKeyError || error instanceof ModelError) {
          throw error;
        }
        
        if (attempt < maxRetries) {
          const delay = this.retryConfig.baseDelay * Math.pow(2, attempt);
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
      }
    }
    
    throw lastError!;
  }
  
  async generateOpenAICompletion(
    prompt: string,
    options: Partial<OpenAI.Chat.ChatCompletionCreateParams> = {}
  ): Promise<string> {
    return this.generateWithRetry(async () => {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 2048,
        temperature: 0.7,
        ...options
      });
      
      return completion.choices[0]?.message?.content || '';
    });
  }
  
  async generateAnthropicCompletion(
    prompt: string,
    options: Partial<Anthropic.MessageCreateParams> = {}
  ): Promise<string> {
    return this.generateWithRetry(async () => {
      const message = await this.anthropic.messages.create({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 2048,
        messages: [{ role: 'user', content: prompt }],
        ...options
      });
      
      const content = message.content[0];
      return content.type === 'text' ? content.text : '';
    });
  }
}
```

### Next.js API Route Patterns
```typescript
// app/api/ai/completion/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { AIServiceClient } from '@/lib/ai/client';

// Request validation schema
const CompletionRequestSchema = z.object({
  prompt: z.string().min(1).max(4000),
  provider: z.enum(['openai', 'anthropic']).default('openai'),
  model: z.string().optional(),
  temperature: z.number().min(0).max(2).optional(),
  maxTokens: z.number().min(1).max(4000).optional()
});

// Rate limiting (implement with your preferred solution)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(ip);
  
  if (!limit || now > limit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return true;
  }
  
  if (limit.count >= 10) { // 10 requests per minute
    return false;
  }
  
  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.ip || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }
    
    // Validate request
    const body = await request.json();
    const { prompt, provider, model, temperature, maxTokens } = 
      CompletionRequestSchema.parse(body);
    
    // Generate completion
    const aiClient = new AIServiceClient();
    let completion: string;
    
    if (provider === 'openai') {
      completion = await aiClient.generateOpenAICompletion(prompt, {
        model: model as any,
        temperature,
        max_tokens: maxTokens
      });
    } else {
      completion = await aiClient.generateAnthropicCompletion(prompt, {
        model: model as any,
        max_tokens: maxTokens
      });
    }
    
    return NextResponse.json({
      completion,
      provider,
      model: model || (provider === 'openai' ? 'gpt-4' : 'claude-3-sonnet-20240229')
    });
    
  } catch (error) {
    console.error('AI completion error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request format', details: error.errors },
        { status: 400 }
      );
    }
    
    if (error instanceof AIError) {
      const status = error.retryable ? 503 : 400;
      return NextResponse.json(
        { error: error.message, code: error.code },
        { status }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### Streaming Response Implementation
```typescript
// app/api/ai/stream/route.ts
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { prompt, model = 'gpt-4' } = await request.json();
    
    const response = await openai.chat.completions.create({
      model,
      stream: true,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 2048,
      temperature: 0.7,
    });
    
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
    
  } catch (error) {
    console.error('Streaming error:', error);
    return NextResponse.json(
      { error: 'Streaming failed' },
      { status: 500 }
    );
  }
}
```

### React Hook for AI Integration
```typescript
// hooks/useAI.ts
import { useState, useCallback } from 'react';

interface UseAIOptions {
  provider?: 'openai' | 'anthropic';
  model?: string;
  onError?: (error: Error) => void;
}

interface AIState {
  completion: string;
  isLoading: boolean;
  error: string | null;
}

export function useAI(options: UseAIOptions = {}) {
  const [state, setState] = useState<AIState>({
    completion: '',
    isLoading: false,
    error: null
  });
  
  const generate = useCallback(async (prompt: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const response = await fetch('/api/ai/completion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          provider: options.provider || 'openai',
          model: options.model
        })
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'AI request failed');
      }
      
      const data = await response.json();
      setState(prev => ({
        ...prev,
        completion: data.completion,
        isLoading: false
      }));
      
      return data.completion;
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setState(prev => ({
        ...prev,
        error: errorMessage,
        isLoading: false
      }));
      
      options.onError?.(error as Error);
      throw error;
    }
  }, [options.provider, options.model, options.onError]);
  
  const reset = useCallback(() => {
    setState({ completion: '', isLoading: false, error: null });
  }, []);
  
  return {
    ...state,
    generate,
    reset
  };
}
```