---
name: Project Structure
globs: ["package.json", "tsconfig.json", "next.config.js", "src/**/*", "app/**/*"]
description: File organization and architecture patterns for AI projects
---

# Project Structure Guidelines

## Repository Organization

### Current Minimal Structure
The repository follows a minimal template approach with AI-first development patterns:

```
.
├── .continue/rules/          # Continue AI rules (this directory)
├── .clinerules/             # Cline AI rules
├── .cursor/                 # Cursor AI configuration
├── .windsurf/               # Windsurf AI rules
├── .trae/                   # Trae AI rules
├── .junie/                  # JetBrains Junie guidelines
├── .kiro/                   # Kiro AI steering files
├── .github/                 # GitHub workflows and Copilot instructions
├── .env.example             # Environment variable template
├── AGENT.md                 # Universal AI agent instructions
├── CLAUDE.md                # Claude AI specific configuration
├── GEMINI.md                # Gemini CLI configuration
├── README.md                # Project documentation
└── LICENSE                  # MIT license
```

### Expected Structure When Source Code is Added
```
.
├── [AI Assistant Configs]   # Existing AI configuration directories
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration (if using Next.js)
├── src/                     # Main source code directory
│   ├── app/                 # Next.js App Router (pages and API routes)
│   │   ├── api/             # API routes for AI services
│   │   │   ├── ai/          # AI-specific API endpoints
│   │   │   └── health/      # Health check endpoints
│   │   └── (routes)/        # App Router pages
│   ├── lib/                 # Core library code
│   │   ├── ai/              # AI service integrations
│   │   │   ├── openai.ts    # OpenAI client and utilities
│   │   │   ├── anthropic.ts # Anthropic client and utilities
│   │   │   ├── types.ts     # Shared AI types and interfaces
│   │   │   └── utils.ts     # AI utility functions
│   │   ├── db/              # Database utilities (if needed)
│   │   └── utils/           # General utility functions
│   ├── components/          # React components
│   │   ├── ui/              # Base UI components
│   │   ├── ai/              # AI-specific components
│   │   │   ├── chat/        # Chat interface components
│   │   │   ├── completion/  # Text completion components
│   │   │   └── shared/      # Shared AI UI components
│   │   └── layout/          # Layout components
│   ├── hooks/               # Custom React hooks
│   │   └── ai/              # AI-specific hooks
│   ├── types/               # TypeScript type definitions
│   └── styles/              # CSS and styling files
├── public/                  # Static assets
├── docs/                    # Additional documentation
└── tests/                   # Test files and utilities
    ├── __mocks__/           # Mock implementations for AI services
    ├── integration/         # Integration tests
    └── unit/                # Unit tests
```

## File Organization Principles

### Core Guidelines
- **Separation of Concerns**: Keep AI service integrations, UI components, and utilities clearly separated
- **Modular Design**: Each AI service should have its own dedicated module
- **Type Safety**: Maintain comprehensive TypeScript definitions for all AI interactions
- **Scalability**: Structure should support adding new AI providers without major refactoring

### AI Service Organization
```typescript
// Example: src/lib/ai/openai.ts
export class OpenAIService {
  private client: OpenAI;
  
  constructor(config: AIConfig) {
    this.client = new OpenAI({
      apiKey: config.apiKey,
    });
  }
  
  async chat(messages: ChatMessage[]): Promise<AIResponse> {
    // Implementation
  }
}

// Example: src/lib/ai/index.ts (barrel export)
export { OpenAIService } from './openai';
export { AnthropicService } from './anthropic';
export type { AIConfig, AIResponse, ChatMessage } from './types';
```

## Configuration Management

### Environment Configuration
- Maintain `.env.example` with all required AI service variables
- Use consistent naming patterns for environment variables
- Document all configuration options in README.md

### Package.json Patterns
When adding dependencies, follow these patterns:
```json
{
  "dependencies": {
    "openai": "^4.0.0",
    "@vercel/ai": "^2.0.0",
    "@langchain/core": "^0.1.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "type-check": "tsc --noEmit",
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx"
  }
}
```

## Development Workflow

### Before Adding Code
1. Verify package.json exists before running npm commands
2. Check current repository state: `git status && ls -la`
3. Review existing documentation and patterns
4. Understand the minimal nature of the repository

### File Creation Guidelines
- Use TypeScript for all new JavaScript code
- Include JSDoc comments for complex AI algorithms
- Follow established naming conventions
- Create focused, single-purpose modules
- Maintain consistency with existing AI configuration patterns