---
title: "ガイド: コンテンツ翻訳"
sidebar_position: 10
---

# ガイド: コンテンツ翻訳

KFC サイト上のすべての文言が、商品やホームページバナーのような特定 Content Type に紐づいているわけではありません。ウィジェットのラベル、ボタン文言、補助テキスト、エラーメッセージなどは独立して存在することがあります。Contentful の Translation 機能を使うと、そうした文言を言語ごとに管理できます。必要な文字列は **Translator Mode** で特定します。

---

## フロントエンドでの表示箇所

Translation は、サイト内のさまざまな UI 文言に影響します。たとえば次のようなものです。

- ロケーション検索ウィジェット: *"Enter your address to see local menu & deals"*
- チェックアウト手順ラベル: *"Your Order"*, *"Delivery Details"*
- ボタン文言: *"Add to Cart"*, *"Continue"*
- エラーメッセージや empty state

もし文字列が既知の Content Type（商品タイトルやホーム見出しなど）に紐づいている場合、Translator Mode 上で矢印（→）が表示され、元の Content Type エントリへたどれます。矢印がない場合は、Translation Content Type で直接管理する文字列です。

---

## Contentfulで設定する内容

### Translator Mode を有効にする

Translator Mode は、KFC サイト上の各文言に Translation ID を重ねて表示するプレビュー機能です。どの Contentful エントリがその文言を管理しているかを特定できます。

1. **シークレットウィンドウ** を開く
2. 市場の KFC URL に次のパラメータを付けてアクセスする
   ```text
   https://{your_kfc_domain}/?previewContent=true
   ```
3. ページ上に出る **Translator Mode** トグルを ON にする
4. 任意のテキストにカーソルを合わせると **Translation ID** が表示される  
   例: `locationWidget.Heading`

無効化する場合:

```text
https://{your_kfc_domain}/?previewContent=false
```

### 翻訳文言を更新する

Translation ID が分かったら:

1. Contentful で **Content** → **Translation** Content Type に移動する
2. **Add Entry** を押す
3. ID フィールドに **Translation ID** を貼り付ける
4. 市場で使う **すべての言語 / locale** の翻訳文言を入力する
5. **Publish** を押すと公開サイトに反映される

:::tip
Translator Mode で矢印（→）が表示される文言は、Homepage や Category などの構造化 Content Type 側で管理されています。その場合は Translation ではなく元の Content Type を編集してください。
:::

---

## 利用例

**ウィジェット文言のローカライズ** — ロケーション入力文言を言語ごとに調整する。

**UI 文言の修正** — ボタンやラベルの誤字修正を、デプロイなしで反映する。

**新言語追加** — 新しい locale を導入する際、共通 UI 文言を Translation Content Type で埋める。

**市場別言い回し調整** — 同じ言語でも、"Basket" と "Cart" のような市場差を locale ごとに持たせる。
