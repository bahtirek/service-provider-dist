import{a as h}from"./chunk-6O2YNK5F.js";import{$a as i,Aa as m,Fa as c,Ka as v,La as u,Pa as e,Qa as t,Ra as f,V as s,Wa as C,Xa as x,ab as d,cb as D,gb as E,xa as l}from"./chunk-DZ4JCLGF.js";function k(a,n){if(a&1&&f(0,"app-enevelope",6),a&2){let S=x();c("newMessageCount",S.providerDetails.newMessageCount)}}var N=(()=>{let n=class n{constructor(){this.providerDetails={},this.cardClickled=new m}set provider(p){this.providerDetails=p}cardClicked(){this.cardClickled.emit(this.providerDetails)}};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=s({type:n,selectors:[["app-provider-card"]],inputs:{provider:"provider"},outputs:{cardClickled:"cardClickled"},standalone:!0,features:[E],decls:27,vars:6,consts:[[1,"card","hoverable","flex","no-wrap","provider-card",3,"click"],[1,"reset"],[1,"flex","no-wrap"],[1,"text-bold","mr-md","flex"],[1,"material-symbols-outlined"],[1,"material-symbols-outlined","mb-auto"],[3,"newMessageCount"]],template:function(o,r){o&1&&(e(0,"div",0),C("click",function(){return r.cardClicked()}),e(1,"ul",1)(2,"li",2)(3,"div",3)(4,"span",4),i(5,"badge"),t()(),e(6,"div"),i(7),t()(),e(8,"li",2)(9,"div",3)(10,"span",4),i(11,"email"),t()(),e(12,"div"),i(13),t()(),e(14,"li",2)(15,"div",3)(16,"span",4),i(17,"phone"),t()(),e(18,"div"),i(19),t()(),e(20,"li",2)(21,"div",3)(22,"span",5),i(23,"info"),t()(),e(24,"div"),i(25),t()()(),v(26,k,1,1,"app-enevelope",6),t()),o&2&&(l(7),D("",r.providerDetails.firstName," ",r.providerDetails.lastName,""),l(6),d(r.providerDetails.email),l(6),d(r.providerDetails.phoneNumber),l(6),d(r.providerDetails.description),l(1),u(26,r.providerDetails.newMessageCount?26:-1))},dependencies:[h]});let a=n;return a})();export{N as a};
