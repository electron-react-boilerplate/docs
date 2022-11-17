---
id: upgrade-guide
title: Upgrade Guide
sidebar_label: Upgrade Guide
---

This project moves pretty quickly and demonstrates the best practices of JavaScript, Electron, and React. Keep in mind that this is a boilerplate project with a purposefully tiny feature set (a counter). The boilerplate will enable you to build an advanced app with a large feature set, and over time your advanced app will diverge from the simple feature set of the boilerplate.


#### Keeping the boilerplate updated

If your application is a fork from this repo, you can add this repo to another git remote:

``` sh
git remote add upstream https://github.com/electron-react-boilerplate/electron-react-boilerplate.git
```

Then, use git to merge some latest commits:

``` sh
git pull upstream main
```

#### Tips for keeping your app modernized

- Track explanations of the changes between versions in this [Upgrade Guide](https://electron-react-boilerplate.js.org/docs/upgrade-guide#ugrading-to-0170-from-0160) and in the [CHANGELOG](https://github.com/electron-react-boilerplate/electron-react-boilerplate/blob/main/CHANGELOG.md).
- Try merging new releases into your project, especially early on, but expect your project to evolve beyond the boilerplate and for merging upstream changes into your project to become untenable.
- Subscribe to changes from this repo. Even if you can't merge every change into your project, watching changes from this repo will help ensure you don't miss major changes, and help you appreciate the smaller ones.
- If something breaks in your app, try it in the boilerplate. Seeing if something works in the boilerplate can help you understand if it's a configuration issue inherited by the boilerplate or something you broke on your own. This is especially relevant for building native modules, Webpack config changes, babel config changes, additional renderer processes, etc.
- Be realistic about what this project gives you. The boilerplate is meant to be a working educational example. It's a demonstration, not a black-box development framework for you to build on top of. Inspect the boilerplate, understand how it works, and tweak your app to meet your needs.
