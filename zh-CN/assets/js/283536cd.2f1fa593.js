"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[391],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},44996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(52263),o=r(13919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,l=void 0!==a&&a,u=i.absolute,c=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(l)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+s:s}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},95234:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a=r(44996),l=["components"],u={},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"\u4ec0\u4e48\u662f Nocalhost?",description:"Nocalhost \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u57fa\u4e8e IDE \u7684\u4e91\u539f\u751f\u5e94\u7528\u5f00\u53d1\u5de5\u5177\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/zh-CN/docs/introduction",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1629806685,formattedLastUpdatedAt:"2021/8/24",frontMatter:{},sidebar:"docs",next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/quick-start"}},s=[{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Why Nocalhost?",id:"why-nocalhost",children:[]},{value:"Key Features",id:"key-features",children:[{value:"Coding in Kubernetes",id:"coding-in-kubernetes",children:[]},{value:"Instant File Synchronization",id:"instant-file-synchronization",children:[]},{value:"Made For Collaboration",id:"made-for-collaboration",children:[]},{value:"Compatibility",id:"compatibility",children:[]}]}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nocalhost \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u57fa\u4e8e IDE \u7684\u4e91\u539f\u751f\u5e94\u7528\u5f00\u53d1\u5de5\u5177\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u76f4\u63a5\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u6784\u5efa\u3001\u6d4b\u8bd5\u548c\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f")),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u6613\u4e8e\u4f7f\u7528\u7684 IDE \u63d2\u4ef6\uff08\u652f\u6301 VS Code \u548c JetBrains\uff09\uff0c\u5373\u4f7f\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u8fdb\u884c\u5f00\u53d1\u548c\u8c03\u8bd5\uff0cNocalhost \u4e5f\u80fd\u4fdd\u6301\u548c\u672c\u5730\u5f00\u53d1\u4e00\u6837\u7684\u5f00\u53d1\u4f53\u9a8c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u5373\u65f6\u6587\u4ef6\u540c\u6b65\u8fdb\u884c\u5f00\u53d1\uff1a")," \u5373\u65f6\u5c06\u60a8\u7684\u4ee3\u7801\u66f4\u6539\u540c\u6b65\u5230\u8fdc\u7aef\u5bb9\u5668\uff0c\u800c\u65e0\u9700\u91cd\u5efa\u955c\u50cf\u6216\u91cd\u65b0\u542f\u52a8\u5bb9\u5668\u3002")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,a.Z)("/img/intro/coding-in-cluster.gif"),width:"800"})),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"Nocalhost \u7531\u5355\u4e2a\u4e8c\u8fdb\u5236 CLI \u548c IDE \u63d2\u4ef6\u7ec4\u6210\u3002 \u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u5c06\u5b83\u4e0e\u60a8\u719f\u6089\u7684 IDE \u4e00\u8d77\u4f7f\u7528\u3002 Nocalhost \u4e0d\u9700\u8981\u670d\u52a1\u5668\u7aef\u7ec4\u4ef6\uff0c\u56e0\u4e3a\u5b83\u901a\u8fc7 KubeConfig \u76f4\u63a5\u4e0e\u60a8\u7684 Kubernetes \u96c6\u7fa4\u901a\u4fe1\uff0c\u5c31\u50cf kubectl \u4e00\u6837\u3002"),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,a.Z)("/img/intro/how-it-works.webp")})),(0,i.kt)("h2",{id:"why-nocalhost"},"Why Nocalhost?"),(0,i.kt)("p",null,"\u6784\u5efa Kubernetes \u5e94\u7528\u5e76\u4e0d\u7b80\u5355\uff0c\u5c24\u5176\u5bf9\u4e8e\u5927\u578b\u5f00\u53d1\u56e2\u961f\u6765\u8bf4\u66f4\u5177\u6311\u6218\u3002 Nocalhost \u63d0\u4f9b\u4e86\u6700\u9ad8\u6548\u7684\u65b9\u5f0f\u6765\u6784\u5efa\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 Nocalhost \u76f4\u63a5\u5728 Kubernetes \u4e2d\u8fdb\u884c\u5f00\u53d1\u7684\u4f18\u52bf\u6709\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u751f\u4ea7\u73af\u5883\u76f8\u4f3c\u6027")," - \u5f00\u53d1\u73af\u5883\u4e0e\u4f60\u7684\u751f\u4ea7\u73af\u5883\u975e\u5e38\u76f8\u4f3c\uff0c\u8ba9\u4f60\u66f4\u6709\u4fe1\u5fc3\u5728\u53d1\u5e03\u65b0\u529f\u80fd\u65f6\u4e00\u5207\u90fd\u5c06\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u63d0\u901f\u53cd\u9988\u5faa\u73af")," - \u901a\u8fc7\u6587\u4ef6\u540c\u6b65\uff0c\u4f60\u6240\u6709\u4ee3\u7801\u66f4\u6539\u53ef\u4ee5\u5728\u5bb9\u5668\u4e2d\u7acb\u5373\u751f\u6548\uff0c\u800c\u65e0\u9700\u91cd\u5efa\u955c\u50cf\u6216\u91cd\u65b0\u90e8\u7f72\u5bb9\u5668\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u7075\u6d3b\u7684\u6269\u5c55\u6027")," - \u5f00\u53d1\u4eba\u5458\u65e0\u9700\u518d\u62c5\u5fc3\u672c\u5730\u8d44\u6e90\u4e0d\u8db3\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u964d\u4f4e\u6210\u672c")," - \u66f4\u6709\u6548\u5730\u4f7f\u7528\u8d44\u6e90\u5e76\u964d\u4f4e IT \u8bbe\u65bd\u6210\u672c\u3002")),(0,i.kt)("p",null,"\u5728\u4e0b\u8ff0\u73af\u5883\u91cc\uff0c\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u8fdb\u884c\u5f00\u53d1\u5f88\u6709\u7528\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u672c\u5730\u8d44\u6e90\u7684\u9650\u5236"),(0,i.kt)("li",{parentName:"ul"},"\u60f3\u8981\u5728\u7c7b\u4f3c\u751f\u4ea7\u73af\u5883\u4e2d\u6d4b\u8bd5\u4f60\u7684\u5e94\u7528"),(0,i.kt)("li",{parentName:"ul"},"\u60f3\u8981\u8c03\u8bd5\u5728\u672c\u5730\u8ba1\u7b97\u673a\u4e0a\u96be\u4ee5\u91cd\u73b0\u7684\u95ee\u9898"),(0,i.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u8bbf\u95ee\u96c6\u7fa4\u5185\u90e8\u670d\u52a1 (\u4f8b\u5982\u96c6\u7fa4 DNS)")),(0,i.kt)("h2",{id:"key-features"},"Key Features"),(0,i.kt)("h3",{id:"coding-in-kubernetes"},"Coding in Kubernetes"),(0,i.kt)("p",null,"Nocalhost \u9884\u914d\u7f6e\u4e3a\u4e0e\u4f60\u559c\u6b22\u7684 IDE \u914d\u5408\u4f7f\u7528\uff0c\u4f60\u53ef\u4ee5\u4e00\u952e\u8fde\u63a5\u5230\u4efb\u4f55 Kubernetes \u96c6\u7fa4\uff0c\u5f00\u59cb\u4eab\u53d7\u5728\u96c6\u7fa4\u5185\u8fdb\u884c\u7f16\u7801\uff0c\u6446\u8131\u70e6\u4eba\u7684\u672c\u5730\u73af\u5883\u914d\u7f6e\u3002"),(0,i.kt)("h3",{id:"instant-file-synchronization"},"Instant File Synchronization"),(0,i.kt)("p",null,"Nocalhost \u53ef\u4ee5\u5728\u4f60\u6bcf\u6b21\u8fdb\u884c\u4fee\u6539\u65f6\u81ea\u52a8\u5c06\u4ee3\u7801\u540c\u6b65\u5230 K8s \u5bb9\u5668\u4e2d\u3002 \u8fd9\u6837\u80fd\u514d\u53bb\u4e86\u955c\u50cf\u63d0\u4ea4\u3001\u6784\u5efa\u548c\u63a8\u9001\u7b49\u6b65\u9aa4\uff0c\u6781\u5927\u63d0\u901f\u4e86\u5f00\u53d1\u7684\u53cd\u9988\u5faa\u73af\u3002 \u56e0\u6b64\u4ee3\u7801\u4fee\u6539\u53ef\u4ee5\u5b9e\u73b0\u79d2\u7ea7\u751f\u6548\u3002"),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,a.Z)("/img/intro/dev-circle-cn.jpg"),width:"700"})),(0,i.kt)("h3",{id:"made-for-collaboration"},"Made For Collaboration"),(0,i.kt)("p",null,"Nocalhost \u53ef\u5e2e\u52a9\u4f60\u7684\u56e2\u961f\u5b9e\u73b0\u6807\u51c6\u5316\u5f00\u53d1\u5de5\u4f5c\u6d41\u7a0b\uff0c\u800c\u65e0\u9700\u8ba9\u56e2\u961f\u4e2d\u7684\u6bcf\u4e2a\u4eba\u90fd\u6210\u4e3a Kubernetes \u4e13\u5bb6\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u60a8\u56e2\u961f\u4e2d\u7684 ",(0,i.kt)("strong",{parentName:"li"},"Kubernetes \u548c DevOps \u4e13\u5bb6"),"\u53ef\u4ee5\u901a\u8fc7 Nocalhost Server \u914d\u7f6e\u548c\u7ba1\u7406\u96c6\u7fa4\u3001\u5e94\u7528\u7a0b\u5e8f\u3001DevSpace \u548c\u7528\u6237\u3002\u9605\u8bfb\u6709\u5173 ",(0,i.kt)("a",{parentName:"li",href:"./server/server-overview"},"Nocalhost Server")," \u7684\u66f4\u591a\u4fe1\u606f"),(0,i.kt)("li",{parentName:"ul"},"\u60a8\u56e2\u961f\u4e2d\u7684",(0,i.kt)("strong",{parentName:"li"},"\u5f00\u53d1\u4eba\u5458"),"\u65e0\u9700\u6210\u4e3a Kubernetes \u4e13\u5bb6\uff0c\u5373\u53ef\u8f7b\u677e\u67e5\u770b\u9879\u76ee\u5e76\u5373\u65f6\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u5f00\u59cb\u7f16\u7801\u548c\u8c03\u8bd5\u3002")),(0,i.kt)("h3",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"Nocalhost \u5df2\u7ecf\u8fc7\u8bb8\u591a Kubernetes \u53d1\u884c\u7248\u7684\u5b9e\u6218\u6d4b\u8bd5\uff0c\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u672c\u5730 Kubernetes \u96c6\u7fa4"),"\uff0c\u5982 minikube\u3001Microk8s\u3001K3s \u548c Docker Desktop"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6258\u7ba1 Kubernetes \u96c6\u7fa4"),"\uff0c\u5982 TKE \uff08\u817e\u8baf\uff09\u3001ACK\uff08\u963f\u91cc\u5df4\u5df4\u4e91\uff09\u3001GKE\uff08\u8c37\u6b4c\uff09\u3001Microsoft Azure"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u81ea\u7ba1\u7406\u7684 Kubernetes \u96c6\u7fa4"),"\uff08\u4f8b\u5982\u4f7f\u7528 KubeSphere \u6216 Rancher \u7ba1\u7406\u7684 K8s \u96c6\u7fa4\uff09")))}d.isMDXComponent=!0}}]);