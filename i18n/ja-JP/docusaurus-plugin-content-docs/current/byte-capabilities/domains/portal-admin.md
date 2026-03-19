---
title: Byte Portal - 管理と設定
description: 店舗、メニュー、プロモーション、税、決済などを含む、市場チームと運用チーム向けの完全なコントロールプレーンとして Byte Portal が何を担うかを説明します。
sidebar_label: Byte Portal - 管理と設定
---

# Byte Portal - 管理と設定

**何をするものか:** Byte Portal は市場チームと運用チームのためのコントロールプレーンです。店舗営業時間やメニューから、プロモーション、税、決済、返金まで、プラットフォーム設定の中心となります。

**なぜ重要か:** Byte Portal がなければ市場は本番ローンチできません。Byte Helium のあらゆる機能は、前提となる設定が Byte Portal で正しく構成されていることに依存します。Portal の設定ミスはそのまま顧客影響につながります。

:::danger Byte Portal はメニューを作成しない
メニュー作成（商品、説明、価格、オプションの作成）は **Byte Menu** という Atlas 外の別ツールで行います。Byte Portal は公開済みメニューを市場やチャネルへ割り当て、パッチや価格上書きを適用できますが、メニューをゼロから作ることはできません。
:::

---

## 機能テーブル

| 機能 | 解決する課題 | 何をするか | 仕組み | 依存先 | 前提条件 | 制約 | 影響を受ける指標 |
|---|---|---|---|---|---|---|---|
| **ユーザーと権限（RBAC）** | 市場チームに範囲付きアクセスが必要 | ユーザー招待、権限付与、市場 / グループ / 店舗単位のアクセス制御を行う | SSO + MFA 認証、ポリシーエンジン付き RBAC、Scope Guard による範囲外ブロック | Identity Provider、RBAC service、Audit store | 市場ごとの IdP 設定 | カスタム権限は承認済みアクションのみ | アクセス違反率、ユーザー追加時間 |
| **店舗とグループ設定** | 市場が店舗構成を管理したい | 店舗管理データ、グループ階層、営業時間、リアルタイム状態、スロットリングを管理する | 店舗は POS と連携し、グループは継承構造を定義し、営業時間はタイムゾーン対応 | POS integration、Shared Catalogues | 店舗データ投入済み | グループ階層に循環不可。状態は全チャネル共通のリアルタイム真実源 | 店舗データ精度、ダウンタイム件数 |
| **メニュー割り当てとパッチ** | 市場がどのメニューをどこで見せるか制御したい | 公開済みメニューを市場 / 店舗 / チャネルへ割り当て、パッチ、デイパート、上書きを適用する | Byte Portal が Byte Menu の公開版を取り込み、有効期間付き割当とパッチテンプレートを管理する | Byte Menu service、Menu Assignment engine | Byte Menu でメニュー公開済み | Byte Portal はメニューを作成しない。競合パッチはブロックされる | メニュー公開成功率 |
| **プロモーション設定** | マーケがオファーを作成 / 管理したい | 適用条件、特典、スケジュール、コード、予算つきプロモーションを作成する | 定義したプロモーションを Commerce Backend がチェックアウト時に評価する | Commerce Backend、Promo Engine | プロモーション設定完了 | 競合スタッキングはポリシーで解決。予算切れで自動停止 | プロモーション利用率、予算消化率 |
| **税設定** | 財務チームが正しい税率を設定したい | 市場ごとの税プロファイル、カテゴリ、税率、ルール、端数処理を定義する | 税プロファイルを市場へ割り当て、チェックアウト時に価格エンジンが適用する | Tax engine、Pricing service | 税プロファイル作成済み | 重複税率はブロック。現地法との整合が必要 | 税精度、監査合格率 |
| **決済設定** | 市場が支払い手段を構成したい | PSP プロファイル、支払い手段、ルーティング、追加料金、リスクルールを設定する | PSP 認証情報は Vault に保存し、ルーティングエンジンがチャネル / 市場ルールで判断する | PSP、Vault、Routing engine | PSP 契約と Vault 設定が完了 | 秘密情報は Byte Portal に露出しない | 決済手段可用性、ルーティングエラー率 |
| **注文と返金（運用）** | 運用チームが顧客課題へ対応したい | 注文検索（PII マスクあり）、返金、非金銭調整を管理する | 役割ベースの PII 制御つき注文検索、ポリシー検証つき返金処理、複数承認も可能 | Orders service、PSP、Audit store | 返金ポリシー設定済み | 上限、期限、承認ルールに従う。完全削除不可 | 返金処理時間、返金拒否率 |
| **ローカライズとコンテンツ管理** | 市場にローカライズ済みコンテンツが必要 | ロケール、翻訳キー、コンテンツブロック、告知、法務通知を管理する | ロケールごとに翻訳を保持し、対象範囲つきで配信する | CMS、Legal CMS、CMP | 市場でロケールが有効 | 欠落翻訳はデフォルトロケールへフォールバック | 翻訳カバレッジ、ロケール有効化率 |
| **機能フラグと設定** | 安全な段階展開が必要 | ターゲティング付き feature flag と設定階層を管理する | フラグは市場 / チャネル / セグメント単位で実行時評価、設定は global → env → market 継承 | Settings service、Feature flag engine | フラグ作成済み | 事故時は kill-switch または履歴からロールバック | フラグ利用率、設定エラー率 |
| **レポートとエクスポート** | チームがプラットフォームデータを取り出したい | レポート定義、ビュー保存、ファイル出力、定期配信を行う | Data warehouse をクエリし、エクスポートは非同期で生成して配信する | Data warehouse、Export engine | レポート定義と権限付与 | 大規模出力は非同期。RBAC で出力範囲を制御 | レポート利用率、出力成功率 |
| **Webhook と外部連携** | 外部システムがイベントを受け取りたい | プラットフォームイベントの購読を管理し、配信と DLQ を監視する | at-least-once 配信、HMAC / OAuth 署名、失敗イベントは DLQ へ送る | Integration / Event platform | イベント購読と endpoint 設定済み | exactly-once ではない。購読側に冪等性が必要 | Webhook 配信成功率、DLQ 件数 |
| **監査と可観測性** | コンプライアンスと運用の可視性が必要 | 誰が何をいつ行ったかを記録し、ヘルスチェックと SLO を監視する | 構造化監査イベント、アクセスログ、ヘルスチェック、アラート、SLO 管理 | Audit store、Observability platform | 監視設定済み | 監査ログは改ざん耐性があり、編集不可 | SLO 達成率、監査完全性 |

---

:::tip Wiki 内の関連情報
上記 Byte Portal 機能は、Admin Portal Guide の各セクションに対応しています。

- [Stores](/docs/admin-portal-guide/stores/) - 店舗とグループ設定
- [Menus](/docs/admin-portal-guide/menus/) と [Products](/docs/admin-portal-guide/products/) - メニュー割り当てとパッチ
- [Promotions](/docs/admin-portal-guide/promotions/) と [Store Groups](/docs/admin-portal-guide/store-groups/) - プロモーション設定
- [Bundles](/docs/admin-portal-guide/bundles/) - バンドルと選択肢管理
- [Agents](/docs/admin-portal-guide/agents/) - 自動化エージェント
- [Customer Support](/docs/admin-portal-guide/customer-support/) - 注文と返金
- [In-Store Devices](/docs/admin-portal-guide/in-store-devices/) - POS デバイス管理
:::
