import{a as le}from"./chunk-BOBO6OXM.js";import{a as R,b as z}from"./chunk-PHWLFFVL.js";import{a as oe}from"./chunk-CQAC2FCZ.js";import{a as se,b as re}from"./chunk-ANF77CLI.js";import{a as $}from"./chunk-JHCJFOQM.js";import{a as L}from"./chunk-OSIPO2T2.js";import{a as ae}from"./chunk-JR77RRA2.js";import"./chunk-Y6NGLBTQ.js";import{b as te,d as ne,f as ie,q as B}from"./chunk-M7TSCOLF.js";import{c as U,e as N,f as Q}from"./chunk-N6PQCY5R.js";import{$ as O,$a as d,Aa as I,Fa as m,Ka as _,La as v,Ma as j,Na as k,Oa as E,Pa as s,Qa as r,Ra as g,Sa as F,T as C,V as f,Wa as p,Xa as u,Y as H,Ya as Y,Za as W,_ as T,ab as x,bb as Z,cb as J,gb as h,ib as P,jb as X,lb as A,mb as ee,na as D,nb as V,pb as b,qb as y,ra as K,sb as S,ta as G,xa as l}from"./chunk-DZ4JCLGF.js";import{d as q}from"./chunk-JMZ7DUBM.js";var ce=(()=>{let a=class a{transform(e){let t=(e/1024).toFixed(2)+" KB";return e>1048576&&(t=(e/(1024*1024)).toFixed(2)+" MB"),t}};a.\u0275fac=function(t){return new(t||a)},a.\u0275pipe=H({name:"fileSize",type:a,pure:!0,standalone:!0});let i=a;return i})();var me=i=>({"background-image":i});function _e(i,a){if(i&1&&g(0,"div",4),i&2){let c=u();m("ngStyle",P(1,me,c.fileUrl))}}function ve(i,a){if(i&1&&g(0,"div",4),i&2){let c=u();m("ngStyle",P(1,me,c.fileUrl))}}function xe(i,a){if(i&1&&(s(0,"div",5)(1,"div",6)(2,"span"),d(3),r()()()),i&2){let c=u();l(3),x(c.fileType)}}var de=(()=>{let a=class a{constructor(){this.fileUrl="",this.fileType="UNK"}set fileProp(e){if(this.file=e,this.setFileType(e.type),console.log(this.file),this.fileType!="IMG")return;let t=new FileReader;t.onload=n=>{n.target&&(this.fileUrl=`url("${n.target.result}")`)},t.readAsDataURL(e)}setFileType(e){return q(this,null,function*(){if(console.log(this.file),console.log(e.includes("video")||e.includes("avi")),console.log(e),e.includes("image"))this.fileType="IMG";else if(e.includes("pdf"))this.fileType="PDF";else if(e.includes("zip"))this.fileType="ZIP";else if(e.includes("document"))this.fileType="DOC";else if(e.includes("video")){if(e.includes("mp4")||e.includes("ogg")||e.includes("mov")||e.includes("webm")){let t=yield this.generateVideoThumbnail(this.file);this.fileUrl=`url("${t}")`}this.fileType="VID"}else this.fileType="UNK"})}generateVideoThumbnail(e){return new Promise(t=>{let n=document.createElement("canvas"),o=document.createElement("video");o.autoplay=!0,o.muted=!0,o.src=URL.createObjectURL(e),o.onloadeddata=()=>{let M=n.getContext("2d");return n.width=o.videoWidth,n.height=o.videoHeight,M==null?null:(M.drawImage(o,0,0,o.videoWidth,o.videoHeight),o.pause(),t(n.toDataURL("image/png")))}})}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=f({type:a,selectors:[["app-file-details"]],inputs:{fileProp:"fileProp"},standalone:!0,features:[h],decls:10,vars:5,consts:[[1,"flex","no-wrap","mb-sm"],["class","file-image",3,"ngStyle"],[1,"flex","column","justify-around","ml-md"],[1,"body2"],[1,"file-image",3,"ngStyle"],[1,"file-image"],[1,"file-type"]],template:function(t,n){t&1&&(s(0,"div",0),_(1,_e,1,3,"div",1)(2,ve,1,3)(3,xe,4,1),s(4,"div",2)(5,"div"),d(6),r(),s(7,"div",3),d(8),A(9,"fileSize"),r()()()),t&2&&(l(1),v(1,n.fileType=="IMG"?1:n.fileType=="VID"&&n.fileUrl?2:3),l(5),x(n.file==null?null:n.file.name),l(2),x(ee(9,3,n.file==null?null:n.file.size)))},dependencies:[ce,N]});let i=a;return i})();function Me(i,a){if(i&1&&(s(0,"h3",7),d(1),r()),i&2){let c=u();l(1),Z("",c.files.length," files selected")}}function be(i,a){if(i&1&&g(0,"app-file-details",8),i&2){let c=a.$implicit;m("fileProp",c)}}var pe=(()=>{let a=class a{constructor(){this.comment="",this.cancel=new I,this.onFileUpload=new I}set filesProp(e){this.files=e}onCancel(){this.cancel.emit(!0)}onSend(){this.onFileUpload.emit(this.comment.trim()),this.comment=""}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=f({type:a,selectors:[["app-file-upload"]],inputs:{filesProp:"filesProp"},outputs:{cancel:"cancel",onFileUpload:"onFileUpload"},standalone:!0,features:[h],decls:13,vars:2,consts:[["class","mb-lg"],[1,"form-element","mt-xxl"],["for","sessionTitle"],["type","text","id","sessionTitle",3,"ngModel","ngModelChange"],[1,"flex","mt-xl","btn-group"],[1,"block","ml-auto","btn-danger",3,"click"],[1,"block","ml-lg",3,"click"],[1,"mb-lg"],[3,"fileProp"]],template:function(t,n){t&1&&(s(0,"div"),_(1,Me,2,1,"h3",0),k(2,be,1,1,"app-file-details",8,j),s(4,"div",1)(5,"label",2),d(6,"Comment"),r(),s(7,"input",3),p("ngModelChange",function(M){return n.comment=M}),r()(),s(8,"div",4)(9,"button",5),p("click",function(){return n.onCancel()}),d(10,"Cancel"),r(),s(11,"button",6),p("click",function(){return n.onSend()}),d(12,"Send"),r()()()),t&2&&(l(1),v(1,n.files&&n.files.length>0?1:-1),l(1),E(n.files),l(5),m("ngModel",n.comment))},dependencies:[B,te,ne,ie,de]});let i=a;return i})();var ye=["textAreaContainer"],Se=["textArea"],Ie=["fileUpload"],ge=(()=>{let a=class a{constructor(){this.renderer=C(K),this.auth=C(L),this.chatService=C(z),this.subjectService=C($),this.messageService=C(R),this.message="",this.showCursor=!0,this.toggleModal=!1,this.uploadInprogress=G(0),this.receiverId=""}ngOnInit(){this.getSubjectDetails()}getSubjectDetails(){let e=this.subjectService.getSubjectFromLocal();e&&(this.subjectId=e.subjectId,this.chatService.setSubjectId(this.subjectId))}onSubmit(){if(!this.subjectId||!this.receiverId)return;let e=this.textAreaContainer.nativeElement.dataset.replicatedValue?.trim();if(!e)return;let t={subjectId:this.subjectId,message:e,accessToken:this.auth.user().accessToken,toUserId:this.receiverId};this.chatService.sendMessage(t),this.resetMessageInputField()}resetMessageInputField(){this.renderer.setAttribute(this.textAreaContainer.nativeElement,"data-replicated-value",""),this.textArea.nativeElement.value="",this.showCursor=!0}onAttach(){let e=/(\.jpg|\.jpeg|\.bmp|\.gif|\.svg|\.png|\.webm|\.avi|\.mpeg|\.mkv|\.doc|\.docx|\.xls|\.xlsx|\.pdf)$/i,t=this.fileUpload.nativeElement.files;console.log(t),t&&t.length>0&&(this.files=t,this.toggleModal=!0)}onBlur(){this.textArea.nativeElement.value?this.showCursor=!1:this.showCursor=!0}onFileUpload(e){if(!this.files||this.files.length==0)return;let t=new FormData;[...this.files].forEach(o=>{t.append("files",o)});let n={subjectId:this.subjectId,message:e,accessToken:this.auth.user().accessToken,toUserId:this.receiverId,isAttachment:!0};t.append("message",JSON.stringify(n)),this.messageService.uploadFile(t).subscribe({next:o=>{o.messageId&&this.messageService.addMessage(o),this.cancel()},error:o=>{console.log(o)}})}submitAttachmentMessage(e){this.toggleModal=!1;let t={subjectId:this.subjectId,message:e,accessToken:this.auth.user().accessToken,toUserId:this.receiverId,isAttachment:!0};this.messageService.postAttachmentMessage(t).subscribe({next:n=>{n.totalUploads=this.files.length,this.messageService.addMessage(n),n.messageId&&this.submitFiles(n.messageId)},error:n=>{console.log()}})}submitFiles(e){!this.files||this.files.length==0||[...this.files].forEach(t=>{let n=new FormData;n.append("files",t),n.append("messageId",e.toString()),this.messageService.uploadFile(n).subscribe({next:o=>{this.messageService.updateMessage(o),this.chatService.sendAttchmentMessage(o,this.receiverId)},error:o=>{console.log(o)}})})}onFocus(){this.showCursor=!1}cancel(){this.toggleModal=!1,this.fileUpload.nativeElement.value=""}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=f({type:a,selectors:[["app-message-toolbar"]],viewQuery:function(t,n){if(t&1&&(y(ye,5),y(Se,5),y(Ie,5)),t&2){let o;b(o=S())&&(n.textAreaContainer=o.first),b(o=S())&&(n.textArea=o.first),b(o=S())&&(n.fileUpload=o.first)}},inputs:{receiverId:"receiverId"},standalone:!0,features:[h],decls:16,vars:2,consts:[[1,"message-toolbar"],[1,"text-container"],["textAreaContainer",""],["onInput","this.parentNode.dataset.replicatedValue = this.value","rows","1","placeholder","Send message",3,"focus","blur"],["textArea",""],[1,"action-btn"],[1,"material-symbols-outlined","text-primary",3,"click"],["for","attach"],[1,"material-symbols-outlined","text-primary"],["type","file","id","attach","accept","image/*, .pdf, .doc, .docx","multiple","",1,"hidden",3,"input"],["fileUpload",""],[3,"modal","modalChange"],[3,"filesProp","cancel","onFileUpload"]],template:function(t,n){t&1&&(s(0,"div",0)(1,"div",1,2)(3,"textarea",3,4),p("focus",function(){return n.onFocus()})("blur",function(){return n.onBlur()}),r()(),s(5,"div",5)(6,"span",6),p("click",function(){return n.onSubmit()}),d(7,"send"),r()(),s(8,"div",5)(9,"label",7)(10,"span",8),d(11,"attach_file"),r()(),s(12,"input",9,10),p("input",function(){return n.onAttach()}),r()()(),s(14,"app-modal",11),p("modalChange",function(M){return n.toggleModal=M}),s(15,"app-file-upload",12),p("cancel",function(){return n.cancel()})("onFileUpload",function(M){return n.submitAttachmentMessage(M)}),r()()),t&2&&(l(14),m("modal",n.toggleModal),l(1),m("filesProp",n.files))},dependencies:[B,oe,pe],styles:['.message-toolbar[_ngcontent-%COMP%]{border:1px solid #d2d2d7;border-top:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px;min-height:46px;display:flex;flex-wrap:nowrap;align-items:flex-end;justify-content:space-around;padding:10px 10px 12px 30px;background-color:#fff}@media (max-width: 767px){.message-toolbar[_ngcontent-%COMP%]{border:none}}.message-toolbar[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{width:100%;display:grid;position:relative;margin-right:10px}.message-toolbar[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:after{content:attr(data-replicated-value) " ";white-space:pre-wrap;visibility:hidden}.message-toolbar[_ngcontent-%COMP%]   .text-container.show-cursor[_ngcontent-%COMP%]:before{content:"";width:1px;height:18px;background:#000000;display:inline-block;animation:_ngcontent-%COMP%_cursor-blink 1s steps(2) infinite;position:absolute}.message-toolbar[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]{outline:none;resize:none;overflow:hidden}.message-toolbar[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#b9b9bf}.message-toolbar[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:after, .message-toolbar[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #d2d2d7;padding:0;font-size:15px;grid-area:1/1/2/2;font-family:Roboto}.message-toolbar[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{width:50px;display:flex;justify-content:center;align-items:center;height:28px}.message-toolbar[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.message-toolbar[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}@keyframes _ngcontent-%COMP%_cursor-blink{0%{opacity:0}}']});let i=a;return i})();var Pe=i=>({"background-image":i});function we(i,a){if(i&1&&g(0,"div",3),i&2){let c=u();m("ngStyle",P(1,Pe,c.fileUrl))}}function Te(i,a){if(i&1&&(s(0,"div",4)(1,"div",5)(2,"span"),d(3),r()()()),i&2){let c=u();l(3),x(c.fileType)}}var ue=(()=>{let a=class a{constructor(){this.fileUrl="",this.fileType="UNK",this.onAttachmentClickEmit=new I}set fileProp(e){e.thumbnailUrl==null&&(this.fileType=this.setFileType(e.attachmentMimeType)),this.file=e,this.fileUrl=`url("${e.thumbnailUrl}")`}onAttachmentClick(){this.onAttachmentClickEmit.emit(this.file)}setFileType(e){return e.includes("image")?"IMG":e.includes("video")?"VID":e.includes("pdf")?"PDF":e.includes("zip")?"ZIP":e.includes("document")?"DOC":"UNK"}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=f({type:a,selectors:[["app-attachment"]],inputs:{fileProp:"fileProp"},outputs:{onAttachmentClickEmit:"onAttachmentClickEmit"},standalone:!0,features:[h],decls:6,vars:2,consts:[[1,"flex","no-wrap","pa-xs","attachment-container",3,"click"],["class","file-image",3,"ngStyle"],[1,"file-name","flex","column","ml-sm"],[1,"file-image",3,"ngStyle"],[1,"file-image"],[1,"file-type"]],template:function(t,n){t&1&&(s(0,"div",0),p("click",function(){return n.onAttachmentClick()}),_(1,we,1,3,"div",1)(2,Te,4,1),s(3,"div",2)(4,"div"),d(5),r()()()),t&2&&(l(1),v(1,n.file.thumbnailUrl?1:2),l(4),x(n.file==null?null:n.file.attachmentOriginalName))},dependencies:[N],styles:[".attachment-container[_ngcontent-%COMP%]:hover{background-color:#fffefe;border-radius:10px;cursor:pointer}"]});let i=a;return i})();var Oe=["messageContent"];function ke(i,a){i&1&&(s(0,"span",11),d(1,"done_all"),r())}function Ee(i,a){i&1&&(s(0,"span",11),d(1,"done"),r())}function Fe(i,a){i&1&&g(0,"div",12)}function Ae(i,a){if(i&1){let c=F();s(0,"app-attachment",13),p("onAttachmentClickEmit",function(t){T(c);let n=u();return O(n.onAttachmentClick(t))}),r()}if(i&2){let c=a.$implicit;m("fileProp",c)}}function Ue(i,a){i&1&&(s(0,"div",14),g(1,"div",15),r())}var De=i=>({"text-bold":i}),fe=(()=>{let a=class a{constructor(){this.message={},this.messageType="",this.parent=null,this.onMessageIntersect=new I,this.onAttachmentClickEmit=new I}set message$(e){this.message=e,this.messageType=this.userId==this.message.createdBy?"out":"in"}ngOnInit(){}ngAfterViewInit(){this.isViewdChecker(),this.index==0&&this.messageType=="out"&&this.messageContent.nativeElement.scrollIntoView()}isViewdChecker(){if(!this.message.viewed&&this.messageType!=="out"&&this.messageContent!==void 0){let t=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&(this.onMessageIntersect.emit(this.message.messageId),t.disconnect())})},{threshold:1});t.observe(this.messageContent.nativeElement)}}onAttachmentClick(e){this.onAttachmentClickEmit.emit(e)}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=f({type:a,selectors:[["app-message"]],viewQuery:function(t,n){if(t&1&&y(Oe,5),t&2){let o;b(o=S())&&(n.messageContent=o.first)}},inputs:{userId:"userId",receiver:"receiver",index:"index",message$:"message$"},outputs:{onMessageIntersect:"onMessageIntersect",onAttachmentClickEmit:"onAttachmentClickEmit"},standalone:!0,features:[h],decls:19,vars:14,consts:[[1,"message-container",3,"ngClass"],[1,"message-avatar"],[1,"message-content"],["messageContent",""],[1,"message-heading"],[1,"message-author"],[1,"message-date"],["class","material-symbols-outlined text-primary done-all"],[1,"message-text",3,"ngClass"],["class","mb-sm"],["class","flex justify-center items-center py-sm px-xxl"],[1,"material-symbols-outlined","text-primary","done-all"],[1,"mb-sm"],[3,"fileProp","onAttachmentClickEmit"],[1,"flex","justify-center","items-center","py-sm","px-xxl"],[1,"dot-flashing"],[3,"fileProp"]],template:function(t,n){t&1&&(s(0,"div",0),g(1,"div",1),s(2,"div",2,3)(4,"div",4)(5,"span",5),d(6),r(),s(7,"span",6),d(8),A(9,"date"),r(),_(10,ke,2,0,"span",7)(11,Ee,2,0),r(),s(12,"div",8)(13,"span"),d(14),r(),_(15,Fe,1,0,"div",9),k(16,Ae,1,1,"app-attachment",16,j),_(18,Ue,2,0,"div",10),r()()()),t&2&&(m("ngClass",n.messageType),l(6),J(" ",n.receiver.firstName," ",n.receiver.lastName," "),l(2),x(V(9,9,n.message.createdAt,"HH:mm")),l(2),v(10,n.message.viewed?10:11),l(2),m("ngClass",P(12,De,!n.message.viewed&&n.messageType=="in")),l(2),x(n.message.message),l(1),v(15,n.message.attachments&&n.message.attachments.length>0?15:-1),l(1),E(n.message.attachments),l(2),v(18,n.message.totalUploads&&n.message.totalUploads>0&&n.messageType=="out"?18:-1))},dependencies:[U,Q,ue],styles:['.message-container[_ngcontent-%COMP%]{margin-top:10px;display:flex;flex-wrap:nowrap;gap:8px;width:100%;color:#272727}.message-container[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:10px;border:1px solid #dadce0;background-image:url("./media/bola_avatar-7CLOKH46.png");background-size:60px 60px;background-repeat:no-repeat;background-position:center;flex-shrink:0}.message-container[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]{white-space:pre-line;background-color:#e8f3ff;border-radius:10px;padding:5px 9px 7px;margin-top:5px;margin-right:auto;margin-left:initial;max-width:80%;font-size:14px}.message-container[_ngcontent-%COMP%]   .message-author[_ngcontent-%COMP%], .message-container[_ngcontent-%COMP%]   .message-date[_ngcontent-%COMP%]{display:inline-block;font-size:13px;color:#404040}.message-container[_ngcontent-%COMP%]   .message-date[_ngcontent-%COMP%], .message-container[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%]{font-size:11px;margin-left:10px}.message-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.message-container[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-heading[_ngcontent-%COMP%]   .done-all[_ngcontent-%COMP%]{display:none}.message-container.out[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]{justify-content:flex-end}.message-container.out[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-heading[_ngcontent-%COMP%]{text-align:right;position:relative}.message-container.out[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-heading[_ngcontent-%COMP%]   .done-all[_ngcontent-%COMP%]{display:block;position:absolute;right:-20px;font-size:17px;top:2px}.message-container.out[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]{margin-left:auto;margin-right:initial;background-color:#f3f3f3;text-align:left}.message-container.out[_ngcontent-%COMP%]   .message-author[_ngcontent-%COMP%], .message-container.out[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%]{display:none}']});let i=a;return i})();var je=(i,a)=>({"fade-anim":i,in:a});function Ve(i,a){if(i&1){let c=F();s(0,"div",1)(1,"div",2)(2,"span",3),p("click",function(){T(c);let t=u();return O(t.closeModal())}),d(3,"close"),r(),W(4),r()()}if(i&2){let c=u();m("ngClass",X(1,je,c.fadeAnim,c.fadeIn))}}var Ne=["*"],he=(()=>{let a=class a{constructor(){this.modalValue=!1,this.fadeAnim=!1,this.fadeIn=!1,this.modalChange=new I}get modal(){return this.modalValue}set modal(e){e?(this.fadeAnim=!0,setTimeout(()=>{this.fadeIn=!0})):(this.fadeIn=!1,setTimeout(()=>{this.fadeAnim=!1})),this.modalValue=e,this.modalChange.emit(this.modalValue)}closeModal(){this.modal=!1}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=f({type:a,selectors:[["app-attachment-modal"]],inputs:{modal:"modal"},outputs:{modalChange:"modalChange"},standalone:!0,features:[h],ngContentSelectors:Ne,decls:1,vars:1,consts:[["role","dialog","class","attachment-modal",3,"ngClass"],["role","dialog",1,"attachment-modal",3,"ngClass"],[1,"attachment-modal-content"],[1,"material-symbols-outlined","attachment-modal-close",3,"click"]],template:function(t,n){t&1&&(Y(),_(0,Ve,5,4,"div",0)),t&2&&v(0,n.modalValue?0:-1)},dependencies:[U]});let i=a;return i})();var Qe=["downloadLink"],Ce=(()=>{let a=class a{constructor(){this.src=""}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=f({type:a,selectors:[["app-video"]],viewQuery:function(t,n){if(t&1&&y(Qe,5),t&2){let o;b(o=S())&&(n.downloadLink=o.first)}},inputs:{src:"src"},standalone:!0,features:[h],decls:1,vars:1,consts:[["alt","","controls","",3,"src"]],template:function(t,n){t&1&&g(0,"video",0),t&2&&m("src",n.src,D)}});let i=a;return i})();var Le=["messageContainer"],Be=["downloadLink"],Re=(i,a)=>a.messageId;function $e(i,a){if(i&1&&(s(0,"div",14),d(1),A(2,"date"),r()),i&2){let c=u().$implicit;l(1),x(V(2,1,c.createdAt,"dd/MM/YYYY, EEEE"))}}function ze(i,a){if(i&1){let c=F();s(0,"app-message",12),p("onMessageIntersect",function(t){T(c);let n=u();return O(n.onMessageIntersect(t))})("onAttachmentClickEmit",function(t){T(c);let n=u();return O(n.onAttachmentClick(t))}),r(),_(1,$e,3,4,"div",13)}if(i&2){let c=a.$implicit,e=a.$index,t=u();m("userId",t.user.user==null?null:t.user.user.userId)("message$",c)("receiver",t.receiver)("index",e),l(1),v(1,t.displayDate(e,c.createdAt)?1:-1)}}var qe=i=>({"new-message":i}),en=(()=>{let a=class a{constructor(){this.messageService=C(R),this.subjectService=C($),this.navigation=C(re),this.chatService=C(z),this.auth=C(L),this.clientService=C(le),this.providerService=C(ae),this.user=this.auth.user(),this.messages=this.messageService.messages,this.chunkNum=1,this.containerBorder=!1,this.receiver={},this.attachmentUrl="",this.toggleImageModal=!1,this.toggleVideoModal=!1}ngOnInit(){this.getReceiverDeatils(),this.getMessages()}getMessages(){this.messageService.resetMessages(),this.subject=this.subjectService.getSubjectFromLocal(),this.subject||this.navigation.back(),this.messageService.getMessages(this.subject.subjectId,this.chunkNum).subscribe({next:e=>{this.messageService.addMessages(e),this.chunkNum++},error:e=>{console.log(e)}})}displayDate(e,t){return e==this.messages.length-1?!1:this.getLocalDate(t)!=this.getLocalDate(this.messages()[e+1]?.createdAt)}getLocalDate(e){return e?new Date(e).toLocaleDateString():""}onMessageIntersect(e){let t={accessToken:this.user?.accessToken,messageId:e};this.chatService.sendViewedMessageConfirmation(t)}getReceiverDeatils(){if(this.auth.user().user?.isClient){let e=this.providerService.getProvider();e.providerUserId&&(this.receiver={receiverId:e.providerUserId,firstName:e.firstName,lastName:e.lastName})}else{let e=this.clientService.getClient();e?.clientUserId&&(this.receiver={receiverId:e.clientUserId,firstName:e.firstName,lastName:e.lastName})}}onAttachmentClick(e){this.messageService.getAttachmentUrl(e.messageAttachmentId).subscribe({next:t=>{console.log(t),this.attachmentUrl=t.attachmentUrl,this.processAttachment(e)},error:t=>{console.log(t)}})}processAttachment(e){e.attachmentMimeType?.includes("video")&&!e.attachmentMimeType?.includes("avi")?this.toggleVideoModal=!0:e.attachmentThumbnailId==null||e.attachmentMimeType?.includes("avi")?this.downloadAttachment(e.attachmentOriginalName):this.toggleImageModal=!0}downloadAttachment(e){this.downloadLink.nativeElement.href=this.attachmentUrl,this.downloadLink.nativeElement.click()}containerHighlight(){console.log("hhh"),this.containerBorder=!0,setTimeout(()=>{this.containerBorder=!1},500)}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=f({type:a,selectors:[["app-messages"]],viewQuery:function(t,n){if(t&1&&(y(Le,5),y(Be,5)),t&2){let o;b(o=S())&&(n.messageContainer=o.first),b(o=S())&&(n.downloadLink=o.first)}},standalone:!0,features:[h],decls:17,vars:9,consts:[[1,"container","container-md"],["messageContainer",""],[1,"flex","items-center","no-wrap"],[1,"ml-auto"],[1,"message-container",3,"ngClass"],[1,"card","pa-xl"],[3,"receiverId"],[3,"modal","modalChange"],["alt","",3,"src"],[3,"src"],[1,"hidden"],["downloadLink",""],[3,"userId","message$","receiver","index","onMessageIntersect","onAttachmentClickEmit"],["class","date-separator"],[1,"date-separator"]],template:function(t,n){t&1&&(s(0,"div",0,1)(2,"div",2),g(3,"app-back-button"),s(4,"h3",3),d(5),r()(),s(6,"div",4)(7,"div",5),k(8,ze,2,5,null,null,Re),r(),g(10,"app-message-toolbar",6),r()(),s(11,"app-attachment-modal",7),p("modalChange",function(M){return n.toggleImageModal=M}),g(12,"img",8),r(),s(13,"app-attachment-modal",7),p("modalChange",function(M){return n.toggleVideoModal=M}),g(14,"app-video",9),r(),g(15,"a",10,11)),t&2&&(l(5),x(n.subject.title),l(1),m("ngClass",P(7,qe,n.containerBorder)),l(2),E(n.messages()),l(2),m("receiverId",n.receiver.receiverId),l(1),m("modal",n.toggleImageModal),l(1),m("src",n.attachmentUrl,D),l(1),m("modal",n.toggleVideoModal),l(1),m("src",n.attachmentUrl))},dependencies:[ge,fe,se,Q,U,he,Ce],styles:[".message-container[_ngcontent-%COMP%]{height:calc(100vh - 180px);display:flex;flex-direction:column;border-radius:13px;border:2px solid transparent;box-shadow:0;transition:border .5s}.message-container.new-message[_ngcontent-%COMP%]{border-color:#0171ad9b}.message-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{height:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;padding:10px 32px 10px 12px;display:flex;flex-direction:column-reverse;overflow-y:auto}@media (max-width: 767px){.message-container[_ngcontent-%COMP%]{position:fixed;inset:60px 0 0;height:initial}.message-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #dadce0}}.message-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:12px;height:12px}.message-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#c4c8c7;border-radius:15px;border:5px solid #fff}.message-container[_ngcontent-%COMP%]   .date-separator[_ngcontent-%COMP%]{border-top:1px solid #dadce0;color:var(--primary);text-align:center;margin-top:24px;padding-top:10px;font-size:14px}"]});let i=a;return i})();export{en as MessagesComponent};
