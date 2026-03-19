---
title: 注文追跡と履歴
description: Atlas プラットフォームが、配達状況、過去注文、再注文、レシート閲覧をどのように提供するかを説明します。
sidebar_label: 注文追跡と履歴
---

# 注文追跡と履歴

**何をするものか:** 顧客が配達状況を確認し、過去注文を見て、再注文し、レシートへアクセスできるようにします。

**なぜ重要か:** 注文後体験は NPS と再購入率に影響します。リアルタイム追跡は問い合わせ件数を減らし、注文履歴は再注文行動を生みます。

:::warning リアルタイム追跡は市場ごとに任意
ライブ GPS 配達追跡は、すべての市場で自動的に利用できるわけではありません。サードパーティ物流プロバイダーとの連携が必要です。これがない場合、顧客に見えるのは POS の注文状態（accepted / ready / completed）のみです。本番前に方針決定と設定が必要です。
:::

---

## 機能テーブル

| 機能 | 解決する課題 | 何をするか | 仕組み | 依存先 | 前提条件 | 制約 | 影響を受ける指標 |
|---|---|---|---|---|---|---|---|
| **デリバリー注文追跡** | 料理がいつ届くか知りたい | リアルタイム配達状況と到着予測を表示する | Tracking Gateway が配送イベントと ETA を返し、市場ごとにポーリングまたは push する | Order Tracking service、3P logistics | デリバリー注文済み | リアルタイム追跡は市場ごとに任意。なければ POS 状態へフォールバック | 追跡利用率、回避できた CS 問い合わせ数 |
| **配達注文受領表示** | 注文が受け付けられたことを確認したい | 注文確定画面と次の案内を表示する | Tracking の Delivery Confirm event を受けて描画 | Order Tracking service | 注文済み | N/A | 注文確認率 |
| **注文履歴表示** | 会員が過去注文を見たい | 日付、商品、合計つきで注文履歴一覧を返す | Orders service がページング付き一覧を返す | Orders service | 顧客がサインイン済み | ゲスト注文は履歴から見られない | 履歴利用率 |
| **注文詳細 / レシート表示** | 何を買っていくら払ったかを確認したい | 商品明細つきの注文詳細とレシートを表示する | 注文詳細取得後、Receipt service がレシートを生成し、CDN リンクを返す | Orders service、Receipt service | サインイン済みで注文完了していること | ゲスト注文はメールレシートのみ対応 | レシート閲覧率 |
| **再注文** | 以前の注文をもう一度買いたい | 過去注文の商品をカートへ戻してチェックアウトを始める | 過去注文を取得し、現行メニューにある商品を新カートへ追加する | Orders service、Cart Service、Menu Service | サインイン済みで過去注文が存在する | 現行メニューにない商品は警告つきで除外 | 再注文率 |
| **お気に入り注文** | 定番注文をすぐ使いたい | お気に入り注文構成を保存し、すぐ呼び出せるようにする | 顧客プロフィールへ保存し、必要時にカートへ再投入 | Orders service、Cart Service | 顧客がサインイン済み | アカウント連携機能でありゲスト不可 | お気に入り保存率、お気に入り再注文率 |

---

## 技術ソース

<details>
<summary>📎 技術ソース: 配達追跡 / 注文履歴</summary>

- **FRD 参照:** FRD-HEL-024, FRD-HEL-025, FRD-HEL-052-056
- **TRD ドメイン:** Order Tracking（Delivery）
- **主要インターフェース / API:** Order List、Order Detail、Delivery Events / ETA（poll / push）、Receipt Render
- **データ契約:** Order（id、status、items[]、totals）、DeliveryEvent（ts、type、eta）、Receipt（url、type、amount）
- **要点:**
  - 追跡可用性目標: 99.9%
  - リアルタイム追跡は市場依存で任意
  - イベント欠落時は POS 状態へフォールバックし、sequence ID をテレメトリ追跡
  - Order list p95: 200ms 以下
  - Orders / Tracking API は加算的変更のみ、120 日の非推奨期間

</details>

---

:::tip Wiki 内の関連情報
- フロントエンドでの配達追跡体験 → [Track Order: Delivery](/docs/frontend/customer-journey/track-order/delivery) と [Pickup](/docs/frontend/customer-journey/track-order/pickup)
:::
