# Obsidian Cursor Documentation

## Overview

Obsidian Cursor is a project integrated with the Miyabi autonomous development framework, providing AI-driven development automation.

## Features

- 🤖 6 AI Agents (Coordinator, CodeGen, Review, Issue, PR, Deploy)
- 📝 Automated Issue → PR → Deploy pipeline
- 🏷️ Smart labeling with 55+ labels
- 🔄 14 GitHub Actions workflows
- 📊 Real-time project monitoring
- 💰 Economic circuit breaker for cost control

## Quick Start

```bash
# Install dependencies
npm install

# Check project status
npm run miyabi:status

# Run autonomous mode
npm run miyabi:auto

# Scan TODOs
npm run miyabi:todos
```

## Documentation

- [Architecture](./ARCHITECTURE.md)
- [Agent System](./AGENTS.md)
- [Workflows](./WORKFLOWS.md)
- [API Reference](./API.md)

## License

MIT
