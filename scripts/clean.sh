#!/bin/bash

echo "🧹 クリーンアップを実行中..."

# Remove node_modules
echo "📦 node_modules を削除中..."
rm -rf node_modules
rm -rf packages/*/node_modules

# Remove build artifacts
echo "🏗️  ビルド成果物を削除中..."
rm -rf dist
rm -rf packages/*/dist
rm -rf build
rm -rf .next

# Remove lock files (optional)
read -p "lock files も削除しますか？ (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🔒 lock files を削除中..."
    rm -f package-lock.json
    rm -f yarn.lock
    rm -f pnpm-lock.yaml
    rm -f packages/*/package-lock.json
fi

echo "✅ クリーンアップ完了！"
echo ""
echo "再インストールするには:"
echo "  ./scripts/setup.sh"
