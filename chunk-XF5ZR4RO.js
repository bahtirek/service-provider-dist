import{a as F}from"./chunk-7S2JXWPV.js";import{a as h}from"./chunk-RC7PFZWJ.js";import"./chunk-YQQ7QPLD.js";import{p as b}from"./chunk-YKD7L7GY.js";import{$ as k,$a as o,Aa as f,Fa as d,Ka as g,La as x,Ma as y,Na as S,Oa as D,Pa as l,Qa as c,Ra as E,Sa as M,T as C,V as s,Wa as p,Xa as v,_,ab as w,cb as T,gb as m,xa as a}from"./chunk-BWQSIJDM.js";import"./chunk-JMZ7DUBM.js";function N(i,e){if(i&1&&(l(0,"div",6),E(1,"app-enevelope",7),c()),i&2){let u=v();a(1),d("newMessageCount",u.clientDetails.newMessageCount)}}var I=(()=>{let e=class e{constructor(){this.clientService=C(h),this.clientDetails={},this.cardClickled=new f}set client(t){this.clientDetails=t}cardClicked(){this.cardClickled.emit(this.clientDetails)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-client-card"]],inputs:{client:"client"},outputs:{cardClickled:"cardClickled"},standalone:!0,features:[m],decls:15,vars:4,consts:[[1,"card","hoverable","provider-card","flex","no-wrap",3,"click"],[1,"reset"],[1,"flex"],[1,"text-bold","mr-md","flex"],[1,"material-symbols-outlined"],["class","ml-auto"],[1,"ml-auto"],[3,"newMessageCount"]],template:function(n,r){n&1&&(l(0,"div",0),p("click",function(){return r.cardClicked()}),l(1,"ul",1)(2,"li",2)(3,"div",3)(4,"span",4),o(5,"badge"),c()(),l(6,"div"),o(7),c()(),l(8,"li",2)(9,"div",3)(10,"span",4),o(11,"email"),c()(),l(12,"div"),o(13),c()()(),g(14,N,2,1,"div",5),c()),n&2&&(a(7),T("",r.clientDetails.firstName," ",r.clientDetails.lastName,""),a(6),w(r.clientDetails.email),a(1),x(14,r.clientDetails.newMessageCount?14:-1))},dependencies:[F]});let i=e;return i})();function B(i,e){if(i&1){let u=M();l(0,"app-client-card",1),p("cardClickled",function(n){_(u);let r=v();return k(r.cardClicked(n))}),c()}if(i&2){let u=e.$implicit;d("client",u)}}var O=(()=>{let e=class e{constructor(){this.clientList=[],this.cardClickled=new f}set clients(t){this.clientList=t,console.log(t)}cardClicked(t){this.cardClickled.emit(t)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-client-list"]],inputs:{clients:"clients"},outputs:{cardClickled:"cardClickled"},standalone:!0,features:[m],decls:3,vars:0,consts:[[1,"container","column","gap-xl"],[3,"client","cardClickled"],[3,"client"]],template:function(n,r){n&1&&(l(0,"div",0),S(1,B,1,1,"app-client-card",2,y),c()),n&2&&(a(1),D(r.clientList))},dependencies:[I]});let i=e;return i})();var ie=(()=>{let e=class e{constructor(){this.router=C(b),this.clientService=C(h),this.clients=[]}ngOnInit(){this.getMyClients(),console.log("test")}getMyClients(){this.clientService.getMyClients().subscribe({next:t=>{console.log(t),this.clients=t},error:t=>{console.log(t)}})}cardClicked(t){this.clientService.saveClientToLocal(t),this.router.navigate(["/provider/my-client"])}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["app-dashboard"]],standalone:!0,features:[m],decls:4,vars:1,consts:[[1,"container","container-md","pt-xxl","column","gap-xl"],[1,""],[3,"clients","cardClickled"]],template:function(n,r){n&1&&(l(0,"div",0)(1,"h2",1),o(2,"My Clients"),c(),l(3,"app-client-list",2),p("cardClickled",function(j){return r.cardClicked(j)}),c()()),n&2&&(a(3),d("clients",r.clients))},dependencies:[O]});let i=e;return i})();export{ie as DashboardComponent};
