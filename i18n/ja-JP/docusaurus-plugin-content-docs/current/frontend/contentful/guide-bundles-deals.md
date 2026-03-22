---
title: "ガイド: バンドルとディール"
sidebar_position: 5
---

# ガイド: バンドルとディール

Bundles は複数商品をまとめて販売するコンボ商品です。Deals は、商品やバンドルを特別価格や訴求付きでまとめて見せる販促用グルーピングです。どちらも Byte Commerce Admin Portal で設定したあとに、Contentful 側で表示用コンテンツを整える必要があります。

:::info
Bundles と Deals は **先に Byte Commerce Admin Portal で作成しておく必要があります**。Contentful 側の設定がない項目は **メニューに表示されません**。
:::

---

## フロントエンドでの表示箇所

**Bundle cards** — 通常の商品カードと並んでメニュー内に表示されます。コンボ画像、タイトル、価格が表示され、顧客は中身をカスタマイズできます。

**Deal cards** — メニュー内または専用 Deals ページに表示されます。Deal は通常、1つ以上の Product や Bundle をキャンペーン文脈で束ねて表示し、Target URI によって特定ページやメニューセクションへ深く誘導できます。

どちらも設定次第で **Homepage** 上の注目コンテンツとして表示できます。

---

## Contentfulで設定する内容

### Bundle に表示用コンテンツを追加する

1. **Add Entry** → **Bundle** を選ぶ
2. Bundle Code フィールド下の **Select from Yum** を押し、既存 Bundle を選択する
   - すでに Contentful コンテンツがある Bundle には、重複エントリを作れないため既存エントリを編集する
3. **+ Add Media** から Bundle 画像を追加する
4. 緑の **Publish** を押す  
   将来日時で出したい場合はドロップダウンからスケジュール設定を行う

### Deal に表示用コンテンツを追加する

1. **Add Entry** → **Deal** を選ぶ
2. 必須項目を入力する
   - **Title in English** と **Title in Spanish**（または対象 locale）
   - **Item(s)** — **Add Existing Content** から既存 Product / Bundle を紐付ける
   - **Target URI** — Deal カード押下時の遷移先パス
3. **+ Add Media** で Deal 用画像を設定する
4. Deal エントリ内から紐づく Product / Bundle を開いて編集することもできる
5. **Publish** を押す  
   必要に応じてスケジュール公開も利用する

---

## 利用例

**新しいコンボ商品の掲載** — Byte Commerce Admin Portal で Bundle を作成したあと、画像と表示名を追加してメニュー上で正しく見せる。

**販促ディールページ** — たとえば「Family Feast」のようなキャンペーン名で複数商品を束ね、専用ランディングページへ誘導する。

**期間限定オファーの公開管理** — スケジュール公開を使って、プロモーション期間の開始時に表示し、終了時に外す。

**市場別ディール表現** — 同じ元商品構成でも、市場ごとに異なる画像やタイトルで Deal を作成できる。
