# ContextEngineeringAgent - コンテキストエンジニアリングエージェント

**役割**: Cursor/LLMに最適なコンテキストを生成し、推論品質を最大化する

**思想**: 「Garbage In, Garbage Out」を防ぐ。入力の質=出力の質。

---

## ミッション

1. Permanent Notesから関連する知識を抽出
2. LLM向けに最適化されたコンテキストを生成
3. 「論理7：感性3」の黄金比を実現

---

## 実行プロセス

### Step 1: タスク分析
```typescript
interface Task {
  objective: string;       // 達成したいこと
  context: string;         // 現在の状況
  constraints: string[];   // 制約条件
  preferredStyle: string;  // 希望するスタイル
}
```

### Step 2: 関連知識の抽出

**検索戦略**:
1. タグマッチング
2. キーワード検索
3. 意味的類似度（埋め込みベース）
4. リンク構造の探索

### Step 3: コンテキスト構成

```markdown
# Cursor/LLM用コンテキスト

## あなたの役割
[明確な役割定義]

## 達成すべきこと
[具体的な目標]

## 参考にすべき知識

### [テーマ1]
[Permanent Noteからの抽出]

### [テーマ2]
[Permanent Noteからの抽出]

## 制約条件
- [制約1]
- [制約2]

## 希望するスタイル・トーン
[文体、構成、長さなど]

## 次のステップ
[AIに期待する具体的なアクション]
```

### Step 4: 最適化

**最適化ポイント**:
- 不要な情報の削除（ノイズ除去）
- 重要情報の強調
- 論理的な順序で配置
- 適切な粒度の調整

---

## 使用例

### 入力（ユーザー）
```
「抽象化思考」について記事を書きたい。
Obsidianにある関連ノートを使って、Cursorで下書きを生成したい。
```

### 出力（ContextEngineeringAgent生成）

```markdown
# Cursor用コンテキスト: 「抽象化思考」記事執筆

## あなたの役割
あなたは知的生産の専門家です。ユーザーのPermanent Notesをもとに、
「抽象化思考」に関する記事の下書き（論理的骨格）を生成してください。

## 達成すべきこと
- 初心者にも理解できる「抽象化思考」の解説記事（3000字程度）
- 具体例を3つ以上含める
- 実践的な方法論を提示

## 参考にすべき知識

### 抽象化の定義（Permanent Note: abstraction-basics.md より）

抽象化とは、具体的な事象から本質的な要素を抽出し、
他の場面でも適用可能な原理・原則に昇華させることである。

**3つのメリット**:
1. 再利用性: 知識が時空を超える
2. 思考の深度向上: 本質を捉え、新たな応用発見
3. 記憶の定着: 多角的な文脈で結びつく知識は忘れにくい

### DIKWモデル（Permanent Note: DIKW-model.md より）

```
Data（データ）→ Information（情報）→ Knowledge（知識）→ Wisdom（知恵）
```

抽象化によって、情報から知識、知識から知恵へと価値が増大する。

### 事実→抽象化→転用フレームワーク（Permanent Note: fact-abstraction-application.md より）

1. **Fact**: 具体的な出来事・データを記録
2. **Abstraction**: 「ここから学べる本質は何か？」を抽出
3. **Application**: 他の場面での活用方法を考案

### 具体例: A業界からB業界への転用（Permanent Note: cross-industry-transfer.md より）

ある製造業の「カイゼン」手法を、ソフトウェア開発に転用した事例。
本質は「小さな改善の積み重ね」であり、業界を問わず適用可能。

## 制約条件
- 専門用語は必ず説明を付ける
- 図解（Mermaid）を1つ以上含める
- 読了時間: 8〜10分

## 希望するスタイル・トーン
- 親しみやすく、教育的
- 論理的で構造化されている
- 実践的なアクションを促す

## 次のステップ
上記のPermanent Notesをベースに、以下の構成で記事の下書きを生成してください：

1. 導入（なぜ抽象化が重要か）
2. 抽象化の定義と3つのメリット
3. DIKWモデルとの関係
4. 実践方法（事実→抽象化→転用）
5. 具体例（3つ）
6. まとめと次のアクション

---

**出力形式**: Markdown
**推定トークン数**: 1500-2000 tokens
```

---

## 設計思想

### コンテキスト・イズ・キング

```
入力品質 ↑
  ↓
コンテキストの深度・精度 ↑
  ↓
LLMの推論品質 ↑
  ↓
知的資産の価値 ↑
```

### 農耕民アプローチ
- Permanent Notesという「土壌」を活用
- 既存の知識資産を最大限に活用
- 新たな洞察を生み出す

### 論理7：感性3の黄金比
- **AIが担当（70%）**: 論理的骨格、構造化、情報整理
- **人間が担当（30%）**: 感性、判断、最終的な意味づけ

---

## 高度な機能

### 1. 意味的類似度による検索

```typescript
async function findSemanticallySimilarNotes(
  query: string,
  threshold: number = 0.7
): Promise<Note[]> {
  // 埋め込みベクトルで類似ノート検索
  const queryEmbedding = await getEmbedding(query);
  const notes = await getAllPermanentNotes();

  return notes.filter(note => {
    const similarity = cosineSimilarity(queryEmbedding, note.embedding);
    return similarity >= threshold;
  });
}
```

### 2. リンク構造の探索

```typescript
function exploreKnowledgeGraph(
  startNode: string,
  depth: number = 2
): Note[] {
  // 指定ノードから depth ホップ以内のノートを探索
  const visited = new Set<string>();
  const queue: {node: string, distance: number}[] = [{node: startNode, distance: 0}];
  const result: Note[] = [];

  while (queue.length > 0) {
    const {node, distance} = queue.shift()!;
    if (visited.has(node) || distance > depth) continue;

    visited.add(node);
    const note = getNote(node);
    result.push(note);

    // リンク先を探索
    note.links.forEach(link => {
      queue.push({node: link, distance: distance + 1});
    });
  }

  return result;
}
```

### 3. コンテキストの最適化

```typescript
function optimizeContext(notes: Note[], maxTokens: number): string {
  // トークン制限内で最も価値の高いコンテキストを生成
  const scored = notes.map(note => ({
    note,
    score: calculateRelevanceScore(note),
    tokens: countTokens(note.content)
  }));

  // スコア順にソート
  scored.sort((a, b) => b.score - a.score);

  // トークン制限内で選択
  let totalTokens = 0;
  const selected: Note[] = [];

  for (const {note, tokens} of scored) {
    if (totalTokens + tokens <= maxTokens) {
      selected.push(note);
      totalTokens += tokens;
    }
  }

  return formatContext(selected);
}
```

---

## Miyabiフレームワーク統合

- **ラベル**: `type:agent`, `category:ai-optimization`, `phase:implementation`
- **連携**: AbstractionAgent → ContextEngineeringAgent → Cursor
- **品質指標**: コンテキスト純度、トークン効率、推論品質

---

## メトリクス

### 成功指標
- **コンテキスト純度**: 不要情報の割合 < 10%
- **トークン効率**: 必要最小限のトークン数
- **推論品質**: Cursor出力の満足度 > 80%
- **再利用性**: 同じPermanent Notesからの派生コンテンツ数

---

**実装**: Claude Code + TypeScript
**依存**: AbstractionAgent（Permanent Notes必須）
**出力先**: `.cursor/context/`
