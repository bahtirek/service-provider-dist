import{b as P}from"./chunk-HKCVOMJL.js";import"./chunk-XAWRSPB6.js";import"./chunk-DAPQ2VEW.js";import"./chunk-IMBAXUM4.js";import"./chunk-QQ6JVOM4.js";import{a as L}from"./chunk-O3OTT2BA.js";import"./chunk-TEUQ36QL.js";import"./chunk-Y6NGLBTQ.js";import{p as g,q as y}from"./chunk-KZEZHTV3.js";import{$ as f,Fa as a,La as C,Ma as _,Qa as n,Ra as o,T as s,Ta as x,V as v,Xa as k,Ya as c,_ as u,ab as l,hb as S,ib as b,xa as h,z as m}from"./chunk-TMRUMUQV.js";import"./chunk-JMZ7DUBM.js";function D(e,i){if(e&1){let d=x();n(0,"app-provider-list",3),k("cardClickled",function(t){u(d);let p=c();return f(p.cardClicked(t))}),o()}if(e&2){let d=c();a("providers",d.providers)}}var T=()=>["/search/providers"];function w(e,i){e&1&&(n(0,"a",4),l(1," Find Provider "),o()),e&2&&a("routerLink",b(1,T))}var q=(()=>{let i=class i{constructor(){this.router=s(g),this.providerService=s(L),this.providers=[]}ngOnInit(){this.providers=this.providerService.providers,!(this.providers.length>0)&&this.providerService.providersSource.pipe(m(1)).subscribe(r=>{this.providers=r})}cardClicked(r){this.providerService.saveProviderToLocal(r),this.router.navigate(["/client/my-provider"])}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=v({type:i,selectors:[["app-dashboard"]],standalone:!0,features:[S],decls:5,vars:1,consts:[[1,"container","container-md","pt-xl","column"],[1,"mb-md"],[3,"providers"],[3,"providers","cardClickled"],["routerLinkActive","router-link-active",1,"mt-xl",3,"routerLink"]],template:function(t,p){t&1&&(n(0,"div",0)(1,"h2",1),l(2,"My Providers"),o(),C(3,D,1,1,"app-provider-list",2)(4,w,2,2),o()),t&2&&(h(3),_(3,p.providers.length>0?3:4))},dependencies:[P,y]});let e=i;return e})();export{q as DashboardComponent};
