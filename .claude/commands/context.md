# Cursorコンテキスト準備 - ContextEngineeringAgent実行

**役割**: Permanent Notesから最適なコンテキストを抽出し、Cursor/LLMの推論品質を最大化

---

## ミッション

ContextEngineeringAgentを呼び出し、タスクに最適化されたコンテキストを生成します。

**核心原則**: Garbage In, Garbage Out → 入力品質 = 出力品質

---

## 実行プロセス

### 1. タスク分析

ユーザーにタスク内容を質問：

```
何をしたいですか？（例: 記事執筆、コード生成、問題解決）
> [タスク内容]

具体的な目標を教えてください：
> [達成したいこと]

制約条件はありますか？（任意）
> [制約条件]

希望するスタイル・トーンは？（任意）
> [スタイル]
```

### 2. 関連知識の抽出

ContextEngineeringAgentが4つの戦略で関連Permanent Notesを検索：

#### A. タグマッチング

```typescript
function findByTags(taskTags: string[]): Note[] {
  return allNotes.filter(note =>
    note.tags.some(tag => taskTags.includes(tag))
  );
}
```

#### B. キーワード検索

```typescript
function findByKeywords(taskDescription: string): Note[] {
  const keywords = extractKeywords(taskDescription);
  return allNotes.filter(note =>
    keywords.some(kw => note.content.includes(kw))
  );
}
```

#### C. 意味的類似度（埋め込みベース）

```typescript
async function findBySemantic(taskDescription: string): Promise<Note[]> {
  const taskEmbedding = await getEmbedding(taskDescription);
  const similarities = await Promise.all(
    allNotes.map(async note => ({
      note,
      similarity: cosineSimilarity(taskEmbedding, note.embedding)
    }))
  );

  return similarities
    .filter(s => s.similarity >= 0.7)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 10);
}
```

#### D. リンク構造の探索

```typescript
function exploreKnowledgeGraph(
  startNodes: string[],
  depth: number = 2
): Note[] {
  const visited = new Set<string>();
  const queue: {node: string, distance: number}[] =
    startNodes.map(n => ({node: n, distance: 0}));
  const result: Note[] = [];

  while (queue.length > 0) {
    const {node, distance} = queue.shift()!;
    if (visited.has(node) || distance > depth) continue;

    visited.add(node);
    const note = getNote(node);
    result.push(note);

    note.links.forEach(link => {
      queue.push({node: link, distance: distance + 1});
    });
  }

  return result;
}
```

### 3. コンテキスト構成

抽出したノートを以下の構造で整理：

```markdown
# Cursor/LLM用コンテキスト: [タスク名]

## あなたの役割
[明確な役割定義]

## 達成すべきこと
[具体的な目標]

## 参考にすべき知識

### [テーマ1]
[Permanent Noteからの抽出内容]

**適用のポイント**:
- [ポイント1]
- [ポイント2]

---

### [テーマ2]
[Permanent Noteからの抽出内容]

**適用のポイント**:
- [ポイント1]
- [ポイント2]

---

### [テーマ3]
[Permanent Noteからの抽出内容]

（必要に応じて続く）

---

## 制約条件
- [制約1]
- [制約2]

## 希望するスタイル・トーン
[文体、構成、長さなど]

## 次のステップ
[AIに期待する具体的なアクション]

---

**コンテキスト品質指標**:
- 関連ノート数: 8件
- コンテキスト純度: 92%（不要情報 < 10%）
- トークン数: 1,850 tokens
- 意味的一貫性: 高
```

### 4. 最適化

以下の観点でコンテキストを最適化：

```typescript
function optimizeContext(notes: Note[], maxTokens: number): string {
  // 1. 関連度スコアリング
  const scored = notes.map(note => ({
    note,
    score: calculateRelevanceScore(note),
    tokens: countTokens(note.content)
  }));

  // 2. スコア順にソート
  scored.sort((a, b) => b.score - a.score);

  // 3. トークン制限内で選択
  let totalTokens = 0;
  const selected: Note[] = [];

  for (const {note, tokens} of scored) {
    if (totalTokens + tokens <= maxTokens) {
      selected.push(note);
      totalTokens += tokens;
    }
  }

  // 4. 不要情報の削除
  const cleaned = selected.map(note => removeNoise(note));

  // 5. 論理的な順序で配置
  const ordered = orderByLogic(cleaned);

  // 6. 適切な粒度に調整
  return formatContext(ordered);
}
```

### 5. ファイル保存

生成したコンテキストを保存：
- パス: `.cursor/context/[タスク名]_context.md`
- Cursorの@機能で参照可能

---

## 使用例

### 例1: 記事執筆

```
/context

何をしたいですか？
> 「抽象化思考」について記事を書きたい

具体的な目標を教えてください：
> 初心者にも理解できる解説記事（3000字程度）
> 具体例を3つ以上含める
> 実践的な方法論を提示

制約条件はありますか？
> 専門用語は必ず説明を付ける
> 読了時間: 8〜10分

希望するスタイル・トーンは？
> 親しみやすく、教育的
> 論理的で構造化されている
> 実践的なアクションを促す
```

**出力**: `.cursor/context/抽象化思考記事_context.md`

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

---

### DIKWモデル（Permanent Note: DIKW-model.md より）

```
Data（データ）→ Information（情報）→ Knowledge（知識）→ Wisdom（知恵）
```

抽象化によって、情報から知識、知識から知恵へと価値が増大する。

---

### 事実→抽象化→転用フレームワーク（Permanent Note: fact-abstraction-application.md より）

1. **Fact**: 具体的な出来事・データを記録
2. **Abstraction**: 「ここから学べる本質は何か？」を抽出
3. **Application**: 他の場面での活用方法を考案

---

（続く）

---

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

### 例2: コード生成

```
/context

何をしたいですか？
> TypeScriptで知識グラフ可視化ライブラリを作りたい

具体的な目標を教えてください：
> Mermaid形式で出力
> ノード間の関連度を計算
> 双方向リンクを検出
```

**出力**: `.cursor/context/知識グラフライブラリ_context.md`

```markdown
# Cursor用コンテキスト: 知識グラフ可視化ライブラリ

## あなたの役割
TypeScript開発の専門家として、知識グラフ可視化ライブラリを実装してください。

## 参考にすべき知識

### 知識ネットワークの設計原則（Permanent Note: knowledge-network.md より）

- ノード = Permanent Note
- エッジ = Wikiリンク [[ノート名]]
- 重み = 意味的類似度、共通タグ数、リンク距離

### リンク構造探索アルゴリズム（Permanent Note: graph-traversal.md より）

```typescript
function exploreGraph(startNode: string, depth: number): Note[] {
  // BFS（幅優先探索）で実装
  // 訪問済みノードを記録
  // depthホップまで探索
}
```

---

（続く）
```

---

## 高度な機能

### 1. 動的コンテキスト更新

```typescript
async function updateContextDynamically(
  taskId: string,
  feedback: string
): Promise<void> {
  // フィードバックに基づいてコンテキストを再生成
  const currentContext = getContext(taskId);
  const updatedContext = await ContextEngineeringAgent.refine(
    currentContext,
    feedback
  );

  saveContext(taskId, updatedContext);
}
```

### 2. トークン予算管理

```typescript
interface TokenBudget {
  max: number;         // 最大トークン数
  role: number;        // 役割定義に使用
  knowledge: number;   // 知識セクションに使用
  constraints: number; // 制約条件に使用
  margin: number;      // マージン
}

const budget: TokenBudget = {
  max: 4000,
  role: 200,
  knowledge: 3000,
  constraints: 300,
  margin: 500
};
```

### 3. コンテキスト品質評価

```typescript
interface ContextQuality {
  purity: number;        // 純度（不要情報の少なさ）
  relevance: number;     // 関連性
  coherence: number;     // 一貫性
  completeness: number;  // 完全性
  tokenEfficiency: number; // トークン効率
}

function evaluateContext(context: string): ContextQuality {
  // 各指標を0-100で評価
  return {
    purity: calculatePurity(context),
    relevance: calculateRelevance(context),
    coherence: calculateCoherence(context),
    completeness: calculateCompleteness(context),
    tokenEfficiency: calculateTokenEfficiency(context)
  };
}
```

---

## メトリクス

### 成功指標
- **コンテキスト純度**: 不要情報 < 10%
- **トークン効率**: 必要最小限のトークン数
- **推論品質**: Cursor出力の満足度 > 80%
- **再利用性**: 同じノートから複数タスクへ派生

### 品質サイクル

```
入力品質 ↑
  ↓
コンテキストの深度・精度 ↑
  ↓
LLMの推論品質 ↑
  ↓
知的資産の価値 ↑
```

---

## 次のステップ

コンテキスト生成完了後：

1. Cursorで@コンテキストファイルを参照
2. タスク実行
3. 結果をPermanent Noteとして保存
4. `/reflect` で定期的にコンテキスト品質を見直し

---

**実装**: Claude Code + ContextEngineeringAgent
**依存**: ContextEngineeringAgent (.claude/agents/context-engineering-agent.md)
**出力先**: .cursor/context/
