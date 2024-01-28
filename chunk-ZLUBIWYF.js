import{a as j}from"./chunk-N3OGWZNB.js";import{a as R}from"./chunk-RXTZNB26.js";import"./chunk-AOEJRZ7Y.js";import{a as H,b as W,c,d as w,e as _,g as x,i as V,j as A,k as M,l as P,m as G,n as T,o as q,p as O,r as B}from"./chunk-MBTLH6JK.js";import{d as S,p as D}from"./chunk-YKD7L7GY.js";import{$a as s,Fa as d,Ka as h,Ma as f,Na as k,Oa as b,Pa as o,Qa as t,Ra as u,T as v,V as N,Wa as E,Xa as C,_a as p,ab as g,gb as F,xa as i,ya as I}from"./chunk-BWQSIJDM.js";import"./chunk-JMZ7DUBM.js";function $(n,m){if(n&1&&(o(0,"div",31),u(1,"input",32),o(2,"label",33),s(3),t()()),n&2){let l=m.index,r=C();d("formGroupName",l),i(1),p("id","categoryId"+l),i(1),p("for","categoryId"+l),i(1),g(r.allCategorys[l].name)}}function L(n,m){if(n&1&&(o(0,"div",31),u(1,"input",34),o(2,"label",33),s(3),t()()),n&2){let l=m.index,r=C();d("formGroupName",l),i(1),p("id","weekDayId"+l),i(1),p("for","weekDayId"+l),i(1),g(r.weekDays[l].weekDay)}}function z(n,m){if(n&1&&(o(0,"option",35),s(1),t()),n&2){let l=m.$implicit;p("value",l.lkWorkHourId),i(1),g(l.workHour)}}function J(n,m){if(n&1&&(o(0,"option",35),s(1),t()),n&2){let l=m.$implicit;p("value",l.lkWorkHourId),i(1),g(l.workHour)}}var ie=(()=>{let m=class m{constructor(r){this.fb=r,this.router=v(D),this.providerService=v(j),this.weekDays=[],this.validate=!1,this.validateConfirmPassword=!1,this.workHoursArray=[],this.allCategorys=[],this.categoryErrorMessage="",this.weekdaysErrorMessage="",this.detailsForm=this.fb.group({companyName:["",[c.required]],address:["",[c.required]],phoneNumber:["",[c.required]],description:["",[c.required]],workHours:this.fb.group({fromWorkHourId:["",c.required],toWorkHourId:["",c.required]}),availableDays:this.fb.array([]),category:this.fb.array([])})}ngOnInit(){this.getWeekDays(),this.getWorkHours(),this.getCategory()}get companyName(){return this.detailsForm.get("companyName")}get address(){return this.detailsForm.get("address")}get phoneNumber(){return this.detailsForm.get("phoneNumber")}get description(){return this.detailsForm.get("description")}get fromWorkHourId(){return this.detailsForm.get("workHours.fromWorkHourId")}get toWorkHourId(){return this.detailsForm.get("workHours.toWorkHourId")}get workHours(){return this.detailsForm.get("workHours")}get availableDays(){return this.detailsForm.get("availableDays")}get category(){return this.detailsForm.get("category")}setAvailableDays(){this.availableDays.clear(),this.weekDays.forEach(r=>{let a=this.fb.group({lkWeekDayId:[r.lkWeekDayId],weekDayCheck:[!1]});this.availableDays.push(a)})}setCategorys(){this.category.clear(),this.allCategorys.forEach(r=>{let a=this.fb.group({lkCategoryId:[r.lkCategoryId],categoryCheck:[!1]});this.category.push(a)})}getWeekDays(){this.providerService.getWeekDays().subscribe({next:r=>{this.weekDays=r,this.setAvailableDays()},error:r=>{console.log(r)}})}getWorkHours(){this.providerService.getWorkHours().subscribe({next:r=>{this.workHoursArray=r},error:r=>{console.log(r)}})}getCategory(){this.providerService.getCategory().subscribe({next:r=>{this.allCategorys=r,this.setCategorys()},error:r=>{console.log(r)}})}onSubmit(){this.validate=!0;let r=this.validateCategorys(),a=this.validateWeekdays();if(this.arrayValidation(),this.detailsForm.valid&&r&&a){let e={companyName:this.companyName?.value,address:this.address?.value,phoneNumber:this.phoneNumber?.value,description:this.description?.value,availableDays:this.filterWeekdays(),category:this.filterCategorys(),workHours:this.workHours?.value};console.log(e),this.providerService.postProviderProfileDetails(e).subscribe({next:y=>{console.log(y),y&&y.success&&this.router.navigate(["provider"])},error:y=>{console.log(y)}})}}validateCategorys(){return this.filterCategorys().length>0?(this.categoryErrorMessage="",!0):(this.categoryErrorMessage="Field is required",!1)}validateWeekdays(){return this.filterWeekdays().length>0?(this.weekdaysErrorMessage="",!0):(this.weekdaysErrorMessage="Field is required",!1)}filterWeekdays(){return this.availableDays.value.reduce((r,a)=>(a.weekDayCheck===!0&&r.push(a.lkWeekDayId),r),[])}filterCategorys(){return this.category.value.reduce((r,a)=>(a.categoryCheck===!0&&r.push(a.lkCategoryId),r),[])}arrayValidation(){this.detailsForm.controls.category.valueChanges.subscribe(()=>{this.validateCategorys()}),this.detailsForm.controls.availableDays.valueChanges.subscribe(()=>{this.validateWeekdays()})}};m.\u0275fac=function(a){return new(a||m)(I(O))},m.\u0275cmp=N({type:m,selectors:[["app-profile-form"]],standalone:!0,features:[F],decls:60,vars:23,consts:[[1,"container","grid","mt-xxl"],[1,"col","flex","flex-center","gt-md"],["src","../../../assets/images/login.png","alt","","srcset",""],[1,"col","flex","flex-center"],[1,"width-400"],[1,"mb-xl"],[3,"formGroup"],[1,"form-element"],["for","companyName"],["type","text","id","companyName","formControlName","companyName"],[3,"validate","control","onValueChanges"],["for","address"],["type","text","id","address","formControlName","address"],["for","phoneNumber"],["type","text","id","phoneNumber","formControlName","phoneNumber"],["id","description","formControlName","description"],["for","description"],[3,"control","onValueChanges","validate"],[1,"mb-lg"],["formArrayName","category",1,"form-element","column-content-2","mb-md"],["class","form-element-checkbox mb-md",3,"formGroupName",4,"ngFor","ngForOf"],[3,"message"],["formArrayName","availableDays",1,"form-element","column-content-2","mb-sm","mt-lg"],[1,"form-element","grid","mt-lg","gap-lg"],["formGroupName","workHours",1,"form-element","col"],["formControlName","fromWorkHourId"],["for","fromWorkHourId"],["formControlName","toWorkHourId"],["for","toWorkHourId"],[1,"text-right","mt-md"],[3,"click"],[1,"form-element-checkbox","mb-md",3,"formGroupName"],["type","checkbox","formControlName","categoryCheck",3,"id"],[3,"for"],["type","checkbox","formControlName","weekDayCheck",3,"id"],[3,"value"]],template:function(a,e){a&1&&(o(0,"div")(1,"div",0)(2,"div",1),u(3,"img",2),t(),o(4,"div",3)(5,"div",4)(6,"h1",5),s(7,"Sign up"),t(),o(8,"form",6)(9,"div",7)(10,"label",8),s(11,"Company Name"),t(),u(12,"input",9)(13,"app-form-error",10),t(),o(14,"div",7)(15,"label",11),s(16,"Address"),t(),u(17,"input",12)(18,"app-form-error",10),t(),o(19,"div",7)(20,"label",13),s(21,"Phone number"),t(),u(22,"input",14)(23,"app-form-error",10),t(),o(24,"div",7),u(25,"textarea",15),o(26,"label",16),s(27,"Description"),t(),u(28,"app-form-error",17),t(),o(29,"h3",18),s(30,"Providing services"),t(),o(31,"div")(32,"div",19),h(33,$,4,4,"div",20),t(),u(34,"app-form-error",21),t(),o(35,"h3",18),s(36,"Working hours"),t(),o(37,"div")(38,"div",22),h(39,L,4,4,"div",20),t(),u(40,"app-form-error",21),t(),o(41,"div")(42,"div",23)(43,"div",24)(44,"select",25),k(45,z,2,2,"option",35,f),t(),o(47,"label",26),s(48,"From"),t(),u(49,"app-form-error",10),t(),o(50,"div",24)(51,"select",27),k(52,J,2,2,"option",35,f),t(),o(54,"label",28),s(55,"To"),t(),u(56,"app-form-error",10),t()()()(),o(57,"div",29)(58,"button",30),E("click",function(){return e.onSubmit()}),s(59,"Submit"),t()()()()()()),a&2&&(i(8),d("formGroup",e.detailsForm),i(5),d("validate",e.validate)("control",e.companyName)("onValueChanges",e.companyName==null?null:e.companyName.value),i(5),d("validate",e.validate)("control",e.address)("onValueChanges",e.address==null?null:e.address.value),i(5),d("validate",e.validate)("control",e.phoneNumber)("onValueChanges",e.phoneNumber==null?null:e.phoneNumber.value),i(5),d("control",e.description)("onValueChanges",e.description==null?null:e.description.value)("validate",e.validate),i(5),d("ngForOf",e.category.controls),i(1),d("message",e.categoryErrorMessage),i(5),d("ngForOf",e.availableDays.controls),i(1),d("message",e.weekdaysErrorMessage),i(5),b(e.workHoursArray),i(4),d("validate",e.validate)("control",e.fromWorkHourId)("onValueChanges",e.fromWorkHourId==null?null:e.fromWorkHourId.value),i(3),b(e.workHoursArray),i(4),d("validate",e.validate)("control",e.toWorkHourId)("onValueChanges",e.toWorkHourId==null?null:e.toWorkHourId.value))},dependencies:[B,x,T,q,W,H,G,w,_,V,P,A,M,R,S]});let n=m;return n})();export{ie as ProfileFormComponent};
