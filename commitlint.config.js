module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 新機能
        'fix',      // バグ修正
        'docs',     // ドキュメント
        'style',    // フォーマット
        'refactor', // リファクタリング
        'test',     // テスト
        'chore',    // ビルド・設定
        'perf',     // パフォーマンス改善
        'ci',       // CI/CD
        'revert',   // リバート
      ],
    ],
  },
};
