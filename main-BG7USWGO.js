import{c as u}from"./chunk-7LAODXM5.js";import"./chunk-TXZEOAPN.js";import{c as ot,i as rt,j as st,k as at,l as lt,m as ct,o as ut,p as H,q as b,r as R,s as dt}from"./chunk-N56AJB5W.js";import{$ as E,Aa as W,Fa as p,Ga as X,Ja as Z,La as A,Ma as w,N as O,Na as M,Oa as x,Pa as F,Qa as a,Ra as l,Sa as f,T as s,Ta as L,V as h,Xa as _,Ya as C,Za as tt,_ as D,_a as et,ab as d,bb as T,hb as m,i as Y,ib as I,jb as nt,k as J,lb as it,n as y,sa as S,ta as Q,w as K,xa as c}from"./chunk-TMRUMUQV.js";import{d as q}from"./chunk-JMZ7DUBM.js";var j=()=>()=>{let t=s(u),e=s(H);return t.isLoggedIn()?!0:e.parseUrl("auth/login")},pt=()=>()=>{let t=s(u),e=s(H);return t.isLoggedIn()?e.parseUrl("home"):!0};var ht=[{path:"auth",canActivate:[pt()],loadChildren:()=>import("./chunk-ZT4N5XYJ.js").then(t=>t.AUTH_ROUTES)},{path:"client",canActivate:[j()],loadChildren:()=>import("./chunk-MNZQDLTW.js").then(t=>t.CLIENT_ROUTES)},{path:"provider",canActivate:[j()],loadChildren:()=>import("./chunk-MTM2BNAW.js").then(t=>t.PROVIDER_ROUTES)},{path:"search",loadChildren:()=>import("./chunk-JVWGVI3B.js").then(t=>t.SEARCH_ROUTES)},{path:"home",loadComponent:()=>import("./chunk-OMVSMT25.js").then(t=>t.HomeComponent)},{path:"",redirectTo:"home",pathMatch:"full"}];var v=(()=>{let e=class e{constructor(){this.toasts=Q([])}show(i,n,o,g){let St=[{type:i,title:n,body:o,delay:g},...this.toasts()];this.toasts.set(St)}removeToast(i){this.toasts().splice(i,1)}removeLastToast(){this.toasts().pop()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=O({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var mt=(t,e)=>{let r=s(v),i=s(u);return e(t).pipe(K(n=>{if([401,403].includes(n.status))r.show("error","Sorry!","Unathorized. Please login again."),i.refreshToken();else if(n.status==400){let o="";n.error.message?n.error.message.forEach(g=>{o=o+g+`. 
`}):o="Something went wrong. Please try later.",r.show("error","Sorry!",o)}else n.status==500?r.show("error","Sorry!",n.error.message):r.show("error","Sorry!","Something went wrong. Please try later. ");return J(()=>n)}))};var ft=(()=>{let e=class e{constructor(){this.auth=s(u),this.toaster=s(v),this.count=0}intercept(i,n){return Y(this.handle(i,n))}handle(i,n){return q(this,null,function*(){if(!this.auth?.user()?.accessToken)return yield y(n.handle(i));if(!this.auth.isTokenExpired()){this.count=0;let o=U(i,this.auth.user()?.accessToken);return yield y(n.handle(o))}if(this.auth.isTokenExpired()&&this.count==1){let o=U(i,this.auth.user()?.accessToken);return yield y(n.handle(o))}if(this.auth.isTokenExpired()&&this.count==2&&(this.count=0,this.auth.logout("login")),this.auth.isTokenExpired()&&this.count==0){this.count++;let o=this.auth.refreshToken(),g=yield y(o);this.auth.setUser(g),this.toaster.show("success","Attn","Token refreshed.");let P=U(i,this.auth.user()?.accessToken);return yield y(n.handle(P))}else return yield y(n.handle(i))})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=O({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),U=(t,e)=>t.clone({setHeaders:{Authorization:`Bearer ${e}`}});var _t={providers:[{provide:rt,useClass:ft,multi:!0},dt(ht),st(lt(),at([mt]))]};var N=()=>({exact:!0});function Mt(t,e){if(t&1&&(a(0,"li")(1,"a",3),d(2),l()()),t&2){let r=e.$implicit;c(1),p("routerLink",r.url)("routerLinkActiveOptions",I(3,N)),c(1),T(r.name)}}function xt(t,e){if(t&1){let r=L();x(0,Mt,3,4,"li",null,M),f(2,"span",1),a(3,"li")(4,"a",2),_("click",function(){D(r);let n=C();return E(n.logout())}),d(5,"Logout"),l()()}if(t&2){let r=C();F(r.loggedInMenuItems)}}function Ft(t,e){if(t&1&&(a(0,"li")(1,"a",3),d(2),l()()),t&2){let r=e.$implicit;c(1),p("routerLink",r.url)("routerLinkActiveOptions",I(3,N)),c(1),T(r.name)}}function It(t,e){if(t&1&&(a(0,"li")(1,"a",3),d(2),l()()),t&2){let r=e.$implicit;c(1),p("routerLink",r.url)("routerLinkActiveOptions",I(3,N)),c(1),T(r.name)}}function Dt(t,e){if(t&1&&(x(0,Ft,3,4,"li",null,M),f(2,"span",1),x(3,It,3,4,"li",null,M)),t&2){let r=C();F(r.menuItems),c(3),F(r.authMenuItems)}}var gt=(()=>{let e=class e{constructor(){this.auth=s(u),this.userRoute="client",this.loggedIn=S(()=>this.auth.isLoggedIn()),this.logout=()=>{this.auth.logout("home")},this.menuItems=[{name:"Find Provider",url:"/search/providers",icon:"search"}],this.loggedInMenuItems=[],this.clientMenuItems=[{name:"Dashboard",url:"client/dashboard",icon:"dashboard"},{name:"Find Provider",url:"/search/providers",icon:"search"},{name:"My Profile",url:"client/profile",icon:"manage_accounts"}],this.providerMenuItems=[{name:"Dashboard",url:"provider/dashboard",icon:"dashboard"},{name:"My Profile",url:"provider/profile",icon:"manage_account"},{name:"Find Provider",url:"/search/providers",icon:"search"}],this.authMenuItems=[{name:"Login",url:"auth/login",icon:"login"},{name:"Sign up",url:"auth/registration",icon:"person_add"}]}ngOnInit(){this.auth.user().user?.isProvider?this.loggedInMenuItems=this.providerMenuItems:this.loggedInMenuItems=this.clientMenuItems}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-header-nav-menu"]],standalone:!0,features:[m],decls:3,vars:1,consts:[[1,"nav-links"],[1,"pa-md"],[3,"click"],["routerLinkActive","active-link",3,"routerLink","routerLinkActiveOptions"]],template:function(n,o){n&1&&(a(0,"ul",0),A(1,xt,6,0)(2,Dt,5,0),l()),n&2&&(c(1),w(1,o.loggedIn()?1:2))},dependencies:[b,R],styles:["[_nghost-%COMP%]{margin-left:auto}"]});let t=e;return t})();var Et=t=>({hidden:t}),At=(t,e,r)=>({"fade-anim":t,in:e,"show-drop-menu":r}),wt=["*"],V=(()=>{let e=class e{constructor(){this.auth=s(u),this.modalValue=!1,this.fadeAnim=!1,this.fadeIn=!1,this.modalChange=new W,this.hideContainer=!0}get modal(){return this.modalValue}set modal(i){i?(this.hideContainer=!1,this.fadeAnim=!0,setTimeout(()=>{this.fadeIn=!0})):(this.fadeIn=!1,setTimeout(()=>{this.fadeAnim=!1,this.hideContainer=!0},400)),this.modalValue=i,this.modalChange.emit(this.modalValue)}closeModal(){this.modal=!1}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-header-user-drop-menu"]],inputs:{modal:"modal"},outputs:{modalChange:"modalChange"},standalone:!0,features:[m],ngContentSelectors:wt,decls:4,vars:8,consts:[[3,"ngClass"],["role","dialog",1,"nav-menu-drop-container",3,"ngClass","click"],[1,"nav-drop-links"]],template:function(n,o){n&1&&(tt(),a(0,"div",0)(1,"div",1),_("click",function(){return o.closeModal()}),a(2,"div",2),et(3),l()()()),n&2&&(p("ngClass",nt(2,Et,o.hideContainer)),c(1),p("ngClass",it(4,At,o.fadeAnim,o.fadeIn,o.fadeIn)))},dependencies:[ot]});let t=e;return t})();function Lt(t,e){if(t&1){let r=L();a(0,"span",10),_("click",function(){D(r);let n=C();return E(n.closeMenu())}),d(1,"close"),l()}}function Pt(t,e){if(t&1){let r=L();a(0,"span",10),_("click",function(){D(r);let n=C();return E(n.openMenu())}),d(1,"menu"),l()}}var Ot=()=>({exact:!0});function bt(t,e){t&1&&(a(0,"a",11),d(1,"Login"),l()),t&2&&p("routerLink","auth/login")("routerLinkActiveOptions",I(2,Ot))}var vt=(()=>{let e=class e{constructor(){this.auth=s(u),this.toggleMenuModal=!1,this.loggedIn=S(()=>this.auth.isLoggedIn())}openMenu(){this.toggleMenuModal=!0}closeMenu(){this.toggleMenuModal=!1}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-header"]],standalone:!0,features:[m],decls:14,vars:4,consts:[[1,"header"],[1,"container","container-md","items-center","flex"],[1,"mr-auto"],["routerLinkActive","active-link",3,"routerLink"],[1,"sm-hide"],[1,"md-hide","lg-hide","flex","items-center"],[1,"flex","items-center","mr-xs"],["class","material-symbols-outlined"],[3,"modal","modalChange"],["class","nav-link","routerLinkActive","active-link",3,"routerLink","routerLinkActiveOptions"],[1,"material-symbols-outlined",3,"click"],["routerLinkActive","active-link",1,"nav-link",3,"routerLink","routerLinkActiveOptions"]],template:function(n,o){n&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),d(4,"Brand"),l()(),a(5,"div",4),f(6,"app-header-nav-menu"),l(),a(7,"div",5)(8,"div",6),A(9,Lt,2,0,"span",7)(10,Pt,2,0),a(11,"app-header-user-drop-menu",8),_("modalChange",function(P){return o.toggleMenuModal=P}),f(12,"app-header-nav-menu"),l()(),A(13,bt,2,3,"a",9),l()()()),n&2&&(c(3),p("routerLink","home"),c(6),w(9,o.toggleMenuModal?9:10),c(2),p("modal",o.toggleMenuModal),c(2),w(13,o.loggedIn()?-1:13))},dependencies:[gt,b,V,R]});let t=e;return t})();function yt(t,e){return{type:7,name:t,definitions:e,options:{}}}function $(t,e=null){return{type:4,styles:e,timings:t}}function B(t){return{type:6,styles:t,offset:null}}function z(t,e,r){return{type:0,name:t,styles:e,options:r}}function G(t,e,r=null){return{type:1,expr:t,animation:e,options:r}}var Ct=(()=>{let e=class e{constructor(){this.toaster=s(v)}ngOnInit(){setTimeout(()=>this.toaster.removeLastToast(),this.toast.delay||6e3)}removeToast(){this.toaster.removeToast(this.i)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-toaster-details"]],inputs:{toast:"toast",i:"i"},standalone:!0,features:[m],decls:7,vars:7,consts:[[1,"toast-heading"],[1,"close",3,"click"]],template:function(n,o){n&1&&(a(0,"div")(1,"h4",0),d(2),l(),a(3,"p"),d(4),l(),a(5,"a",1),_("click",function(){return o.removeToast()}),d(6,"\xD7"),l()()),n&2&&(Z("toast toast-",o.toast.type,""),X("bottom",o.i*100,"px"),c(2),T(o.toast.title),c(2),T(o.toast.body))},data:{animation:[yt("toasterState",[z("inactive",B({opacity:0})),z("active",B({opacity:1})),G("inactive => active",$("500ms ease-in")),G("active => inactive",$("500ms ease-out"))])]}});let t=e;return t})();function Rt(t,e){if(t&1&&f(0,"app-toaster-details",0),t&2){let r=e.$implicit,i=e.$index;p("toast",r)("i",i)}}var Tt=(()=>{let e=class e{constructor(){this.toaster=s(v),this.toasts=S(()=>this.toaster.toasts())}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-toaster"]],standalone:!0,features:[m],decls:2,vars:0,consts:[[3,"toast","i"]],template:function(n,o){n&1&&x(0,Rt,1,2,"app-toaster-details",0,M),n&2&&F(o.toasts())},dependencies:[Ct]});let t=e;return t})();var kt=(()=>{let e=class e{constructor(){this.title="socket-io",this.authService=s(u)}ngOnInit(){console.log("app component initialized",this.authService.user()?.accessToken)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-root"]],standalone:!0,features:[m],decls:3,vars:0,template:function(n,o){n&1&&f(0,"app-header")(1,"router-outlet")(2,"app-toaster")},dependencies:[ut,vt,Tt]});let t=e;return t})();ct(kt,_t).catch(t=>console.error(t));
