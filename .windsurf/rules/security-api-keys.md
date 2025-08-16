# Security and API Key Management

**Activation Mode**: Always On

<security_guidelines>
- NEVER commit API keys, secrets, or credentials to version control
- Always use environment variables for sensitive data and AI service keys
- Create .env.example files to document required environment variables
- Implement proper API key rotation and management patterns
- Use secure storage solutions for production deployments
</security_guidelines>

<data_privacy>
- Avoid sending sensitive user data to AI services without proper consent
- Implement data anonymization where possible for AI training and processing
- Follow GDPR and privacy regulations in AI data handling
- Document data usage and retention policies for AI services
- Validate all inputs before sending to AI services to prevent injection attacks
</data_privacy>

<api_security>
- Implement proper CORS settings for AI API endpoints
- Use HTTPS for all AI API communications and service integrations
- Implement proper rate limiting and authentication for AI endpoints
- Regularly audit and rotate API keys and secrets
- Use middleware for common AI service authentication operations
</api_security>