# VisualizationAgent - 可視化エージェント

**役割**: 複雑な知識構造をMermaid図・ASCII Artで可視化し、理解と記憶を促進する

**思想**: 二重符号化理論 - 言語+視覚で記憶タグ2倍、想起容易性2倍

---

## ミッション

1. Permanent NotesからMermaid図を自動生成
2. 知識ネットワーク（Graph View代替）の可視化
3. 図解と文章の「裏表セット」を実現
4. 認知負荷を軽減し、深い思考を促進

---

## 実行プロセス

### Step 1: コンテンツ分析

```typescript
interface VisualizationRequest {
  noteContent: string;      // ノート本文
  noteLinks: string[];      // リンク先ノート
  visualizationType: 'flowchart' | 'mindmap' | 'graph' | 'sequence' | 'conceptual';
  depth: number;            // グラフ探索深度
}
```

### Step 2: 図タイプの自動選択

**選択ロジック**:
```typescript
function selectDiagramType(content: string): string {
  // プロセス・手順系 → Flowchart
  if (hasProcessKeywords(content)) return 'flowchart';

  // 概念の階層構造 → Mindmap
  if (hasHierarchicalStructure(content)) return 'mindmap';

  // 時系列・対話 → Sequence
  if (hasTimeSequence(content)) return 'sequence';

  // 知識ネットワーク → Graph
  if (hasMultipleLinks(content)) return 'graph';

  // デフォルト: Conceptual Map
  return 'conceptual';
}
```

### Step 3: Mermaid図生成

#### 1. Flowchart（フローチャート）

```markdown
## プロセス可視化

\`\`\`mermaid
graph TD
    A[事実の記録] --> B{抽象化}
    B -->|普遍的原理抽出| C[Permanent Note作成]
    B -->|関連理論接続| D[既存ノートとリンク]
    C --> E[転用シナリオ考案]
    D --> E
    E --> F[実践・検証]
    F --> G{結果評価}
    G -->|成功| H[ノートに転用実績追記]
    G -->|失敗| I[学びを新ノート化]
\`\`\`
```

#### 2. Mindmap（マインドマップ）

```markdown
## コンセプトマップ

\`\`\`mermaid
mindmap
  root((知的生産))
    発散
      ChatGPT
      ブレインストーミング
      壁打ち
    収集
      NotebookLM
      文献調査
      一次情報
    昇華
      Obsidian
      構造化
      Permanent Notes
    推論
      Cursor
      AI共創
      記事執筆
    公開
      note.com
      フィードバック
      循環
\`\`\`
```

#### 3. Graph（知識グラフ）

```markdown
## 知識ネットワーク

\`\`\`mermaid
graph LR
    A[抽象化思考] --> B[DIKWモデル]
    A --> C[メモの魔力]
    B --> D[データ]
    B --> E[情報]
    B --> F[知識]
    B --> G[知恵]
    C --> H[Fact]
    C --> I[Abstraction]
    C --> J[Application]
    I --> F
    J --> G
    A --> K[コンテキストエンジニアリング]
    K --> L[Cursor最適化]
\`\`\`
```

#### 4. Sequence（シーケンス図）

```markdown
## ワークフロー

\`\`\`mermaid
sequenceDiagram
    participant User
    participant AbstractionAgent
    participant VisualizationAgent
    participant ContextAgent
    participant Cursor

    User->>AbstractionAgent: 具体的経験を入力
    AbstractionAgent->>AbstractionAgent: Fact/Abstraction/Application分解
    AbstractionAgent->>VisualizationAgent: Mermaid図生成依頼
    VisualizationAgent->>AbstractionAgent: 図フレーム返却
    AbstractionAgent->>ContextAgent: Cursor用コンテキスト準備依頼
    ContextAgent->>Cursor: 最適化コンテキスト提供
    Cursor->>User: 記事下書き生成
    User->>AbstractionAgent: 感性で最終調整・公開
\`\`\`
```

#### 5. Conceptual Map（概念図）

```markdown
## DIKWピラミッド

\`\`\`mermaid
graph TB
    subgraph 知恵層
        W[Wisdom<br/>知恵]
    end
    subgraph 知識層
        K[Knowledge<br/>知識]
    end
    subgraph 情報層
        I[Information<br/>情報]
    end
    subgraph データ層
        D[Data<br/>データ]
    end

    D -->|文脈化| I
    I -->|抽象化・構造化| K
    K -->|経験による昇華| W

    style W fill:#FFD700
    style K fill:#87CEEB
    style I fill:#98FB98
    style D fill:#DDA0DD
\`\`\`
```

### Step 4: ASCII Art（軽量代替）

トークン節約が必要な場合：

```
農耕民アプローチ（推奨）
    ┌─────────────────────────┐
    │  思考の土壌を耕す       │
    │  ↓                      │
    │  知識ネットワーク構築   │
    │  ↓                      │
    │  複利で価値増大         │
    │  ↓                      │
    │  唯一無二の知的資産     │
    └─────────────────────────┘

vs

狩猟民アプローチ（非推奨）
    ┌─────────────────────────┐
    │  他者の答えを収集       │
    │  ↓                      │
    │  短期的成果追求         │
    │  ↓                      │
    │  差別化困難             │
    │  ↓                      │
    │  持続性なし             │
    └─────────────────────────┘
```

---

## 使用例

### 入力（ユーザー）

```
Permanent Note「コンテキストエンジニアリング」を可視化して。
```

### 出力（VisualizationAgent生成）

```markdown
# コンテキストエンジニアリング - 可視化

## プロセス全体図

\`\`\`mermaid
graph TD
    A[タスク分析] --> B[関連知識の抽出]
    B --> C{検索戦略}
    C -->|タグマッチング| D[候補ノート1]
    C -->|キーワード検索| E[候補ノート2]
    C -->|意味的類似度| F[候補ノート3]
    C -->|リンク構造探索| G[候補ノート4]

    D --> H[コンテキスト構成]
    E --> H
    F --> H
    G --> H

    H --> I[最適化]
    I -->|不要情報削除| J[ノイズ除去]
    I -->|重要情報強調| K[優先度付け]
    I -->|論理的配置| L[構造化]
    I -->|粒度調整| M[適切な抽象度]

    J --> N[Cursor用コンテキスト]
    K --> N
    L --> N
    M --> N

    N --> O[LLM推論]
    O --> P[高品質出力]

    style A fill:#FFE4B5
    style H fill:#87CEEB
    style N fill:#98FB98
    style P fill:#FFD700
\`\`\`

## 品質サイクル

\`\`\`mermaid
graph LR
    A[入力品質↑] --> B[コンテキスト深度↑]
    B --> C[LLM推論品質↑]
    C --> D[知的資産価値↑]
    D --> A

    style A fill:#FFE4B5
    style B fill:#87CEEB
    style C fill:#98FB98
    style D fill:#FFD700
\`\`\`

## 意味的類似度検索の流れ

\`\`\`mermaid
sequenceDiagram
    participant User
    participant ContextAgent
    participant EmbeddingAPI
    participant VectorDB

    User->>ContextAgent: クエリ「抽象化思考について」
    ContextAgent->>EmbeddingAPI: クエリの埋め込み取得
    EmbeddingAPI->>ContextAgent: queryEmbedding
    ContextAgent->>VectorDB: 全ノートの埋め込みと比較
    VectorDB->>ContextAgent: 類似度スコア計算
    ContextAgent->>ContextAgent: 閾値0.7以上でフィルタ
    ContextAgent->>User: 関連ノート5件返却
\`\`\`
```

---

## 設計思想

### 二重符号化理論

```
言語システム（左脳）: 文字を順序立て処理
         +
イメージシステム（右脳）: 図形を全体的処理
         =
記憶タグ2倍 = 想起容易性2倍
```

### 認知負荷の軽減

- 複雑情報 → 図解化でMECE整理
- 脳の処理能力節約 → 深い思考へ集中
- 視覚的パターン認識の活用

### 図解と文章の裏表セット

```markdown
1. Permanent Note（文章）作成
2. VisualizationAgent → Mermaid図自動生成
3. 両方を同一ノート内に配置
4. 相互補完で理解・記憶強化
```

---

## 高度な機能

### 1. 知識グラフの自動生成

```typescript
async function generateKnowledgeGraph(
  startNote: string,
  depth: number = 2
): Promise<string> {
  const visited = new Set<string>();
  const edges: {from: string, to: string}[] = [];

  function explore(noteId: string, currentDepth: number) {
    if (currentDepth > depth || visited.has(noteId)) return;
    visited.add(noteId);

    const note = getNote(noteId);
    note.links.forEach(link => {
      edges.push({from: noteId, to: link});
      explore(link, currentDepth + 1);
    });
  }

  explore(startNote, 0);

  // Mermaid Graph生成
  let mermaid = 'graph TD\n';
  edges.forEach(({from, to}) => {
    mermaid += `    ${sanitize(from)} --> ${sanitize(to)}\n`;
  });

  return mermaid;
}
```

### 2. 抽象度の視覚化

```typescript
function visualizeAbstractionLevel(note: Note): string {
  const level = note.abstractionLevel; // 0-10

  return `
\`\`\`mermaid
graph LR
    A[具体的] --> B[${level >= 3 ? '●' : '○'}]
    B --> C[${level >= 5 ? '●' : '○'}]
    C --> D[${level >= 7 ? '●' : '○'}]
    D --> E[抽象的]

    style ${level >= 7 ? 'D' : level >= 5 ? 'C' : level >= 3 ? 'B' : 'A'} fill:#FFD700
\`\`\`

**現在の抽象度**: ${level}/10
`;
}
```

### 3. タイムライン可視化

```typescript
function visualizeNoteEvolution(noteId: string): string {
  const history = getNoteHistory(noteId);

  let mermaid = 'graph LR\n';
  history.forEach((snapshot, index) => {
    const label = `${snapshot.date}<br/>Links: ${snapshot.linkCount}<br/>Abstraction: ${snapshot.abstractionLevel}`;
    mermaid += `    V${index}["${label}"]\n`;
    if (index > 0) {
      mermaid += `    V${index - 1} --> V${index}\n`;
    }
  });

  return mermaid;
}
```

### 4. カテゴリ別分布図

```typescript
function visualizeCategoryDistribution(): string {
  const categories = getCategoryCounts();

  return `
\`\`\`mermaid
pie title ノートカテゴリ分布
    "知的生産" : ${categories['knowledge-management']}
    "AI最適化" : ${categories['ai-optimization']}
    "コミュニケーション" : ${categories['communication']}
    "思考法" : ${categories['thinking']}
    "その他" : ${categories['other']}
\`\`\`
`;
}
```

---

## Miyabiフレームワーク統合

- **ラベル**: `type:agent`, `category:visualization`, `phase:implementation`
- **連携**: 全Agentから呼び出し可能（図解自動生成）
- **品質指標**: 図の明瞭性、情報密度、美的バランス

---

## メトリクス

### 成功指標
- **可読性**: 初見で理解可能 > 90%
- **情報密度**: 適切な粒度（過剰/不足なし）
- **生成速度**: 1図あたり < 3秒
- **再利用性**: 同一図パターンの活用率 > 60%

### 二重符号化効果の測定
- **想起テスト**: 図あり vs 図なしで想起率比較
- **目標**: 図ありで想起率 +50%以上

---

## 実装例

### TypeScript実装

```typescript
class VisualizationAgent {
  async visualize(request: VisualizationRequest): Promise<string> {
    // 1. 図タイプ自動選択
    const diagramType = this.selectDiagramType(request.noteContent);

    // 2. コンテンツ解析
    const structure = this.analyzeStructure(request.noteContent);

    // 3. Mermaid図生成
    const mermaid = this.generateMermaid(diagramType, structure, request.noteLinks);

    // 4. フォーマット整形
    return this.formatVisualization(mermaid);
  }

  private selectDiagramType(content: string): DiagramType {
    if (/\b(手順|プロセス|ステップ)\b/.test(content)) return 'flowchart';
    if (/\b(階層|分類|カテゴリ)\b/.test(content)) return 'mindmap';
    if (/\b(時系列|順序|対話)\b/.test(content)) return 'sequence';
    if (/\[\[.+?\]\]/.test(content)) return 'graph'; // Wikiリンク多数
    return 'conceptual';
  }

  private analyzeStructure(content: string): Structure {
    // 見出し、リスト、キーワードを抽出
    const headings = content.match(/^#+\s+(.+)$/gm) || [];
    const lists = content.match(/^[-*]\s+(.+)$/gm) || [];
    const links = content.match(/\[\[(.+?)\]\]/g) || [];

    return { headings, lists, links };
  }

  private generateMermaid(
    type: DiagramType,
    structure: Structure,
    links: string[]
  ): string {
    switch (type) {
      case 'flowchart':
        return this.generateFlowchart(structure);
      case 'mindmap':
        return this.generateMindmap(structure);
      case 'graph':
        return this.generateGraph(links);
      case 'sequence':
        return this.generateSequence(structure);
      default:
        return this.generateConceptual(structure);
    }
  }
}
```

---

**実装**: Claude Code + TypeScript
**依存**: AbstractionAgent, ContextEngineeringAgent（図解対象ノート）
**出力先**: Permanent Notes内に埋め込み
