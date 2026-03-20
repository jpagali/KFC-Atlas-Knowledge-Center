---
title: プラットフォームレイヤー
description: Atlas / Byte Helium プラットフォームの各レイヤーが何を担い、市場側でどこまで設定できるかをわかりやすく整理します。
sidebar_label: プラットフォームレイヤー
---

# 🌍 プラットフォームレイヤー

Atlas プラットフォームは、4 つのコア要素と外部サービス群で構成されています。このページでは、各要素の役割と、市場側で設定できる範囲とできない範囲をわかりやすく整理します。

:::note Atlas 内での対象範囲
Atlas Wiki における **Byte 機能** の主対象は、Atlas の **Commerce + Portal** の全体像である **Byte Helium**、**Commerce Backend**、**Byte Portal**、**Byte Connect** です。Byte Portal の詳細な操作手順は引き続き [Admin Portal ガイド](/docs/admin-portal-guide/) で扱います。
:::

:::caution 重要な原則
Byte Helium は多くの画面を *表示* しますが、多くの内容を *所有* しているわけではありません。価格、適用可否、状態、コンテンツは主にバックエンドや外部サービス側にあります。アプリで何かが正しく見えない場合、多くはフロントエンドではなくバックエンド設定側に原因があります。
:::

---

## 各コア要素の責務

| 要素 | 役割 | 市場側で設定する内容 |
|---|---|---|
| **Atlas on Byte Helium** | KFC のグローバルフロントエンド。Yum! 共通のフロントエンド基盤の上に KFC ブランドを載せた顧客体験 | 市場ごとの挙動は設定で制御。市場ごとに別実装するものではありません |
| **Commerce Backend** | すべての注文処理を担当。価格、税、決済、POS 送信を実施。非 Byte POS 市場では Byte Connect が必要 | Portal 経由でプロモーション、税、決済ルーティングを設定 |
| **Byte Portal** | 市場チームと運用チーム向けの管理ツール | 営業時間、メニュー、プロモーション、税、決済、返金、ユーザーを設定 |
| **Byte Connect** | Byte Commerce と非 Byte POS 環境の間に入る中間統合レイヤー | 非 Byte POS 市場の注文フローに必要な市場 / ベンダー連携と統合準備 |
| **Menu Service** | 商品カタログ、価格、オプションを提供 | Byte Menu 作成ツール経由で設定（Atlas 外） |
| **Identity / SSO** | 顧客アカウントとサインインセッションを管理 | OTP、Google、Apple を市場ごとに設定 |
| **PSP / Vault** | カードのトークン化と決済確定を担当 | PSP プロファイルを Byte Portal で設定 |
| **Loyalty & Promo Engine** | オファー適用可否、特典、チャレンジを判定 | プロモーションを Byte Portal で作成 |
| **Order Tracking** | 配達状況のリアルタイム更新を提供 | 市場ごとに任意。3P ロジスティクス依存 |
| **POS / KDS** | 店舗内でデジタル注文を受信 | 市場 / ベンダーごとに連携設定。非 Byte POS 市場は Byte Connect 経由 |

---

## 各コア要素の詳細

### Byte Helium - フロントエンド

Byte Helium は、顧客向け Web とアプリの体験そのものです。Commerce Backend、Menu Service、CMS、各種外部サービスからデータを受け取り、顧客に見える UI として描画します。Byte Helium 自体は価格を計算せず、プロモーションの適用可否も判定せず、注文状態も保持しません。あくまで表示とオーケストレーションのレイヤーです。

### Commerce Backend

Commerce Backend は、すべての取引の中核エンジンです。顧客が商品をカートに入れると価格を計算し、クーポンコードを入力するとサーバー側で適用可否を確認し、支払い時には PSP を通じて決済処理を組み立てます。注文確定時には店舗内の POS / KDS へ注文を送信します。Byte POS 市場では直接連携し、非 Byte POS 市場では Byte Connect が市場 POS への必須ブリッジになります。Commerce Backend がなければ取引処理は成立しません。

:::note Byte POS に関する注意
Byte Commerce があらゆる市場 POS と直接つながる前提で考えないでください。サポートされる考え方は **Byte Commerce -> Byte POS**、または非 Byte POS 市場向けの **Byte Commerce -> Byte Connect -> POS** です。
:::

### Byte Portal - 管理コントロールプレーン

Byte Portal は、市場単位の設定が集約される場所です。市場チームはここで店舗（営業時間、状態、POS マッピング）、メニュー（公開済みメニューバージョンの割り当て、パッチ、価格上書き）、プロモーション（適用条件、コード、予算、対象範囲）、税プロファイル、決済ルーティング、ユーザー権限、運用設定を管理します。**Portal の設定が正しくなければ市場は本番稼働できません。**

### Byte Connect

Byte Connect は顧客向け UI でも主要な管理画面でもありませんが、市場 POS が Byte POS ではない場合は Atlas における Byte stack の一部です。Byte Commerce と市場 POS 環境の統合ブリッジとして機能し、その市場ではローンチ準備、注文ルーティング、サポート境界、トラブルシューティングの前提に入ります。

### Menu Service / Byte Menu

メニュー作成、商品説明、画像管理、価格やオプション設定といったメニューオーサリングは、Atlas とは別ツールである **Byte Menu** で行います。Byte Portal は、すでに公開済みのメニューバージョンを市場やチャネルへ割り当てます。公開済みメニューに対するパッチや上書きはできますが、メニューの元データをゼロから作成することはできません。

### 外部サービス

このプラットフォームは、市場ごとに統合される外部サービス群にも依存しています。顧客認証のための Identity/SSO、決済処理のための PSP、オファー判定用の Loyalty & Promo Engine、配達状況表示のための Order Tracking、ブランド / 法務コンテンツ用の CMS、店舗検索用の Geo / Store Locator などです。これらは市場ローンチ前に必ず設定と検証が必要です。

---

:::tip Wiki 内の関連ガイド
- Byte Portal での店舗設定とメニュー設定 → [Admin Portal ガイド: Stores](/docs/admin-portal-guide/stores/) と [Menus](/docs/admin-portal-guide/menus/)
- プロモーション設定 → [Admin Portal ガイド: Promotions](/docs/admin-portal-guide/promotions/)
:::
