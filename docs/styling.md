---
id: styling
title: Styling
sidebar_label: Styling
---

Electron React Boilerplate supports CSS, SCSS, CSS and modules out of the box.

## CSS

To import css you can import it like a regular module:

```ts
import "./syle.css";
// ...
```

### Importing CSS

Say you want to import css file from font-awesome module. Use following syntax:

```css
@import "~font-awesome/css/font-awesome.css";
```

Note the tilde `~` placed before module name.

The import css from all your modules will be concatenated into a single css file that will be injected into the header at build time.

## CSS Modules

CSS modules allow you to scope styles. Files must be end with `*.module.{css,sass,scss}` if they are to be recognized as a css module. Here is an example:

```ts
import styles from "./Button.module.css";

const Button = () => <button className={style.myButton} />;
```

Read more about css modules here:

- [why css modules?](https://css-tricks.com/css-modules-part-1-need/)

## SASS

Importing SASS is identical except for the extension:

```ts
import styles from "./style.scss";
// ...
```

## Tailwind Integration

electron-react-boilerplate doesn't come with tailwind integration out of the box. There are two ways of configuring tailwind which depend whether you want to customize your tailwind config or not.

### Without Custom Tailwind Config

See this [full working example of electron-react-boilerplate with tailwind](https://github.com/amilajack/erb-tailwind-example) for reference.

If you **do not want to customize tailwind**, you can simply run `npm install tailwindcss` and import it:

```ts title="src/renderer/App.tsx"
import "tailwindcss/tailwind.css";
```

---

### Custom Tailwind Config

If you **do want to customize tailwind**, install the necessary dependencies:

```bash
npm install --save-dev tailwindcss postcss postcss-loader autoprefixer
```

2. Add the following snippet after the `sass-loader` entry in your webpack configs:

```js title="webpack.config.renderer.dev.ts, webpack.config.renderer.prod.ts"
{
  // ...
  module: {
    rules: {
      // style, css, sass loaders...
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
  }
}
```

3. Create **postcss.config.js** in the **.erb/configs** folder with the following config:

```ts title=".erb/configs/postcss.config.js"
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};
```

4. Import it:

```ts title="src/renderer/App.tsx"
import "tailwindcss/tailwind.css";
```

Create a **tailwind.config.js** file in the **root folder of your project** with the following config:

```ts title="tailwind.config.js"
import colors from "tailwindcss/colors";

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
