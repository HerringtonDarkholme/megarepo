# Testing Guidelines for AI Components

**Activation Mode**: Model Decision
**Description**: Apply when working on test files, discussing testing strategies, or implementing AI component testing

<ai_testing_strategy>
- Include tests for AI service integrations when source code exists
- Test error scenarios including API failures, rate limits, and invalid responses
- Mock AI services for consistent testing environments and CI/CD pipelines
- Include integration tests for AI service connections and authentication
- Test with various input scenarios and edge cases for AI functionality
</ai_testing_strategy>

<test_patterns>
- Use Jest or Vitest for testing framework when package.json exists
- Mock AI API responses to ensure predictable test outcomes
- Test loading states and user feedback for AI operations
- Validate error handling and user experience during AI service failures
- Include performance tests for AI API response times when applicable
</test_patterns>

<mock_ai_services>
- Create comprehensive mocks for AI service responses and errors
- Test both successful and failed AI API interactions
- Include tests for rate limiting and quota management scenarios
- Mock streaming responses for real-time AI interactions
- Ensure tests work without requiring actual AI service API keys
</mock_ai_services>

<validation_testing>
- Test AI response validation and sanitization logic
- Verify proper handling of malformed or unexpected AI responses
- Include tests for prompt engineering and template generation
- Test AI model switching and configuration management
- Validate caching strategies and cache invalidation for AI responses
</validation_testing>