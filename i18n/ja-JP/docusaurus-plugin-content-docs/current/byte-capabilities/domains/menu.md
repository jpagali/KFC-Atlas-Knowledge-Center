---
title: メニュー閲覧と PDP
description: Atlas プラットフォームが、ローカライズされたメニュー、商品詳細、モディファイア、栄養情報をどのように顧客へ見せるかを説明します。
sidebar_label: メニュー閲覧と PDP
---

# メニュー閲覧と PDP

**何をするものか:** 顧客の市場と選択店舗に応じたローカライズ済みメニューを表示し、商品詳細、モディファイア、栄養情報を提供します。

**なぜ重要か:** メニューは注文導線の入口です。すべての注文はここから始まります。メニューの正確性、速度、関連性は、カート追加率と平均注文額へ直結します。

:::caution Byte Helium はメニューを保持しない
Byte Helium は Menu Service から受け取ったメニューを表示するだけです。価格、商品説明、提供可否、モディファイアは **Byte Menu** で管理され、**Byte Portal** 経由で割り当てられます。メニュー内容に誤りがある場合、修正先は Byte Helium ではありません。
:::

---

## 機能テーブル

| 機能 | 解決する課題 | 何をするか | 仕組み | 依存先 | 前提条件 | 制約 | 影響を受ける指標 |
|---|---|---|---|---|---|---|---|
| **ローカライズ済みメニュー表示（PLP）** | 顧客が注文可能な内容を見たい | 選択店舗 / チャネルに応じた商品一覧ページを表示する | Byte Helium が store context 付きで Menu Service を呼び、カテゴリ / 商品一覧を取得して描画する | Menu Service、Context service | ローカライズ完了 | 価格は市場依存で Byte Helium の責務ではない。PLP p95 200ms 以下 | メニュー表示率、スクロール深度 |
| **商品詳細表示（PDP）** | 顧客が注文前に詳細を確認したい | 商品名、説明、画像、価格、モディファイア、栄養情報を表示する | Byte Helium が item ID と context で Menu Service を呼び、詳細を取得する | Menu Service | PLP が表示済みで、商品がメニューに存在する | オプションは context により変わる（例: 受取では表示されない商品） | PDP 閲覧率、モディファイア選択率 |
| **選択メニュー商品の変更** | 顧客が注文内容をカスタマイズしたい | サイズ変更、追加、具材除外、数量調整を可能にする | モディファイアを Menu Service から取得し、カート追加前に選択内容を保持する | Menu Service | Byte Menu で商品にモディファイアが設定済み | すべての商品がカスタマイズ可能とは限らない | モディファイア付与率 |
| **栄養 / アレルゲンガイド** | 顧客に食事情報が必要 | すべてのメニュー商品の栄養値とアレルゲン情報を表示する | 専用の Nutrition index / detail API から取得する | Nutrition service（via Menu） | Byte Menu で栄養データが入力済み | データ精度は Byte Menu / 市場側責務 | ガイド利用率 |
| **FAQ** | 顧客に注文以外の質問がある | 検索可能な FAQ ページを表示する | CMS API が市場ロケールの FAQ を返し、検索はクライアント側で実行する | CMS service | CMS で FAQ が作成済み | コンテンツ品質は CMS に公開された内容依存 | FAQ ページ閲覧数、検索回数 |
| **求人ボード表示** | KFC が採用チャネルとして Web / App を使う | 市場で募集している職種を表示する | ATS から CMS プロキシ経由で求人を取得する | ATS integration、CMS | 市場で ATS 連携が有効 | 求人データは Atlas 外管理 | 採用ページ閲覧数 |

---

## 技術ソース

<details>
<summary>📎 技術ソース: ローカライズ済みメニュー表示（PLP）</summary>

- **FRD 参照:** FRD-HEL-008
- **TRD ドメイン:** メニュー閲覧と PDP
- **主要インターフェース / API:** PLP Menu Feed（App → Menu）、PDP Item Detail（App → Menu）
- **データ契約:** MenuItem（id、name、price、options[] - 市場別価格）
- **要点:**
  - PLP は店舗 context とチャネルでフィルタされる
  - キャッシュ期限検知時はソフトリフレッシュを行い、ハードリロードはしない
  - PLP p95: 200ms 以下。キャッシュテレメトリを監視
  - 価格は市場依存で Commerce Backend 側責務。Byte Helium は表示のみ
  - Menu API は後方互換のある minor 更新と 120 日の非推奨期間

</details>

---

:::tip Wiki 内の関連情報
- 顧客がメニューを閲覧する流れ → [Find Products](/docs/frontend/customer-journey/find-products/)
- Byte Portal での商品 / モディファイア管理 → [Admin Portal Guide: Products](/docs/admin-portal-guide/products/) と [Menus](/docs/admin-portal-guide/menus/)
:::
