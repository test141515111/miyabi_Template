# Miyabi Obsidian Cursor - Docker Image
FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./
COPY packages/dashboard-server/package.json packages/dashboard-server/package-lock.json ./packages/dashboard-server/

# Install dependencies
RUN npm ci --legacy-peer-deps

# Builder stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build TypeScript
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV DASHBOARD_PORT=3000

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 miyabi

# Copy built application
COPY --from=builder --chown=miyabi:nodejs /app/dist ./dist
COPY --from=builder --chown=miyabi:nodejs /app/packages/dashboard-server/dist ./packages/dashboard-server/dist
COPY --from=builder --chown=miyabi:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=miyabi:nodejs /app/packages/dashboard-server/node_modules ./packages/dashboard-server/node_modules
COPY --from=builder --chown=miyabi:nodejs /app/package.json ./

USER miyabi

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

CMD ["node", "packages/dashboard-server/dist/index.js"]
