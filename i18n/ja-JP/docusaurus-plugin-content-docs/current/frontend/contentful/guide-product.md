---
title: "ガイド: 商品コンテンツ"
sidebar_position: 4
---

# ガイド: 商品コンテンツ

Product Content は、Byte Admin Portal ですでに作成済みの商品に対して、画像、タイトル、表示情報を与えるための設定です。ここで商品をお客様向けに見せる状態へ整えます。

:::info
商品は **先に Byte Admin Portal に存在している必要があります**。Contentful の設定がない商品は **メニューに表示されません**。
:::

---

## フロントエンドでの表示箇所

**Menu product cards** — カテゴリグリッド内に表示される商品カード（商品名、画像、価格タイル）は、Contentful の product content によって表示されます。

**Product detail page** — 顧客が商品を押したときの商品詳細画面では、画像、タイトル、説明文が Contentful から表示されます。

**Variant selection**（pizza 市場向け） — ピザ生地、サイズ、トッピングなどの選択肢にも、それぞれ Contentful の個別エントリが紐づき、選択 UI を構成します。

---

## Contentfulで設定する内容

### 商品コンテンツを公開する

1. **Add Entry**（画面右側の青ボタン）を押す
2. コンテンツタイプ一覧から **Product** を選ぶ
3. **Select from Yum** を押して、既存の商品を選ぶ
   - 商品には **PUBLISHED**、**DRAFT**、**NEW** などのステータスが表示される
   - すでに公開済みの商品を選ぶと、既存内容を上書きする確認が出る
4. **Title** と **Display Order** を設定する
5. **+ Add Media** から画像を追加する  
   既存画像なら **Add Existing Media**、新規なら **Add New Media**
6. 緑の **Publish** を押す  
   後で公開したい場合はドロップダウンからスケジュール公開を使う

### Pizza Crust コンテンツを公開する

1. Add Entry → **Pizza Crust** を選ぶ
2. **Option Value Code** フィールドで対象生地を選ぶ
3. タイトルと画像を設定する
4. Publish

### Pizza Size コンテンツを公開する

1. Add Entry → **Pizza Size** を選ぶ
2. **Option Value Code** フィールドで対象サイズを選ぶ
3. タイトルと画像を設定する
4. Publish

### Pizza Topping コンテンツを公開する

1. Add Entry → **Topping** を選ぶ
2. **Modifier Internal Name** フィールドで対象トッピングを選ぶ
3. タイトルと画像を設定する
4. Publish

:::note
すでに公開済みコンテンツがある商品、生地、サイズ、トッピングについては、Contentful 上で重複エントリを作成できません。既存エントリを編集してください。
:::

---

## 利用例

**新商品ローンチ** — Byte Admin Portal で新商品を作成したあと、Contentful エントリを作って画像と表示名を設定し、メニューに出せるようにします。

**商品画像更新** — ブランド刷新や季節施策に合わせて、Byte Admin Portal 側の商品データを触らずに画像だけ更新できます。

**商品名の市場別ローカライズ** — 同じ商品でも市場ごとに異なる名称を使いたい場合に対応できます。

**日時指定公開** — スケジュール公開を使って、新商品をキャンペーン開始日時に合わせて表示できます。

**ピザ向けバリエーション管理** — pizza 市場では、生地やサイズごとに別画像を持たせることで、より正確な見せ方ができます。
