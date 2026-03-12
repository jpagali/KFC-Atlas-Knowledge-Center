---
title: "ソーシャルサインイン"
sidebar_position: 6
---

# ソーシャルサインイン

## 機能概要

Social Sign In を使うと、顧客は Google、Facebook、Apple の既存アカウントを使って KFC に会員登録し、ログインできます。KFC 専用の別パスワードを新しく作る必要はありません。

顧客にとっては登録やログイン時の手間を減らせます。市場側にとっては、会員登録率の向上や、パスワード関連の問い合わせ削減につながります。

## 対応プロバイダー

| プロバイダー | Web | iOS | Android |
|---|---|---|---|
| Google | ✅ | ✅ | ✅ |
| Facebook | ✅ | ✅ | ✅ |
| Apple（Sign in with Apple） | ✅ | ✅ | ❌ Apple は Android では未対応 |

## 仕組み

顧客がソーシャルログインボタンを押すと、次の流れで処理されます。

1. Google、Facebook、Apple いずれかの認証画面へ遷移する
2. プロバイダーが本人確認を行い、認証トークンを返す
3. Atlas がそのトークンを使って、顧客の KFC アカウントを新規作成または取得する
4. 顧客がログイン状態になる

もし同じメールアドレスの KFC アカウントが既にある場合は、その既存アカウントにソーシャルログインが紐づきます。

## 市場での有効化

Social Sign In は、市場ごと、かつプロバイダーごとに設定されます。各プロバイダーは個別に有効化できるため、たとえば Google Sign In だけを有効にし、Facebook は無効のままにすることも可能です。

認証フローは市場設定内で次のように管理されます。

```js
authenticationOptions: {
  enabledFlows: {
    MagiclinkEmail: true,   // パスワードレスのメールログイン（通常は有効推奨）
    Google: true,
    Facebook: false,
    Apple: true,
  },
  primaryIdentifier: 'email',
}
```

## 対応プラットフォーム

| プラットフォーム | 対応状況 |
|---|---|
| iOS | ✅ |
| Android | ✅ |
| Web | ✅ |

:::note
Google One Tap Login は、Web で使える追加の利便機能です。自動でサインイン用オーバーレイを表示できます。ただしブラウザ設定によって抑制されることがあるため、通常の OAuth ボタンと併用する運用を推奨します。
:::
