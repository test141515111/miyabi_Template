#!/bin/bash

echo "🌸 Obsidian Cursor セットアップスクリプト"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.jsがインストールされていません"
    exit 1
fi
echo "✅ Node.js: $(node --version)"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npmがインストールされていません"
    exit 1
fi
echo "✅ npm: $(npm --version)"

# Check Git
if ! command -v git &> /dev/null; then
    echo "❌ Gitがインストールされていません"
    exit 1
fi
echo "✅ Git: $(git --version)"

# Check GitHub CLI
if ! command -v gh &> /dev/null; then
    echo "⚠️  GitHub CLIがインストールされていません（推奨）"
else
    echo "✅ GitHub CLI: $(gh --version | head -1)"
fi

echo ""
echo "📦 依存関係をインストール中..."
npm install

if [ -d "packages/dashboard-server" ]; then
    echo "📦 Dashboard serverの依存関係をインストール中..."
    cd packages/dashboard-server && npm install && cd ../..
fi

echo ""
echo "✅ セットアップ完了！"
echo ""
echo "次のコマンドを試してください："
echo "  npm run miyabi:status    # ステータス確認"
echo "  npm run miyabi:agent     # エージェント実行"
echo "  npm run miyabi:auto      # 全自動モード"
