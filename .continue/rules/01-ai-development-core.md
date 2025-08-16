---
name: AI Development Core
alwaysApply: true
description: Core AI development patterns and best practices for the Megarepo AI setup repository
---

# AI Development Core Rules

You are working on an AI-focused development project template. Follow these core principles for AI integration:

## AI-First Development Principles

### Repository Context
- This is an AI setup repository template designed for AI-related projects
- Repository is currently in minimal state with basic configuration files
- Prioritize AI integration patterns and best practices in all code suggestions
- Consider model performance, API efficiency, and token usage optimization
- Design for scalability with AI workloads and multiple service integrations

### Technology Stack
- Follow Node.js/Next.js development patterns as the primary technology stack
- Use TypeScript when adding JavaScript functionality for better type safety
- Structure AI-related code in logical, modular components under `src/lib/`
- Follow the existing patterns established in other AI configuration files

### Preferred AI Integration Pattern
```javascript
// Example AI API integration with proper error handling
const aiResponse = await fetch('/api/ai-service', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.AI_API_KEY}`
  },
  body: JSON.stringify({ prompt, options })
});

if (!aiResponse.ok) {
  throw new Error(`AI service error: ${aiResponse.status}`);
}

const data = await aiResponse.json();
```

### Recommended AI Dependencies
When adding AI functionality, prefer these established packages:
- `openai` - Official OpenAI API client
- `@langchain/core` - LangChain framework
- `@vercel/ai` - Vercel AI SDK for streaming and UI integrations
- `@huggingface/inference` - Hugging Face API client

### Error Handling Best Practices
- Implement comprehensive error handling for AI service failures and rate limits
- Implement retry logic with exponential backoff for AI API calls
- Handle streaming responses appropriately
- Log AI interactions for debugging and monitoring
- Provide meaningful error messages for AI service failures

### Performance Optimization
- Cache AI responses when appropriate
- Implement request debouncing for user inputs
- Use background processing for long-running AI tasks
- Consider edge functions for AI API proxying
- Monitor token usage and implement cost controls