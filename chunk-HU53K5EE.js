import{a as y,b as E}from"./chunk-2PUINSHV.js";import"./chunk-E7IIHPGD.js";import"./chunk-OJXRLJM7.js";import"./chunk-B5SXJMOA.js";import"./chunk-3H2OTNLZ.js";import{a as k}from"./chunk-BXFS65BI.js";import"./chunk-AOEJRZ7Y.js";import"./chunk-DMLF7CN4.js";import{b as x,m as g,o as T}from"./chunk-VB3MO2AL.js";import{$ as _,Ea as C,Ja as l,Ka as c,Oa as d,Pa as o,Ra as P,T as s,V as h,Va as v,Wa as m,_ as f,_a as u,fb as S,wa as p}from"./chunk-O2WMGYX5.js";import"./chunk-JMZ7DUBM.js";function D(e,i){e&1&&(d(0,"h4"),u(1,"No providers found"),o())}function M(e,i){e&1&&(d(0,"h2",4),u(1,"Providers"),o())}function V(e,i){if(e&1){let a=P();l(0,M,2,0,"h2",2),d(1,"app-provider-list",3),v("cardClickled",function(t){f(a);let r=m();return _(r.cardClicked(t))}),o()}if(e&2){let a=m();c(0,a.providers.length>0?0:-1),p(1),C("providers",a.providers)}}var q=(()=>{let i=class i{constructor(){this.router=s(T),this.route=s(g),this.providerService=s(k),this.location=s(x),this.providers=[],this.searched=!1,this.results=!1}ngOnInit(){this.results=!!this.route.snapshot.paramMap.get("results"),this.results?(this.providers=this.providerService.foundProviders,this.location.replaceState("/search/providers")):this.providers=this.providerService.foundProviders}foundProviders(n){this.providers=n.providers,this.searched=!0,this.results=!1,this.providerService.searchDetails=void 0}cardClicked(n){this.router.navigate(["/client/my-provider"])}};i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=h({type:i,selectors:[["app-providers"]],standalone:!0,features:[S],decls:4,vars:1,consts:[[1,"container","container-md","pt-xxl","column"],[3,"foundProviders"],["class","mb-md"],[3,"providers","cardClickled"],[1,"mb-md"]],template:function(t,r){t&1&&(d(0,"div",0)(1,"app-provider-search",1),v("foundProviders",function(w){return r.foundProviders(w)}),o(),l(2,D,2,0,"h4")(3,V,2,2),o()),t&2&&(p(2),c(2,r.results&&r.providers.length==0||r.searched&&r.providers.length==0?2:3))},dependencies:[E,y]});let e=i;return e})();export{q as ProvidersComponent};
