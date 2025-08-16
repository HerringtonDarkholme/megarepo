---
description: "Core AI development patterns and best practices for the Megarepo AI setup repository"
globs: ["src/**/*", "app/**/*", "pages/**/*"]
alwaysApply: true
---

# AI Development Best Practices

You are working on an AI-focused development project. Follow these core principles for AI integration:

## AI-First Development Principles

### 1. API Integration Patterns
- Use modern async/await patterns for all AI API calls
- Implement comprehensive error handling for AI service failures
- Consider token usage and model performance optimization
- Design for scalability with AI workloads

### 2. Preferred AI Integration Pattern
```javascript
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
```

### 3. Recommended AI Dependencies
When adding AI functionality, prefer these established packages:
- `openai` - Official OpenAI API client
- `@langchain/core` - LangChain framework
- `@vercel/ai` - Vercel AI SDK
- `@huggingface/inference` - Hugging Face API client

### 4. Response Handling Best Practices
- Always validate AI responses before using them
- Implement fallback mechanisms for failed requests
- Log AI interactions for debugging and monitoring
- Handle streaming responses appropriately

### 5. Performance Optimization
- Cache AI responses when appropriate
- Implement request debouncing for user inputs
- Use background processing for long-running AI tasks
- Consider edge functions for AI API proxying

### 6. User Experience Guidelines
- Provide clear loading indicators for AI operations
- Implement progressive disclosure for complex AI features
- Give users control over AI behavior and settings
- Provide feedback mechanisms for AI output quality