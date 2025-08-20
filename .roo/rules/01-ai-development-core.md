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
  body: JSON.stringify({ prompt, model, parameters })
});

if (!aiResponse.ok) {
  throw new Error(`AI service error: ${aiResponse.status}`);
}

const result = await aiResponse.json();
```

### Core Development Patterns
- Always validate and sanitize inputs before sending to AI services
- Implement proper error handling and graceful degradation
- Use environment variables for API keys and configuration
- Follow the repository's established file organization patterns
- Maintain consistency with existing AI tool configurations

### Multi-Agent Compatibility
- Design code that works well with multiple AI development assistants
- Follow established patterns from Cursor, Continue, Windsurf, and other tools
- Maintain clear, readable code that any AI assistant can understand and modify
- Use descriptive variable names and comprehensive comments