import{a as n}from"./chunk-AOEJRZ7Y.js";import{f as d,g as p}from"./chunk-VB3MO2AL.js";import{N as o,T as s}from"./chunk-O2WMGYX5.js";var m=(()=>{let t=class t{constructor(){this.url=n.apiUrl,this.http=s(p),this.provider={},this.foundProviders=[],this.myProviders=[]}getMyProviders(){return this.http.get(this.url+"/providers/my-providers")}providerSearch(r){return this.http.post(this.url+"/providers/provider-search",r)}getProviderProfileDetailsById(r){let i=new d().set("providerId",r);return this.http.get(this.url+"/providers/details-by-provider-id",{params:i})}saveProviderToLocal(r){window.localStorage.setItem("provider",JSON.stringify(r))}getProviderFromLocal(){let r=window.localStorage.getItem("provider");return r?JSON.parse(r):null}getProvider(){return this.provider?.providerId?this.provider:this.provider=this.getProviderFromLocal()}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{m as a};
