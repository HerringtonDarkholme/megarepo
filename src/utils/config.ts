import { config as dotenvConfig } from 'dotenv';

// Load environment variables
dotenvConfig();

export const config = {
  openai: {
    apiKey: process.env.OPENAI_API_KEY || '',
    model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
  },
  huggingface: {
    apiKey: process.env.HUGGINGFACE_API_KEY || '',
    model: process.env.HUGGINGFACE_MODEL || 'microsoft/DialoGPT-medium',
  },
  tensorflow: {
    backend: process.env.TF_BACKEND || 'cpu',
  },
  server: {
    port: parseInt(process.env.PORT || '3000'),
  },
} as const;
