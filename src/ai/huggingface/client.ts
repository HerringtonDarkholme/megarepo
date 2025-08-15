import { HfInference } from '@huggingface/inference';
import { config } from '../../utils/config.js';

export class HuggingFaceClient {
  private client: HfInference;

  constructor() {
    this.client = new HfInference(config.huggingface.apiKey);
  }

  async generateText(
    prompt: string,
    options?: {
      model?: string;
      maxNewTokens?: number;
      temperature?: number;
    }
  ): Promise<string> {
    try {
      const response = await this.client.textGeneration({
        model: options?.model || config.huggingface.model,
        inputs: prompt,
        parameters: {
          max_new_tokens: options?.maxNewTokens || 100,
          temperature: options?.temperature || 0.7,
        },
      });

      return response.generated_text;
    } catch (error) {
      console.error('Hugging Face API error:', error);
      throw error;
    }
  }

  async getEmbedding(text: string): Promise<number[]> {
    try {
      const response = await this.client.featureExtraction({
        model: 'sentence-transformers/all-MiniLM-L6-v2',
        inputs: text,
      });

      // Handle different response types from Hugging Face API
      if (Array.isArray(response)) {
        if (typeof response[0] === 'number') {
          return response as number[];
        }
        if (Array.isArray(response[0])) {
          return (response as number[][])[0] || [];
        }
      }
      return [];
    } catch (error) {
      console.error('Hugging Face Embedding error:', error);
      throw error;
    }
  }

  async classifyText(
    text: string,
    labels: string[]
  ): Promise<Array<{ label: string; score: number }>> {
    try {
      const response = await this.client.zeroShotClassification({
        model: 'facebook/bart-large-mnli',
        inputs: text,
        parameters: { candidate_labels: labels },
      });

      // Handle the response structure properly
      if ('labels' in response && 'scores' in response) {
        const responseLabels = response.labels as string[];
        const responseScores = response.scores as number[];

        return responseLabels.map((label: string, index: number) => ({
          label,
          score: responseScores[index],
        }));
      }

      return [];
    } catch (error) {
      console.error('Hugging Face Classification error:', error);
      throw error;
    }
  }
}
