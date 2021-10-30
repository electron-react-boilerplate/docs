---
id: electron-store
title: Electron Store
sidebar_label: Electron Store
---

## Using `electron-store` with `electron-react-boilerplate`

### 1. Install `electron-store`

```bash
npm install electron-store
```

### 2. Electron IPC Configuration

Electron strongly recommends disabling node integration in the renderer process, which is now the default. IPC is required to securely pass values between the main and renderer processes. You will have to add IPC event handlers which set and get `electron-store` through the the `preload` script.

Add the following event handlers to your preload script:

```ts title="src/main/preload.js"
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  store: {
    get(val) {
      ipcRenderer.send("electron-store-get", val);
    },
    set(property, val) {
      ipcRenderer.send("electron-store-set", property, val);
    },
    // Other method you want to add like has(), reset(), etc.
  },
  // Any other methods you want to expose in the window object.
  // ...
});
```

Add event listeners in your main process:

```ts title="src/main/main.ts"
import Store from "electron-store";

let store = new Store();

// IPC listener
ipcMain.on("electron-store-get", async (event, val) => {
  store.get(val);
});
ipcMain.on("electron-store-set", async (event, key, val) => {
  store.set(key, val);
});
```

### 3. Add typings

Add the following type defs:

```ts title="src/renderer/App.tsx"
// ...

declare global {
  interface Window {
    electron: {
      store: {
        get: (key: string) => any;
        set: (key: string, val: any) => void;
        // any other methods you've defined...
      };
    };
  }
}
```

---

Now, you can set and get `electron-store` in your renderer processes:

```tsx title="src/renderer/App.tsx"
// ...
<button
  onClick={() => {
    window.electron.store.set("foo", "bar");
    // or
    console.log(window.electron.store.get("foo"));
  }}
>
  Click Me!
</button>
```
