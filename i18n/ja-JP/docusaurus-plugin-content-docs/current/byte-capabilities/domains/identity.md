---
title: Identity とサインイン
description: Atlas プラットフォームで、顧客がアカウント作成、サインイン、プロフィール管理、プライバシー設定をどのように行うかを説明します。
sidebar_label: Identity とサインイン
---

# Identity とサインイン

**何をするものか:** 顧客がアカウントを作成し、サインインし、プロフィールを管理し、プライバシー設定を制御する方法を扱います。

**なぜ重要か:** ロイヤルティ、注文履歴、保存済み住所、パーソナライズオファーはすべて、顧客が認証されていることを前提に成り立ちます。サインインしない場合、顧客はゲストチェックアウトしか使えず、特典、履歴、保存済み設定にはアクセスできません。

---

## 機能テーブル

| 機能 | 解決する課題 | 何をするか | 仕組み | 依存先 | 前提条件 | 制約 | 影響を受ける指標 |
|---|---|---|---|---|---|---|---|
| **メールでアカウント作成** | 新規顧客に登録手段が必要 | メールアドレスとワンタイム PIN で登録できるようにする | 顧客がメール入力 → OTP 受信 → 認証 → アカウント作成、セッショントークン発行 | Identity / SSO service、メール配信 | 市場でメールサービスが有効 | OTP は端末単位でレート制限あり | 登録転換率 |
| **メール + OTP でサインイン** | 既存顧客がアカウントへ入りたい | パスワードレスで OTP サインインする | 顧客がメール入力 → OTP 受信 → 認証 → セッション再開 | Identity / SSO service、メール配信 | アカウントが存在すること | OTP 試行回数制限とバックオフあり | ログイン成功率、セッション時間 |
| **Google でサインイン / 登録** | 顧客がソーシャルログインを好む | Google アカウントでワンタップ認証する | Google OAuth2 フロー → Identity service がトークン交換 → アカウント作成または連携 | Google OAuth、Identity / SSO | 市場で Google OAuth が有効 | Google アカウントが必要。市場ごとに有効化判断 | ソーシャルログイン利用率 |
| **Apple ID でサインイン / 登録** | iOS ユーザーが Apple サインインを期待する | iOS / macOS 顧客向けに Sign in with Apple を提供する | Apple OAuth フロー → トークン交換 → アカウント作成または連携 | Apple Sign-In、Identity / SSO | 市場ごとの Apple 開発者設定 | Apple 環境のみ。Apple アカウント必須 | iOS 登録率 |
| **プロフィール編集** | 顧客が自分の情報を更新したい | 氏名、生年月日、連絡先を更新できるようにする | Identity service へプロフィール更新し、CRM に保存する | Identity / SSO、CRM | 顧客がサインイン済み | 入力項目は市場設定で異なる | プロフィール入力完了率 |
| **連絡設定の表示と変更** | 顧客が連絡手段を制御したい | メール / プッシュ / SMS の許諾状態を表示・更新する | CRM から読込み、更新時に CMP 同期と監査ログを残す | CRM、CMP、Push provider | 顧客がサインイン済みで、市場で同意管理が有効 | 監査ログは必須 | メール / プッシュ許諾率 |
| **アカウント削除** | 顧客に削除権がある | 連携システム全体へアカウント削除要求を開始する | Identity へ削除リクエスト送信後、CRM、Loyalty へ連鎖する | Identity / SSO、CRM、Loyalty service | 顧客がサインイン済みで、保留注文がない | 削除反映に時間がかかる場合あり。ロイヤルティデータも削除 | 削除依頼率 |
| **サインアウト** | 顧客が安全にセッションを終了したい | セッションを終了し、トークンとプッシュ登録を削除する | Identity でセッション無効化し、プッシュトークン解除 | Identity / SSO、Push provider | 有効なセッション | なし | N/A |
| **利用規約 / プライバシーポリシー表示** | 顧客が同意内容を確認できる必要がある | 市場ロケールに対応した最新の法務文書を表示する | Legal CMS からバージョン管理済み文書を取得し、CDN キャッシュで表示 | Legal CMS、CMP | なし（ゲストも閲覧可） | 内容管理は Legal チーム | 法務コンプライアンス |
| **Cookie 同意設定** | 多くの市場で規制要件 | Cookie カテゴリを表示し、受諾 / 拒否を切り替える | CMP がウィジェット表示し、設定をタイムスタンプ付きで保存 | CMP | なし（ゲストも閲覧可） | 市場ごとに CMP カテゴリ設定が必要 | 同意取得率 |

---

## 技術ソース

<details>
<summary>📎 技術ソース: メールでアカウント作成</summary>

- **FRD 参照:** FRD-HEL-001
- **TRD ドメイン:** Identity とサインイン
- **主要インターフェース / API:** Auth Email、OTP Verify、Session Mint
- **データ契約:** Session（accessToken、refreshToken、expiry）
- **要点:**
  - OTP は Identity service で検証し、端末単位でレート制限（429 バックオフ）
  - セッショントークンは端末の安全なキーストアへ保存
  - 認証エンドポイント SLO: 月間 99.95% 可用性
  - 後方互換のある SemVer と 90 日の非推奨期間
  - すべてのログで PII マスキングを適用

</details>

<details>
<summary>📎 技術ソース: Google / Apple でサインイン</summary>

- **FRD 参照:** FRD-HEL-003, FRD-HEL-004, FRD-HEL-027-030
- **TRD ドメイン:** Identity とサインイン
- **主要インターフェース / API:** OAuth Google Callback、OAuth Apple Callback、Session Mint
- **データ契約:** Session（accessToken、refreshToken、expiry）
- **要点:**
  - OAuth2 フロー: IdP → Identity service → セッショントークン
  - 既存アカウントは連携、新規は同フローで作成
  - OAuth ペイロードに PAN や機微情報は含まれない
  - 両プロバイダーとも市場ごとに有効化可能
  - 90 日の API 非推奨期間

</details>

<details>
<summary>📎 技術ソース: アカウント削除</summary>

- **FRD 参照:** FRD-HEL-067
- **TRD ドメイン:** Identity とサインイン + CRM + Loyalty
- **主要インターフェース / API:** Account Delete Request / Status
- **データ契約:** アカウント削除リクエスト（userId、timestamp、status）
- **要点:**
  - GDPR 準拠の削除フローで、CRM と Loyalty へ連鎖
  - 削除は非同期で進み、ステータスはポーリングで確認可能
  - ロイヤルティ残高と履歴は完全削除
  - コンプライアンス用監査ログは匿名化して保持
  - 同じメールアドレスの再利用を一定期間ブロック可能

</details>

---

:::tip Wiki 内の関連情報
Identity ドメインは、Front-end Guide の [Access Account & Manage Profile](/docs/frontend/customer-journey/access-account-and-manage-profile/) にある顧客向けサインイン / アカウント導線に対応しています。
:::
