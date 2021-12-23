"use strict";(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[741],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8615:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"adding-assets",title:"Adding Assets",sidebar_label:"Adding Assets"},l=void 0,p={unversionedId:"adding-assets",id:"adding-assets",title:"Adding Assets",description:"A common part of applications is importing assets, such as images, fonts, and files.",source:"@site/docs/adding-assets.md",sourceDirName:".",slug:"/adding-assets",permalink:"/docs/adding-assets",editUrl:"https://github.com/electron-react-boilerplate/site/edit/main/docs/adding-assets.md",tags:[],version:"current",frontMatter:{id:"adding-assets",title:"Adding Assets",sidebar_label:"Adding Assets"},sidebar:"docs",previous:{title:"Packaging",permalink:"/docs/packaging"},next:{title:"Adding Dependencies",permalink:"/docs/adding-dependencies"}},c=[{value:"Build-time Assets",id:"build-time-assets",children:[],level:2},{value:"Run-time Assets",id:"run-time-assets",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A common part of applications is importing assets, such as images, fonts, and files."),(0,i.kt)("h2",{id:"build-time-assets"},"Build-time Assets"),(0,i.kt)("p",null,"In the context of ERB, build-time assets are those that are managed by Webpack. They are imported like JS modules and transformed to encoded strings by Webpack."),(0,i.kt)("p",null,"Out of the box, ERB supports the following assets:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Asset"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Supported Extensions"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Images"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".jpg"),", ",(0,i.kt)("inlineCode",{parentName:"td"},".png"),", ",(0,i.kt)("inlineCode",{parentName:"td"},".jpg"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Fonts"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},".svg"),", ",(0,i.kt)("inlineCode",{parentName:"td"},".ttf"),", ",(0,i.kt)("inlineCode",{parentName:"td"},".eot"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import catImage from "./cat.jpg";\n\nfunction CatComponent() {\n  return <img src={catImage} />;\n}\n')),(0,i.kt)("h2",{id:"run-time-assets"},"Run-time Assets"),(0,i.kt)("p",null,"In the context of ERB, run-time assets are separate files that are included in the packaged application and used through file paths. You will need to include their locations in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json['build']['files']"),". This is so that ",(0,i.kt)("a",{parentName:"p",href:"https://www.electron.build/configuration/contents#files"},"electron-builder's configuration")," knows to include them when packaging."),(0,i.kt)("p",null,"(Note that these locations are relative to the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/")," directory)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsonc"},'"build": {\n    // ...\n    "files": [\n      "assets/"\n      // ...\n    ],\n}\n')),(0,i.kt)("p",null,"For example, you can include Python within your electron app and call it at run-time to print ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World from Python"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const pythonBinary = path.join(__dirname, "assets", "python");\nconst pythonScript = \'print("Hello World from Python")\';\nexec(`echo \'${pythonScript}\' | ${pythonBinary}`, (error, stdout) => {\n  console.log(`stdout: ${stdout}`);\n});\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/electron-react-boilerplate/examples/commit/d1eddcd0e30ec22edd3fd3900ee3c12e1da4cdba"},"Here is a runnable example of this")),(0,i.kt)("p",null,"A useful tip is using ",(0,i.kt)("inlineCode",{parentName:"p"},"asar")," (the format that ",(0,i.kt)("inlineCode",{parentName:"p"},"electron-builder")," packages into) to see the contents of the packaged build. You will see that it contains content included within ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json['build']['files']"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"asar list release/mac/ElectronReact.app/Contents/Resources/app.asar\n")))}u.isMDXComponent=!0}}]);