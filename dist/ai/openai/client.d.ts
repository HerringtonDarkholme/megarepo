export declare class OpenAIClient {
    private client;
    constructor();
    generateText(prompt: string, options?: {
        model?: string;
        maxTokens?: number;
        temperature?: number;
    }): Promise<string>;
    generateEmbedding(text: string): Promise<number[]>;
}
//# sourceMappingURL=client.d.ts.map