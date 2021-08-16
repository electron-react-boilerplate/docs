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
@import "~bootstrap/dist/css/bootstrap.css";
```

## Importing CSS

Say, you want to import css file from font-awesome module. Use following syntax

```css
@import "~font-awesome/css/font-awesome.css";
```

Note the tilde `~` placed before module name.

Similar syntax is used for SCSS too.

**Examples**

- [Falcon Client](https://github.com/falcon-client/falcon/blob/master/app/app.global.css#L1)

**Further Readings**

- [Cannot import CSS? #1087](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/1087)
- [Imported (not global) css is not working. #1076](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/1076)

## Tailwind Integration

electron-react-boilerplate doesn't come with tailwind integration out of the box. There are two ways of configuring tailwind which depend whether you want to customize your tailwind config or not.

### Without Custom Tailwind Config

If you **do not want to customize tailwind**, you can simply run `yarn add tailwindcss`, then at the bottom of **App.global.css** add:

```
@import '~tailwindcss';
``` 
That should be enough to apply default tailwind styles. You use the `~` in the beginning to tell ERB to look in the node_modules as per the instructions found here: [https://electron-react-boilerplate.js.org/docs/styling](https://electron-react-boilerplate.js.org/docs/styling) .

---

### Custom Tailwind Config

If you **do want to customize tailwind**, install the necessary dependencies:

```bash
yarn add --dev tailwindcss postcss postcss-loader autoprefixer
```

2. Add the following snippet after the `css-loader` entry in the first test for global css files ( /\.global\.css$/ ) in **webpack.config.renderer.dev.babel.js** and also after `sass-loader` entry in **webpack.config.renderer.prod.babel.js** (for packaging):

```js title="webpack.config.renderer.dev.babel.js, webpack.config.renderer.prod.babel.js"
{
    // ...

    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins:
          [
            require('tailwindcss'),
            require('autoprefixer'),
          ]
      }
    }
}
```

3. Create **postcss.config.js** in the **.erb/configs** folder with the following config:

```ts title=".erb/configs/postcss.config.js"
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};
```

4. Add the following at the end of your **App.global.css** file:

```scss title="App.global.css"
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Create a **tailwind.config.js** file in the **root folder of your project** with the following config:

```ts title="tailwind.config.js"
import colors from 'tailwindcss/colors';

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

## Using SCSS

Use following example project to learn how to migrate from CSS to SCSS

- [Popcorn Time Desktop](https://github.com/amilajack/popcorn-time-desktop)
- [ERB Bootstrap Example](https://github.com/amilajack/erb-bootstrap-example)

**Further Readings**

- [How to remove css-modules ? #984](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/984)

## Images

`./src/img` is the recommended folder for images.

Do not use `resources` folder. It is actually intended for build assets.

**Example**

- [Example of `./src/img` folder](https://github.com/amilajack/popcorn-time-desktop/tree/master/app/images)
- [Usage of image in `./src/img` folder](https://github.com/amilajack/popcorn-time-desktop/blob/master/app/components/card/Card.js#L10-L11)

**Further Readings**

- [[background-image from resources #951]](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/951)
