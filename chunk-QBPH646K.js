import{a as S}from"./chunk-DZOJIH4T.js";import"./chunk-H3ADPMVC.js";import{a as C}from"./chunk-BOBO6OXM.js";import{a as h,b as f}from"./chunk-ANF77CLI.js";import{a as v}from"./chunk-JHCJFOQM.js";import"./chunk-Y6NGLBTQ.js";import{n as b,p as j}from"./chunk-N6PQCY5R.js";import{Fa as l,Pa as o,Qa as u,Ra as p,T as e,V as r,Wa as m,gb as d,xa as a}from"./chunk-DZ4JCLGF.js";import"./chunk-JMZ7DUBM.js";var F=(()=>{let t=class t{constructor(){this.route=e(b),this.router=e(j),this.clientService=e(C),this.subjectService=e(v),this.navigation=e(f),this.subjectList=this.subjectService.subjects,this.displayAsCard=!1,this.clientDetails={}}ngOnInit(){this.getSubjects()}getSubjects(){this.clientDetails=this.clientService.getClient(),this.clientDetails.clientId||this.navigation.back(),this.subjectService.getClientSubjects(this.clientDetails.clientId)}onSubjectClick(n){this.subjectService.saveSubjectToLocal(n),this.router.navigate(["./messages"],{relativeTo:this.route})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=r({type:t,selectors:[["app-my-client"]],standalone:!0,features:[d],decls:4,vars:2,consts:[[1,"container","container-md"],[1,"flex","column","gap-xl"],[3,"subjectList","displayAsCard","onSubjectClick$"]],template:function(i,c){i&1&&(o(0,"div",0),p(1,"app-back-button"),o(2,"div",1)(3,"app-subject-list",2),m("onSubjectClick$",function(g){return c.onSubjectClick(g)}),u()()()),i&2&&(a(3),l("subjectList",c.subjectList())("displayAsCard",c.displayAsCard))},dependencies:[h,S]});let s=t;return s})();export{F as MyClientComponent};
