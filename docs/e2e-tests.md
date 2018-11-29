---
id: e2e-tests
title: End to End Tests
sidebar_label: End to End Tests
---

End to End (E2E) tests are high level tests that tests. Instead of testing lower level functionality, such as if compnents render correctly or functions take certain arguments, they test at the application level. These are typically the kinds of tests that you would run to check if you app works. We have chosen [Testcafe](https://github.com/DevExpress/testcafe) as our testing framework. It is a much nicer alternative to [webdriverio](http://webdriver.io), [spectron](https://electronjs.org/spectron), and [selenium](https://www.seleniumhq.org).

## Writing End to End Tests

By convention, all E2E test modules have the following filename suffix: `.e2e.js`. An example of test module filename would be `HomePage.e2e.js`.

Here's some examples of E2E tests:
* Testing if you app opens and closes
* Testing if the title bar has the expected text
* Testing if a popup shows after clicking a button

Here's an example of an E2E test:
```js
test('e2e', async t => {
  await t.expect(getPageTitle()).eql('Hello Electron React!');
});
```

Simply by reading this test, we can infer what it does:
1. Gets the page title
2. Asserts that it equals `'Hello Electron React!'`
3. Returns a promise

For more writing tests with Testcafe, refer to [their docs](https://devexpress.github.io/testcafe/documentation/test-api/).

### Watching Tests

Similar to watching component tests, can be watched as well. This can be done by running `yarn test-e2e-live`. `testcafe-live` is used to watch tests and run.
