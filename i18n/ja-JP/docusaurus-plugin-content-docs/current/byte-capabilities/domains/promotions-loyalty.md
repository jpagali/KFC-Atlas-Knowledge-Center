---
title: プロモーションとロイヤルティ
description: Atlas プラットフォームが、パーソナライズオファー、特典、チャレンジ、ロイヤルティアカウント連携をどのように扱うかを説明します。
sidebar_label: プロモーションとロイヤルティ
---

# プロモーションとロイヤルティ

**何をするものか:** パーソナライズオファーを提示し、特典を管理し、チャレンジ進捗を追跡し、顧客のロイヤルティアカウントを注文へ結び付けます。

**なぜ重要か:** ロイヤルティとプロモーションは、売上と継続利用の主要レバーです。オファーの誤表示や特典利用失敗は信頼を損ないます。このドメインは、発見から注文完了まで顧客導線全体をまたぎます。

:::caution 適用可否判定は常にサーバー側
Byte Helium がプロモーションや特典の適用可否を端末側で計算することはありません。判定はすべてサーバー上の Promo Engine が行います。オファーが見えているのに適用で失敗する場合、修正先は Byte Portal 上のプロモーション設定です。
:::

---

## 機能テーブル

| 機能 | 解決する課題 | 何をするか | 仕組み | 依存先 | 前提条件 | 制約 | 影響を受ける指標 |
|---|---|---|---|---|---|---|---|
| **ローカライズ済みオファー / 特典を表示** | 顧客が利用可能な特典を見つけたい | 市場とアカウントに応じたパーソナライズオファーページを表示する | Byte Helium が market + user context 付きで Promo Engine の offer feed を取得する | Promo Engine、Loyalty service | ローカライズ完了 | 非認証ユーザーは非パーソナライズ版のみ | オファーページ訪問数、クリック率 |
| **ロイヤルティ導入導線** | 新規顧客がプログラムを知らない | ロイヤルティプログラムを紹介し、登録へ誘導する | アプリ内導線が登録フローへ案内し、アカウント作成や注文後導線と連携 | Loyalty service | 顧客がサインイン済み | 市場でロイヤルティ有効化が必要 | ロイヤルティ登録率 |
| **ロイヤルティと特典へ登録** | 顧客がプログラムへ参加したい | 市場のロイヤルティプログラムへ登録する | Loyalty service に enrolment を送信し、ポイント残高を初期化する | Loyalty service | 顧客がサインイン済み | アカウントなしでは参加不可。ルールは市場ごとに異なる | ロイヤルティ会員率 |
| **ポイント残高表示** | 会員が残高を知りたい | 現在のポイント残高を表示する | Loyalty service が有効期限付き残高を返す | Loyalty service | 顧客がサインイン済みかつ登録済み | 残高精度は Loyalty service の同期依存 | ポイント閲覧率 |
| **すべての特典を表示** | 会員が利用可能な特典を一覧したい | 必要ポイント付きの特典カタログを表示する | Rewards feed を Loyalty service から取得する | Loyalty service | ロイヤルティ登録済み | 特典内容は市場ごとに異なる | 特典ページ閲覧数 |
| **特典を利用する** | 顧客が貯めたポイントを使いたい | ポイントを特典へ変換し、カートへ適用する | 冪等な redeem call により token を発行し、カートへ付与する | Loyalty service、Cart Service | 十分なポイント残高と有効なカート | 二重利用は 409 で防止。特典期限あり | 特典利用率 |
| **チャレンジ表示 / 達成** | ゲーミフィケーションで再訪を促したい | ボーナスポイントや特典につながるチャレンジを表示する | Loyalty / Gamification service がチャレンジ一覧と達成状態を返す | Loyalty / Gamification service | ロイヤルティ登録済み | 市場でチャレンジ設定が必要 | チャレンジ参加率 |
| **誕生日 / 登録特典付与** | トリガー型特典でエンゲージしたい | 特定日や登録時に自動で特典を付与する | Loyalty service が付与イベントを発火し、通知される | Loyalty service、Engagement platform | 登録済み。誕生日特典には DOB 登録が必要 | 有効トリガーは市場設定依存 | 特典付与率、付与後注文率 |
| **連絡設定の表示 / 管理** | 顧客がマーケティング設定を制御したい | メール、プッシュ、SMS の同意状態を更新する | CRM Prefs API を読み書きし、監査履歴を残して CMP と同期する | CRM、CMP、Push provider | 顧客がサインイン済み | チャネルは市場依存。監査履歴必須 | チャネル別許諾率 |
| **アプリ内メッセージ受信箱** | ブランドがアプリ内で顧客へ訴求したい | CRM キャンペーン由来のパーソナライズメッセージフィードを表示する | Engagement platform がページング付き feed を返し、ディープリンクも利用できる | Engagement platform | サインイン済み（パーソナライズ）、匿名（グローバル） | メッセージ鮮度は 60 秒以下 | 受信箱開封率、クリック率 |

---

## 技術ソース

<details>
<summary>📎 技術ソース: オファーフィード / 特典利用</summary>

- **FRD 参照:** FRD-HEL-019, FRD-HEL-020, FRD-HEL-021, FRD-HEL-026, FRD-HEL-031-044
- **TRD ドメイン:** プロモーションとロイヤルティ
- **主要インターフェース / API:** Offers Feed、Validate / Apply Promo、Rewards Feed / Detail、Redeem Reward、Challenges Feed / Complete、Comms Prefs Get / Update
- **データ契約:** Offer（id、title、eligibility、value）、Reward（id、cost、expiry）、Prefs（channel、status、timestamp）
- **要点:**
  - 適用可否判定は常にサーバー側
  - Offers feed p95: 200ms 以下、reward redemption p99: 99.8% 以上
  - Redemption は冪等で、409 時は元 token を返す
  - 期限切れオファー（410）は非表示化し、ユーザーへ通知
  - Promo / Loyalty API は加算的変更のみ、120 日の非推奨期間

</details>

---

:::tip Wiki 内の関連情報
- フロントエンドでのお得情報 / 特典導線 → [Find Deals and Rewards](/docs/frontend/customer-journey/find-deals-and-rewards/)
- Byte Portal でのプロモーション管理 → [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/) と [Store Groups](/docs/admin-portal-guide/store-groups/)
- 実務向け手順 → [Playbooks: Promotions Setup Guide](/docs/playbooks/promotions-setup-guide) と [Promotion Recipes](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo)
:::
