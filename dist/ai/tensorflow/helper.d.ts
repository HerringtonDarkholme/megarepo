import * as tf from '@tensorflow/tfjs';
export declare class TensorFlowHelper {
    private initialized;
    initialize(): Promise<void>;
    createModel(): tf.Sequential;
    trainSimpleModel(xData: number[], yData: number[]): Promise<tf.Sequential>;
    predict(model: tf.Sequential, input: number): number;
    saveModel(model: tf.Sequential, path: string): Promise<void>;
    loadModel(path: string): Promise<tf.Sequential>;
}
//# sourceMappingURL=helper.d.ts.map