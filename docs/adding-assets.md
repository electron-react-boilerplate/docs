---
id: adding-assets
title: Adding Assets
sidebar_label: Adding Assets
---

A common part of applications is importing assets, such as images, fonts, and files.

## Build-time Assets

In the context of ERB, build-time assets are those that are managed by Webpack. They are imported like JS modules and transformed to encoded strings by Webpack.

Out of the box, ERB supports the following assets:

| Asset  |  Supported Extensions  |
| ------ | :--------------------: |
| Images | `.jpg`, `.png`, `.jpg` |
| Fonts  | `.svg`, `.ttf`, `.eot` |

```js
import catImage from "./cat.jpg";

function CatComponent() {
  return <img src={catImage} />;
}
```

## Run-time Assets

In the context of ERB, run-time assets are separate files that are included in the packaged application and used through file paths. You will need to include their locations in `package.json['build']['files']`. This is so that [electron-builder's configuration](https://www.electron.build/configuration/contents#files) knows to include them when packaging.

(Note that these locations are relative to the `app/` directory)

```jsonc
"build": {
    ...
    "files": [
      "assets/"
      ...
    ],
}
```

For example, you can include Python within your electron app and call it at run-time to print `Hello World from Python`.

```js
const pythonBinary = path.join(__dirname, "assets", "python");
const pythonScript = 'print("Hello World from Python")';
exec(`echo '${pythonScript}' | ${pythonBinary}`, (error, stdout) => {
  console.log(`stdout: ${stdout}`);
});
```

[Here is a runnable example of this](https://github.com/electron-react-boilerplate/examples/commit/d1eddcd0e30ec22edd3fd3900ee3c12e1da4cdba)

A useful tip is using `asar` (the format that `electron-builder` packages into) to see the contents of the packaged build. You will see that it contains content included within `package.json['build']['files']`.

```bash
asar list release/mac/ElectronReact.app/Contents/Resources/app.asar
```
