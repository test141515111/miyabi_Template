# Obsidian Cursor 🌸

[![Miyabi](https://img.shields.io/badge/Powered%20by-Miyabi-purple)](https://github.com/miyabi-org/miyabi)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/test141515111/Obsidian_Cursor)](https://github.com/test141515111/Obsidian_Cursor/issues)

Obsidian Cursorは、Miyabi自律開発フレームワークを統合したプロジェクトです。AIエージェントによる自動化開発ワークフローを提供します。

## ✨ 特徴

- 🤖 **6つのAIエージェント** - Coordinator, CodeGen, Review, Issue, PR, Deploy
- 📝 **自動化パイプライン** - Issue → コード生成 → レビュー → PR → デプロイ
- 🏷️ **55+のスマートラベル** - 組織設計原則65ラベル体系
- 🔄 **14のGitHub Actionsワークフロー** - 完全自動化CI/CD
- 📊 **リアルタイム監視** - プロジェクト状態のダッシュボード
- 💰 **コスト制御** - Economic Circuit Breaker搭載

## 🚀 クイックスタート

### セットアップ

```bash
# リポジトリをクローン
git clone https://github.com/test141515111/Obsidian_Cursor.git
cd Obsidian_Cursor

# セットアップスクリプトを実行
./scripts/setup.sh

# または手動でインストール
npm install
cd packages/dashboard-server && npm install
```

### 環境変数の設定

```bash
# .env.exampleをコピー
cp .env.example .env

# GitHubトークンを設定
export GITHUB_TOKEN=your_github_token_here
```

### 使い方

```bash
# プロジェクトステータス確認
npm run miyabi:status

# エージェント実行
npm run miyabi:agent

# 全自動モード（Water Spider Agent）
npm run miyabi:auto

# TODO検出 & Issue化
npm run miyabi:todos

# システムヘルスチェック
npm run miyabi:doctor

# ダッシュボード起動
cd packages/dashboard-server && npm run dev
```

## 🤖 AIエージェント

| エージェント | 役割 | 責任範囲 |
|------------|------|---------|
| **Coordinator** | タスク統括・DAG分解 | Issue分解、並行実行制御、Agent割当 |
| **CodeGen** | AI駆動コード生成 | TypeScript生成、テスト自動生成 |
| **Review** | コード品質判定 | 静的解析、セキュリティスキャン (80点基準) |
| **Issue** | Issue分析・ラベリング | 組織設計原則65ラベル体系、自動分類 |
| **PR** | Pull Request自動化 | Draft PR作成、Conventional Commits |
| **Deploy** | CI/CDデプロイ | Firebase Deploy、ヘルスチェック、Rollback |

## 📊 プロジェクト構造

```
Obsidian_Cursor/
├── .github/                  # GitHub設定
│   ├── workflows/           # 14 GitHub Actions
│   └── ISSUE_TEMPLATE/      # Issue/PRテンプレート
├── .claude/                  # Claude Code設定
│   ├── agents/              # 6 Agent定義
│   ├── commands/            # 12 スラッシュコマンド
│   └── mcp-servers/         # MCPサーバー
├── packages/
│   └── dashboard-server/    # 監視ダッシュボード
├── scripts/                  # ユーティリティスクリプト
├── src/                      # ソースコード
│   ├── agents/
│   ├── commands/
│   ├── utils/
│   └── types/
├── docs/                     # ドキュメント
├── tests/                    # テスト
├── package.json             # プロジェクト設定
├── tsconfig.json            # TypeScript設定
├── miyabi.config.json       # Miyabi設定
└── README.md                # このファイル
```

## 🔄 開発ワークフロー

### 1. Issue作成

```bash
gh issue create --title "新機能: ユーザー認証" --body "OAuth2.0による認証機能を実装"
```

### 2. 自動処理

- ✅ Issueが自動でラベル付け
- ✅ CoordinatorAgentがタスク分解
- ✅ CodeGenAgentがコード生成
- ✅ ReviewAgentが品質チェック
- ✅ PRAgentがPull Request作成
- ✅ DeployAgentがデプロイ実行

### 3. 承認 & マージ

人間がレビュー → 承認 → 自動マージ → 自動デプロイ

## 📚 ドキュメント

- [アーキテクチャ](docs/ARCHITECTURE.md)
- [エージェントシステム](docs/AGENTS.md)
- [ワークフロー](docs/WORKFLOWS.md)
- [API リファレンス](docs/API.md)
- [コントリビューション](CONTRIBUTING.md)

## 🛠️ 技術スタック

- **Runtime**: Node.js 22+
- **Language**: TypeScript 5+
- **Framework**: Miyabi 0.15+
- **CI/CD**: GitHub Actions
- **Dashboard**: Express + WebSocket
- **Code Quality**: ESLint + Prettier

## 🎯 GitHubラベル体系

- **Type**: `type:bug`, `type:feature`, `type:docs`, `type:refactor`, `type:test`
- **Priority**: `priority:P0-Critical` ~ `priority:P3-Low`
- **State**: `state:pending`, `state:analyzing`, `state:implementing`, `state:reviewing`, `state:done`, `state:blocked`, `state:paused`
- **Phase**: `phase:planning`, `phase:design`, `phase:development`, `phase:review`, `phase:deployment`
- **Agent**: `agent:coordinator`, `agent:codegen`, `agent:review`, `agent:issue`, `agent:pr`, `agent:deploy`
- **Special**: `special:security`, `special:performance`, `special:i18n`, `special:accessibility`

## 🤝 コントリビューション

コントリビューションを歓迎します！詳細は[CONTRIBUTING.md](CONTRIBUTING.md)をご覧ください。

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'feat: Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Requestを作成

## 📝 ライセンス

このプロジェクトは[MIT License](LICENSE)の下で公開されています。

## 🙏 謝辞

- [Miyabi](https://github.com/miyabi-org/miyabi) - 自律開発フレームワーク
- [Claude Code](https://claude.ai) - AIアシスタント
- すべてのコントリビューター

---

🤖 Powered by [Miyabi](https://github.com/miyabi-org/miyabi) | ⚡ Built with TypeScript
