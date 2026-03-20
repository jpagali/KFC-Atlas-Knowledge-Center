---
title: Platform Layers
description: What each layer of the Atlas / Byte Helium platform does in plain English, and what markets can configure in each.
sidebar_label: Platform Layers
---

# 🌍 Platform Layers

The Atlas platform has three core layers plus a set of external services. This page gives a plain-English breakdown of what each layer does and — critically — what markets can and cannot configure.

:::note Scope Within Atlas
When Atlas Wiki refers to **Byte Capabilities**, the primary scope is the Atlas **Commerce + Portal** picture: Atlas as KFC's global front-end, **Byte Helium** as its Yum! front-end foundation, **Byte Commerce + Byte Portal** as the commerce and configuration layer behind it, and **Byte Connect** as the middle layer for non-Byte POS markets. Detailed operating steps for Byte Portal still belong in the [Admin Portal Guide](/docs/admin-portal-guide/).
:::

:::caution Key principle
Byte Helium *renders* but doesn't *own* most things. Pricing, eligibility, state, and content all live in the backend or external services. When something looks wrong in the app, the fix is almost always in the backend configuration — not the front-end.
:::

---

## Layer Responsibilities

| Layer | Role | What Markets Configure |
|---|---|---|
| **Atlas on Byte Helium** | KFC's global front-end, built on Yum!'s shared front-end foundation and branded for KFC customers | Market behavior is configuration-driven, not separately re-built per market |
| **Byte Commerce** | Processes every order — pricing, tax, payment, POS injection; non-Byte POS markets require Byte Connect | Via Byte Portal — promos, taxes, payment routing, market operations |
| **Byte Portal** | Admin tool paired with Commerce for markets and ops teams | Store hours, menus, promos, taxes, payments, refunds, users |
| **Menu Service** | Provides item catalogue, prices, options | Via Byte Menu authoring tool (outside Atlas) |
| **Identity / SSO** | Manages customer accounts and sign-in sessions | OTP, Google, Apple — configured per market |
| **PSP / Vault** | Handles card tokenisation and payment capture | PSP profiles configured in Byte Portal |
| **Loyalty & Promo Engine** | Evaluates offer eligibility, rewards, challenges | Promotions authored in Byte Portal |
| **Order Tracking** | Provides real-time delivery status | Optional per market; depends on 3P logistics |
| **POS / KDS** | Receives digital orders in-store | Integration configured per market/vendor; non-Byte POS markets connect through Byte Connect |

---

## What Each Layer Does in More Detail

### Atlas on Byte Helium — Front-End
Atlas is KFC's global front-end. It is built on **Byte Helium**, Yum!'s enterprise design system and front-end foundation, then skinned and shaped to reflect the KFC brand and customer journey. Atlas receives data from Byte Commerce, Menu Service, CMS, and external services, and renders it into the web and app experience customers actually use. Atlas does not calculate prices, does not evaluate promo eligibility, and does not own order state. It is the customer-facing front-end layer built on Helium.

### Byte Commerce
Byte Commerce is the engine behind every transaction. When a customer adds an item to their cart, Byte Commerce calculates the price. When they apply a promo code, Byte Commerce validates eligibility server-side. When they pay, Byte Commerce orchestrates the payment intent through the PSP. When an order is placed, Byte Commerce injects it to the in-store POS/KDS. Byte Commerce talks directly to Byte POS; if a market is not using Byte POS, Byte Connect is the required middle layer to the market POS. Nothing transactional happens without Byte Commerce.

:::note Byte POS Caveat
Do not assume Atlas can directly integrate with any market POS. The supported mental model is **Atlas -> Byte Commerce -> Byte POS**, or **Atlas -> Byte Commerce -> Byte Connect -> POS** for non-Byte POS markets.
:::

### Byte Portal — Admin Control Plane
Byte Portal is where every market-level configuration lives, alongside the Commerce layer it supports. Markets configure their stores (hours, state, POS mapping), menus (assigning published menu versions, applying patches and price overrides), promotions (eligibility rules, codes, budgets, scoping), tax profiles, payment routing rules, users and access roles, and operational settings. **Without correct Portal configuration, markets cannot go live.**

### Menu Service / Byte Menu
Menu authoring — creating items, setting descriptions and images, managing prices and options — happens in **Byte Menu**, a separate tool outside the Atlas platform. Byte Portal assigns already-published menu versions to markets and channels. Byte Portal can apply patches and overrides on top of a published menu, but it cannot create menu content from scratch.

### External Services
The platform depends on a set of external services that are integrated per market: Identity/SSO for customer authentication, a PSP for payment processing, a Loyalty & Promo Engine for offer evaluation, an Order Tracking service for delivery status, a CMS for brand and legal content, and a Geo/Store Locator service. Each of these must be configured and tested per market before launch.

---

:::tip See it in the wiki
- Configuring stores and menus in Byte Portal → [Admin Portal Guide: Stores](/docs/admin-portal-guide/stores/) and [Menus](/docs/admin-portal-guide/menus/)
- Configuring promotions → [Admin Portal Guide: Promotions](/docs/admin-portal-guide/promotions/)
:::
