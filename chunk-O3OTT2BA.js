import{a as h}from"./chunk-Y6NGLBTQ.js";import{g as p,h as v}from"./chunk-KZEZHTV3.js";import{N as s,T as d,f as o}from"./chunk-TMRUMUQV.js";var f=(()=>{let t=class t{constructor(){this.url=h.apiUrl,this.http=d(v),this.providers=[],this.provider={},this.foundProviders=[],this.myProviders=[],this.providersSource=new o}getMyProviders(){return this.http.get(this.url+"/providers/my-providers")}providerSearch(r){return this.http.post(this.url+"/providers/provider-search",r)}getProviderProfileDetailsById(r){let i=new p().set("providerId",r);return this.http.get(this.url+"/providers/details-by-provider-id",{params:i})}saveProviderToLocal(r){this.provider=r,window.localStorage.setItem("provider",JSON.stringify(r))}getProviderFromLocal(){let r=window.localStorage.getItem("provider");return r?JSON.parse(r):null}getProvider(){return this.provider.providerId?this.provider:(this.provider=this.getProviderFromLocal(),this.provider)}addProvider(r){this.myProviders.push(r)}setMyProviders(){this.http.get(this.url+"/providers/my-providers").subscribe({next:r=>{this.providers=r,this.providersSource.next(r)},error:r=>{console.log(r)}})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{f as a};
