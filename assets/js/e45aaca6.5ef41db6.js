/*! For license information please see e45aaca6.5ef41db6.js.LICENSE.txt */
(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[878],{9949:function(e,t,n){"use strict";n(161).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0)},1550:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var s=n(5773),o=n(7378),r=n(8944),u=(n(9949),n(7725)),c=n(6216),i=n(808),a=n(3542);function l(e){return o.createElement("div",{className:"redocusaurus-styles",dangerouslySetInnerHTML:{__html:""}})}var d=["className","optionsOverrides"];var f=function(e){var t=e.className,n=e.optionsOverrides,s=(0,i.Z)(e,d),c=(0,a.U)(s,n),f=c.store,m=c.darkThemeOptions,p=c.lightThemeOptions,h=c.hasLogo;return o.createElement(o.Fragment,null,o.createElement(l,{specProps:s,lightThemeOptions:p,darkThemeOptions:m}),o.createElement("div",{className:(0,r.Z)(["redocusaurus",h&&"redocusaurus-has-logo",t])},o.createElement(u.Redoc,{store:f})))};var m=function(e){var t=e.className,n=e.optionsOverrides,i=e.spec,a=e.url,l=e.themeId,d=(e.isSpecFile,(0,c.N)(l,n).options);return i?o.createElement(f,(0,s.Z)({},e,{spec:i})):o.createElement("div",{className:(0,r.Z)(["redocusaurus",t])},o.createElement(u.RedocStandalone,{specUrl:a,options:d}))}},2035:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var s=n(1869);function o(e){var t,n=(0,s.OD)("docusaurus-plugin-redoc");return e?null==n?void 0:n[e]:null==(t=Object.values(null!=n?n:{}))?void 0:t[0]}t.Z=o},3542:function(e,t,n){"use strict";n.d(t,{U:function(){return l}});var s=n(7378),o=n(8948),r=n(6457),u=n(5421),c=(n(9949),n(7725)),i=n(6216),a=null;function l(e,t){var n=e.spec,l=e.url,d=e.themeId,f=(0,i.N)(d,t),m=(0,o.Z)(l,{absolute:!0}),p=(0,r.Z)(),h="dark"===(0,u.I)().colorMode,v=(0,s.useMemo)((function(){var e;return null!==a&&p&&a.dispose(),a=new c.AppStore(n,m,f.options),Object.assign({},f,{hasLogo:!(null==(e=n.info)||!e["x-logo"]),store:a})}),[p,n,m,f]);return(0,s.useEffect)((function(){v.store.onDidMount()}),[v,p,h]),v}},6216:function(e,t,n){"use strict";n.d(t,{N:function(){return a}});var s=n(7378),o=n(6457),r=n(1869),u=n(5421),c=n(5409),i=n.n(c);n(9949);function a(e,t){void 0===e&&(e="theme-redoc");var n=(0,o.Z)(),c="dark"===(0,u.I)().colorMode,a=(0,r.OD)("docusaurus-theme-redoc",{failfast:!0}),l=(0,r.eZ)("docusaurus-theme-redoc",e)||Object.values(a)[0];return(0,s.useMemo)((function(){var e=l.lightTheme,s=l.darkTheme,o=l.options,r={scrollYOffset:n||"string"!=typeof o.scrollYOffset?o.scrollYOffset:0},u=i()(Object.assign({},o,r,{theme:e}),t),a=i()(Object.assign({},o,r,{theme:s}),t);return{options:n&&c?a:u,darkThemeOptions:a,lightThemeOptions:u}}),[n,c,l,t])}},7765:function(e,t,n){"use strict";n.r(t);var s=n(7378),o=n(4034),r=n(1550),u=n(2035);t.default=function(){var e=(0,u.Z)("using-custom-layout");return s.createElement(o.Z,{title:"Custom Layout Docs",description:"Example showing custom layout"},s.createElement(r.Z,e))}},9184:function(){},6016:function(){},3715:function(){},259:function(){},3421:function(){},8002:function(){},7622:function(){}}]);