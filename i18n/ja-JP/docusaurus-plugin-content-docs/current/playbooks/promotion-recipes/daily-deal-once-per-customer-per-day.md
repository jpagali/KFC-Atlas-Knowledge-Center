---
title: デイリーディール（1日1回）
sidebar_label: デイリーディール（1日1回）
---

# デイリーディール（1日1回）

## 目的

任意の Meal 商品を購入したお客様に無料のドリンクを付与し、1 顧客 1 日 1 回までに制限する施策です。

## Requirements

| Area | Field | Value |
|---|---|---|
| **Item Presence** | **Minimum Quantity** | `1` |
| **Item Presence** | **Qualifying Item** | `Any Meal product` |
| **Max Total Uses Per Customer Per Day** | **Max Total Uses Per Customer Per Day** | `1` |

## Effects

| Area | Field | Value |
|---|---|---|
| **Item Level** | **Pricing Effect Type** | `Fixed Price` |
| **Item Level** | **Fixed Price** | `$0.00` |
| **Item Level** | **Qualifying Item** | `The drink to be made free` |
