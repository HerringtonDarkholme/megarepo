import { config } from '../utils/config';

describe('Configuration', () => {
  test('should load default configuration', () => {
    expect(config).toBeDefined();
    expect(config.openai).toBeDefined();
    expect(config.huggingface).toBeDefined();
    expect(config.tensorflow).toBeDefined();
    expect(config.server).toBeDefined();
  });

  test('should have default values', () => {
    expect(config.openai.model).toBe('gpt-3.5-turbo');
    expect(config.huggingface.model).toBe('microsoft/DialoGPT-medium');
    expect(config.tensorflow.backend).toBe('cpu');
    expect(config.server.port).toBe(3000);
  });
});
