# TypeScript and JavaScript Standards

**Activation Mode**: Glob (`**/*.{ts,tsx,js,jsx}`)

Apply these rules when working with TypeScript and JavaScript files.

## TypeScript Best Practices

- Use strict TypeScript configuration for better type safety
- Prefer interfaces over types for object shapes
- Use const assertions for literal types
- Leverage TypeScript utility types (Partial, Pick, Omit, etc.)
- Avoid `any` type; use `unknown` when type is truly unknown

## Modern JavaScript Patterns

- Use async/await instead of raw promises
- Prefer const and let over var
- Use destructuring for cleaner code
- Leverage optional chaining (?.) and nullish coalescing (??)
- Use template literals for string interpolation

## Code Organization

- One component/class per file
- Group related functionality in modules
- Use barrel exports (index.ts) for clean imports
- Separate business logic from UI components
- Keep functions small and focused on single responsibility

## Error Handling

- Always handle promise rejections
- Use try-catch blocks for async operations
- Create custom error classes for specific error types
- Provide meaningful error messages
- Log errors appropriately without exposing sensitive data

## AI-Specific JavaScript Patterns

- Type API responses from AI services
- Create type-safe wrappers for AI SDK methods
- Use discriminated unions for AI response types
- Implement proper streaming response handlers
- Type guard functions for AI response validation

## Performance Considerations

- Avoid unnecessary re-renders in React components
- Use memoization (useMemo, useCallback) appropriately
- Implement debouncing/throttling for API calls
- Lazy load AI models and large dependencies
- Profile and optimize hot code paths

## Testing

- Write unit tests for pure functions
- Mock AI API calls in tests
- Use TypeScript for test files
- Test edge cases and error conditions
- Maintain high code coverage for critical paths
