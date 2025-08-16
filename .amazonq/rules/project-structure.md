**Established File Structure:**
Follow this structure when adding source code to the repository:

```
.
├── .amazonq/rules/           # Amazon Q Developer rules (this directory)
├── .clinerules/              # Cline AI rules
├── .cursor/rules/            # Cursor AI workspace rules
├── .github/                  # GitHub workflows and Copilot instructions
├── .windsurf/rules/          # Windsurf AI guidelines
├── .trae/rules/              # Trae project rules
├── .kiro/steering/           # Kiro AI steering files
├── src/                      # Source code (when added)
│   ├── app/                  # Next.js App Router (pages and API routes)
│   │   ├── api/              # API routes
│   │   │   └── ai/           # AI service endpoints
│   │   ├── (dashboard)/      # Route groups
│   │   └── globals.css       # Global styles
│   ├── components/           # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── ai/               # AI-specific components (chat, prompts)
│   │   └── layout/           # Layout components
│   ├── lib/                  # Utility libraries and AI clients
│   │   ├── ai/               # AI service integrations
│   │   │   ├── openai.ts     # OpenAI client configuration
│   │   │   ├── anthropic.ts  # Anthropic/Claude client
│   │   │   └── types.ts      # AI service type definitions
│   │   ├── utils.ts          # General utilities
│   │   └── validations.ts    # Input validation schemas
│   ├── hooks/                # Custom React hooks
│   │   └── use-ai.ts         # AI-related hooks
│   └── types/                # TypeScript type definitions
│       ├── ai.ts             # AI service types
│       └── index.ts          # Exported types
├── public/                   # Static assets
├── docs/                     # Additional documentation
├── package.json              # Dependencies and scripts (when added)
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── .env.example              # Environment variable template
└── .env.local                # Local environment variables (gitignored)
```

**AI-Specific Organization:**

**1. AI Service Clients (`src/lib/ai/`)**
- Separate files for each AI service (openai.ts, anthropic.ts, etc.)
- Centralized configuration and error handling
- Consistent interfaces across different AI providers

**2. AI Components (`src/components/ai/`)**
- Chat interfaces and conversation components
- Prompt input and response display components
- AI status and loading indicators
- Error handling and retry mechanisms

**3. AI API Routes (`src/app/api/ai/`)**
- RESTful endpoints for AI service interactions
- Server-side proxy to protect API keys
- Rate limiting and request validation
- Streaming response handling for real-time AI interactions

**Configuration File Organization:**

**1. AI Agent Configurations (Root Level)**
- Keep AI agent-specific files in root directory for easy discovery
- Maintain consistency with existing files (CLAUDE.md, AGENT.md, etc.)
- Use `.md` extension for documentation files

**2. Tool-Specific Rules (Subdirectories)**
- Each AI tool has its own subdirectory (`.amazonq/`, `.cursor/`, etc.)
- Modular rule organization within each tool's directory
- README files to explain rule structure and usage

**Directory Naming Conventions:**
- Use lowercase with dashes for directories: `ai-components`, `api-routes`
- Use camelCase for TypeScript/JavaScript files: `aiClient.ts`, `useAI.ts`
- Use kebab-case for component files: `chat-interface.tsx`, `prompt-input.tsx`

**Import Path Organization:**
```typescript
// External libraries first
import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';

// Internal imports grouped by type
import { validatePrompt } from '@/lib/validations';
import { aiClient } from '@/lib/ai/openai';
import { ChatInterface } from '@/components/ai/chat-interface';
import type { AIResponse } from '@/types/ai';
```

**File Size Guidelines:**
- Keep individual files under 300 lines when possible
- Split large AI service configurations into multiple files
- Use barrel exports (`index.ts`) to simplify imports
- Separate types, utilities, and implementations

**Documentation Requirements:**
- Each major directory should have a README.md explaining its purpose
- AI service integrations require setup and configuration documentation
- Include environment variable requirements and examples
- Document API endpoints with request/response examples

**Asset Organization:**
- Store AI-related static assets in `public/ai/` subdirectory
- Use descriptive filenames for AI model icons and images
- Optimize images for web delivery
- Include alternative text for accessibility

**Configuration File Patterns:**
- Use `.example` suffix for template configuration files
- Keep sensitive configuration in environment variables
- Document all configuration options with comments
- Provide sensible defaults for development environments