---
title: 用語集
description: Atlas / Byte Helium Knowledge Center 全体で使われる技術用語とプラットフォーム用語の定義です。
sidebar_label: 用語集
---

# 📋 プラットフォーム用語集

> Byte Capabilities ドキュメント全体で使われる用語の定義です。意味が曖昧なときはここから確認してください。

---

| 用語 | 定義 |
|---|---|
| **Byte Helium** | KFC 注文体験向けの顧客向け Web / App フロントエンド |
| **Commerce Backend** | 注文、価格、決済、POS 送信を処理するエンジン。非 Byte POS 市場では市場 POS とのブリッジに Byte Connect が必要 |
| **Byte Portal** | 市場チームと運用チームがプラットフォーム設定を行う管理 UI |
| **Byte Menu** | メニュー作成ツール。Atlas の外にあり、Byte Portal は公開済みメニューを割り当てる |
| **Byte Connect** | Byte Commerce が非 Byte POS 環境へ到達するための統合ブリッジ。アグリゲーター注文も Commerce Backend へ流し込む |
| **PSP** | Payment Service Provider。カードトークン化と決済確定を処理する |
| **Vault** | カード token や PSP 認証情報を安全に保存する領域 |
| **PLP** | Product Listing Page。メニュー一覧画面 |
| **PDP** | Product Detail Page。単一商品の詳細画面 |
| **OTP** | One-Time PIN。パスワードレスサインインに使う |
| **SSO** | Single Sign-On。集中認証サービス |
| **CMP** | Consent Management Platform。Cookie とマーケティング同意を管理する |
| **CRM** | Customer Relationship Management。顧客プロフィールと連絡設定を管理する |
| **KDS** | Kitchen Display System。店舗で注文を表示するキッチン画面 |
| **POS** | Point of Sale。店舗の注文管理システム。Byte Commerce は Byte POS と直接通信し、非 Byte POS 市場では Byte Connect を使う |
| **DCI** | Data Contracts & Interfaces。API / イベントスキーマのバージョン付き管理体系 |
| **RBAC** | Role-Based Access Control。Portal ユーザー権限の管理方式 |
| **Scope Guard** | Byte Portal のセキュリティ機構。UI / API の両方で範囲外アクセスを防ぐ |
| **Add-Hope** | KFC のグローバル慈善寄付プログラム。チェックアウト時に統合される |
| **Split Tender** | 2 種類の支払い手段で支払うこと。例: voucher + card |
| **Idempotency Key** | 再試行時に重複注文や重複決済を防ぐ一意 ID |
| **TRD** | Technical Requirements Document |
| **FRD** | Functional Requirements Document |
| **SLO** | Service Level Objective。システムの性能目標 |
| **DLQ** | Dead Letter Queue。失敗した webhook イベントを保持するキュー |
| **3DS** | 3D Secure。不正防止のためのカード認証プロトコル |
| **Byte** | KFC 全体の e-commerce プログラム名 |
| **Atlas** | KFC のグローバルデジタル注文システムのプロジェクト / プラットフォーム名 |
| **Context** | 顧客の市場、言語、注文モード、店舗を保持するプラットフォーム記録 |
| **BCOM** | Commerce Backend の短縮表記 |
| **Patch** | 公開済みメニューへ重ねるメニュー上書き。価格や提供可否変更に使う |
| **Store Group** | Byte Portal 上で店舗を束ねる論理グループ。メニュー割当、プロモスコープ、税継承に使う |
| **Coverage Zone** | 配達可能住所を決める地理的範囲 |
| **Feature Flag** | 再デプロイなしで市場、チャネル、顧客セグメントごとに機能を ON / OFF する実行時トグル |
| **Aggregator** | Uber Eats や DoorDash など、Byte Connect 経由で Commerce Backend へ注文を送る外部配達プラットフォーム |
