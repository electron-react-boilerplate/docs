---
id: roadmap
title: Roadmap
sidebar_label: Roadmap
---

## 0.19.0

#### Migrate to TypeScript from Flow (0.19.0)

This is currently a work in progress for the ERB team. The reason why we waited for a while before migrating to TypeScript is because we wanted users to use ESLint and TypeScript as opposed to TypeScript and TSLint. ESLint and TypeScript integration was initially unstable and experimental so we wanted to wait a while before migrating. Now that the tooling is more stable, we have recently started working on the migration.

#### Disabling Sourcemaps in Production (0.19.0)

Sourcemaps allow developers to map compiled code to source code. This makes debugging easier but when sourcemaps are shipped in production, they allow consumers of the application to view the original source code of the application. This is an issue for proprietary applications that depend on electron-react-boilerplate. As a result, sourcemaps will be disabled in production in `0.19.0`.

#### Disabling Node Integration in Renderer (0.19.0)

For context, see [electron/electron/issues/5113](https://github.com/electron/electron/issues/5113).

## 0.20.0

#### Migrate to Azure Pipelines

Azure Pipelines allows concurrent builds for Windows, MacOS, and Linux. Rather than using Travis CI and Appveyor, Azure Pipelines will allow us to use a single CI for all platforms. While Travis CI does support Windows we've noticed that builds on it tend to be slow and the Windows builds tend to be unreliable and flaky.
