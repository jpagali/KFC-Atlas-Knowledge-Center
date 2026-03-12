---
title: 大口注文の配送料無料
sidebar_label: 大口注文の配送料無料
---

# 大口注文の配送料無料

## 目的

カート合計が $40 を超えた場合に、配送料を無料にする施策です。

## Requirements

| Area | Field | Value |
|---|---|---|
| **Subtotal** | **Minimum Subtotal** | `$40.00` |
| **Subtotal** | **Calculation Mode** | `Actual Subtotal` |

## Effects

| Area | Field | Value |
|---|---|---|
| **Delivery, Service, and Regulatory Fees** | **Fee Type** | `Delivery Fee` |
| **Delivery, Service, and Regulatory Fees** | **Pricing Effect Type** | `Fixed Price` |
| **Delivery, Service, and Regulatory Fees** | **Fixed Price** | `$0.00` |
