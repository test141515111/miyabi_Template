# 内省・振り返り - ReflectionAgent実行

**役割**: 過去のPermanent Notesを定期的に見直し、新たな洞察を引き出す

**思想**: 知識ネットワークの熟成 - 書いて終わりではなく、育てる

---

## ミッション

ReflectionAgentを呼び出し、以下を実行：

1. 過去のPermanent Notesを定期レビュー
2. 時間経過による新たな視点を発見
3. ノート間の新しいリンクを提案
4. 抽象度の進化を可視化

---

## 実行プロセス

### 1. レビュー種別選択

```
どのレビューを実行しますか？

1. 日次レビュー（5分） - 今日作成したノートの確認
2. 週次レビュー（30分） - 今週作成したノートの振り返り
3. 月次レビュー（2時間） - 全ノートの俯瞰
4. 四半期レビュー（半日） - テーマ別知識体系整理
5. カスタム - 特定ノートを指定

選択: [1-5]
```

### 2. レビュー対象の選定

ReflectionAgentが以下の基準で自動選定：

```typescript
interface ReviewCriteria {
  timeSinceLastReview: number;  // 最終レビューからの経過日数
  importance: 'high' | 'medium' | 'low';  // 重要度
  linkDensity: number;          // リンク密度（低い = 孤立）
  abstractionLevel: number;     // 抽象度（低い = 改善余地）
  usageFrequency: number;       // 参照頻度（高い = 重要）
}

function selectNotesForReview(type: ReviewType): Note[] {
  switch (type) {
    case 'daily':
      return getNotesCreatedToday();

    case 'weekly':
      return getNotesCreatedThisWeek();

    case 'monthly':
      return allNotes.filter(note => {
        const daysSinceReview = daysBetween(note.lastReviewedAt, now());
        return daysSinceReview >= 30 ||
               note.importance === 'high' ||
               note.linkDensity < 3;
      });

    case 'quarterly':
      return allNotes; // 全ノート対象

    default:
      return [];
  }
}
```

### 3. 内省的質問の生成

各ノートに対して自動生成：

```markdown
## 振り返り質問

### 理解の深化
- このノートを書いた時と今で、理解は変わったか？
- 新たに学んだことと、どう結びつくか？

### 抽象度の評価
- 現在の抽象度は適切か？
- さらに一段高い視点で見ると、何が言えるか？

### 転用の実績
- このノートの知識を実際に使ったか？
- 使った場合、どのような結果だったか？
- 使っていない場合、なぜか？

### リンクの拡張
- 最近書いたノートと、どう関連するか？
- 見落としている関連性はないか？

### 進化の方向性
- このノートをどう発展させるべきか？
- 分割すべきか？統合すべきか？
```

### 4. 洞察の抽出

AIによる分析：

```typescript
async function extractInsights(note: Note): Promise<Insight[]> {
  const context = `
    ノート作成日: ${note.createdAt}
    最終レビュー日: ${note.lastReviewedAt}
    タグ: ${note.tags.join(', ')}
    リンク数: ${note.links.length}

    内容:
    ${note.content}

    質問:
    - このノートから、今の時点で新たに学べることは何か？
    - 他のノートとの関連性で、見落としているものはないか？
    - 抽象度を一段高めると、何が言えるか？
  `;

  const response = await claudeAPI.complete(context);
  return parseInsights(response);
}
```

### 5. アクション提案

```markdown
## 推奨アクション

### すぐにできること
- [ ] [[関連ノートA]]とのリンクを追加
- [ ] タグ「#economics」を追加
- [ ] 転用事例を1つ追記

### 時間をかけて取り組むこと
- [ ] より抽象度の高いPermanent Noteに進化させる
- [ ] 図解（Mermaid）を追加
- [ ] 実践で検証し、結果を記録

### 派生ノートの作成
- [ ] 「[[新しいテーマ]]」として独立させる
- [ ] 「[[より具体的な事例]]」を追加
```

---

## 使用例

### 例1: 月次レビュー

```
/reflect

どのレビューを実行しますか？
> 3

月次レビューを実行します...
```

**出力**: `knowledge/reviews/2025-10-22_monthly.md`

```markdown
# 定期レビュー: 2025-10-22

## レビュー対象ノート

### 1. SCQA Framework

**最終レビュー**: 45日前
**重要度**: High
**リンク密度**: 低（3リンクのみ）
**抽象度**: 中

#### 振り返り質問

**理解の深化**
- このフレームワークを最近のプレゼンで使いましたか？
- 使った場合、効果はどうでしたか？

**新たな関連性**
最近作成した以下のノートと関連があります：
- [[コンテキストエンジニアリング]]: SとCの部分が「コンテキスト」に相当
- [[問題解決フレームワーク]]: QとAの部分が問題と解決策

#### 推奨アクション

**すぐにできること**
- [ ] [[コンテキストエンジニアリング]]とのリンクを追加
- [ ] [[問題解決フレームワーク]]とのリンクを追加
- [ ] タグ「#presentation」「#communication」を追加

**時間をかけて取り組むこと**
- [ ] 実際の使用事例を3つ追記
- [ ] Mermaid図でSCQAの流れを可視化

---

### 2. コンテキストエンジニアリング

**最終レビュー**: 32日前
**重要度**: High
**リンク密度**: 高（12リンク）
**抽象度**: 高

#### 新たな洞察

このノートは既に高品質ですが、以下の観点で拡張できます：

**抽象化の余地**
現在は「LLMへのコンテキスト提供」に焦点を当てていますが、
より抽象化すると「**情報の文脈化**」という普遍的な原理になります。

これは以下にも適用可能：
- 人間同士のコミュニケーション
- データ分析
- 教育（学習者の既存知識に接続）

#### 推奨アクション

**派生ノートの作成**
- [ ] [[情報の文脈化 - 普遍的原理]]として新規ノート作成
- [ ] [[教育におけるコンテキスト設計]]として応用事例を記録

---

### 3. 農耕民vs狩猟民

**最終レビュー**: 60日前
**重要度**: Medium
**リンク密度**: 中（5リンク）
**抽象度**: 中

#### 転用の実績確認

**質問**: この2ヶ月間、「農耕民」的アプローチを実践できましたか？

**振り返りのポイント**：
- Permanent Notesを継続的に書いたか？
- 短期的価値より、長期的再利用性を優先できたか？
- 知識ネットワークの成長を実感できたか？

#### 推奨アクション

**実践記録の追加**
- [ ] 過去2ヶ月の実践結果を記録
- [ ] 成功事例と失敗事例を分析
- [ ] 改善点を「Application」セクションに追記

---

## 総評

### ポジティブな傾向
- 全体的にリンク密度が向上（平均 4.2 → 6.8）
- 新規ノート作成ペースが安定（週3-4本）

### 改善が必要な領域
- 孤立ノートが3つ存在（要リンク追加）
- 転用実績の記録が少ない（実践とフィードバックの強化）

### 次のアクション
1. 今週中に孤立ノート3つにリンクを追加
2. 月次レビューで転用実績を振り返る習慣化
3. 四半期レビューで知識マップを可視化

---

**次回レビュー予定**: 2025-11-22
```

### 例2: カスタムレビュー（特定ノート）

```
/reflect

どのレビューを実行しますか？
> 5

レビューしたいノートのパスを指定してください：
> knowledge/permanent-notes/抽象化思考.md
```

**出力**: 指定ノートに対する詳細な振り返りレポート

---

## 高度な機能

### 1. 知識の進化トラッキング

```typescript
interface EvolutionHistory {
  noteId: string;
  snapshots: {
    date: string;
    abstractionLevel: number;
    linkCount: number;
    content: string;
  }[];
}

function visualizeEvolution(history: EvolutionHistory): string {
  // Mermaidで進化を可視化
  return `
    graph LR
    A[Initial] --> B[+Abstraction]
    B --> C[+Links]
    C --> D[+Applications]
  `;
}
```

### 2. 孤立ノートの検出

```typescript
function findIsolatedNotes(threshold: number = 2): Note[] {
  const allNotes = getAllPermanentNotes();
  return allNotes.filter(note =>
    note.links.length < threshold &&
    note.backlinks.length < threshold
  );
}
```

### 3. 抽象度の自動評価

```typescript
async function evaluateAbstractionLevel(note: Note): Promise<number> {
  // Claude APIで抽象度を0-10で評価
  const prompt = `
    以下のノートの抽象度を0-10で評価してください：
    0 = 極めて具体的（日時、人名など）
    10 = 極めて抽象的（普遍的原理）

    ${note.content}
  `;

  const response = await claudeAPI.complete(prompt);
  return parseInt(response);
}
```

### 4. 知識成長の可視化

```markdown
## 知識成長レポート

### 月次推移

\`\`\`mermaid
graph LR
    M1[9月<br/>ノート数: 28<br/>平均リンク: 4.2] --> M2[10月<br/>ノート数: 42<br/>平均リンク: 6.8]
    M2 --> M3[11月<br/>ノート数: ?<br/>平均リンク: ?]

    style M2 fill:#FFD700
\`\`\`

### カテゴリ別分布

\`\`\`mermaid
pie title ノートカテゴリ分布
    "知的生産" : 15
    "AI最適化" : 12
    "コミュニケーション" : 8
    "思考法" : 7
\`\`\`
```

---

## 定期レビューのスケジュール

### 日次レビュー（5分）
- 今日作成したノートの確認
- タグとリンクの整合性チェック

### 週次レビュー（30分）
- 今週作成したノートの振り返り
- 孤立ノートの発見と接続

### 月次レビュー（2時間）
- 全ノートの俯瞰
- 知識マップの可視化
- 抽象度の進化確認

### 四半期レビュー（半日）
- テーマ別の知識体系整理
- 大規模なリファクタリング
- 長期的な成長の確認

---

## メトリクス

### 知識成長指標
- **ノート総数**: 増加トレンド
- **平均リンク密度**: 目標 6+ links/note
- **平均抽象度**: 目標 7+/10
- **転用実績率**: 目標 50%+

### エンゲージメント指標
- **レビュー実施率**: 目標 90%+
- **推奨アクション実行率**: 目標 70%+

---

## 次のステップ

レビュー完了後、以下のコマンドと連携：

1. `/link-notes` - 提案されたリンクを追加
2. `/visualize` - 進化をMermaid図で可視化
3. `/abstract` - 抽象度をさらに高める
4. `/knowledge-map` - 全体の知識マップを確認

---

**実装**: Claude Code + ReflectionAgent
**依存**: ReflectionAgent (.claude/agents/reflection-agent.md)
**出力先**: knowledge/reviews/
