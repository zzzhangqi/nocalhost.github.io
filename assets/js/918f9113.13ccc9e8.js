"use strict";(self.webpackChunknh_docs=self.webpackChunknh_docs||[]).push([[7913,1964,6375],{69310:function(e,t,n){var l,a=n(67294),r=["title","titleId"];function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.Z=function(e){var t=e.title,n=e.titleId,c=i(e,r);return a.createElement("svg",o({width:20,height:20,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},c),t?a.createElement("title",{id:n},t):null,l||(l=a.createElement("path",{d:"M5.923 8.78l3.37 3.37a1 1 0 001.414 0l3.37-3.37a.75.75 0 00-.53-1.28H6.453a.75.75 0 00-.53 1.28z",fill:"#36435C",fillRule:"evenodd"})))}},17669:function(e,t,n){var l=n(75963),a=n(81837);t.Z=void 0;var r=l(n(10935)),o=l(n(81837)),i=l(n(66830)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}l.default=e,n&&n.set(e,l);return l}(n(67294)),u=l(n(45598)),s=l(n(94184)),d=l(n(18475)),m=l(n(64749)),f=n(31929),p=l(n(72454)),g=n(47419);function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}var h=m.default.Option;function b(e){return e&&e.type&&(e.type.isSelectOption||e.type.isSelectOptGroup)}var y=function(e,t){var n,l=e.prefixCls,a=e.className,v=e.children,y=e.dataSource,w=(0,u.default)(v);if(1===w.length&&(0,g.isValidElement)(w[0])&&!b(w[0])){var E=(0,i.default)(w,1);n=E[0]}var O,_=n?function(){return n}:void 0;return O=w.length&&b(w[0])?v:y?y.map((function(e){if((0,g.isValidElement)(e))return e;switch((0,o.default)(e)){case"string":return c.createElement(h,{key:e,value:e},e);case"object":var t=e.value;return c.createElement(h,{key:t,value:t},e.text);default:throw new Error("AutoComplete[dataSource] only supports type `string[] | Object[]`.")}})):[],c.useEffect((function(){(0,p.default)(!("dataSource"in e),"AutoComplete","`dataSource` is deprecated, please use `options` instead."),(0,p.default)(!n||!("size"in e),"AutoComplete","You need to control style self instead of setting `size` when using customize input.")}),[]),c.createElement(f.ConfigConsumer,null,(function(n){var o=(0,n.getPrefixCls)("select",l);return c.createElement(m.default,(0,r.default)({ref:t},(0,d.default)(e,["dataSource"]),{prefixCls:o,className:(0,s.default)("".concat(o,"-auto-complete"),a),mode:m.default.SECRET_COMBOBOX_MODE_DO_NOT_USE,getInputElement:_}),O)}))},w=c.forwardRef(y);w.Option=h;var E=w;t.Z=E},95743:function(e,t,n){n(74186),n(82195),n(34279)},40987:function(e,t,n){var l=n(75963),a=n(81837);t.Z=void 0;var r=l(n(10935)),o=l(n(8558)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}l.default=e,n&&n.set(e,l);return l}(n(67294)),c=l(n(33413)),u=l(n(94184)),s=l(n(628)),d=l(n(61539)),m=n(31929),f=l(n(3236)),p=l(n(72454));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}var v=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&Object.prototype.propertyIsEnumerable.call(e,l[a])&&(n[l[a]]=e[l[a]])}return n},h=i.forwardRef((function(e,t){var n,l=e.prefixCls,a=e.size,g=e.loading,h=e.className,b=void 0===h?"":h,y=e.disabled,w=v(e,["prefixCls","size","loading","className","disabled"]);(0,p.default)("checked"in w||!("value"in w),"Switch","`value` is not a valid prop, do you mean `checked`?");var E=i.useContext(m.ConfigContext),O=E.getPrefixCls,_=E.direction,I=i.useContext(f.default),k=O("switch",l),j=i.createElement("div",{className:"".concat(k,"-handle")},g&&i.createElement(s.default,{className:"".concat(k,"-loading-icon")})),C=(0,u.default)((n={},(0,o.default)(n,"".concat(k,"-small"),"small"===(a||I)),(0,o.default)(n,"".concat(k,"-loading"),g),(0,o.default)(n,"".concat(k,"-rtl"),"rtl"===_),n),b);return i.createElement(d.default,{insertExtraNode:!0},i.createElement(c.default,(0,r.default)({},w,{prefixCls:k,className:C,disabled:y||g,ref:t,loadingIcon:j})))}));h.__ANT_SWITCH=!0,h.displayName="Switch";var b=h;t.Z=b},45142:function(e,t,n){n(74186),n(35740)},31254:function(e,t,n){n.d(t,{nR:function(){return l},Um:function(){return a},e0:function(){return r},yg:function(){return o},_n:function(){return i},aL:function(){return c},Cl:function(){return u},s7:function(){return s}});var l=[{label:"java:11",value:"nocalhost-docker.pkg.coding.net/nocalhost/dev-images/java:11"},{label:"ruby:3.0",value:"nocalhost-docker.pkg.coding.net/nocalhost/dev-images/ruby:3.0"},{label:"node:14",value:"nocalhost-docker.pkg.coding.net/nocalhost/dev-images/node:14"},{label:"python:3.9",value:"nocalhost-docker.pkg.coding.net/nocalhost/dev-images/python:3.9"},{label:"golang:latest",value:"nocalhost-docker.pkg.coding.net/nocalhost/dev-images/golang:latest"},{label:"perl:latest",value:"nocalhost-docker.pkg.coding.net/nocalhost/dev-images/perl:latest"},{label:"rust:latest",value:"nocalhost-docker.pkg.coding.net/nocalhost/dev-images/rust:latest"},{label:"php:latest",value:"nocalhost-docker.pkg.coding.net/nocalhost/dev-images/php:latest"}],a=[{name:"Basic Config",status:"reject",type:"Basic"},{name:"File Synchronization",status:"pending",type:"FileSync"},{name:"Run And Debug",status:"pending",type:"RunAndDebug"},{name:"Volume",status:"pending",type:"Volume"},{name:"Resource Limit",status:"pending",type:"ResourceLimit"},{name:"Development Variable",status:"pending",type:"DevEnv"},{name:"Port Forward",status:"pending",type:"PortForward"},{name:"Patches",status:"pending",type:"Patches"}],r=[{label:"send",value:"send"},{label:"sendReceive",value:"sendReceive"}],o=[{label:"Deployment",value:"deployment"},{label:"StatefulSet",value:"statefulset"},{label:"DaemonSet",value:"daemonset"},{label:"Job",value:"job"},{label:"CronJob",value:"cornjob"},{label:"Pod",value:"pod"}],i="http://127.0.0.1:30125",c={dev:{gitUrl:"",image:"",shell:"bash",workDir:"",storageClass:"",resources:{limits:{memory:"2048Mi",cpu:"2"},requests:{memory:"512Mi",cpu:"0.5"}},persistentVolumeDirs:[],command:{run:[],debug:[]},debug:{},hotReload:!1,sync:{type:"send",mode:"pattern",filePattern:["."],ignoreFilePattern:[".git"],deleteProtection:!0},env:[],portForward:[],sidecarImage:""}},u=[{label:"add",value:"add"},{label:"remove",value:"remove"},{label:"replace",value:"replace"},{label:"move",value:"move"},{label:"copy",value:"copy"}],s=[{label:"strategic",value:"strategic"},{label:"json",value:"json"}]},29654:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});n(95743);var l,a=n(17669),r=(n(69852),n(97538)),o=(n(67272),n(51024)),i=n(67294),c=n(24973),u=n(33006),s=n(31254),d=n(69310),m=["title","titleId"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=function(e){var t=e.title,n=e.titleId,a=p(e,m);return i.createElement("svg",f({width:20,height:20,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?i.createElement("title",{id:n},t):null,l||(l=i.createElement("path",{d:"M8.602 14.255l3.37-3.37a1 1 0 000-1.414l-3.37-3.37a.75.75 0 00-1.28.531v7.093a.75.75 0 001.28.53z",fill:"#36435C",fillRule:"evenodd"})))},v=n(79775),h=n(68474),b=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1];return i.createElement(i.Fragment,null,i.createElement(r.Z.Item,{label:(0,c.I)({message:"Container Name"}),rules:[{required:!0}],name:"name"},i.createElement(o.Z,{style:{width:460},placeholder:(0,c.I)({message:"Please Input Container Name"})})),i.createElement(r.Z.Item,{label:(0,c.I)({message:"Development Image"}),rules:[{required:!0}],name:"image"},i.createElement(a.Z,{style:{width:460},options:s.nR,placeholder:(0,c.I)({message:"Please Select OR Enter A Development Image"}),suffixIcon:v.default})),i.createElement("div",{className:u.Z["config-title"],onClick:function(){return n(!t)}},t?i.createElement(d.Z,null):i.createElement(g,null),i.createElement("span",null,i.createElement(c.Z,null,"Other basic configuration items"))),t&&i.createElement("div",{className:u.Z["config-others"]},i.createElement(r.Z.Item,{label:(0,c.I)({message:"Git Depository URL"}),name:"gitUrl"},i.createElement(o.Z,{style:{width:436},placeholder:(0,c.I)({message:"Please Input Git Depository URL"})})),i.createElement(r.Z.Item,{label:"Shell",name:"shell"},i.createElement(o.Z,{style:{width:436},placeholder:(0,c.I)({message:"Please Input Shell"})})),i.createElement(r.Z.Item,{label:(0,c.I)({message:"Work Directory"}),name:"workDir"},i.createElement(o.Z,{style:{width:436},placeholder:(0,c.I)({message:"Please Input Work Directory"})})),i.createElement(r.Z.Item,{label:i.createElement(h.ItemLabel,{label:"Sidecar",title:(0,c.I)({message:"sidecar tip"})}),name:"sidecarImage"},i.createElement(o.Z,{style:{width:436},placeholder:(0,c.I)({message:"Please Input Sidecar Image URL"})}))))}},60058:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});n(97373);var l,a=n(94055),r=n(67294),o=["title","titleId"];function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u,s=function(e){var t=e.title,n=e.titleId,a=c(e,o);return r.createElement("svg",i({width:20,height:20,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,l||(l=r.createElement("path",{d:"M10 2a8 8 0 100 16 8 8 0 000-16zm.776 12.616a.4.4 0 01-.4.4h-1.2a.4.4 0 01-.4-.4v-1.2a.4.4 0 01.4-.4h1.2c.221 0 .4.18.4.4v1.2zM12.76 9.11c-.16.23-.526.522-.982.878l-.507.35c-.246.19-.464.412-.544.666a2.04 2.04 0 00-.062.383c-.008.077-.077.235-.239.235H9.123c-.211 0-.25-.166-.246-.247.024-.531.073-1.003.29-1.257.438-.514 1.435-1.154 1.435-1.154.152-.115.275-.24.368-.375.169-.233.31-.49.31-.769 0-.322-.095-.615-.283-.88-.188-.264-.533-.397-1.032-.397-.491 0-.84.163-1.045.49-.152.24-.247.462-.287.703-.014.085-.068.264-.25.264h-1.27c-.271 0-.33-.175-.323-.26.098-1.064.514-1.791 1.25-2.258.5-.322 1.115-.483 1.845-.483.96 0 1.756.228 2.39.686.634.458.952 1.135.952 2.034 0 .55-.193 1.014-.468 1.391z",fill:"#B6C2CD",fillRule:"nonzero"})))},d=["title","titleId"];function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=function(e){var t=e.title,n=e.titleId,l=f(e,d);return r.createElement("svg",m({width:20,height:20,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},l),t?r.createElement("title",{id:n},t):null,u||(u=r.createElement("path",{d:"M10 2a8 8 0 100 16 8 8 0 000-16zm.776 12.616a.4.4 0 01-.4.4h-1.2a.4.4 0 01-.4-.4v-1.2a.4.4 0 01.4-.4h1.2c.221 0 .4.18.4.4v1.2zM12.76 9.11c-.16.23-.526.522-.982.878l-.507.35c-.246.19-.464.412-.544.666a2.04 2.04 0 00-.062.383c-.008.077-.077.235-.239.235H9.123c-.211 0-.25-.166-.246-.247.024-.531.073-1.003.29-1.257.438-.514 1.435-1.154 1.435-1.154.152-.115.275-.24.368-.375.169-.233.31-.49.31-.769 0-.322-.095-.615-.283-.88-.188-.264-.533-.397-1.032-.397-.491 0-.84.163-1.045.49-.152.24-.247.462-.287.703-.014.085-.068.264-.25.264h-1.27c-.271 0-.33-.175-.323-.26.098-1.064.514-1.791 1.25-2.258.5-.322 1.115-.483 1.845-.483.96 0 1.756.228 2.39.686.634.458.952 1.135.952 2.034 0 .55-.193 1.014-.468 1.391z",fill:"#36435C",fillRule:"nonzero"})))},g=function(e){var t=e.title,n=void 0===t?"":t,l=(0,r.useState)(!1),o=l[0],i=l[1];return r.createElement("div",{onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},style:{display:"flex",alignItems:"center"}},r.createElement(a.default,{title:n},o?r.createElement(p,null):r.createElement(s,null)))}},79775:function(e,t,n){n.r(t);var l=n(67294),a=n(69310);t.default=function(){return l.createElement("div",{style:{position:"relative",top:"-4px"}},l.createElement(a.Z,null))}},68474:function(e,t,n){n.r(t),n.d(t,{ItemLabel:function(){return s}});n(45142);var l=n(40987),a=(n(69852),n(97538)),r=(n(67272),n(51024)),o=n(67294),i=n(24973),c=n(33006),u=n(60058),s=function(e){var t=e.label,n=e.title;return o.createElement("div",{className:c.Z["item-label"]},o.createElement("span",null,t),o.createElement(u.default,{title:n}))};t.default=function(){return o.createElement(o.Fragment,null,o.createElement(a.Z.Item,{label:o.createElement(s,{label:"Run Command",title:(0,i.I)({message:"run tooltip"})}),name:"command-run"},o.createElement(r.Z,{placeholder:(0,i.I)({message:"Please Input Run Command"}),style:{width:460}})),o.createElement(a.Z.Item,{label:o.createElement(s,{label:"Debug Command",title:(0,i.I)({message:"debug tooltip"})}),name:"command-debug"},o.createElement(r.Z,{placeholder:(0,i.I)({message:"Please Input Debug Command"}),style:{width:460}})),o.createElement(a.Z.Item,{label:o.createElement(s,{label:"Debug Port",title:(0,i.I)({message:"debug port tooltip"})}),name:"remoteDebugPort",rules:[{type:"number",min:1,max:65535,transform:function(e){return Number(e)},message:"Please input number 1-65535"}]},o.createElement(r.Z,{placeholder:(0,i.I)({message:"Please Input Debug Port"}),style:{width:460}})),o.createElement(a.Z.Item,{label:(0,i.I)({message:"Whether To Enable Hot Reload"}),name:"hotReload",valuePropName:"checked"},o.createElement(l.Z,null)))}},33006:function(e,t){t.Z={"tool-wrap":"tool-wrap_cpjj",left:"left_1Eg8",header:"header_2qKK","header-content":"header-content_3800",warning:"warning_3LRm",valid:"valid_6gMZ",content:"content_1fLp","form-line":"form-line_30zE","container-option":"container-option_27DR","config-wrap":"config-wrap_1FFI",disabled:"disabled_2Bq8",mask:"mask_1elS",menu:"menu_3cVu","menu-list":"menu-list_29RP","menu-item":"menu-item_3nly",active:"active_3z6V",config:"config_JgML","config-title":"config-title_1Bib","config-others":"config-others_uZr-","file-item":"file-item_1Co3",remove:"remove_3GQI",first:"first_3_lY","add-field":"add-field_2Erb","item-label":"item-label_2Z0B","patches-json":"patches-json_3dH4","patches-json-remove":"patches-json-remove_2tmx","directory-item":"directory-item_3fI7","form-item":"form-item_3yFa","label-field":"label-field_1PzI",label:"label_OLdi","remove-icon":"remove-icon_3Tqi",normal:"normal_2L5u","patches-remove":"patches-remove_19oK","patches-remove-first":"patches-remove-first_2WYp","patches-area":"patches-area_RWZU","limit-item":"limit-item_3Bgb","menu-tip":"menu-tip_jl7n","menu-tip-title":"menu-tip-title_1EiI","menu-tip-item":"menu-tip-item_1xsJ","add-container":"add-container_vyK5",right:"right_3IbI",title:"title_3dM9","yaml-empty":"yaml-empty_2602","result-wrap":"result-wrap_e8Gw",main:"main_1h0k","fail-list":"fail-list_1sbD","success-list":"success-list_1N_o","fail-item":"fail-item_5Bqk","success-item":"success-item_2Ptm",number:"number_1epF","result-title":"result-title_2_SX","result-desc":"result-desc_Hdl7","result-content":"result-content_Po_p",image:"image_1Hhr",delete:"delete_27re","option-left":"option-left_k_bH",icon:"icon_3VZ0","guide-card":"guide-card_1DFW",desc:"desc_2yz1","common-icon":"common-icon_1exJ"}},82195:function(e,t,n){n.r(t)},35740:function(e,t,n){n.r(t)},33413:function(e,t,n){n.r(t);var l=n(22172),a=n(7548),r=n(10718),o=n(67294),i=n(94184),c=n.n(i),u=n(21770),s=n(15105),d=o.forwardRef((function(e,t){var n,i=e.prefixCls,d=void 0===i?"rc-switch":i,m=e.className,f=e.checked,p=e.defaultChecked,g=e.disabled,v=e.loadingIcon,h=e.checkedChildren,b=e.unCheckedChildren,y=e.onClick,w=e.onChange,E=e.onKeyDown,O=(0,r.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),_=(0,u.Z)(!1,{value:f,defaultValue:p}),I=(0,a.Z)(_,2),k=I[0],j=I[1];function C(e,t){var n=k;return g||(j(n=e),null==w||w(n,t)),n}var P=c()(d,m,(n={},(0,l.Z)(n,"".concat(d,"-checked"),k),(0,l.Z)(n,"".concat(d,"-disabled"),g),n));return o.createElement("button",Object.assign({},O,{type:"button",role:"switch","aria-checked":k,disabled:g,className:P,ref:t,onKeyDown:function(e){e.which===s.Z.LEFT?C(!1,e):e.which===s.Z.RIGHT&&C(!0,e),null==E||E(e)},onClick:function(e){var t=C(!k,e);null==y||y(t,e)}}),v,o.createElement("span",{className:"".concat(d,"-inner")},k?h:b))}));d.displayName="Switch",t.default=d},45598:function(e,t,n){var l=n(75963);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=[];return a.default.Children.forEach(t,(function(t){(null!=t||n.keepEmpty)&&(Array.isArray(t)?l=l.concat(e(t)):(0,r.isFragment)(t)&&t.props?l=l.concat(e(t.props.children,n)):l.push(t))})),l};var a=l(n(67294)),r=n(59864)}}]);