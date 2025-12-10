# diagramstack

<div align="center">

**Instant AI Architect for Diagrams & Systems**

Enterprise-ready AI diagramming platform that transforms natural language into architecture diagrams, flowcharts, and system maps in seconds.

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Next.js](https://img.shields.io/badge/Next.js-16.x-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)

[🚀 Live Demo](https://diagramstack.com)

</div>

## Overview

diagramstack is an enterprise-ready AI diagramming platform that transforms natural language into professional architecture diagrams, cloud infrastructure maps, and business process flows. Built for software architects, cloud engineers, and technical teams who need clarity, speed, and precision.

## Features

- **AI-Powered Architecture Diagrams**: Transform natural language into professional software architecture diagrams, cloud infrastructure maps, and system designs
- **Cloud Infrastructure Support**: Specialized support for AWS, Azure, and GCP architecture diagrams with official icons and best practices
- **Business Process Flows**: Create clear, professional flowcharts and process diagrams for documentation and planning
- **Image-Based Diagram Replication**: Upload existing diagrams or images and have the AI replicate and enhance them automatically
- **Diagram History & Version Control**: Comprehensive version tracking that allows you to view and restore previous versions of your diagrams
- **Interactive AI Chat**: Refine your diagrams in real-time through natural language conversations
- **Animated Connectors**: Create dynamic visualizations with animated connectors between diagram elements
- **Multi-Provider AI Support**: Choose from AWS Bedrock, OpenAI, Anthropic, Google AI, Azure OpenAI, Ollama, OpenRouter, and DeepSeek

## Examples

Here are some example prompts and their generated diagrams:

<div align="center">
<table width="100%">
  <tr>
    <td colspan="2" valign="top" align="center">
      <strong>Animated transformer connectors</strong><br />
      <p><strong>Prompt:</strong> Give me a **animated connector** diagram of transformer's architecture.</p>
      <img src="./public/animated_connectors.svg" alt="Transformer Architecture with Animated Connectors" width="480" />
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <strong>GCP architecture diagram</strong><br />
      <p><strong>Prompt:</strong> Generate a GCP architecture diagram with **GCP icons**. In this diagram, users connect to a frontend hosted on an instance.</p>
      <img src="./public/gcp_demo.svg" alt="GCP Architecture Diagram" width="480" />
    </td>
    <td width="50%" valign="top">
      <strong>AWS architecture diagram</strong><br />
      <p><strong>Prompt:</strong> Generate a AWS architecture diagram with **AWS icons**. In this diagram, users connect to a frontend hosted on an instance.</p>
      <img src="./public/aws_demo.svg" alt="AWS Architecture Diagram" width="480" />
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <strong>Azure architecture diagram</strong><br />
      <p><strong>Prompt:</strong> Generate a Azure architecture diagram with **Azure icons**. In this diagram, users connect to a frontend hosted on an instance.</p>
      <img src="./public/azure_demo.svg" alt="Azure Architecture Diagram" width="480" />
    </td>
    <td width="50%" valign="top">
      <strong>Cat sketch prompt</strong><br />
      <p><strong>Prompt:</strong> Draw a cute cat for me.</p>
      <img src="./public/cat_demo.svg" alt="Cat Drawing" width="240" />
    </td>
  </tr>
</table>
</div>

## How It Works

The application uses the following technologies:

- **Next.js**: For the frontend framework and routing
- **Vercel AI SDK** (`ai` + `@ai-sdk/*`): For streaming AI responses and multi-provider support
- **react-drawio**: For diagram representation and manipulation

Diagrams are represented as XML that can be rendered in draw.io. The AI processes your commands and generates or modifies this XML accordingly.

## Multi-Provider Support

- AWS Bedrock (default)
- OpenAI
- Anthropic
- Google AI
- Azure OpenAI
- Ollama
- OpenRouter
- DeepSeek

All providers except AWS Bedrock and OpenRouter support custom endpoints.

📖 **[Detailed Provider Configuration Guide](./docs/ai-providers.md)** - See setup instructions for each provider.

**Model Requirements**: This task requires strong model capabilities for generating long-form text with strict formatting constraints (draw.io XML). Recommended models include Claude Sonnet 4.5, GPT-4o, Gemini 2.0, and DeepSeek V3/R1.

Note that `claude-sonnet-4-5` has trained on draw.io diagrams with AWS logos, so if you want to create AWS architecture diagrams, this is the best choice.

## Getting Started

### Run with Docker (Recommended)

If you just want to run it locally, the best way is to use Docker.

First, install Docker if you haven't already: [Get Docker](https://docs.docker.com/get-docker/)

Then run:

```bash
docker run -d -p 3000:3000 \
  -e AI_PROVIDER=openai \
  -e AI_MODEL=gpt-4o \
  -e OPENAI_API_KEY=your_api_key \
  diagramstack/diagramstack:latest
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Replace the environment variables with your preferred AI provider configuration. See [Multi-Provider Support](#multi-provider-support) for available options.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-org/diagramstack
cd diagramstack
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure your AI provider:

Create a `.env.local` file in the root directory:

```bash
cp env.example .env.local
```

Edit `.env.local` and configure your chosen provider:

- Set `AI_PROVIDER` to your chosen provider (bedrock, openai, anthropic, google, azure, ollama, openrouter, deepseek)
- Set `AI_MODEL` to the specific model you want to use
- Add the required API keys for your provider
- `ACCESS_CODE_LIST`: Optional access password(s), can be comma-separated for multiple passwords.

> Warning: If you do not set `ACCESS_CODE_LIST`, anyone can access your deployed site directly, which may lead to rapid depletion of your token. It is recommended to set this option.

See the [Provider Configuration Guide](./docs/ai-providers.md) for detailed setup instructions for each provider.

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Be sure to **set the environment variables** in the Vercel dashboard as you did in your local `.env.local` file.

### Docker Deployment

Build and run the Docker container:

```bash
docker build -t diagramstack .
docker run -d -p 3000:3000 \
  -e AI_PROVIDER=openai \
  -e AI_MODEL=gpt-4o \
  -e OPENAI_API_KEY=your_api_key \
  diagramstack
```

### Self-Hosted

For self-hosted deployments, ensure you have:

- Node.js 20+ installed
- All environment variables configured
- Sufficient resources for AI API calls

## Project Structure

```
app/                  # Next.js App Router
  api/chat/           # Chat API endpoint with AI tools
  page.tsx            # Main page with DrawIO embed
components/           # React components
  chat-panel.tsx      # Chat interface with diagram control
  chat-input.tsx      # User input component with file upload
  history-dialog.tsx  # Diagram version history viewer
  ui/                 # UI components (buttons, cards, etc.)
contexts/             # React context providers
  diagram-context.tsx # Global diagram state management
lib/                  # Utility functions and helpers
  ai-providers.ts     # Multi-provider AI configuration
  utils.ts            # XML processing and conversion utilities
public/               # Static assets including example images
```

## Configuration

### Environment Variables

See `env.example` for all available configuration options. Key variables include:

- `AI_PROVIDER`: The AI provider to use
- `AI_MODEL`: The specific model ID
- Provider-specific API keys
- `ACCESS_CODE_LIST`: Optional access control
- `LANGFUSE_*`: Optional observability configuration

### Access Control

Set `ACCESS_CODE_LIST` to restrict access to your deployment. Multiple codes can be comma-separated.

## Pricing & Licensing

diagramstack is available as a commercial SaaS product. For pricing information, please visit [diagramstack.com](https://diagramstack.com) or contact sales.

This software is licensed under the Apache License 2.0. See [LICENSE](./LICENSE) for details.

## Support & Contact

For support, feature requests, or inquiries:

- **Website**: [diagramstack.com](https://diagramstack.com)
- **Documentation**: [docs.diagramstack.com](https://docs.diagramstack.com)
- **Support Email**: support@diagramstack.com

## Roadmap

- [x] Multi-provider AI support
- [x] Diagram history and version control
- [x] Image-based diagram replication
- [x] Animated connectors
- [ ] API configuration UI
- [ ] Team collaboration features
- [ ] Export to multiple formats
- [ ] Custom diagram templates

## Contributing

We welcome contributions! Please see our contributing guidelines for more information.

---

## Attribution

diagramstack is built on the open-source [Next AI Draw.io](https://github.com/DayuanJiang/next-ai-draw-io) project by Dayuan Jiang, licensed under Apache-2.0.

Original project: https://github.com/DayuanJiang/next-ai-draw-io

Modified and commercially packaged by diagramstack, 2025.
