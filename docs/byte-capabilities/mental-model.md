---
title: Platform Mental Model
description: The hierarchy, structure, and architecture of the Byte Stack platform in plain English.
sidebar_label: Mental Model
---

import ThemeSyncedIframe from '@site/src/components/ThemeSyncedIframe';

# 🧠 Platform Mental Model

Understanding the platform starts with understanding the three-layer hierarchy — what each layer is responsible for, and how they relate to each other.

:::note Scope Within Atlas
For Atlas Wiki, the **Byte Capabilities** lens is focused on the Atlas **Commerce + Portal** picture. Atlas is KFC's global front-end, built on **Byte Helium** as the Yum! enterprise front-end foundation. Behind it, **Byte Commerce + Byte Portal** power transaction handling and operational configuration, while **Byte Connect** sits in the middle whenever a market POS is not Byte POS.
:::

---

## The Three Layers

**Byte Stack** has three major layers in the Atlas context:

- **Atlas on Byte Helium** — Atlas is KFC's global front-end, and it is built on **Byte Helium**, Yum!'s enterprise design system and front-end foundation. Helium gives Atlas the shared UI system; Atlas skins that foundation for the KFC brand and customer journey.
- **Byte Commerce** — The engine behind every order. Handles cart state, pricing, tax calculation, payment processing, and POS injection. Invisible to customers, critical to everything.
- **Byte Portal** — The admin control plane paired with Commerce. Market and ops teams use this to configure stores, menus, promotions, taxes, payments, users, and content.

When a market is not on Byte POS, **Byte Connect** sits between Atlas / Byte Commerce and the market POS environment. These layers also connect to a set of **external services**: Menu, Identity/SSO, PSP (payments), Loyalty/Promos Engine, Order Tracking, CMS, and Analytics.

:::note Byte POS Caveat
Readers often assume Atlas or Byte Commerce can talk directly to any market POS. The intended model is narrower: **Atlas -> Byte Commerce -> Byte POS** by default, or **Atlas -> Byte Commerce -> Byte Connect -> POS** when the market is not on Byte POS.
:::

---

## Platform Hierarchy

This explorer combines the hierarchy and architecture views in one place. Use the tabs to switch between a side-by-side comparison, hierarchy-only, or architecture-only mode.

<ThemeSyncedIframe
  src="/byte-stack-platform-explorer.html"
  title="Byte Stack Platform Explorer"
  height={1480}
  messageType="byte-stack-platform-explorer-theme"
  heightMessageType="byte-stack-platform-explorer-height"
/>

---

## System Architecture Diagram

The architecture view is available in the same explorer above. Open the `Architecture only` tab if you want to focus just on runtime relationships and box-level explanations.

---

:::tip Read next
See [Platform Layers](/docs/byte-capabilities/platform-layers) for a plain-English breakdown of what each layer does and what markets can configure.
Need the POS integration caveat? Read [Byte Connect](/docs/byte-capabilities/enablement/byte-connect).
:::
