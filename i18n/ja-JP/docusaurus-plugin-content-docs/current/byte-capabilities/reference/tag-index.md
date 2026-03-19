---
title: 機能タグ索引
description: すべてのプラットフォーム機能を、ドメイン、ジャーニー段階、ユーザー種別、市場依存度でタグ付けした検索用インデックスです。
sidebar_label: タグ索引
---

# 🔎 機能タグ索引

> 45 以上のプラットフォーム機能を 4 つの軸でタグ付けし、素早く絞り込みと探索ができるようにしています。

---

## タグ付けスキーマ

| タグ種別 | 値 |
|---|---|
| **ドメイン** | Identity · Localisation · Menu · Cart · Checkout · Payments · Promotions · Loyalty · Donations · Tracking · Content · Engagement · Portal |
| **ジャーニー段階** | Browse · Cart · Checkout · Post-Order · Account · Admin |
| **ユーザー種別** | Guest · Logged-in · Market-Admin · Ops-Admin |
| **市場依存度** | High · Medium · Low |

---

## マスタータグ参照

| 機能 | ドメイン | ジャーニー段階 | ユーザー種別 | 市場依存度 |
|---|---|---|---|---|
| メールでアカウント作成 | Identity | Account | Guest → Logged-in | Medium |
| メール + OTP でサインイン | Identity | Account | Guest → Logged-in | Medium |
| Google でサインイン / 登録 | Identity | Account | Guest → Logged-in | Medium |
| Apple でサインイン / 登録 | Identity | Account | Guest → Logged-in | Medium |
| プロフィール編集 | Identity | Account | Logged-in | Low |
| 連絡設定 | Identity, Promotions | Account | Logged-in | Medium |
| アカウント削除 | Identity | Account | Logged-in | High |
| ローカライズ開始 | Localisation | Browse | Guest + Logged-in | High |
| 注文モード設定 - 受取 | Localisation | Browse | Guest + Logged-in | High |
| 注文モード設定 - デリバリー | Localisation | Browse | Guest + Logged-in | High |
| 店舗検索 | Localisation | Browse | Guest + Logged-in | Medium |
| ローカライズ済みメニュー表示（PLP） | Menu | Browse | Guest + Logged-in | High |
| 商品詳細表示（PDP） | Menu | Browse | Guest + Logged-in | High |
| メニュー商品の変更 | Menu | Browse | Guest + Logged-in | Medium |
| 栄養 / アレルゲン | Menu | Browse | Guest + Logged-in | Medium |
| 商品をカートへ追加 | Cart | Cart | Guest + Logged-in | Medium |
| プロモコード適用 | Cart, Promotions | Cart | Guest + Logged-in | High |
| 特典の追加 / 削除 | Cart, Loyalty | Cart | Logged-in | High |
| ゲストチェックアウト | Checkout | Checkout | Guest | Medium |
| チェックアウト - デリバリー | Checkout | Checkout | Guest + Logged-in | High |
| チェックアウト - 受取 | Checkout | Checkout | Guest + Logged-in | High |
| 再注文 | Checkout, Tracking | Checkout | Logged-in | Medium |
| カードで支払う | Payments | Checkout | Guest + Logged-in | High |
| 保存済みカードで支払う | Payments | Checkout | Logged-in | High |
| バウチャー / 分割支払い | Payments | Checkout | Guest + Logged-in | High |
| バウチャー購入 / 利用 | Payments | Checkout | Guest + Logged-in | High |
| Add-Hope 寄付 | Donations | Checkout | Guest + Logged-in | High |
| 配達ドライバーチップ | Donations | Checkout | Guest + Logged-in | Medium |
| ロイヤルティ導入導線 | Loyalty | Account | Logged-in | High |
| ロイヤルティ登録 | Loyalty | Account | Logged-in | High |
| ポイント残高表示 | Loyalty | Account | Logged-in | High |
| オファー / 特典フィード | Promotions | Browse | Guest + Logged-in | High |
| 特典利用 | Promotions | Cart | Logged-in | High |
| チャレンジ | Promotions | Account | Logged-in | High |
| 配達追跡 | Tracking | Post-Order | Guest + Logged-in | High |
| 注文履歴 / レシート | Tracking | Post-Order | Logged-in | Medium |
| お気に入り注文 | Tracking | Post-Order | Logged-in | Medium |
| アプリ内メッセージ | Engagement | Browse | Logged-in | Medium |
| プッシュ通知設定 | Engagement | Account | Logged-in | Medium |
| ホームページ | Content | Browse | Guest + Logged-in | High |
| CMS ページ（About、FAQ など） | Content | Browse | Guest + Logged-in | Medium |
| 法務ページ（T&C、Privacy） | Content | Account | Guest + Logged-in | High |
| Cookie 設定 | Content | Account | Guest + Logged-in | High |
| ユーザーと権限 | Byte Portal | Admin | Market-Admin | High |
| 店舗設定 | Byte Portal | Admin | Market-Admin | High |
| メニュー割り当てとパッチ | Byte Portal | Admin | Market-Admin | High |
| プロモーション設定 | Byte Portal | Admin | Market-Admin | High |
| 税設定 | Byte Portal | Admin | Market-Admin | High |
| 決済設定 | Byte Portal | Admin | Market-Admin | High |
| 注文と返金（運用） | Byte Portal | Admin | Ops-Admin | High |
| Feature flags と設定 | Byte Portal | Admin | Market-Admin | High |
| レポートとエクスポート | Byte Portal | Admin | Market-Admin + Ops-Admin | Medium |
| 監査と可観測性 | Byte Portal | Admin | Market-Admin + Ops-Admin | Medium |
