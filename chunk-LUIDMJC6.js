import{U as V,V as W,ca as G}from"./chunk-TQQOD6QT.js";import{$ as N,Db as g,F as b,Jb as O,Kc as P,Lb as d,M as x,Pc as B,R as I,Sb as m,Sc as h,Tc as R,Xb as r,Yb as p,Zb as w,aa as D,ba as l,gc as z,hc as E,ia as T,ic as F,l as _,lb as s,m as C,n as y,qb as c,qd as U,r as v,rc as k,s as f,sc as L,tc as A,wa as $,xb as j,yb as M}from"./chunk-RJRAQLGH.js";var Z=["*"];function q(i,a){i&1&&(r(0,"span",2),w(1,"i",3)(2,"i",3)(3,"i",3)(4,"i",3),p())}function J(i,a){}function K(i,a){if(i&1&&(r(0,"div",6),L(1),p()),i&2){let t=z(2);s(),A(t.nzTip)}}function Q(i,a){if(i&1&&(r(0,"div")(1,"div",4),g(2,J,0,0,"ng-template",5)(3,K,2,1,"div",6),p()()),i&2){let t=z(),u=k(1);s(),d("ant-spin-rtl",t.dir==="rtl")("ant-spin-spinning",t.isLoading)("ant-spin-lg",t.nzSize==="large")("ant-spin-sm",t.nzSize==="small")("ant-spin-show-text",t.nzTip),s(),O("ngTemplateOutlet",t.nzIndicator||u),s(),m(t.nzTip?3:-1)}}function X(i,a){if(i&1&&(r(0,"div",7),F(1),p()),i&2){let t=z();d("ant-spin-blur",t.isLoading)}}var H="spin",zn=(()=>{let i,a=[],t=[];return class S{static{let o=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;i=[W()],v(null,null,i,{kind:"field",name:"nzIndicator",static:!1,private:!1,access:{has:n=>"nzIndicator"in n,get:n=>n.nzIndicator,set:(n,e)=>{n.nzIndicator=e}},metadata:o},a,t),o&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:o})}nzConfigService;cdr;directionality;_nzModuleName=H;nzIndicator=f(this,a,null);nzSize=(f(this,t),"default");nzTip=null;nzDelay=0;nzSimple=!1;nzSpinning=!0;destroy$=new _;spinning$=new C(this.nzSpinning);delay$=new y(1);isLoading=!1;dir="ltr";constructor(o,n,e){this.nzConfigService=o,this.cdr=n,this.directionality=e}ngOnInit(){this.delay$.pipe(N(this.nzDelay),I(),D(n=>n===0?this.spinning$:this.spinning$.pipe(x(e=>b(e?n:0)))),l(this.destroy$)).subscribe(n=>{this.isLoading=n,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(H).pipe(l(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change?.pipe(l(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(o){let{nzSpinning:n,nzDelay:e}=o;n&&this.spinning$.next(this.nzSpinning),e&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(n){return new(n||S)(c(V),c(B),c(G))};static \u0275cmp=j({type:S,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(n,e){n&2&&d("ant-spin-nested-loading",!e.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:[2,"nzDelay","nzDelay",R],nzSimple:[2,"nzSimple","nzSimple",h],nzSpinning:[2,"nzSpinning","nzSpinning",h]},exportAs:["nzSpin"],features:[$],ngContentSelectors:Z,decls:4,vars:2,consts:[["defaultTemplate",""],[1,"ant-spin-container",3,"ant-spin-blur"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(n,e){n&1&&(E(),g(0,q,5,0,"ng-template",null,0,P)(2,Q,4,12,"div")(3,X,2,2,"div",1)),n&2&&(s(2),m(e.isLoading?2:-1),s(),m(e.nzSimple?-1:3))},dependencies:[U],encapsulation:2})}})(),un=(()=>{class i{static \u0275fac=function(u){return new(u||i)};static \u0275mod=M({type:i});static \u0275inj=T({})}return i})();export{zn as a,un as b};
