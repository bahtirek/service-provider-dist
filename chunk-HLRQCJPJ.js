import{a as n}from"./chunk-YQQ7QPLD.js";import{g as d,h as p}from"./chunk-YKD7L7GY.js";import{N as o,T as s}from"./chunk-BWQSIJDM.js";var m=(()=>{let t=class t{constructor(){this.url=n.apiUrl,this.http=s(p),this.provider={},this.foundProviders=[],this.myProviders=[]}getMyProviders(){return this.http.get(this.url+"/providers/my-providers")}providerSearch(r){return this.http.post(this.url+"/providers/provider-search",r)}getProviderProfileDetailsById(r){let i=new d().set("providerId",r);return this.http.get(this.url+"/providers/details-by-provider-id",{params:i})}saveProviderToLocal(r){this.provider=r,window.localStorage.setItem("provider",JSON.stringify(r))}getProviderFromLocal(){let r=window.localStorage.getItem("provider");return r?JSON.parse(r):null}getProvider(){return this.provider.providerId?this.provider:(this.provider=this.getProviderFromLocal(),this.provider)}addProvider(r){this.myProviders.push(r)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{m as a};
