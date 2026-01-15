# Testing AI Components

**Activation Mode**: Model Decision

Apply this rule when working on testing strategies, test files, or quality assurance for AI components.

## Testing Principles for AI

- AI systems require different testing approaches than traditional software
- Focus on behavior validation rather than exact output matching
- Consider non-deterministic nature of AI responses
- Test for safety, bias, and ethical considerations

## Unit Testing

- Test individual AI service integrations independently
- Mock external API calls to avoid costs and rate limits
- Validate input sanitization and output formatting
- Test error handling for API failures and timeouts

## Integration Testing

- Test complete AI workflows end-to-end
- Verify proper handling of streaming responses
- Test rate limiting and retry logic
- Validate context management across multiple requests

## Quality Metrics

- Measure response quality using appropriate metrics (BLEU, ROUGE, etc.)
- Track API latency and performance benchmarks
- Monitor token usage and cost per operation
- Evaluate response relevance and accuracy

## Testing Best Practices

- Use deterministic test cases where possible (set temperature=0, seed values)
- Create golden test datasets for regression testing
- Implement property-based testing for edge cases
- Test with various input sizes and complexities

## Safety Testing

- Test for prompt injection vulnerabilities
- Validate content filtering and moderation
- Test rate limiting and abuse prevention
- Verify proper handling of sensitive data

## Mock Strategies

- Create realistic mock responses for development
- Use recorded real API responses for testing
- Implement test fixtures for common scenarios
- Maintain separate test API keys with limits

## Continuous Testing

- Integrate AI component tests in CI/CD pipelines
- Monitor production AI performance metrics
- Set up alerts for quality degradation
- Implement A/B testing for model changes
