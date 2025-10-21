# アーキテクチャ

## システム概要

Obsidian Cursorは、Miyabi自律開発フレームワークを基盤とした、AIエージェント駆動の開発プラットフォームです。

## コンポーネント構成

```
┌─────────────────────────────────────────────────────────┐
│                    GitHub Platform                       │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐ │
│  │   Issues    │  │ Pull Requests│  │ GitHub Actions│ │
│  └─────────────┘  └──────────────┘  └───────────────┘ │
└─────────────────────────────────────────────────────────┘
                          │
                          ↓
┌─────────────────────────────────────────────────────────┐
│                  Miyabi Orchestration                    │
│  ┌──────────────────────────────────────────────────┐  │
│  │          Coordinator Agent (DAG分解)              │  │
│  └──────────────────────────────────────────────────┘  │
│         │         │         │         │         │       │
│         ↓         ↓         ↓         ↓         ↓       │
│   ┌────────┐┌────────┐┌────────┐┌────────┐┌────────┐  │
│   │CodeGen ││ Review ││ Issue  ││   PR   ││ Deploy │  │
│   │ Agent  ││ Agent  ││ Agent  ││ Agent  ││ Agent  │  │
│   └────────┘└────────┘└────────┘└────────┘└────────┘  │
└─────────────────────────────────────────────────────────┘
                          │
                          ↓
┌─────────────────────────────────────────────────────────┐
│                  Application Layer                       │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐ │
│  │ TypeScript  │  │   Dashboard  │  │     Docs      │ │
│  │   Source    │  │    Server    │  │   Generator   │ │
│  └─────────────┘  └──────────────┘  └───────────────┘ │
└─────────────────────────────────────────────────────────┘
```

## エージェントアーキテクチャ

### Coordinator Agent
- **役割**: タスク統括・DAG分解
- **入力**: GitHub Issue
- **処理**:
  - Issue分析
  - サブタスク分解
  - 依存関係グラフ作成
  - Agent割当
- **出力**: タスクDAG、Agent割り当てリスト

### CodeGen Agent
- **役割**: AI駆動コード生成
- **入力**: タスク仕様
- **処理**:
  - Claude Sonnet 4によるコード生成
  - テストコード自動生成
  - ドキュメント生成
- **出力**: 実装コード、テスト、ドキュメント

### Review Agent
- **役割**: コード品質判定
- **入力**: 生成されたコード
- **処理**:
  - 静的解析（ESLint、TypeScript）
  - セキュリティスキャン
  - 複雑度計測
  - 品質スコアリング（80点基準）
- **出力**: レビュー結果、品質スコア

### Issue Agent
- **役割**: Issue分析・ラベリング
- **入力**: GitHub Issue
- **処理**:
  - 組織設計原則65ラベル体系による分類
  - 優先度判定
  - フェーズ割当
- **出力**: ラベル付きIssue

### PR Agent
- **役割**: Pull Request自動化
- **入力**: レビュー済みコード
- **処理**:
  - Draft PR作成
  - Conventional Commits適用
  - 変更サマリー生成
- **出力**: Pull Request

### Deploy Agent
- **役割**: CI/CDデプロイ
- **入力**: マージされたPR
- **処理**:
  - ビルド実行
  - テスト実行
  - デプロイ（Firebase/Vercel）
  - ヘルスチェック
  - 自動Rollback
- **出力**: デプロイ結果

## データフロー

```
Issue作成
  ↓
Issue Agent（ラベリング）
  ↓
Coordinator Agent（タスク分解）
  ↓
CodeGen Agent（コード生成）
  ↓
Review Agent（品質チェック）
  ↓
PR Agent（PR作成）
  ↓
人間レビュー & 承認
  ↓
Deploy Agent（デプロイ）
  ↓
本番環境
```

## 技術スタック

| レイヤー | 技術 |
|---------|------|
| **AI Model** | Claude Sonnet 4 |
| **Runtime** | Node.js 22+ |
| **Language** | TypeScript 5+ |
| **Framework** | Miyabi 0.15+ |
| **CI/CD** | GitHub Actions |
| **Monitoring** | Express + WebSocket |
| **Testing** | Jest |
| **Linting** | ESLint + Prettier |

## スケーラビリティ

- **並行処理**: CoordinatorによるDAGベース並行実行
- **リソース管理**: Economic Circuit Breakerによるコスト制御
- **負荷分散**: GitHub Actions Matrixによる並列実行

## セキュリティ

- **認証**: GitHub Token（環境変数）
- **権限**: 最小権限原則（repo, workflow）
- **スキャン**: Dependabot、CodeQL、Secret Scanning
- **監査**: 全操作をGitHub Actionsログに記録
