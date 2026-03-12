---
title: ランチスペシャル（時間限定）
sidebar_label: ランチスペシャル（時間限定）
---

# ランチスペシャル（時間限定）

## 目的

月曜から金曜の 11:00 から 14:00 までの注文に対して、$2 オフを適用する施策です。

## Requirements

| Area | Field | Value |
|---|---|---|
| **Time Frame** | **Day Range** | `Mo Tu We Th Fr` |
| **Time Frame** | **Interval Start Time** | `11:00:00` |
| **Time Frame** | **Interval End Time** | `14:00:00` |
| **Time Frame** | **Validate against current time** | `Yes` |

## Effects

| Area | Field | Value |
|---|---|---|
| **Order Level** | **Pricing Effect Type** | `Amount Off` |
| **Order Level** | **Amount Off** | `$2.00` |
