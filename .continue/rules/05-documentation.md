---
name: Documentation Standards
globs: ["**/*.md", "**/*.mdx", "docs/**/*"]
description: Documentation requirements and standards for AI projects
---

# Documentation Standards

## Documentation Requirements

### Core Documentation Files
- **README.md**: Project overview, setup instructions, and AI service configuration
- **AI Configuration Files**: Keep all AI assistant configuration files current as project evolves
- **Environment Documentation**: Maintain `.env.example` with all required variables documented
- **API Documentation**: Document all AI service integrations and expected responses

### AI Service Documentation

#### Service Configuration Documentation
When integrating AI services, document:

```markdown
## OpenAI Integration
- **Model**: GPT-4 (configurable via environment)
- **Rate Limits**: 500 requests/hour per API key
- **Cost**: ~$0.03 per 1K tokens (varies by model)
- **Required Environment Variables**:
  - `OPENAI_API_KEY`: Your OpenAI API key
  - `OPENAI_MODEL`: Model to use (default: gpt-4)
  - `OPENAI_MAX_TOKENS`: Maximum tokens per request (default: 2048)
  - `OPENAI_TEMPERATURE`: Creativity setting 0-1 (default: 0.7)

## Anthropic Integration  
- **Model**: Claude 3 Sonnet (configurable via environment)
- **Rate Limits**: 1000 requests/hour per API key
- **Cost**: ~$0.015 per 1K tokens (varies by model)
- **Required Environment Variables**:
  - `ANTHROPIC_API_KEY`: Your Anthropic API key
  - `ANTHROPIC_MODEL`: Model to use (default: claude-3-sonnet-20240229)
  - `ANTHROPIC_MAX_TOKENS`: Maximum tokens per request (default: 4096)
```

#### Usage Examples
Always include practical examples:

```javascript
// Example: Basic AI chat completion
const completion = await openai.chat.completions.create({
  model: process.env.OPENAI_MODEL || "gpt-4",
  messages: [
    { role: "system", content: "You are a helpful AI assistant." },
    { role: "user", content: userPrompt }
  ],
  max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS) || 2048,
  temperature: parseFloat(process.env.OPENAI_TEMPERATURE) || 0.7
});

console.log(completion.choices[0].message.content);
```

#### Error Scenarios
Document common error patterns and handling:

```markdown
### Common Errors
- **401 Unauthorized**: Invalid API key or expired credentials
- **429 Rate Limited**: Too many requests, implement exponential backoff
- **500 Server Error**: AI service temporarily unavailable
- **Context Length Exceeded**: Input too long for model context window

### Error Handling Example
```javascript
try {
  const response = await aiService.chat(messages);
  return response;
} catch (error) {
  if (error.status === 429) {
    // Implement exponential backoff
    await sleep(Math.pow(2, retryCount) * 1000);
    return retryRequest();
  }
  throw new AIServiceError(`AI request failed: ${error.message}`);
}
```

## Code Documentation Standards

### JSDoc Requirements
Use JSDoc for all public APIs and complex AI functions:

```typescript
/**
 * Generates AI response using specified model and parameters
 * @param prompt - The user input prompt
 * @param options - Configuration options for AI generation
 * @param options.model - AI model to use (default: gpt-4)
 * @param options.maxTokens - Maximum tokens to generate
 * @param options.temperature - Creativity level 0-1
 * @returns Promise resolving to AI response with usage statistics
 * @throws {AIServiceError} When API request fails or rate limit exceeded
 * @example
 * ```typescript
 * const response = await generateAIResponse("Hello, how are you?", {
 *   model: "gpt-4",
 *   maxTokens: 1000,
 *   temperature: 0.7
 * });
 * console.log(response.content);
 * ```
 */
async function generateAIResponse(
  prompt: string,
  options: AIGenerationOptions = {}
): Promise<AIResponse> {
  // Implementation
}
```

### README.md Structure
Follow this structure for project README:

```markdown
# Project Name

Brief description of the AI project and its purpose.

## Features
- List key AI capabilities
- Mention supported models/services
- Highlight unique features

## Getting Started

### Prerequisites
- Node.js 18+ 
- API keys for AI services (see Environment Setup)

### Environment Setup
Copy `.env.example` to `.env` and fill in your API keys:
```bash
cp .env.example .env
```

Required environment variables:
- `OPENAI_API_KEY`: Your OpenAI API key
- `ANTHROPIC_API_KEY`: Your Anthropic API key

### Installation
```bash
npm install
npm run dev
```

## API Documentation
[Document your AI endpoints]

## Usage Examples
[Provide practical examples]

## Contributing
[Contribution guidelines]

## License
MIT
```

## Architecture Decision Records (ADRs)

### When to Create ADRs
Document architectural decisions for:
- AI model selection and switching strategies
- Data flow patterns for AI processing
- Error handling and retry mechanisms
- Performance optimization approaches
- Security and privacy implementations

### ADR Template
```markdown
# ADR-001: AI Model Selection Strategy

## Status
Accepted

## Context
Need to support multiple AI providers while maintaining consistent interfaces.

## Decision
Implement a factory pattern with adapter classes for each AI provider.

## Consequences
- Pros: Easy to add new providers, consistent interface
- Cons: Additional abstraction layer complexity

## Implementation
[Technical details]
```

## Team Knowledge Sharing

### Update Requirements
- Update documentation when adding significant functionality
- Keep all AI assistant configuration files synchronized
- Document lessons learned from AI integrations
- Share best practices and common pitfalls
- Maintain changelog for API and configuration changes