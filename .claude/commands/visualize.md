# Mermaid図生成 - VisualizationAgent実行

**役割**: 複雑な知識構造をMermaid図で可視化し、理解と記憶を促進

**思想**: 二重符号化理論 - 言語+視覚で記憶タグ2倍、想起容易性2倍

---

## ミッション

VisualizationAgentを呼び出し、Permanent NotesをMermaid図に変換します。

**核心原則**: 図解と文章の「裏表セット」で理解・記憶を強化

---

## 実行プロセス

### 1. 対象ノート指定

```
可視化したいPermanent Noteのパスを指定してください：
> knowledge/permanent-notes/[ファイル名].md

または可視化したい内容を直接入力：
> [テキスト入力]
```

### 2. 図タイプ自動選択

VisualizationAgentが内容を分析し、最適な図タイプを選択：

```typescript
function selectDiagramType(content: string): DiagramType {
  // プロセス・手順系 → Flowchart
  if (/\b(手順|プロセス|ステップ)\b/.test(content)) return 'flowchart';

  // 概念の階層構造 → Mindmap
  if (/\b(階層|分類|カテゴリ)\b/.test(content)) return 'mindmap';

  // 時系列・対話 → Sequence
  if (/\b(時系列|順序|対話)\b/.test(content)) return 'sequence';

  // 知識ネットワーク → Graph
  if (/\[\[.+?\]\]/.test(content)) return 'graph';

  // デフォルト: Conceptual Map
  return 'conceptual';
}
```

### 3. Mermaid図生成

選択された図タイプに応じて生成：

#### A. Flowchart（フローチャート）

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

    style A fill:#FFE4B5
    style C fill:#87CEEB
    style H fill:#FFD700
\`\`\`
```

#### B. Mindmap（マインドマップ）

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

#### C. Graph（知識グラフ）

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

    style A fill:#FFD700
    style B fill:#87CEEB
    style K fill:#98FB98
\`\`\`
```

#### D. Sequence（シーケンス図）

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

#### E. Conceptual Map（概念図）

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

### 4. ノートへの埋め込み

生成した図を対象ノートの適切な箇所に挿入：

```markdown
# [ノートタイトル]

...（既存コンテンツ）...

---

## 可視化

[VisualizationAgentが生成した図]

---

**図解メモ**:
- 図タイプ: Flowchart
- 生成日: 2025-10-22
- 更新履歴: [日付] - [変更内容]
```

---

## 使用例

### 例1: 既存ノートの可視化

```
/visualize

可視化したいPermanent Noteのパスを指定してください：
> knowledge/permanent-notes/コンテキストエンジニアリング.md
```

**出力**: ノートに以下が追加される

```markdown
## 可視化

### プロセス全体図

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

### 品質サイクル

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
```

### 例2: 直接入力からの可視化

```
/visualize

可視化したい内容を直接入力：
> 農耕民アプローチと狩猟民アプローチの違いを図解してほしい
```

**出力**:

```markdown
## 農耕民 vs 狩猟民アプローチ

\`\`\`mermaid
graph TB
    subgraph 農耕民アプローチ（推奨）
        A1[思考の土壌を耕す] --> A2[知識ネットワーク構築]
        A2 --> A3[複利で価値増大]
        A3 --> A4[唯一無二の知的資産]
    end

    subgraph 狩猟民アプローチ（非推奨）
        B1[他者の答えを収集] --> B2[短期的成果追求]
        B2 --> B3[差別化困難]
        B3 --> B4[持続性なし]
    end

    style A4 fill:#FFD700
    style B4 fill:#FF6B6B
\`\`\`

### 価値の推移

\`\`\`mermaid
graph LR
    Time[時間経過] -.-> A
    Time -.-> B

    A[農耕民: 複利で増大] -->|3ヶ月| A1[+50%]
    A1 -->|6ヶ月| A2[+150%]
    A2 -->|1年| A3[+300%]

    B[狩猟民: 一定または減少] -->|3ヶ月| B1[+10%]
    B1 -->|6ヶ月| B2[+5%]
    B2 -->|1年| B3[-10%]

    style A3 fill:#FFD700
    style B3 fill:#FF6B6B
\`\`\`
```

### 例3: 複数ノートの関係性可視化

```
/visualize

以下のノート間の関係を可視化してください：
- コンテキストエンジニアリング
- 抽象化思考
- DIKWモデル
- Cursor活用法
```

**出力**:

```markdown
## 知識ネットワーク: AI×知的生産

\`\`\`mermaid
graph TD
    A[抽象化思考] --> B[DIKWモデル]
    A --> C[コンテキストエンジニアリング]
    B --> D[データ→情報→知識→知恵]
    C --> E[Cursor活用法]
    E --> F[LLM推論品質向上]
    A --> F
    D --> C

    style A fill:#FFD700
    style C fill:#87CEEB
    style E fill:#98FB98
\`\`\`
```

---

## 高度な使い方

### 1. 抽象度の視覚化

```
/visualize

ノート「抽象化思考」の抽象度を視覚化
```

**出力**:

```markdown
## 抽象度レベル

\`\`\`mermaid
graph LR
    A[具体的] --> B[●]
    B --> C[●]
    C --> D[●]
    D --> E[抽象的]

    style D fill:#FFD700
\`\`\`

**現在の抽象度**: 7/10
**評価**: 高（普遍的原理として活用可能）
```

### 2. ノート進化の時系列可視化

```
/visualize

ノート「コンテキストエンジニアリング」の進化を可視化
```

**出力**:

```markdown
## ノート進化の履歴

\`\`\`mermaid
graph LR
    V1["2025-09-01<br/>Links: 2<br/>Abstraction: 5"] --> V2["2025-09-15<br/>Links: 5<br/>Abstraction: 6"]
    V2 --> V3["2025-10-01<br/>Links: 12<br/>Abstraction: 8"]

    style V3 fill:#FFD700
\`\`\`
```

### 3. カテゴリ別分布図

```
/visualize

ノートカテゴリの分布を円グラフで
```

**出力**:

```markdown
## ノートカテゴリ分布

\`\`\`mermaid
pie title 全Permanent Notesのカテゴリ分布
    "知的生産" : 15
    "AI最適化" : 12
    "コミュニケーション" : 8
    "思考法" : 7
\`\`\`
```

---

## ASCII Art代替（軽量版）

トークン節約が必要な場合はASCII Artで出力：

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

## 次のステップ

図生成完了後、以下のコマンドと連携：

1. `/reflect` - 定期レビューで図も更新
2. `/context` - 図をコンテキストに含める（視覚的説明）
3. `/knowledge-map` - 全体の知識マップに統合

---

**実装**: Claude Code + VisualizationAgent
**依存**: VisualizationAgent (.claude/agents/visualization-agent.md)
**出力先**: Permanent Notes内に埋め込み
