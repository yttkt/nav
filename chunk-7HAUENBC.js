import{Gd as L,Hd as X,Vd as K,a as B,b as Q,ce as R,d as mt,de as z,e as G,fe as Z,he as T,ke as U,yd as gt}from"./chunk-QHVMC2R5.js";var tt=mt((P,J)=>{"use strict";(function(e,l){typeof P=="object"&&typeof J=="object"?J.exports=l():typeof define=="function"&&define.amd?define([],l):typeof P=="object"?P.ClipboardJS=l():e.ClipboardJS=l()})(P,function(){return function(){var f={686:function(r,c,t){"use strict";t.d(c,{default:function(){return pt}});var a=t(279),o=t.n(a),p=t(370),n=t.n(p),b=t(817),w=t.n(b);function v(g){try{return document.execCommand(g)}catch{return!1}}var u=function(s){var i=w()(s);return v("cut"),i},x=u;function E(g){var s=document.documentElement.getAttribute("dir")==="rtl",i=document.createElement("textarea");i.style.fontSize="12pt",i.style.border="0",i.style.padding="0",i.style.margin="0",i.style.position="absolute",i.style[s?"right":"left"]="-9999px";var d=window.pageYOffset||document.documentElement.scrollTop;return i.style.top="".concat(d,"px"),i.setAttribute("readonly",""),i.value=g,i}var N=function(s,i){var d=E(s);i.container.appendChild(d);var m=w()(d);return v("copy"),d.remove(),m},q=function(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},d="";return typeof s=="string"?d=N(s,i):s instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(s?.type)?d=N(s.value,i):(d=w()(s),v("copy")),d},A=q;function I(g){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?I=function(i){return typeof i}:I=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},I(g)}var M=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=s.action,d=i===void 0?"copy":i,m=s.container,h=s.target,_=s.text;if(d!=="copy"&&d!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(h!==void 0)if(h&&I(h)==="object"&&h.nodeType===1){if(d==="copy"&&h.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(d==="cut"&&(h.hasAttribute("readonly")||h.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return A(_,{container:m});if(h)return d==="cut"?x(h):A(h,{container:m})},W=M;function S(g){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(i){return typeof i}:S=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},S(g)}function F(g,s){if(!(g instanceof s))throw new TypeError("Cannot call a class as a function")}function y(g,s){for(var i=0;i<s.length;i++){var d=s[i];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(g,d.key,d)}}function C(g,s,i){return s&&y(g.prototype,s),i&&y(g,i),g}function st(g,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(s&&s.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),s&&H(g,s)}function H(g,s){return H=Object.setPrototypeOf||function(d,m){return d.__proto__=m,d},H(g,s)}function ct(g){var s=lt();return function(){var d=D(g),m;if(s){var h=D(this).constructor;m=Reflect.construct(d,arguments,h)}else m=d.apply(this,arguments);return ut(this,m)}}function ut(g,s){return s&&(S(s)==="object"||typeof s=="function")?s:ft(g)}function ft(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function lt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function D(g){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},D(g)}function Y(g,s){var i="data-clipboard-".concat(g);if(s.hasAttribute(i))return s.getAttribute(i)}var dt=function(g){st(i,g);var s=ct(i);function i(d,m){var h;return F(this,i),h=s.call(this),h.resolveOptions(m),h.listenClick(d),h}return C(i,[{key:"resolveOptions",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof m.action=="function"?m.action:this.defaultAction,this.target=typeof m.target=="function"?m.target:this.defaultTarget,this.text=typeof m.text=="function"?m.text:this.defaultText,this.container=S(m.container)==="object"?m.container:document.body}},{key:"listenClick",value:function(m){var h=this;this.listener=n()(m,"click",function(_){return h.onClick(_)})}},{key:"onClick",value:function(m){var h=m.delegateTarget||m.currentTarget,_=this.action(h)||"copy",k=W({action:_,container:this.container,target:this.target(h),text:this.text(h)});this.emit(k?"success":"error",{action:_,text:k,trigger:h,clearSelection:function(){h&&h.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(m){return Y("action",m)}},{key:"defaultTarget",value:function(m){var h=Y("target",m);if(h)return document.querySelector(h)}},{key:"defaultText",value:function(m){return Y("text",m)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(m){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return A(m,h)}},{key:"cut",value:function(m){return x(m)}},{key:"isSupported",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],h=typeof m=="string"?[m]:m,_=!!document.queryCommandSupported;return h.forEach(function(k){_=_&&!!document.queryCommandSupported(k)}),_}}]),i}(o()),pt=dt},828:function(r){var c=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function a(o,p){for(;o&&o.nodeType!==c;){if(typeof o.matches=="function"&&o.matches(p))return o;o=o.parentNode}}r.exports=a},438:function(r,c,t){var a=t(828);function o(b,w,v,u,x){var E=n.apply(this,arguments);return b.addEventListener(v,E,x),{destroy:function(){b.removeEventListener(v,E,x)}}}function p(b,w,v,u,x){return typeof b.addEventListener=="function"?o.apply(null,arguments):typeof v=="function"?o.bind(null,document).apply(null,arguments):(typeof b=="string"&&(b=document.querySelectorAll(b)),Array.prototype.map.call(b,function(E){return o(E,w,v,u,x)}))}function n(b,w,v,u){return function(x){x.delegateTarget=a(x.target,w),x.delegateTarget&&u.call(b,x)}}r.exports=p},879:function(r,c){c.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},c.nodeList=function(t){var a=Object.prototype.toString.call(t);return t!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in t&&(t.length===0||c.node(t[0]))},c.string=function(t){return typeof t=="string"||t instanceof String},c.fn=function(t){var a=Object.prototype.toString.call(t);return a==="[object Function]"}},370:function(r,c,t){var a=t(879),o=t(438);function p(v,u,x){if(!v&&!u&&!x)throw new Error("Missing required arguments");if(!a.string(u))throw new TypeError("Second argument must be a String");if(!a.fn(x))throw new TypeError("Third argument must be a Function");if(a.node(v))return n(v,u,x);if(a.nodeList(v))return b(v,u,x);if(a.string(v))return w(v,u,x);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function n(v,u,x){return v.addEventListener(u,x),{destroy:function(){v.removeEventListener(u,x)}}}function b(v,u,x){return Array.prototype.forEach.call(v,function(E){E.addEventListener(u,x)}),{destroy:function(){Array.prototype.forEach.call(v,function(E){E.removeEventListener(u,x)})}}}function w(v,u,x){return o(document.body,v,u,x)}r.exports=p},817:function(r){function c(t){var a;if(t.nodeName==="SELECT")t.focus(),a=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var o=t.hasAttribute("readonly");o||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),o||t.removeAttribute("readonly"),a=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var p=window.getSelection(),n=document.createRange();n.selectNodeContents(t),p.removeAllRanges(),p.addRange(n),a=p.toString()}return a}r.exports=c},279:function(r){function c(){}c.prototype={on:function(t,a,o){var p=this.e||(this.e={});return(p[t]||(p[t]=[])).push({fn:a,ctx:o}),this},once:function(t,a,o){var p=this;function n(){p.off(t,n),a.apply(o,arguments)}return n._=a,this.on(t,n,o)},emit:function(t){var a=[].slice.call(arguments,1),o=((this.e||(this.e={}))[t]||[]).slice(),p=0,n=o.length;for(p;p<n;p++)o[p].fn.apply(o[p].ctx,a);return this},off:function(t,a){var o=this.e||(this.e={}),p=o[t],n=[];if(p&&a)for(var b=0,w=p.length;b<w;b++)p[b].fn!==a&&p[b].fn._!==a&&n.push(p[b]);return n.length?o[t]=n:delete o[t],this}},r.exports=c,r.exports.TinyEmitter=c}},e={};function l(r){if(e[r])return e[r].exports;var c=e[r]={exports:{}};return f[r](c,c.exports,l),c.exports}return function(){l.n=function(r){var c=r&&r.__esModule?function(){return r.default}:function(){return r};return l.d(c,{a:c}),c}}(),function(){l.d=function(r,c){for(var t in c)l.o(c,t)&&!l.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:c[t]})}}(),function(){l.o=function(r,c){return Object.prototype.hasOwnProperty.call(r,c)}}(),l(686)}().default})});var ot=G(gt(),1),it=G(tt(),1);var et=(n=>(n[n.All=1]="All",n[n.Title=2]="Title",n[n.Desc=3]="Desc",n[n.Url=4]="Url",n[n.Current=5]="Current",n[n.Quick=6]="Quick",n[n.Id=7]="Id",n[n.Tag=8]="Tag",n[n.Class=9]="Class",n))(et||{});function ht(f){return Math.floor(Math.random()*f)}function Tt(f,e){if(!e.trim())return[];e=e.toLowerCase();let{type:l,id:r}=V(),{oneIndex:c,twoIndex:t}=at(r),a=Number(l)||1,o=[],p=[{nav:o,id:-1,title:U("_searchRes"),icon:""}],n=new Map;a===9&&(p=[]);function b(w){w=w||f;t:for(let v=0;v<w.length;v++){let u=w[v];if(a===9&&u.title&&u.nav[0]?.name&&u.title.toLowerCase().includes(e)){p.push(u);break}if(Array.isArray(u.nav)&&b(u.nav),u.name){u.name=rt(u.name),u.desc=rt(u.desc);let x=u.name.toLowerCase(),E=u.desc.toLowerCase(),N=u.url.toLowerCase();if(E[0]===X)continue;let A=()=>{if(x.includes(e)){let y=u,C=new RegExp(`(${e})`,"i");if(y.__name__=y.name,y.name=y.name.replace(C,"<b>$1</b>"),!n.has(y.id))return n.set(y.id,!0),o.push(y),!0}return!1},I=()=>{if(N.includes(e)&&!n.has(u.id)||u.tags.some(C=>C.url?.includes(e))&&!n.has(u.id))return n.set(u.id,!0),o.push(u),!0},M=()=>{if(E.includes(e)){let y=u,C=new RegExp(`(${e})`,"i");if(y.__desc__=y.desc,y.desc=y.desc.replace(C,"<b>$1</b>"),!n.has(y.id))return n.set(y.id,!0),o.push(y),!0}return!1},W=()=>{if(u.top&&x.includes(e)){let y=u,C=new RegExp(`(${e})`,"i");if(y.__name__=y.name,y.name=y.name.replace(C,"<b>$1</b>"),!n.has(y.id))return n.set(y.id,!0),o.push(y),!0}return!1},S=()=>u.tags.forEach(y=>{Z[y.id]?.name?.toLowerCase()===e&&(n.has(u.id)||(n.set(u.id,!0),o.push(u)))}),F=()=>u.id==e?(o.push(u),!0):!1;try{switch(a){case 4:I();break;case 2:A();break;case 3:M();break;case 6:W();break;case 8:S();break;case 7:if(F())break t;break;default:A(),M(),I()}}catch(y){console.error(y)}}}}return a===5?b(f[c].nav[t].nav):b(),a!==9&&o.length<=0?[]:p}function $(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`}var O;function At(){if(nt())return;O&&clearInterval(O);let f="random-light-bg",e=document.getElementById(f)||document.createElement("div"),l=ht(360);e.id=f,e.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -3;
    transition: 1s linear;
  `,e.style.backgroundImage=`linear-gradient(${l}deg, ${$()} 0%, ${$()} 100%)`,document.body.appendChild(e),O=setInterval(()=>{if(nt()){O&&(clearInterval(O),O=null);return}let c=`linear-gradient(${l}deg, ${$()} 0%, ${$()} 100%)`;e.style.opacity="0.3",setTimeout(()=>{e.style.backgroundImage=c,e.style.opacity="1"},1e3)},1e4)}function V(){let{href:f}=window.location,e=f.split("?")[1]||"",l=ot.default.parse(e),r=l.id;if(l.id==null)try{let c=window.localStorage.getItem(L.location);c&&(r=JSON.parse(c).id)}catch{}return Q(B({},l),{type:l.type,q:l.q||"",id:r})}function Lt(){let{id:f}=V();window.localStorage.setItem(L.location,JSON.stringify({id:f}))}function Ot(){let f=z[0]||{};try{let e=window.localStorage.getItem(L.engine);if(e){let l=JSON.parse(e),r=z.find(c=>c.name===l.name);r&&(f=r)}}catch{}return f}function Pt(f){window.localStorage.setItem(L.engine,JSON.stringify(f))}function nt(){let f=window.localStorage.getItem(L.isDark),e=window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches;return!f&&e?e:!!Number(f)}function Nt(f,e){let l=f.target,r=`copy-${Date.now()}`;return l.id=r,l.setAttribute("data-clipboard-text",e),new Promise(c=>{let t=new it.default(`#${r}`);t.on("success",function(){t.destroy(),c(!0)}),t.on("error",function(){t.destroy(),c(!1)})})}function rt(f=""){return f?f.replace(/<b>|<\/b>/g,""):""}function Mt(){let{id:f}=V(),{oneIndex:e,twoIndex:l}=at(f),r=[];try{T[e]&&T[e]?.nav?.length>0&&(K||!T[e].nav[l].ownVisible)?r=T[e].nav[l].nav:r=[]}catch{r=[]}return r}function j(f){return String(f).padStart(2,"0")}function Dt(f){let e=document.querySelectorAll(f),l=Number.MAX_SAFE_INTEGER;if(e.length<=0)return l;let c=e[0].parentNode.clientWidth,t=0;for(let a=0;a<e.length;a++){let o=e[a];if(t+=o.clientWidth,t>c){l=a-1;break}}return l}function yt(){return"ontouchstart"in window}function kt(){let f=new Date,e=new Date(f.getFullYear(),0,0),l=f-e,r=1e3*60*60*24;return Math.floor(l/r)}function Rt(){let f=U("_weeks"),e=new Date,l=e.getFullYear(),r=j(e.getHours()),c=j(e.getMinutes()),t=j(e.getSeconds()),a=e.getMonth()+1,o=e.getDate(),p=e.getDay(),n=j(o);return{year:l,hours:r,minutes:c,seconds:t,month:a,date:o,zeroDate:n,dayText:f[p]}}function $t(){let f=yt()?R.appTheme:R.theme;return f==="Current"?R.theme:f}function at(f,e=0){f=Number(f);let l=e,r=e,c=e,t=[];t:for(let a=0;a<T.length;a++){let o=T[a];if(o.title&&o.id===f){l=a,t.push(o.title);break}if(Array.isArray(o.nav))for(let p=0;p<o.nav.length;p++){let n=o.nav[p];if(n.title&&n.id===f){l=a,r=p,t.push(o.title,n.title);break t}if(Array.isArray(n.nav))for(let b=0;b<n.nav.length;b++){let w=n.nav[b];if(w.id===f){l=a,r=p,c=b,t.push(o.title,n.title,w.title);break t}}}}return{oneIndex:l,twoIndex:r,threeIndex:c,breadcrumb:t}}function jt(f,e,l){let r=f.offsetWidth,c=e.offsetWidth,a=e.offsetLeft-(r-c)/2;f.scrollTo(B({left:a,behavior:"smooth"},l))}export{et as a,ht as b,Tt as c,$ as d,At as e,V as f,Lt as g,Ot as h,Pt as i,nt as j,Nt as k,rt as l,Mt as m,Dt as n,yt as o,kt as p,Rt as q,$t as r,at as s,jt as t};
