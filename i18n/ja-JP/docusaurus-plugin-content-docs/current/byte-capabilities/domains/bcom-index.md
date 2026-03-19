---
title: Byte Commerce Backend の機能
description: KFC Atlas プラットフォームの注文処理エンジンである Byte Commerce Backend が担う機能をまとめています。
sidebar_label: 概要
---

# ⚙️ Byte Commerce Backend の機能

**Byte Commerce Backend** は、Atlas プラットフォーム上のあらゆる取引を支える中核エンジンです。顧客からは見えませんが、フロントエンドと店舗システムの間に入り、カート管理、価格計算、税計算、決済処理、注文状態、POS 送信、アグリゲーター注文の取り込みまでを統括します。

:::note Byte POS に関する注意
Byte Commerce は **Byte POS** とは直接接続します。市場が Byte POS を使っていない場合は、**Byte Connect** を Byte Commerce のオンボーディング構成に含める必要があります。これにより、**Byte Commerce -> Byte Connect -> POS** の経路で市場 POS と接続できます。
:::

Byte Helium 経由で行われるすべての注文は Commerce Backend で処理されます。顧客が見る価格はすべて Commerce Backend により計算され、支払いも Commerce Backend の決済オーケストレーターを通じて承認されます。

---

## Commerce Backend が担う領域

| ドメイン | 内容 |
|---|---|
| **注文とカートのライフサイクル** | カート作成、維持、価格計算、注文状態管理 |
| **メニュー反映、価格、税** | メニュー提供可否、動的価格、税計算、プロモーション適用 |
| **決済と返金** | 決済認証、売上確定、返金処理、PSP 連携 |
| **顧客アカウントと認証** | OIDC / OAuth2 ベースの ID、顧客プロフィール |
| **設定情報とロイヤルティ連携** | お気に入り、ロイヤルティ連携、同意記録 |
| **POS / KDS 連携** | 店舗システムへの注文送信、状態同期。非 Byte POS 市場では Byte Connect を使用 |
| **アグリゲーター連携（Byte Connect）** | Uber Eats、DoorDash などからの注文正規化 |
| **データ移行** | 旧システムからの顧客 / 注文履歴移行 |
| **可観測性** | ログ、トレース、ヘルス監視、メトリクス |

---

## 主要なデータ契約

以下は、Commerce Backend が Byte Helium、Byte Portal、POS システム、アグリゲーターとやり取りする際の、バージョン管理された API / イベントスキーマです。

| Contract ID | 内容 |
|---|---|
| DCI#BCOM-Cart-API-v1 | カート構造: 明細、合計、特典 |
| DCI#BCOM-Order-API-v1 | 注文レコード: 商品、状態、合計、冪等性キー |
| DCI#BCOM-Menu-Projection-v1 | 店舗 / チャネル向けに投影されたメニューデータ |
| DCI#BCOM-Pricing-API-v1 | 税内訳を含む価格計算リクエスト / レスポンス |
| DCI#BCOM-POS-Order-API-v1 | POS システムへ送る注文ペイロード |
| DCI#BCOM-KDS-Order-Event-v1 | 商品 / ステーション内訳を含む KDS チケットイベント |
| DCI#BCOM-Order-Status-Event-v1 | POS / KDS からのフルフィルメント状態更新 |
| DCI#BCOM-Aggregator-Order-API-v1 | 正規化されたアグリゲーター注文フォーマット |
| DCI#BCOM-Aggregator-Status-Event-v1 | アグリゲーターへ返す状態更新 |

---

:::tip 関連リンク
- 技術リファレンス全文 → [Commerce Backend Reference](/docs/byte-capabilities/reference/commerce-backend)
- オンボーディング時の注意点 → [Byte Connect](/docs/byte-capabilities/enablement/byte-connect)
:::
