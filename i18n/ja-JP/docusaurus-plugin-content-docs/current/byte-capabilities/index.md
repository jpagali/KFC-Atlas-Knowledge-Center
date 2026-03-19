---
title: Byte 機能
description: ここから開始します。KFC Atlas / Byte Helium プラットフォームが何を行い、どう動作し、本番ローンチ前に各市場が何を理解しておくべきかをまとめています。
sidebar_label: はじめに
---

# 🧩 Byte 機能

> **対象読者:** 市場展開チーム、ローンチチーム、プロダクトマネージャー、部門横断ステークホルダー
> **目的:** Atlas / Byte Helium プラットフォームが何を行い、どのように構成され、本番ローンチに何が必要かをまとめた単一の参照先

このセクションは、運用ガイドとは意図的に分けてあります。[フロントエンドガイド](/docs/frontend/overview) と [Admin Portal ガイド](/docs/admin-portal-guide/) はプラットフォームの *運用方法* を説明します。一方で Byte 機能は、*プラットフォームが何であり、何ができるか* を説明します。

---

## このセクションの使い方

| したいこと | 参照先 |
|---|---|
| 5分でプラットフォーム全体を理解したい | [全体像](/docs/byte-capabilities/mental-model) |
| 各レイヤー（Byte Helium / Byte Commerce Backend / Byte Portal）の役割を知りたい | [プラットフォームレイヤー](/docs/byte-capabilities/platform-layers) |
| 特定の機能を探したい | [ドメイン](/docs/byte-capabilities/domains/identity) から該当分野を選択 |
| 何ができて何ができないかを知りたい | [機能境界](/docs/byte-capabilities/enablement/capability-boundaries) |
| 市場ローンチの準備を進めたい | [現実チェック](/docs/byte-capabilities/enablement/reality-check) |
| Go / No-Go 用のチェックリストが欲しい | [市場ローンチチェックリスト](/docs/byte-capabilities/enablement/market-launch-checklist) |
| 技術用語を調べたい | [用語集](/docs/byte-capabilities/reference/glossary) |
| パフォーマンス SLO を確認したい | [パフォーマンス SLO](/docs/byte-capabilities/reference/performance-slos) |

---

## プラットフォームを一段落で説明すると

**KFC Atlas** は、相互に依存する 3 つのレイヤーで構成されたグローバルなデジタル注文プラットフォームです。**Byte Helium** は顧客が見る Web とアプリのフロントエンドです。**Commerce Backend** は、価格計算、税計算、決済ルーティング、店舗システムへの注文送信を担う中核エンジンです。**Byte Portal** は、各市場や運用チームが店舗、メニュー、プロモーション、税、決済、ユーザーを設定するための管理プレーンです。

これら 3 つのレイヤーは、Menu、Identity/SSO、PSP（決済）、Loyalty/Promos、Order Tracking、CMS、Analytics といった外部サービス群に依存しています。これらの連携を理解することが、あらゆるローンチ判断と日常運用の土台になります。

---

## 12 の機能ドメイン

このプラットフォームは 12 の機能ドメインに整理されています。各ドメインには、機能一覧、仕組み、依存関係、制約、関連 Wiki ガイドへのリンクをまとめた専用ページがあります。

| ドメイン | 対象範囲 |
|---|---|
| [Identity とサインイン](/docs/byte-capabilities/domains/identity) | アカウント作成、OTP サインイン、Google / Apple OAuth、プロフィール、プライバシー |
| [ローカライズと注文モード](/docs/byte-capabilities/domains/localisation) | 市場判定、デリバリーと受取モード、店舗検索 |
| [メニュー閲覧と PDP](/docs/byte-capabilities/domains/menu) | 商品一覧、商品詳細、モディファイア、栄養情報、アレルゲン |
| [カート](/docs/byte-capabilities/domains/cart) | 商品の追加、更新、削除、クーポン適用、ロイヤルティ特典の反映 |
| [チェックアウト](/docs/byte-capabilities/domains/checkout) | ゲストチェックアウト、会員チェックアウト、デリバリーと受取の分岐 |
| [決済と支払い手段](/docs/byte-capabilities/domains/payments) | クレジットカード、保存済みカード、バウチャー、分割支払い、ギフトカード |
| [プロモーションとロイヤルティ](/docs/byte-capabilities/domains/promotions-loyalty) | オファーフィード、特典、チャレンジ、ロイヤルティ導線、配信設定 |
| [寄付とチップ](/docs/byte-capabilities/domains/donations-tips) | Add Hope 寄付、配達ドライバーチップ |
| [注文追跡と履歴](/docs/byte-capabilities/domains/order-tracking) | リアルタイム追跡、注文履歴、レシート、再注文、お気に入り |
| [コンテンツと法務](/docs/byte-capabilities/domains/content-legal) | CMS ページ、法務文書、Cookie 同意 |
| [エンゲージメントとメッセージング](/docs/byte-capabilities/domains/engagement) | アプリ内受信箱、プッシュ通知、メール通知設定 |
| [Portal - 管理と設定](/docs/byte-capabilities/domains/portal-admin) | RBAC、店舗、メニュー、プロモーション、税、決済、レポート、監査 |

---

## このセクションで扱わないこと

このセクションは意図的に概念説明に絞っています。実際の操作手順を確認したい場合は、該当する運用ガイドを参照してください。

- 店舗設定や店舗管理の手順 → [Admin Portal ガイド: Stores](/docs/admin-portal-guide/stores/)
- プロモーションの作成と設定方法 → [Admin Portal ガイド: Promotions](/docs/admin-portal-guide/promotions/)
- キャンペーン運用の実務フロー → [プレイブック](/docs/playbooks/onboarding)
- 顧客が体験するフロントエンドの流れ → [フロントエンドガイド](/docs/frontend/overview)
