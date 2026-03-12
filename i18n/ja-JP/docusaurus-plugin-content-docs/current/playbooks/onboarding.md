---
title: プロモーションを作成する
sidebar_position: 1
---

# プロモーションを作成する

このプレイブックでは、KFC チームが Atlas 上でプロモーションを作成し、ストアグループへ割り当て、公開前チェックを完了するまでの流れを説明します。

**想定所要時間:** 設定自体は30〜60分、別途承認と QA 時間あり
**担当者:** Regional / BMU Admin、マーケティング運用担当、または Admin Portal にアクセスできるキャンペーンオーナー

---

## このプレイブックで扱う内容

このプレイブックは、KFC が次のようなケースで使います。

- Atlas 上で新しいデジタルオファーを立ち上げる
- 対象条件と割引ロジックを設定する
- 適切な店舗またはストアグループに割り当てる
- 公開前の基本 QA を完了する

Buy 1 Get 1 オファーを作成する場合は、専用 recipe page [レシピ 1 - Buy 1 Get 1 Free (BOGO)](/docs/playbooks/promotion-recipes/buy-1-get-1-free-bogo/) を使ってください。

## 事前準備

- 承認済みの KFC キャンペーン概要、オファー内容、日程、対象市場
- ローカルマーケティングチームで確定したプロモーション文言
- 対象店舗またはストアグループの確定
- Promotions と Store Groups にアクセスできる Admin Portal 権限

## ステップ1: プロモーション構成を確認する

Atlas で設定を始める前に、次を確認します。

- 割引タイプ
- 対象商品またはバンドル
- 開始日時と終了日時
- 自動適用かコード適用か
- 全店舗対象か、特定ストアグループ対象か

:::tip
KFC キャンペーンでは、アプリ、Web、アグリゲーター連携フローのどこで表示すべきかを、設定開始前に確認してください。
:::

## ステップ2: プロモーションの土台を作る

[Create a Promotion](/docs/admin-portal-guide/promotions/create-a-promotion/) を使って、プロモーションレコードを作成します。

この段階で設定する内容:

- 適切な promotion flow を選ぶ
- 社内管理用プロモーション名を設定する
- お客様向けの表示名を設定する
- KFC の運用チームとサポートチームが理解しやすい説明文を入れる

## ステップ3: 条件と効果を設定する

次を定義します。

- お客様が対象になる条件
- 条件成立時に適用される効果
- 上限、除外条件、適用期間

例:

- セット商品に対するパーセント割引
- 一定金額以上の購入で固定額割引
- 条件達成時に無料商品またはアップセル特典を付与

## ステップ4: 店舗に割り当てる

全店舗対象ではない場合、ストアグループ経由で割り当てます。

- 新しい対象グループが必要なら [Create a Store Group](/docs/admin-portal-guide/promotions/create-a-store-group/) を使う
- [Assign Promotions to Store Groups](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/) でプロモーションを紐づける
- 意図した KFC 店舗だけが対象になっているか確認する

## ステップ5: 公開前 QA

公開前に以下を確認します。

- 日時設定が正しいこと
- 対象商品で正しく割引が発動すること
- KFC の顧客導線上で割引表示が正しいこと
- 対象外商品では発動しないこと
- サポートチームが公開日と期待挙動を把握していること

## ステップ6: 公開後のモニタリング

公開後は次を確認します。

- 利用状況
- 他プロモとの意図しない重複適用
- ストアグループの適用範囲
- 店舗や顧客からの問い合わせ

変更が必要な場合は Atlas 上で即時更新し、キャンペーンオーナーへ共有します。

## 関連する Admin Portal Guide

- [Create a Promotion](/docs/admin-portal-guide/promotions/create-a-promotion/)
- [Edit a Promotion](/docs/admin-portal-guide/promotions/edit-a-promotion/)
- [Assign Promotions to Store Groups](/docs/admin-portal-guide/promotions/assign-promotions-to-store-groups/)
- [Create a Store Group](/docs/admin-portal-guide/promotions/create-a-store-group/)
- [View Promotions for a Store Group](/docs/admin-portal-guide/promotions/view-promotions-for-a-store-group/)

## KFC 向けメモ

- 市場、施策、日付が分かる命名規則を使う
- 公開前にローカル KFC マーケティング承認済み文言と一致していることを確認する
- 大規模施策は app と web の両方で事前 QA を行う
