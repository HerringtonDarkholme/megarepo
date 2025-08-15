import * as tf from '@tensorflow/tfjs';
export class TensorFlowHelper {
    initialized = false;
    async initialize() {
        if (this.initialized)
            return;
        // Set backend to CPU for Node.js compatibility
        await tf.ready();
        this.initialized = true;
    }
    createModel() {
        const model = tf.sequential({
            layers: [tf.layers.dense({ inputShape: [1], units: 1 })],
        });
        model.compile({
            optimizer: 'sgd',
            loss: 'meanSquaredError',
        });
        return model;
    }
    async trainSimpleModel(xData, yData) {
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
    predict(model, input) {
        const prediction = model.predict(tf.tensor2d([input], [1, 1]));
        const result = prediction.dataSync()[0];
        prediction.dispose();
        return result;
    }
    async saveModel(model, path) {
        await model.save(`file://${path}`);
    }
    async loadModel(path) {
        return (await tf.loadLayersModel(`file://${path}`));
    }
}
//# sourceMappingURL=helper.js.map