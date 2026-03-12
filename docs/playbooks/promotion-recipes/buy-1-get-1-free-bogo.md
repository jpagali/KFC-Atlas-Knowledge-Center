---
title: Buy 1 Get 1 Free (BOGO)
sidebar_label: Buy 1 Get 1 Free (BOGO)
---

# Buy 1 Get 1 Free (BOGO)

## Goal

Customer buys one Zinger Burger and gets a second one free.

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
Setting **Item Target Price** to `Lowest` ensures the cheaper of the two burgers is the one set to `$0.00`, which is the standard BOGO behavior.
:::
