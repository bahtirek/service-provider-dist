import{a as fe}from"./chunk-JFFXMYL3.js";import{a as R,b as K}from"./chunk-SKOINUPY.js";import{a as ue}from"./chunk-UZ7AQVFU.js";import{a as ge,b as he}from"./chunk-QFGH4NPD.js";import{a as G}from"./chunk-3TSYXZYM.js";import{a as H}from"./chunk-YB7A6WGY.js";import{a as pe}from"./chunk-FSWKBNPU.js";import"./chunk-Y6NGLBTQ.js";import{b as ce,d as me,f as de,q}from"./chunk-DVIUDM6S.js";import{c as V,e as B,f as z}from"./chunk-HJBFALOQ.js";import{$ as y,Aa as w,Fa as d,Ia as se,La as h,Ma as f,N as ee,Na as j,Oa as A,Pa as U,Qa as a,Ra as r,Sa as v,T as b,Ta as T,V as _,Xa as u,Y as te,Ya as p,Za as ae,_ as M,_a as oe,a as $,ab as m,bb as x,cb as re,db as Z,f as W,hb as C,jb as S,kb as Q,mb as N,na as D,nb as le,ob as L,qb as P,ra as ie,rb as O,ta as ne,tb as k,xa as l}from"./chunk-X62ASYQ6.js";import{d as X}from"./chunk-JMZ7DUBM.js";var _e=(()=>{let s=class s{transform(e){let n=(e/1024).toFixed(2)+" KB";return e>1048576&&(n=(e/(1024*1024)).toFixed(2)+" MB"),n}};s.\u0275fac=function(n){return new(n||s)},s.\u0275pipe=te({name:"fileSize",type:s,pure:!0,standalone:!0});let i=s;return i})();var ve=i=>({"background-image":i});function Se(i,s){if(i&1&&v(0,"div",4),i&2){let o=p();d("ngStyle",S(1,ve,o.fileUrl))}}function Pe(i,s){if(i&1&&v(0,"div",4),i&2){let o=p();d("ngStyle",S(1,ve,o.fileUrl))}}function Oe(i,s){if(i&1&&(a(0,"div",5)(1,"div",6)(2,"span"),m(3),r()()()),i&2){let o=p();l(3),x(o.fileType)}}var Ce=(()=>{let s=class s{constructor(){this.fileUrl="",this.fileType="UNK",this.thumbnailEvent=new w}set fileProp(e){if(this.file=e,this.setFileType(e.type),this.fileType!="IMG")return;let n=new FileReader;n.onload=t=>{t.target&&(this.fileUrl=`url("${t.target.result}")`)},n.readAsDataURL(e)}setFileType(e){return X(this,null,function*(){if(e.includes("image"))this.fileType="IMG";else if(e.includes("pdf"))this.fileType="PDF";else if(e.includes("zip"))this.fileType="ZIP";else if(e.includes("document"))this.fileType="DOC";else if(e.includes("video")){if(e.includes("mp4")||e.includes("ogg")||e.includes("mov")||e.includes("webm")){let n=yield this.generateVideoThumbnail(this.file);this.fileUrl=`url("${n}")`,this.thumbnailEvent.emit(n)}this.fileType="VID"}else this.fileType="UNK"})}generateVideoThumbnail(e){return new Promise(n=>{let t=document.createElement("canvas"),c=document.createElement("video");c.autoplay=!0,c.muted=!0,c.src=URL.createObjectURL(e),c.onloadeddata=()=>{let g=t.getContext("2d"),E=c.videoWidth,I=c.videoHeight,J=E/I;return E>I?(E=100,I=E/J):(I=100,E=I*J),t.width=E,t.height=I,g==null?null:(g.drawImage(c,0,0,E,I),c.pause(),n(t.toDataURL("image/png")))}})}};s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=_({type:s,selectors:[["app-file-details"]],inputs:{fileProp:"fileProp"},outputs:{thumbnailEvent:"thumbnailEvent"},standalone:!0,features:[C],decls:10,vars:5,consts:[[1,"flex","no-wrap","mb-sm"],["class","file-image",3,"ngStyle"],[1,"flex","column","justify-around","ml-md"],[1,"body2"],[1,"file-image",3,"ngStyle"],[1,"file-image"],[1,"file-type"]],template:function(n,t){n&1&&(a(0,"div",0),h(1,Se,1,3,"div",1)(2,Pe,1,3)(3,Oe,4,1),a(4,"div",2)(5,"div"),m(6),r(),a(7,"div",3),m(8),N(9,"fileSize"),r()()()),n&2&&(l(1),f(1,t.fileType=="IMG"?1:t.fileType=="VID"&&t.fileUrl?2:3),l(5),x(t.file==null?null:t.file.name),l(2),x(le(9,3,t.file==null?null:t.file.size)))},dependencies:[_e,B]});let i=s;return i})();function ke(i,s){if(i&1&&(a(0,"h3",7),m(1),r()),i&2){let o=p();l(1),re("",o.files.length," files selected")}}function Fe(i,s){if(i&1){let o=T();a(0,"app-file-details",8),u("thumbnailEvent",function(n){let c=M(o).$index,g=p();return y(g.handleThumbnailEvent(n,c))}),r()}if(i&2){let o=s.$implicit;d("fileProp",o)}}var xe=(()=>{let s=class s{constructor(){this.comment="",this.cancel=new w,this.onFileUpload=new w,this.thumbnailEvent=new w}set filesProp(e){this.files=e}handleThumbnailEvent(e,n){this.thumbnailEvent.emit({thumbnail:e,index:n})}onCancel(){this.cancel.emit(!0)}onSend(){this.onFileUpload.emit(this.comment.trim()),this.comment=""}};s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=_({type:s,selectors:[["app-file-upload"]],inputs:{filesProp:"filesProp"},outputs:{cancel:"cancel",onFileUpload:"onFileUpload",thumbnailEvent:"thumbnailEvent"},standalone:!0,features:[C],decls:13,vars:2,consts:[["class","mb-lg"],[1,"form-element","mt-xxl"],["for","sessionTitle"],["type","text","id","sessionTitle",3,"ngModel","ngModelChange"],[1,"flex","mt-xl","btn-group"],[1,"block","ml-auto","btn-danger",3,"click"],[1,"block","ml-lg",3,"click"],[1,"mb-lg"],[3,"fileProp","thumbnailEvent"],[3,"fileProp"]],template:function(n,t){n&1&&(a(0,"div"),h(1,ke,2,1,"h3",0),A(2,Fe,1,1,"app-file-details",9,j),a(4,"div",1)(5,"label",2),m(6,"Comment"),r(),a(7,"input",3),u("ngModelChange",function(g){return t.comment=g}),r()(),a(8,"div",4)(9,"button",5),u("click",function(){return t.onCancel()}),m(10,"Cancel"),r(),a(11,"button",6),u("click",function(){return t.onSend()}),m(12,"Send"),r()()()),n&2&&(l(1),f(1,t.files&&t.files.length>0?1:-1),l(1),U(t.files),l(5),d("ngModel",t.comment))},dependencies:[q,ce,me,de,Ce]});let i=s;return i})();var Y=(()=>{let s=class s{constructor(){this.onMessageReplay=new W,this.onMessageEdit=new W}replyToMessage(e){this.onMessageReplay.next(e)}editMessage(e){this.onMessageEdit.next(e)}};s.\u0275fac=function(n){return new(n||s)},s.\u0275prov=ee({token:s,factory:s.\u0275fac,providedIn:"root"});let i=s;return i})();var Ae=i=>({"background-image":i});function Ue(i,s){if(i&1&&(a(0,"div",9)(1,"div",10),v(2,"div",11),r()()),i&2){let o=p();l(2),d("ngStyle",S(1,Ae,o.attachmentUrl))}}function Ve(i,s){if(i&1&&(a(0,"div",12),m(1),r()),i&2){let o=p();l(1),x(o.attachment.attachmentOriginalName)}}var be=(()=>{let s=class s{constructor(){this.message={},this.attachmentUrl="",this.attachmentType="UNK",this.title="",this.cancelEmit=new w}set messageProp(e){this.reset(),this.message=e,this.setAttachment()}set isEditingProp(e){e?this.title="Editing message:":this.title=`Reply to ${this.message.receiver?.firstName} ${this.message.receiver?.lastName}`}setAttachment(){this.message.attachments.length!=0&&(this.attachment=this.message.attachments[0],this.attachment.thumbnailUrl!=null&&(this.attachmentUrl=`url("${this.attachment.thumbnailUrl}")`))}cancel(){this.reset(),this.cancelEmit.next()}reset(){this.message={},this.attachment={},this.attachmentUrl=""}};s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=_({type:s,selectors:[["app-reply-to-message-details"]],inputs:{messageProp:"messageProp",isEditingProp:"isEditingProp"},outputs:{cancelEmit:"cancelEmit"},standalone:!0,features:[C],decls:13,vars:4,consts:[[1,"reply-to-message-container"],[1,"material-symbols-outlined"],[1,"message-details"],["class","attachment mr-sm"],[1,"message-text"],[1,"text-primary","text-13","mb-xs","truncated"],["class","text-11 text-darkest truncated"],[1,"text-13","truncated"],[1,"material-symbols-outlined","text-primary","hoverable",3,"click"],[1,"attachment","mr-sm"],[1,"attachment-container"],[1,"file-image",3,"ngStyle"],[1,"text-11","text-darkest","truncated"]],template:function(n,t){n&1&&(a(0,"div",0)(1,"span",1),m(2,"reply"),r(),a(3,"div",2),h(4,Ue,3,3,"div",3),a(5,"div",4)(6,"div",5),m(7),r(),h(8,Ve,2,1,"div",6),a(9,"div",7),m(10),r()()(),a(11,"span",8),u("click",function(){return t.cancel()}),m(12,"close"),r()()),n&2&&(l(4),f(4,t.attachment!=null&&t.attachment.thumbnailUrl?4:-1),l(3),x(t.title),l(1),f(8,t.attachment&&!t.attachment.thumbnailUrl?8:-1),l(2),x(t.message.message))},dependencies:[B],styles:[".reply-to-message-container[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;padding:10px 10px 0}.reply-to-message-container[_ngcontent-%COMP%]   .message-details[_ngcontent-%COMP%]{width:100%;margin-left:5px;margin-right:10px;display:flex;flex-wrap:nowrap}.reply-to-message-container[_ngcontent-%COMP%]   .message-details[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]{max-width:500px}@media (max-width: 767px){.reply-to-message-container[_ngcontent-%COMP%]   .message-details[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]{max-width:250px}}.reply-to-message-container[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%]{width:50px;display:flex;justify-content:center;align-items:center;height:28px}"]});let i=s;return i})();var De=["textAreaContainer"],je=["textArea"],Ne=["fileUpload"];function Re(i,s){if(i&1){let o=T();a(0,"app-reply-to-message-details",15),u("cancelEmit",function(){M(o);let n=p();return y(n.resetMessageInputField())}),r()}if(i&2){let o=p();d("messageProp",o.replyToMessage)("isEditingProp",o.messageToEditId)}}var Me=(()=>{let s=class s{constructor(){this.renderer=b(ie),this.auth=b(H),this.chatService=b(K),this.subjectService=b(G),this.messageService=b(R),this.replyService=b(Y),this._subscription=new $,this.message="",this.showCursor=!0,this.toggleModal=!1,this.uploadInprogress=ne(0),this.videoThumbnails=[],this.replyToMessageId=null,this.replyToMessage={},this.messageToEditId=null}ngOnInit(){this._subscription.add(this.replyService.onMessageReplay.subscribe(e=>{this.resetMessageInputField(),this.replyToMessage=e,this.replyToMessageId=e.messageId})),this._subscription.add(this.replyService.onMessageEdit.subscribe(e=>{this.resetMessageInputField(),this.replyToMessage=e,this.messageToEditId=e.messageId})),this.getSubjectDetails()}ngOnDestroy(){this._subscription.unsubscribe()}getSubjectDetails(){let e=this.subjectService.getSubjectFromLocal();e&&(this.subjectId=e.subjectId,this.chatService.setSubjectId(this.subjectId))}onSubmit(){if(!this.subjectId||!this.receiverId)return;let e=this.textAreaContainer.nativeElement.dataset.replicatedValue?.trim();e&&(this.messageToEditId?this.postEditedMessage(e):this.postNewOrReplyMessage(e))}postNewOrReplyMessage(e){let n={subjectId:this.subjectId,message:e,accessToken:this.auth.user().accessToken,toUserId:this.receiverId,replyToMessageId:this.replyToMessageId};this.chatService.sendMessage(n),this.resetMessageInputField()}postEditedMessage(e){console.log(e)}resetMessageInputField(){this.renderer.setAttribute(this.textAreaContainer.nativeElement,"data-replicated-value",""),this.textArea.nativeElement.value="",this.showCursor=!0,this.replyToMessage={},this.replyToMessageId=null,this.messageToEditId=null}onAttach(){let e=/(\.jpg|\.jpeg|\.bmp|\.gif|\.svg|\.png|\.webm|\.avi|\.mpeg|\.mkv|\.doc|\.docx|\.xls|\.xlsx|\.pdf)$/i,n=this.fileUpload.nativeElement.files;n&&n.length>0&&(this.files=n,this.toggleModal=!0)}onBlur(){this.textArea.nativeElement.value?this.showCursor=!1:this.showCursor=!0}submitAttachmentMessage(e){this.toggleModal=!1;let n={subjectId:this.subjectId,message:e,accessToken:this.auth.user().accessToken,toUserId:this.receiverId,isAttachment:!0,replyToMessageId:this.replyToMessageId};this.messageService.postAttachmentMessage(n).subscribe({next:t=>{t.totalUploads=this.files.length,this.messageService.addMessage(t),t.messageId&&this.submitFiles(t.messageId),this.resetMessageInputField()},error:t=>{console.log()}})}submitFiles(e){if(!this.files||this.files.length==0)return;let n=0;[...this.files].forEach(t=>{let c="",g=this.videoThumbnails.find(I=>I.index==n);g&&(c=g.thumbnail);let E=new FormData;E.append("file",t),E.append("messageId",e.toString()),E.append("thumbnailBlob",c),this.messageService.uploadFile(E).subscribe({next:I=>{this.messageService.updateMessage(I),this.chatService.sendAttchmentMessage(I,this.receiverId)},error:I=>{console.log(I)}}),n++})}handleThumbnailEvent(e){this.videoThumbnails.push(e)}onFocus(){this.showCursor=!1}cancel(){this.toggleModal=!1,this.fileUpload.nativeElement.value="",this.replyToMessage={},this.replyToMessageId=null,this.messageToEditId=null}};s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=_({type:s,selectors:[["app-message-toolbar"]],viewQuery:function(n,t){if(n&1&&(O(De,5),O(je,5),O(Ne,5)),n&2){let c;P(c=k())&&(t.textAreaContainer=c.first),P(c=k())&&(t.textArea=c.first),P(c=k())&&(t.fileUpload=c.first)}},inputs:{receiverId:"receiverId"},standalone:!0,features:[C],decls:18,vars:3,consts:[[1,"message-toolbar-container"],[3,"messageProp","isEditingProp"],[1,"message-toolbar"],[1,"action-btn"],["for","attach"],[1,"material-symbols-outlined","text-primary"],["type","file","id","attach","accept","image/*, .pdf, .doc, .docx","multiple","",1,"hidden",3,"input"],["fileUpload",""],[1,"text-container"],["textAreaContainer",""],["onInput","this.parentNode.dataset.replicatedValue = this.value","rows","1","placeholder","Send message",3,"focus","blur"],["textArea",""],[1,"material-symbols-outlined","text-primary",3,"click"],[3,"modal","modalChange"],[3,"filesProp","cancel","onFileUpload","thumbnailEvent"],[3,"messageProp","isEditingProp","cancelEmit"]],template:function(n,t){n&1&&(a(0,"div",0),h(1,Re,1,2,"app-reply-to-message-details",1),a(2,"div",2)(3,"div",3)(4,"label",4)(5,"span",5),m(6,"attach_file"),r()(),a(7,"input",6,7),u("input",function(){return t.onAttach()}),r()(),a(9,"div",8,9)(11,"textarea",10,11),u("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()}),r()(),a(13,"div",3)(14,"span",12),u("click",function(){return t.onSubmit()}),m(15,"send"),r()()()(),a(16,"app-modal",13),u("modalChange",function(g){return t.toggleModal=g}),a(17,"app-file-upload",14),u("cancel",function(){return t.cancel()})("onFileUpload",function(g){return t.submitAttachmentMessage(g)})("thumbnailEvent",function(g){return t.handleThumbnailEvent(g)}),r()()),n&2&&(l(1),f(1,t.replyToMessageId||t.messageToEditId?1:-1),l(15),d("modal",t.toggleModal),l(1),d("filesProp",t.files))},dependencies:[q,ue,xe,be],styles:['.message-toolbar-container[_ngcontent-%COMP%]{border:1px solid #d2d2d7;border-top:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px;background-color:#fff}@media (max-width: 767px){.message-toolbar-container[_ngcontent-%COMP%]{border:none}}.message-toolbar-container[_ngcontent-%COMP%]   .message-toolbar[_ngcontent-%COMP%]{min-height:46px;display:flex;flex-wrap:nowrap;align-items:flex-end;justify-content:space-around;padding:10px 10px 12px}.message-toolbar-container[_ngcontent-%COMP%]   .message-toolbar[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{width:100%;display:grid;position:relative;margin-right:10px;margin-left:5px}.message-toolbar-container[_ngcontent-%COMP%]   .message-toolbar[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:after{content:attr(data-replicated-value) " ";white-space:pre-wrap;visibility:hidden}.message-toolbar-container[_ngcontent-%COMP%]   .message-toolbar[_ngcontent-%COMP%]   .text-container.show-cursor[_ngcontent-%COMP%]:before{content:"";width:1px;height:18px;background:#000000;display:inline-block;animation:_ngcontent-%COMP%_cursor-blink 1s steps(2) infinite;position:absolute}.message-toolbar-container[_ngcontent-%COMP%]   .message-toolbar[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]{outline:none;resize:none;overflow:hidden}.message-toolbar-container[_ngcontent-%COMP%]   .message-toolbar[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#b9b9bf}.message-toolbar-container[_ngcontent-%COMP%]   .message-toolbar[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:after, .message-toolbar-container[_ngcontent-%COMP%]   .message-toolbar[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #d2d2d7;padding:0;font-size:15px;grid-area:1/1/2/2;font-family:Roboto}.message-toolbar-container[_ngcontent-%COMP%]   .message-toolbar[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{width:50px;display:flex;justify-content:center;align-items:center;height:28px}.message-toolbar-container[_ngcontent-%COMP%]   .message-toolbar[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.message-toolbar-container[_ngcontent-%COMP%]   .message-toolbar[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}@keyframes _ngcontent-%COMP%_cursor-blink{0%{opacity:0}}']});let i=s;return i})();function $e(i,s){if(i&1&&(a(0,"div",1),v(1,"img",2),r()),i&2){let o=p();l(1),d("src",o.file.thumbnailUrl,D)}}function Qe(i,s){if(i&1&&v(0,"img",5),i&2){let o=p(2);d("src",o.file.thumbnailUrl,D)}}function Le(i,s){if(i&1&&(a(0,"div",3)(1,"div",6)(2,"span",7),m(3,"download"),r()(),a(4,"div",8)(5,"div"),m(6),r()()()),i&2){let o=p(2);l(6),x(o.file==null?null:o.file.attachmentOriginalName)}}function Be(i,s){if(i&1){let o=T();a(0,"div",3)(1,"div",4),u("click",function(n){M(o);let t=p();return y(t.onAttachmentClick(n))}),h(2,Qe,1,1,"img",5)(3,Le,7,1),r()()}if(i&2){let o=p();l(2),f(2,o.file.thumbnailUrl?2:3)}}var ye=(()=>{let s=class s{constructor(){this.fileUrl="",this.fileType="UNK",this.isGif=!1,this.onAttachmentClickEmit=new w}set fileProp(e){e.attachmentMimeType?.includes("gif")&&(this.isGif=!0),this.file=e,this.fileUrl=`url("${e.thumbnailUrl}")`}onAttachmentClick(e){e.stopPropagation(),this.onAttachmentClickEmit.emit(this.file)}};s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=_({type:s,selectors:[["app-attachment"]],inputs:{fileProp:"fileProp"},outputs:{onAttachmentClickEmit:"onAttachmentClickEmit"},standalone:!0,features:[C],decls:2,vars:1,consts:[["class","flex no-wrap pa-xs"],[1,"flex","no-wrap","pa-xs"],["alt","",1,"gif-message",3,"src"],[1,"flex","no-wrap"],[1,"attachment-container",3,"click"],["alt","",3,"src"],[1,"download"],[1,"material-symbols-outlined","text-primary"],[1,"file-name","flex","column","ml-sm"]],template:function(n,t){n&1&&h(0,$e,2,1,"div",0)(1,Be,4,1),n&2&&f(0,t.isGif?0:1)},styles:[".attachment-container[_ngcontent-%COMP%]:hover{border-radius:10px;cursor:pointer}.gif-message[_ngcontent-%COMP%]{width:100%;height:auto}.download-btn[_ngcontent-%COMP%]{width:30px;display:flex;justify-content:center;align-items:flex-start;cursor:pointer}"]});let i=s;return i})();var ze=i=>({disabled:i});function He(i,s){if(i&1){let o=T();a(0,"div",2),u("click",function(){let t=M(o).$implicit,c=p();return y(c.btnClick(t.action))}),a(1,"div",3),m(2),r()()}if(i&2){let o=s.$implicit,e=p();d("ngClass",S(2,ze,o.action==e.disable)),l(2),x(o.icon)}}var we=(()=>{let s=class s{constructor(){this.disable="",this.menuItems=[],this.menuActionEmit=new w}set viewedProp(e){e&&(this.disable="delete")}btnClick(e){this.menuActionEmit.emit(e)}};s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=_({type:s,selectors:[["app-float-menu-horizontal"]],inputs:{menuItems:"menuItems",viewedProp:"viewedProp"},outputs:{menuActionEmit:"menuActionEmit"},standalone:!0,features:[C],decls:4,vars:0,consts:[[1,"float-menu","show-on-hover-child"],[1,"flex","no-wrap"],[1,"menu-btn",3,"ngClass","click"],[1,"material-symbols-outlined"],["class","menu-btn",3,"ngClass"]],template:function(n,t){n&1&&(a(0,"div",0)(1,"div",1),A(2,He,3,4,"div",4,j),r()()),n&2&&(l(2),U(t.menuItems))},dependencies:[V]});let i=s;return i})();var qe=["messageContent"];function Ge(i,s){i&1&&(a(0,"span",15),m(1,"done_all"),r())}function Ke(i,s){i&1&&(a(0,"span",15),m(1,"done"),r())}function Ye(i,s){if(i&1){let o=T();a(0,"div",16),u("click",function(){M(o);let n=p();return y(n.goToMessage())}),a(1,"div",17),m(2),r(),a(3,"div",18),m(4),r()()}if(i&2){let o=p();l(2),Z("",o.receiver==null?null:o.receiver.firstName," ",o.receiver==null?null:o.receiver.lastName,""),l(2),x(o.message.replyToMessage.replyToMessage)}}function We(i,s){i&1&&v(0,"div",19)}function Ze(i,s){if(i&1){let o=T();a(0,"app-attachment",20),u("onAttachmentClickEmit",function(n){M(o);let t=p();return y(t.onAttachmentClick(n))}),r()}if(i&2){let o=s.$implicit;d("fileProp",o)}}function Je(i,s){i&1&&(a(0,"div",21),v(1,"div",22),r())}var Xe=(i,s)=>[i,s],et=i=>[i],tt=i=>({"text-bold":i}),Te=(()=>{let s=class s{constructor(){this.replyService=b(Y),this.messageService=b(R),this.message={},this.messageType="",this.parent=null,this.highlight="",this.showFloatMenu="",this.isMobile=!1,this.menuItems=[],this.menuItemsIn=[{label:"Reply",action:"reply",icon:"reply"}],this.menuItemsOut=[{label:"Edit",action:"edit",icon:"edit"},{label:"Reply",action:"reply",icon:"reply"},{label:"Delete",action:"delete",icon:"delete"}],this.last=!1,this.onMessageIntersect=new w,this.onAttachmentClickEmit=new w}set scrollIntoViewProp(e){e?(this.messageContent.nativeElement.scrollIntoView({block:"center",behavior:"smooth"}),this.highlight="highlight-message"):this.highlight=""}set message$(e){this.message=e,this.userId==this.message.createdBy?(this.messageType="out",this.menuItems=this.menuItemsOut):(this.messageType="in",this.menuItems=this.menuItemsIn)}ngOnInit(){}ngAfterViewInit(){this.isViewdChecker(),this.index==0&&this.messageType=="out"&&this.messageContent.nativeElement.scrollIntoView(),this.last&&this.setLastMessageObserver()}setLastMessageObserver(){let e=new IntersectionObserver(n=>{let t=n[0];t.isIntersecting&&(this.messageService.loadNewChunkOfMessages(),e.unobserve(t.target))},{rootMargin:"200px"});e.observe(this.messageContent.nativeElement)}isViewdChecker(){if(!this.message.viewed&&this.messageType!=="out"&&this.messageContent!==void 0){let n=new IntersectionObserver(t=>{t.forEach(c=>{c.isIntersecting&&(this.onMessageIntersect.emit(this.message.messageId),n.disconnect())})},{threshold:1});n.observe(this.messageContent.nativeElement)}this.message.viewed}onAttachmentClick(e){this.onAttachmentClickEmit.emit(e)}menuActionHandle(e){console.log(e),e=="reply"?(this.message.receiver=this.receiver,this.replyService.replyToMessage(this.message)):e=="edit"&&this.replyService.editMessage(this.message),this.showFloatMenu=""}goToMessage(){this.messageService.updateMessageScrollIntoViewProperty(this.message.replyToMessage?.replyToMessageId)}onMenuClick(){window.matchMedia("(min-width: 1025px)").matches||(this.showFloatMenu="hold",setTimeout(()=>{this.showFloatMenu=""},2e3))}};s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=_({type:s,selectors:[["app-message"]],viewQuery:function(n,t){if(n&1&&O(qe,5),n&2){let c;P(c=k())&&(t.messageContent=c.first)}},inputs:{userId:"userId",receiver:"receiver",index:"index",last:"last",scrollIntoViewProp:"scrollIntoViewProp",message$:"message$"},outputs:{onMessageIntersect:"onMessageIntersect",onAttachmentClickEmit:"onAttachmentClickEmit"},standalone:!0,features:[C],decls:24,vars:23,consts:[[1,"message-container",3,"ngClass"],[1,"message-avatar"],[1,"message-content"],["messageContent",""],[1,"message-heading"],[1,"message-author"],[1,"more-horiz","show-on-hover-parent",3,"ngClass"],[3,"menuItems","viewedProp","menuActionEmit"],[1,"material-symbols-outlined","text-primary",3,"click"],[1,"message-date"],["class","material-symbols-outlined text-primary done-all"],[1,"message-text",3,"ngClass"],["class","reply-to-details"],["class","mb-sm"],["class","flex justify-center items-center py-sm px-xxl"],[1,"material-symbols-outlined","text-primary","done-all"],[1,"reply-to-details",3,"click"],[1,"truncated","text-primary"],[1,"truncated"],[1,"mb-sm"],[3,"fileProp","onAttachmentClickEmit"],[1,"flex","justify-center","items-center","py-sm","px-xxl"],[1,"dot-flashing"],[3,"fileProp"]],template:function(n,t){n&1&&(a(0,"div",0),v(1,"div",1),a(2,"div",2,3)(4,"div",4)(5,"span",5),m(6),r(),a(7,"span",6)(8,"app-float-menu-horizontal",7),u("menuActionEmit",function(g){return t.menuActionHandle(g)}),r(),a(9,"span",8),u("click",function(){return t.onMenuClick()}),m(10,"more_horiz"),r()(),a(11,"span",9),m(12),N(13,"date"),r(),h(14,Ge,2,0,"span",10)(15,Ke,2,0),r(),a(16,"div",11),h(17,Ye,5,3,"div",12),a(18,"span"),m(19),r(),h(20,We,1,0,"div",13),A(21,Ze,1,1,"app-attachment",23,j),h(23,Je,2,0,"div",14),r()()()),n&2&&(d("ngClass",Q(16,Xe,t.messageType,t.highlight)),l(6),Z(" ",t.receiver==null?null:t.receiver.firstName," ",t.receiver==null?null:t.receiver.lastName," "),l(1),d("ngClass",S(19,et,t.showFloatMenu)),l(1),d("menuItems",t.menuItems)("viewedProp",t.message.viewed),l(4),x(L(13,13,t.message.createdAt,"HH:mm")),l(2),f(14,t.message.viewed?14:15),l(2),d("ngClass",S(21,tt,!t.message.viewed&&t.messageType=="in")),l(1),f(17,t.message.replyToMessage.replyToMessageId?17:-1),l(2),x(t.message.message),l(1),f(20,t.message.attachments&&t.message.attachments.length>0?20:-1),l(1),U(t.message.attachments),l(2),f(23,t.message.totalUploads&&t.message.totalUploads>0&&t.messageType=="out"?23:-1))},dependencies:[V,z,ye,we]});let i=s;return i})();var it=(i,s)=>({"fade-anim":i,in:s});function nt(i,s){if(i&1){let o=T();a(0,"div",1),u("click",function(){M(o);let n=p();return y(n.closeModal())}),a(1,"div",2)(2,"span",3),m(3,"close"),r(),a(4,"div",4),u("click",function(n){M(o);let t=p();return y(t.preventClick(n))}),oe(5),r()()()}if(i&2){let o=p();d("ngClass",Q(1,it,o.fadeAnim,o.fadeIn))}}var st=["*"],Ie=(()=>{let s=class s{constructor(){this.modalValue=!1,this.fadeAnim=!1,this.fadeIn=!1,this.modalChange=new w}get modal(){return this.modalValue}set modal(e){e?(this.fadeAnim=!0,setTimeout(()=>{this.fadeIn=!0})):(this.fadeIn=!1,setTimeout(()=>{this.fadeAnim=!1})),this.modalValue=e,this.modalChange.emit(this.modalValue)}closeModal(){this.modal=!1}preventClick(e){e.stopPropagation()}};s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=_({type:s,selectors:[["app-attachment-modal"]],inputs:{modal:"modal"},outputs:{modalChange:"modalChange"},standalone:!0,features:[C],ngContentSelectors:st,decls:1,vars:1,consts:[["role","dialog","class","attachment-modal",3,"ngClass"],["role","dialog",1,"attachment-modal",3,"ngClass","click"],[1,"attachment-modal-content"],[1,"material-symbols-outlined","attachment-modal-close"],[3,"click"]],template:function(n,t){n&1&&(ae(),h(0,nt,6,4,"div",0)),n&2&&f(0,t.modalValue?0:-1)},dependencies:[V]});let i=s;return i})();var at=["downloadLink"],Ee=(()=>{let s=class s{constructor(){this.src=""}};s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=_({type:s,selectors:[["app-video"]],viewQuery:function(n,t){if(n&1&&O(at,5),n&2){let c;P(c=k())&&(t.downloadLink=c.first)}},inputs:{src:"src"},standalone:!0,features:[C],decls:1,vars:1,consts:[["alt","","controls","",3,"src"]],template:function(n,t){n&1&&v(0,"video",0),n&2&&d("src",t.src,D)}});let i=s;return i})();var ot=["messageContainer"],rt=["downloadLink"],lt=(i,s)=>s.messageId;function ct(i,s){if(i&1&&(a(0,"div",15),m(1),N(2,"date"),r()),i&2){let o=p().$implicit;l(1),x(L(2,1,o.createdAt,"dd/MM/YYYY, EEEE"))}}function mt(i,s){if(i&1){let o=T();a(0,"app-message",13),u("onMessageIntersect",function(n){M(o);let t=p();return y(t.onMessageIntersect(n))})("onAttachmentClickEmit",function(n){M(o);let t=p();return y(t.onAttachmentClick(n))}),r(),h(1,ct,3,4,"div",14)}if(i&2){let o=s.$implicit,e=s.$index,n=s.$count,t=p();d("scrollIntoViewProp",o.scrollIntoView)("last",e===n-1)("userId",t.user.user==null?null:t.user.user.userId)("message$",o)("receiver",t.receiver)("index",e),l(1),f(1,t.displayDate(e,o.createdAt)?1:-1)}}var dt=i=>({"new-message":i}),zi=(()=>{let s=class s{constructor(){this.messageService=b(R),this.subjectService=b(G),this.navigation=b(he),this.chatService=b(K),this.auth=b(H),this.clientService=b(fe),this.providerService=b(pe),this._subscription=new $,this.user=this.auth.user(),this.messages=this.messageService.messages,this.chunkNum=1,this.containerBorder=!1,this.receiver={},this.attachmentUrl="",this.toggleImageModal=!1,this.toggleVideoModal=!1}ngOnInit(){this._subscription.add(this.auth.userSubject.subscribe(e=>{})),this.getReceiverDeatils(),this.getMessages()}getMessages(){this.messageService.resetMessages(),this.subject=this.subjectService.getSubjectFromLocal(),this.subject||this.navigation.back(),this.messageService.getMessages(this.subject.subjectId).subscribe({next:e=>{this.messageService.addMessages(e)},error:e=>{console.log(e)}})}displayDate(e,n){return e==this.messages.length-1?!1:this.getLocalDate(n)!=this.getLocalDate(this.messages()[e+1]?.createdAt)}getLocalDate(e){return e?new Date(e).toLocaleDateString():""}onMessageIntersect(e){let n={accessToken:this.user?.accessToken,messageId:e};this.chatService.sendViewedMessageConfirmation(n)}getReceiverDeatils(){if(this.auth.user().user?.isClient){let e=this.providerService.getProvider();e.providerUserId&&(this.receiver={receiverId:e.providerUserId,firstName:e.firstName,lastName:e.lastName})}else{let e=this.clientService.getClient();e?.clientUserId&&(this.receiver={receiverId:e.clientUserId,firstName:e.firstName,lastName:e.lastName})}}onAttachmentClick(e){this.messageService.getAttachmentUrl(e.messageAttachmentId).subscribe({next:n=>{console.log(n),this.attachmentUrl=n.attachmentUrl,this.processAttachment(e)},error:n=>{console.log(n)}})}processAttachment(e){e.attachmentMimeType?.includes("video")&&!e.attachmentMimeType?.includes("avi")?this.toggleVideoModal=!0:e.attachmentThumbnailId==null||e.attachmentMimeType?.includes("avi")?this.downloadAttachment(e.attachmentOriginalName):this.toggleImageModal=!0}downloadAttachment(e){this.downloadLink.nativeElement.href=this.attachmentUrl,this.downloadLink.nativeElement.click()}containerHighlight(){console.log("hhh"),this.containerBorder=!0,setTimeout(()=>{this.containerBorder=!1},500)}};s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=_({type:s,selectors:[["app-messages"]],viewQuery:function(n,t){if(n&1&&(O(ot,5),O(rt,5)),n&2){let c;P(c=k())&&(t.messageContainer=c.first),P(c=k())&&(t.downloadLink=c.first)}},standalone:!0,features:[C],decls:17,vars:12,consts:[[1,"container","container-md"],["messageContainer",""],[1,"messages-container",3,"ngClass"],[1,"message-container-header","flex","items-center","no-wrap"],[3,"color"],[1,"ml-auto"],[1,"card","pa-xl"],[3,"receiverId"],[3,"modal","modalChange"],["alt","",3,"src"],[3,"src"],[1,"hidden"],["downloadLink",""],[3,"scrollIntoViewProp","last","userId","message$","receiver","index","onMessageIntersect","onAttachmentClickEmit"],["class","date-separator"],[1,"date-separator"]],template:function(n,t){n&1&&(a(0,"div",0,1)(2,"div",2)(3,"div",3),v(4,"app-back-button",4),a(5,"h4",5),m(6),r()(),a(7,"div",6),A(8,mt,2,7,null,null,lt),r(),v(10,"app-message-toolbar",7),r()(),a(11,"app-attachment-modal",8),u("modalChange",function(g){return t.toggleImageModal=g}),v(12,"img",9),r(),a(13,"app-attachment-modal",8),u("modalChange",function(g){return t.toggleVideoModal=g}),v(14,"app-video",10),r(),v(15,"a",11,12)),n&2&&(l(2),d("ngClass",S(10,dt,t.containerBorder)),l(2),se("my-sm"),d("color","white"),l(2),x(t.subject.title),l(2),U(t.messages()),l(2),d("receiverId",t.receiver.receiverId),l(1),d("modal",t.toggleImageModal),l(1),d("src",t.attachmentUrl,D),l(1),d("modal",t.toggleVideoModal),l(1),d("src",t.attachmentUrl))},dependencies:[Me,Te,ge,z,V,Ie,Ee],styles:[".messages-container[_ngcontent-%COMP%]{height:calc(100vh - 140px);display:flex;flex-direction:column;border-radius:13px;border:2px solid transparent;box-shadow:0;transition:border .5s;margin-top:24px}.messages-container[_ngcontent-%COMP%]   .message-container-header[_ngcontent-%COMP%]{border:1px solid var(--primary);border-top-right-radius:10px;border-top-left-radius:10px;border-bottom:0;background-color:var(--primary);padding:2px 24px}.messages-container[_ngcontent-%COMP%]   .message-container-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:var(--white)!important}.messages-container.new-message[_ngcontent-%COMP%]{border-color:#0171ad9b}.messages-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{height:100%;border-radius:0;padding:10px 32px 10px 12px;display:flex;flex-direction:column-reverse;overflow-y:auto}@media (max-width: 767px){.messages-container[_ngcontent-%COMP%]{position:fixed;inset:60px 0 0;height:initial;margin-top:0}.messages-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:none;border-bottom:1px solid var(--border-color)}.messages-container[_ngcontent-%COMP%]   .message-container-header[_ngcontent-%COMP%]{display:none;border:none;border-top-right-radius:0;border-top-left-radius:0}}.messages-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:12px;height:12px}.messages-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#c4c8c7;border-radius:15px;border:5px solid #fff}.messages-container[_ngcontent-%COMP%]   .date-separator[_ngcontent-%COMP%]{border-top:1px solid var(--border-color);color:var(--primary);text-align:center;margin-top:24px;padding-top:10px;font-size:14px}"]});let i=s;return i})();export{zi as MessagesComponent};
