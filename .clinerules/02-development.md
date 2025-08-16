# Development Guidelines

## Technology Stack
This repository is pre-configured for **Node.js/Next.js development** with AI integrations.

### When Source Code is Added
Follow these patterns based on existing repository guidelines:

```bash
# Always verify package.json exists first
test -f package.json && echo "Node.js project detected" || echo "No package.json found"

# Install dependencies with appropriate timeout
npm install  # Allow 10+ minutes for completion

# Build with extended timeout for AI projects
npm run build  # Allow 60+ minutes - AI projects can have complex builds

# Run tests with adequate time
npm test  # Allow 30+ minutes for comprehensive test suites
```

## AI Integration Best Practices

### Preferred AI Dependencies
When adding AI functionality, use these established packages:
- `openai` - Official OpenAI API client
- `@langchain/core` - LangChain framework for AI workflows
- `@vercel/ai` - Vercel AI SDK for streaming and UI integration
- `@huggingface/inference` - Hugging Face API client
- `@anthropic-ai/sdk` - Anthropic Claude API client

### Code Organization
- Place AI client configurations in `src/lib/` directory
- Create reusable AI components in `src/components/ai/`
- Implement API routes for AI services in `src/app/api/` (Next.js App Router)
- Define TypeScript types for AI responses in `src/types/`

### Error Handling Pattern
```javascript
// Implement comprehensive error handling for AI services
try {
  const response = await aiClient.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }]
  });
  return response.choices[0].message.content;
} catch (error) {
  if (error.code === 'rate_limit_exceeded') {
    throw new AIRateLimitError('Rate limit exceeded, please try again later');
  }
  if (error.code === 'insufficient_quota') {
    throw new AIQuotaError('API quota exceeded');
  }
  throw new AIServiceError(`AI service failed: ${error.message}`);
}
```

## File Structure Standards
Follow the established minimal structure and expand thoughtfully:

```
.
├── .clinerules/              # Cline AI rules (this directory)
├── .github/                  # GitHub workflows and Copilot instructions
├── .kiro/steering/           # Kiro AI steering files
├── .cursorrules              # Cursor AI development rules
├── CLAUDE.md                 # Claude AI specific configuration
├── GEMINI.md                 # Gemini CLI configuration
├── AGENT.md                  # Universal AI agent instructions
├── package.json              # Dependencies and scripts (when added)
├── src/                      # Source code (when added)
│   ├── lib/                  # AI clients and utilities
│   ├── components/           # React components including AI components
│   ├── app/                  # Next.js App Router (pages and API routes)
│   └── types/                # TypeScript definitions
└── public/                   # Static assets
```

## Development Workflow
1. **Before Changes**: Check repository state and existing patterns
2. **During Development**: Follow TypeScript best practices and AI patterns
3. **Testing**: Include AI service mocks and error scenario testing
4. **Documentation**: Update relevant AI configuration files as needed