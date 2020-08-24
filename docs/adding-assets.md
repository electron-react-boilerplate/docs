---
id: adding-assets
title: Adding Assets
sidebar_label: Adding Assets
---

A common part of applications is importing assets, such as images, fonts, and files.

Assets can be used at build-time with Webpack (e.g. ) or dynamically using.

## Build-time Assets

Build-time assets are managed by Webpack. Importing them is similar to importing JS modules.

In these cases, Webpack handles the importing of assets. Out of the box, ERB supports the following assets:

| Asset    |  Supported Extensions    |
|----------|:-----------------------: |
| Images   |  `.jpg`, `.png`, `.jpg`  |
| Fonts    |  `.svg`, `.ttf`, `.eot`  | 

Images are imported as encoded strings.

```js
import catImage from './cat.jpg';

function CatComponent() {
  return (
    <img src={catImage} />
  );
}
```

## Run-time Assets

If you do not want assets managed by Webpack, then you will need to include their locations in the `build` property within `package.json`. (Note that these locations are relative to the `app/` directory)

For example, you can include Python within your electron app and call it at run-time.

```jsonc
"build": {
    ...
    "files": [
      "assets/"
      ...
    ],
}
```

```js
const pythonBinary = path.join(__dirname, 'assets', 'python');
const pythonScript = 'print("Hello World from Python")';
exec(`echo '${pythonScript}' | ${pythonBinary}`, (error, stdout) => {
  console.log(`stdout: ${stdout}`);
});
```

You can use `asar` (the format that `electron-builder` packages into) to see the contents of the packaged build.

```bash
asar list release/mac/ElectronReact.app/Contents/Resources/app.asar
```
