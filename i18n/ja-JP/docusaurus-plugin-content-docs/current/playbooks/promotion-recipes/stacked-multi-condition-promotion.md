---
title: 複合条件プロモーション
sidebar_label: 複合条件プロモーション
---

# 複合条件プロモーション

## 目的

週末限定で、アプリ利用かつ登録済みユーザーに対し、$25 以上の注文で 10% オフを適用する施策です。

## Requirements

以下の条件をすべて満たす必要があります。

| Area | Field | Value |
|---|---|---|
| **Channel** | **Select Channels** | `Mobile`, `iOS`, `Android` |
| **User Status** | **Is Registered Customer?** | `Yes` |
| **Subtotal** | **Minimum Subtotal** | `$25.00` |
| **Time Frame** | **Day Range** | `Sa Su` |
| **Time Frame** | **Interval Start Time** | `00:00:00` |
| **Time Frame** | **Interval End Time** | `23:59:59` |

## Effects

| Area | Field | Value |
|---|---|---|
| **Order Level** | **Pricing Effect Type** | `Percent Off` |
| **Order Level** | **Percent Off** | `10` |
