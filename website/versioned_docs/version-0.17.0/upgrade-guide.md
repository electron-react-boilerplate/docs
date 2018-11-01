---
id: version-0.17.0-upgrade-guide
title: Upgrade Guide
sidebar_label: Upgrade Guide
original_id: upgrade-guide
---

## Ugrading to 0.17.0 from 0.16.0

`0.17.0` introduces breaking changes caused by the migration from a two package.json structure to a single package.json structure. Move all the dependencies from `./app/package.json` to `./package.json`'s `dependencies` property.