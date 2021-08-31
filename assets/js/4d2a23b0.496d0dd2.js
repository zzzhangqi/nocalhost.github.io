"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[8465],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(f,l(l({ref:t},p),{},{components:n})):i.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6861:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),l=["components"],o={},u="0.5.x",s={unversionedId:"changelogs/0.5.x",id:"changelogs/0.5.x",isDocsHomePage:!1,title:"0.5.x",description:"0.5.4 \uff082021-08-30\uff09",source:"@site/docs/changelogs/0.5.x.md",sourceDirName:"changelogs",slug:"/changelogs/0.5.x",permalink:"/docs/changelogs/0.5.x",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/docs/changelogs/0.5.x.md",tags:[],version:"current",lastUpdatedBy:"Garry",lastUpdatedAt:1630388057,formattedLastUpdatedAt:"8/31/2021",frontMatter:{},sidebar:"docs",previous:{title:"0.4.x",permalink:"/docs/changelogs/0.4.x"}},p=[{value:"0.5.4 \uff082021-08-30\uff09",id:"054-\uff082021-08-30\uff09",children:[{value:"nhctl",id:"nhctl",children:[]},{value:"VS Code",id:"vs-code",children:[]},{value:"JetBrains",id:"jetbrains",children:[]}]},{value:"0.5.1 (2021-08-16)",id:"051-2021-08-16",children:[{value:"nhctl",id:"nhctl-1",children:[]},{value:"VS Code",id:"vs-code-1",children:[]},{value:"JetBrains",id:"jetbrains-1",children:[]}]}],c={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"05x"},"0.5.x"),(0,a.kt)("h2",{id:"054-\uff082021-08-30\uff09"},"0.5.4 \uff082021-08-30\uff09"),(0,a.kt)("h3",{id:"nhctl"},"nhctl"),(0,a.kt)("h4",{id:"new-features"},"New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supports to get development configuration from ",(0,a.kt)("inlineCode",{parentName:"li"},"nocalhost-hub"))),(0,a.kt)("h4",{id:"refactor--improvement"},"Refactor & Improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Optimize the ",(0,a.kt)("inlineCode",{parentName:"li"},"daemon")," startup speed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exec")," supports the use of remote Pod env variables")),(0,a.kt)("h4",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed the long waiting issue of using the ",(0,a.kt)("inlineCode",{parentName:"li"},"get")," command"),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue of empty tree structure caused by unavailable ",(0,a.kt)("inlineCode",{parentName:"li"},"apiservice"))),(0,a.kt)("h3",{id:"vs-code"},"VS Code"),(0,a.kt)("h4",{id:"new-features-1"},"New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automatically switch to GitHub release when failed download plugin from CODING ")),(0,a.kt)("h4",{id:"refactor--improvement-1"},"Refactor & Improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Optimize the cluster inspector performance and user experience"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nhctl")," unified storage file sync related configuration")),(0,a.kt)("h4",{id:"bug-fixes-1"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Fixed the error notification "Failed to get node configs, please try again"'),(0,a.kt)("li",{parentName:"ul"},"Fixed the use of ",(0,a.kt)("inlineCode",{parentName:"li"},"appName")," issue")),(0,a.kt)("h3",{id:"jetbrains"},"JetBrains"),(0,a.kt)("h4",{id:"new-features-2"},"New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Switch to github artifact while failing to download ",(0,a.kt)("inlineCode",{parentName:"li"},"nhctl")," from coding artifact"),(0,a.kt)("li",{parentName:"ul"},"Show info while no application found"),(0,a.kt)("li",{parentName:"ul"},"Made actions cancelable"),(0,a.kt)("li",{parentName:"ul"},"Auto scroll tree path to visible while starting dev mode in new window")),(0,a.kt)("h4",{id:"refactor--improvement-2"},"Refactor & Improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improve python remote debug experience"),(0,a.kt)("li",{parentName:"ul"},"Show port forward status"),(0,a.kt)("li",{parentName:"ul"},"Unify developing status in UI"),(0,a.kt)("li",{parentName:"ul"},"Add timeout to ",(0,a.kt)("inlineCode",{parentName:"li"},"nhctl")," get commands"),(0,a.kt)("li",{parentName:"ul"},"Add missing actions to default application"),(0,a.kt)("li",{parentName:"ul"},"Hide unauthorized actions for dev space viewer"),(0,a.kt)("li",{parentName:"ul"},"Unify UI texts")),(0,a.kt)("h4",{id:"bug-fixes-2"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed the failure issue on starting run/debug while workload not fully started"),(0,a.kt)("li",{parentName:"ul"},"Fixed the issue when KubeConfig missing while setting associate")),(0,a.kt)("h2",{id:"051-2021-08-16"},"0.5.1 (2021-08-16)"),(0,a.kt)("h3",{id:"nhctl-1"},"nhctl"),(0,a.kt)("h4",{id:"new-features-3"},"New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"syncthing bin")," package into ",(0,a.kt)("inlineCode",{parentName:"li"},"nhctl"),"soudao"),(0,a.kt)("li",{parentName:"ul"},"Supports multiple hooks in the application life cycle"),(0,a.kt)("li",{parentName:"ul"},"Supports to check cluster status"),(0,a.kt)("li",{parentName:"ul"},"Supports JetBrains PHP debugging")),(0,a.kt)("h3",{id:"vs-code-1"},"VS Code"),(0,a.kt)("h4",{id:"new-features-4"},"New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add cluster status"),(0,a.kt)("li",{parentName:"ul"},"Add guidance of ",(0,a.kt)("inlineCode",{parentName:"li"},"No cluster information"))),(0,a.kt)("h4",{id:"refactor--improvement-3"},"Refactor & Improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Optimize ",(0,a.kt)("inlineCode",{parentName:"li"},"syncService")," icon"),(0,a.kt)("li",{parentName:"ul"},"Optimize access to apps and increase opening speed"),(0,a.kt)("li",{parentName:"ul"},"Optimize plugin descriptions")),(0,a.kt)("h4",{id:"bug-fixes-3"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed the trust issue when installing ssh for the first time"),(0,a.kt)("li",{parentName:"ul"},"Fixed the notification issue of ",(0,a.kt)("inlineCode",{parentName:"li"},"Open Project")," is not associated with a target"),(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"run")," command"),(0,a.kt)("li",{parentName:"ul"},"Fixed the config issue of ",(0,a.kt)("inlineCode",{parentName:"li"},"StatefulSet"))),(0,a.kt)("h3",{id:"jetbrains-1"},"JetBrains"),(0,a.kt)("h4",{id:"new-features-5"},"New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automatically open browser after installed Demo App"),(0,a.kt)("li",{parentName:"ul"},"Add cluster status"),(0,a.kt)("li",{parentName:"ul"},"Supports clearing namespace PVC"),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"nhctl")," error message pop-up feature"),(0,a.kt)("li",{parentName:"ul"},"Add supports to JetBrains IDEs 2021.2")),(0,a.kt)("h4",{id:"refactor--improvement-4"},"Refactor & Improvement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Modify the NPE that appears when the tree menu is rendered"),(0,a.kt)("li",{parentName:"ul"},"Optimize PHP debug")),(0,a.kt)("h4",{id:"bug-fixes-4"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed ",(0,a.kt)("inlineCode",{parentName:"li"},"list workload PVC")," issue")))}d.isMDXComponent=!0}}]);