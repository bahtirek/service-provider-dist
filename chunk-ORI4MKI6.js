import{a as S}from"./chunk-XCYL4QET.js";import{a as D,b as x}from"./chunk-LK5WJ2EN.js";import{a as h}from"./chunk-Q6P6KOMJ.js";import"./chunk-Y6NGLBTQ.js";import"./chunk-KZEZHTV3.js";import{Fa as u,Qa as t,Ra as n,Sa as c,T as m,V as d,Xa as v,ab as o,bb as p,hb as f,xa as r}from"./chunk-TMRUMUQV.js";import"./chunk-JMZ7DUBM.js";var g=(()=>{let e=class e{constructor(){this.clientDetails={}}set clientProfile(s){this.clientDetails=s}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["app-client-details"]],inputs:{clientProfile:"clientProfile"},standalone:!0,features:[f],decls:17,vars:3,consts:[[1,"card","provider-card"],[1,"reset"],[1,"flex","no-wrap"],[1,"text-bold","mr-md","flex"],[1,"user-avatar"],[1,"material-symbols-outlined"]],template:function(i,a){i&1&&(t(0,"div",0)(1,"ul",1)(2,"li",2)(3,"div",3),c(4,"div",4),n(),t(5,"div")(6,"ul",1)(7,"div"),o(8),n(),t(9,"div"),o(10),n()()()(),t(11,"li",2)(12,"div",3)(13,"span",5),o(14,"email"),n()(),t(15,"div"),o(16),n()()()()),i&2&&(r(8),p(a.clientDetails.firstName),r(2),p(a.clientDetails.lastName),r(6),p(a.clientDetails.email))}});let l=e;return l})();var N=(()=>{let e=class e{constructor(){this.navigation=m(x),this.clientService=m(S),this.auth=m(h),this.clientProfileDetails={}}ngOnInit(){this.clientProfileDetails=this.auth.user().user}edit(){console.log("edit")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["app-profile"]],standalone:!0,features:[f],decls:6,vars:1,consts:[[1,"container","container-md"],[1,"flex","column"],[3,"clientProfile"],[1,"ml-auto","my-lg",3,"click"]],template:function(i,a){i&1&&(t(0,"div",0),c(1,"app-back-button"),t(2,"div",1),c(3,"app-client-details",2),t(4,"button",3),v("click",function(){return a.edit()}),o(5,"Edit"),n()()()),i&2&&(r(3),u("clientProfile",a.clientProfileDetails))},dependencies:[g,D]});let l=e;return l})();export{N as ProfileComponent};
