---
inclusion: fileMatch
fileMatchPattern: '**/*.{js,ts,jsx,tsx,py,java,go,rs}'
---

# Code Quality Standards

## Language-Specific Guidelines

### JavaScript/TypeScript
- Use TypeScript for new projects when possible
- Follow ESLint and Prettier configurations
- Prefer `const` and `let` over `var`
- Use arrow functions for short functions
- Implement proper type annotations in TypeScript
- Use async/await over promises when appropriate

### Python
- Follow PEP 8 style guidelines
- Use type hints for function signatures
- Prefer list comprehensions for simple transformations
- Use context managers for resource management
- Document functions with docstrings
- Handle exceptions appropriately

### General Practices
- Keep functions under 50 lines when possible
- Use descriptive variable names
- Avoid deep nesting (max 3-4 levels)
- Comment complex business logic
- Remove dead code and unused imports
- Use consistent formatting

## Security Practices

### Input Validation
- Sanitize all user inputs
- Use parameterized queries for database operations
- Validate file uploads and types
- Implement rate limiting for APIs
- Use HTTPS for all network communications

### Authentication & Authorization
- Never store passwords in plain text
- Use strong hashing algorithms (bcrypt, scrypt)
- Implement proper session management
- Use JWT tokens securely
- Follow principle of least privilege

### Dependency Management
- Keep dependencies updated
- Audit for known vulnerabilities
- Use lock files for reproducible builds
- Minimize dependency count
- Review third-party code before inclusion

## Performance Considerations

### Optimization
- Profile before optimizing
- Cache expensive computations
- Use appropriate data structures
- Minimize database queries
- Implement lazy loading where appropriate
- Optimize images and assets

### Monitoring
- Add logging for important operations
- Include error tracking
- Monitor application metrics
- Set up alerts for critical issues
- Track performance over time