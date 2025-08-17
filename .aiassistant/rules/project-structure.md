# Project Structure Guidelines for JetBrains AI Assistant

**File organization and architecture patterns for AI development in the Megarepo repository.**

## Current Repository State

### Minimal Setup Structure
```
.
├── .aiassistant/             # JetBrains AI Assistant configuration
│   ├── README.md            # Configuration overview
│   └── rules/               # Rule files for different contexts
├── .clinerules/             # Cline AI rules
├── .continue/               # Continue AI configuration
├── .cursor/                 # Cursor AI configuration
├── .cursorrules             # Legacy Cursor rules file
├── .github/                 # GitHub workflows and AI instructions
├── .gitignore              # Git ignore patterns (Node.js/Next.js)
├── .junie/                 # JetBrains Junie configuration
├── .kiro/                  # Kiro AI steering files
├── .windsurf/              # Windsurf AI rules
├── AGENT.md                # Universal AI guidelines
├── AGENTS.md               # Multi-agent coordination
├── CLAUDE.md               # Claude AI instructions
├── GEMINI.md               # Gemini CLI configuration
├── LICENSE                 # MIT license
├── README.md               # Project overview
└── replit.md               # Replit configuration
```

### Expected Structure (when source code is added)
```
.
├── .aiassistant/             # JetBrains AI Assistant configuration
├── .clinerules/              # Cline AI rules
├── .cursor/                  # Cursor AI configuration
├── .github/                  # GitHub workflows and AI instructions
├── .windsurf/                # Windsurf AI rules
├── .junie/                   # JetBrains Junie configuration
├── .kiro/                    # Kiro AI steering files
├── src/                      # Main source code directory
│   ├── app/                  # Next.js App Router
│   │   ├── api/              # API routes
│   │   │   └── ai/           # AI service endpoints
│   │   ├── components/       # App-specific components
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # Shared React components
│   │   ├── ui/               # Basic UI components
│   │   ├── ai/               # AI-specific components
│   │   └── common/           # Common components
│   ├── lib/                  # Utility libraries
│   │   ├── ai/               # AI service clients
│   │   ├── utils/            # General utilities
│   │   └── config/           # Configuration files
│   ├── types/                # TypeScript definitions
│   │   ├── ai.ts             # AI service types
│   │   ├── api.ts            # API response types
│   │   └── global.ts         # Global type definitions
│   └── hooks/                # Custom React hooks
│       └── ai/               # AI-related hooks
├── public/                   # Static assets
│   ├── icons/                # Icon files
│   └── images/               # Image assets
├── tests/                    # Test files
│   ├── __mocks__/           # Mock files
│   ├── api/                 # API tests
│   ├── components/          # Component tests
│   └── utils/               # Utility tests
├── docs/                    # Documentation
├── package.json             # Dependencies and scripts
├── package-lock.json        # Dependency lockfile
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── .env.example             # Environment variable template
└── Configuration files      # Various AI config files in root
```

## File Organization Principles

### 1. Separation of Concerns
```typescript
// src/lib/ai/ - AI service clients
export class OpenAIClient {
  constructor(private apiKey: string) {}
  
  async generateCompletion(prompt: string): Promise<string> {
    // Implementation
  }
}

// src/components/ai/ - AI UI components
export function ChatInterface({ onMessage }: ChatInterfaceProps) {
  // Component implementation
}

// src/hooks/ai/ - AI-related hooks
export function useAIGeneration(apiKey: string) {
  // Hook implementation
}

// src/app/api/ai/ - AI API endpoints
export async function POST(request: Request) {
  // API route implementation
}
```

### 2. Feature-Based Organization
```
src/
├── features/
│   ├── chat/
│   │   ├── components/
│   │   │   ├── ChatInput.tsx
│   │   │   ├── ChatMessage.tsx
│   │   │   └── ChatHistory.tsx
│   │   ├── hooks/
│   │   │   └── useChat.ts
│   │   ├── types/
│   │   │   └── chat.ts
│   │   └── api/
│   │       └── chatApi.ts
│   ├── completion/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── types/
│   └── image-generation/
│       ├── components/
│       ├── hooks/
│       └── types/
```

## Architecture Patterns

### 1. Layered Architecture
```typescript
// Layer 1: Data Access (src/lib/ai/)
class AIServiceRepository {
  async callOpenAI(params: OpenAIParams): Promise<OpenAIResponse> {}
  async callAnthropic(params: AnthropicParams): Promise<AnthropicResponse> {}
}

// Layer 2: Business Logic (src/services/)
class AIService {
  constructor(private repository: AIServiceRepository) {}
  
  async generateResponse(prompt: string, provider: 'openai' | 'anthropic'): Promise<string> {
    // Business logic here
  }
}

// Layer 3: Presentation (src/components/)
function AIResponseComponent({ prompt }: { prompt: string }) {
  const aiService = useAIService();
  // Component logic
}
```

### 2. Configuration Management
```typescript
// src/lib/config/ai.ts
export const aiConfig = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',
    defaultModel: 'gpt-4',
    timeout: 30000,
  },
  anthropic: {
    apiKey: process.env.ANTHROPIC_API_KEY,
    baseURL: process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com',
    defaultModel: 'claude-3-opus-20240229',
    timeout: 30000,
  },
  fallback: {
    enabled: true,
    order: ['openai', 'anthropic'],
  },
} as const;

// src/lib/config/validation.ts
export function validateAIConfig(): void {
  if (!aiConfig.openai.apiKey) {
    throw new Error('OPENAI_API_KEY is required');
  }
  // Additional validation
}
```

## API Route Organization

### 1. RESTful API Structure
```
src/app/api/
├── ai/
│   ├── chat/
│   │   └── route.ts          # POST /api/ai/chat
│   ├── completion/
│   │   └── route.ts          # POST /api/ai/completion
│   ├── image/
│   │   └── route.ts          # POST /api/ai/image
│   └── models/
│       └── route.ts          # GET /api/ai/models
├── health/
│   └── route.ts              # GET /api/health
└── auth/
    ├── login/
    │   └── route.ts          # POST /api/auth/login
    └── logout/
        └── route.ts          # POST /api/auth/logout
```

### 2. API Route Implementation Pattern
```typescript
// src/app/api/ai/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { AIService } from '@/lib/ai/AIService';
import { validateRequest } from '@/lib/validation';
import { handleError } from '@/lib/error-handling';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request
    const validatedData = validateRequest(body, chatRequestSchema);
    
    // Process with AI service
    const aiService = new AIService();
    const response = await aiService.generateChatResponse(validatedData);
    
    return NextResponse.json({ success: true, data: response });
    
  } catch (error) {
    return handleError(error);
  }
}
```

## Component Organization

### 1. Component Hierarchy
```typescript
// src/components/ui/ - Basic UI components
export function Button({ children, onClick, variant }: ButtonProps) {}
export function Input({ value, onChange, placeholder }: InputProps) {}
export function Card({ children, className }: CardProps) {}

// src/components/ai/ - AI-specific components
export function AIChat({ apiKey, model }: AIChatProps) {}
export function AICompletion({ prompt, onComplete }: AICompletionProps) {}
export function AIImageGenerator({ prompt, size }: AIImageGeneratorProps) {}

// src/components/common/ - Common business components
export function Header({ title }: HeaderProps) {}
export function Footer() {}
export function Navigation({ items }: NavigationProps) {}
```

### 2. Component File Structure
```
src/components/ai/chat/
├── ChatInterface.tsx         # Main component
├── ChatInterface.test.tsx    # Component tests
├── ChatInterface.stories.tsx # Storybook stories (if using)
├── components/               # Sub-components
│   ├── ChatInput.tsx
│   ├── ChatMessage.tsx
│   └── ChatHistory.tsx
├── hooks/
│   └── useChat.ts           # Component-specific hooks
├── types.ts                 # Component types
└── styles.module.css        # Component styles (if needed)
```

## Environment and Configuration

### 1. Environment Files
```bash
# .env.local (never commit)
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_APP_URL=http://localhost:3000

# .env.example (commit this)
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 2. Configuration Files
```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/types/*": ["./src/types/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Package.json Organization

### 1. Recommended Package Structure
```json
{
  "name": "megarepo-ai",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "openai": "^4.0.0",
    "@anthropic-ai/sdk": "^0.9.0",
    "@vercel/ai": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "jest": "^29.0.0",
    "@testing-library/react": "^13.0.0"
  }
}
```

## File Naming Conventions

### 1. Naming Standards
```
Components:     PascalCase       (ChatInterface.tsx)
Hooks:          camelCase        (useChat.ts)
Utilities:      camelCase        (formatMessage.ts)
Types:          camelCase        (chatTypes.ts)
Constants:      SCREAMING_SNAKE  (AI_MODELS.ts)
API Routes:     lowercase        (route.ts)
Styles:         kebab-case       (chat-interface.module.css)
```

### 2. File Extensions
```
TypeScript:     .ts
React Components: .tsx
Styles:         .css / .module.css
Tests:          .test.ts / .test.tsx
Stories:        .stories.tsx
Config:         .js / .json
```

---

*These project structure guidelines ensure consistent, maintainable, and scalable AI application architecture following Next.js and modern React best practices.*