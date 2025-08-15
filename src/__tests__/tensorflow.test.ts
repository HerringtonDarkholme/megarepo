import { TensorFlowHelper } from '../ai/tensorflow/helper';

describe('TensorFlowHelper', () => {
  let tf: TensorFlowHelper;

  beforeEach(() => {
    tf = new TensorFlowHelper();
  });

  test('should initialize successfully', async () => {
    await expect(tf.initialize()).resolves.not.toThrow();
  });

  test('should create a model', async () => {
    await tf.initialize();
    const model = tf.createModel();
    expect(model).toBeDefined();
    expect(model.layers.length).toBeGreaterThan(0);
  });

  test('should train and predict', async () => {
    await tf.initialize();

    const xData = [1, 2, 3, 4];
    const yData = [2, 4, 6, 8]; // y = 2x

    const model = await tf.trainSimpleModel(xData, yData);
    const prediction = tf.predict(model, 5);

    // Should be close to 10 (2 * 5)
    expect(prediction).toBeCloseTo(10, 0);
  });
});
