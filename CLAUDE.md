# Obsidian_Cursor - Claude Code Context

## プロジェクト概要

**Obsidian_Cursor** - Miyabiフレームワークで構築された自律型開発プロジェクト

このプロジェクトは識学理論(Shikigaku Theory)とAI Agentsを組み合わせた自律型開発環境で運用されています。

## ⚠️ 重要：保護対象ディレクトリ

**Obsidian_Reference/** ディレクトリは、**絶対に削除・変更してはいけません**。

このディレクトリには、note.comから収集した**28記事のMarkdownファイル**が保存されており、Obsidian×Cursor統合哲学の基礎となる重要な参考資料です。

### 履歴
- 2025-10-22 08:03 - コミット 1191807 で追加
- 2025-10-22 14:04 - コミット a38fbd3 で誤ってRevert（全削除）
- 2025-10-23 03:33 - 復元完了

### 再発防止
- **Gitでrevertやreset時は、このディレクトリを除外すること**
- 詳細は `Obsidian_Reference/README.md` を参照

## 🌸 Miyabi Framework

### 7つの自律エージェント

1. **CoordinatorAgent** - タスク統括・並列実行制御
   - DAG（Directed Acyclic Graph）ベースのタスク分解
   - Critical Path特定と並列実行最適化

2. **IssueAgent** - Issue分析・ラベル管理
   - 識学理論65ラベル体系による自動分類
   - タスク複雑度推定（小/中/大/特大）

3. **CodeGenAgent** - AI駆動コード生成
   - Claude Sonnet 4による高品質コード生成
   - TypeScript strict mode完全対応

4. **ReviewAgent** - コード品質判定
   - 静的解析・セキュリティスキャン
   - 品質スコアリング（100点満点、80点以上で合格）

5. **PRAgent** - Pull Request自動作成
   - Conventional Commits準拠
   - Draft PR自動生成

6. **DeploymentAgent** - CI/CDデプロイ自動化
   - 自動デプロイ・ヘルスチェック
   - 自動Rollback機能

7. **TestAgent** - テスト自動実行
   - テスト実行・カバレッジレポート
   - 80%+カバレッジ目標

## GitHub OS Integration

このプロジェクトは「GitHubをOSとして扱う」設計思想で構築されています:

### 自動化されたワークフロー

1. **Issue作成** → IssueAgentが自動ラベル分類
2. **CoordinatorAgent** → タスクをDAG分解、並列実行プラン作成
3. **CodeGenAgent** → コード実装、テスト生成
4. **ReviewAgent** → 品質チェック（80点以上で次へ）
5. **TestAgent** → テスト実行（カバレッジ確認）
6. **PRAgent** → Draft PR作成
7. **DeploymentAgent** → マージ後に自動デプロイ

**全工程が自律実行、人間の介入は最小限。**

## ラベル体系（識学理論準拠）

### 10カテゴリー、53ラベル

- **type:** bug, feature, refactor, docs, test, chore, security
- **priority:** P0-Critical, P1-High, P2-Medium, P3-Low
- **state:** pending, analyzing, implementing, reviewing, testing, deploying, done
- **agent:** codegen, review, deployment, test, coordinator, issue, pr
- **complexity:** small, medium, large, xlarge
- **phase:** planning, design, implementation, testing, deployment
- **impact:** breaking, major, minor, patch
- **category:** frontend, backend, infra, dx, security
- **effort:** 1h, 4h, 1d, 3d, 1w, 2w
- **blocked:** waiting-review, waiting-deployment, waiting-feedback

## 開発ガイドライン

### TypeScript設定

```json
{
  "compilerOptions": {
    "strict": true,
    "module": "ESNext",
    "target": "ES2022"
  }
}
```

### セキュリティ

- **機密情報は環境変数で管理**: `GITHUB_TOKEN`, `ANTHROPIC_API_KEY`
- **.env を .gitignore に含める**
- **Webhook検証**: HMAC-SHA256署名検証

### テスト

```bash
npm test                    # 全テスト実行
npm run test:watch          # Watch mode
npm run test:coverage       # カバレッジレポート
```

目標: 80%+ カバレッジ

## 使用方法

### Issue作成（Claude Code推奨）

```bash
# Claude Code から直接実行
gh issue create --title "機能追加: ユーザー認証" --body "JWT認証を実装"
```

または Claude Code のスラッシュコマンド:

```
/create-issue
```

### 状態確認

```bash
npx miyabi status          # 現在の状態
npx miyabi status --watch  # リアルタイム監視
```

### Agent実行

```bash
/agent-run                 # Claude Code から実行
```

## プロジェクト構造

```
Obsidian_Cursor/
├── .claude/               # Claude Code設定
│   ├── agents/           # Agent定義
│   ├── commands/         # カスタムコマンド
│   └── settings.json     # Claude設定
├── .github/
│   └── workflows/        # 26+ GitHub Actions
├── src/                  # ソースコード
├── tests/                # テストコード
├── CLAUDE.md             # このファイル
└── package.json
```

## カスタムスラッシュコマンド

Claude Code で以下のコマンドが使用可能:

- `/test` - プロジェクト全体のテストを実行
- `/generate-docs` - コードからドキュメント自動生成
- `/create-issue` - Agent実行用Issueを対話的に作成
- `/deploy` - デプロイ実行
- `/verify` - システム動作確認（環境・コンパイル・テスト）
- `/security-scan` - セキュリティ脆弱性スキャン実行
- `/agent-run` - Autonomous Agent実行（Issue自動処理パイプライン）

## 識学理論（Shikigaku Theory）5原則

1. **責任の明確化** - 各AgentがIssueに対する責任を負う
2. **権限の委譲** - Agentは自律的に判断・実行可能
3. **階層の設計** - CoordinatorAgent → 各専門Agent
4. **結果の評価** - 品質スコア、カバレッジ、実行時間で評価
5. **曖昧性の排除** - DAGによる依存関係明示、状態ラベルで進捗可視化

## 環境変数

```bash
# GitHub Personal Access Token（必須）
GITHUB_TOKEN=ghp_xxxxx

# Anthropic API Key（必須 - Agent実行時）
ANTHROPIC_API_KEY=sk-ant-xxxxx
```

## サポート

- **Framework**: [Miyabi](https://github.com/ShunsukeHayashi/Autonomous-Operations)
- **Documentation**: README.md
- **Issues**: GitHub Issues で管理

## ドキュメントサイト構築（GitHub Pages）

### 概要

GitHub×Cursor知的生産システムの理念と実践を解説する、3つのHTMLドキュメントサイトを構築・公開しました。

### 公開サイト

すべてのサイトに統一されたグローバルナビゲーションを実装し、サイト間のシームレスな移動を実現しています。

1. **知的未来** - GitHub×Cursorで実現する知的生産の未来像
   - URL: https://test141515111.github.io/miyabi_Template/github-cursor-future-vision.html
   - 内容: Day 1からYear 1までのタイムライン形式で知的生産の変革を解説
   - 特徴: Discussionsセットアップガイド、段階的な実装ステップ

2. **完全ガイド** - Obsidian → GitHub機能マッピング
   - URL: https://test141515111.github.io/miyabi_Template/github-cursor-proposal.html
   - 内容: Obsidianの各機能をGitHubでどう実現するかの技術的詳細
   - 特徴: 具体的なワークフロー、自動化設定例

3. **28記事まとめ** - 知的生産の実践的テクニック
   - URL: https://test141515111.github.io/miyabi_Template/28-articles-summary.html
   - 内容: note.comから収集した28記事のエッセンスを体系化
   - 特徴: カテゴリ別整理、実践的なTips

### 技術的実装

#### グローバルナビゲーション

すべてのHTMLファイルに共通のナビゲーションバーを実装：

```css
.global-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);  /* フロストグラス効果 */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 15px 0;
}

.global-nav-link.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}
```

**特徴:**
- 固定ヘッダー（`position: fixed`）で常時アクセス可能
- 背景ぼかし効果（`backdrop-filter`）でモダンなUI
- アクティブページは紫のグラデーション表示
- レスポンシブデザイン対応

#### GitHub Pagesデプロイ

ワークフロー: `.github/workflows/deploy-pages.yml`

```yaml
on:
  push:
    branches:
      - main
    paths:
      - 'docs/**'
      - '.github/workflows/deploy-pages.yml'
  schedule:
    - cron: '0 */6 * * *'  # 6時間ごとに自動更新
```

**デプロイフロー:**
1. `docs/` ディレクトリの変更を検知
2. ダッシュボードデータを自動生成
3. GitHub Pagesにアーティファクトをアップロード
4. 自動的に公開URL更新

### トラブルシューティング記録

#### 問題1: 古いコミットがデプロイされる

**症状:** グローバルナビゲーションを追加したのに、サイトに反映されない

**原因:**
- ワークフローは`docs/**`の変更でのみトリガー
- 最新コミット（ワークフロー削除）では`docs/`が変更されていない
- そのため古いコミット（8a750e9）が引き続きデプロイされていた

**解決策:**
```bash
# トリガー用の空ファイルを作成
touch docs/.deploy-trigger
git add docs/.deploy-trigger
git commit -m "chore: Trigger GitHub Pages deployment"
git push
```

#### 問題2: カスタムドメイン未動作

**症状:** `https://vibe-codder.com/` の個別HTMLファイルが404

**現状:**
- カスタムドメインのDNS設定に問題あり
- 標準のGitHub Pages URL（`test141515111.github.io`）は正常動作

**対応:** 標準URLで運用継続（カスタムドメインは今後の課題）

### GitHub Actions自動化

ユーザーから共有されたスクリーンショットにあった自動化システムも実装済み：

**weekly-review.yml** - 週次ナレッジレビュー
- 毎週日曜 9:00 JST に自動実行
- 今週のIssueを集計
- Discussionに投稿（SlackIC通知付き）

**効果:**
- ✅ 新しいIssue作成時にテンプレートが自動展開
- ✅ 空欄を埋めるだけで高品質なメモが完成
- ✅ フォーマットが統一され、後から見返しやすい

### デプロイ検証

最終確認（2025-10-23実施）:

```bash
# 3つすべてのサイトが正常にアクセス可能
✅ github-cursor-future-vision.html
✅ github-cursor-proposal.html
✅ 28-articles-summary.html

# グローバルナビゲーションの動作確認
✅ ロゴクリックでトップページ遷移
✅ 各リンクで対応ページ遷移
✅ アクティブ状態の正しい表示
✅ レスポンシブレイアウト動作
```

### 今後の展開

- [ ] カスタムドメインのDNS設定修正
- [ ] ダッシュボードデータの可視化強化
- [ ] 検索機能の追加
- [ ] ダークモード対応
- [ ] OGP画像の最適化

---

🌸 **Miyabi** - Beauty in Autonomous Development

*このファイルは Claude Code が自動的に参照します。プロジェクトの変更に応じて更新してください。*
