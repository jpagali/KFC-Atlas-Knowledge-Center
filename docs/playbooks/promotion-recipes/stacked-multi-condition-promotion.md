---
title: Stacked Multi-Condition Promotion
sidebar_label: Stacked Multi-Condition Promotion
---

# Stacked Multi-Condition Promotion

## Goal

App-only, registered users get 10% off orders over $25 on weekends.

## Requirements

All conditions below must be met.

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
