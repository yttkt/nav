import{a as X}from"./chunk-RQPUXPJC.js";import{a as V,b as Z}from"./chunk-GKGEX3RM.js";import{a as K}from"./chunk-WNPVAGSE.js";import{a as R,b as F}from"./chunk-A4UKAFMU.js";import{Eb as J,gb as L,hb as O,jb as D,kb as $,rb as W,ub as H}from"./chunk-OHLPYLHN.js";import{Ac as w,Db as g,Ee as U,Fe as j,Jb as d,Lb as z,Od as B,Xb as p,Yb as m,Zb as y,e as v,ec as S,f as u,gc as h,he as T,ke as A,lb as a,ld as M,pe as Q,qb as I,sc as l,tc as x,td as P,uc as b,wc as E,xb as k,yc as N,zc as C}from"./chunk-QHVMC2R5.js";var q=v(X(),1);var G=v(Q(),1);function Y(s,e){s&1&&y(0,"nz-spin",9)}function tt(s,e){if(s&1&&(p(0,"p",10),l(1),m()),s&2){let n=h();a(),b("",n.seconds," s")}}function et(s,e){if(s&1&&(p(0,"p",10),l(1),m()),s&2){let n=h();a(),E(" ",n.$t("_processing")," ",n.currentNumber," / ",n.countAll," ")}}var _=class s{constructor(e){this.notification=e}$t=A;submitting=!1;websiteList=T;isExportIcon=!1;seconds=0;currentNumber=0;countAll=0;ngOnInit(){}loadImage(e){return new Promise(n=>{if(!e)return n(null);let t=new Image;t.crossOrigin="Anonymous",t.onload=function(){n(t)},t.onerror=function(){n(null)},t.src=e})}imageToBase64(e,n=!0){return u(this,null,function*(){let t=yield this.loadImage(e.icon);if(t)try{let o=document.createElement("canvas");o.width=32,o.height=32,o.getContext("2d").drawImage(t,0,0,32,32);let r=o.toDataURL();return e.icon=r,r}catch{}else{if(!n)return;try{if(!e.icon)return;let i=yield j({url:e.icon});i.data.base64&&(e.icon=i.data.base64,yield this.imageToBase64(e,!1))}catch(i){let o=document.getElementById("error-msg");if(o){let c=`
          <a href="${e.icon}" target="_blank">${e.name} ${e.icon}</a>
          <div>${i.response?.data?.message||i.message}</div>
        `;o.innerHTML=c+o.innerHTML}}}})}bookmarksExport(){return u(this,null,function*(){if(!B())return this.notification.error("Error","Bad credentials");if(this.submitting)return;let e=this;this.seconds=0,this.countAll=0,this.currentNumber=0,this.submitting=!0;let n=setInterval(()=>{this.seconds+=1},1e3),t=JSON.parse(JSON.stringify(this.websiteList)),i=[];function o(c){Array.isArray(c)&&c.forEach(r=>{["id","rate","top","topTypes","index","ownVisible","breadcrumb","ok","__name__","__desc__","collapsed","tags"].forEach(f=>{delete r[f]}),Array.isArray(r.nav)&&o(r.nav),r.url&&i.push(e.imageToBase64(r).finally(()=>{e.currentNumber+=1}))})}this.isExportIcon&&(o(t),this.countAll=i.length,yield Promise.allSettled(i)),U({data:G.default.compress(JSON.stringify(t))}).then(c=>{let r="bookmarks.html",f=new Blob([c.data.data],{type:"text/html;charset=utf-8"});(0,q.saveAs)(f,r),this.notification.success("OK",r,{nzDuration:0})}).finally(()=>{this.submitting=!1,clearInterval(n)})})}static \u0275fac=function(n){return new(n||s)(I(K))};static \u0275cmp=k({type:s,selectors:[["system-bookmark-export"]],decls:15,vars:10,consts:[["nzSimple","","nzSize","large","class","text-center",4,"ngIf"],[1,"text-center"],[3,"ngModelChange","ngModel"],[1,"ml-2.5"],["class","mt-2.5",4,"ngIf"],[1,"book-wrapper","mt-2.5"],["nz-button","","nzType","primary",3,"click","nzLoading"],[1,"err"],["id","error-msg"],["nzSimple","","nzSize","large",1,"text-center"],[1,"mt-2.5"]],template:function(n,t){n&1&&(g(0,Y,1,0,"nz-spin",0),p(1,"div",1)(2,"nz-switch",2),w("ngModelChange",function(o){return C(t.isExportIcon,o)||(t.isExportIcon=o),o}),m(),p(3,"span",3),l(4),m(),g(5,tt,2,1,"p",4)(6,et,2,3,"p",4),m(),p(7,"div",5)(8,"div")(9,"button",6),S("click",function(){return t.bookmarksExport()}),l(10),m()()(),p(11,"div",7)(12,"h2"),l(13),m(),y(14,"pre",8),m()),n&2&&(d("ngIf",t.submitting),a(2),N("ngModel",t.isExportIcon),a(2),x(t.$t("_exportIcons")),a(),d("ngIf",t.seconds>0),a(),d("ngIf",t.countAll>0),a(3),d("nzLoading",t.submitting),a(),b(" ",t.$t("_clickExport")," "),a(),z("noopacity",t.countAll>0),a(2),x(t.$t("_errorIcons")))},dependencies:[P,M,Z,V,F,R,J,W,H,$,D,L,O],styles:[".book-wrapper[_ngcontent-%COMP%]{text-align:center}#error-msg[_ngcontent-%COMP%]{white-space:pre-line;background-color:#f2f2f2;border-radius:8px;padding:0 12px}.err[_ngcontent-%COMP%]{opacity:0}.err.noopacity[_ngcontent-%COMP%]{opacity:1}"]})};export{_ as default};
