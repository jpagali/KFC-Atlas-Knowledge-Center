---
title: "Branch Deeplink"
sidebar_position: 3
---

# Branch Deeplink

## 機能概要

Branch Deeplink は、**Branch.io SDK** を使って Atlas プラットフォームのリンク機能を拡張する仕組みです。Branch は、モバイルアプリで広く使われている外部のディープリンクおよびアトリビューション基盤です。

KFC Universal Link がユーザーをアプリ内の特定画面へ誘導するのに対し、Branch はその上にさらに高度な制御を加えます。ユーザーが*どこから来たか*を追跡し、まだアプリを入れていないユーザー向けの deferred deep link を処理し、マーケティング施策とアプリインストールや注文実績を結びつける attribution データを提供します。

## 主な機能

| 機能 | 説明 |
|---|---|
| **Deferred deep linking** | ユーザーが Branch リンクをクリックし、その後アプリをインストールした場合でも、初回起動時に正しいアプリ内画面へ遷移できます |
| **Attribution** | どのキャンペーン、チャネル、クリエイティブがインストールやセッションにつながったかを計測できます |
| **Cross-platform routing** | 1つのリンクで iOS、Android、Web のフォールバック制御ができます |
| **Unified link management** | マーケティングチームがエンジニアリング対応なしで Branch ダッシュボードからディープリンクを管理できます |

## Universal Links との違い

KFC Universal Links と Branch Deeplinks は競合ではなく、補完関係にあります。

| | Universal Link | Branch Deeplink |
|---|---|---|
| **主な用途** | 直接ルーティング（アプリインストール済み） | アトリビューション + deferred linking |
| **アプリ未インストール時** | Web へフォールバック | App Store / Play Store へ誘導後、deferred deep link が可能 |
| **マーケティング計測** | なし | あり |
| **主な運用者** | エンジニアリング | マーケティング + エンジニアリング |

## 対応プラットフォーム

| プラットフォーム | 対応状況 |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Web | ✅（フォールバック） |
