---
inclusion: always
---

# Project Structure

## Directory Organization

### Current Structure (Minimal State)
```
megarepo/
├── .kiro/
│   └── steering/             # Kiro AI steering files
│       ├── product.md        # Product overview and objectives
│       ├── tech.md           # Technology stack documentation
│       └── structure.md      # This file - project structure guide
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot configuration
├── .git/                     # Git version control
├── .cursorrules              # Cursor AI editor rules
├── .gitignore               # Git ignore patterns (Node.js/Next.js ready)
├── AGENT.md                 # Universal AI agent instructions
├── AGENTS.md                # AI agents coordination and overview
├── CLAUDE.md                # Claude AI specific configuration
├── LICENSE                  # MIT license
└── README.md                # Basic project overview
```

### Target Structure (When Code is Added)
```
megarepo/
├── .kiro/steering/          # Kiro steering files (persistent AI knowledge)
├── .github/                 # GitHub workflows and configurations
├── .next/                   # Next.js build output (ignored by git)
├── build/                   # Build artifacts (ignored by git)
├── node_modules/            # Dependencies (ignored by git)
├── public/                  # Static assets and files
│   ├── images/              # Image assets
│   ├── icons/               # Icon files
│   └── favicon.ico          # Site favicon
├── src/                     # Main source code directory
│   ├── components/          # React components
│   │   ├── ui/              # Base UI components
│   │   ├── ai/              # AI-specific components
│   │   └── layout/          # Layout components
│   ├── pages/               # Next.js pages (if using App Router)
│   │   ├── api/             # API routes
│   │   │   └── ai/          # AI service endpoints
│   │   ├── _app.tsx         # Next.js app configuration
│   │   └── index.tsx        # Home page
│   ├── app/                 # Next.js App Router (alternative to pages/)
│   │   ├── api/             # API routes
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── utils/               # Utility functions and helpers
│   │   ├── ai/              # AI service utilities
│   │   ├── api/             # API utilities
│   │   └── helpers/         # General helper functions
│   ├── hooks/               # React custom hooks
│   ├── contexts/            # React contexts
│   ├── types/               # TypeScript type definitions
│   └── styles/              # CSS and styling files
├── docs/                    # Additional documentation (when needed)
├── tests/                   # Test files (when added)
│   ├── unit/                # Unit tests
│   ├── integration/         # Integration tests
│   └── e2e/                 # End-to-end tests
├── .env.example             # Environment variable template
├── .env.local               # Local environment variables (ignored)
├── package.json             # Node.js dependencies and scripts
├── package-lock.json        # Dependency lockfile
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
├── eslint.config.js         # ESLint configuration
└── prettier.config.js       # Prettier configuration
```

## Naming Conventions

### Files and Directories
- **Directories**: Use kebab-case for multi-word directories (`ai-services/`, `user-interface/`)
- **React Components**: Use PascalCase for component files (`AIChat.tsx`, `UserProfile.tsx`)
- **Utilities**: Use camelCase for utility files (`apiHelpers.ts`, `stringUtils.ts`)
- **Pages**: Use kebab-case for page files in pages directory (`about-us.tsx`)
- **API Routes**: Use kebab-case for API endpoint files (`ai-chat.ts`, `user-auth.ts`)

### Code Conventions
- **Variables**: camelCase (`apiKey`, `userInput`, `aiResponse`)
- **Functions**: camelCase (`handleSubmit`, `processAIResponse`, `validateInput`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_BASE_URL`, `MAX_TOKENS`, `DEFAULT_MODEL`)
- **Types/Interfaces**: PascalCase (`UserProfile`, `AIResponse`, `ChatMessage`)
- **Enums**: PascalCase (`MessageType`, `AIModel`, `UserRole`)

### AI-Specific Naming
- **AI Components**: Prefix with "AI" (`AIChat`, `AIResponse`, `AISettings`)
- **AI Services**: Use descriptive names (`openaiService`, `langchainHelper`, `embeddingUtils`)
- **AI Types**: Include "AI" or model name (`OpenAIResponse`, `ChatGPTMessage`, `LangChainConfig`)

## Import Patterns

### Import Order
1. **External Libraries** (React, Next.js, third-party packages)
2. **Internal Components** (from `@/components`)
3. **Internal Utilities** (from `@/utils`)
4. **Internal Types** (from `@/types`)
5. **Relative Imports** (same directory or parent directories)

### Import Examples
```typescript
// External libraries
import React from 'react';
import { NextPage } from 'next';
import { OpenAI } from 'openai';

// Internal components
import { AIChat } from '@/components/ai/AIChat';
import { Layout } from '@/components/layout/Layout';

// Internal utilities  
import { apiClient } from '@/utils/api/client';
import { formatMessage } from '@/utils/ai/messageHelpers';

// Internal types
import type { ChatMessage, AIConfig } from '@/types/ai';

// Relative imports
import './ChatPage.styles.css';
```

### Path Aliases (when TypeScript is configured)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/utils/*": ["src/utils/*"],
      "@/types/*": ["src/types/*"],
      "@/hooks/*": ["src/hooks/*"]
    }
  }
}
```

## Architectural Decisions

### File Organization Principles
1. **Feature-Based Grouping** - Group related functionality together
2. **Clear Separation** - Separate concerns (components, utilities, types)
3. **Scalable Structure** - Easy to navigate as the project grows
4. **AI-First Design** - Structure that prioritizes AI functionality
5. **Framework Conventions** - Follow Next.js and React best practices

### Configuration File Placement
- **Root Level**: Framework configuration files (`next.config.js`, `tsconfig.json`)
- **Hidden Files**: Tool-specific configuration (`.eslintrc`, `.prettierrc`)
- **Environment**: Environment files in root with `.env.example` documented

### Code Organization Patterns
- **Component Co-location** - Keep component styles and tests near the component
- **Utility Modules** - Group related utilities in feature-specific directories
- **Type Definitions** - Centralized types with feature-specific sub-directories
- **API Layer** - Separate API logic from component logic

## Development Workflow Patterns

### Adding New Features
1. **Create Feature Directory** in appropriate location (`src/components/`, `src/utils/`)
2. **Define Types First** in `src/types/` or feature directory
3. **Implement Core Logic** in utilities before UI components
4. **Build Components** using established patterns
5. **Add Tests** following the same directory structure
6. **Update Documentation** including steering files if architectural changes

### AI Integration Patterns
1. **Service Layer** - Create dedicated service modules for AI providers
2. **Error Handling** - Implement comprehensive error handling for AI failures
3. **Environment Configuration** - Use environment variables for all AI service credentials
4. **Type Safety** - Define strict types for AI service requests and responses
5. **Testing** - Mock AI services for consistent testing

### Git Workflow
- **Feature Branches** - Use descriptive branch names (`feature/ai-chat`, `fix/auth-bug`)
- **Commit Messages** - Use conventional commits format
- **PR Templates** - Follow established review patterns
- **AI Assistant Coordination** - Ensure changes work with all configured AI assistants

## Best Practices

### Security
- **Environment Variables** - Never commit secrets, always use `.env.example`
- **API Key Management** - Secure storage and rotation of AI service credentials
- **Input Validation** - Validate all user inputs before sending to AI services
- **Rate Limiting** - Implement appropriate rate limiting for AI API calls

### Performance
- **Lazy Loading** - Load AI components and services on demand
- **Caching** - Cache AI responses when appropriate
- **Bundle Optimization** - Code split AI functionality to reduce initial bundle size
- **Streaming** - Use streaming for long-running AI operations

### Maintainability
- **Documentation** - Keep steering files and README updated
- **Consistency** - Follow established patterns throughout the codebase
- **Testing** - Maintain test coverage for AI functionality
- **Monitoring** - Log AI service usage and errors for debugging