(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{108:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(24),r=n(111);function c(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,i=c.forcePrependBaseUrl,o=void 0!==i&&i,u=c.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(c,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},110:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(12),i=n(111),o=n(11),u=Object(a.createContext)({collectLink:function(){}}),s=n(108),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,v=e.to,m=e.href,b=e.activeClassName,E=e.isActive,p=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,O=void 0===h||h,g=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),w=Object(s.b)().withBaseUrl,k=Object(a.useContext)(u),j=v||m,y=Object(i.a)(j),N=null==j?void 0:j.replace("pathname://",""),_=void 0!==N?(n=N,O&&function(e){return e.startsWith("/")}(n)?w(n):n):void 0,C=Object(a.useRef)(!1),B=f?c.e:c.c,U=o.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!U&&y&&window.docusaurus.prefetch(_),function(){U&&d&&d.disconnect()}}),[_,U,y]);var L=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,x=!_||!y||L;return _&&y&&!L&&!p&&k.collectLink(_),x?r.a.createElement("a",Object.assign({href:_},j&&!y&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(B,Object.assign({},g,{onMouseEnter:function(){C.current||(window.docusaurus.preload(_),C.current=!0)},innerRef:function(e){var t,n;U&&e&&y&&(t=e,n=function(){window.docusaurus.prefetch(_)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:_||""},f&&{isActive:E,activeClassName:b}))}},111:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},117:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(110),i=n(80),o=n.n(i),u=function(e){var t=e.to,n=e.children;return r.a.createElement(c.a,{className:o.a.navlink,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)};t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement("nav",{className:o.a.nav},r.a.createElement(u,{to:"/__docusaurus/debug"},"Config"),r.a.createElement(u,{to:"/__docusaurus/debug/metadata"},"Metadata"),r.a.createElement(u,{to:"/__docusaurus/debug/registry"},"Registry"),r.a.createElement(u,{to:"/__docusaurus/debug/routes"},"Routes"),r.a.createElement(u,{to:"/__docusaurus/debug/content"},"Content"),r.a.createElement(u,{to:"/__docusaurus/debug/globalData"},"Global data")),r.a.createElement("main",{className:o.a.container},t))}},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(117),i=n(24),o=n(100),u=n.n(o);t.default=function(){var e=Object(i.default)().siteMetadata;return r.a.createElement(c.a,null,r.a.createElement("h2",null,"Site Metadata"),r.a.createElement("div",null,"Docusaurus Version: ",r.a.createElement("code",null,e.docusaurusVersion)),r.a.createElement("div",null,"Site Version:"," ",r.a.createElement("code",null,e.siteVersion||"No version specified")),r.a.createElement("h3",{className:u.a.sectionTitle},"Plugins and themes"),r.a.createElement("ul",{className:u.a.list},Object.entries(e.pluginVersions).map((function(e){var t=e[0],n=e[1];return r.a.createElement("li",{key:t,className:u.a.listItem},n.version&&r.a.createElement("div",{className:u.a.version},r.a.createElement("code",null,n.version)),r.a.createElement("div",{className:u.a.name},t),r.a.createElement("div",null,"Type: ",n.type))}))))}}}]);