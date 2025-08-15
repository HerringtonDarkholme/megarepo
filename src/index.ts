import { config } from './utils/config.js';
import { OpenAIClient } from './ai/openai/client.js';
import { TensorFlowHelper } from './ai/tensorflow/helper.js';
import { HuggingFaceClient } from './ai/huggingface/client.js';

async function main() {
  console.log('🤖 AI Megarepo Initialized');
  console.log('Available AI Services:');

  // Initialize AI clients
  if (config.openai.apiKey) {
    const _openaiClient = new OpenAIClient();
    console.log('✅ OpenAI Client ready');
  } else {
    console.log('⚠️  OpenAI API key not configured');
  }

  if (config.huggingface.apiKey) {
    const _hfClient = new HuggingFaceClient();
    console.log('✅ Hugging Face Client ready');
  } else {
    console.log('⚠️  Hugging Face API key not configured');
  }

  const tf = new TensorFlowHelper();
  await tf.initialize();
  console.log('✅ TensorFlow.js ready');

  console.log('\n🚀 All AI systems operational!');
}

main().catch(console.error);
