---
title: コンテンツと法務
description: Atlas プラットフォームが、市場とロケールごとのブランドページ、FAQ、法務文書、Cookie 同意をどのように表示するかを説明します。
sidebar_label: コンテンツと法務
---

# コンテンツと法務

**何をするものか:** ブランドページ、FAQ、法務文書、Cookie 同意など、非トランザクション系コンテンツを市場 / ロケールごとに表示します。

**なぜ重要か:** 法務コンプライアンスとブランド信頼は、正確で最新かつローカライズされたコンテンツに依存します。Byte Helium は Byte Portal と CMS が提供する内容を表示するだけで、コンテンツ品質は市場側の責任です。

:::caution Byte Helium は表示のみ。内容の責任は市場側
このドメインの各ページはすべて Byte Helium の外側で管理されます。法務文書は Legal チームが Legal CMS で作成し、ブランドページと FAQ は CMS（Byte Portal 経由で利用）で作成します。Cookie カテゴリは CMP で設定します。内容が誤っている、または不足している場合、修正先はソースシステム側です。
:::

---

## 機能テーブル

| 機能 | 解決する課題 | 何をするか | 仕組み | 依存先 | 前提条件 | 制約 | 影響を受ける指標 |
|---|---|---|---|---|---|---|---|
| **ホームページ** | 顧客に入口体験が必要 | ローカライズ済みホームページに注目商品、プロモーション、コンテンツを表示する | CMS、Localisation、Promo の各コンテキストを組み合わせ、特集枠は CMS 設定で駆動する | CMS、Context service、Promo Engine | ローカライズ完了 | レイアウトと内容は Byte Portal / CMS 管理 | ホーム利用率、直帰率 |
| **About / Our History** | ブランドストーリーを見せたい | 静的なブランドページを表示する | slug と locale で CMS ページを取得し、CDN キャッシュで表示 | CMS / CDN | CMS に公開済み | 内容変更には CMS 公開が必要 | ページ閲覧数 |
| **栄養 / アレルゲンガイド** | 法規制と顧客期待に対応したい | 全商品の栄養値とアレルゲン情報を表示する | Nutrition index / detail を商品またはカテゴリ単位で取得する | Nutrition service | Byte Menu に栄養データ入力済み | データ精度は Byte Menu / 市場側責務 | ガイド利用率 |
| **利用規約** | T&C 表示は法的義務 | 顧客ロケール向けの最新利用規約を表示する | Legal CMS が locale と施行日付きバージョン文書を返す | Legal CMS | 市場ロケール向け T&C が公開済み | Byte Helium は表示のみ | T&C 同意率 |
| **プライバシーポリシー** | GDPR や各国データ法への対応 | ロケール向け最新プライバシーポリシーを表示する | Legal CMS のバージョン管理文書を表示する | Legal CMS | プライバシーポリシーが公開済み | 内容責任は Legal チーム | ポリシー閲覧率 |
| **Cookie 設定** | Cookie 法への対応 | Cookie カテゴリを表示し、顧客が同意を更新できるようにする | CMP ウィジェットを埋め込み、同意内容をタイムスタンプ付きで保存する | CMP | 市場で CMP が設定済み | カテゴリと法務文言は CMP 側で設定 | 同意取得率 |

---

## 技術ソース

<details>
<summary>📎 技術ソース: 法務ページ / CMS / Cookie 同意</summary>

- **FRD 参照:** FRD-HEL-070, FRD-HEL-074, FRD-HEL-075, FRD-HEL-076, FRD-HEL-071, FRD-HEL-072
- **TRD ドメイン:** コンテンツと法務ページ
- **主要インターフェース / API:** CMS Page List / Render、FAQ List / Search、Legal Docs List / Render、CMP Get / Update
- **データ契約:** Page（id、title、slug、locale、contentUrl）、LegalDoc（type、version、effectiveDate）、Consent（category、status、ts）
- **要点:**
  - CMS 描画 p95: 150ms 以下（CDN キャッシュ前提）
  - CMS 失敗（5xx）時はキャッシュ版へフォールバック
  - 法務文書は locale ごとに施行日でバージョン管理される
  - 同意設定は監査用に source と timestamp を保持
  - CMS / Legal API は加算的変更のみ、180 日の非推奨期間

</details>

---

:::tip Wiki 内の関連情報
- フロントエンドでのブランド系コンテンツ導線 → [Learn About KFC](/docs/frontend/customer-journey/learn-about-kfc/)
- ホームページと CMS コンテンツ管理 → [Contentful Guide](/docs/frontend/contentful/)
:::
