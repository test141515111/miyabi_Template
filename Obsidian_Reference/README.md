# ⚠️ Obsidian_Reference - 保護対象ディレクトリ

## 📚 概要

このディレクトリには、**note.comから収集した28記事**のMarkdownファイルが保存されています。

これらの記事は、**Obsidian × Cursor統合哲学**の基礎となる重要な参考資料です。

---

## 🚨 重要警告

**このディレクトリを削除・変更しないでください！**

### なぜ重要か

1. **スクレイピング元が失われる可能性**
   - note.comの記事が削除される可能性
   - 再取得が困難になる

2. **プロジェクトの哲学的基盤**
   - 28記事から抽出された知見がシステム設計の根幹
   - これらの記事なしでは、Obsidian×Cursor統合の意図が理解できない

3. **手動収集の手間**
   - 28記事を再スクレイピングするには時間とログインが必要
   - 一度失うと復元が大変

---

## 📊 含まれる記事（28本）

### カテゴリ別

#### 🎯 基本哲学（2本）
- Obsidianでメモを取る効用：単なる記録から「知識の錬成炉」へ
- Obsidianは「データの墓場」ではなく「知識の錬成炉」

#### 🔗 Obsidian×Cursor統合（4本）
- Obsidian×Cursorの活用方法：知的生産のシナジーを最大化
- Obsidian×Cursorでコンテキストエンジニアリングを実現し、LLMに推論させる技術
- Obsidian × Cursor 活用の真髄─LLMを "推論エンジン" として使え
- Obsidian×Cursorの活用アプローチ: 農耕民OR狩猟民

#### 💡 抽象化思考（4本）
- 抽象化思考のすゝめ：AI時代に「使える知的資産」を築くためのガイド
- メモを知的資産へ昇華させる思考法、Obsidianにおける抽象化の重要性
- 知的資産となる「永久保存版ノート」に抽象化が不可欠な理由。
- Obsidian初心者のための「事実→抽象化→転用」フレームワーク活用ガイド

#### 📊 Visual Zettelkasten（3本）
- ObsidianのExcalidrawで始めるVisual Zettelkastenとは？
- ObsidianでのVisual Zettelkastenにおいて、「図解」と「永久保存版ノート」を裏表セットにする理由
- 【有益】ObsidianでのExcalidrawの図解作成効率化のコツ

#### その他（15本）
- 【入門】Obsidian×Cursorで自己理解を深める方法
- Obsidian × Cursor で "良質メモ → 記事執筆" を実現する徹底フロー
- 【非エンジニア向け】Cursor超入門：AIと"共創"する新時代の文章術
- 知的生産を最大化する「AIスタック」思考法：ツール使い分けの最適解
- Context is king:Newtypeの知的生産術
- ExcaliBrain小技集、Suggesterで爆速ノート作成術
- 【時短】Obsidianを最短で使いこなすための3ヶ月ロードマップ
- 最初に入れたい！Obsidianの神プラグイン7選と使い方
- Obsidianでバラバラのメモが"知のネットワーク"に変わる一例。
- Obsidianを難しく考えずにとりあえずメモを沢山書こう。
- Obsidianで考える、Kindle書籍の読み方
- Obsidianで考える、思考の地図を描くGraphViewとExcaliBrainの比較
- Obsidianで考える、情報の構造化とは？
- 「外界」と「自分の脳」を分けて考える、NotebookLM×Obsidianが変える学びの新常識
- 【見ないと損する】Obsidianで内省をする重要性について

---

## 📜 履歴

### 発生した問題

**2025-10-22**:
- 08:03:10 - コミット `1191807` で28記事を追加
- 14:04:53 - コミット `a38fbd3` でRevert → **全削除**

### なぜRevertされたのか？

調査の結果、**明確な理由がコミットメッセージに記載されていない**ことが判明。

考えられる原因：
1. 誤操作
2. ビルドエラー（未確認）
3. プロジェクト方針の変更（一時的）

### 復元履歴

- 2025-10-23 03:33 - `git checkout 1191807 -- Obsidian_Reference/` で復元

---

## 🛡️ 再発防止策

### 1. このREADME.md
このファイル自体が、ディレクトリの重要性を説明し、削除を防ぐ

### 2. Gitでの保護
重要なディレクトリとして認識し、変更には慎重を期す

### 3. バックアップ
定期的にローカルバックアップを推奨

---

## 🔄 再スクレイピング方法（万が一の場合）

```bash
# Pythonスクリプトを実行
python3 scrape_note_articles.py

# 注意: note.comへのログインが必要
# 保存先: /Users/hika/Documents/Cursor_メインMAC/Obsidian_Cursor/Obsidian_Reference
```

---

## 📞 問題が発生した場合

1. まずこのREADME.mdを読む
2. Gitの履歴を確認: `git log -- Obsidian_Reference/`
3. 必要に応じて復元: `git checkout 1191807 -- Obsidian_Reference/`

---

**⚠️ このディレクトリは、プロジェクトの知的財産です。慎重に扱ってください。**

🌸 Obsidian × Cursor - Beauty in Knowledge Integration
