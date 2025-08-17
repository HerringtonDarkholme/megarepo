# AI Development Guidelines for JetBrains AI Assistant

**Core AI development patterns and best practices for the Megarepo AI setup repository.**

## Repository Context

This is a minimal AI setup repository template designed for AI-related projects. The repository contains basic setup files and is configured for Node.js/Next.js development.

**Current State**: Minimal repository with only configuration files
- No source code or build system exists yet
- Pre-configured for Node.js/Next.js development patterns
- Should not attempt builds, tests, or code execution until source code is added

## Core Development Principles

### Minimal Change Philosophy
- Make the **smallest possible changes** to achieve objectives
- Respect the intentional simplicity of this AI setup repository
- Avoid unnecessary complexity or premature optimization
- Focus on surgical, precise modifications that maintain existing patterns

### AI-First Development Approach
- Prioritize AI integration patterns and best practices in all development
- Consider AI service limitations: rate limits, token usage, API efficiency
- Design for scalability with AI workloads and concurrent requests
- Implement comprehensive error handling for AI service failures
- Structure code to support multiple AI providers and model switching

## Technology Stack Guidelines

### Primary Technologies
- **Frontend**: Next.js, React (when source code is added)
- **Runtime**: Node.js
- **Language**: TypeScript (preferred for type safety)
- **Package Manager**: npm
- **License**: MIT

### Expected File Structure (when populated)
```
.
├── .aiassistant/             # JetBrains AI Assistant configuration
├── .clinerules/              # Cline AI rules
├── .cursor/                  # Cursor AI configuration
├── .windsurf/                # Windsurf AI rules
├── .junie/                   # JetBrains Junie configuration
├── .github/                  # GitHub workflows and AI instructions
├── src/                      # Main source code (when added)
│   ├── components/           # React components for AI interfaces
│   ├── lib/                  # AI clients and utilities
│   ├── app/                  # Next.js App Router (pages and API routes)
│   └── types/                # TypeScript definitions
├── public/                   # Static assets
├── package.json              # Dependencies and scripts (when added)
└── Configuration files       # Various AI config files in root
```

## AI Integration Best Practices

### Service Integration Patterns
- Create abstraction layers for AI services to enable easy switching
- Implement circuit breaker patterns for AI service failures
- Use connection pooling for better performance
- Include proper timeout handling (30-60 seconds for most AI operations)
- Design for graceful degradation when AI services are unavailable

### Recommended AI Dependencies
When adding AI functionality, prefer these established packages:
- `openai` - Official OpenAI API client
- `@langchain/core` - LangChain framework
- `@vercel/ai` - Vercel AI SDK
- `@huggingface/inference` - Hugging Face API client
- `@anthropic-ai/sdk` - Anthropic Claude API client

### Error Handling Patterns
```typescript
// Recommended error handling pattern for AI services
try {
  const response = await aiService.generate(prompt, {
    timeout: 30000, // 30 seconds
    retries: 3
  });
  
  return response;
} catch (error) {
  if (error.code === 'RATE_LIMIT_ERROR') {
    // Implement exponential backoff
    await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    return retryRequest();
  }
  
  // Log error without exposing sensitive data
  console.error('AI service error:', {
    type: error.type,
    status: error.status,
    timestamp: Date.now()
  });
  
  throw new Error('AI service temporarily unavailable');
}
```

## Security Guidelines

### API Key Management
- **Never commit API keys, secrets, or credentials to version control**
- Use environment variables for all sensitive configuration
- Create `.env.example` files to document required environment variables
- Implement proper validation for missing environment variables
- Document security requirements in code comments

### Environment Variable Patterns
```env
# AI Service Keys
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here
HUGGINGFACE_API_KEY=your_huggingface_key_here

# Application Settings
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### AI Service Security
- Validate all inputs before sending to AI services
- Sanitize AI responses before displaying to users
- Implement rate limiting to prevent API abuse
- Log security-relevant events for monitoring
- Consider data privacy implications of AI service usage

## Development Workflow

### Before Making Changes
1. Check current repository state with `git status`
2. Verify build system existence before attempting builds
3. Review existing patterns in similar AI configuration files
4. Plan minimal changes that achieve the objective

### During Development
1. Follow TypeScript best practices and AI patterns
2. Implement proper error handling and timeout management
3. Test with mock AI services during development
4. Maintain consistency with existing code style

### After Changes
1. Validate changes don't break existing minimal structure
2. Test error scenarios and edge cases
3. Update relevant documentation
4. Ensure security guidelines are followed

## Compatibility with Other AI Assistants

These guidelines should complement existing AI configurations:
- GitHub Copilot (`.github/copilot-instructions.md`)
- Claude AI (`CLAUDE.md`)
- Cursor AI (`.cursorrules`, `.cursor/`)
- Windsurf AI (`.windsurf/`)
- Cline AI (`.clinerules/`)
- Kiro AI (`.kiro/`)
- JetBrains Junie (`.junie/`)
- Gemini CLI (`GEMINI.md`)
- Universal AI guidelines (`AGENT.md`, `AGENTS.md`)

All configurations share common principles while being optimized for each assistant's specific capabilities.