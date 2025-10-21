# GitHub Actionsワークフロー

## 概要

Obsidian Cursorは14のGitHub Actionsワークフローで完全自動化されています。

## ワークフロー一覧

### 1. autonomous-agent.yml
**トリガー**: Issue作成時
**説明**: 自律型エージェントを起動してIssueを処理

```yaml
on:
  issues:
    types: [opened, labeled]
```

**処理フロー**:
1. Issue分析
2. Coordinator Agentによるタスク分解
3. 各Agentへタスク割当
4. 実行結果をIssueにコメント

### 2. issue-opened.yml
**トリガー**: Issue作成時
**説明**: 自動ラベリングとプロジェクトボード追加

### 3. pr-opened.yml
**トリガー**: PR作成時
**説明**: Review Agent起動とチェック実行

### 4. state-machine.yml
**トリガー**: ラベル変更時
**説明**: Issue/PRの状態遷移管理

```
pending → analyzing → implementing → reviewing → done
```

### 5. label-sync.yml
**トリガー**: 手動またはスケジュール
**説明**: 55ラベルの同期と更新

### 6. auto-add-to-project.yml
**トリガー**: Issue/PR作成時
**説明**: GitHub Projects V2への自動追加

### 7. project-sync.yml
**トリガー**: Issue/PR更新時
**説明**: プロジェクトボードのフィールド同期

### 8. update-project-status.yml
**トリガー**: ラベル変更時
**説明**: プロジェクトボードのステータス更新

### 9. economic-circuit-breaker.yml
**トリガー**: スケジュール（1時間毎）
**説明**: コスト監視とサーキットブレーカー

**機能**:
- API使用量監視
- 月次予算チェック
- 閾値超過時の自動停止
- Slack/Discord通知

### 10. webhook-handler.yml
**トリガー**: Repository webhooks
**説明**: 外部イベントハンドリング

### 11. webhook-event-router.yml
**トリガー**: Webhook経由
**説明**: イベントルーティング

### 12. deploy-pages.yml
**トリガー**: mainブランチへのプッシュ
**説明**: GitHub Pagesへのドキュメントデプロイ

### 13. weekly-report.yml
**トリガー**: スケジュール（週次）
**説明**: 週次アクティビティレポート生成

### 14. weekly-kpi-report.yml
**トリガー**: スケジュール（週次）
**説明**: KPIレポート生成と通知

## ワークフローの連携

```
Issue作成
  ↓
issue-opened.yml (ラベリング)
  ↓
autonomous-agent.yml (Agent起動)
  ↓
state-machine.yml (状態遷移)
  ↓
update-project-status.yml (ボード更新)
```

## 環境変数

必要な環境変数（GitHub Secrets）:

- `GITHUB_TOKEN`: 自動提供
- `SLACK_WEBHOOK_URL`: Slack通知（オプション）
- `DISCORD_WEBHOOK_URL`: Discord通知（オプション）

## カスタマイズ

ワークフローは`.github/workflows/`で管理されています。
必要に応じてトリガーやジョブを追加・変更できます。

## トラブルシューティング

### ワークフローが実行されない
- リポジトリ設定でActionsが有効か確認
- トリガー条件を確認
- ワークフロー権限を確認

### Agent実行失敗
- `GITHUB_TOKEN`の権限を確認
- ログで詳細エラーを確認
- Economic Circuit Breakerの状態を確認
