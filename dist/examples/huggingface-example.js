/**
 * Example: Text classification with Hugging Face
 */
import { HuggingFaceClient } from '../ai/huggingface/client.js';
export async function huggingFaceExample() {
    console.log('🤗 Running Hugging Face Example');
    try {
        const hf = new HuggingFaceClient();
        // Text classification example
        const text = 'I love using AI tools for development!';
        const labels = ['positive', 'negative', 'neutral'];
        console.log('Text to classify:', text);
        console.log('Available labels:', labels);
        const classification = await hf.classifyText(text, labels);
        console.log('Classification results:', classification);
        // Embedding example
        const embeddingText = 'Natural language processing with transformers';
        const embedding = await hf.getEmbedding(embeddingText);
        console.log('Embedding text:', embeddingText);
        console.log('Embedding vector length:', embedding.length);
        console.log('First 5 embedding values:', embedding.slice(0, 5));
    }
    catch (error) {
        console.error('Hugging Face example failed:', error.message);
    }
}
if (import.meta.url === new URL(process.argv[1], 'file://').href) {
    huggingFaceExample().catch(console.error);
}
//# sourceMappingURL=huggingface-example.js.map