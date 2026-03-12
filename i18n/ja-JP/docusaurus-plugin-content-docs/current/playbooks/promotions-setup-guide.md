---
title: プロモーション設定ガイド
sidebar_label: プロモーション設定ガイド
---

# プロモーション設定ガイド

このガイドは、**Byte Commerce Admin Portal** でプロモーションを設計・設定する際の実務向けリファレンスです。ウィザードの各ステップで何を決めるべきか、どの項目をどう使い分けるべきか、KFC の運用目線で整理しています。

:::note
プロモーションは常に **Store Group** に割り当てます。単一店舗へ直接割り当てるものではありません。設定前に、対象店舗が正しい **Store Group** にまとまっていることを確認してください。
:::

:::note
このガイドのスクリーンショットは更新中です。現時点では、以下の文章による説明を正しいガイドとして参照してください。
:::

## What You Can Build

The Atlas promotions engine supports the following promotion types out of the box:

| Promotion Type | How It Works |
|---|---|
| **Percentage Discount** | 商品単体、商品グループ、または注文全体に対して X% 割引を適用します |
| **Fixed Amount Off** | カート全体または対象商品の価格から固定金額を差し引きます |
| **Fixed Price** | 対象商品を特定価格に設定します（例: `$5 burgers`） |
| **Buy One Get One (BOGO)** | 対象商品の存在を条件に、2つ目の商品へ `100% discount` または `fixed price` を適用します |
| **Minimum Spend Discount** | カートの小計が一定金額に達した時だけ割引を発火させます |
| **Channel-Exclusive Deal** | 特定の注文チャネルだけにプロモーションを限定します（例: app-only、delivery-only） |
| **Time-Limited Promotion** | 特定の日付、曜日、時間帯だけオファーを有効にします |
| **Occasion-Specific Deal** | 特定の受け取り種別だけにプロモーションを限定します（例: Drive Thru only、Delivery only） |
| **Free Delivery / Fee Waiver** | 配送料、サービス料、規制関連手数料を割引または無料化します |
| **Loyalty Member Discount** | 登録済み会員だけが使えるように制限します |
| **Coupon Code Promotion** | お客様が redemption code を入力した時だけオファーを使えるようにします |
| **Manager Override Discount** | POS 上で manager の PIN または署名が必要な割引として設定します |
| **Serialised / Unique Codes** | 顧客ごとに一意の one-time-use redemption code を発行します |

## Recipe Pages

よくある KFC プロモーションは、以下の専用 recipe page から開始できます。

- [レシピ 1 - Buy 1 Get 1 Free (BOGO)](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo/)
- [最低購入金額割引](/docs/playbooks/promotion-recipes/minimum-spend-discount/)
- [レシピ 3 - App-Exclusive Deal](/docs/playbooks/promotion-recipes/app-exclusive-deal/)
- [レシピ 4 - Lunch Special (Time-Limited)](/docs/playbooks/promotion-recipes/lunch-special-time-limited/)
- [レシピ 5 - Free Delivery on Large Orders](/docs/playbooks/promotion-recipes/free-delivery-on-large-orders/)
- [レシピ 6 - Registered Customer Exclusive](/docs/playbooks/promotion-recipes/registered-customer-exclusive/)
- [レシピ 7 - Coupon Code Discount](/docs/playbooks/promotion-recipes/coupon-code-discount/)
- [レシピ 8 - Drive-Thru Only Deal](/docs/playbooks/promotion-recipes/drive-thru-only-deal/)
- [レシピ 9 - Daily Deal (Once Per Customer Per Day)](/docs/playbooks/promotion-recipes/daily-deal-once-per-customer-per-day/)
- [レシピ 10 - Stacked Multi-Condition Promotion](/docs/playbooks/promotion-recipes/stacked-multi-condition-promotion/)

## 全体の流れ

プロモーション作成は、基本的に次の 4 ステップで進みます。

1. **Basic Information**
2. **Requirements**
3. **Effects**
4. **Review**

最後の **Review** で内容を見直し、必要であれば前のステップへ戻って修正します。

## Step 1: Basic Information

このステップでは、プロモーションの基本情報を設定します。ここで決める内容は、主に「このプロモーションが何か」「どう発火するか」「どこまで割引を許容するか」です。

### 主要フィールド

| Field | 説明 |
|---|---|
| **Promotion Name** | 管理者向けの内部名称です。お客様には表示されません。例: `BOGO Zinger - May 2024` |
| **Display Name** | お客様向けに表示するプロモーション名です。短く、内容がすぐ伝わる表現にします |
| **Description** | お客様に見せる説明文です |
| **Combinable with other Promotions** | 他のプロモーションと併用可能にするかを決めます |
| **Max Promo Uses Per Cart** | 1つのカート内で何回まで適用できるかを制御します |
| **Max Total Promotion Amount** | 1つの注文で許容する最大割引額を設定します |

### Automatic と Redemption Code

- **Automatic: Yes**  
  条件を満たした時点で自動発火します。コード入力は不要です。
- **Automatic: No**  
  お客様が **Redemption Code** を入力した時だけ発火します。

:::caution
一度 **Automatic** を `Yes` に切り替えると、追加済みの **Redemption Code** が削除されることがあります。コード施策を行う場合は、設定順に注意してください。
:::

### Additional Options

必要に応じて、次のような補助項目も設定できます。

| Field | 説明 |
|---|---|
| **Legal Text** | 利用条件や法務文言を表示したい場合に使います |
| **Reporting Code** | レポーティングや外部分析で識別しやすくするための内部コードです |
| **Catalog Tags** | 管理・連携用のタグです |
| **Display POS Button** | POS 上にショートカットとして表示するかを制御します |
| **Public** | Web / App など顧客向けチャネルに表示可能にするかを制御します |

## Step 2: Requirements

**Requirements** は、プロモーションが発火するための条件です。複数追加した場合は、基本的にすべての条件を満たす必要があります。

### よく使う Requirement

| Requirement | どんな時に使うか |
|---|---|
| **Channel** | Web / App / POS / aggregator など特定チャネルだけに出したい時 |
| **Item Presence** | 対象商品がカートに入っていることを条件にしたい時 |
| **Item Quantity** | 商品点数ベースで条件を作りたい時 |
| **Subtotal** | 最低購入金額条件を設定したい時 |
| **Occasion** | Delivery / Dine In / Drive Thru など受け取り条件で分けたい時 |
| **Time Frame** | 曜日・時間帯・日付で制限したい時 |
| **User Status** | 会員種別やユーザー状態で出し分けたい時 |
| **Manager Approval** | POS 上で管理者承認を必要にしたい時 |

### KFC でよくある使い方

- アプリ限定オファー
- 特定商品の Buy One Get One
- `Spend $X and get $Y off`
- Delivery 限定の割引
- ランチ時間帯限定プロモーション

## Step 3: Effects

**Effects** は、条件を満たしたときに「何を適用するか」を定義するステップです。割引の考え方そのものをここで決めます。

### 主な Effect パターン

| Effect | 説明 |
|---|---|
| **Order Level** | カート全体に対して割引をかけます |
| **Item Level** | 特定商品または対象商品に割引をかけます |
| **Fixed Price** | 商品価格を特定価格に上書きします |
| **Percentage Discount** | パーセンテージで値引きします |
| **Amount Off** | 固定金額を差し引きます |
| **Fees Discount** | 配送料・手数料を割引または無料化します |

### ここで特に確認したいこと

- 割引対象がベース商品なのか特典商品なのか
- 税計算にどう影響するか
- Modifier や Bundle に意図しない影響が出ないか
- 対象チャネルで期待どおりに表示されるか

## Step 4: Review

最後に、設定内容全体を見直してから **Create** します。

公開前には少なくとも次を確認してください。

1. **Promotion Name** と **Display Name** が正しい
2. **Requirements** が意図どおりになっている
3. **Effects** が意図どおりになっている
4. 対象の **Store Group** が正しい
5. 他オファーとの重複適用が問題ない

## KFC でよくあるユースケース

### Buy One Get One

- **Requirement**: **Item Presence**
- **Effect**: `100% discount` または `Fixed Price` を 2 つ目の商品に適用

### 最低購入金額割引

- **Requirement**: **Subtotal**
- **Effect**: **Amount Off**

### アプリ限定プロモーション

- **Requirement**: **Channel**
- **Effect**: 商品単位または注文単位の割引

### 配送料無料

- **Requirement**: **Subtotal** または **Channel**
- **Effect**: **Fees Discount**

## このガイドが向いている人

このガイドは主に次の人向けです。

- Regional / BMU Admin
- キャンペーン運用担当
- Enablement / support team
- プロモーション設計のレビュー担当

## 関連ガイド

- [プロモーションを作成する](/docs/playbooks/onboarding/)
- [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/)
