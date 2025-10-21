# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within Obsidian Cursor, please send an email to the maintainers. All security vulnerabilities will be promptly addressed.

### What to include in your report:

- Type of vulnerability
- Full paths of source file(s) related to the manifestation of the vulnerability
- Location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### What to expect:

- Acknowledgment of your report within 48 hours
- Regular updates on the progress
- Credit in the security advisory (if desired)

## Security Best Practices

When using this project:

1. **Keep dependencies updated** - Use Dependabot to stay current
2. **Use environment variables** - Never commit secrets to the repository
3. **Review GitHub Actions** - Understand what workflows are running
4. **Limit token permissions** - Use minimal required scopes
5. **Enable branch protection** - Require reviews and status checks

## Automated Security

This project uses:

- **Dependabot** - Automated dependency updates
- **GitHub Code Scanning** - Static analysis security testing
- **GitHub Secret Scanning** - Detect committed secrets

## Contact

For security concerns, please contact the project maintainers through GitHub Issues with the label `🔒 special:security`.
