# Model Evaluation Skill

## Purpose
Evaluate and test AI models systematically to ensure quality, performance, and reliability in production.

## When to Use
- Selecting between different models or versions
- Validating model performance changes
- Debugging quality issues
- Benchmarking model improvements
- Making model upgrade decisions

## Steps

### 1. Define Evaluation Metrics

#### Quality Metrics
- **Accuracy**: Correctness of outputs
- **Relevance**: Appropriateness to task
- **Consistency**: Reproducibility across runs
- **Completeness**: Coverage of required elements

#### Performance Metrics
- **Latency**: Response time (p50, p95, p99)
- **Throughput**: Requests per second
- **Token Usage**: Input/output token counts
- **Cost**: Per-request cost estimation

#### Safety Metrics
- **Toxicity**: Harmful content detection
- **Bias**: Fair treatment across groups
- **Privacy**: PII exposure risk
- **Robustness**: Handling edge cases

### 2. Create Test Datasets

```typescript
interface EvaluationExample {
  id: string;
  input: string;
  expectedOutput?: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

// Golden test dataset
const testDataset: EvaluationExample[] = [
  {
    id: 'test-001',
    input: 'Summarize: The quick brown fox...',
    expectedOutput: 'A fox jumps over a dog',
    tags: ['summarization', 'simple'],
    difficulty: 'easy',
  },
  // Add diverse examples covering edge cases
];
```

### 3. Run Systematic Evaluation

```typescript
interface EvaluationConfig {
  model: string;
  temperature: number;
  maxTokens: number;
  systemPrompt?: string;
}

async function evaluateModel(
  config: EvaluationConfig,
  dataset: EvaluationExample[]
): Promise<EvaluationResults> {
  const results = [];
  
  for (const example of dataset) {
    const startTime = Date.now();
    
    try {
      const output = await runModel(config, example.input);
      const latency = Date.now() - startTime;
      
      const quality = await scoreQuality(output, example);
      
      results.push({
        id: example.id,
        output,
        quality,
        latency,
        tokenCount: countTokens(output),
        success: true,
      });
    } catch (error) {
      results.push({
        id: example.id,
        error: error.message,
        success: false,
      });
    }
  }
  
  return aggregateResults(results);
}
```

### 4. Implement Quality Scoring

```typescript
// Automated scoring methods
async function scoreQuality(
  output: string,
  expected: EvaluationExample
): Promise<QualityScore> {
  return {
    // Exact match for structured outputs
    exactMatch: output.trim() === expected.expectedOutput?.trim(),
    
    // Semantic similarity (using embeddings)
    semanticSimilarity: await computeSimilarity(output, expected.expectedOutput),
    
    // BLEU/ROUGE scores for text generation
    bleuScore: calculateBLEU(output, expected.expectedOutput),
    
    // Custom domain-specific metrics
    customMetrics: evaluateCustomCriteria(output, expected),
  };
}
```

### 5. Compare Models

```typescript
interface ModelComparison {
  modelA: string;
  modelB: string;
  winner: 'A' | 'B' | 'tie';
  improvements: string[];
  regressions: string[];
}

function compareModels(
  resultsA: EvaluationResults,
  resultsB: EvaluationResults
): ModelComparison {
  return {
    modelA: resultsA.config.model,
    modelB: resultsB.config.model,
    winner: determineWinner(resultsA, resultsB),
    improvements: findImprovements(resultsA, resultsB),
    regressions: findRegressions(resultsA, resultsB),
  };
}
```

## Evaluation Strategies

### A/B Testing
- Run both models on same inputs
- Compare quality and performance
- Use statistical significance tests
- Consider user preferences

### Regression Testing
- Maintain golden test dataset
- Run on every model change
- Alert on quality degradation
- Track metrics over time

### Human Evaluation
- Sample outputs for manual review
- Use rating scales or preferences
- Collect qualitative feedback
- Combine with automated metrics

### Continuous Monitoring
- Track production metrics
- Monitor error rates
- Analyze user feedback
- Set up quality alerts

## Best Practices

### Test Dataset Design
- Cover diverse input types and lengths
- Include edge cases and failure modes
- Balance easy and difficult examples
- Update regularly with new patterns

### Metric Selection
- Use multiple complementary metrics
- Align metrics with business goals
- Consider both quality and cost
- Track metrics over time

### Evaluation Rigor
- Use sufficient sample sizes
- Test with representative data
- Control for confounding factors
- Document evaluation methodology

### Decision Making
- Set clear acceptance criteria
- Consider trade-offs (quality vs cost)
- Validate in production-like environment
- Plan rollback strategy

## Example Evaluation Report

```typescript
interface EvaluationReport {
  model: string;
  date: string;
  dataset: {
    size: number;
    categories: Record<string, number>;
  };
  metrics: {
    averageQuality: number;
    p50Latency: number;
    p95Latency: number;
    averageTokens: number;
    estimatedCostPer1000: number;
    errorRate: number;
  };
  recommendations: string[];
  sampleOutputs: Array<{
    input: string;
    output: string;
    score: number;
  }>;
}
```

## Common Evaluation Patterns

### Model Selection Matrix
```
                Quality  Speed  Cost  Overall
GPT-4           9/10     6/10   4/10  7.5/10
GPT-3.5         7/10     9/10   9/10  8.5/10
Claude-3        8/10     8/10   7/10  8.0/10
```

### Performance Benchmarks
- Establish baseline with current model
- Set target improvements (e.g., +10% quality)
- Measure both improvements and regressions
- Consider non-functional requirements

### Quality Gates
```typescript
const qualityGates = {
  minimumAccuracy: 0.85,
  maximumLatencyP95: 2000, // ms
  maximumErrorRate: 0.01,
  maximumCostPer1000: 0.50, // USD
};
```

## Troubleshooting

### Low Quality Scores
- Review prompt engineering
- Check for data distribution shift
- Validate evaluation criteria
- Consider fine-tuning

### High Latency
- Optimize prompt length
- Use smaller models for simple tasks
- Implement caching
- Consider batch processing

### High Costs
- Reduce token usage
- Use cheaper models where appropriate
- Implement smart caching
- Optimize prompt efficiency
