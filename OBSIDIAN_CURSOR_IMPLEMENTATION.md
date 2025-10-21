# Obsidian×Cursor 実装ガイド

**作成日**: 2025年10月22日

---

## 概要

このプロジェクトは、Obsidian×Cursorの思想をClaude Code + エージェント + スラッシュコマンドで実装したものです。

**Obsidianを使わずに**、同等以上の知的生産環境を構築しています。

---

## 核心思想

### 農耕民アプローチ

```
狩猟民（非推奨）
- AIを検索エンジンとして使用
- 他者の答えを収集・転売
- 短期的成果を追求

↓ パラダイムシフト ↓

農耕民（推奨）
- 自身の思考の土壌を耕す
- 知識ネットワークを複利で増大
- 唯一無二の知的資産を育成
```

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

### 論理7：感性3の黄金比

- **AIが担当（70%）**: 論理的骨格、構造化、情報整理
- **人間が担当（30%）**: 感性、判断、最終的な意味づけ

---

## アーキテクチャ

### 4つのエージェント

#### 1. AbstractionAgent
- **役割**: Fact→Abstraction→Application自動化
- **ファイル**: `.claude/agents/abstraction-agent.md`
- **コマンド**: `/abstract`

#### 2. ContextEngineeringAgent
- **役割**: Cursor用コンテキスト最適化
- **ファイル**: `.claude/agents/context-engineering-agent.md`
- **コマンド**: `/context`

#### 3. ReflectionAgent
- **役割**: 定期的な内省・振り返り
- **ファイル**: `.claude/agents/reflection-agent.md`
- **コマンド**: `/reflect`

#### 4. VisualizationAgent
- **役割**: Mermaid図自動生成
- **ファイル**: `.claude/agents/visualization-agent.md`
- **コマンド**: `/visualize`

---

### 7つのスラッシュコマンド

| コマンド | 説明 | 対応エージェント |
|---------|------|----------------|
| `/permanent-note` | Permanent Noteテンプレート生成 | - |
| `/abstract` | 抽象化支援 | AbstractionAgent |
| `/link-notes` | ノート間リンク提案 | - |
| `/context` | Cursorコンテキスト準備 | ContextEngineeringAgent |
| `/reflect` | 内省・振り返り | ReflectionAgent |
| `/visualize` | Mermaid図生成 | VisualizationAgent |
| `/knowledge-map` | 知識マップ表示 | - |

---

## ディレクトリ構造

```
Obsidian_Cursor/
├── .claude/
│   ├── agents/                    # 4つのエージェント
│   │   ├── abstraction-agent.md
│   │   ├── context-engineering-agent.md
│   │   ├── reflection-agent.md
│   │   └── visualization-agent.md
│   └── commands/                  # 7つのスラッシュコマンド
│       ├── permanent-note.md
│       ├── abstract.md
│       ├── link-notes.md
│       ├── context.md
│       ├── reflect.md
│       ├── visualize.md
│       └── knowledge-map.md
├── knowledge/
│   ├── permanent-notes/           # Permanent Notes保存先
│   ├── reviews/                   # ReflectionAgentレポート
│   └── maps/                      # 知識マップ
├── .cursor/
│   └── context/                   # ContextEngineeringAgent出力
├── docs/
│   └── OBSIDIAN_CURSOR_PHILOSOPHY.md  # 思想ドキュメント
├── Obsidian_Reference/            # 参考: note.com 28記事
└── OBSIDIAN_CURSOR_IMPLEMENTATION.md  # このファイル
```

---

## 使用方法

### 1. 新しいPermanent Noteを作成

```bash
/permanent-note
```

テンプレートが`knowledge/permanent-notes/`に生成されます。

### 2. 抽象化支援を受ける

```bash
/abstract
```

具体的な経験から普遍的な原理を抽出します。

### 3. ノート間リンクを提案

```bash
/link-notes
```

孤立ノートを検出し、関連性の高いノートとのリンクを提案します。

### 4. Cursor用コンテキストを準備

```bash
/context
```

タスクに最適化されたコンテキストを生成し、`.cursor/context/`に保存します。

### 5. 定期的な振り返り

```bash
/reflect
```

日次/週次/月次/四半期レビューを実行します。

### 6. Mermaid図を生成

```bash
/visualize
```

ノート内容をMermaid図で可視化します。

### 7. 知識マップを表示

```bash
/knowledge-map
```

全Permanent Notesの関係性を可視化します（Obsidian Graph View代替）。

---

## ワークフロー例

### 例1: 記事執筆

```bash
# 1. 経験を記録
/permanent-note
# → テンプレート生成

# 2. 抽象化
/abstract
# → Fact/Abstraction/Application自動分解

# 3. 可視化
/visualize
# → Mermaid図追加

# 4. リンク追加
/link-notes
# → 関連ノートとリンク

# 5. Cursorコンテキスト準備
/context
# → 記事執筆用コンテキスト生成

# 6. Cursorで記事下書き生成
# → 人間が最終調整（感性の注入）
```

### 例2: 月次レビュー

```bash
# 1. 月次レビュー実行
/reflect
# → knowledge/reviews/YYYY-MM-DD_monthly.md 生成

# 2. 孤立ノート検出
/knowledge-map
# → 孤立ノート3件発見

# 3. リンク追加
/link-notes all
# → 全ノートに対してリンク提案

# 4. 知識マップ再確認
/knowledge-map
# → リンク密度向上を確認
```

---

## 主要機能

### Permanent Notes

Obsidianの代替として、以下の構造で知識を保存：

```markdown
# [タイトル]

**作成日**: YYYY-MM-DD
**タグ**: #permanent-note #[カテゴリ]

---

## Fact（事実）
[具体的な出来事・データ]

---

## Abstraction（抽象化）
[普遍的な原理・原則]

---

## Application（転用）
[転用可能な場面]

---

## 関連ノート
- [[ノート1]]
- [[ノート2]]

---

**メタデータ**:
- 抽象度: [低/中/高]
- 再利用性: [低/中/高]
- 転用実績: [未/実施中/完了]
```

### Wikiリンク

`[[ノート名]]` 形式でノート間をリンク。

リンク構造の探索、意味的類似度検索などで関連ノートを自動提案。

### 知識ネットワーク

- **ノード**: Permanent Note
- **エッジ**: Wikiリンク
- **クラスター**: 関連する知識群
- **ハブノート**: 中心的なノート（多くのリンク）
- **孤立ノート**: 接続が弱いノート（要対応）

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

### 知識ネットワークの健全性
- **孤立ノート数**: 0件（目標）
- **双方向リンク率**: 80%+（目標）
- **クラスター密度**: 適切（過密/過疎なし）

---

## 設計原則

### 1. 人間の最高の部分を活かす

- **AIが担当**: 構造化、骨格作成、情報整理
- **人間が担当**: 感性、判断、最終的意味づけ

### 2. 複利で効く知識資産を最優先

- 短期的価値 < 長期的再利用性
- メモの「質」に時間投資

### 3. 内省とリフレクションの習慣化

- 過去ノートから新洞察を引き出す
- 知識ネットワークの熟成支援

### 4. 図解と文章の裏表セット

- 二重符号化理論（言語+視覚）
- 記憶タグ2倍 = 想起容易性2倍

### 5. コンテキストの純度が全て

- Garbage In, Garbage Out
- 入力品質 = 出力品質

---

## 参考資料

### 元データ
- **note.com マガジン「Obsidian×Cursor」**: 28記事
- **保存先**: `Obsidian_Reference/`

### 思想ドキュメント
- **ファイル**: `docs/OBSIDIAN_CURSOR_PHILOSOPHY.md`
- **内容**:
  - 核心的な思想・哲学
  - 主要な方法論とワークフロー
  - コンテキストエンジニアリング
  - LLMを推論エンジンとして使う
  - 抽象化思考の重要性
  - Visual Zettelkasten

---

## トラブルシューティング

### Q: コマンドが動作しない

A: `.claude/commands/` にファイルが存在するか確認してください。

### Q: エージェントが呼び出されない

A: `.claude/agents/` にエージェント定義ファイルが存在するか確認してください。

### Q: ディレクトリが見つからない

A: 以下のコマンドでディレクトリを再作成：

```bash
mkdir -p knowledge/permanent-notes knowledge/reviews knowledge/maps .cursor/context
```

---

## 今後の拡張

### Phase 1: 基本実装 ✅（完了）
- 4つのエージェント
- 7つのスラッシュコマンド
- ディレクトリ構造

### Phase 2: 自動化強化（予定）
- 意味的検索の埋め込みAPI統合
- リンク構造の自動解析
- 知識マップの自動更新

### Phase 3: 可視化強化（予定）
- インタラクティブな知識グラフ
- D3.jsでの動的可視化
- タイムライン表示

### Phase 4: 統計・分析（予定）
- 知識成長トラッキング
- 抽象度の自動評価
- 転用実績の追跡

---

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

---

## クレジット

- **思想元**: note.com マガジン「Obsidian×Cursor」（28記事）
- **フレームワーク**: 前田裕二『メモの魔力』
- **理論**: DIKWモデル、二重符号化理論、Zettelkasten
- **実装**: Claude Code + TypeScript

---

**🌸 知識を血肉にする営み - Obsidian×Cursor 実装版**
