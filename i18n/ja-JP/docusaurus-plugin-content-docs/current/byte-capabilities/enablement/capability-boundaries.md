---
title: 機能境界
description: Atlas プラットフォームで誰が何を担うのかを明確にするための参照表です。Byte Helium が何をし、何をしないかを整理します。
sidebar_label: 機能境界
---

# 🚫 機能境界

> この表は、*"Byte Helium で X はできるのか?"*、*"実際の責任者は誰か?"* に答えるためのものです。

責務を曖昧にしないための参照です。計画やスコーピングで最も多い誤りは、Byte Helium が実際には持っていない責務を持っていると誤解することです。迷ったらまずこの表を見てください。

---

## 責務テーブル

| 機能 | 担当 | 担当ではないもの | 補足 |
|---|---|---|---|
| 価格計算 | Commerce Backend | Byte Helium | Byte Helium は受け取った価格を表示するだけ |
| メニューコンテンツ作成 | Byte Menu（外部ツール） | Byte Portal、Byte Helium | Byte Portal は割当、Byte Helium は表示のみ |
| プロモ適用可否ロジック | Promo Engine（サーバー側） | Byte Helium | Byte Helium が端末側で判定することはない |
| ロイヤルティポイント計算 | Loyalty service | Byte Helium | Byte Helium は残高表示のみ |
| 決済処理 / 売上確定 | PSP（Vault 経由） | Byte Helium | Byte Helium は token 送信のみ |
| カード情報（PAN）処理 | PSP SDK | Byte Helium | SDK が取得し、Byte Helium へは入らない |
| 税計算 | Tax Engine / Commerce Backend | Byte Helium | 税率は Byte Portal で設定し、計算は checkout 時 |
| 住所検証 | Address service | Byte Helium | Byte Helium は Address service を呼ぶ |
| 店舗状態（open / closed） | Byte Portal + POS | Byte Helium | Byte Helium は Store service から読む |
| 営業時間 | Byte Portal（Stores） | Byte Helium | 設定は Byte Portal、表示は Byte Helium |
| 配達カバーゾーン | Byte Portal / Geo service | Byte Helium | デリバリーモード選択時に検証 |
| プッシュ通知配信 | Push provider（外部） | Byte Helium | Byte Helium は設定管理のみ |
| CMS コンテンツ作成 | CMS（Byte Portal 経由） | Byte Helium | Byte Portal が公開し、Byte Helium が表示 |
| 法務文書作成 | Legal team via Legal CMS | Byte Helium | Byte Helium は表示のみ |
| Cookie カテゴリ | CMP（市場設定） | Byte Helium | Byte Helium は CMP を描画する |
| アクワイアリング / 精算 | PSP | Byte Helium、Commerce Backend | Atlas の責務外 |
| POS / KDS 連携 | Commerce Backend + Portal | Byte Helium | Byte Helium は POS と直接つながらない。非 Byte POS 市場では Byte Connect が必要 |
| アグリゲーター注文取り込み | Byte Connect（Commerce Backend） | Byte Helium | Aggregator 注文は Commerce Backend 経由で入る |
| 監査ログ作成 | Byte Portal + 全サービス | 市場側の手動設定 | 監査はシステム生成で不変 |
| Feature flag のターゲティング | Byte Portal（Settings） | Byte Helium | Byte Helium は flag を尊重する側 |
| Webhook 配信保証 | Integration platform | 市場側 | at-least-once 配信。購読側に冪等性が必要 |

---

## 基本原則

Byte Helium は **表示とオーケストレーションのレイヤー** です。バックエンドサービスからデータを取得し、顧客へ表示し、顧客操作を受け取ってバックエンドへ渡します。状態を保持せず、計算せず、秘密情報も持ちません。

顧客から見ると「アプリの挙動」に見えるものの多くは、実際にはバックエンド側の判断を Byte Helium が提示しているだけです。これは設計上の意図であり、フロントエンドを再デプロイせずに設定変更で挙動を変えられるようにするためです。

:::note Byte POS に関する注意
Commerce Backend は **Byte POS** と直接つながる前提です。市場が Byte POS を使わない場合、**Byte Connect** を Byte Commerce と市場 POS のブリッジとして導入する必要があります。
:::

---

:::tip 関連リンク
- [現実チェック](/docs/byte-capabilities/enablement/reality-check) - ローンチを妨げる典型的な誤解
- [プラットフォームレイヤー](/docs/byte-capabilities/platform-layers) - 各レイヤーの役割を平易に整理
- [Byte Connect](/docs/byte-capabilities/enablement/byte-connect) - Byte Connect が必要な条件
:::
