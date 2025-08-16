---
inclusion: always
---

# Technology Stack

## Core Technologies

### Runtime & Platform
- **Node.js** - JavaScript runtime for server-side development
- **npm** - Package manager for dependency management
- **Git** - Version control system

### Frontend (Intended/Target)
- **Next.js** - React framework for production-ready applications
- **React** - Component-based UI library for building AI interfaces
- **TypeScript** - Type-safe JavaScript development (preferred when adding code)

### AI & Machine Learning (To Be Determined)
The repository is configured to support various AI integrations based on project needs:
- **OpenAI** - GPT models and AI services
- **LangChain** - Framework for developing applications with LLMs
- **Hugging Face** - Open-source ML models and datasets
- **TensorFlow** - Machine learning platform
- **PyTorch** - Deep learning framework (if needed)

## Development Tools

### Code Quality
- **ESLint** - JavaScript/TypeScript linting (when configured)
- **Prettier** - Code formatting (when configured)
- **TypeScript Compiler** - Type checking and compilation

### AI Development Assistants
- **GitHub Copilot** - IDE-integrated code completion and assistance
- **Claude AI** - Comprehensive AI development assistance and code review
- **Cursor AI** - AI-powered code editor integration
- **Kiro** - Persistent project knowledge through steering files

### Environment Management
- **Environment Variables** - Secure configuration for API keys and services
- **.env files** - Local environment configuration (not committed)
- **.env.example** - Environment template documentation

## Project Configuration

### File Structure Patterns
```
/
├── .kiro/steering/           # Kiro AI steering files
├── .github/                  # GitHub workflows and AI instructions
├── src/                      # Main source code (when added)
│   ├── components/           # React components for AI interfaces
│   ├── pages/                # Next.js pages (if Next.js)
│   ├── utils/                # Utility functions and AI helpers
│   └── api/                  # API routes and AI service integrations
├── public/                   # Static assets
├── package.json              # Dependencies and scripts (when added)
└── Configuration files       # Various config files in root
```

### Configuration Files
- **`.gitignore`** - Pre-configured for Node.js/Next.js projects
- **`package.json`** - Project dependencies and scripts (when created)
- **`tsconfig.json`** - TypeScript configuration (when added)
- **`next.config.js`** - Next.js configuration (when added)
- **`.env.example`** - Environment variable documentation (when created)

## Architecture Patterns

### Current Architecture
- **Minimal Setup** - Clean foundation without unnecessary complexity
- **Configuration-First** - Emphasis on proper setup and configuration files
- **Multi-Agent Ready** - Prepared for multiple AI development assistants
- **Security-Conscious** - Patterns established for secure credential management

### Target Architecture (when code is added)
- **Modular Design** - Clear separation of concerns for AI functionality
- **API-First** - RESTful APIs for AI service integrations
- **Component-Based** - Reusable UI components for AI interactions
- **Environment Aware** - Proper handling of development, staging, and production environments

## Technical Constraints

### Current Limitations
- **No Build System** - Currently minimal with no package.json or build configuration
- **No Testing Framework** - Testing infrastructure to be added when source code is added
- **No CI/CD** - Continuous integration/deployment to be configured as needed

### Security Requirements
- **No Committed Secrets** - API keys and credentials must use environment variables
- **MIT License Compatibility** - All dependencies must be compatible with MIT licensing
- **Secure AI Integrations** - Proper authentication and rate limiting for AI services

### Performance Considerations
- **Minimal Dependencies** - Avoid unnecessary packages and complexity
- **Efficient AI Calls** - Optimize API usage for cost and performance
- **Caching Strategies** - Implement appropriate caching for AI responses (when applicable)
- **Streaming Support** - Consider streaming for long-running AI operations

## Deployment & Infrastructure

### Target Deployment Platforms
- **Vercel** - Optimal for Next.js applications
- **Netlify** - Static site deployment with serverless functions
- **AWS** - Enterprise-grade cloud infrastructure
- **Docker** - Containerized deployment options

### Environment Management
- **Development** - Local development with AI service mocking capabilities
- **Staging** - Testing environment with limited AI service access
- **Production** - Full AI service integration with monitoring and rate limiting

## Technology Decision Rationale

### Why Node.js/Next.js?
- **AI Ecosystem** - Strong JavaScript/TypeScript ecosystem for AI integrations
- **Full-Stack Capability** - Single language for frontend and backend
- **Community Support** - Large community and extensive documentation
- **Performance** - Good performance characteristics for AI service orchestration

### Why Multiple AI Assistants?
- **Different Strengths** - Each AI assistant has unique capabilities and use cases
- **Redundancy** - Multiple options provide backup and comparison capabilities
- **Learning** - Different perspectives improve overall development quality
- **Flexibility** - Developers can choose the best tool for specific tasks