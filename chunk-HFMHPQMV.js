import{h as s,p,t as h}from"./chunk-N56AJB5W.js";import{N as o,T as e}from"./chunk-TMRUMUQV.js";var m=(()=>{let t=class t{constructor(){this.url=h.apiUrl,this.http=e(s),this.router=e(p)}getWeekDays(){return this.http.get(this.url+"/providers/lk-week-days")}getWorkHours(){return this.http.get(this.url+"/providers/lk-work-hours")}getCategory(){return this.http.get(this.url+"/providers/lk-category")}postProviderProfileDetails(i){return this.http.post(this.url+"/providers/details",i)}getProviderProfileDetails(){return this.http.get(this.url+"/providers/details")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{m as a};
