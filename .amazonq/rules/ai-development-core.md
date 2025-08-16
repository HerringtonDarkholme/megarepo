This repository is a minimal AI setup template designed for AI-related projects and serves as a foundation for AI development with pre-configured setup files and guidelines for Node.js/Next.js AI applications.

**Repository Current State:**
- Minimal setup repository with basic configuration files only
- No source code or build system exists yet
- Pre-configured for Node.js/Next.js development patterns
- Designed to be expanded with AI-specific tooling and projects

**Core Development Principles:**

1. **Minimal Change Philosophy** - Make the smallest possible changes to achieve objectives. Respect the intentional simplicity of this repository and avoid unnecessary complexity or premature optimization. Focus on surgical, precise modifications that maintain existing patterns.

2. **Repository Awareness** - Always check current repository state before making changes. Verify existence of package.json before running npm commands. Understand the minimal nature and do not attempt builds/tests without source code.

3. **AI-First Development Approach** - Prioritize AI integration patterns and best practices in all development. Consider AI service limitations including rate limits, token usage, and API efficiency. Design for scalability with AI workloads and concurrent requests. Implement comprehensive error handling for AI service failures and timeouts. Structure code to support multiple AI providers and model switching.

**Technology Stack Guidelines:**
- **Runtime**: Node.js (latest LTS version)
- **Frontend Framework**: Next.js with React
- **Language**: TypeScript for all JavaScript code for better type safety
- **Package Manager**: npm or pnpm (both supported)
- **License**: MIT (maintain consistency)

**AI Integration Best Practices:**
- Use modern ES6+ JavaScript/TypeScript features and async/await patterns
- Implement proper async/await patterns for AI API calls with timeout handling
- Include JSDoc comments for complex AI algorithms and integrations
- Structure AI-related code in logical, modular components under src/lib/
- Follow comprehensive error handling patterns for AI service failures
- Design for multiple AI service integrations and model switching capabilities

**File Structure When Code is Added:**
```
.
├── .amazonq/rules/           # Amazon Q Developer rules (this directory)
├── .github/                  # GitHub workflows and configurations
├── src/                      # Source code (when added)
│   ├── components/           # React components including AI components
│   ├── app/                  # Next.js App Router (pages and API routes)
│   ├── lib/                  # AI clients and utilities
│   └── types/                # TypeScript definitions
├── public/                   # Static assets
├── docs/                     # Additional documentation
└── .env.example              # Environment variable template
```

**Development Workflow:**
- Always verify package.json exists before running npm commands
- Install dependencies with appropriate timeout: `npm install` (allow 10+ minutes)
- Build with extended timeout for AI projects: `npm run build` (allow 60+ minutes)
- Run tests with adequate time: `npm test` (allow 30+ minutes)
- Use linting when available: `npm run lint`

**AI Package Preferences:**
When adding AI functionality, prefer these libraries:
- **OpenAI**: Official OpenAI SDK for GPT models
- **LangChain**: For complex AI workflows and chains
- **Hugging Face**: For open-source model integrations
- **Vercel AI SDK**: For streaming and UI integrations