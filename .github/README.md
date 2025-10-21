# GitHub Configuration

このディレクトリには、Miyabi自律開発フレームワークのGitHub統合設定が含まれています。

## 📁 構成

### Workflows（14個）
GitHub Actionsワークフローで完全自動化されています。

- **autonomous-agent.yml** - Issue作成時にAIエージェント起動
- **issue-opened.yml** - Issueの自動ラベリング
- **pr-opened.yml** - PRのレビュー自動化
- **state-machine.yml** - Issue/PRの状態遷移管理
- **label-sync.yml** - 55ラベル体系の同期
- **auto-add-to-project.yml** - GitHub Projectsへの自動追加
- **project-sync.yml** - プロジェクトボードの同期
- **update-project-status.yml** - ステータス自動更新
- **economic-circuit-breaker.yml** - コスト監視とサーキットブレーカー
- **webhook-handler.yml** - Webhookイベント処理
- **webhook-event-router.yml** - イベントルーティング
- **deploy-pages.yml** - GitHub Pagesデプロイ
- **weekly-report.yml** - 週次レポート生成
- **weekly-kpi-report.yml** - KPIレポート生成

### Issue Templates
- **bug_report.yml** - バグ報告テンプレート
- **feature_request.yml** - 機能リクエストテンプレート

### PR Template
- **PULL_REQUEST_TEMPLATE.md** - Pull Requestテンプレート

### Labels
- **labels.yml** - 55ラベル体系の定義（組織設計原則65に基づく）

### 依存関係管理
- **dependabot.yml** - 自動依存関係更新
- **CODEOWNERS** - コード所有権定義

## 🚀 使い方

### ラベルの同期
```bash
# label-sync workflowを手動実行
gh workflow run label-sync.yml
```

### エージェントの起動
新しいIssueを作成すると、autonomous-agent.ymlが自動的に起動します：
```bash
gh issue create --title "新機能: XXX" --body "詳細..."
```

### ワークフローの確認
```bash
# 全ワークフロー一覧
gh workflow list

# 実行履歴
gh run list
```

## 📊 自動化フロー

```
Issue作成
  ↓
自動ラベリング (issue-opened.yml)
  ↓
エージェント起動 (autonomous-agent.yml)
  ↓
タスク分解・実装 (6 Agents)
  ↓
PR作成 (pr-opened.yml)
  ↓
自動レビュー & マージ
  ↓
デプロイ (deploy-pages.yml)
```

## 🔧 カスタマイズ

ワークフローをカスタマイズする場合は、各YAMLファイルを編集してください。
変更後は`.github/workflows/`にプッシュすると自動的に反映されます。

## 📝 ドキュメント

詳細は以下を参照：
- [WORKFLOWS.md](../docs/WORKFLOWS.md) - ワークフローの詳細説明
- [ARCHITECTURE.md](../docs/ARCHITECTURE.md) - システムアーキテクチャ
- [API.md](../docs/API.md) - API リファレンス
