# Project Structure Guidelines

## Repository Organization

### Current Minimal Structure
The repository follows a minimal template approach with AI-first development patterns:

```
.
├── .roo/rules/               # Roo Code rules (this directory)
├── .cursor/rules/            # Cursor AI workspace rules
├── .continue/rules/          # Continue AI rules
├── .windsurf/rules/          # Windsurf AI guidelines
├── .amazonq/rules/           # Amazon Q Developer rules
├── .clinerules/              # Cline AI rules
├── .kiro/steering/           # Kiro AI steering files
├── .github/                  # GitHub workflows and Copilot instructions
├── .env.example              # Environment variable template
├── AGENT.md                  # Universal AI agent instructions
├── CLAUDE.md                 # Claude AI specific configuration
├── GEMINI.md                 # Gemini CLI configuration
├── README.md                 # Project documentation
└── LICENSE                   # MIT license
```

### Expected Structure When Source Code is Added
```
.
├── [AI Assistant Configs]    # Existing AI configuration directories
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration (if using Next.js)
├── src/                      # Main source code directory
│   ├── app/                  # Next.js App Router (pages and API routes)
│   │   ├── api/              # API routes for AI services
│   │   │   ├── ai/           # AI-specific API endpoints
│   │   │   └── health/       # Health check endpoints
│   │   └── (routes)/         # App Router pages
│   ├── lib/                  # Core library code
│   │   ├── ai/               # AI service integrations
│   │   │   ├── openai.ts     # OpenAI client and utilities
│   │   │   ├── anthropic.ts  # Anthropic client and utilities
│   │   │   └── types.ts      # AI-related type definitions
│   │   ├── utils/            # General utility functions
│   │   └── config/           # Configuration management
│   ├── components/           # React components for AI interfaces
│   │   ├── ui/               # Basic UI components
│   │   └── ai/               # AI-specific components
│   └── types/                # Global TypeScript definitions
├── public/                   # Static assets
└── .env.example              # Environment configuration template
```

## File Organization Principles

### 1. Separation of Concerns
- Keep AI service logic separate from UI components
- Isolate configuration management in dedicated modules
- Separate API routes by functionality (AI, health, auth, etc.)

### 2. Feature-Based Organization
```
src/lib/ai/
├── providers/              # AI service provider implementations
│   ├── openai/
│   ├── anthropic/
│   └── index.ts
├── types/                  # AI-related type definitions
├── utils/                  # AI utility functions
└── config/                 # AI service configurations
```

### 3. Configuration Management
- Use centralized configuration files for AI services
- Maintain environment-specific configurations
- Document all configuration options and defaults

### Development Workflow
- Create source code following the expected structure patterns
- Maintain consistency with existing AI tool configurations
- Use TypeScript for all new JavaScript functionality
- Follow the established file naming conventions