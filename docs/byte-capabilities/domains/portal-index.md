---
title: Byte Portal Capabilities
description: All capabilities owned by the Byte Portal — the admin control plane for market and ops teams on the KFC Atlas platform.
sidebar_label: Overview
---

# 🛠 Byte Portal Capabilities

**Byte Portal** is the admin control plane paired with Byte Commerce — the tool market and ops teams use to configure and operate the Atlas platform behind the front-end. Without Byte Portal, markets cannot go live. Every feature customers experience in Atlas depends on something being correctly configured in Byte Portal first.

Byte Portal does not author menus (that's Byte Menu), does not process payments (that's the PSP), and does not send push notifications (that's the push provider). It configures, assigns, and controls everything else.

---

## What Byte Portal Owns

| Capability | What Market Teams Do Here |
|---|---|
| **Users & Roles (RBAC)** | Invite users, assign roles, enforce market/store/group scope |
| **Store & Group Configuration** | Set up stores, trading hours, real-time state, POS mapping, throttling |
| **Menu Assignment & Patching** | Assign published menu versions; apply price, availability, and daypart-based overrides |
| **Promotions Configuration** | Create promotions with eligibility rules, codes, budgets, and scoping |
| **Tax Configuration** | Define tax profiles, rates, rules, and rounding per market |
| **Payments Configuration** | Configure PSP profiles, payment methods, routing rules, surcharge policies |
| **Orders & Refunds (Ops)** | Search orders, process refunds, manage adjustments |
| **Localisation & Content Management** | Manage locales, translation keys, content blocks, and legal notices |
| **Feature Flags & Settings** | Control feature rollouts by market, channel, or customer segment |
| **Reporting & Exports** | Define reports, save views, export data on demand or on schedule |
| **Webhooks & Integrations** | Subscribe third-party systems to platform events |
| **Audit & Observability** | Immutable audit log of all admin actions; health checks and SLO tracking |

---

:::tip See Byte Portal in action
Step-by-step guides for every Portal task → [Admin Portal Guide](/docs/admin-portal-guide/)
:::

:::caution Byte Portal does not author menus
Menu content (items, descriptions, prices, options) is created in **Byte Menu** — a separate tool outside the Atlas platform. Byte Portal assigns already-published menu versions and can apply patches on top, but cannot create menu content from scratch.
:::

---

## Technical Sources

<details>
<summary>📎 Technical Source: Byte Portal Capability Overview</summary>

- **FRD References:** [FRD-PORTAL-001](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4113760313), [FRD-PORTAL-018](https://yumbrands.atlassian.net/wiki/spaces/ITBFR/pages/4113760313), FRD-PORTAL-041, FRD-PORTAL-063
- **TRD Domains:** RBAC, Store Configuration, Menu Assignment, Promotions, Tax, Payments, Reporting, Audit
- **Key Interfaces / APIs:** Admin UI, RBAC policy engine, configuration services, export jobs, audit events
- **Data Contracts:** User role scope, store config, menu assignment, promotion config, tax profile, payment profile, audit record
- **Source Summary:**
  - Byte Portal is the configuration and operational control plane that determines how the market runs on Atlas
  - It does not process customer transactions directly, but its settings materially shape what Byte Helium and Commerce Backend do at runtime
  - Step-by-step operator workflows remain in the [Admin Portal Guide](/docs/admin-portal-guide/)

</details>
