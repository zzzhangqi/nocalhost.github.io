"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[7778],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(t),u=i,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||a;return t?o.createElement(m,r(r({ref:n},s),{},{components:t})):o.createElement(m,r({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<a;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71562:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=t(22122),i=t(19756),a=(t(67294),t(3905)),r=["components"],c={title:"Deploy Config"},l={unversionedId:"config/config-deployment-en",id:"config/config-deployment-en",isDocsHomePage:!1,title:"Deploy Config",description:"Overview / Deploy Config",source:"@site/docs/config/config-deployment-en.md",sourceDirName:"config",slug:"/config/config-deployment-en",permalink:"/docs/config/config-deployment-en",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/config/config-deployment-en.md",version:"current",lastUpdatedBy:"anurnomeru",lastUpdatedAt:1639381313,formattedLastUpdatedAt:"12/13/2021",frontMatter:{title:"Deploy Config"},sidebar:"docs",previous:{title:"Configure",permalink:"/docs/config/configure-en"},next:{title:"Quick Start",permalink:"/docs/config/config-deployment-quickstart"}},p=[{value:"Quick Start  \u2014\u2014 Basic Nocalhost Deploy Config",id:"quick-start---basic-nocalhost-deploy-config",children:[]},{value:"Nocalhost Deploy Config Specification",id:"nocalhost-deploy-config-specification",children:[]},{value:"Dep Component and Other Methods",id:"dep-component-and-other-methods",children:[]},{value:"Config.yaml Syntax",id:"configyaml-syntax",children:[]}],s={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/config/config-en"},"Overview")," / ",(0,a.kt)("a",{parentName:"p",href:"/docs/config/config-deployment-en"},"Deploy Config")),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We will introduce Nocalhost Deploy config in this section."),(0,a.kt)("p",null,"Nocalhost supports the deployment of K8s applications by Helm, RawManifest and Kustomiz. They can provide functions such as dependency order specification when apply the workload, deployment env injection, life cycle hook, etc. Moreover, they also support multiple configuration methods, such as Configmap, Annotation, etc. "),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"PRE-REQUIRE")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Before starting this section, please make sure you have already known how to configure Nocalhost. If not, please read ",(0,a.kt)("a",{parentName:"p",href:"/docs/config/config-overview-en"},"Nocalhost Overview")," first."))),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"quick-start---basic-nocalhost-deploy-config"},(0,a.kt)("a",{parentName:"h2",href:"/docs/config/config-deployment-quickstart"},"Quick Start  \u2014\u2014 Basic Nocalhost Deploy Config")),(0,a.kt)("p",null,"We have introduced some functions provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy Config"),", so in this section, we will give a few examples to explain more about the basic Nocalhost ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy Config")," and installation."),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"nocalhost-deploy-config-specification"},(0,a.kt)("a",{parentName:"h2",href:"/docs/config/config-deployment-spec"},"Nocalhost Deploy Config Specification")),(0,a.kt)("p",null,"After knowing the most basic Nocalhost ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy Config"),",  we will introduce the specific deployment configurations in this section, including dependency order specification when initiating the workload, deployment env injection, hook, etc."),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"dep-component-and-other-methods"},(0,a.kt)("a",{parentName:"h2",href:"/docs/config/config-deployment-advance"},"Dep Component and Other Methods")),(0,a.kt)("p",null,"Nocalhost ",(0,a.kt)("inlineCode",{parentName:"p"},"Dev Config")," supports multiple methods, such as ConfigMap, Annotations, etc. In fact, these methods are also applicable in ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy Config"),", but some functions need to work in conjunction with K8s WebHook, and the  ",(0,a.kt)("inlineCode",{parentName:"p"},"Nocalhost-Dep")," component in Nocalhost plays that role. ",(0,a.kt)("inlineCode",{parentName:"p"},"Nocahost Server")," will automatically deploy this component, so if you do not use  ",(0,a.kt)("inlineCode",{parentName:"p"},"Nocalhost Server"),", you need to deployment extra component ",(0,a.kt)("inlineCode",{parentName:"p"},"Nocalhost Dep"),"."),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"configyaml-syntax"},(0,a.kt)("a",{parentName:"h2",href:"/docs/config/config-deployment-syntax"},"Config.yaml Syntax")),(0,a.kt)("p",null,"To improve the reusability and flexibility of Nocalhost configuration and avoid repeated configure, Nocahost provides environment variable injection and yaml include syntax."))}d.isMDXComponent=!0}}]);