import{a as O}from"./chunk-YHINX3UW.js";import{a as k}from"./chunk-RXTZNB26.js";import{a as V}from"./chunk-7ULYLV6A.js";import{b,c as s,d as P,e as F,g as T,h as _,i as q,l as R,p as I,r as M}from"./chunk-MBTLH6JK.js";import{p as S}from"./chunk-YKD7L7GY.js";import{$ as h,$a as n,Fa as u,Ka as C,La as N,Pa as i,Qa as t,Ra as o,Sa as x,T as c,V as v,Wa as y,Xa as f,_ as g,gb as E,xa as l,ya as w}from"./chunk-BWQSIJDM.js";import"./chunk-JMZ7DUBM.js";function D(m,d){if(m&1){let e=x();i(0,"div",1),o(1,"img",2),t(),i(2,"div",3)(3,"div",4)(4,"h1",5),n(5,"Sign up"),t(),i(6,"form",6)(7,"div",7)(8,"label",8),n(9,"First Name"),t(),o(10,"input",9)(11,"app-form-error",10),t(),i(12,"div",7)(13,"label",11),n(14,"Last Name"),t(),o(15,"input",12)(16,"app-form-error",10),t(),i(17,"div",7)(18,"label",13),n(19,"Email"),t(),o(20,"input",14)(21,"app-form-error",10),t(),i(22,"div",7),o(23,"input",15),i(24,"label",16),n(25,"Password"),t(),o(26,"app-form-error",17),t(),i(27,"div",7)(28,"label",18),n(29,"Confirm Password"),t(),o(30,"input",19)(31,"app-form-error",20),t(),i(32,"div",7)(33,"div",21),o(34,"input",22),i(35,"label",23),n(36,"I am seeking for a service"),t()(),i(37,"div",24),o(38,"input",25),i(39,"label",23),n(40,"I am a service provider"),t()(),o(41,"app-form-error",10),t()(),i(42,"div",26)(43,"button",27),y("click",function(){g(e);let a=f();return h(a.onSubmit())}),n(44,"Sign up"),t()()()()}if(m&2){let e=f();l(6),u("formGroup",e.registrationForm),l(5),u("validate",e.validate)("control",e.firstName)("onValueChanges",e.firstName==null?null:e.firstName.value),l(5),u("validate",e.validate)("control",e.lastName)("onValueChanges",e.lastName==null?null:e.lastName.value),l(5),u("validate",e.validate)("control",e.email)("onValueChanges",e.email==null?null:e.email.value),l(5),u("control",e.password)("onValueChanges",e.password==null?null:e.password.value)("validate",e.validate),l(5),u("validate",e.validate)("control",e.confirmPassword)("onValueChanges",e.confirmPassword==null?null:e.confirmPassword.value)("validateOnce",e.validateConfirmPassword),l(10),u("validate",e.validate)("control",e.userType)("onValueChanges",e.userType==null?null:e.userType.value)}}function L(m,d){m&1&&(i(0,"div",28)(1,"div",29),n(2," Verify your email address "),t()())}var W=(()=>{let d=class d{constructor(r){this.fb=r,this.router=c(S),this.auth=c(V),this.registrationIsOn=!0,this.validate=!1,this.validateConfirmPassword=!1,this.registrationForm=this.fb.group({firstName:["",[s.required,s.minLength(2)]],lastName:["",[s.required,s.minLength(2)]],email:["",[s.required,O()]],password:["",[s.required]],confirmPassword:["",[s.required]],userType:["",[s.required]]},{validator:this.passwordMatchValidator.bind(this)})}get firstName(){return this.registrationForm.get("firstName")}get lastName(){return this.registrationForm.get("lastName")}get email(){return this.registrationForm.get("email")}get password(){return this.registrationForm.get("password")}get confirmPassword(){return this.registrationForm.get("confirmPassword")}get userType(){return this.registrationForm.get("userType")}passwordMatchValidator(r){let a=r.get("password"),p=r.get("confirmPassword");this.validateConfirmPassword=!this.validateConfirmPassword,p?.value?a?.value!==p?.value?p?.setErrors({passwordMismatch:!0}):p?.setErrors(null):p?.setErrors({required:!0})}onSubmit(){if(this.validate=!0,this.registrationForm.valid){let r={firstName:this.firstName?.value,lastName:this.lastName?.value,email:this.email?.value,password:this.password?.value};this.userType?.value==="provider"?r.isProvider=!0:r.isClient=!0,this.auth.registration(r).subscribe({next:a=>{this.registrationIsOn=!1},error:a=>{console.log(a)}})}}};d.\u0275fac=function(a){return new(a||d)(w(I))},d.\u0275cmp=v({type:d,selectors:[["app-registration"]],standalone:!0,features:[E],decls:4,vars:1,consts:[[1,"container","grid","mt-xxl"],[1,"col","flex","flex-center","gt-md"],["src","../../../assets/images/login.png","alt","","srcset",""],[1,"col","flex","flex-center"],[1,"width-400"],[1,"mb-xl"],[3,"formGroup"],[1,"form-element"],["for","firstName"],["type","text","id","firstName","formControlName","firstName"],[3,"validate","control","onValueChanges"],["for","lastName"],["type","text","id","lastName","formControlName","lastName"],["for","email"],["type","email","id","email","formControlName","email"],["type","password","id","password","formControlName","password"],["for","password"],[3,"control","onValueChanges","validate"],["for","confirmPassword"],["type","password","id","confirmPassword","formControlName","confirmPassword"],[3,"validate","control","onValueChanges","validateOnce"],[1,"form-element-radio","mb-md"],["type","radio","id","client","formControlName","userType","value","client"],["for","userType"],[1,"form-element-radio","mb-sm"],["type","radio","id","provider","formControlName","userType","value","provider"],[1,"text-right"],[3,"click"],[1,"flex","justify-center","full-width","pt-xxxl"],[1,"col-6"]],template:function(a,p){a&1&&(i(0,"div")(1,"div",0),C(2,D,45,20)(3,L,3,0),t()()),a&2&&(l(2),N(2,p.registrationIsOn?2:3))},dependencies:[M,T,b,_,P,F,q,R,k]});let m=d;return m})();export{W as RegistrationComponent};
