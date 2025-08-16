---
description: "React component patterns for AI-powered user interfaces"
globs: ["**/components/**/*", "src/components/**/*"]
alwaysApply: false
---

# AI Component Guidelines

Specific patterns for building AI-powered React components.

## AI Component Patterns

### 1. Chat Interface Components
```typescript
interface ChatComponentProps {
  onMessage: (message: string) => Promise<void>;
  isLoading: boolean;
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
}

const ChatComponent: React.FC<ChatComponentProps> = ({
  onMessage,
  isLoading,
  messages
}) => {
  // Implement proper loading states
  // Handle error boundaries
  // Provide accessibility features
  return (
    <div role="log" aria-live="polite" aria-label="Chat conversation">
      {/* Component implementation */}
    </div>
  );
};
```

### 2. Loading States
- Use skeleton loaders for AI content generation
- Provide cancellation options for long-running requests
- Show progress indicators where possible
- Implement timeout handling

### 3. Error Boundaries
```typescript
class AIErrorBoundary extends React.Component {
  // Catch and handle AI-specific errors
  // Provide fallback UI for failed AI operations
  // Log errors for monitoring
}
```

### 4. Accessibility Considerations
- Announce AI responses to screen readers
- Provide keyboard navigation for AI interfaces
- Include proper ARIA labels and roles
- Support high contrast and reduced motion preferences

### 5. Performance Optimization
- Use React.memo for expensive AI-powered components
- Implement proper cleanup for AI subscriptions
- Debounce user inputs before AI processing
- Cache AI responses when appropriate