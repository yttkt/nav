import{d as X,f as Y,h as Z,i as tt,j as et,k as nt,l as it}from"./chunk-SGABG7ZK.js";import"./chunk-FBO3TRH5.js";import{l as K,m as Q}from"./chunk-3A6EK4VW.js";import{a as S}from"./chunk-5XDDRQCH.js";import"./chunk-M2ZFGP5Q.js";import"./chunk-5KY5BXAO.js";import{f as H,i as J}from"./chunk-5226CT6J.js";import"./chunk-SCHGSNFS.js";import"./chunk-77V2JGZL.js";import{Db as R,Fb as G,Kb as z,hb as $,ib as W,kb as F,lb as B,pb as A,sb as j,vb as U}from"./chunk-XAZQBXLY.js";import{Ac as T,Bc as V,Be as q,Cd as P,Db as h,Jb as p,Xb as a,Yb as r,Yd as O,a as b,b as M,bc as x,ec as u,fe as w,gc as c,jd as D,kd as E,lb as i,le as f,qb as I,sc as l,sd as k,tc as _,uc as y,xa as d,xb as L,ya as g,yc as v,zc as C}from"./chunk-SSEDMK2U.js";function rt(m,n){if(m&1&&(a(0,"div",9),l(1),r()),m&2){let e=c();i(),y(" ",e.$t("_buildTip"),`
`)}}function at(m,n){if(m&1&&(a(0,"div"),l(1),r()),m&2){let e=c().$implicit;i(),_(e.desc)}}function st(m,n){if(m&1){let e=x();a(0,"input",17),T("ngModelChange",function(o){d(e);let s=c().$implicit;return C(s.desc,o)||(s.desc=o),g(o)}),r()}if(m&2){let e=c().$implicit;v("ngModel",e.desc)}}function mt(m,n){if(m&1){let e=x();a(0,"a",18),u("nzOnConfirm",function(){d(e);let o=c().index,s=c();return g(s.handleDelete(o))}),l(1),r()}if(m&2){let e=c(2);p("nzPopconfirmTitle",e.$t("_confirmDel")),i(),y(" ",e.$t("_del")," ")}}function lt(m,n){if(m&1){let e=x();a(0,"tr")(1,"td")(2,"input",10),T("ngModelChange",function(o){let s=d(e).$implicit;return C(s.name,o)||(s.name=o),g(o)}),r()(),a(3,"td")(4,"input",11),u("change",function(o){let s=d(e).index,ot=c();return g(ot.onColorChange(o,s))}),r(),l(5),r(),a(6,"td")(7,"input",10),T("ngModelChange",function(o){let s=d(e).$implicit;return C(s.sort,o)||(s.sort=o),g(o)}),r()(),a(8,"td"),h(9,at,2,1,"div",12)(10,st,1,1,"input",13),r(),a(11,"td")(12,"a",14),u("click",function(){let o=d(e).index,s=c();return g(s.moveUp(o))}),l(13),r(),a(14,"a",15),u("click",function(){let o=d(e).index,s=c();return g(s.moveDown(o))}),l(15),r(),h(16,mt,2,2,"a",16),r()()}if(m&2){let e=n.$implicit,t=c();i(2),v("ngModel",e.name),i(2),p("value",e.color),i(),y(" - ",e.color," "),i(2),v("ngModel",e.sort),i(2),p("ngIf",e.isInner),i(),p("ngIf",!e.isInner),i(3),_(t.$t("_moveUp")),i(2),_(t.$t("_moveDown")),i(),p("ngIf",!e.isInner)}}var N=class m{constructor(n,e){this.message=n;this.modal=e}$t=f;isSelfDevelop=O;tagList=w;submitting=!1;incrementId=Math.max(...w.map(n=>Number(n.id)))+1;ngOnInit(){}moveUp(n){if(n===0)return;let e=this.tagList[n],t=this.tagList[n-1];this.tagList[n-1]=e,this.tagList[n]=t}moveDown(n){if(n===this.tagList.length-1)return;let e=this.tagList[n],t=this.tagList[n+1];this.tagList[n+1]=e,this.tagList[n]=t}onColorChange(n,e){let t=n.target.value;this.tagList[e].color=t}handleAdd(){this.tagList.some(e=>!e.name.trim())||(this.incrementId+=1,this.tagList.unshift({id:this.incrementId,name:"",color:"#f50000",desc:"",isInner:!1}))}handleDelete(n){this.tagList.splice(n,1)}handleSubmit(){if(this.submitting)return;let n={};if(this.tagList.forEach(t=>{t.name?.trim?.()&&(n[t.name]=M(b({},t),{name:void 0}))}),Object.keys(n).length!==this.tagList.length){this.message.error(f("_repeatAdd"));return}let e=[...this.tagList].map(t=>(t.sort||="",typeof t.sort=="string"&&(t.sort=t.sort.trim()),t.sort===""&&delete t.sort,Number.isNaN(Number(t.sort))&&delete t.sort,t.sort!=null&&(t.sort=Number(t.sort)),b({},t)));this.modal.info({nzTitle:f("_syncDataOut"),nzOkText:f("_confirmSync"),nzContent:f("_confirmSyncTip"),nzOnOk:()=>{this.submitting=!0,q({message:"update tag",content:JSON.stringify(e),path:P}).then(()=>{this.message.success(f("_saveSuccess"))}).finally(()=>{this.submitting=!1})}})}trackByItem(n,e){return e.id}static \u0275fac=function(e){return new(e||m)(I(z),I(S))};static \u0275cmp=L({type:m,selectors:[["system-tag"]],features:[V([S,z])],decls:21,vars:13,consts:[["basicTable",""],["nz-button","",1,"add-btn",3,"click","nzLoading"],["nz-button","","nzType","primary",3,"click","nzLoading"],["class","mb-4 !text-red-500 font-bold",4,"ngIf"],[3,"nzData"],["nzWidth","150px"],["nzWidth","160px"],["nzWidth","200px"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"mb-4","!text-red-500","font-bold"],["nz-input","","maxlength","10",3,"ngModelChange","ngModel"],["type","color",3,"change","value"],[4,"ngIf"],["nz-input","","maxlength","20",3,"ngModel","ngModelChange",4,"ngIf"],[3,"click"],[1,"mx-2.5",3,"click"],["nz-popconfirm","","nzOkType","danger","nzPopconfirmPlacement","bottom","class","!text-red-500",3,"nzPopconfirmTitle","nzOnConfirm",4,"ngIf"],["nz-input","","maxlength","20",3,"ngModelChange","ngModel"],["nz-popconfirm","","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"!text-red-500",3,"nzOnConfirm","nzPopconfirmTitle"]],template:function(e,t){if(e&1){let o=x();a(0,"button",1),u("click",function(){return d(o),g(t.handleAdd())}),l(1),r(),a(2,"button",2),u("click",function(){return d(o),g(t.handleSubmit())}),l(3),r(),h(4,rt,2,1,"div",3),a(5,"nz-table",4,0)(7,"thead")(8,"tr")(9,"th",5),l(10),r(),a(11,"th",6),l(12),r(),a(13,"th",5),l(14),r(),a(15,"th",7),l(16),r(),a(17,"th",7),l(18),r()()(),a(19,"tbody"),h(20,lt,17,9,"tr",8),r()()}e&2&&(p("nzLoading",t.submitting),i(),y(" ",t.$t("_addRow"),`
`),i(),p("nzLoading",t.submitting),i(),y(" ",t.$t("_save"),`
`),i(),p("ngIf",!t.isSelfDevelop),i(),p("nzData",t.tagList),i(5),_(t.$t("_tagName")),i(2),_(t.$t("_color")),i(2),_(t.$t("_sort")),i(2),_(t.$t("_remark")),i(2),_(t.$t("_action")),i(2),p("ngForOf",t.tagList)("ngForTrackBy",t.trackByItem))},dependencies:[G,A,j,R,U,k,D,E,B,F,$,W,J,H,it,tt,X,Y,nt,Z,et,Q,K],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}"]})};export{N as default};
