# Megarepo - AI Setup Repository

**ALWAYS follow these instructions first and only fallback to additional search and context gathering if the information here is incomplete or found to be in error.**

## Repository Overview

Megarepo is currently a minimal repository template designed for AI-related projects. The repository contains basic setup files and is configured for Node.js/Next.js development based on the .gitignore patterns.

## Current Repository State

**IMPORTANT**: This repository is currently in a minimal state with only basic setup files:
- README.md (basic project description)
- LICENSE (MIT license)
- .gitignore (configured for Node.js/Next.js projects)

**DO NOT attempt to build, test, or run code** - there is no source code or build system present yet.

## Working Effectively

### Initial Repository Exploration
```bash
# Always start by understanding the current repository state
ls -la
git status
find . -type f -name "*.json" -o -name "*.js" -o -name "*.ts" -o -name "*.md"
```

### When Source Code is Added

The repository is pre-configured for Node.js/Next.js development. When source code is added, follow these patterns:

#### Node.js/Next.js Project Setup
```bash
# Check for package.json first
ls package.json

# If package.json exists, install dependencies
npm install
# NEVER CANCEL: npm install typically takes 2-5 minutes. Set timeout to 10+ minutes.

# Common build commands (verify these exist in package.json first)
npm run build
# NEVER CANCEL: Build may take 5-45 minutes depending on project size. Set timeout to 60+ minutes.

# Common test commands
npm test
# NEVER CANCEL: Tests may take 5-15 minutes. Set timeout to 30+ minutes.

# Common development server
npm run dev
```

#### Pre-commit Validation
When source code exists, always run these before committing:
```bash
# Check for linting configuration
ls .eslintrc* eslint.config.* .prettierrc*

# Run linting if configured
npm run lint

# Run formatting if configured  
npm run format

# Run type checking if TypeScript
npm run type-check
```

## Repository Structure Expectations

Based on the .gitignore configuration, expect the following when the repository is populated:

```
.
├── README.md                 # Project documentation
├── LICENSE                   # MIT license
├── .gitignore               # Node.js/Next.js ignore patterns
├── package.json             # Node.js dependencies and scripts
├── package-lock.json        # Dependency lockfile
├── next.config.js           # Next.js configuration (if Next.js)
├── tsconfig.json            # TypeScript configuration (if TypeScript)
├── .eslintrc.*              # ESLint configuration
├── .prettierrc              # Prettier configuration
├── src/                     # Source code directory
│   ├── pages/               # Next.js pages (if Next.js)
│   ├── components/          # React components
│   └── utils/               # Utility functions
├── public/                  # Static assets
├── .next/                   # Next.js build output (ignored)
├── build/                   # Build output (ignored)
└── node_modules/            # Dependencies (ignored)
```

## Validation Requirements

### Before Making Changes
1. **Always check current repository state first**:
   ```bash
   git status
   ls -la
   cat package.json  # Only if it exists
   ```

2. **Verify build system exists before attempting builds**:
   ```bash
   # Check for package.json before running npm commands
   test -f package.json && echo "Node.js project detected" || echo "No package.json found"
   ```

### After Making Changes
1. **When source code is present, always validate**:
   ```bash
   # Install dependencies if package.json exists
   test -f package.json && npm install
   
   # Build if build script exists
   test -f package.json && npm run build
   
   # Test if test script exists
   test -f package.json && npm test
   
   # Lint if lint script exists
   test -f package.json && npm run lint
   ```

2. **Manual validation scenarios when application exists**:
   - Start the development server and verify it loads
   - Test basic functionality by navigating through the application
   - Verify any API endpoints respond correctly
   - Check console for errors

## Common Commands Reference

### Repository Information
```bash
# View current files
ls -la

# Check git status
git status

# View repository structure
tree . -a -I 'node_modules|.git'  # If tree is available (use -a to show hidden files)
find . -type f -not -path "./.git/*" -not -path "./node_modules/*" | sort
```

### When Package.json Exists
```bash
# View available scripts
cat package.json | grep -A 20 '"scripts"'

# Install dependencies
npm install
# TIMEOUT: 10+ minutes

# Common development commands (check package.json first)
npm run dev        # Development server
npm run build      # Production build
npm run start      # Start production server
npm run test       # Run tests
npm run lint       # Run linter
npm run format     # Format code
```

## File Locations and Navigation

### Current Key Files
- `/README.md` - Project overview and setup instructions
- `/LICENSE` - MIT license terms
- `/.gitignore` - Git ignore patterns (Node.js/Next.js focused)

### Expected Important Locations (when populated)
- `/src/` - Main source code directory
- `/src/pages/` - Next.js pages (if Next.js project)
- `/src/components/` - React components
- `/public/` - Static assets and files
- `/package.json` - Project configuration and dependencies
- `/next.config.js` - Next.js configuration
- `/tsconfig.json` - TypeScript configuration

## AI Development Guidelines

Since this is an AI setup repository:

1. **Always verify AI-related dependencies** when they are added:
   ```bash
   # Common AI packages to look for
   grep -E "(openai|langchain|tensorflow|pytorch|huggingface)" package.json
   ```

2. **Environment variables for AI services**:
   ```bash
   # Check for environment configuration
   ls .env* || echo "No environment files found"
   ```

3. **API key management**:
   - Never commit API keys
   - Always use environment variables
   - Check .env.example for required variables

## Troubleshooting

### Repository Appears Empty
- This is expected in the current state
- Check git branch: `git branch -a`
- Look for other branches that might contain code

### Build Failures
- First verify package.json exists: `ls package.json`
- Clear dependencies and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version compatibility in package.json

### Development Server Issues
- Verify port availability (typically 3000 for Next.js)
- Check for environment variable requirements
- Review console output for specific error messages

## Critical Reminders

- **NEVER CANCEL builds or long-running commands** - they may take 45+ minutes
- **ALWAYS validate commands work** before assuming functionality exists
- **CHECK for package.json** before running npm commands
- **SET APPROPRIATE TIMEOUTS** - builds: 60+ minutes, tests: 30+ minutes
- **VERIFY repository state** before attempting any operations