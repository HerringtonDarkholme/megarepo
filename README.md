# AI Megarepo

A comprehensive TypeScript repository with all AI setup and integrations ready to use. This repository provides a modern development environment for AI/ML projects with support for multiple AI services and frameworks.

## 🚀 Features

- **Multiple AI Providers**: OpenAI, Hugging Face, TensorFlow.js
- **TypeScript**: Full type safety and modern ES modules
- **Development Tools**: ESLint, Prettier, Jest for testing
- **Examples**: Ready-to-run examples for each AI service
- **Configuration**: Environment-based configuration management
- **Testing**: Comprehensive test suite with Jest

## 📦 AI Services Included

### OpenAI Integration
- Text generation with GPT models
- Embeddings generation
- Configurable parameters (temperature, max tokens, etc.)

### Hugging Face Integration
- Text generation with various models
- Text classification
- Feature extraction and embeddings
- Zero-shot classification

### TensorFlow.js Integration
- Browser and Node.js compatible
- Model training and prediction
- Model saving and loading
- Linear regression examples

## 🛠 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd megarepo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your API keys
```

## ⚡ Quick Start

### Basic Usage

```bash
# Run the main application
npm run dev

# Build the project
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

### Environment Configuration

Copy `.env.example` to `.env` and configure your API keys:

```bash
OPENAI_API_KEY=your_openai_api_key_here
HUGGINGFACE_API_KEY=your_huggingface_api_key_here
```

### Running Examples

```bash
# TensorFlow.js linear regression
npm run dev src/examples/tensorflow-example.ts

# OpenAI text generation (requires API key)
npm run dev src/examples/openai-example.ts

# Hugging Face classification (requires API key)
npm run dev src/examples/huggingface-example.ts
```

## 📁 Project Structure

```
src/
├── ai/                    # AI service integrations
│   ├── openai/           # OpenAI client and utilities
│   ├── tensorflow/       # TensorFlow.js helpers
│   └── huggingface/      # Hugging Face client
├── examples/             # Example implementations
├── models/               # AI model definitions
├── utils/                # Utility functions and config
└── __tests__/            # Test files
```

## 🧪 Testing

The project includes comprehensive tests:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm test -- --coverage
```

## 📝 Code Quality

- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **TypeScript**: Type safety and modern JavaScript features

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## 🔧 Development

### Adding New AI Services

1. Create a new directory in `src/ai/`
2. Implement the client class with consistent interface
3. Add configuration in `src/utils/config.ts`
4. Create examples in `src/examples/`
5. Add tests in `src/__tests__/`

### Project Scripts

- `npm run build` - Build TypeScript to JavaScript
- `npm run dev` - Run development server with hot reload
- `npm start` - Run the built application
- `npm test` - Run test suite
- `npm run lint` - Check code quality
- `npm run format` - Format code with Prettier

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Resources

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Hugging Face Hub](https://huggingface.co/docs/hub)
- [TensorFlow.js Guide](https://www.tensorflow.org/js/guide)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
