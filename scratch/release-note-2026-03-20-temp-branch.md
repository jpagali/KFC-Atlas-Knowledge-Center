---
title: Release 2026.03.20
status: draft
branch: codex-repo-efficiency-pass
---

# Release 2026.03.20

Released on **March 20, 2026**.

This draft release sharpens the Atlas platform story and reduces technical clutter in the repo. The biggest visible change is a clearer explanation of how Atlas, Byte Helium, Byte Commerce, Byte Portal, and Byte Connect relate to each other. Behind the scenes, the branch also includes a targeted efficiency pass across search, the contribution studio, and tracked repo artifacts.

## Highlights

- **Byte Capabilities now explains the Atlas stack more clearly**
  The platform narrative now consistently frames Atlas as KFC's global front-end, Byte Helium as the Yum! front-end foundation, Byte Commerce + Byte Portal as the operating layer behind Atlas, and Byte Connect as the middle layer for non-Byte POS markets.

- **Foundational docs now use one shared platform message**
  The updated framing now appears across Byte Capabilities landing pages, platform-layer pages, glossary definitions, and front-end overview content in both English and Japanese.

- **Search and authoring flows got a lightweight efficiency pass**
  Search now avoids duplicate index fetches in shared-page scenarios, and the Contribute page now reuses a single parsed article model instead of repeatedly reparsing editor content.

- **Tracked repo noise was reduced on the branch**
  Temporary scratch dependencies and accidental `.fuse_hidden` files were removed from tracking on the temp branch to reduce repo weight and keep the workspace cleaner.

## What Changed

### Platform Narrative

- Reframed Atlas as **KFC's global front-end** for digital ordering
- Clarified that **Byte Helium** is the Yum! enterprise design system and front-end foundation Atlas is built on
- Clarified that **Byte Commerce + Byte Portal** work together as the commerce and configuration layer behind Atlas
- Clarified that **Byte Connect** is the middle layer between Atlas and a market POS when that POS is not Byte POS

### Documentation Alignment

- Updated Byte Capabilities landing, mental model, platform layers, glossary, Helium overview, and Portal overview pages
- Updated Front-end Overview to describe Atlas in the same way as the Byte Capabilities section
- Carried the same message through the Japanese documentation set for the same foundational pages

### Site Efficiency

- Added shared search-index caching so multiple search boxes do not refetch the same locale index
- Reduced repeated parsing work in the contribution studio by reusing one parsed article model for preview, markdown generation, and image checks
- Lazy-loaded the globally mounted Atlas chat shell so inactive UI does not need to load eagerly

### Repo Hygiene

- Ignored nested `node_modules`, generated `dist` output, `.DS_Store`, and `.fuse_hidden*` artifacts more aggressively
- Removed tracked scratch prototype dependencies and build output from the temp branch
- Removed tracked `.fuse_hidden` files that were adding noise without adding product value

## In Plain English

This draft release makes the wiki tell the Atlas story more cleanly and consistently. It should now be much easier for readers to understand that Atlas is the KFC front-end, that Helium is the shared Yum! foundation underneath it, that Commerce and Portal operate together behind it, and that Connect matters when a market is not on Byte POS. At the same time, the branch trims some unnecessary technical weight so the repo is easier to work in.
