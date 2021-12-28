---
id: tool-tips
title: Tooling Tips
sidebar_label: Tooling Tips
---

This page is intended for sharing less known tips about tools used in this boilerplate. Tools are computer programs that are used to maintain and support electron-react-boilerplate. For example, `git`, `yarn`, `npm` etc.

## Keeping commit history clean

When you clone this project and down the line keep your copy updated with the upstream, you end up with lot many commits that are made by contributors to this boilerplate. Meanwhile you too keep committing in your copy in order to develop your project. You may feel that your `git log` is polluted with commits made to this boilerplate, when you prefer `git log` to show only those commits that are directly related to your project.

One workaround is to use `--depth 1` switch in your `git clone` and `git fetch` command.

For example,

```bash
# When cloning this boilerplate for the first time
git clone --depth=1 https://github.com/electron-react-boilerplate/electron-react-boilerplate.git your-project-name
# To fetch updated copy of boilerplate
git fetch --depth 1 git@github.com:electron-react-boilerplate/electron-react-boilerplate.git
```

### Further Readings:

- [`git clone` documentation](https://git-scm.com/docs/git-clone)
- [`git fetch` documentation](https://git-scm.com/docs/git-fetch)
- [Question: Best way to clean repository after initializing new project? #782](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/782)
