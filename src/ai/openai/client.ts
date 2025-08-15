import OpenAI from 'openai';
import { config } from '../../utils/config.js';

export class OpenAIClient {
  private client: OpenAI;

  constructor() {
    if (!config.openai.apiKey) {
      throw new Error('OpenAI API key is required');
    }

    this.client = new OpenAI({
      apiKey: config.openai.apiKey,
    });
  }

  async generateText(
    prompt: string,
    options?: {
      model?: string;
      maxTokens?: number;
      temperature?: number;
    }
  ): Promise<string> {
    try {
      const response = await this.client.chat.completions.create({
        model: options?.model || config.openai.model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: options?.maxTokens || 100,
        temperature: options?.temperature || 0.7,
      });

      return response.choices[0]?.message?.content || '';
    } catch (error) {
      console.error('OpenAI API error:', error);
      throw error;
    }
  }

  async generateEmbedding(text: string): Promise<number[]> {
    try {
      const response = await this.client.embeddings.create({
        model: 'text-embedding-ada-002',
        input: text,
      });

      return response.data[0]?.embedding || [];
    } catch (error) {
      console.error('OpenAI Embedding error:', error);
      throw error;
    }
  }
}
