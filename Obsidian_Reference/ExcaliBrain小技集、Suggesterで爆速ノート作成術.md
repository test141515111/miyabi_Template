# 

**URL:** https://note.com/iam_shin/n/nb1c6ec85aebc?magazine_key=m7e4bfc807eee&from=membership-magazine
**収集日:** 2025/10/22 7:39:19

---

[![見出し画像](https://assets.st-note.com/production/uploads/images/221422193/rectangle_large_type_2_2a3cb0fe8022333809263265e867ef8c.png?width=1200)](https://assets.st-note.com/production/uploads/images/221422193/rectangle_large_type_2_2a3cb0fe8022333809263265e867ef8c.png?width=2000&height=2000&fit=bounds&quality=85) 

# ExcaliBrain小技集、Suggesterで爆速ノート作成術

7

返金可

[![Shin](https://assets.st-note.com/production/uploads/images/216663176/profile_16fa0c6922bbab989f0f02b33589b17b.jpeg?width=60)](/iam_shin)

[Shin](/iam_shin)

2025年10月11日 08:27 フォローしました

¥500〜

買われています過去24時間 クリックで閉じる

## はじめに：ExcaliBrainの可能性を最大化する

Obsidianで知的生産を行っている方の中には、ExcaliBrainの存在を知りながらも「まだ使いこなせていない」「設定が難しそう」と感じている方も多いのではないでしょうか。

確かにExcaliBrainは強力なツールですが、その真価を発揮するには「Suggester（サジェスター）」という機能を理解し、使いこなすことが鍵となります。

本記事では、ExcaliBrainの基本的な概要を振り返りつつ、特に**Suggesterを活用した爆速ノート作成術**に焦点を当てて解説します。この小技を身につけることで、思考の流れを止めることなく、ノート間の関係性を瞬時に構築できるようになります。

## ExcaliBrainとは何か？──思考の羅針盤

ExcaliBrainは、Obsidianのコミュニティプラグインの一つで、ノート間の関係性を**構造化されたマインドマップ**として視覚化するツールです。開発者はZsolt Viczián氏で、手書き風図形描画プラグイン「Excalidraw」の作者でもあります。

Graph Viewが知の宇宙を**フラット**に描き出す地図だとすれば、ExcaliBrainはその宇宙に**コンパスと指針**を与えてくれる存在です。

[](https://note.com/iam_shin/n/n70a661553d3a)

### ExcaliBrainの基本構造：Idea Compass

ExcaliBrainの最大の特徴は、ノート間の関係を**方向性**と**種類**によって分類する点にあります。これを「Idea Compass（アイデアコンパス）」と呼びます。

具体的には、選択したノート（現在フォーカスしているノート）を中心に配置し：

*   **北（上部・Parents）**：このアイデアはどこから来たのか？上位概念、起源、所属するカテゴリ
    
*   **南（下部・Children）**：このアイデアはどこへつながるのか？下位概念、具体例、詳細
    
*   **西（左側・Left Friends）**：類似する、あるいはこのアイデアを支えるものは何か？関連情報、参考文献
    
*   **東（右側・Right Friends）**：このアイデアと競合するものは何か？対立概念、反論、欠点
    

[![画像](https://assets.st-note.com/img/1760137233-MrFcDXd6N75nSBImAZQo3lJp.png?width=1200)](https://assets.st-note.com/img/1760137233-MrFcDXd6N75nSBImAZQo3lJp.png?width=2000&height=2000&fit=bounds&quality=85)

このように**四方向に整然と配置**される視覚は、まさに方位磁石のようで、あるノートを中心に据えたとき、その「上位概念」や「下位トピック」、そして「関連する横並びの話題」が一目瞭然となります。

さらに：

*   **Previous/Next（前後・Friends）**：同じ階層での連続性や順序を示す関係
    

これらの関係性を適切に設定することで、Graph Viewでは混在していたリンクの網が、ExcaliBrainではまるで**家系図や組織図**のように整理されるのです。

  

## Suggesterとは何か？──思考を止めない秘訣

ここまでExcaliBrainの基本を確認しましたが、実際に使う際の最大の課題は**「どうやってこれらの関係性を素早く設定するか？」**という点です。

一つ一つのノートを開いて、手動で \`North::\[\[上位ノート\]\]\` のように書いていくのは非常に手間がかかります。思考の流れが途切れてしまい、せっかくのアイデアが冷めてしまうこともあるでしょう。

**ここで登場するのが「Suggester（サジェスター）」機能です。**

Suggesterとは、特定の**文字列をトリガー**として、ExcaliBrainの関係性キーワードを自動補完してくれる機能です。これにより、わずか数文字のタイピングで、複雑な関係性記法を瞬時に呼び出せるようになります。

### Suggesterの設定一覧

ExcaliBrainのSuggester機能では、以下のような文字列トリガーが設定できます：

[![画像](https://assets.st-note.com/img/1760137222-kBTldLrwxt15SnO9b8oKGjWV.png?width=1200)](https://assets.st-note.com/img/1760137222-kBTldLrwxt15SnO9b8oKGjWV.png?width=2000&height=2000&fit=bounds&quality=85)

Suggester機能のまとめ

これらのトリガーをノート内で入力すると、その方向性に関連するキーワードの候補リストが表示され、選択するだけで適切な記法が挿入されます。

## Suggesterの実践的な使い方──実際のVaultの例で解説

では、具体的にどのようなシーンでSuggesterを活用できるのか、私のVaultから実例を見ていきましょう。ここでは「運動と健康」というテーマで、論文を読んでPermanent Noteを作成する流れを紹介します。

### ケース1：論文から新しいPermanent Noteを作成したとき

スタンフォード大学の研究論文「Stanford study finds walking improves creativity」を読み、その内容をPermanent Noteとして作成したとします。

まず、ノートの基本構造を作ります：

```
# Stanford study finds walking improves creativity

## The idea
歩くことで創造性が平均60％向上する。

## Fact（事実）
- スタンフォード大学の実験では、歩きながらアイデアを出した被験者の
  創造的アウトプットが座っている時より平均60％高かった

## Abstraction（抽象化）
- 単純な身体運動＝歩行は脳の拡散的思考ネットワークを活性化し、
  連想の幅を広げる

## Application（転用）
- 歩きミーティング、ポモドーロ＋散歩、執筆の停滞打破など

## 360
```

copy

ここで、このノートの関係性を整理します。まず \`::p\` と入力して、上位概念を設定：

*   \`part of::\`（〜の一部）
    
*   \`based on::\`（〜に基づく）
    
*   \`source::\`（源）  
    など
    

「source」を選択して、元の論文へのリンクを設定：

```
source::[[01 Clippings/論文/Stanford study finds walking improves creativity]]
```

copy

このノートがどの大きなテーマの一部かを示すため、再度 \`::p\`：

```
part of::[[運動と創造性]]
```

copy

[![画像](https://assets.st-note.com/img/1760137911-QEh6dBSDU4HvqfuYVOCTMsRn.png?width=1200)](https://assets.st-note.com/img/1760137911-QEh6dBSDU4HvqfuYVOCTMsRn.png?width=2000&height=2000&fit=bounds&quality=85)

  

### ケース2：類似する関連ノートを追加したいとき

copy

## ここから先は

6,827字 / 8画像

この記事のみ ¥ 500

購入手続きへ

### メンバーシップ ¥ 500 /月〜

このサークルは、私が日々取り組んでいる 「AIを用いた知的生産と思想発信」 の舞台裏を余すことなく共…

[

このメンバーシップの詳細

](/iam_shin/membership/join)

85名が参加中

![](data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3Cstop%20offset%3D%2233%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3Cstop%20offset%3D%2250%25%22%20stop-color%3D%22%23fff%22%2F%3E%3Cstop%20offset%3D%2267%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3CanimateTransform%20attributeName%3D%22gradientTransform%22%20type%3D%22translate%22%20from%3D%22-1%200%22%20to%3D%221%200%22%20begin%3D%220s%22%20dur%3D%221.5s%22%20repeatCount%3D%22indefinite%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22rect%22%20fill%3D%22url(%23a)%22%20d%3D%22M-100-100h300v300h-300z%22%2F%3E%3C%2Fsvg%3E)![](data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3Cstop%20offset%3D%2233%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3Cstop%20offset%3D%2250%25%22%20stop-color%3D%22%23fff%22%2F%3E%3Cstop%20offset%3D%2267%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3CanimateTransform%20attributeName%3D%22gradientTransform%22%20type%3D%22translate%22%20from%3D%22-1%200%22%20to%3D%221%200%22%20begin%3D%220s%22%20dur%3D%221.5s%22%20repeatCount%3D%22indefinite%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22rect%22%20fill%3D%22url(%23a)%22%20d%3D%22M-100-100h300v300h-300z%22%2F%3E%3C%2Fsvg%3E)![](data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3Cstop%20offset%3D%2233%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3Cstop%20offset%3D%2250%25%22%20stop-color%3D%22%23fff%22%2F%3E%3Cstop%20offset%3D%2267%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3CanimateTransform%20attributeName%3D%22gradientTransform%22%20type%3D%22translate%22%20from%3D%22-1%200%22%20to%3D%221%200%22%20begin%3D%220s%22%20dur%3D%221.5s%22%20repeatCount%3D%22indefinite%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22rect%22%20fill%3D%22url(%23a)%22%20d%3D%22M-100-100h300v300h-300z%22%2F%3E%3C%2Fsvg%3E)

#### ミニマルプラン

¥500 / 月

募集終了

[](/iam_shin/membership/join)

Obsidianを深く使いこなしたい方へ。Obsidianマガジン読み放題＋週1回3000字コラム配信。実際のメモも公開し、共に「メモ魔」として知的生産を高めましょう。

*   Obsidian
*   メンバー限定の掲示板
*   メンバー限定の記事
*   メンバー特典マガジン
*   メンバー限定の会員証
*   活動期間に応じたバッジ

もっとみる

募集終了

#### スタンダードプラン

¥1,000 / 月

募集終了

[](/iam_shin/membership/join)

Obsidian×Cursorをより使いこなしたい人に向けて、週1回程度、3000-4000文字相当の記事を発信、また過去のObsidian×Cursorマガジンが見放題です。

*   Obsidian×Cursor
*   メンバー限定の掲示板
*   メンバー限定の記事
*   メンバー特典マガジン
*   メンバー限定の会員証
*   活動期間に応じたバッジ

もっとみる

募集終了

#### プレミアムプラン

¥1,500 / 月

あと14人募集中

[](/iam_shin/membership/join)

『O×Cマガジン』が監視資本主義と戦う“戦術”なら、プレミアムプランはその根幹の“思想”に触れる場所。なぜ私が戦うのか？その壮絶な原体験と哲学の全てを、未来の「共闘者」であるあなたとだけ共有する。HOWTOを超え、生きるWHYを問う。

*   Obsidian×Cursor
*   私の原体験や思想や哲学
*   メンバー限定の掲示板
*   メンバー限定の記事
*   メンバー特典マガジン
*   メンバー限定の会員証
*   活動期間に応じたバッジ

もっとみる

参加手続きへ

[ログイン](https://note.com/login?redirectPath=%2Fiam_shin%2Fn%2Fnb1c6ec85aebc%3Fmagazine_key%3Dm7e4bfc807eee%26from%3Dmembership-magazine)

*   [
    
    #運動
    
    
    
    ](https://note.com/hashtag/運動)
*   [
    
    #Obsidian
    
    
    
    ](https://note.com/hashtag/Obsidian)
*   [
    
    #ExcaliBrain
    
    
    
    ](https://note.com/hashtag/ExcaliBrain)

7

この記事が気に入ったらチップで応援してみませんか？

チップで応援

[![Shin](data:image/svg+xml;charset=utf8,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3Cstop%20offset%3D%2233%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3Cstop%20offset%3D%2250%25%22%20stop-color%3D%22%23fff%22%2F%3E%3Cstop%20offset%3D%2267%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23f7f9f9%22%2F%3E%3CanimateTransform%20attributeName%3D%22gradientTransform%22%20type%3D%22translate%22%20from%3D%22-1%200%22%20to%3D%221%200%22%20begin%3D%220s%22%20dur%3D%221.5s%22%20repeatCount%3D%22indefinite%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20class%3D%22rect%22%20fill%3D%22url(%23a)%22%20d%3D%22M-100-100h300v300h-300z%22%2F%3E%3C%2Fsvg%3E)](/iam_shin)

[Shin](/iam_shin)

フォロー

デジタル思想家。自己紹介はプロフィールにて

*   [](https://twitter.com/ShinWorkout0207)
*   [](/iam_shin/rss)