---
title: カート
description: Atlas プラットフォームが、チェックアウト前の選択商品、数量、特典、プロモーションをどのように管理するかを説明します。
sidebar_label: カート
---

# カート

**何をするものか:** 顧客がチェックアウトへ進む前に選択した商品、数量、特典、プロモーションを管理します。

**なぜ重要か:** カートの整合性は売上に直結します。価格誤り、カート状態の喪失、プロモーション適用失敗は、そのまま注文放棄につながります。

---

## 機能テーブル

| 機能 | 解決する課題 | 何をするか | 仕組み | 依存先 | 前提条件 | 制約 | 影響を受ける指標 |
|---|---|---|---|---|---|---|---|
| **商品をカートへ追加** | 顧客が注文を開始したい | 選択したメニュー商品とモディファイアをカートへ追加する | Byte Helium が Cart Service へ add-line リクエストを送り、追加時にバックエンドが価格を計算する | Cart Service、Menu Service | ローカライズと注文モードが設定済み | カートはセッション単位。セッション失効時はゲストカートが消える | カート追加率 |
| **カート行の更新 / 削除** | 顧客が内容を変更したい | 数量更新または商品削除を行う | Cart Service の更新 / 削除 API を呼び、合計を再計算する | Cart Service | 商品がすでにカートに入っている | リアルタイム再計算により価格変更が見える場合がある | カート変更率 |
| **プロモーションコードを適用** | 顧客がクーポンコードを持っている | カートに割引用のプロモーションコードを付与する | Byte Helium が Cart / Promo service へコードを送り、サーバー側で適用可否を判定し、カートを再計算する | Cart Service、Promo Engine | カートに商品があること。市場で有効なコードであること | 無効コードはエラー（400）を返すがカートは保持。コードは 1 つまでの市場設定あり | プロモーション利用率、割引率 |
| **特典をカートへ追加** | ロイヤルティ会員が特典を使いたい | ロイヤルティ特典（例: 無料商品）をカートへ付与する | Loyalty service で特典を検証し、reward token をカートへ紐づける | Loyalty service、Cart Service | 顧客がサインイン済みで Loyalty 登録済み | 期限切れ特典は不可。カートごとの特典種別数は市場設定依存 | 特典付与率 |
| **特典をカートから外す** | 顧客が特典利用をやめたい | カートから特典を切り離す | Loyalty service 上で特典を解除し、カート合計を更新する | Loyalty service、Cart Service | 特典がカートに入っている | 特典残高へ戻る | カート変更率 |

---

## 技術ソース

<details>
<summary>📎 技術ソース: 商品追加 / プロモーション適用</summary>

- **FRD 参照:** FRD-HEL-011, FRD-HEL-048
- **TRD ドメイン:** Cart
- **主要インターフェース / API:** Add / Update / Remove Line（App → Cart）、Apply / Remove Promo（App → Cart）
- **データ契約:** Cart（id、lines[]、totals、benefits[]）- 冪等操作
- **要点:**
  - すべてのカート操作は冪等であり、再試行しても安全
  - 価格精度は 100% が必要で、バックエンドのゴールデンテストで担保
  - 無効なプロモーション（400）はエラー表示のみで、カート状態は保持
  - Cart API は加算的変更のみ、90 日の非推奨期間あり
  - プロモーション適用可否は常にサーバー側判定で、Byte Helium では計算しない

</details>

---

:::tip Wiki 内の関連情報
- 顧客がカートをどう体験するか → [Order and Get: Cart](/docs/frontend/customer-journey/order-and-get/cart)
- プロモーションの作成と管理 → [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/) と [Promotion Recipes](/docs/playbooks/promotions-setup-guide)
:::
