import{a as be,b as Me,c as Te,d as Ve}from"./chunk-AWCOUV6I.js";import{b as he,d as we,e as ke}from"./chunk-5XDDRQCH.js";import{c as oe,e as re,f as le}from"./chunk-M2ZFGP5Q.js";import{a as j,b as F,c as K,d as Q,f as q,g as Y}from"./chunk-5KY5BXAO.js";import{f as ge,i as fe}from"./chunk-5226CT6J.js";import"./chunk-SCHGSNFS.js";import{a as ye,b as Ce}from"./chunk-77V2JGZL.js";import{Fb as de,Kb as Se,_ as G,aa as H,hb as ae,ib as se,kb as ce,lb as me,pb as pe,sb as _e,vb as ue}from"./chunk-XAZQBXLY.js";import{$b as $,$d as ie,Ac as S,Ad as U,Ae as ve,Db as f,Fa as D,Gd as J,Hd as E,Jb as r,Lb as I,Pd as X,Sd as Z,Td as ee,Ud as te,Vd as ne,Wd as N,Xb as s,Yb as c,Yd as h,Zb as C,_b as R,bc as y,ec as u,f as O,gc as l,ib as P,kd as M,lb as n,lc as A,le as x,mc as B,nc as W,qb as w,sc as _,sd as T,tc as b,uc as d,ue as xe,we as ze,xa as m,xb as k,ya as p,yc as z,zc as v}from"./chunk-SSEDMK2U.js";var Le=["input"];function Oe(i,a){if(i&1&&(s(0,"p",5),_(1),s(2,"a",6),_(3),c()()),i&2){let e=l(2);n(),d(" ",e.$t("_getToken"),""),n(2),d(" ",e.$t("_readDoc"),"")}}function De(i,a){if(i&1){let e=y();R(0),s(1,"p"),_(2),c(),s(3,"input",3,0),S("ngModelChange",function(t){m(e);let g=l();return v(g.token,t)||(g.token=t),p(t)}),u("keyup",function(t){m(e);let g=l();return p(g.onKey(t))}),c(),f(5,Oe,4,2,"p",4),$()}if(i&2){let e=l();n(2),b(e.$t("_inputTokenMsg")),n(),z("ngModel",e.token),n(2),r("ngIf",!e.isSelfDevelop)}}var V=class i{constructor(a){this.message=a}visible=!1;onCancel=new D;input;$t=x;isSelfDevelop=h;token="";submitting=!1;ngAfterViewInit(){this.inputFocus()}handleCancel(){this.onCancel.emit()}inputFocus(){setTimeout(()=>{this.input?.nativeElement?.focus()},300)}onKey(a){a.code==="Enter"&&this.login()}login(){return O(this,null,function*(){if(!this.token){this.message.error(x("_pleaseInputToken"));return}let a=this.token.trim();this.submitting=!0;try{let e=yield ze(a);if(!h&&e?.data?.login!==xe)throw this.message.error("Bad credentials"),new Error("Bad credentials");Z(a);try{ve("image").finally(()=>{this.message.success(x("_tokenVerSuc")),te().finally(()=>{window.location.reload()})})}catch{ee(),this.submitting=!1}}catch{this.submitting=!1}})}static \u0275fac=function(e){return new(e||i)(w(Se))};static \u0275cmp=k({type:i,selectors:[["app-login"]],viewQuery:function(e,o){if(e&1&&A(Le,5),e&2){let t;B(t=W())&&(o.input=t.first)}},inputs:{visible:"visible"},outputs:{onCancel:"onCancel"},decls:2,vars:3,consts:[["input",""],[3,"nzVisibleChange","nzOnCancel","nzOnOk","nzVisible","nzTitle","nzOkLoading"],[4,"nzModalContent"],["autofocus","","nz-input","","autofocus","",3,"ngModelChange","keyup","ngModel"],["class","!mt-2",4,"ngIf"],[1,"!mt-2"],["href","https://github.com/xjh22222228/nav#%E9%83%A8%E7%BD%B2","target","_blank"]],template:function(e,o){e&1&&(s(0,"nz-modal",1),S("nzVisibleChange",function(g){return v(o.visible,g)||(o.visible=g),g}),u("nzOnCancel",function(){return o.handleCancel()})("nzOnOk",function(){return o.login()}),f(1,De,6,3,"ng-container",2),c()),e&2&&(z("nzVisible",o.visible),r("nzTitle",o.$t("_authLogin"))("nzOkLoading",o.submitting))},dependencies:[T,M,de,pe,_e,ue,ke,we,he,fe,ge],styles:[".prefix-icon[_ngcontent-%COMP%]{width:20px;height:20px;pointer-events:none}"]})};function Pe(i,a){if(i&1){let e=y();s(0,"li",5),u("click",function(){m(e);let t=l(2);return p(t.goRoute("/system/component"))}),_(1),c()}if(i&2){let e=l(2);r("nzSelected",e.currentMenu==="component"),n(),d(" ",e.$t("_components")," ")}}function Re(i,a){if(i&1){let e=y();s(0,"li",5),u("click",function(){m(e);let t=l(2);return p(t.goRoute("/system/bookmarkExport"))}),_(1),c()}if(i&2){let e=l(2);r("nzSelected",e.currentMenu==="bookmarkExport"),n(),d(" ",e.$t("_bookmarkExport")," ")}}function $e(i,a){if(i&1){let e=y();s(0,"li",5),u("click",function(){m(e);let t=l(2);return p(t.goRoute("/system/collect"))}),_(1),c()}if(i&2){let e=l(2);r("nzSelected",e.currentMenu==="collect"),n(),d(" ",e.$t("_userCollect")," ")}}function Ae(i,a){if(i&1){let e=y();s(0,"li",5),u("click",function(){m(e);let t=l(2);return p(t.goRoute("/system/config"))}),_(1),c()}if(i&2){let e=l(2);r("nzSelected",e.currentMenu==="config"),n(),d(" ",e.$t("_confInfo")," ")}}function Be(i,a){if(i&1&&(s(0,"span",19),_(1),c()),i&2){let e=l(2);n(),b(e.date)}}function We(i,a){i&1&&C(0,"nz-spin",20),i&2&&r("nzSize","large")}function je(i,a){if(i&1){let e=y();s(0,"nz-layout",2)(1,"nz-layout")(2,"nz-sider",3),S("nzCollapsedChange",function(t){m(e);let g=l();return v(g.isCollapsed,t)||(g.isCollapsed=t),p(t)}),s(3,"ul",4)(4,"li",5),u("click",function(){m(e);let t=l();return p(t.goRoute("/system/web"))}),_(5),c(),s(6,"li",5),u("click",function(){m(e);let t=l();return p(t.goRoute("/system/setting"))}),_(7),c(),s(8,"li",5),u("click",function(){m(e);let t=l();return p(t.goRoute("/system/tag"))}),_(9),c(),s(10,"li",5),u("click",function(){m(e);let t=l();return p(t.goRoute("/system/search"))}),_(11),c(),f(12,Pe,2,2,"li",6),s(13,"li",5),u("click",function(){m(e);let t=l();return p(t.goRoute("/system/bookmark"))}),_(14),c(),f(15,Re,2,2,"li",6)(16,$e,2,2,"li",6),s(17,"li",5),u("click",function(){m(e);let t=l();return p(t.goRoute("/system/auth"))}),_(18),c(),f(19,Ae,2,2,"li",6),s(20,"li",5),u("click",function(){m(e);let t=l();return p(t.goRoute("/system/info"))}),_(21),c()()(),s(22,"nz-layout",7)(23,"nz-content",8)(24,"div",9)(25,"button",10),u("click",function(){m(e);let t=l();return p(t.toggleCollapsed())}),C(26,"nz-icon",11),c(),s(27,"button",12),u("click",function(){m(e);let t=l();return p(t.goBack())}),_(28),c(),s(29,"button",13),u("click",function(){m(e);let t=l();return p(t.logout())}),_(30),c(),C(31,"img",14),s(32,"a",15),C(33,"img",16),c(),f(34,Be,2,1,"span",17),c(),f(35,We,1,1,"nz-spin",18),C(36,"router-outlet"),c()()()()}if(i&2){let e=l();n(2),I("hide",e.isCollapsed),z("nzCollapsed",e.isCollapsed),r("nzTrigger",null),n(2),r("nzSelected",e.currentMenu==="web"),n(),d(" ",e.$t("_websiteMang")," "),n(),r("nzSelected",e.currentMenu==="setting"),n(),d(" ",e.$t("_systemSet")," "),n(),r("nzSelected",e.currentMenu==="tag"),n(),d(" ",e.$t("_tagSettings")," "),n(),r("nzSelected",e.currentMenu==="search"),n(),d(" ",e.$t("_searchEngines")," "),n(),r("ngIf",e.isAuthz||e.isSelfDevelop),n(),r("nzSelected",e.currentMenu==="bookmark"),n(),d(" ",e.$t("_bookmarkImport")," "),n(),r("ngIf",e.isAuthz),n(),r("ngIf",e.isAuthz||e.isSelfDevelop),n(),r("nzSelected",e.currentMenu==="auth"),n(),d(" ",e.$t("_vipAuth")," "),n(),r("ngIf",e.isSelfDevelop),n(),r("nzSelected",e.currentMenu==="info"),n(),d(" ",e.$t("_webInfo")," "),n(),I("!ml-0",e.isCollapsed),n(4),r("nzType",e.isCollapsed?"menu-unfold":"menu-fold"),n(2),d(" ",e.$t("_backHome")," "),n(2),d(" ",e.$t("_logout")," "),n(),r("src",e.currentVersionSrc,P),n(3),r("ngIf",!e.isSelfDevelop),n(),r("ngIf",e.pageLoading)}}var L=class i{constructor(a){this.router=a;ie(),this.router.events.subscribe(e=>{e instanceof j?this.pageLoading=!0:(e instanceof F||e instanceof K||e instanceof Q)&&(this.pageLoading=!1)})}isSelfDevelop=h;$t=x;isLogin=N;currentVersionSrc=`https://img.shields.io/badge/current-v${J}-red.svg?longCache=true&style=flat-square`;date=U.datetime;showLoginModal=!N;currentMenu="";isAuthz=!!X();pageLoading=!1;isCollapsed=!!Number(localStorage.getItem(E.SYSTEM_COLLAPSED));ngOnInit(){let a=window.location.href.split("/");this.currentMenu=a.at(-1)||""}toggleCollapsed(){this.isCollapsed=!this.isCollapsed,localStorage.setItem(E.SYSTEM_COLLAPSED,String(Number(this.isCollapsed)))}goBack(){this.router.navigate(["/"],{queryParams:{_:Date.now()}})}goRoute(a,e=!1){e||this.router.navigate([a])}logout(){ne(),this.router.navigate(["/"]),setTimeout(()=>{location.reload()},26)}static \u0275fac=function(e){return new(e||i)(w(Y))};static \u0275cmp=k({type:i,selectors:[["app-system"]],decls:2,vars:2,consts:[["class","system-layout",4,"ngIf"],[3,"visible"],[1,"system-layout"],["nzWidth","150px","nzTheme","light","nzCollapsible","",1,"sidebar","select-none",3,"nzCollapsedChange","nzCollapsed","nzTrigger"],["nz-menu","","nzMode","inline",1,"sider-menu"],["nz-menu-item","",3,"click","nzSelected"],["nz-menu-item","",3,"nzSelected","click",4,"ngIf"],[1,"inner-layout"],[1,"content"],[1,"whitespace-nowrap","overflow-x-auto","topbar"],["nz-button","","nzType","primary",3,"click"],[3,"nzType"],["nz-button","",2,"margin","0 15px 15px",3,"click"],["nz-button","","nzDanger","","nzType","primary",3,"click"],[1,"ml-2.5",3,"src"],["href","https://github.com/xjh22222228/nav/releases","target","_blank"],["src","https://img.shields.io/github/v/release/xjh22222228/nav",1,"ml-2.5"],["class","ml-2.5",4,"ngIf"],["nzSimple","","class","fixed-center",3,"nzSize",4,"ngIf"],[1,"ml-2.5"],["nzSimple","",1,"fixed-center",3,"nzSize"]],template:function(e,o){e&1&&(f(0,je,37,30,"nz-layout",0),C(1,"app-login",1)),e&2&&(r("ngIf",o.isLogin),n(),r("visible",o.showLoginModal))},dependencies:[T,M,Ve,Te,be,Me,le,re,oe,me,ce,ae,se,V,q,Ce,ye,H,G],styles:[".system-layout[_ngcontent-%COMP%]{min-height:100vh}.system-layout[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%]{z-index:3;position:sticky;background-color:#fff;top:0;margin-bottom:10px;padding:15px 15px 0;box-shadow:0 5px 5px #0000000d}.system-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:0 15px 15px;background-color:#fff;height:100vh;overflow:hidden;overflow-y:auto}.system-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]     .ant-table-content{overflow:auto}.system-layout[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{position:sticky;top:0;background-color:#fff}.system-layout[_ngcontent-%COMP%]   .sidebar.hide[_ngcontent-%COMP%]{width:0!important;min-width:0!important;flex:0!important}.system-layout[_ngcontent-%COMP%]   .inner-layout[_ngcontent-%COMP%]{margin-left:15px}.system-layout[_ngcontent-%COMP%]   .fixed-center[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10}"]})};export{L as default};
