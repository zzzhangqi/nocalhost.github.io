"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[6763],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return s}});var n=r(2263),o=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,s=a.forcePrependBaseUrl,i=void 0!==s&&s,u=a.absolute,c=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(i)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+l:l}(a,r,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},2404:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return d},default:function(){return m}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),s=r(4996),i=["components"],u={title:"Announcing Nocalhost v0.5.6",author:"Anur",author_title:"Backend engineer at Nocalhost Team",author_url:"https://github.com/anurnomeru",author_image_url:"https://avatars.githubusercontent.com/u/24870621?v=4",tags:["Announcement"]},c=void 0,l={permalink:"/zh-CN/blog/0.5.6",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/0.5.6.md",title:"Announcing Nocalhost v0.5.6",description:"Nocalhost v0.5.6 has been released, we've fixed some bugs, improved the performance and add some new features.",date:"2021-09-18T15:32:48.346Z",formattedDate:"2021\u5e749\u670818\u65e5",tags:[{label:"Announcement",permalink:"/zh-CN/blog/tags/announcement"}],readingTime:1.175,truncated:!1,authors:[{name:"Anur",title:"Backend engineer at Nocalhost Team",url:"https://github.com/anurnomeru",imageURL:"https://avatars.githubusercontent.com/u/24870621?v=4"}],prevItem:{title:"Nocalhost \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u6d3b\u52a8",permalink:"/zh-CN/blog/docs-translate"},nextItem:{title:"How to debug microservices in Kubernetes with proxy, sidecar or service mesh?",permalink:"/zh-CN/blog/2021/07/05/jimmy"}},p={authorsImageUrls:[void 0]},d=[{value:"What&#39;s new?",id:"whats-new",children:[{value:"Supports Node.js remote Run/Debug and HotReload in JetBrains",id:"supports-nodejs-remote-rundebug-and-hotreload-in-jetbrains",children:[]},{value:"Supports HotReload in JetBrains",id:"supports-hotreload-in-jetbrains",children:[]},{value:"Major update for Nocalhost Server",id:"major-update-for-nocalhost-server",children:[]},{value:"Supports to store Nocalhost configuration in Kubernetes cluster",id:"supports-to-store-nocalhost-configuration-in-kubernetes-cluster",children:[]}]},{value:"Other Updates",id:"other-updates",children:[]}],h={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nocalhost v0.5.6 has been released, we've fixed some bugs, improved the performance and add some new features."),(0,a.kt)("h2",{id:"whats-new"},"What's new?"),(0,a.kt)("p",null,"We recently shipped four major improvements:"),(0,a.kt)("h3",{id:"supports-nodejs-remote-rundebug-and-hotreload-in-jetbrains"},"Supports Node.js remote Run/Debug and HotReload in JetBrains"),(0,a.kt)("p",null,"Nocalhost now supports remote run/debug/HotReload of Node.js in JetBrains."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/guides/debug/remote-debug"},"Learn more about how to configure Remote Debug of Node.js")),(0,a.kt)("h3",{id:"supports-hotreload-in-jetbrains"},"Supports HotReload in JetBrains"),(0,a.kt)("p",null,"Nocalhost now supports HotReload when doing remote run/debug in JetBrains. When enabled this feature, Nocalhost will monitor real-time file changes and automatically re-execute the preset Run/debug commands without manually operation during the development or remote debugging."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/guides/hot-reload"},"Learn more about how to configure HotReload")),(0,a.kt)("h3",{id:"major-update-for-nocalhost-server"},"Major update for Nocalhost Server"),(0,a.kt)("h4",{id:"new-ui"},"New UI"),(0,a.kt)("p",null,"We've build a new Server Dashboard UI."),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/server/dashboard.gif")})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/server/deploy-server"},"Try our new Nocalhost Sever")),(0,a.kt)("h4",{id:"meshspace"},"MeshSpace"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MeshSpace")," is based on ",(0,a.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio"),", allows you to share workloads by specifying header with independent routing."),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/server/mesh-space.svg")})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/server/manage-devspace-mesh"},"Learn more about MeshSpace")),(0,a.kt)("h4",{id:"supports-to-share-kubernetes-namespace"},"Supports to share Kubernetes namespace"),(0,a.kt)("p",null,"You can easily share your Kubernetes namespace with anyone within your team by using Nocalhost Server."),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/server/share.svg")})),(0,a.kt)("h3",{id:"supports-to-store-nocalhost-configuration-in-kubernetes-cluster"},"Supports to store Nocalhost configuration in Kubernetes cluster"),(0,a.kt)("p",null,"You can now easily share your Nocalhost Configuration with anyone who is using the same Kubernetes cluster."),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/config/share-config.png")})),(0,a.kt)("h2",{id:"other-updates"},"Other Updates"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/changelogs/0.5.x#056-2021-09-16"},"Read the full changelogs of Nocalhost v0.5.6")))}m.isMDXComponent=!0}}]);