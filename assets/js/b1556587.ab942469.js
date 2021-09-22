"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[7565],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(o),h=n,p=m["".concat(l,".").concat(h)]||m[h]||d[h]||r;return o?i.createElement(p,s(s({ref:t},u),{},{components:o})):i.createElement(p,s({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var c=2;c<r;c++)s[c]=o[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3919:function(e,t,o){function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!i(e)}o.d(t,{b:function(){return i},Z:function(){return n}})},4996:function(e,t,o){o.d(t,{C:function(){return r},Z:function(){return s}});var i=o(2263),n=o(3919);function r(){var e=(0,i.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,o=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,o,i){var r=void 0===i?{}:i,s=r.forcePrependBaseUrl,a=void 0!==s&&s,l=r.absolute,c=void 0!==l&&l;if(!o)return o;if(o.startsWith("#"))return o;if((0,n.b)(o))return o;if(a)return t+o;var u=o.startsWith(t)?o:t+o.replace(/^\//,"");return c?e+u:u}(r,o,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},9558:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return d},toc:function(){return m},default:function(){return p}});var i=o(2122),n=o(9756),r=(o(7294),o(3905)),s=o(4996),a=["components"],l={title:"How to debug microservices in Kubernetes with proxy, sidecar or service mesh?",author:"Jimmy Song",author_title:"Developer advocate at Tetrate",author_url:"https://github.com/rootsongjc",author_image_url:"https://avatars.githubusercontent.com/u/3328185?v=4",tags:["Kubernetes","Cloud-Native","Microservice"]},c=void 0,u={permalink:"/blog/2021/07/05/jimmy",editUrl:"https://github.com/nocalhost/nocalhost.github.io/tree/main/blog/2021-07-05-jimmy.md",source:"@site/blog/2021-07-05-jimmy.md",title:"How to debug microservices in Kubernetes with proxy, sidecar or service mesh?",description:"This blog is originally posted on Jimmy's Blog",date:"2021-07-05T00:00:00.000Z",formattedDate:"July 5, 2021",tags:[{label:"Kubernetes",permalink:"/blog/tags/kubernetes"},{label:"Cloud-Native",permalink:"/blog/tags/cloud-native"},{label:"Microservice",permalink:"/blog/tags/microservice"}],readingTime:6.32,truncated:!1,authors:[{name:"Jimmy Song",title:"Developer advocate at Tetrate",url:"https://github.com/rootsongjc",imageURL:"https://avatars.githubusercontent.com/u/3328185?v=4"}],prevItem:{title:"Announcing Nocalhost v0.5.6",permalink:"/blog/0.5.6"},nextItem:{title:"Redefine Cloud Native Dev Environment",permalink:"/blog/2021/01/01/"}},d={authorsImageUrls:[void 0]},m=[{value:"Debugging microservices is vastly different from traditional monolithic applications",id:"debugging-microservices-is-vastly-different-from-traditional-monolithic-applications",children:[{value:"Multiple dependencies",id:"multiple-dependencies",children:[]},{value:"Access from a local machine",id:"access-from-a-local-machine",children:[]},{value:"Slow development loop",id:"slow-development-loop",children:[]}]},{value:"Tools",id:"tools",children:[{value:"Proxy \u2013 debugging microservices with Telepresence",id:"proxy--debugging-microservices-with-telepresence",children:[]},{value:"Sidecar \u2013 debugging microservices with Nocalhost",id:"sidecar--debugging-microservices-with-nocalhost",children:[]},{value:"Service Mesh \u2013 debugging microservices with Istio",id:"service-mesh--debugging-microservices-with-istio",children:[]}]},{value:"Summary",id:"summary",children:[]}],h={toc:m};function p(e){var t=e.components,o=(0,n.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This blog is originally posted on ",(0,r.kt)("a",{parentName:"p",href:"https://jimmysong.io/en/blog/how-to-debug-microservices-in-kubernetes-with-proxy-sidecar-or-service-mesh/"},"Jimmy's Blog"))),(0,r.kt)("h1",{id:"how-to-debug-microservices-in-kubernetes-with-proxy-sidecar-or-service-mesh"},"How to debug microservices in Kubernetes with proxy, sidecar or service mesh?"),(0,r.kt)("p",null,"This article explains three patterns/tools for debugging microservices in Kubernetes and the changes brought by the introduction of Istio for debugging microservices."),(0,r.kt)("p",null,"Kubernetes is arguably the best environment for running microservices so far, but the experience of debugging microservices in a Kubernetes environment may not be as user-friendly. This article will show you how to debug microservices in Kubernetes, introduce common tools, and explain how the introduction of Istio impacts debugging microservices."),(0,r.kt)("h2",{id:"debugging-microservices-is-vastly-different-from-traditional-monolithic-applications"},"Debugging microservices is vastly different from traditional monolithic applications"),(0,r.kt)("p",null,"The debugging of microservices has been a long-standing problem for software developers. This challenge does not exist in traditional monolithic applications because developers can leverage the debugger in IDEs to add breakpoints, modify environment variables, single-step execution, etc. for their applications, all of which provide great help in software debugging. With the popularity of Kubernetes, the debugging of microservices becomes a thorny issue, where the following issues are more complicated than the debugging of traditional monolithic applications."),(0,r.kt)("h3",{id:"multiple-dependencies"},"Multiple dependencies"),(0,r.kt)("p",null,"A microservice often depends on multiple other microservices, some shared volumes across multiple microservices, and authorizations based on service accounts. When debugging a microservice, how do you deploy other dependent services to quickly build a latest set of staging environments?"),(0,r.kt)("h3",{id:"access-from-a-local-machine"},"Access from a local machine"),(0,r.kt)("p",null,"When microservices are running on a developer\u2019s local computer, there is usually no direct access to the services in a Kubernetes cluster. How can you debug microservices deployed in a Kubernetes cluster as if they were local services?"),(0,r.kt)("h3",{id:"slow-development-loop"},"Slow development loop"),(0,r.kt)("p",null,"Usually, it takes a long process to update the code and build it into an image before pushing it to the cluster. How do you speed up the development cycle? Let\u2019s look at the tools that address those challenges."),(0,r.kt)("h2",{id:"tools"},"Tools"),(0,r.kt)("p",null,"The main solutions for debugging microservices in Kubernetes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Proxy: by building a VPN, deploying a proxy in the Kubernetes cluster, and adding local debug endpoints to make the services in Kubernetes directly accessible to local applications, your architecture will look like ","[ local service ]"," <-> ","[ proxy ]"," <-> ","[ app in Kubernetes ]","."),(0,r.kt)("li",{parentName:"ul"},"Sidecar: Inject a sidecar into the pod of the microservice to be debugged to intercept all traffic to and from the service, so that the service can be tracked and monitored, and the service can also be debugged in this sidecar."),(0,r.kt)("li",{parentName:"ul"},"Service Mesh: To get an overall picture of the application, inject sidecars into all microservices so that you can get a dashboard that monitors global status.")),(0,r.kt)("p",null,"Here are three typical open source projects that implement the above solutions, each of which can help you debug microservices from a different perspective. You can apply them at different stages of software development and they can be said to be complementary to each other."),(0,r.kt)("h3",{id:"proxy--debugging-microservices-with-telepresence"},"Proxy \u2013 debugging microservices with Telepresence"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.telepresence.io/"},"Telepresence")," is essentially a local proxy that proxies data volumes, environment variables, and networks in a Kubernetes cluster locally. The following diagram shows the main usage scenarios for Telepresence."),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/blog/how-to-debug-microservices/telepresence.jpeg")}),(0,r.kt)("figcaption",null,"Proxy mode: Telepresence")),(0,r.kt)("p",null,"Users need to manually execute the telepresence command locally, which will automatically deploy the agent to Kubernetes. Once the agent has been deployed,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Local services will have complete access to other services in the Kubernetes cluster, environment variables, Secret, ConfigMap, etc."),(0,r.kt)("li",{parentName:"ul"},"Services in the cluster also have direct access to the locally exposed endpoints.")),(0,r.kt)("p",null,"However, this approach requires users to run multiple commands while debugging locally, and in some network environments it may not be possible to establish a VPN connection to the Kubernetes cluster."),(0,r.kt)("h3",{id:"sidecar--debugging-microservices-with-nocalhost"},"Sidecar \u2013 debugging microservices with Nocalhost"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://nocalhost.dev/"},"Nocalhost")," is a Kubernetes-based cloud development environment. To use it, you just need to install a plugin in your IDE \u2013 VS Code to extend Kubernetes and shorten the development feedback cycle. The development environment can be isolated by creating different namespaces for different users and using ServiceAccount when binding to different user corners. Nocalhost also provides a web console and API for administrators to manage different development environments."),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/blog/how-to-debug-microservices/sidecar-nocalhost.jpeg")}),(0,r.kt)("figcaption",null,"Sidecar mode: Nocalhost")),(0,r.kt)("p",null,"As long as you have a Kubernetes cluster and have admin rights to the cluster, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Nocalhost documentation")," to quickly start trying it out. To use the Nocalhost plugin in VS Code, you need to configure the Kubernetes cluster in the plugin first."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the Kubeconfig file you just exported or copy and paste the contents of the file directly into the configuration."),(0,r.kt)("li",{parentName:"ol"},"Then select the service you need to test and select the corresponding Dev Container. VS Code will automatically open a new code window.")),(0,r.kt)("p",null,"Here is an example of the ",(0,r.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/examples/bookinfo/"},"bookinfo sample")," provided by Istio. You can open the cloned code in your local IDE and click the hammer next to the code file to enter development mode. Selecting the corresponding DevContainer and Nocalhost will automatically inject a development container sidecar into the pod and automatically enter the container in the terminal, as shown in the following figure."),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/blog/how-to-debug-microservices/nocalhost-vs-code.jpeg")}),(0,r.kt)("figcaption",null,"Nocalhost VS Code")),(0,r.kt)("p",null,"In development mode, the code is modified locally without rebuilding the image, and the remote development environment takes effect in real time, which can greatly accelerate the development speed. At the same time, Nocalhost also provides a server for managing the development environment and user rights, as shown in the following figure."),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/blog/how-to-debug-microservices/nocalhost-web-admin.jpeg")}),(0,r.kt)("figcaption",null,"Nocalhost Server")),(0,r.kt)("h3",{id:"service-mesh--debugging-microservices-with-istio"},"Service Mesh \u2013 debugging microservices with Istio"),(0,r.kt)("p",null,"The above method of using proxy and sidecar can only debug one service at a time. You\u2019ll need a mesh to get the global status of the application, such as the metrics of the service obtained, and debug the performance of the service by understanding the dependency and invocation process of the service through distributed tracing. These observability features need to be implemented by injecting sidecar uniformly for all services. And, when your services are in the process of migrating from VMs to Kubernetes, using Istio can bring VMs and Kubernetes into a single network plane (as shown below), making it easy for developers to debug and do incremental migrations."),(0,r.kt)("figure",{className:"img-frame"},(0,r.kt)("img",{className:"gif-img",src:(0,s.Z)("/img/blog/how-to-debug-microservices/istio-service-mesh.jpeg")}),(0,r.kt)("figcaption",null,"Service Mesh mode: Istio")),(0,r.kt)("p",null,"Of course, these benefits do not come without a \u201ccost.\u201d With the introduction of Istio, your Kubernetes services will need to adhere to the Istio naming convention and you\u2019ll need to know how to debug microservices using the Istioctl command line and logging."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("em",{parentName:"li"},"istioctl analyze")," command to debug the deployment of microservices in your cluster, and you can use YAML files to examine the deployment of resources in a namespace or across your cluster."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("em",{parentName:"li"},"istioctl proxy-config secret")," to ensure that the secret of a pod in a service mesh is loaded correctly and is valid.")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In the process of microservicing applications and migrating from virtual machines to Kubernetes, developers need to make a lot of changes in their mindset and habits. By building a VPN between local and Kubernetes via proxy, developers can easily debug services in Kubernetes as if they were local services. By injecting a sidecar into the pod, you can achieve real-time debugging and speed up the development process. Finally, the Istio service mesh truly enables global observability, and you can also use tools like ",(0,r.kt)("a",{parentName:"p",href:"https://www.tetrate.io/tetrate-service-bridge/"},"Tetrate Service Bridge")," to manage heterogeneous platforms, helping you gradually move from monolithic applications to microservices."))}p.isMDXComponent=!0}}]);