"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[3902],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(n),u=i,d=g["".concat(s,".").concat(u)]||g[u]||m[u]||a;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return l}});var r=n(52263),i=n(13919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,l=a.forcePrependBaseUrl,o=void 0!==l&&l,s=a.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+c:c}(a,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},90013:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),l=n(44996),o=["components"],s={title:"\u4f7f\u7528 Nocalhost \u5f00\u53d1 Kubernetes \u4e2d\u7684 APISIX Controller",author:"Garry Chen",author_title:"Product Manager at Nocalhost Team",author_url:"https://github.com/neaped",author_image_url:"https://avatars.githubusercontent.com/u/3713305?v=4",tags:["Kubernetes","APISIX","Controller","Development"]},p={permalink:"/zh-CN/blog/api-six",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/api-six.md",title:"\u4f7f\u7528 Nocalhost \u5f00\u53d1 Kubernetes \u4e2d\u7684 APISIX Controller",description:"Introduction",date:"2022-03-25T03:02:16.074Z",formattedDate:"2022\u5e743\u670825\u65e5",tags:[{label:"Kubernetes",permalink:"/zh-CN/blog/tags/kubernetes"},{label:"APISIX",permalink:"/zh-CN/blog/tags/apisix"},{label:"Controller",permalink:"/zh-CN/blog/tags/controller"},{label:"Development",permalink:"/zh-CN/blog/tags/development"}],readingTime:2.25,truncated:!1,nextItem:{title:"Nocalhost \u5b98\u65b9\u6587\u6863\u7ffb\u8bd1\u6d3b\u52a8",permalink:"/zh-CN/blog/docs-translate"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploy APISIX Ingress Controller",id:"deploy-apisix-ingress-controller",children:[]},{value:"Developing",id:"developing",children:[{value:"Step 1. Start DevMode",id:"step-1-start-devmode",children:[]},{value:"Step 2. Change code and check result",id:"step-2-change-code-and-check-result",children:[]},{value:"Step 3. End DevMode",id:"step-3-end-devmode",children:[]}]},{value:"Debugging",id:"debugging",children:[{value:"Step 1. Start remote debugging",id:"step-1-start-remote-debugging",children:[]},{value:"Step 2. Step through breakpoints",id:"step-2-step-through-breakpoints",children:[]}]},{value:"Remote Run",id:"remote-run",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"References",id:"references",children:[]}],m={toc:c};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/blog/apisix/apisix-banner.png")})),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"\u672c\u6587\u901a\u8fc7\u4f7f\u7528 Nocalhost \u5c06\u672c\u5730\u5f00\u53d1\u673a\u65e0\u7f1d\u8fde\u63a5\u5230\u4e00\u4e2a\u8fdc\u7a0b Kubernetes \u96c6\u7fa4\uff0c \u8ba9\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5e38\u7528\u7684 IDE \u6765\u5f00\u53d1\u548c\u8c03\u8bd5 ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/getting-started"},"Apache APIX ingress controller"),"\u3002 \u4ece\u800c\u8ba9\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u73b0\u6709\u7684\u6280\u672f\u6808\u6765\u987a\u7545\u5730\u5f00\u53d1\u548c\u8c03\u8bd5 K8s \u96c6\u7fa4\u4e0a\u7684\u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u5305\u62ec\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#deploy-apisix-ingress-controller"}," \u5728 IDE \u4e2d\u90e8\u7f72 APISIX Ingress controlle")," \u5230\u8fdc\u7a0b Kubernetes \u96c6\u7fa4"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#developing"},"\u5f00\u53d1")," \u548c ",(0,a.kt)("a",{parentName:"li",href:"#debugging"},"\u8c03\u8bd5")," Kubernetes \u96c6\u7fa4\u4e0a\u7684 APISIX ingress controller \uff0c\u4e0d\u9700\u8981\u91cd\u5efa\u5bb9\u5668\u955c\u50cf")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51c6\u5907\u4e00\u4e2a\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4\u3002 \u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u62e5\u6709\u547d\u540d\u7a7a\u95f4\u7ba1\u7406\u6743\u9650\u7684 Kubernetes \u96c6\u7fa4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u672c\u5730\u5df2\u5b89\u88c5\u597d ",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm v3.0+")),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4e2d\u5df2\u5b89\u88c5\u597d ",(0,a.kt)("a",{parentName:"li",href:"https://apache.github.io/apisix-helm-chart/docs/en/latest/apisix.html"},"APISIX")),(0,a.kt)("li",{parentName:"ul"},"GoLand IDE 2020.03+ (I am using GoLand 2021.2 in this article)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/installation#install-jetbrains-plugin"},"\u5b89\u88c5 Nocalhost JetBrains \u63d2\u4ef6")),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"Go 1.13")," \u6216\u66f4\u9ad8\u7248\u672c")),(0,a.kt)("h2",{id:"deploy-apisix-ingress-controller"},"Deploy APISIX Ingress Controller"),(0,a.kt)("p",null,"\u5728 GoLand \u4e2d\u901a\u8fc7 Nocalhost \u90e8\u7f72 APISIX Ingress Controller\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 GoLand \u4e2d\u6253\u5f00 Nocalhost \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5c06\u8981\u90e8\u7f72 APISIX Ingress Controller \u7684\u547d\u540d\u7a7a\u95f4"),(0,a.kt)("li",{parentName:"ol"},"\u53f3\u952e\u70b9\u51fb\u9009\u5b9a\u7684\u547d\u540d\u7a7a\u95f4, \u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Deploy Application")),", \u7136\u540e\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Helm Repo"))," \u4f5c\u4e3a\u5b89\u88c5\u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u4e0b\u9762\u7684\u5bf9\u8bdd\u6846\u4e2d\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Name")," \u4e2d\u8f93\u5165\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")),(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Chart URL")," \u4e2d\u8f93\u5165\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"https://charts.apiseven.com"))))),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/blog/apisix/apisix-ingress-deploy.gif")}),(0,a.kt)("figcaption",null,"\u90e8\u7f72 APISIX ingress controller")),(0,a.kt)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u6211\u4eec\u901a\u8fc7\u5728 IDE \u5185\u542f\u7528\u7aef\u53e3\u8f6c\u53d1\u6765\u6d4b\u8bd5 ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 Nocalhost \u63d2\u4ef6\u7684 Workloads \u4e2d\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," \uff0c\u53f3\u952e\u70b9\u51fb\u5e76\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Port Forward"))),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u7aef\u53e3\u8f6c\u53d1 ",(0,a.kt)("inlineCode",{parentName:"li"},"8080:8080")),(0,a.kt)("li",{parentName:"ol"},"\u5728\u672c\u5730\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"li",href:"http://127.0.0.1:8080/healthz"},(0,a.kt)("inlineCode",{parentName:"a"},"http://127.0.0.1:8080/healthz"))," \u5e76\u68c0\u67e5\u7ed3\u679c")),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/blog/apisix/apisix-ingress-test.gif")}),(0,a.kt)("figcaption",null,"\u6d4b\u8bd5\u90e8\u7f72\u662f\u5426\u6210\u529f")),(0,a.kt)("h2",{id:"developing"},"Developing"),(0,a.kt)("h3",{id:"step-1-start-devmode"},"Step 1. Start DevMode"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53f3\u952e\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," \u5de5\u4f5c\u8d1f\u8f7d\uff0c\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Dev Config"))),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u5df2\u7ecf\u5c06\u6e90\u7801\u514b\u9686\u5230\u672c\u5730\uff0c\u8bf7\u9009\u62e9\u6e90\u4ee3\u7801\u76ee\u5f55\u3002 \u5426\u5219\u901a\u8fc7\u8f93\u5165\u4ed3\u5e93\u5730\u5740 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller.git"},"https://github.com/apache/apisix-ingress-controller.git")," \u6765\u8ba9 Nocalhost \u514b\u9686\u6e90\u4ee3\u7801\u5230\u672c\u5730"),(0,a.kt)("li",{parentName:"ol"},"\u7b49\u5f85\u64cd\u4f5c\u5b8c\u6210\uff0cNocalhost \u5c06\u5728\u8fdb\u5165 DevMode \u540e\u5728 IDE \u5185\u6253\u5f00\u8fdc\u7a0b\u7ec8\u7aef")),(0,a.kt)("p",null,"\u73b0\u5728\u901a\u8fc7\u5728\u8fdc\u7a0b\u7ec8\u7aef\u4e2d\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," \u8fdb\u7a0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go run main.go ingress --config-path conf/config-default.yaml\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," \u542f\u52a8\u540e\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/healthz")," \u8bbf\u95ee\u670d\u52a1\uff0c \u5e76\u68c0\u67e5\u7ed3\u679c"),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/blog/apisix/apisix-ingress-devmode.gif")}),(0,a.kt)("figcaption",null,"\u8fdb\u5165\u5f00\u53d1\u6a21\u5f0f")),(0,a.kt)("h3",{id:"step-2-change-code-and-check-result"},"Step 2. Change code and check result"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6765\u4fee\u6539\u4e00\u4e0b\u4ee3\u7801\u5e76\u770b\u770b\u6548\u679c\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u505c\u6b62 ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," \u8fdb\u7a0b"),(0,a.kt)("li",{parentName:"ol"},"\u5728 Goland \u4e2d\u641c\u7d22 ",(0,a.kt)("inlineCode",{parentName:"li"},"healthz")," \u5e76\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"router.go")," \u6587\u4ef6\u3002 \u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"healthzResponse")," \u7684\u72b6\u6001\u4ee3\u7801\u4ece ",(0,a.kt)("inlineCode",{parentName:"li"},"ok")," \u66f4\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"Hello Nocalhost")),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u542f\u52a8\u8fdb\u7a0b\u5e76\u5728\u672c\u5730\u68c0\u67e5\u66f4\u6539\u7ed3\u679c")),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/blog/apisix/apisix-ingress-code-change.gif")}),(0,a.kt)("figcaption",null,"\u2b50\ufe0f \xa0 \u65e0\u9700\u91cd\u65b0\u6784\u5efa\u955c\u50cf\u6216\u91cd\u542f\u5bb9\u5668\uff0c\u51e0\u79d2\u540e\u4fbf\u53ef\u4ee5\u770b\u5230\u6539\u52a8\u7684\u7ed3\u679c \xa0 \u2b50\ufe0f ")),(0,a.kt)("h3",{id:"step-3-end-devmode"},"Step 3. End DevMode"),(0,a.kt)("p",null,"\u73b0\u5728\u5173\u95ed\u5f00\u53d1\u7a97\u53e3\u5e76\u7ed3\u675f DevMode\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53f3\u952e\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"End DevMode")))),(0,a.kt)("p",null,"Nocalhost \u5c06\u4f7f ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," \u7ed3\u675f DevMode, \u5e76\u91cd\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," \u5230\u5176\u539f\u59cb\u7248\u672c\u3002 \u542f\u7528\u7aef\u53e3\u8f6c\u53d1\u6765\u770b\u770b\u7ed3\u675f DevMode \u540e\u7684\u7ed3\u679c\u3002"),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/blog/apisix/apisix-ingress-end-devmode.gif")}),(0,a.kt)("figcaption",null,"\u7ed3\u675f DevMode")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4ee3\u7801\u4fee\u6539")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"DevMode \u6a21\u5f0f\u4e0b\uff0c\u6240\u6709\u4ee3\u7801\u66f4\u6539\u90fd\u53ea\u5728 ",(0,a.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u5bb9\u5668")," \u4e2d\u751f\u6548\u3002"),(0,a.kt)("p",{parentName:"div"},"\u9000\u51fa DevMode \u540e\uff0cNocalhost \u5c06\u4f1a\u5c06\u8fdc\u7a0b\u5bb9\u5668\u91cd\u7f6e\u4e3a\u539f\u59cb\u72b6\u6001(\u8fdb\u5165 DevMode \u4e4b\u524d\u7684\u7248\u672c)\u3002 \u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u5728\u9000\u51fa DevMode \u4ee5\u540e\uff0c\u5728 DevMode \u6a21\u5f0f\u4e0b\u505a\u7684\u4fee\u6539\u90fd\u4e0d\u4f1a\u5f71\u54cd\u539f\u6709\u73af\u5883\u3002"))),(0,a.kt)("h2",{id:"debugging"},"Debugging"),(0,a.kt)("p",null,"\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\u662f\u4e00\u4ef6\u9ebb\u70e6\u7684\u4e8b\uff0c\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u8c03\u8bd5\u5e94\u7528\u7a0b\u5e8f\u5219\u66f4\u52a0\u9ebb\u70e6\u3002 Nocalhost \u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5728\u8c03\u8bd5 Kubernetes \u96c6\u7fa4\u4e2d\u7684\u7a0b\u5e8f\u65f6\u83b7\u5f97\u548c\u5728 IDE \u4e2d\u76f4\u63a5\u8c03\u8bd5\u672c\u5730\u7a0b\u5e8f\u540c\u6837\u7684\u4f53\u9a8c\u3002"),(0,a.kt)("h3",{id:"step-1-start-remote-debugging"},"Step 1. Start remote debugging"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5f00\u59cb\u8fdc\u7a0b\u8c03\u8bd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53f3\u952e\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," \u5e76\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"\u8fdc\u7a0b\u8c03\u8bd5"))),(0,a.kt)("li",{parentName:"ol"},"Nocalhost \u5c06\u4f1a\u5148\u8ba9 ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," \u8fdb\u5165DevMode\uff0c \u5e76\u8fd0\u884c\u5728  ",(0,a.kt)("a",{parentName:"li",href:"/docs/config/config-develop"},(0,a.kt)("inlineCode",{parentName:"a"},"dev config"))," \u5b9a\u4e49\u7684\u8c03\u8bd5\u547d\u4ee4")),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/blog/apisix/apisix-ingress-remote-debug.gif")}),(0,a.kt)("figcaption",null,"\u5f00\u59cb\u8fdc\u7a0b\u8c03\u8bd5")),(0,a.kt)("h3",{id:"step-2-step-through-breakpoints"},"Step 2. Step through breakpoints"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"healthz")," \u51fd\u6570\u4e0a\u8bbe\u7f6e\u4e00\u4e2a\u65ad\u70b9\u3002 \u60ac\u505c\u5728\u884c\u53f7\u5de6\u4fa7\uff0c\u7136\u540e\u70b9\u51fb\u7ea2\u70b9\u3002 \u8bbe\u7f6e\u597d\u65ad\u70b9\u540e\uff0c\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/healthz"},(0,a.kt)("inlineCode",{parentName:"a"},"http://127.0.0.1:8080/healthz"))," \uff0c\u4f1a\u89e6\u53d1\u65ad\u70b9\uff0cGoLand \u4f1a\u8df3\u5230\u524d\u53f0\u3002 \u70b9\u51fb\u8c03\u8bd5\u76f8\u5173\u6309\u94ae\u53ef\u5bf9\u7a0b\u5e8f\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u56e0\u4e3a\u6211\u4eec\u542f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"dev.hotReload"),"\uff0c\u6240\u4ee5\u6bcf\u6b21\u66f4\u6539\u4ee3\u7801\u65f6\uff0cNocalhost \u5c06\u81ea\u52a8\u91cd\u65b0\u8fd0\u884c\u8c03\u8bd5\u547d\u4ee4\u3002 \u5728\u6211\u4eec\u9891\u7e41\u66f4\u6539\u548c\u8c03\u8bd5\u4ee3\u7801\u7684\u65f6\u5019\u4f1a\u975e\u5e38\u65b9\u4fbf\u3002"),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/blog/apisix/apisix-ingress-break-reload.gif")}),(0,a.kt)("figcaption",null,"\u8bbe\u7f6e\u65ad\u70b9\u5e76\u8fd0\u884c\u670d\u52a1")),(0,a.kt)("h2",{id:"remote-run"},"Remote Run"),(0,a.kt)("p",null,"Nocalhost \u4e0d\u4ec5\u4ec5\u53ef\u4ee5\u8fdc\u7a0b\u8c03\u8bd5\uff0c\u8fd8\u4e3a\u6211\u4eec\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u8fd0\u884c\u670d\u52a1\u4ee5\u53ca\u70ed\u52a0\u8f7d\u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u5355\u7684\u65b9\u5f0f\uff01"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"remote run")," \u529f\u80fd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53f3\u952e\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," \uff0c\u5e76\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remote Run"))),(0,a.kt)("li",{parentName:"ol"},"Nocalhost \u5c06\u4f1a\u5148\u8ba9 ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," \u8fdb\u5165DevMode\uff0c \u5e76\u8fd0\u884c\u5728  ",(0,a.kt)("a",{parentName:"li",href:"/docs/config/config-develop"},(0,a.kt)("inlineCode",{parentName:"a"},"dev config"))," \u5b9a\u4e49\u7684\u8fd0\u884c\u547d\u4ee4")),(0,a.kt)("p",null,"\u6bcf\u6b21\u66f4\u6539\u4ee3\u7801\u5b8c\u4ee3\u7801\u540e\uff0cNocalhost \u90fd\u4f1a\u81ea\u52a8\u89e6\u53d1\u8fd0\u884c\u547d\u4ee4\uff0c\u5c06\u7a0b\u5e8f\u8fd0\u884c\u8d77\u6765\u3002"),(0,a.kt)("figure",{className:"img-frame"},(0,a.kt)("img",{className:"gif-img",src:(0,l.Z)("/img/blog/apisix/apisix-ingress-remote-run.gif")}),(0,a.kt)("figcaption",null,"Remote run")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5df2\u7ecf\u5b66\u4f1a\u5982\u4f55\u4f7f\u7528 Nocalhost \u6765\u5f00\u53d1\u548c\u8c03\u8bd5 Kubernetes \u96c6\u7fa4\u4e2d\u7684 APISX ingress controller\u3002  \u4f7f\u7528 Nocalhost\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u7b49\u5f85\u7f13\u6162\u7684\u672c\u5730\u5f00\u53d1\u5faa\u73af\u53cd\u9988\uff0c\u800c\u662f\u901a\u8fc7\u4e00\u79cd\u5bcc\u6709\u6210\u6548\u7684\u4e91\u539f\u751f\u5f00\u53d1\u65b9\u5f0f\u6765\u5f97\u5230\u5feb\u901f\u7684\u53cd\u9988\u3002"),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/getting-started"},"Apache APISIX getting started guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/ingress-controller/development"},"Developing for Apache APISIX Ingress Controller"))))}g.isMDXComponent=!0}}]);