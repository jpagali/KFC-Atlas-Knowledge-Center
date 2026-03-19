---
title: Commerce Backend リファレンス
description: Atlas Commerce Backend が何をし、どのドメインに分かれ、どのデータ契約を持つかを説明します。
sidebar_label: Commerce Backend
---

# 🗂 Commerce Backend - 機能リファレンス

> Commerce Backend は顧客からは見えませんが、フロントエンドと店舗システムの間で起こることをすべてオーケストレーションします。

---

## 何をするか

Commerce Backend は、Atlas プラットフォーム上のすべてのデジタル注文を処理するエンジンです。カート作成と維持、価格計算、税計算、決済認証と売上確定、注文状態管理、POS / KDS 送信、アグリゲーター注文取り込み、顧客アカウント連携を担います。

Byte Helium が注文処理を直接オーケストレーションすることはありません。Byte Helium は Commerce Backend へリクエストを送り、その結果を受け取ります。

:::note Byte POS に関する注意
Byte Commerce は **Byte POS** と直接通信するよう設計されています。市場が Byte POS を使っていない場合、**Byte Connect** が Byte Commerce と市場 POS のブリッジとして必要であり、Byte Commerce オンボーディングの一部として扱うべきです。
:::

---

## Commerce Backend ドメイン概要

| TRD ドメイン | 内容 | オーナー |
|---|---|---|
| Ordering & Cart Lifecycle | カート作成、維持、価格、注文状態管理 | Commerce Backend Product & Engineering |
| Menu Consumption, Pricing & Tax | メニュー提供可否、動的価格、税計算、プロモ適用 | Byte Menu & Pricing |
| Payments & Refunds | 決済認証、売上確定、返金、PSP 連携 | Commerce Backend Payments |
| Customer Accounts & Auth | OIDC / OAuth2 を使った認証と顧客プロフィール | Byte Customer Platform |
| Preferences & Loyalty Linking | お気に入り、ロイヤルティ連携、同意管理 | Customer Platform / Loyalty |
| POS / KDS Integration | 店舗システムへの注文送信、状態同期。非 Byte POS 市場では Byte Connect 経由 | Commerce Backend + Ops |
| Aggregator Integration | Uber Eats、DoorDash などからの正規化取り込み | Commerce Backend + Byte Connect |
| Data Migration | 旧顧客データと注文履歴の移行 | Migration Tooling / Customer Platform |
| Observability | ログ、トレース、ヘルス、メトリクス | Platform / SRE |

---

## Commerce Backend の主要データ契約

以下は、プラットフォーム内でサービス間通信を規定するバージョン付きデータ契約（DCI - Data Contracts & Interfaces）です。

| Contract ID | 内容 |
|---|---|
| DCI#BCOM-Cart-API-v1 | カート構造: lines、totals、benefits |
| DCI#BCOM-Order-API-v1 | 注文レコード: items、status、totals、idempotency key |
| DCI#BCOM-Menu-Projection-v1 | 店舗 / チャネル向けに投影されたメニューデータ |
| DCI#BCOM-Pricing-API-v1 | 税内訳を含む価格計算リクエスト / レスポンス |
| DCI#BCOM-POS-Order-API-v1 | POS システムへ送る注文ペイロード |
| DCI#BCOM-KDS-Order-Event-v1 | 商品 / ステーション内訳つき KDS チケットイベント |
| DCI#BCOM-Order-Status-Event-v1 | POS / KDS からのフルフィルメント状態更新 |
| DCI#BCOM-Aggregator-Order-API-v1 | 正規化されたアグリゲーター注文フォーマット |
| DCI#BCOM-Aggregator-Status-Event-v1 | アグリゲーターへ返す状態更新 |

---

*Source: Commerce Backend FRD/TRD Master Index, Commerce Backend Functional Requirements, Commerce Backend Technical Requirements, Commerce Backend TRD Domain Catalogue.*
