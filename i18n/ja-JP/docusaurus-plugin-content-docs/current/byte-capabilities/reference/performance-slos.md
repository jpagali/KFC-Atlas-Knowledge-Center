---
title: パフォーマンス SLO
description: Atlas / Byte Helium プラットフォーム全体の SLO と性能目標を素早く確認するためのリファレンスです。
sidebar_label: パフォーマンス SLO
---

# 📐 パフォーマンス SLO

> プラットフォーム全体の SLO と性能目標のクイックリファレンスです。各サービスがどの水準を求められているかを把握し、ローンチ計画やエスカレーション時の期待値合わせに使ってください。

---

## プラットフォーム性能目標

| ドメイン / サービス | 指標 | 目標 |
|---|---|---|
| Identity - 認証エンドポイント | 可用性 | 月間 99.95% |
| Localisation - Context 取得 | p95 レイテンシ | 150ms 以下 |
| Menu - PLP | p95 レイテンシ | 200ms 以下 |
| CMS コンテンツ表示 | p95 レイテンシ | 150ms 以下（CDN キャッシュ） |
| Offers feed | p95 レイテンシ | 200ms 以下 |
| Order list | p95 レイテンシ | 200ms 以下 |
| Checkout submit | p99 成功率 | 99.5% 以上 |
| Payment auth capture | 成功率 | 99.5% 以上 |
| Loyalty reward redemption | p99 成功率 | 99.8% 以上 |
| Order tracking | 可用性 | 99.9% |
| In-app message feed freshness | 最大 stale 時間 | 60 秒以下 |
| Byte Portal user / role queries | p95 レイテンシ | 500ms 以下 |

---

## 補足

**Checkout submit（p99 成功率 99.5% 以上）** - 冪等性キーにより、再送しても重複注文を作りません。再送時の 409 は元の orderRef を返します。

**Loyalty reward redemption（p99 成功率 99.8% 以上）** - プラットフォーム内でも最も厳しい成功 SLO です。特典利用失敗は売上と信頼の両方に影響するためです。

**In-app message freshness（60 秒以下）** - フィードは 60 秒を超えると stale と見なされ、pull-to-refresh が必要になります。

**CMS render（CDN キャッシュで 150ms 以下）** - CDN キャッシュミス時も、ライブ取得失敗よりキャッシュ版フォールバックを優先します。

---

:::tip 関連リンク
- [API バージョニングと非推奨化](/docs/byte-capabilities/reference/api-versioning) - 計画へ影響する非推奨期間
:::
