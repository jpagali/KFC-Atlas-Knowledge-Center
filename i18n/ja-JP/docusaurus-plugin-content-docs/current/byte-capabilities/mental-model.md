---
title: プラットフォーム全体像
description: Byte Stack プラットフォームの階層、構造、アーキテクチャをわかりやすく説明します。
sidebar_label: 全体像
---

import ThemeSyncedIframe from '@site/src/components/ThemeSyncedIframe';

# 🧠 プラットフォーム全体像

このプラットフォームを理解するには、まず Atlas のプラットフォーム全体像を理解することが重要です。各要素が何を担当し、互いにどう関係しているかを把握するところから始まります。

:::note Atlas 内での対象範囲
Atlas Wiki で **Byte 機能** と言うとき、主な対象は Atlas の **Commerce + Portal** の全体像、つまり **Byte Helium**、**Commerce Backend**、**Byte Portal**、**Byte Connect** です。このセクションでは、それらがローンチと日常のプラットフォーム理解の中でどうつながるかを説明します。
:::

---

## Atlas のプラットフォーム全体像

Atlas の文脈では、**Byte Stack** は 4 つのつながった要素として捉えるのが最も分かりやすいです。

- **Atlas on Byte Helium**: Atlas は KFC のグローバルフロントエンドであり、その土台は Yum! のエンタープライズデザインシステム兼フロントエンド基盤である **Byte Helium** です。Helium が共通 UI 基盤を提供し、Atlas がその上に KFC ブランドと顧客体験を載せています。
- **Commerce Backend**: すべての注文を支える中核エンジンです。カート状態、価格計算、税計算、決済処理、POS 連携を担います。Byte POS を使う市場とは直接接続し、非 Byte POS 市場では Byte Connect を介して市場 POS へ接続します。顧客からは見えませんが、全体の要です。
- **Byte Portal**: 管理用コントロールプレーンです。市場チームと運用チームはここで店舗、メニュー、プロモーション、税、決済、ユーザー、コンテンツを設定します。
- **Byte Connect**: 市場 POS が Byte POS ではない場合に入る中間統合レイヤーです。Byte Commerce と市場 POS 環境をつなぐブリッジであり、非 Byte POS 市場のオンボーディングや注文ルーティングを理解するうえで重要です。

これらの要素は、**外部サービス** とも連携します。具体的には、Menu、Identity/SSO、PSP（決済）、Loyalty/Promos Engine、Order Tracking、CMS、Analytics です。

:::note Byte POS に関する注意
Byte Commerce があらゆる市場 POS と直接連携する、と思われがちですが、想定モデルはより限定的です。標準は **Byte Commerce -> Byte POS**、市場が Byte POS でない場合は **Byte Commerce -> Byte Connect -> POS** という経路になります。
:::

---

## プラットフォーム階層

以下のエクスプローラーでは、階層ビューとアーキテクチャビューを 1 つにまとめています。タブを切り替えることで、比較表示、階層のみ、アーキテクチャのみを確認できます。

<ThemeSyncedIframe
  src="/byte-stack-platform-explorer.html?locale=ja-JP"
  title="Byte Stack Platform Explorer"
  height={1480}
  messageType="byte-stack-platform-explorer-theme"
  heightMessageType="byte-stack-platform-explorer-height"
/>

---

## システムアーキテクチャ図

アーキテクチャビューは上の同じエクスプローラー内で利用できます。実行時の関係性やボックス単位の説明に集中したい場合は、`Architecture only` タブを開いてください。

---

:::tip 次に読む
各レイヤーが何を担い、市場側で何を設定できるかを知りたい場合は [プラットフォームレイヤー](/docs/byte-capabilities/platform-layers) を参照してください。
POS 連携時の注意点を確認したい場合は [Byte Connect](/docs/byte-capabilities/enablement/byte-connect) を参照してください。
:::
