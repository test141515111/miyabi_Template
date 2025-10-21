# ノート間リンク提案 - 知識ネットワーク構築

**役割**: Permanent Notes間の関連性を自動検出し、Wikiリンク構造を提案

---

## ミッション

孤立したノートを減らし、知識ネットワークの密度を高めることで、記憶定着と知識の再利用性を最大化します。

---

## 実行プロセス

### 1. 対象ノート指定

```
リンクを追加したいPermanent Noteのパスを指定してください：
> knowledge/permanent-notes/[ファイル名].md

または "all" で全ノートを一括分析：
> all
```

### 2. 関連性分析

以下の4つの方法で関連ノートを検出：

#### A. タグマッチング

```typescript
function findByTags(targetNote: Note): Note[] {
  const targetTags = extractTags(targetNote.content);
  return allNotes.filter(note =>
    note.tags.some(tag => targetTags.includes(tag))
  );
}
```

#### B. キーワード検索

```typescript
function findByKeywords(targetNote: Note): Note[] {
  const keywords = extractKeywords(targetNote.content);
  return allNotes.filter(note =>
    keywords.some(kw => note.content.includes(kw))
  );
}
```

#### C. 意味的類似度（埋め込みベース）

```typescript
async function findBySemantic(targetNote: Note): Promise<Note[]> {
  const targetEmbedding = await getEmbedding(targetNote.content);
  const similarities = await Promise.all(
    allNotes.map(async note => ({
      note,
      similarity: cosineSimilarity(targetEmbedding, await getEmbedding(note.content))
    }))
  );

  return similarities
    .filter(s => s.similarity >= 0.7)
    .sort((a, b) => b.similarity - a.similarity)
    .map(s => s.note);
}
```

#### D. リンク構造の探索（2ホップ先まで）

```typescript
function findByLinkStructure(targetNote: Note): Note[] {
  const directLinks = targetNote.links;
  const secondHopLinks = directLinks.flatMap(link =>
    getNote(link).links
  );

  return [...new Set([...directLinks, ...secondHopLinks])];
}
```

### 3. 関連度スコアリング

各候補ノートに対してスコアを算出：

```typescript
interface LinkSuggestion {
  targetNote: string;
  relatedNote: string;
  score: number;
  reasons: string[];
}

function scoreRelation(target: Note, candidate: Note): number {
  let score = 0;

  // タグ一致: +20点
  const commonTags = intersection(target.tags, candidate.tags);
  score += commonTags.length * 20;

  // キーワード一致: +10点
  const commonKeywords = intersection(
    extractKeywords(target.content),
    extractKeywords(candidate.content)
  );
  score += commonKeywords.length * 10;

  // 意味的類似度: 0-50点
  const semanticScore = cosineSimilarity(target.embedding, candidate.embedding);
  score += semanticScore * 50;

  // リンク距離: 2ホップ以内 +15点
  const linkDistance = calculateLinkDistance(target, candidate);
  if (linkDistance <= 2) score += 15;

  return score;
}
```

### 4. 提案生成

スコア上位5-10件を提案：

```markdown
# リンク提案: [ノート名]

## 現在のリンク状態
- 発リンク数: 3
- 被リンク数: 2
- リンク密度: 低（推奨: 6+）

---

## 推奨リンク（スコア順）

### 1. [[コンテキストエンジニアリング]] (スコア: 85)

**関連性の理由**:
- 共通タグ: #ai-optimization, #knowledge-management
- 意味的類似度: 0.82
- リンク距離: 2ホップ

**提案する追加箇所**:
```
## Abstraction（抽象化）

### 既存理論との接続

- **SCQAフレームワーク**: ...
- **[[コンテキストエンジニアリング]]**: LLMへのコンテキスト提供も同じ原理 ← ここに追加
```

---

### 2. [[DIKW模型]] (スコア: 78)

**関連性の理由**:
- 共通キーワード: 抽象化, 知識, 情報
- リンク距離: 1ホップ

**提案する追加箇所**:
```
## Abstraction（抽象化）

### 抽出された原理・原則

このプロセスは[[DIKW模型]]における「情報→知識」の変換に相当する。 ← ここに追加
```

---

### 3. [[問題解決フレームワーク]] (スコア: 72)

（以下同様に提案）

---

## 孤立ノートの警告

⚠️ このノートは現在「孤立状態」です（リンク密度: 2）

**推奨アクション**:
- [ ] 上記の推奨リンクを3つ以上追加
- [ ] 関連するノートからこのノートへのリンクも追加（被リンク増加）

---

## 次のステップ

1. 提案されたリンクを確認・追加
2. `/reflect` で定期的にリンク構造を見直し
3. `/knowledge-map` で知識ネットワーク全体を可視化
```

### 5. 自動リンク追加（オプション）

ユーザーの承認を得て、提案されたリンクを自動追加：

```
推奨リンクを自動追加しますか？ (y/n)
> y

✅ [[コンテキストエンジニアリング]] を追加しました
✅ [[DIKW模型]] を追加しました
✅ [[問題解決フレームワーク]] を追加しました
```

---

## 使用例

### 例1: 単一ノートの分析

```
/link-notes

リンクを追加したいPermanent Noteのパスを指定してください：
> knowledge/permanent-notes/抽象化思考.md
```

**出力**: 上記のような提案レポート

### 例2: 全ノート一括分析

```
/link-notes

リンクを追加したいPermanent Noteのパスを指定してください：
> all
```

**出力**:

```markdown
# 全ノートリンク分析レポート

## 統計情報
- 総ノート数: 42
- 平均リンク密度: 5.2
- 孤立ノート数: 5（要対応）

---

## 孤立ノート（優先対応）

### 1. knowledge/permanent-notes/農耕民vs狩猟民.md
- リンク密度: 1
- 推奨リンク: 3件

### 2. knowledge/permanent-notes/Visual_Zettelkasten.md
- リンク密度: 0
- 推奨リンク: 5件

（以下略）

---

## リンク密度改善の優先順位

1. 孤立ノート5件を優先対応
2. リンク密度3以下のノート12件を次に対応
3. 目標: 全ノート平均6+リンク
```

---

## 高度な機能

### 双方向リンクの提案

```markdown
## 双方向リンク強化の提案

現在、[[コンテキストエンジニアリング]]から[[抽象化思考]]へのリンクがありますが、
逆方向のリンクがありません。

**提案**:
- [[抽象化思考]]にも[[コンテキストエンジニアリング]]へのリンクを追加
- これにより、双方向の知識ネットワークが形成されます
```

### クラスター検出

```markdown
## 知識クラスターの検出

以下のノート群は強く関連しています（クラスター形成）：

**クラスター1: AI×知的生産**
- [[コンテキストエンジニアリング]]
- [[抽象化思考]]
- [[Cursor活用法]]
- [[LLM推論エンジン]]

**推奨アクション**:
- このクラスターに「ハブノート」を作成
- タイトル例: "AI時代の知的生産システム"
```

---

## メトリクス

### 成功指標
- **孤立ノート数**: 0件（目標）
- **平均リンク密度**: 6+（目標）
- **双方向リンク率**: 70%+（目標）
- **クラスター密度**: 適切（過密/過疎なし）

### 知識ネットワークの健全性

```
健全性スコア: 78/100

✅ 良好な点:
- 平均リンク密度が高い（6.2）
- 双方向リンク率が良好（72%）

⚠️ 改善点:
- 孤立ノートが5件存在
- クラスター間の接続が弱い
```

---

## 次のステップ

リンク追加完了後、以下のコマンドと連携：

1. `/knowledge-map` - 知識ネットワーク全体を可視化
2. `/reflect` - 定期的にリンク構造を見直し
3. `/context` - リンク構造を活用したコンテキスト生成

---

**実装**: Claude Code + TypeScript
**依存**: 埋め込みAPI（意味的検索用）
**出力先**: knowledge/permanent-notes/（既存ノート更新）
