import{a as P,b as S}from"./chunk-LBK267K6.js";import"./chunk-N3OGWZNB.js";import"./chunk-MMCNEU5K.js";import"./chunk-7S2JXWPV.js";import"./chunk-RXTZNB26.js";import{a as f}from"./chunk-C2QTALJL.js";import"./chunk-AOEJRZ7Y.js";import"./chunk-MBTLH6JK.js";import{p as h}from"./chunk-YKD7L7GY.js";import{$a as m,Fa as l,Pa as o,Qa as t,T as a,V as v,Wa as p,gb as u,xa as c}from"./chunk-BWQSIJDM.js";import"./chunk-JMZ7DUBM.js";var T=(()=>{let r=class r{constructor(){this.router=a(h),this.providerService=a(f),this.providers=[]}ngOnInit(){this.getMyProviders()}getMyProviders(){this.providerService.getMyProviders().subscribe({next:e=>{this.providers=e,this.providerService.myProviders=e},error:e=>{console.log(e)}})}foundProviders(e){this.providerService.foundProviders=e.providers,this.providerService.searchDetails=e.searchDetails,this.router.navigate(["/search/providers/results"])}cardClicked(e){this.providerService.saveProviderToLocal(e),this.router.navigate(["/client/my-provider"])}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=v({type:r,selectors:[["app-dashboard"]],standalone:!0,features:[u],decls:5,vars:1,consts:[[1,"container","container-md","pt-xxl","column"],[3,"foundProviders"],[1,"mb-md"],[3,"providers","cardClickled"]],template:function(i,n){i&1&&(o(0,"div",0)(1,"app-provider-search",1),p("foundProviders",function(s){return n.foundProviders(s)}),t(),o(2,"h2",2),m(3,"My Providers"),t(),o(4,"app-provider-list",3),p("cardClickled",function(s){return n.cardClicked(s)}),t()()),i&2&&(c(4),l("providers",n.providers))},dependencies:[S,P]});let d=r;return d})();export{T as DashboardComponent};
