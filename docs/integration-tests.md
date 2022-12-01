---
id: integration-tests
title: Integration Tests
sidebar_label: Integration Tests
---

Integration tests are a way to test the full functionality of the application by simulating the interaction between the application and the user. For Electron applications, this means the browser gets automated. This guide will walk you through the process of writing integration tests with Playwright.

## What is Playwright?

[Playwright](https://playwright.dev) is a framework for writing end-to-end tests, it allows automating Chromium, Firefox, and WebKit with a single API. Since Electron is based on Chromium, Playwright can be used to test Electron as well. Playwright itself provides a whole suite of tools for writing, running and debugging tests. Like an own test-runner `@playwright/test`, [Trace Viewer](https://playwright.dev/docs/trace-viewer) or [Codegen](https://playwright.dev/docs/codegen).

## Installing Playwright

```bash
npm init playwright@latest
```

This will generate a new Playwright project, including an example test file and a config.

Since only Electron is getting tested, the `projects` section inside `playwright.config.ts` can be removed. This will result in having a single project by default.

### Writing Tests

Replace the example end-to-end test `e2e/example.spec.ts` with the following:

```ts
import {
  test,
  expect,
  _electron as electron,
  Page,
  ElectronApplication,
} from '@playwright/test';
import path from 'path';

/**
 * For Getting started with Playwright, see here:
 * @see https://playwright.dev/docs/intro
 */

test.describe.serial(() => {
  let page: Page;
  let electronApp: ElectronApplication;
  test.beforeAll(async () => {
    electronApp = await electron.launch({
      args: [
        path.join(__dirname, '..', 'release', 'app', 'dist', 'main', 'main.js'),
      ],
    });
    page = await electronApp.firstWindow();
    // Direct Electron console to Node terminal.
    page.on('console', console.log);
  });

  test.afterAll(async () => {
    // On MacOS, close window first
    if (process.platform === "darwin") {
      const window = await electronApp.firstWindow();
      await window.close();
     }
    await electronApp.close();
  });

  test('Electron App has the correct buttons on it', async () => {
    // Evaluation expression in the Electron context.
    const appPath = await electronApp.evaluate(async ({ app }) => {
      // This runs in the main Electron process, parameter here is always
      // the result of the require('electron') in the main app script.
      return app.getAppPath();
    });
    console.log(appPath);

    // Print the title.
    console.log(await page.title());

    await expect(page).toHaveTitle('Hello Electron React!');
    await expect(page.locator('text=📚Read our docs')).toBeVisible();
    await expect(page.locator('text=🙏Donate')).toBeVisible();
    await expect(page.locator('text=electron-react-boilerplate')).toBeVisible();
  });
});
```

## Running Tests

Tests can be run by running `npx playwright test`:

```bash
npx playwright test
```

Make sure to build your Electron application before running the tests (`npm run build`).

## More information

See [here](https://playwright.dev/docs/intro) for Getting Started with Playwright, which is recommended to learn more about best practises, locators, selectors and assertions.
