---
id: styling
title: Styling
sidebar_label: Styling
---

## CSS Modules

This boilerplate is configured to use [css-modules](https://github.com/css-modules/css-modules) out of the box.

All `.css` file extensions will use css-modules unless it has `.global.css`.

If you need global styles, stylesheets with `.global.css` will not go through the
css-modules loader. e.g. `app.global.css`

If you want to import global css libraries (like `bootstrap`), you can just write the following code in `.global.css`:

```css
@import '~bootstrap/dist/css/bootstrap.css';
```

## How to import CSS file from `node_modules`

Say, you want to import css file from font-awesome module. Use following syntax

```css
@import "~font-awesome/css/font-awesome.css";
```

Note the tilde `~` placed before module name.

Similar syntax is used for SCSS too.

### Examples

* https://github.com/falcon-client/falcon/blob/master/app/app.global.css#L1[Falcon Client]

### Further Readings

* https://github.com/chentsulin/electron-react-boilerplate/issues/1087[Cannot import CSS? #1087]
* https://github.com/chentsulin/electron-react-boilerplate/issues/1076[Imported (not global) css is not working. #1076]

== How to use SCSS

Use following example project to learn how to migrate from CSS to SCSS

* https://github.com/amilajack/popcorn-time-desktop[Popcorn Time Desktop]
* https://github.com/amilajack/erb-bootstrap-example[ERB Bootstrap Example]

### Further Readings

* https://github.com/chentsulin/electron-react-boilerplate/issues/984[How to remove css-modules ? #984] 

## Where to put images

`./app/img` is the recommended folder.

Do not use `resources` folder. It is actually intended for build assets.

### Example

* https://github.com/amilajack/popcorn-time-desktop/tree/master/app/images[Example of `./app/img` folder]
* https://github.com/amilajack/popcorn-time-desktop/blob/master/app/components/card/Card.js#L10-L11[Usage of image in `./app/img` folder]

### Further Readings

* https://github.com/chentsulin/electron-react-boilerplate/issues/951[background-image from resources #951]
