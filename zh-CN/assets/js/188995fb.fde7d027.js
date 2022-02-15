"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[1377],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(52263),r=n(13919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},41395:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r=n(80944),i=n(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,m=e.groupId,d=e.className,f=(0,r.Z)(),h=f.tabGroupChoices,v=f.setTabGroupChoices,k=(0,a.useState)(p),g=k[0],N=k[1],y=a.Children.toArray(e.children),b=[];if(null!=m){var w=h[m];null!=w&&w!==g&&u.some((function(e){return e.value===w}))&&N(w)}var C=function(e){var t=e.currentTarget,n=b.indexOf(t),a=u[n].value;N(a),null!=m&&(v(m,a),setTimeout((function(){var e,n,a,r,i,o,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case c:var a=b.indexOf(e.target)+1;n=b[a]||b[0];break;case s:var r=b.indexOf(e.target)-1;n=b[r]||b[b.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:O,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},57093:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=n(41395),l=n(58215),s=n(44996),c=["components"],p={},u={unversionedId:"guides/deploy/deploy-app",id:"guides/deploy/deploy-app",isDocsHomePage:!1,title:"\u4f7f\u7528 Nocalhost \u8fdb\u884c\u5e94\u7528\u90e8\u7f72",description:"Nocalhost \u63d0\u4f9b\u4e86\u4e00\u79cd\u4fbf\u6377\u7684\u65b9\u5f0f\u6765\u5e2e\u52a9\u60a8\u5728 IDE \u5185\u90e8\u7f72\u5e76\u7ba1\u7406 Kubernetes \u5e94\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/deploy/deploy-app.md",sourceDirName:"guides/deploy",slug:"/guides/deploy/deploy-app",permalink:"/zh-CN/docs/guides/deploy/deploy-app",editUrl:"https://crowdin.com/project/nocalhost/zh-CN",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u96c6\u7fa4\u7ba1\u7406",permalink:"/zh-CN/docs/guides/manage-cluster"},next:{title:"\u90e8\u7f72\u793a\u4f8b\u5e94\u7528",permalink:"/zh-CN/docs/guides/deploy/deploy-demo"}},m=[{value:"What is <code>default</code>?",id:"what-is-default",children:[]},{value:"Deploy Kubernetes Manifest",id:"deploy-kubernetes-manifest",children:[]},{value:"Deploy an Configured Nocalhost Application",id:"deploy-an-configured-nocalhost-application",children:[{value:"Installation Source",id:"installation-source",children:[]}]}],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nocalhost \u63d0\u4f9b\u4e86\u4e00\u79cd\u4fbf\u6377\u7684\u65b9\u5f0f\u6765\u5e2e\u52a9\u60a8\u5728 IDE \u5185\u90e8\u7f72\u5e76\u7ba1\u7406 Kubernetes \u5e94\u7528\u3002"),(0,i.kt)("h2",{id:"what-is-default"},"What is ",(0,i.kt)("inlineCode",{parentName:"h2"},"default"),"?"),(0,i.kt)("p",null,"\u5f53\u4f60\u5728 Nocalhost \u63d2\u4ef6\u4e2d\u5c55\u5f00\u4efb\u4f55 Kubernetes \u547d\u540d\u7a7a\u95f4\u65f6\uff0c\u4f60\u53ef\u80fd\u4f1a\u770b\u5230\u4e00\u4e9b\u5e26\u6709 ",(0,i.kt)("img",{src:(0,s.Z)("/img/icons/app_active.svg"),width:"20"})," \u56fe\u6807\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," \u9879\u76ee\u3002"),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/plugin/default-app.png")})),(0,i.kt)("p",null,"\u5728 Kubernetes \u4e2d\uff0c\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/"},"\u5de5\u4f5c\u8d1f\u8f7d")," \u662f\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0c\u4e0d\u7ba1\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u662f\u4e00\u4e2a\u5355\u72ec\u7684\u7ec4\u4ef6\u8fd8\u662f\u51e0\u4e2a\u5728\u4e00\u8d77\u5de5\u4f5c\u3002"),(0,i.kt)("p",null,"\u4f46\u5728\u5b9e\u9645\u4e1a\u52a1\u4e2d\uff0c\u6211\u4eec\u7684\u573a\u666f\u4f1a\u66f4\u52a0\u590d\u6742\u3002 \u4e00\u4e2a\u5fae\u670d\u52a1\u67b6\u6784\u7684\u5e94\u7528\u901a\u5e38\u7531\u8bb8\u591a\u5de5\u4f5c\u8d1f\u8f7d\u7ec4\u6210\u3002 \u5047\u8bbe\u4f60\u6709 100 \u4e2a\u8fd9\u6837\u7684\u5e94\u7528\u7a0b\u5e8f \u90a3\u4e48\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4f1a\u975e\u5e38\u591a\uff0c\u60a8\u4f1a\u5f88\u96be\u8fdb\u884c\u6d4f\u89c8\u548c\u641c\u7d22\u3002"),(0,i.kt)("p",null,"Nocalhost \u4f7f\u7528\u6807\u6ce8\uff08annotation\uff09\u5c06\u76f8\u5173\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5408\u5e76\u5230\u5355\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5e94\u7528")," \u4e2d\u3002  \u5f53\u60a8\u90e8\u7f72\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5df2\u914d\u7f6e\u7684 Nocalhost \u5e94\u7528")," \u6216\u8005\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," \u5e94\u7528\u65f6\uff0cNocalhost \u53ef\u4ee5\u628a\u5b83\u4eec\u8bc6\u522b\u4e3a\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"\u5e94\u7528"),"\uff0c\u5e76\u5c06\u6240\u6709\u76f8\u5173\u7684\u5de5\u4f5c\u8d1f\u8f7d\u7ec4\u5408\u5728\u4e00\u8d77\u3002 \u5426\u5219\uff0cNocalhost \u4f1a\u5c06\u6240\u6709\u672a\u8bc6\u522b\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5206\u7ec4\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"default \u5e94\u7528")," \u4e2d\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u6ce8\u610f\u533a\u522b")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5df2\u914d\u7f6e\u7684 Nocalhost \u5e94\u7528")," \u4ecd\u7136\u662f\u4e00\u4e2a\u6216\u4e00\u7ec4\u7684 Kubernetes \u6e05\u5355\u6587\u4ef6\u3002 \u5b83\u5e76\u4e0d\u6539\u53d8 Kubernetes \u6e05\u5355\u6587\u4ef6\u539f\u6765\u7684\u7ed3\u6784\u3002 \u5b83\u53ea\u662f\u6dfb\u52a0\u4e86\u4e00\u4e9b\u53ea\u7531 Nocalhost \u4f7f\u7528\u7684\u914d\u7f6e\u3002"))),(0,i.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Nocalhost \u90e8\u7f72\u4e0d\u540c\u914d\u7f6e\u7684 Kubernetes \u5e94\u7528\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#deploy-kubernetes-manifest"},"\u90e8\u7f72 Kubernetes manifest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#deploy-an-configured-nocalhost-application"},"\u90e8\u7f72\u5df2\u914d\u7f6e\u7684 Nocalhost \u5e94\u7528"))),(0,i.kt)("h2",{id:"deploy-kubernetes-manifest"},"Deploy Kubernetes Manifest"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 Nocalhost \u90e8\u7f72 Kubernetes manifest \u6216 Kustomize \u6587\u4ef6\u3002 \u8fd9\u7c7b\u4f3c\u4e8e\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f"),"\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u5728\u5e94\u7528\u5185\u90e8\u7f72")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u60a8\u53ea\u80fd\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5e94\u7528")," \u4e2d\u90e8\u7f72 Kubernetes manifest\u3002 \u5982\u679c\u5728\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\u6ca1\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u5e94\u7528")," \u5b58\u5728\uff0c\u90a3\u4e48 manifest \u4f1a\u88ab\u90e8\u7f72\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," \u5e94\u7528\u4e2d\u3002"))),(0,i.kt)("h4",{id:"process"},"Process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u53f3\u952e\u5355\u51fb\u4efb\u4f55\u547d\u540d\u7a7a\u95f4\u5e76\u9009\u62e9 ",(0,i.kt)("strong",{parentName:"li"},"Apply Manifest")),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u4e2a Kubernetes manifest \u6216\u5305\u542b manifest \u6587\u4ef6\u7684\u6587\u4ef6\u5939")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/plugin/deploy-manifest.gif")}),(0,i.kt)("figcaption",null,"\u90e8\u7f72 Kubernetes manifest")),(0,i.kt)("h2",{id:"deploy-an-configured-nocalhost-application"},"Deploy an Configured Nocalhost Application"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u914d\u7f6e\u5fc5\u586b\u9879")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u90e8\u7f72\u5e94\u7528\u524d\uff0c\u60a8\u9700\u8981\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml"),"\u3002 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/config/config-deployment-quickstart"},"Learn how to configure application deployment"),"."))),(0,i.kt)(o.Z,{defaultValue:"vscode",values:[{label:"VS Code",value:"vscode"},{label:"JetBrains",value:"jet"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"vscode",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4"),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("img",{src:(0,s.Z)("/img/icons/install-app-icon.jpg"),width:"20"})," \u56fe\u6807\u6765\u90e8\u7f72\u5e94\u7528"),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5b89\u88c5\u6e90")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/plugin/vs-install-app.png")}),(0,i.kt)("figcaption",null,"\u9009\u62e9\u5b89\u88c5\u6e90"))),(0,i.kt)(l.Z,{value:"jet",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u53f3\u952e\u70b9\u51fb\u547d\u540d\u7a7a\u95f4\uff0c\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"li"},"Install Application")),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5b89\u88c5\u6e90")),(0,i.kt)("figure",{className:"img-frame"},(0,i.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/plugin/jb-install-app.png")}),(0,i.kt)("figcaption",null,"\u9009\u62e9\u5b89\u88c5\u6e90")))),(0,i.kt)("h3",{id:"installation-source"},"Installation Source"),(0,i.kt)("p",null,"Nocalhost \u652f\u6301\u4ece\u672c\u5730\u76ee\u5f55\u3001 Git \u4ee3\u7801\u4ed3\u5e93\u548c Helm \u5e94\u7528\u4ed3\u5e93\u5b89\u88c5\u5e94\u7528\u3002"),(0,i.kt)("p",null,"\u4ece ",(0,i.kt)("strong",{parentName:"p"},"\u672c\u5730\u76ee\u5f55")," \u548c ",(0,i.kt)("strong",{parentName:"p"},"Git \u4ee3\u7801\u4ed3\u5e93")," \u5b89\u88c5"),(0,i.kt)("p",null,"Nocalhost \u4f1a\u68c0\u7d22\u5b58\u50a8\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},".nocalhost")," \u6587\u4ef6\u5939\uff08\u5b83\u53ef\u4ee5\u4f4d\u4f60\u7684\u5e94\u7528\u76ee\u5f55\u6216 Git \u4ee3\u7801\u4ed3\u5e93\uff09\u4e2d\u7684\u90e8\u7f72\u914d\u7f6e\uff0c\u5c1d\u8bd5\u67e5\u627e\u5e94\u7528\u90e8\u7f72\u7684\u76f8\u5173\u914d\u7f6e\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4ece Helm \u4ed3\u5e93\u90e8\u7f72")),(0,i.kt)("p",null,"Nocalhost \u5c06\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"helm install")," \u6765\u90e8\u7f72\u4f60\u7684 Helm Chart\u3002 ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_install/"},"\u53c2\u89c1 ",(0,i.kt)("inlineCode",{parentName:"a"},"helm install")," \u7684\u4f7f\u7528\u8bf4\u660e")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u9700\u8981\u5b89\u88c5 Helm")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f60\u9700\u8981\u5148\u5728\u8ba1\u7b97\u673a\u4e0a\u5b89\u88c5 ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh"},"Helm")," \u624d\u80fd\u901a\u8fc7 Helm \u8fdb\u884c\u5e94\u7528\u90e8\u7f72\u3002"))))}f.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);