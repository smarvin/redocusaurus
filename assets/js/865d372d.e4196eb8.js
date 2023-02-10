"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[982],{5318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var o=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=l(r),g=n,f=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=g;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:n,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2333:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var o=r(5773),n=r(808),i=(r(7378),r(5318)),a=["components"],u={title:"Plugin Options",sidebar_position:1,author:"Rohit Gohri",author_url:"https://rohit.page"},s=void 0,l={unversionedId:"getting-started/plugin-options",id:"getting-started/plugin-options",title:"Plugin Options",description:"spec (required, string: file path or remote absolute url)",source:"@site/docs/getting-started/plugin-options.md",sourceDirName:"getting-started",slug:"/getting-started/plugin-options",permalink:"/redocusaurus/docs/getting-started/plugin-options",draft:!1,editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/website/docs/getting-started/plugin-options.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Plugin Options",sidebar_position:1,author:"Rohit Gohri",author_url:"https://rohit.page"},sidebar:"defaultSidebar",previous:{title:"Installation",permalink:"/redocusaurus/docs/getting-started/Installation"},next:{title:"Theme Options",permalink:"/redocusaurus/docs/getting-started/theme-options"}},p={},c=[{value:"spec (required, string: file path or remote absolute url)",id:"spec-required-string-file-path-or-remote-absolute-url",level:3},{value:"route (optional, string: relative uri)",id:"route-optional-string-relative-uri",level:3},{value:"layout (optional, object: layoutProps)",id:"layout-optional-object-layoutprops",level:3},{value:"config (optional)",id:"config-optional",level:3}],d={toc:c},g="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)(g,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"spec-required-string-file-path-or-remote-absolute-url"},"spec (required, string: file path or remote absolute url)"),(0,i.kt)("p",null,"Either a file path to an OpenAPI YAML/JSON file, or a url to one hosted on some website (not the same docusaurus website). Will be ",(0,i.kt)("strong",{parentName:"p"},"parsed")," at build time and forwarded to Redoc component. We will also automatically generate a single downloadable YAML and add it as a static asset to be used as the download url."),(0,i.kt)("h3",{id:"route-optional-string-relative-uri"},"route (optional, string: relative uri)"),(0,i.kt)("p",null,"Route URL at which docs would be available, this will use the theme component ",(0,i.kt)("inlineCode",{parentName:"p"},"@theme/ApiDoc")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus-theme-redoc")," to render the page. You can also skip this option and render the docs as you wish using a custom page."),(0,i.kt)("h3",{id:"layout-optional-object-layoutprops"},"layout (optional, object: layoutProps)"),(0,i.kt)("p",null,"An object to pass as layout props. Useful to set title/description of the page. See all properties available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri/redocusaurus/blob/main/packages/docusaurus-plugin-redoc/src/options.ts#L3"},"here"),"."),(0,i.kt)("h3",{id:"config-optional"},"config (optional)"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Deprecated: Use ",(0,i.kt)("inlineCode",{parentName:"p"},"redocly.yaml")," to specify theme. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri/redocusaurus/blob/main/website/redocly.yaml"},"example"),".")),(0,i.kt)("p",null,"Same as config option in ",(0,i.kt)("a",{parentName:"p",href:"/redocusaurus/docs/getting-started/Installation#config-optional"},"root options")," but specific for loading data."))}f.isMDXComponent=!0}}]);