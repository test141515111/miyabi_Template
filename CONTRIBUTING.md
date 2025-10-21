# Contributing to Obsidian Cursor

Obsidian Cursorへのコントリビュートありがとうございます！

## 🚀 はじめに

1. **リポジトリをフォーク**
2. **ローカルにクローン**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Obsidian_Cursor.git
   cd Obsidian_Cursor
   ```
3. **依存関係をインストール**
   ```bash
   npm install
   cd packages/dashboard-server && npm install
   ```

## 📝 開発ワークフロー

### Issue作成

新しい機能やバグ修正を始める前に、Issueを作成してください：

```bash
gh issue create --title "機能名" --body "説明"
```

または、GitHubのUIから[Issue templates](.github/ISSUE_TEMPLATE/)を使用してください。

### ブランチ作成

```bash
git checkout -b feature/your-feature-name
# または
git checkout -b fix/bug-description
```

### コミット規約

Conventional Commitsを使用してください：

```
feat: 新機能追加
fix: バグ修正
docs: ドキュメント変更
style: コードフォーマット
refactor: リファクタリング
test: テスト追加・修正
chore: ビルド設定等
```

例：
```bash
git commit -m "feat: Add user authentication feature"
git commit -m "fix: Resolve navigation bug on mobile"
```

### プルリクエスト

1. 変更をプッシュ
2. GitHubでPRを作成
3. テンプレートに従って記入
4. レビューを待つ

## 🤖 Miyabi Agent統合

このプロジェクトはMiyabi自律開発フレームワークを使用しています：

```bash
# Agentにタスクを委任
npx miyabi agent run coordinator

# 自動モード
npx miyabi auto

# ステータス確認
npx miyabi status
```

## 🧪 テスト

```bash
npm test
```

## 📊 コード品質

```bash
# Lint
npm run lint

# Format
npm run format
```

## 🎯 ラベル体系

Issueには以下のラベルが自動的に付与されます：

- **Type**: `type:bug`, `type:feature`, `type:docs`, etc.
- **Priority**: `priority:P0-Critical` ~ `priority:P3-Low`
- **State**: `state:pending`, `state:implementing`, etc.
- **Phase**: `phase:planning`, `phase:development`, etc.
- **Agent**: `agent:coordinator`, `agent:codegen`, etc.

## 💬 コミュニケーション

- **Discussions**: 一般的な質問や議論
- **Issues**: バグ報告や機能要望
- **Pull Requests**: コードレビュー

## 📜 ライセンス

このプロジェクトへのコントリビューションは[MIT License](LICENSE)の下で公開されます。

---

🤖 Powered by [Miyabi](https://github.com/miyabi-org/miyabi)
