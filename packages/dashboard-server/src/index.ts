import express from 'express';
import cors from 'cors';
import { WebSocketServer } from 'ws';
import http from 'http';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const PORT = process.env.DASHBOARD_PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Dashboard API
app.get('/api/status', (req, res) => {
  res.json({
    project: 'Obsidian_Cursor',
    agents: {
      coordinator: 'idle',
      codegen: 'idle',
      review: 'idle',
      issue: 'idle',
      pr: 'idle',
      deploy: 'idle'
    },
    issues: { total: 0, open: 0 },
    prs: { total: 0, open: 0 }
  });
});

// WebSocket connection
wss.on('connection', (ws) => {
  console.log('Dashboard client connected');

  ws.on('message', (message) => {
    console.log('Received:', message.toString());
  });

  ws.on('close', () => {
    console.log('Dashboard client disconnected');
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`🎨 Dashboard server running on http://localhost:${PORT}`);
  console.log(`📊 WebSocket server ready`);
});
