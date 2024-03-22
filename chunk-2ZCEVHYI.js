import{a as T}from"./chunk-RUL2YSW5.js";import{a as k}from"./chunk-HZN2YKLW.js";import"./chunk-DAPQ2VEW.js";import"./chunk-IMBAXUM4.js";import{a as y}from"./chunk-QQ6JVOM4.js";import{a as w}from"./chunk-CFISRMDD.js";import{a as I,b as E}from"./chunk-LK5WJ2EN.js";import{a as S}from"./chunk-DQNFT2UK.js";import"./chunk-LEHHEZNQ.js";import{a as b}from"./chunk-O3OTT2BA.js";import"./chunk-Y6NGLBTQ.js";import{b as _,d as M,f as D,q as P}from"./chunk-TEUQ36QL.js";import{n as j,p as C}from"./chunk-KZEZHTV3.js";import{Aa as f,Fa as d,Qa as o,Ra as l,Sa as m,T as n,V as h,Xa as c,ab as v,hb as g,xa as a}from"./chunk-TMRUMUQV.js";import"./chunk-JMZ7DUBM.js";var F=(()=>{let r=class r{constructor(){this.subjectService=n(S),this.providerService=n(b),this.sessionTitle="",this.errorMessage="",this.validationStarted=!1,this.subjectDetails={},this.cancel=new f,this.openSession=new f}set toggleModal(t){t||(this.sessionTitle="")}createSession(){let t=this.sessionTitle.trim();if(!t){this.errorMessage="Field required",this.validationStarted=!0;return}this.subjectDetails.title=t,this.subjectService.createSubject(this.subjectDetails).subscribe({next:i=>{i.subjectId&&this.openSession.emit(i),this.sessionTitle="",this.subjectService.getProviderSubjects(this.subjectDetails.providerId),this.providerService.setMyProviders()},error:i=>{console.log(i)}})}onModelChange(t){!t.trim()&&this.validationStarted?this.errorMessage="Field required":this.errorMessage=""}onCancel(){this.sessionTitle="",this.cancel.emit()}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=h({type:r,selectors:[["app-new-subject"]],inputs:{subjectDetails:"subjectDetails",toggleModal:"toggleModal"},outputs:{cancel:"cancel",openSession:"openSession"},standalone:!0,features:[g],decls:8,vars:2,consts:[[1,"form-element","mt-lg"],["for","sessionTitle"],["type","text","id","sessionTitle",3,"ngModel","ngModelChange"],[3,"message"],[1,"block","ml-auto",3,"click"]],template:function(i,e){i&1&&(o(0,"div")(1,"div",0)(2,"label",1),v(3,"Session Title"),l(),o(4,"input",2),c("ngModelChange",function(s){return e.sessionTitle=s})("ngModelChange",function(s){return e.onModelChange(s)}),l(),m(5,"app-form-error",3),l(),o(6,"button",4),c("click",function(){return e.createSession()}),v(7,"Submit"),l()()),i&2&&(a(4),d("ngModel",e.sessionTitle),a(1),d("message",e.errorMessage))},dependencies:[y,P,_,M,D]});let p=r;return p})();var re=(()=>{let r=class r{constructor(){this.route=n(j),this.router=n(C),this.providerService=n(b),this.subjectService=n(S),this.navigation=n(E),this.showFullDetails=!0,this.providerProfileDetails={},this.providerDetails={},this.providerId="",this.toggleModal=!1,this.subjectDetails={},this.subjectList=[],this.displayAsCard=!1,this.provider={},this.providers=[],this.showCompleteDetails=!1}ngOnInit(){if(this.providers=this.providerService.providers,this.providers.length>0){this.getProviderDetails();return}this.providerService.providersSource.pipe().subscribe(t=>{this.providers=t,this.getProviderDetails()})}createSession(){this.toggleModal=!0;let t=this.provider.providerId;this.subjectDetails={title:"",providerId:t}}getProviderDetails(){this.provider=this.providerService.getProvider(),this.provider.providerId||this.navigation.back(),this.providerService.getProviderProfileDetailsById(this.provider.providerId).subscribe({next:t=>{this.providerProfileDetails=t,this.getSubjects(this.provider?.providerId)},error:t=>{console.log(t)}})}openSession(t){this.cancel(),this.onSubjectClick(t)}getSubjects(t){if(!this.providers.some(e=>e.providerId==this.provider.providerId)){this.showCompleteDetails=!0;return}this.subjectService.getProviderSubjectsAPI(t).subscribe({next:e=>{this.subjectList=e,this.subjectService.subjects=e},error:e=>{console.log(e)}})}onSubjectClick(t){this.providerService.addProvider(this.provider),this.subjectService.saveSubjectToLocal(t),this.router.navigate(["./messages"],{relativeTo:this.route})}navigateToDashboard(){this.router.navigate(["client/dashboard"])}cancel(){this.toggleModal=!1}};r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=h({type:r,selectors:[["app-my-provider"]],standalone:!0,features:[g],decls:9,vars:7,consts:[[1,"container","container-md"],[1,"flex","column"],[3,"providerProfile","showCompleteDetails"],[1,"ml-auto","my-lg",3,"click"],[3,"subjectList","displayAsCard","onSubjectClick$"],[3,"modal","modalChange"],[3,"subjectDetails","toggleModal","cancel","openSession"]],template:function(i,e){i&1&&(o(0,"div",0),m(1,"app-back-button"),o(2,"div",1),m(3,"app-provider-details",2),o(4,"button",3),c("click",function(){return e.createSession()}),v(5,"Start session"),l(),o(6,"app-subject-list",4),c("onSubjectClick$",function(s){return e.onSubjectClick(s)}),l()()(),o(7,"app-modal",5),c("modalChange",function(s){return e.toggleModal=s}),o(8,"app-new-subject",6),c("cancel",function(){return e.cancel()})("openSession",function(s){return e.openSession(s)}),l()()),i&2&&(a(3),d("providerProfile",e.providerProfileDetails)("showCompleteDetails",e.showCompleteDetails),a(3),d("subjectList",e.subjectList)("displayAsCard",e.displayAsCard),a(1),d("modal",e.toggleModal),a(1),d("subjectDetails",e.subjectDetails)("toggleModal",e.toggleModal))},dependencies:[T,w,F,k,I]});let p=r;return p})();export{re as MyProviderComponent};
