---
id: tool-tips
title: Tool Tips
sidebar_label: Tool Tips
---


This page is intended for sharing less known tips about tools used in this boilerplate. Tools are computer programs that are used to maintain and support https://github.com/chentsulin/electron-react-boilerplate[electron-react-boilerplate], for example, `git`, `yarn`, `npm` etc.


== How to keep commit history clean

When you clone this project and down the line keep your copy updated with the upstream, you end up with lot many commits that are made by contributors to this boilerplate. Meanwhile you too keep committing in your copy in order to develop your project. You may feel that your `git log` is polluted with commits made to this boilerplate, when you prefer `git log` to show only those commits that are directly related to your project. 

One workaround is to use `--depth 1` switch in your `git clone` and `git fetch` command.

For example,

[source, bash]
----
git clone --depth=1 https://github.com/chentsulin/electron-react-boilerplate.git your-project-name # <1>
git fetch --depth 1 git@github.com:chentsulin/electron-react-boilerplate.git # <2>
----
<1> When cloning this boilerplate for the first time
<2> To fetch updated copy of boilerplate


.Further Readings:

. https://git-scm.com/docs/git-clone[`git clone` documentation]
. https://git-scm.com/docs/git-fetch[`git fetch` documentation]
. https://github.com/chentsulin/electron-react-boilerplate/issues/782[Question: Best way to clean repository after initializing new project? #782]

== How to add _missing_ +flow-type+ definitions for third party modules

If +flow-type+ definitions for a module are missing, flow will raise "Required module not found" error.

For example, clone this repository. Add +material-ui+ to `./package.json`. 

[source, bash]
----
yarn add material-ui
----

Then add this line to `Counter.js`

[source, js]
----
import AppBar from 'material-ui/AppBar';
----

If flow is enabled, it will produce following error,

[source, js]
----
file: 'file:///<Your path>/electron-react-boilerplate/app/components/Counter.js'
severity: 'Error'
message: 'material-ui/AppBar (Required module not found)'
at: '4,20'
source: 'flow'
----

To get around this issue, add `./flow-typed/<module-name>_vx.x.x.js` file, like `./flow-typed/material-ui_vx.x.x.js`. Then add following lines to it,

[source, js]
----
declare module 'module' {
  declare module.exports: any;
}
----

In our example, it would be

[source, js]
----
declare module 'material-ui' {
  declare module.exports: any;
}

declare module 'material-ui/AppBar' {
  declare module.exports: any;
}
----

This would turn off flow-typed errors for the module.

.Further Readings:

. https://github.com/chentsulin/electron-react-boilerplate/issues/1024[Flow rasies "Required module not found" error #1024]
. https://github.com/chentsulin/electron-react-boilerplate/tree/master/flow-typed[flow-typed directory]

== How to skip building the DLL immediately after install

See link:./FAQ#how-do-i-skip-building-the-dll-immediately-after-install[here]

.Further Readings:

. https://github.com/chentsulin/electron-react-boilerplate/issues/1034[Any way to use 'yarn add' without immediately rebuilding the DLL? #1034]
