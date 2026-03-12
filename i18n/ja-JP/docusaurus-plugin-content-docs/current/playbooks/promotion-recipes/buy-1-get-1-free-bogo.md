---
title: レシピ 1 - Buy 1 Get 1 Free (BOGO)
sidebar_label: レシピ 1 - Buy 1 Get 1 Free (BOGO)
---

# レシピ 1 - Buy 1 Get 1 Free (BOGO)

## 目的

お客様が Zinger Burger を 1 つ購入すると、2 つ目を無料にする施策です。

## Requirements

| Area | Field | Value |
|---|---|---|
| **Item Presence** | **Minimum Quantity** | `2` |
| **Item Presence** | **Qualifying Item** | `Zinger Burger (Product)` |

## Effects

| Area | Field | Value |
|---|---|---|
| **Item Level** | **Pricing Effect Type** | `Fixed Price` |
| **Item Level** | **Fixed Price** | `$0.00` |
| **Item Level** | **Item Target Price** | `Lowest` |
| **Item Level** | **Qualifying Item** | `Zinger Burger` |

:::tip
**Item Target Price** を `Lowest` にすると、2 つのバーガーのうち価格が低い方が `$0.00` になります。これが標準的な BOGO の動きです。
:::
