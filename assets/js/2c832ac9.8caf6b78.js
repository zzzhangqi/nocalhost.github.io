"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[6677],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,v=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return t?a.createElement(v,i(i({ref:n},m),{},{components:t})):a.createElement(v,i({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13919:function(e,n,t){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,{b:function(){return a},Z:function(){return r}})},44996:function(e,n,t){t.d(n,{C:function(){return o},Z:function(){return i}});var a=t(52263),r=t(13919);function o(){var e=(0,a.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,o=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,l=void 0!==i&&i,p=o.absolute,s=void 0!==p&&p;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(l)return n+t;var m=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+m:m}(o,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,o().withBaseUrl)(e,n)}},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(67294),r=t(79443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(86010),l="tabItem_1uMI",p="tabItemActive_2DSg";var s=function(e){var n,t=e.lazy,r=e.block,s=e.defaultValue,m=e.values,c=e.groupId,d=e.className,u=a.Children.toArray(e.children),v=null!=m?m:u.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=s?s:null==(n=u.find((function(e){return e.props.default})))?void 0:n.props.value,f=o(),h=f.tabGroupChoices,N=f.setTabGroupChoices,g=(0,a.useState)(k),y=g[0],b=g[1],w=[];if(null!=c){var C=h[c];null!=C&&C!==y&&v.some((function(e){return e.value===C}))&&b(C)}var x=function(e){var n=e.currentTarget,t=w.indexOf(n),a=v[t].value;b(a),null!=c&&(N(c,a),setTimeout((function(){var e,t,a,r,o,i,l,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,t>=0&&o<=s&&r<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(p),setTimeout((function(){return n.classList.remove(p)}),2e3))}),150))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;t=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;t=w[r]||w[w.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},v.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:x,onClick:x},null!=t?t:n)}))),t?(0,a.cloneElement)(u.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},u.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},79443:function(e,n,t){var a=(0,t(67294).createContext)(void 0);n.Z=a},31657:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var a=t(74034),r=t(79973),o=(t(67294),t(3905)),i=(t(55064),t(58215),t(44996),["components"]),l={title:"Spec"},p=void 0,s={unversionedId:"config/config-deployment-spec",id:"config/config-deployment-spec",isDocsHomePage:!1,title:"Spec",description:"Overview / Deploy Config / Spec",source:"@site/docs/config/config-deployment-spec.md",sourceDirName:"config",slug:"/config/config-deployment-spec",permalink:"/docs/config/config-deployment-spec",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-deployment-spec.md",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1632712482,formattedLastUpdatedAt:"9/27/2021",frontMatter:{title:"Spec"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/config/config-deployment-quickstart"},next:{title:"Advance",permalink:"/docs/config/config-deployment-advance"}},m=[{value:"\u542f\u52a8\u987a\u5e8f\u4f9d\u8d56\u63a7\u5236 (\u7ec4\u4ef6\u4f9d\u8d56)",id:"\u542f\u52a8\u987a\u5e8f\u4f9d\u8d56\u63a7\u5236-\u7ec4\u4ef6\u4f9d\u8d56",children:[]},{value:"\u73af\u5883\u53d8\u91cf\u6ce8\u5165 (\u7ec4\u4ef6\u4f9d\u8d56)",id:"\u73af\u5883\u53d8\u91cf\u6ce8\u5165-\u7ec4\u4ef6\u4f9d\u8d56",children:[{value:"\u5168\u5c40\u53d8\u91cf\u6ce8\u5165",id:"\u5168\u5c40\u53d8\u91cf\u6ce8\u5165",children:[]},{value:"\u5bb9\u5668\u7ea7\u53d8\u91cf\u6ce8\u5165",id:"\u5bb9\u5668\u7ea7\u53d8\u91cf\u6ce8\u5165",children:[]}]},{value:"\u5b89\u88c5\u540e\u81ea\u52a8\u7aef\u53e3\u8f6c\u53d1",id:"\u5b89\u88c5\u540e\u81ea\u52a8\u7aef\u53e3\u8f6c\u53d1",children:[]},{value:"Hook",id:"hook",children:[]},{value:"HelmValues \u7684\u5b9a\u5236",id:"helmvalues-\u7684\u5b9a\u5236",children:[]}],c={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("span",{id:"danger"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/config/config"},"Overview")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-deployment"},"Deploy Config")," / ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/config-deployment-spec"},"Spec")),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"nocalhost-\u63d0\u4f9b\u4e86\u54ea\u4e9b\u90e8\u7f72\u914d\u7f6e\uff1f"},"Nocalhost \u63d0\u4f9b\u4e86\u54ea\u4e9b\u90e8\u7f72\u914d\u7f6e\uff1f"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u90e8\u5206\u914d\u7f6e\u9700\u989d\u5916\u7ec4\u4ef6")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u90e8\u7f72\u914d\u7f6e\u7684\u90e8\u5206\u529f\u80fd\u4f9d\u8d56\u4e8e ",(0,o.kt)("strong",{parentName:"p"},"Nocalhost-Dep \u7ec4\u4ef6"),"\uff0c\u5982\u679c\u4f60\u4f7f\u7528 Nocalhost Server\uff0c\u6211\u4eec\u4f1a\u81ea\u52a8\u5e2e\u4f60\u5904\u7406\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u5b89\u88c5\uff0c\u5426\u5219\u9700\u8981\u8fdb\u884c\u989d\u5916\u7684\u5b89\u88c5\u3002"),(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u6ca1\u6709\u5b89\u88c5 ",(0,o.kt)("strong",{parentName:"p"},"Nocalhost-Dep \u7ec4\u4ef6"),"\uff0c\u90e8\u5206\u529f\u80fd\u5c06\u53d7\u9650\uff0c\u6587\u7ae0\u4e2d\u5c06\u4f1a\u6807\u8bb0\u51fa\u90a3\u4e9b\u9700\u8981\u501f\u52a9 ",(0,o.kt)("strong",{parentName:"p"}," Nocalhost-Dep ")," \u624d\u80fd\u5b9e\u73b0\u7684\u529f\u80fd\u3002"))),(0,o.kt)("h2",{id:"\u542f\u52a8\u987a\u5e8f\u4f9d\u8d56\u63a7\u5236-\u7ec4\u4ef6\u4f9d\u8d56"},"\u542f\u52a8\u987a\u5e8f\u4f9d\u8d56\u63a7\u5236 (",(0,o.kt)("a",{parentName:"h2",href:"#danger"},"\u7ec4\u4ef6\u4f9d\u8d56"),")"),(0,o.kt)("p",null,"\u8303\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: example\n  manifestType: rawManifestGit\n  resourcePath: [ "example" ]\n  \n  services:\n    - name: whatever\n      serviceType: deployment\n      \n      dependLabelSelector:\n        pods:\n          - "name=mariadb"\n          - "app.kubernetes.io/name=example"\n        jobs:\n          - "job-name=init-job"\n')),(0,o.kt)("p",null,"\u5f53\u67d0\u9879\u8d44\u6e90\u5728\u90e8\u7f72\u914d\u7f6e\u4e2d\u58f0\u660e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"dependLabelSelector")," \u4ee5\u540e\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"pods")," \u6570\u7ec4\u4e2d\u7684\u5b57\u7b26\u4ee3\u8868\u8981\u7b49\u5f85\u7684 pods \u7684 labels\uff0c\u683c\u5f0f\u4e3a\u952e\u503c\u5bf9\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"jobs")," \u6570\u7ec4\u4e2d\u7684\u5b57\u7b26\u4ee3\u8868\u8981\u7b49\u5f85\u7684 jods \u7684 labels\uff0c\u683c\u5f0f\u4e3a\u952e\u503c\u5bf9\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pods")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"jobs")," \u90fd\u4e3a\u53ef\u9009\u9879\u3002\u5b9e\u9645\u90e8\u7f72\u8fc7\u7a0b\u4e2d\uff0c\u5b83\u4f1a\u4e3a\u6307\u5b9a\u7684\u5de5\u4f5c\u8d1f\u8f7d\u751f\u6210\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"initContinaer"),"\uff0c\u7b49\u5f85\u6240\u6709\u5339\u914d label \u7684 pods \u72b6\u6001\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Ready"),"\uff0c\u7b49\u5f85\u6240\u6709\u5339\u914d label \u7684 jobs \u72b6\u6001\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Succeeded"),"\u3002"),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf\u6ce8\u5165-\u7ec4\u4ef6\u4f9d\u8d56"},"\u73af\u5883\u53d8\u91cf\u6ce8\u5165 (",(0,o.kt)("a",{parentName:"h2",href:"#danger"},"\u7ec4\u4ef6\u4f9d\u8d56"),")"),(0,o.kt)("h3",{id:"\u5168\u5c40\u53d8\u91cf\u6ce8\u5165"},"\u5168\u5c40\u53d8\u91cf\u6ce8\u5165"),(0,o.kt)("p",null,"\u8303\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: example\n  manifestType: rawManifestGit\n  resourcePath: [ "example" ]\n  \n  ##### start\n  env:\n    - name: DEBUG\n      value: false\n    - name: DOMAIN\n      value: nocalhost.dev\n  envFrom:\n    envFile:\n      - path: relpath/to/env/file\n  ##### end\n\n')),(0,o.kt)("p",null,"\u5168\u5c40\u53d8\u91cf\u6ce8\u5165\u9700\u8981\u58f0\u660e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"application")," \u8fd9\u4e00\u7ea7\uff0c\u5728\u90e8\u7f72\u65f6\uff0c\u5b83\u5c06\u5f80\u6240\u6709\u90e8\u7f72\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"DaemonSet"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"ReplicaSet"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"StatefulSet"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Job"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"CronJob")," \u4e2d\u6ce8\u5165\u5bf9\u5e94\u7684\u73af\u5883\u53d8\u91cf\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u53d8\u91cf\u6ce8\u5165\u652f\u6301\u4e24\u79cd\u5199\u6cd5\uff0c\u53ef\u4ee5\u6df7\u642d")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u79cd\u662f\u76f4\u63a5\u58f0\u660e\u952e\u503c\u5bf9"),(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u79cd\u662f\u58f0\u660e\u4e00\u4e2a\u76f8\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"config.yaml")," \u7684 env \u6587\u4ef6\uff0c\u5185\u5bb9\u4e3a\u9010\u884c\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"Key=Value"),"\uff1a")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-dotenv"},"DEBUG=true\nDOMAIN=nocalhost.dev\n")))),(0,o.kt)("p",null,"\u5176\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"env")," \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"envFrom")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"\u5bb9\u5668\u7ea7\u53d8\u91cf\u6ce8\u5165"},"\u5bb9\u5668\u7ea7\u53d8\u91cf\u6ce8\u5165"),(0,o.kt)("p",null,"\u8303\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: example\n  manifestType: rawManifestGit\n  resourcePath: [ "example" ]\n\n  services:\n    - name: whatever\n      serviceType: deployment\n      containers:\n        - name: your-container-name\n          install:\n\n            ##### start\n            env:\n              - name: DEBUG\n                value: false\n              - name: DOMAIN\n                value: nocalhost.dev\n            envFrom:\n              envFile:\n                - path: relpath/to/env/file  \n            ##### end\n')),(0,o.kt)("p",null,"\u5bb9\u5668\u7ea7\u7684\u53d8\u91cf\u6ce8\u5165\u58f0\u660e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"application.services[*].containers[*].install")," \u4e2d\uff0c\u8868\u660e\u5728\u90e8\u7f72\u65f6\uff0c\u5f80\u5bf9\u5e94\u7684\u5bb9\u5668\u4e2d\u6ce8\u5165\u5bf9\u5e94\u53d8\u91cf\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"env")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"envFrom")," \u7684\u89c4\u5219\u4e0e\u5e94\u7528\u7ea7\u4e00\u81f4\u3002"),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u5b89\u88c5\u540e\u81ea\u52a8\u7aef\u53e3\u8f6c\u53d1"},"\u5b89\u88c5\u540e\u81ea\u52a8\u7aef\u53e3\u8f6c\u53d1"),(0,o.kt)("p",null,"\u8303\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: example\n  manifestType: rawManifestGit\n  resourcePath: [ "example" ]\n\n  services:\n    - name: whatever\n      serviceType: deployment\n      containers:\n        - name: your-container-name\n          install:\n            \n            ##### start\n            portForward:\n              - 5005:5005\n              - 3306:3306\n            ##### end\n')),(0,o.kt)("p",null,"\u914d\u7f6e\u89c4\u5219\u4e0e\u5bb9\u5668\u53ca\u7684\u53d8\u91cf\u6ce8\u5165\u58f0\u660e\u7c7b\u4f3c\uff0c\u9700\u8981\u914d\u7f6e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"application.services[*].containers[*].install")," \u4e2d\u3002"),(0,o.kt)("p",null,"\u5b89\u88c5\u540e\u7684\u7aef\u53e3\u8f6c\u53d1\u987e\u540d\u601d\u4e49\uff0c\u5728\u5e94\u7528\u5b89\u88c5\u5b8c\u6bd5\uff0c\u53ef\u4ee5\u81ea\u52a8\u4e3a\u67d0\u4e9b\u670d\u52a1\u505a\u7aef\u53e3\u8f6c\u53d1\u5230\u672c\u5730\uff0c\u5982\u5e38\u7528\u7684\u6570\u636e\u5e93\u3001MQ \u7b49\u7aef\u53e3\uff0c\u9002\u5408\u5728\u5b89\u88c5\u5b8c\u6bd5\u540e\u81ea\u52a8\u8f6c\u53d1\uff0c\u914d\u7f6e\u7684\u89c4\u5219\u3002\u7aef\u53e3\u8f6c\u53d1\u7684\u89c4\u5219\u4e0e K8s \u4e00\u81f4\uff0c\u5373 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u672c\u5730\u7aef\u53e3:\u5bb9\u5668\u7aef\u53e3")),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"hook"},"Hook"),(0,o.kt)("p",null,"\u8303\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: example\n  manifestType: rawManifestGit\n  resourcePath: [ "example" ]\n\n  ##### start\n  onPreInstall:\n    - path: manifest/templates/pre-install/print-num-job-01.yaml\n      weight: "0"\n    - path: manifest/templates/hook/pre-install.yaml\n      weight: "1"\n  onPostInstall:\n    - path: manifest/templates/hook/post-install.yaml\n      weight: "1"\n  onPreUpgrade:\n    - path: manifest/templates/hook/pre-upgrade.yaml\n      weight: "1"\n  onPostUpgrade:\n    - path: manifest/templates/hook/post-upgrade.yaml\n      weight: "1"\n  onPreDelete:\n    - path: manifest/templates/hook/pre-delete.yaml\n      weight: "1"\n  onPostDelete:\n    - path: manifest/templates/hook/post-delete.yaml\n      weight: "1"\n  ##### end\n')),(0,o.kt)("p",null,"Nocalhost \u652f\u6301\u5728\u5e94\u7528\u7684\u751f\u547d\u5468\u671f\u6ce8\u5165\u5404\u79cd Hook\uff0c",(0,o.kt)("strong",{parentName:"p"},"Hook \u76ee\u524d\u53ea\u652f\u6301 Job"),"\uff0c\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," \u4e3a",(0,o.kt)("strong",{parentName:"p"},"\u76f8\u5bf9\u4e8e\u4e3b\u76ee\u5f55"),"\u7684 RawManifest\uff0c\u5fc5\u987b\u662f Job \u7c7b\u578b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"weight")," \u4e3a\u6743\u91cd\uff0c\u6743\u91cd\u4f4e\u7684\u5148\u6267\u884c\u3002"),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Hook\u7684\u9650\u5236")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Hook \u4e0e Helm \u7684 Hook \u7c7b\u4f3c\uff0cHook \u672c\u8eab\u662f\u4e3a\u4e86\u5f25\u8865\u975e Helm \u5e94\u7528\u7684\u4e0d\u8db3\uff0c\u6240\u4ee5",(0,o.kt)("strong",{parentName:"p"},"Helm \u7c7b\u578b\u5e94\u7528\u65e0\u6cd5\u914d\u7f6e Hook\uff08\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Helm \u7684 Hook\uff09"),"\u3002"))),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Hook\u7684\u89e3\u91ca")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onPreInstall")," \u53d1\u751f\u5728\u5e94\u7528\u90e8\u7f72\u4e4b\u524d\uff0c\u4f8b\u5982\u6267\u884c\u96c6\u7fa4\u3001\u6570\u636e\u5e93\u4e4b\u7c7b\u7684\u7684\u4e00\u4e9b\u521d\u59cb\u5316\u64cd\u4f5c\u3002\u4f1a\u5728 Job \u72b6\u6001\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"Successed")," \u540e\uff0c\u624d\u5f00\u59cb\u771f\u6b63\u6267\u884c\u90e8\u7f72\uff0c\u5982\u679c\u5931\u8d25\uff0c\u5219\u5b89\u88c5\u7ec8\u6b62\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"onPostInstall")," \u53d1\u751f\u5728\u5e94\u7528\u90e8\u7f72\u4e4b\u540e\uff0c\u5f53\u6240\u6709\u8d44\u6e90\u90fd\u63d0\u4ea4\u5230 K8s Api Server\uff0c\u4f1a\u6267\u884c\u6b64 Job\uff0c\u72b6\u6001\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"Successed")," \u540e\uff0c\u90e8\u7f72\u6210\u529f\u3002\u5426\u5219\u5c06\u56de\u6eda\uff0c\u6267\u884c\u5378\u8f7d\u64cd\u4f5c\u3002")),(0,o.kt)("br",null),(0,o.kt)("p",{parentName:"div"},"\u4f9d\u6b21\u7c7b\u63a8\uff0cUpgradeHook \u548c DeleteHook \u4e0d\u540c\u7684\u662f\uff0c\u5b83\u4eec\u5728\u6267\u884c\u5931\u8d25\u540e\u90fd\u4e0d\u4f1a\u8fdb\u884c\u56de\u6eda\uff0c\u4ec5\u63d0\u793a\u5931\u8d25\u3002"))),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"helmvalues-\u7684\u5b9a\u5236"},"HelmValues \u7684\u5b9a\u5236"),(0,o.kt)("p",null,"\u8303\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'application:\n  name: example\n  manifestType: rawManifestGit\n  resourcePath: [ "example" ]\n\n  ##### start\n  helmValues:\n    - key: nocalhost.example\n      value: foo\n    - key: nocalhost.deploy.example\n      value: bar\n  \n  helmVals:\n    nocalhost:\n      example: foo\n      deploy:\n        example: {{ Release.Name }}\n  ##### end\n')),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"HelmValues \u652f\u6301\u4e24\u79cd\u5199\u6cd5")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u79cd\u5199\u6cd5\u4ec5\u652f\u6301\u7eaf\u5b57\u7b26\u4e32\uff0c\u4f18\u5148\u7ea7\u66f4\u9ad8\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u79cd\u5199\u6cd5\u4e0e ",(0,o.kt)("inlineCode",{parentName:"li"},"values.yaml")," \u522b\u65e0\u4e8c\u81f4\uff0c\u53ef\u7a7f\u63d2 Helm \u8bed\u6cd5\u3002")))))}d.isMDXComponent=!0}}]);