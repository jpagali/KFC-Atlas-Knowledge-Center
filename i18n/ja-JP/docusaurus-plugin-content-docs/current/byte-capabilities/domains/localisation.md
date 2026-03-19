---
title: ローカライズと注文モード
description: プラットフォームが顧客の市場を判定し、言語を設定し、デリバリーか受取かを選ばせる流れを説明します。
sidebar_label: ローカライズと注文モード
---

# ローカライズと注文モード

**何をするものか:** 顧客の市場と言語を判定し、注文方法（デリバリー / 受取）を選ばせ、店舗または配達先住所を確定します。

**なぜ重要か:** この後の体験、つまりメニュー、価格、プロモーション、チェックアウトはすべて、市場コンテキストが最初に正しく確立されていることに依存します。ここを誤ると、間違ったメニューや価格が表示されたり、チェックアウトできなくなったりします。

---

## 機能テーブル

| 機能 | 解決する課題 | 何をするか | 仕組み | 依存先 | 前提条件 | 制約 | 影響を受ける指標 |
|---|---|---|---|---|---|---|---|
| **ローカライズ開始** | 顧客を適切な市場へ紐づける必要がある | geo-IP または明示選択で市場を判定し、ロケールを設定する | App が Config service を呼び利用可能市場を取得し、Geo service が位置情報から市場を判定する | Geo service、Config service、Context service | 市場が Byte Portal で設定済み | コンテキスト取得は p95 150ms 以下が必要。geo 制限で失敗する場合あり | ローカライズ成功率、離脱率 |
| **注文モード設定 - 受取** | 顧客が店舗受取を希望する | 受取店舗を検索し、選択できるようにする | 顧客が店舗選択 → store ID をセッションコンテキストへ保存 | Store Locator、Context service | 店舗が有効かつ営業中 | 閉店店舗や制限店舗では受取不可 | 受取注文率 |
| **注文モード設定 - デリバリー** | 顧客が配達を希望する | 配達先住所を入力し、配達範囲を確認する | 顧客が住所入力 → 配達範囲チェック → 対象ゾーン確定 | Geo service、Coverage service、Context service | 配達可能な店舗が存在すること | カバー店舗がない場合は対象外。市場ごとに条件が異なる | デリバリー注文率、カバー率 |
| **店舗検索（Store Locator）** | 最寄り店舗を見つけたい | 営業時間、距離、設備つきで店舗一覧 / 地図を表示する | Store Locator が位置情報を受け、店舗一覧と状態を返す | Store Locator、Maps provider、Store data | GPS 許可または手動住所入力 | 営業時間は Byte Portal、リアルタイム状態は正確である必要あり | Store Locator 利用率 |
| **保存済み住所の表示 / 編集** | 会員が配達先住所を再利用したい | 保存住所を表示し、編集 / 削除できるようにする | Address service から一覧取得し、更新内容を保存する | Address service | 顧客がサインイン済み | ゲスト利用不可 | 住所保存率、チェックアウト速度 |

---

## 技術ソース

<details>
<summary>📎 技術ソース: ローカライズ開始</summary>

- **FRD 参照:** FRD-HEL-005, FRD-HEL-082
- **TRD ドメイン:** ローカライズと注文モード
- **主要インターフェース / API:** Locale Config、Geo Resolve Market、Set Fulfilment Mode
- **データ契約:** Context（market、language、mode、storeId - 署名付きコンテキスト ID）
- **要点:**
  - Context はユーザー / 端末単位で保持され、改ざん防止のため署名される
  - 取得目標 p95: 150ms 以下
  - 配達範囲取得失敗（5xx）時は、エラーテレメトリを残しつつ受取モードを提案
  - Context API は後方互換のある minor 更新と 90 日の非推奨期間
  - 市場設定は Byte Portal / Shared Catalogues が管理

</details>

<details>
<summary>📎 技術ソース: 注文モード設定 - デリバリー</summary>

- **FRD 参照:** FRD-HEL-007
- **TRD ドメイン:** ローカライズと注文モード
- **主要インターフェース / API:** Set Fulfilment Mode、Coverage Check、Address Validate
- **データ契約:** Context（mode=delivery、storeId、coverageZoneId）
- **要点:**
  - 配達モード確定前に coverage check を実行
  - 圏外時は受取モードを代替案として提示
  - Context は署名付きでセッションを通じて保持
  - 配達追跡は市場依存で任意
  - 営業時間は Byte Portal Stores モジュールの設定精度が前提

</details>

---

:::tip Wiki 内の関連情報
- 顧客向けの店舗検索と注文モード導線 → [Find a Store](/docs/frontend/customer-journey/find-a-store/) と [Setup Order](/docs/frontend/customer-journey/setup-order/)
- Byte Portal での営業時間と配達範囲設定 → [Admin Portal Guide: Stores](/docs/admin-portal-guide/stores/)
:::
