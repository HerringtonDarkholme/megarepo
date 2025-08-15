import * as tf from '@tensorflow/tfjs';

export class TensorFlowHelper {
  private initialized = false;

  async initialize(): Promise<void> {
    if (this.initialized) return;

    // Set backend to CPU for Node.js compatibility
    await tf.ready();
    this.initialized = true;
  }

  createModel(): tf.Sequential {
    const model = tf.sequential({
      layers: [tf.layers.dense({ inputShape: [1], units: 1 })],
    });

    model.compile({
      optimizer: 'sgd',
      loss: 'meanSquaredError',
    });

    return model;
  }

  async trainSimpleModel(
    xData: number[],
    yData: number[]
  ): Promise<tf.Sequential> {
    const model = this.createModel();

    const xs = tf.tensor2d(xData, [xData.length, 1]);
    const ys = tf.tensor2d(yData, [yData.length, 1]);

    await model.fit(xs, ys, {
      epochs: 100,
      verbose: 0,
    });

    // Clean up tensors
    xs.dispose();
    ys.dispose();

    return model;
  }

  predict(model: tf.Sequential, input: number): number {
    const prediction = model.predict(tf.tensor2d([input], [1, 1])) as tf.Tensor;
    const result = prediction.dataSync()[0];
    prediction.dispose();
    return result;
  }

  async saveModel(model: tf.Sequential, path: string): Promise<void> {
    await model.save(`file://${path}`);
  }

  async loadModel(path: string): Promise<tf.Sequential> {
    return (await tf.loadLayersModel(`file://${path}`)) as tf.Sequential;
  }
}
