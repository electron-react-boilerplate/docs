---
id: editor-configuration
title: Editor Configuration
sidebar_label: Editor Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="vscode"
  values={[
    { label: 'VSCode', value: 'vscode', },
    { label: 'Atom', value: 'atom', },
    { label: 'Sublime', value: 'sublime', },
    { label: 'Other', value: 'other', },
  ]
}>
<TabItem value="vscode">

:::tip
vscode will suggest installing the plugins recommended by electron-react-boilerplate. This is the recommended way of installing the recommended editor plugins
:::

If you would like to manually install the plugins you can use the `code` executable. If you have `code` in your `PATH`, you can run the following command:

```bash
code --install-extension dbaeumer.vscode-eslint
code --install-extension dzannotti.vscode-babel-coloring
code --install-extension EditorConfig.EditorConfig
```

</TabItem>

<TabItem value="atom">

```bash
apm install editorconfig linter linter-eslint language-babel atom-typescript
```

</TabItem>

<TabItem value="sublime">

* [Editorconfig Integration](https://github.com/sindresorhus/editorconfig-sublime#readme)
* [TypeScript](https://packagecontrol.io/packages/TypeScript)
* [Linting](https://github.com/SublimeLinter/SublimeLinter3)
* [ESLint Integration](https://github.com/roadhump/SublimeLinter-eslint)
* [Syntax Highlighting](https://github.com/babel/babel-sublime)
* [Autocompletion](https://github.com/ternjs/tern_for_sublime)
* [Node Snippets](https://packagecontrol.io/packages/JavaScript%20%26%20NodeJS%20Snippets)
* [ES6 Snippets](https://packagecontrol.io/packages/ES6-Toolkit)

</TabItem>

<TabItem value="other">

* [Editorconfig](http://editorconfig.org/#download)
* [ESLint](http://eslint.org/docs/user-guide/integrations#editors)

</TabItem>
</Tabs>
