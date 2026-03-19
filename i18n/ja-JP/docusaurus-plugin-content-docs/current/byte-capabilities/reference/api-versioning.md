---
title: API バージョニングと非推奨化
description: Atlas プラットフォーム API がどのようにバージョン管理され、破壊的変更の前に市場がどれだけ通知を受けるかを説明します。
sidebar_label: API バージョニング
---

# 🔗 API バージョニングと非推奨化リファレンス

> すべてのプラットフォーム API は Semantic Versioning を使います。破壊的変更には major version の更新が必要で、市場には非推奨期間の前に通知が行われます。

非推奨期間を理解することは、市場ローンチ計画において重要です。非推奨期間内に構築された連携は安全ですが、期間後は破壊的変更が適用される可能性があります。

---

## API ドメインごとの非推奨期間

| API ドメイン | 互換性ポリシー | 非推奨通知 |
|---|---|---|
| Identity | 後方互換のある minor 更新 | 90 日 |
| Context / Localisation | 後方互換のある minor 更新 | 90 日 |
| Menu | 後方互換のある minor 更新 | 120 日（市場で段階展開が必要） |
| Cart | 加算的変更のみ | 90 日 |
| Checkout Orchestrator | 加算的変更のみ | 120 日 |
| Payments / PSP | 加算的変更のみ | 180 日（スキーマ要件のため最長） |
| Promo / Loyalty | 加算的変更のみ | 120 日 |
| Donations / Tips | 加算的変更のみ | 90 日 |
| Orders / Tracking | 加算的変更のみ | 120 日 |
| CMS / Legal CMS | 加算的変更、locale / version 対応 | 180 日 |
| Engagement Platform | 加算的変更のみ | 120 日 |

---

## 補足

**Payments（180 日）** - プラットフォーム内で最長の非推奨期間です。決済スキーマ変更は PSP 連携、Vault token、コンプライアンス要件へ影響するため、市場調整に長い期間が必要です。

**CMS / Legal（180 日）** - 法務文書は locale ごとに施行日付きでバージョン管理されます。Legal CMS API の変更には、市場が新バージョンを採用する前に法務レビューも必要です。

**Menu（120 日）** - 市場では dev → staging → prod の段階展開を経て Menu API 変更を取り込むことが多いため、Cart や Identity より長めです。

**加算的変更のみ** - 新しいフィールドや endpoint は追加できても、既存フィールドや挙動は非推奨期間中に変更 / 削除しないことを意味します。
