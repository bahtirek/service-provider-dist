import{a as E,b as w}from"./chunk-3RGHUZET.js";import"./chunk-SRTC2NI5.js";import"./chunk-QOZRZQLR.js";import"./chunk-6O2YNK5F.js";import"./chunk-TLGUQTKO.js";import{a as k}from"./chunk-WRN5WRPW.js";import{a as y}from"./chunk-JR77RRA2.js";import"./chunk-Y6NGLBTQ.js";import"./chunk-M7TSCOLF.js";import{b as g,n as x,p as T}from"./chunk-N6PQCY5R.js";import{$ as _,$a as h,Fa as C,Ka as l,La as c,Pa as d,Qa as s,Sa as P,T as n,V as u,Wa as v,Xa as m,_ as f,gb as S,xa as p}from"./chunk-DZ4JCLGF.js";import"./chunk-JMZ7DUBM.js";function L(e,r){e&1&&(d(0,"h4"),h(1,"No providers found"),s())}function M(e,r){e&1&&(d(0,"h2",4),h(1,"Providers"),s())}function V(e,r){if(e&1){let a=P();l(0,M,2,0,"h2",2),d(1,"app-provider-list",3),v("cardClickled",function(o){f(a);let t=m();return _(t.cardClicked(o))}),s()}if(e&2){let a=m();c(0,a.providers.length>0?0:-1),p(1),C("providers",a.providers)}}var G=(()=>{let r=class r{constructor(){this.router=n(T),this.route=n(x),this.providerService=n(y),this.location=n(g),this.auth=n(k),this.user=this.auth.user,this.providers=[],this.searched=!1,this.results=!1}ngOnInit(){this.results=!!this.route.snapshot.paramMap.get("results"),this.results?(this.providers=this.providerService.foundProviders,this.location.replaceState("/search/providers")):this.providers=this.providerService.foundProviders}foundProviders(i){this.providerService.foundProviders=i.providers,this.providerService.searchDetails=i.searchDetails,this.providers=i.providers,this.searched=!0,this.results=!1}cardClicked(i){this.providerService.saveProviderToLocal(i),this.auth.user().user?.isClient?this.router.navigate(["/client/my-provider"]):this.router.navigate(["/search/found-provider"])}};r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=u({type:r,selectors:[["app-providers"]],standalone:!0,features:[S],decls:4,vars:1,consts:[[1,"container","container-md","pt-xxl","column"],[3,"foundProviders"],["class","mb-md"],[3,"providers","cardClickled"],[1,"mb-md"]],template:function(o,t){o&1&&(d(0,"div",0)(1,"app-provider-search",1),v("foundProviders",function(D){return t.foundProviders(D)}),s(),l(2,L,2,0,"h4")(3,V,2,2),s()),o&2&&(p(2),c(2,t.results&&t.providers.length==0||t.searched&&t.providers.length==0?2:3))},dependencies:[w,E]});let e=r;return e})();export{G as ProvidersComponent};
