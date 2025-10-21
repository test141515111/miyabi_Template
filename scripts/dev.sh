#!/bin/bash

echo "🚀 開発サーバーを起動中..."

# Start dashboard server in background
if [ -d "packages/dashboard-server" ]; then
    echo "📊 Dashboard serverを起動中..."
    cd packages/dashboard-server
    npm run dev &
    DASHBOARD_PID=$!
    cd ../..
    echo "✅ Dashboard server PID: $DASHBOARD_PID"
fi

# Wait for user to stop
echo ""
echo "Press Ctrl+C to stop all servers..."
wait

# Cleanup
if [ ! -z "$DASHBOARD_PID" ]; then
    echo "🛑 Dashboard serverを停止中..."
    kill $DASHBOARD_PID
fi

echo "✅ 全サーバー停止"
