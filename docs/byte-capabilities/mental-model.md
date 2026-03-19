---
title: Platform Mental Model
description: The hierarchy, structure, and architecture of the Byte Stack platform in plain English.
sidebar_label: Mental Model
---

import ThemeSyncedIframe from '@site/src/components/ThemeSyncedIframe';

# 🧠 Platform Mental Model

Understanding the platform starts with understanding the three-layer hierarchy — what each layer is responsible for, and how they relate to each other.

---

## The Three Layers

**Byte Stack** has three major layers:

- **Byte Helium** — The customer-facing front-end (web + app). What customers see and interact with. Byte Helium renders everything but owns very little — pricing, eligibility, and state all come from the backend.
- **Commerce Backend** — The engine behind every order. Handles cart state, pricing, tax calculation, payment processing, and POS injection. It talks directly to Byte POS, and uses Byte Connect when a market POS is not Byte POS. Invisible to customers, critical to everything.
- **Byte Portal** — The admin control plane. Market and ops teams use this to configure stores, menus, promotions, taxes, payments, users, and content.

These three layers connect to a set of **external services**: Menu, Identity/SSO, PSP (payments), Loyalty/Promos Engine, Order Tracking, CMS, and Analytics.

:::note Byte POS Caveat
Readers often assume Byte Commerce talks directly to any market POS. The intended model is narrower: **Byte Commerce -> Byte POS** by default, or **Byte Commerce -> Byte Connect -> POS** when the market is not on Byte POS.
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
