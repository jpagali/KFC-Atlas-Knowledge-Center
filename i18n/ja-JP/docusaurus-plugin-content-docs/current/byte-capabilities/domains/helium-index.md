---
title: Byte Helium の機能
description: KFC Atlas プラットフォームにおける Web とアプリのフロントエンド、Byte Helium が担う顧客向け機能をまとめています。
sidebar_label: 概要
---

# 🎨 Byte Helium の機能

**Byte Helium** は顧客向けフロントエンドです。すべての KFC 顧客が触れる Web とアプリ体験を担い、サインイン、メニュー閲覧、チェックアウト、支払い、注文後の追跡までをカバーします。

Byte Helium は、バックエンドが提供する情報を表示する役割を持ちます。価格、プロモーション適用可否、注文状態、コンテンツそのものは保持していません。これらはそれぞれ Commerce Backend、Promo Engine、CMS 側の責務です。Byte Helium の役割は、情報をわかりやすく提示し、顧客の操作意図を正しく受け取ることです。

---

## Byte Helium の機能ドメイン

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
| [注文追跡と履歴](/docs/byte-capabilities/domains/order-tracking) | リアルタイム配達追跡、注文履歴、レシート、再注文、お気に入り |
| [コンテンツと法務](/docs/byte-capabilities/domains/content-legal) | CMS ブランドページ、法務文書、Cookie 同意 |
| [エンゲージメントとメッセージング](/docs/byte-capabilities/domains/engagement) | アプリ内受信箱、プッシュ通知、メール通知設定 |

---

:::caution Byte Helium が保持しないもの
Byte Helium は表示を担当しますが、次の責務は持ちません。価格（Commerce Backend）、プロモーション適用可否（Promo Engine）、ロイヤルティポイント（Loyalty service）、決済確定（PSP）、メニューコンテンツ（Byte Menu）、法務コンテンツ（Legal CMS）、店舗状態（Byte Portal + POS）。責務の全体マップは [機能境界](/docs/byte-capabilities/enablement/capability-boundaries) を確認してください。
:::
