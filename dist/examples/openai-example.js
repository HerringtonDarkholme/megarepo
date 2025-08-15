/**
 * Example: Text generation with OpenAI
 */
import { OpenAIClient } from '../ai/openai/client.js';
export async function openAIExample() {
    console.log('🤖 Running OpenAI Example');
    try {
        const openai = new OpenAIClient();
        const prompt = 'Explain artificial intelligence in simple terms:';
        console.log('Prompt:', prompt);
        const response = await openai.generateText(prompt, {
            maxTokens: 150,
            temperature: 0.7,
        });
        console.log('Response:', response);
        // Example of embedding generation
        const text = 'Machine learning is a subset of artificial intelligence.';
        const embedding = await openai.generateEmbedding(text);
        console.log('Embedding vector length:', embedding.length);
        console.log('First 5 embedding values:', embedding.slice(0, 5));
    }
    catch (error) {
        console.error('OpenAI example failed:', error.message);
    }
}
if (import.meta.url === new URL(process.argv[1], 'file://').href) {
    openAIExample().catch(console.error);
}
//# sourceMappingURL=openai-example.js.map