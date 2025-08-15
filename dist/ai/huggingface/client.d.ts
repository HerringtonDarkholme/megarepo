export declare class HuggingFaceClient {
    private client;
    constructor();
    generateText(prompt: string, options?: {
        model?: string;
        maxNewTokens?: number;
        temperature?: number;
    }): Promise<string>;
    getEmbedding(text: string): Promise<number[]>;
    classifyText(text: string, labels: string[]): Promise<Array<{
        label: string;
        score: number;
    }>>;
}
//# sourceMappingURL=client.d.ts.map