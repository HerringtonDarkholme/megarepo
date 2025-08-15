/**
 * Example: Simple linear regression with TensorFlow.js
 */
import { TensorFlowHelper } from '../ai/tensorflow/helper.js';
export async function linearRegressionExample() {
    console.log('🔢 Running Linear Regression Example');
    const tf = new TensorFlowHelper();
    await tf.initialize();
    // Generate some sample data: y = 2x + 1 + noise
    const xData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const yData = xData.map((x) => 2 * x + 1 + (Math.random() - 0.5) * 0.5);
    console.log('Training data:', { xData, yData });
    // Train the model
    const model = await tf.trainSimpleModel(xData, yData);
    // Make predictions
    const testInput = 11;
    const prediction = tf.predict(model, testInput);
    console.log(`Prediction for x=${testInput}: ${prediction.toFixed(2)}`);
    console.log(`Expected (2*11+1): ${2 * testInput + 1}`);
    return model;
}
if (import.meta.url === new URL(process.argv[1], 'file://').href) {
    linearRegressionExample().catch(console.error);
}
//# sourceMappingURL=tensorflow-example.js.map