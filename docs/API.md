# API リファレンス

## Dashboard Server API

### Base URL
```
http://localhost:3000
```

### Endpoints

#### Health Check
```
GET /health
```

**Response**:
```json
{
  "status": "ok",
  "timestamp": "2025-01-11T12:00:00.000Z"
}
```

#### プロジェクトステータス
```
GET /api/status
```

**Response**:
```json
{
  "project": "Obsidian_Cursor",
  "agents": {
    "coordinator": "idle",
    "codegen": "idle",
    "review": "idle",
    "issue": "idle",
    "pr": "idle",
    "deploy": "idle"
  },
  "issues": {
    "total": 0,
    "open": 0
  },
  "prs": {
    "total": 0,
    "open": 0
  }
}
```

### WebSocket API

#### 接続
```javascript
const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
  console.log('Connected to dashboard');
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Received:', data);
};
```

#### イベント

**agent_status**
```json
{
  "type": "agent_status",
  "agent": "codegen",
  "status": "running",
  "progress": 50
}
```

**task_complete**
```json
{
  "type": "task_complete",
  "taskId": "123",
  "result": "success",
  "output": "..."
}
```

## Miyabi CLI

### コマンド

#### status
プロジェクトステータス確認
```bash
npx miyabi status [--json]
```

#### agent run
エージェント実行
```bash
npx miyabi agent run <agent-name>
```

**例**:
```bash
npx miyabi agent run coordinator
npx miyabi agent run codegen
```

#### auto
全自動モード（Water Spider Agent）
```bash
npx miyabi auto [options]
```

**Options**:
- `-i, --interval <seconds>`: 監視間隔（デフォルト: 10）
- `-m, --max-duration <minutes>`: 最大実行時間（デフォルト: 60）
- `-c, --concurrency <number>`: 並行実行数（デフォルト: 1）
- `--scan-todos`: TODOコメント監視
- `--dry-run`: シミュレーション

#### todos
TODOコメント検出・Issue化
```bash
npx miyabi todos [options]
```

**Options**:
- `-p, --path <path>`: スキャン対象（デフォルト: .）
- `--create-issues`: Issue自動作成
- `--auto-execute`: Agent自動実行
- `--dry-run`: シミュレーション

#### doctor
システムヘルスチェック
```bash
npx miyabi doctor [--json]
```

## GitHub API統合

### Issue作成
```bash
gh issue create \
  --title "タイトル" \
  --body "説明" \
  --label "type:feature"
```

### PR作成
```bash
gh pr create \
  --title "タイトル" \
  --body "説明" \
  --draft
```

## 型定義

### Agent Status
```typescript
interface AgentStatus {
  name: string;
  enabled: boolean;
  status: 'idle' | 'running' | 'completed' | 'error';
}
```

### Task
```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  assignedAgent: string;
  status: string;
  dependencies: string[];
}
```

### Project Status
```typescript
interface ProjectStatus {
  repository: {
    owner: string;
    name: string;
    url: string;
  };
  issues: {
    total: number;
    byState: Record<string, number>;
  };
  pullRequests: any[];
  summary: {
    totalOpen: number;
    activeAgents: number;
    blocked: number;
  };
}
```
