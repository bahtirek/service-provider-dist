import{a as V}from"./chunk-YHINX3UW.js";import{a as M}from"./chunk-RGYBRH5B.js";import{a as L}from"./chunk-RXTZNB26.js";import{a as w}from"./chunk-7ULYLV6A.js";import"./chunk-YQQ7QPLD.js";import{b,c,d as C,e as F,g as E,i as k,l as x,p as P,r as D}from"./chunk-MBTLH6JK.js";import{p as y,q as S}from"./chunk-YKD7L7GY.js";import{$a as a,Fa as l,Pa as i,Qa as r,Ra as m,T as d,V as v,Wa as f,gb as h,hb as p,xa as n,ya as g}from"./chunk-BWQSIJDM.js";import"./chunk-JMZ7DUBM.js";var N=()=>["/registration"],_=()=>["../registration"],H=(()=>{let s=class s{constructor(o){this.fb=o,this.router=d(y),this.auth=d(w),this.providerProfileService=d(M),this.validate=!0,this.errorMessage="",this.loginForm=this.fb.group({email:["",[c.required,V()]],password:["",[c.required]]})}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}onSubmit(){if(this.validate=!0,this.loginForm.valid){let o={email:this.email?.value,password:this.password?.value};this.auth.login(o).subscribe({next:e=>{this.auth.setUser(e),e?.user?.isProvider?this.checkIfProfileComplete(e):this.router.navigate(["client"])},error:e=>{console.log(e),e.status===401&&(this.errorMessage="Invalid credentials")}})}}checkIfProfileComplete(o){this.providerProfileService.getProviderProfileDetails().subscribe({next:e=>{!e||this.isEmpty(e)||!e.availableDays||e.availableDays.length==0?this.router.navigate(["provider/profile-form"]):this.router.navigate(["provider"])},error:e=>{console.log(e)}})}isEmpty(o){return Object.keys(o).length===0}};s.\u0275fac=function(e){return new(e||s)(g(P))},s.\u0275cmp=v({type:s,selectors:[["app-login"]],standalone:!0,features:[h],decls:30,vars:12,consts:[[1,"container","grid","mt-xxl"],[1,"col","flex","flex-center","gt-md"],["src","../../../assets/images/login.png","alt","","srcset",""],[1,"col","flex","flex-center"],[1,"width-400"],[1,"mb-md"],[3,"message"],[1,"mt-md",3,"formGroup"],[1,"form-element"],["for","email"],["type","email","id","email","formControlName","email"],[3,"validate","control","onValueChanges"],["type","password","id","password","formControlName","password"],["for","password"],[3,"control","onValueChanges","validate"],[1,"text-right"],[3,"click"],[1,"mt-lg","text-right","body2"],["routerLinkActive","router-link-active",3,"routerLink"],[1,"mt-md","text-right","body2"]],template:function(e,t){e&1&&(i(0,"div")(1,"div",0)(2,"div",1),m(3,"img",2),r(),i(4,"div",3)(5,"div",4)(6,"h1",5),a(7,"Log in"),r(),m(8,"app-form-error",6),i(9,"form",7)(10,"div",8)(11,"label",9),a(12,"Email"),r(),m(13,"input",10)(14,"app-form-error",11),r(),i(15,"div",8),m(16,"input",12),i(17,"label",13),a(18,"Password"),r(),m(19,"app-form-error",14),r()(),i(20,"div",15)(21,"button",16),f("click",function(){return t.onSubmit()}),a(22,"Login"),r()(),i(23,"div",17)(24,"a",18),a(25," Forgot your password? "),r()(),i(26,"div",19),a(27," Don't have an account? Sign up now! "),i(28,"a",18),a(29," Sign up "),r()()()()()()),e&2&&(n(8),l("message",t.errorMessage),n(1),l("formGroup",t.loginForm),n(5),l("validate",t.validate)("control",t.email)("onValueChanges",t.email==null?null:t.email.value),n(5),l("control",t.password)("onValueChanges",t.password==null?null:t.password.value)("validate",t.validate),n(5),l("routerLink",p(10,N)),n(4),l("routerLink",p(11,_)))},dependencies:[S,D,E,b,C,F,k,x,L],styles:["img[_ngcontent-%COMP%]{max-width:512px;width:100%;height:auto}"]});let u=s;return u})();export{H as LoginComponent};
