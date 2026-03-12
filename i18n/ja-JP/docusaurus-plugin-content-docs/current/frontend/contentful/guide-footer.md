---
title: "ガイド: フッターコンテンツ"
sidebar_position: 8
---

# ガイド: フッターコンテンツ

Global Footer は、KFC サイトのすべてのページ下部に表示されます。Contentful を使うと、フッター内のナビゲーションセクション、リンク、PDF を含む関連アセットを、エンジニアリング対応なしで市場ごとに設定できます。

---

## フロントエンドでの表示箇所

フッターは複数の**ナビゲーションセクション**に分かれており、それぞれの中にリンク群が入ります。よくある構成は次の通りです。

- **Menu** — メニューカテゴリへのリンク
- **Policies / Políticas** — Privacy Policy、Terms of Use など
- **Delivery Policies** — デリバリー利用規約や FAQ
- **FAQ** — よくある質問
- **Nutritional Content** — 栄養情報ページや PDF
- **Help and Service / Ayuda y Servicio** — カスタマーサポート関連リンク

各リンクは、内部ページパスにも外部 URL にも設定できます。

---

## Contentfulで設定する内容

### フッターエントリを開く

1. Contentful で **Global Footer** Content Type を探す
2. **Global Footer** エントリを開く

### 新しいセクションを追加する

1. Global Footer エントリ内で **Add Content** を押す
2. **Footer Navigation Section** を選ぶ
3. セクション名を入力する
4. そのセクション内で **Add Content** → **New Content** → **Footer Link** を選び、リンク追加を始める

### フッターリンクを作成する

Footer Link の主な項目は次の通りです。

- **Link Text** — フッターに表示されるラベル
- **Link** — クリック先（内部パスまたは外部 URL）
- **Image** — 任意。画像を使う場合は表示仕様を事前確認する

作成手順:

1. Footer Link または Footer Navigation Section エントリ内で **New Content** → **Link** を押す
2. 次を入力する
   - **Identifier** — 管理用識別名
   - **Link Text** — 表示ラベル
   - **Internal Path** — KFC サイト内リンク用
   - **URL** — 外部リンク用
3. Link を Publish → Footer Link を Publish → Footer Navigation Section を Publish → 最後に **Global Footer を再公開**

### PDF をリンクする

1. Contentful の **Media** に移動し、**Add New Asset** → **Single Asset** を押す
2. アセットタイトルを設定し、PDF をアップロードする
3. アップロード後、**download icon** から直接 URL を取得する
4. この URL を Footer Link のリンク先に使う

---

## 利用例

**新しいポリシーページ追加** — Privacy Policy や Terms of Service をコード変更なしでフッターへ追加する。

**栄養情報 PDF 掲載** — Nutritional Content セクションから PDF をリンクする。

**市場別フッター構成** — 法務要件や導線に応じて、市場ごとに異なるリンク構成を持てる。

**外部キャンペーン導線** — 一時的に外部ランディングページやマイクロサイトへ誘導する。
