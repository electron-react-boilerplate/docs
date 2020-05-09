---
id: adding-assets
title: Adding Assets
sidebar_label: Adding Assets
---

A common part of applications is importing assets, such as images, fonts, and files. Webpack handles the importing of assets.

## Importing Assets

Out of the box, ERB supports the following assets:

| Asset    |  Supported Extensions    |
|----------|:-----------------------: |
| Images   |  `.jpg`, `.png`, `.jpg`  |
| Fonts    |  `.svg`, `.ttf`, `.eot`  | 

Importing assets is similar to importing JS modules. Images are imported as encoded strings.

```js
import catImage from './cat.jpg';

function CatComponent() {
  return (
    <img src={catImage} />
  );
}
```
