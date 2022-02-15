"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3301],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,p=m["".concat(c,".").concat(d)]||m[d]||f[d]||i;return n?r.createElement(p,o(o({ref:t},s),{},{components:n})):r.createElement(p,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(52263),a=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,u=void 0!==o&&o,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(u)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(80944),i=n(86010),o="tabItem_1uMI",u="tabItemActive_2DSg";var c=37,l=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,f=e.values,m=e.groupId,d=e.className,p=(0,a.Z)(),g=p.tabGroupChoices,v=p.setTabGroupChoices,b=(0,r.useState)(s),y=b[0],h=b[1],k=r.Children.toArray(e.children),C=[];if(null!=m){var N=g[m];null!=N&&N!==y&&f.some((function(e){return e.value===N}))&&h(N)}var O=function(e){var t=e.currentTarget,n=C.indexOf(t),r=f[n].value;h(r),null!=m&&(v(m,r),setTimeout((function(){var e,n,r,a,i,o,c,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,c=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case l:var r=C.indexOf(e.target)+1;n=C[r]||C[0];break;case c:var a=C.indexOf(e.target)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:w,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},69255:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return f},toc:function(){return m},default:function(){return p}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=n(41395),u=n(58215),c=n(44996),l=["components"],s={title:"\u8bbf\u95ee\u7ec8\u7aef"},f={unversionedId:"guides/debug/access-terminal",id:"guides/debug/access-terminal",isDocsHomePage:!1,title:"\u8bbf\u95ee\u5bb9\u5668\u7684\u7ec8\u7aef",description:"Nocalhost \u63d0\u4f9b\u4e24\u79cd\u8bbf\u95ee\u76ee\u6807\u5bb9\u5668\u7ec8\u7aef\u7684\u6a21\u5f0f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/debug/access-terminal.md",sourceDirName:"guides/debug",slug:"/guides/debug/access-terminal",permalink:"/zh-CN/docs/guides/debug/access-terminal",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{title:"\u8bbf\u95ee\u7ec8\u7aef"},sidebar:"docs",previous:{title:"VSCode \u8fdc\u7a0b\u8c03\u8bd5",permalink:"/zh-CN/docs/guides/debug/vscode-debug"},next:{title:"\u67e5\u770b\u65e5\u5fd7",permalink:"/zh-CN/docs/guides/debug/log-viewer"}},m=[{value:"VS Code",id:"vs-code",children:[]},{value:"JetBrains",id:"jetbrains",children:[]}],d={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nocalhost \u63d0\u4f9b\u4e24\u79cd\u8bbf\u95ee\u76ee\u6807\u5bb9\u5668\u7ec8\u7aef\u7684\u6a21\u5f0f\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6253\u5f00\u8fdc\u7aef\u7ec8\u7aef:")," \u76f4\u63a5\u5728 IDE \u7684\u5185\u7f6e\u7ec8\u7aef\u4e2d\u8bbf\u95ee\u5bb9\u5668\u7684\u7ec8\u7aef"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u590d\u5236\u8bbf\u95ee\u7ec8\u7aef\u547d\u4ee4:")," Nocalhost \u5c06\u590d\u5236\u8bbf\u95ee\u8fdc\u7aef\u5bb9\u5668\u7ec8\u7aef\u7684\u547d\u4ee4\u5230\u526a\u5207\u677f\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u610f\u7ec8\u7aef\u4e2d\u7c98\u8d34\u8fd9\u4e2a\u547d\u4ee4\uff0c\u6267\u884c\u5e76\u8bbf\u95ee\u8fdc\u7aef\u5bb9\u5668\u7684\u7ec8\u7aef\u3002")),(0,i.kt)("h2",{id:"vs-code"},"VS Code"),(0,i.kt)(o.Z,{defaultValue:"open",values:[{label:"Open Remote Terminal",value:"open"},{label:"Copy Terminal Exec Command",value:"copy"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"open",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/plugin/vs-terminal.gif")}),(0,i.kt)("figcaption",null,"\u5728 VS Code \u4e2d\u6253\u5f00\u7ec8\u7aef"))),(0,i.kt)(u.Z,{value:"copy",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/plugin/vs-terminal-exec.gif")}),(0,i.kt)("figcaption",null,"VS Code \u590d\u5236\u8bbf\u95ee\u5bb9\u5668\u7ec8\u7aef\u7684\u547d\u4ee4\u5e76\u5728\u5176\u4ed6\u7ec8\u7aef\u4e2d\u6267\u884c")))),(0,i.kt)("h2",{id:"jetbrains"},"JetBrains"),(0,i.kt)(o.Z,{defaultValue:"jb-open",values:[{label:"Open Remote Terminal",value:"jb-open"},{label:"Copy Terminal Exec Command",value:"jb-copy"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"jb-open",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/plugin/jb-terminal.gif")}),(0,i.kt)("figcaption",null,"\u5728 JetBrains \u4e2d\u6253\u5f00\u7ec8\u7aef"))),(0,i.kt)(u.Z,{value:"jb-copy",mdxType:"TabItem"},(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,c.Z)("/img/plugin/jb-terminal-exec.gif")}),(0,i.kt)("figcaption",null,"\u5728 JetBrains \u4e2d\u6253\u5f00\u7ec8\u7aef")))))}p.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);