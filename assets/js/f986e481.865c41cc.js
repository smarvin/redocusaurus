/*! For license information please see f986e481.865c41cc.js.LICENSE.txt */
(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[256,612],{9949:function(e,t,r){"use strict";r(161).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0)},5110:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5773),s=r(7378),u=r(9966),o=r(1804);var c=function(e){var t,r,c,a,i=e.layoutProps,l=e.specProps,f=(null==(t=l.spec)||null==(r=t.info)?void 0:r.title)||"API Docs",d=(null==(c=l.spec)||null==(a=c.info)?void 0:a.description)||"Open API Reference Docs for the API";return s.createElement(u.Z,(0,n.Z)({title:f,description:d},i),s.createElement(o.Z,l))}},1804:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7378),s=r(8944),u=(r(9949),r(7725)),o=r(3542);function c(e){return n.createElement("div",{className:"redocusaurus-styles"})}var a=function(e){var t=(0,o.U)(e),r=t.store,a=t.darkStore,i=t.lightStore,l=t.hasLogo;return n.createElement(n.Fragment,null,n.createElement(c,{lightStore:i,darkStore:a}),n.createElement("div",{className:(0,s.Z)(["redocusaurus",l&&"redocusaurus-has-logo",e.className])},n.createElement(u.Redoc,{store:r})))}},2035:function(e,t,r){"use strict";r.d(t,{u:function(){return s}});var n=r(1869);function s(e){var t=(0,n.useAllPluginInstancesData)("docusaurus-plugin-redoc");return e?t[e]:Object.values(t)[0]}t.Z=s},3542:function(e,t,r){"use strict";r.d(t,{U:function(){return i}});var n=r(7378),s=r(8948),u=r(6457),o=r(1869),c=r(5796),a=(r(9949),r(7725));function i(e){var t=e.spec,r=e.url,i=(0,s.Z)(r),l=(0,u.Z)(),f=(0,c.If)().isDarkTheme,d=(0,o.usePluginData)("docusaurus-theme-redoc"),m=(0,n.useMemo)((function(){var e=d.lightTheme,r=d.darkTheme,n=d.options,s={scrollYOffset:l||"string"!=typeof n.scrollYOffset?n.scrollYOffset:0};return{lightStore:new a.AppStore(t,i,Object.assign({},n,s,{theme:e})),darkStore:new a.AppStore(t,i,Object.assign({},n,s,{theme:r}))}}),[l,t,i,d]);return(0,n.useMemo)((function(){var e;return Object.assign({},m,{hasLogo:!(null==(e=t.info)||!e["x-logo"]),store:l&&f?m.darkStore:m.lightStore})}),[l,f,t,m])}},3231:function(e,t,r){"use strict";r.r(t);var n=r(7378),s=r(5110),u=r(2035);t.default=function(){var e,t=(0,u.Z)("using-custom-page");return n.createElement(s.default,{layoutProps:{title:"Custom page for : "+(null==(e=t.spec.info)?void 0:e.title),description:"Example showcasing custom page"},specProps:t})}},900:function(){},7878:function(){},4962:function(){}}]);