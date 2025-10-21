# Support

## Getting Help

Thank you for using Obsidian Cursor with Miyabi autonomous development framework!

### 📚 Documentation

Before asking for help, please check our comprehensive documentation:

- **[README.md](../README.md)** - Project overview and quick start
- **[ARCHITECTURE.md](../docs/ARCHITECTURE.md)** - System architecture and design
- **[WORKFLOWS.md](../docs/WORKFLOWS.md)** - GitHub Actions workflows guide
- **[API.md](../docs/API.md)** - API reference and usage
- **[CONTRIBUTING.md](../CONTRIBUTING.md)** - Contributing guidelines

### 🤝 Community Support

#### GitHub Discussions

For general questions, ideas, or community discussions:
- Visit our [GitHub Discussions](https://github.com/test141515111/Obsidian_Cursor/discussions)
- Search existing discussions before creating a new one
- Use appropriate categories for your topic

#### GitHub Issues

For bug reports and feature requests:
1. Check [existing issues](https://github.com/test141515111/Obsidian_Cursor/issues) first
2. Use our issue templates:
   - 🐛 [Bug Report](.github/ISSUE_TEMPLATE/bug_report.yml)
   - ✨ [Feature Request](.github/ISSUE_TEMPLATE/feature_request.yml)
3. Provide as much detail as possible

### 🔧 Troubleshooting

#### Common Issues

**Q: Miyabi agent not running?**
```bash
# Check system health
npx miyabi doctor

# Verify GitHub token
echo $GITHUB_TOKEN

# Check agent status
npx miyabi status
```

**Q: GitHub Actions workflow failing?**
- Check workflow logs in the Actions tab
- Verify GITHUB_TOKEN permissions
- Check BUDGET.yml configuration for Economic Circuit Breaker

**Q: Dashboard server not starting?**
```bash
# Check logs
npm run dev

# Verify dependencies
npm install

# Check port availability
lsof -i :3000
```

#### System Requirements

- Node.js: >= 18.0.0
- npm: >= 9.0.0
- Git: Latest version
- GitHub CLI: Latest version

### 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Environment**:
   - OS and version
   - Node.js version (`node --version`)
   - npm version (`npm --version`)
   - Git version (`git --version`)

2. **Steps to Reproduce**:
   - Clear, numbered steps
   - Expected behavior
   - Actual behavior

3. **Logs**:
   - Error messages
   - Stack traces
   - Relevant workflow logs

4. **Context**:
   - What were you trying to do?
   - When did the issue start?
   - Does it happen consistently?

### ✨ Feature Requests

We welcome feature requests! When suggesting a feature:

1. Check if it already exists or is planned
2. Describe the problem it solves
3. Explain the proposed solution
4. Consider alternative solutions
5. Add mockups or examples if applicable

### 🔒 Security Issues

**DO NOT** open public issues for security vulnerabilities.

Please refer to our [Security Policy](../SECURITY.md) for reporting security issues privately.

### 📧 Contact

For questions not suitable for public discussion:
- Create a private security advisory
- Contact maintainers through GitHub

### 💡 Contributing

Interested in contributing? Check out:
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Contribution guidelines
- [Good First Issues](https://github.com/test141515111/Obsidian_Cursor/labels/good-first-issue) - Great starting points

### 🙏 Thank You

Thank you for being part of the Miyabi autonomous development community!

---

**Response Time**: We aim to respond to issues and discussions within 48 hours, but please be patient as this is an open-source project maintained by volunteers.
