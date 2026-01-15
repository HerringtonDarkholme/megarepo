# Prompt Engineering Skill

## Purpose
Design, optimize, and test prompts for AI models to achieve desired outputs with efficiency and consistency.

## When to Use
- Creating new AI features that require prompts
- Optimizing existing prompts for better performance
- Debugging unexpected AI behavior
- Reducing token usage and costs
- Improving output quality and consistency

## Steps

### 1. Define Clear Objectives
- Specify exact desired output format
- Identify success criteria
- Consider edge cases and constraints
- Define quality metrics

### 2. Choose Prompt Structure
```typescript
// System + User pattern
const systemPrompt = "You are a helpful assistant that...";
const userPrompt = "Please help me with...";

// Few-shot examples pattern
const prompt = `
Task: Classify sentiment

Examples:
Input: "I love this!" → Output: positive
Input: "This is terrible" → Output: negative

Input: "${userInput}" → Output:`;
```

### 3. Implement Prompt Templates
```typescript
// Reusable prompt templates
class PromptTemplate {
  constructor(
    private template: string,
    private variables: string[]
  ) {}

  render(values: Record<string, string>): string {
    let result = this.template;
    for (const [key, value] of Object.entries(values)) {
      result = result.replace(`{{${key}}}`, value);
    }
    return result;
  }
}

const summaryTemplate = new PromptTemplate(
  "Summarize the following text in {{length}} words:\n\n{{text}}",
  ['length', 'text']
);
```

### 4. Optimize for Token Efficiency
- Remove unnecessary words and formatting
- Use concise instructions
- Leverage system messages effectively
- Consider model's context window limits

### 5. Test and Iterate
- Create test cases with expected outputs
- Use temperature=0 for deterministic testing
- Compare outputs across model versions
- Measure quality metrics (accuracy, relevance, etc.)

## Prompt Patterns

### Chain of Thought
```
Let's solve this step by step:
1. First, identify the key information
2. Then, analyze the relationships
3. Finally, draw conclusions
```

### Role-Based Prompting
```
You are an expert software engineer with 10+ years of experience in 
TypeScript and React. Review the following code and provide specific,
actionable feedback.
```

### Structured Output
```
Respond in the following JSON format:
{
  "summary": "brief summary here",
  "key_points": ["point 1", "point 2"],
  "confidence": 0.95
}
```

### Constraint Setting
```
Rules:
- Keep response under 100 words
- Use only technical terminology
- Cite sources when making factual claims
- If uncertain, explicitly state "I'm not sure"
```

## Best Practices

### Clarity and Specificity
- Be explicit about format and structure
- Use examples to clarify expectations
- Define terms that might be ambiguous
- Specify constraints clearly

### Token Optimization
- Front-load important information
- Use abbreviations consistently
- Remove redundant phrasing
- Consider prompt caching strategies

### Quality Assurance
- Version control your prompts
- Document prompt changes and rationale
- A/B test different variations
- Monitor prompt performance metrics

### Safety and Ethics
- Include safety guidelines in system prompts
- Test for bias in outputs
- Implement content filtering
- Handle sensitive topics appropriately

## Example Optimizations

### Before (70 tokens)
```
I would like you to please help me by taking the following piece of text 
and creating a summary of it that captures the main points and key ideas, 
making sure to keep it concise but comprehensive.
```

### After (20 tokens)
```
Summarize the following text, capturing main points concisely:
```

## Testing Framework

```typescript
interface PromptTest {
  input: string;
  expectedOutput: string | RegExp;
  temperature: number;
}

async function testPrompt(
  prompt: string,
  tests: PromptTest[]
): Promise<TestResults> {
  const results = [];
  
  for (const test of tests) {
    const output = await runPrompt(prompt, test.input, test.temperature);
    const passed = typeof test.expectedOutput === 'string'
      ? output.includes(test.expectedOutput)
      : test.expectedOutput.test(output);
    
    results.push({ test, output, passed });
  }
  
  return { results, passRate: results.filter(r => r.passed).length / results.length };
}
```

## Common Issues and Solutions

### Issue: Inconsistent outputs
- Solution: Lower temperature, add more examples, be more specific

### Issue: Too verbose
- Solution: Add length constraints, use "concise" in instructions

### Issue: Missing key information
- Solution: Explicitly list required components in prompt

### Issue: High token costs
- Solution: Remove examples, simplify instructions, use smaller models
