import{a as p}from"./chunk-Y6NGLBTQ.js";import{g as o,h as b}from"./chunk-C2EUOJ5X.js";import{N as u,T as a,ta as l}from"./chunk-6W2HLBTE.js";import{a as c,b as n}from"./chunk-JMZ7DUBM.js";var I=(()=>{let s=class s{constructor(){this.url=p.apiUrl,this.http=a(b),this.subjects=l([])}createSubject(t){return this.http.post(this.url+"/messages/subject",t)}getProviderSubjectsAPI(t){let e=new o().set("providerId",t);return this.http.get(this.url+"/messages/client-provider-subjects",{params:e})}getClientSubjectsAPI(t){let e=new o().set("clientId",t);return this.http.get(this.url+"/messages/provider-client-subjects",{params:e})}saveSubjectToLocal(t){window.localStorage.setItem("subject",JSON.stringify(t))}getSubjectFromLocal(){let t=window.localStorage.getItem("subject");return t?JSON.parse(t):null}getProviderSubjects(t){this.subjects.set([]),this.getProviderSubjectsAPI(t).subscribe({next:e=>{this.subjects.set(e)},error:e=>{console.log(e)}})}getClientSubjects(t){this.getClientSubjectsAPI(t).subscribe({next:e=>{this.subjects.set(e)},error:e=>{console.log(e)}})}updateSubjects(t){this.subjects.update(e=>e.map(r=>r.subjectId===t.subjectId?n(c({},r),{newMessageCount:r.newMessageCount+1}):r))}};s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=u({token:s,factory:s.\u0275fac,providedIn:"root"});let i=s;return i})();export{I as a};
