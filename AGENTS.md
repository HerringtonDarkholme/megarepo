# AI Agents Configuration

## Overview

This repository includes configuration and instruction files for various AI agents to ensure consistent and effective collaboration in AI development projects. Each agent has specific instructions tailored to their capabilities and use cases within the megarepo ecosystem.

## Configured AI Agents

### Claude AI
- **Configuration File**: `CLAUDE.md`
- **Purpose**: Comprehensive AI development assistance, code generation, and project guidance
- **Capabilities**: 
  - Code review and development
  - AI-specific architectural guidance
  - Documentation and testing strategies
  - Environment setup and configuration

### GitHub Copilot
- **Configuration File**: `.github/copilot-instructions.md`
- **Purpose**: IDE-integrated code completion and development assistance
- **Capabilities**: 
  - Real-time code suggestions
  - Repository navigation guidance
  - Build and test workflow instructions
  - Node.js/Next.js development patterns

### Windsurf AI
- **Configuration Files**: `.windsurf/rules/` directory with multiple rule files
- **Purpose**: Intelligent code assistance with contextual rule activation
- **Capabilities**:
  - Context-aware rule activation (Always On, Manual, Model Decision, Glob patterns)
  - AI development best practices and security guidelines
  - TypeScript/JavaScript specific patterns and optimizations
  - Testing strategies for AI components and integrations
  - Documentation standards for AI projects

## Agent Coordination

### Shared Principles
- **Minimal Changes**: All agents follow surgical, minimal modification approaches
- **AI-First Design**: Configurations prioritize AI development workflows
- **Environment Safety**: No API keys or secrets committed to repository
- **Consistency**: Maintain uniform coding standards and documentation patterns

### Repository Structure Awareness
All agents are configured to understand:
- Current minimal state of the repository
- Node.js/Next.js target architecture
- MIT license requirements
- Pre-configured .gitignore patterns

## Usage Guidelines

### For Developers
1. **Review agent-specific files** before engaging with each AI assistant
2. **Follow established patterns** when working with any configured agent
3. **Maintain consistency** across different AI interactions
4. **Update configurations** as the repository evolves

### For AI Agents
- Always reference the appropriate configuration file for context
- Coordinate with other agent configurations to maintain consistency
- Respect the minimal, focused approach established in this repository
- Update this overview when new agents are added

## Adding New Agents

When adding new AI agents to this repository:

1. **Create agent-specific configuration file** following the established pattern
2. **Update this AGENTS.md file** to include the new agent
3. **Ensure compatibility** with existing agent configurations
4. **Test coordination** between multiple agents if applicable
5. **Document any special requirements** or limitations

## Notes

- This file serves as a central index for all AI agent configurations
- Individual agent files contain detailed, agent-specific instructions
- The repository is designed to evolve from its current minimal state
- Always refer to `.github/copilot-instructions.md` for workflow details
- Maintain the minimal, focused approach that characterizes this repository template