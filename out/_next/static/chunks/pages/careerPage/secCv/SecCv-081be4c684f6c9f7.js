(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2771],{28:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/careerPage/secCv/SecCv",function(){return n(6879)}])},3228:function(e,a,n){"use strict";n.r(a);var s=n(4051),t=n.n(s),c=n(5893),r=n(5675),i=n.n(r),o=n(923),l=n.n(o),u=n(7294),p=n(9669),d=n.n(p),_=n(9321),m=n(2063);function v(e,a,n,s,t,c,r){try{var i=e[c](r),o=i.value}catch(l){return void n(l)}i.done?a(o):Promise.resolve(o).then(s,t)}a.default=function(e){var a,n,s=(0,u.useRef)(null),r=function(){s.current.click()},o=(0,u.useRef)(null);(0,u.useEffect)((function(){o.current.scrollIntoView()}),[]);var p=(0,_.I)(),h=p.HOST_API,g=p.lang,k=(0,u.useState)(""),x=k[0],f=k[1],j=(0,u.useState)(!1),C=j[0],S=j[1],N=(0,u.useState)(""),F=N[0],w=N[1],b=(0,u.useState)(!1),I=b[0],A=b[1],y=(0,u.useState)(""),P=y[0],B=y[1],E=(0,u.useState)(!1),M=E[0],D=E[1],R=(0,u.useState)(""),G=R[0],L=R[1],T=(0,u.useState)(!1),X=T[0],z=T[1],H=(0,u.useState)(null),Z=H[0],q=H[1],V=(0,u.useState)(!1),J=V[0],K=V[1],O=(0,u.useState)(""),U=O[0],W=O[1],Y=(0,u.useState)(!1),$=Y[0],Q=Y[1],ee=(0,u.useState)(!0),ae=ee[0],ne=ee[1],se=function(){var a,n=(a=t().mark((function a(){var n,s,c;return t().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(String(P)),x.length){a.next=4;break}return a.abrupt("return",S(!0));case 4:if(F.length){a.next=6;break}return a.abrupt("return",A(!0));case 6:if(P.length){a.next=8;break}return a.abrupt("return",D(!0));case 8:if(n){a.next=10;break}return a.abrupt("return",D(!0));case 10:if(G.length){a.next=12;break}return a.abrupt("return",z(!0));case 12:if(null!=Z){a.next=14;break}return a.abrupt("return",K(!0));case 14:if(0!=$){a.next=20;break}return ne(!1),console.log(ae,"styleCheck"),a.abrupt("return",Q(!1));case 20:Q(!0),ne(!0);case 21:return e.onclose("send"),(s=new FormData).append("file",Z),s.append("job",x),s.append("name",F),s.append("comment",U),s.append("phone",G),s.append("email",P),a.prev=29,a.next=32,d()({method:"post",url:h+"career/cv",data:s,headers:{"Content-Type":"multipart/form-data"}});case 32:c=a.sent,console.log(c,"ssssss"),0==Object.keys(c.data).length&&(w(""),f(""),W(""),L(""),B("")),a.next=40;break;case 37:a.prev=37,a.t0=a.catch(29),console.log(a.t0);case 40:case"end":return a.stop()}}),a,null,[[29,37]])})),function(){var e=this,n=arguments;return new Promise((function(s,t){var c=a.apply(e,n);function r(e){v(c,s,t,r,i,"next",e)}function i(e){v(c,s,t,r,i,"throw",e)}r(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,u.useEffect)((function(){var a;"allow"!==(null===e||void 0===e?void 0:e.writing)&&f(null===(a=e.inputsData)||void 0===a?void 0:a.position)}),[null===(a=e.inputsData)||void 0===a?void 0:a.position,null===e||void 0===e?void 0:e.writing]),(0,c.jsxs)("div",{className:l().backgroundShadow,children:[(0,c.jsx)("div",{className:l().darkShadow,id:"dark_layer",onClick:function(a){"dark_layer"==a.target.id&&e.onclose("close")}}),(0,c.jsxs)("div",{className:l().ApplicationForm,ref:o,children:[(0,c.jsxs)("div",{className:l().container,children:[(0,c.jsx)("div",{className:l().titleBlock,children:(0,c.jsx)("div",{className:l().title,children:m.I.Application[g]})}),(0,c.jsxs)("div",{className:l().inputs,children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("input",{className:l().work,disabled:"disallow"===e.writing&&!0,onChange:function(e){return f(e.target.value)},value:e.writing&&"disallow"===e.writing?null===(n=e.inputsData)||void 0===n?void 0:n.position:x,placeholder:e.inputsData?e.inputsData.position:""}),(0,c.jsx)("span",{className:C?l().warning:l().success,children:m.I.errorMessages[g]})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("input",{className:l().name,placeholder:m.I.ContactPageNameSurname[g],onChange:function(e){return w(e.target.value)},value:F}),(0,c.jsx)("span",{className:I?l().warning:l().success,children:m.I.errorMessages[g]})]})]}),(0,c.jsxs)("div",{className:l().inputs,children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("input",{className:l().work,type:"email",placeholder:m.I.ContactPageEmail[g],value:P,onChange:function(e){return B(e.target.value)}}),(0,c.jsx)("span",{className:M?l().warning:l().success,children:m.I.errorMessages[g]})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("input",{className:l().name,type:"number",placeholder:m.I.applicationFormPhoneNumber[g],onChange:function(e){return L(e.target.value)}}),(0,c.jsx)("span",{className:X?l().warning:l().success,children:m.I.errorMessages[g]})]})]}),(0,c.jsx)("textarea",{className:l().textarea,placeholder:m.I.applicationFormComment[g],onChange:function(e){return W(e.target.value)}}),(0,c.jsxs)("div",{className:l().saveCvBLock,children:[(0,c.jsx)("div",{onClick:r,className:l().saveIcon,children:(0,c.jsx)(i(),{alt:"paperclip",src:"/img/entertainmentPage/ApplicationForm/paperclip.svg",width:23,height:23})}),(0,c.jsxs)("div",{className:J?l().saveCvError:l().saveCv,onClick:r,children:[m.I.attachResume[g],(0,c.jsx)("input",{style:{display:"none"},ref:s,type:"file",onChange:function(e){return q(e.target.files[0])}})]}),(0,c.jsx)("div",{children:null!==Z?Z.name:null})]}),(0,c.jsxs)("div",{className:l().checkBlock,children:[(0,c.jsx)("input",{type:"checkbox",className:0==ae?l().notChecked:l().checked,value:$,onChange:function(e){return Q(e.target.checked)}}),(0,c.jsxs)("div",{className:l().agree,children:[m.I.RentPageAgreeTermsLeft[g]," ",(0,c.jsx)("span",{className:l().span,children:m.I.RentPageAgreeTermsRight[g]})]})]}),(0,c.jsx)("button",{className:l().send,onClick:se,children:m.I.ContactPageSendButton[g]})]}),(0,c.jsx)("div",{className:l().close,onClick:function(){return e.onclose("close")},children:"\xd7"})]})]})}},583:function(e,a,n){"use strict";n.r(a);var s=n(5893),t=n(38),c=n.n(t),r=n(2063),i=n(9321);a.default=function(e){var a=(0,i.I)().lang;return(0,s.jsxs)("div",{className:c().darkBackground,children:[(0,s.jsx)("div",{className:c().dark,id:"darkLayer",onClick:function(a){"darkLayer"==a.target.id&&e.onClose("close")}}),(0,s.jsxs)("div",{className:c().SuccessAppForm,children:[(0,s.jsx)("div",{className:c().close,onClick:function(){return e.onClose("close")},children:"\xd7"}),(0,s.jsxs)("div",{className:c().container,children:[(0,s.jsx)("div",{className:c().successImg,children:(0,s.jsx)("img",{alt:"success",src:"/img/careerPage/successForm/success.svg"})}),(0,s.jsx)("div",{className:c().thanks,children:r.I.thanks[a]}),(0,s.jsx)("div",{className:c().MessageSend,children:r.I.MessageHasBeenSent[a]}),(0,s.jsx)("button",{className:c().button,onClick:function(){return e.onClose("close")},children:r.I.buttonContinue[a]})]})]})]})}},6879:function(e,a,n){"use strict";n.r(a);var s=n(5893),t=n(1589),c=n.n(t),r=n(5675),i=n.n(r),o=n(3228),l=n(583),u=n(7294),p=n(2063),d=n(9321);a.default=function(e){var a=(0,u.useState)(!1),n=a[0],t=a[1],r=(0,u.useState)(!1),_=r[0],m=r[1],v=(0,u.useState)({}),h=v[0],g=v[1],k=(0,d.I)().lang,x=function(e){t(!n),g(e)},f=function(e){"close"==e?(t(!1),m(!1)):(t(!1),m(!0))};return(0,s.jsxs)("div",{className:c().forDarkShadow,children:[(0,s.jsxs)("div",{className:c().SecCv,children:[(0,s.jsxs)("div",{className:c().container,children:[(0,s.jsx)("div",{className:c().pattern,children:(0,s.jsx)(i(),{alt:"pattern",src:"/img/careerPage/secCv/pattern.svg"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:c().descrip,children:p.I.SecCVdescription[k]}),(0,s.jsx)("button",{className:c().apply,onClick:function(){return x({position:"".concat(p.I.applicationFormPosition[k])})},children:p.I.CareerPageApply[k]})]})]}),(0,s.jsx)("button",{className:c().MobileApply,onClick:function(){return x({position:"".concat(p.I.applicationFormPosition[k])})},children:p.I.CareerPageApply[k]})]}),n?(0,s.jsx)(o.default,{writing:"allow",inputsData:h,onclose:f}):null,_?(0,s.jsx)(l.default,{onClose:f}):null]})}},38:function(e){e.exports={darkBackground:"SuccessAppForm_darkBackground__GTrqs",dark:"SuccessAppForm_dark__ybqRs",SuccessAppForm:"SuccessAppForm_SuccessAppForm__SPxUe",container:"SuccessAppForm_container__XKUGj",thanks:"SuccessAppForm_thanks__JZ3j2",MessageSend:"SuccessAppForm_MessageSend__wLjj_",button:"SuccessAppForm_button__67GHL",close:"SuccessAppForm_close__RaEiR",successImg:"SuccessAppForm_successImg__Vihvn"}},923:function(e){e.exports={backgroundShadow:"applicationForm_backgroundShadow__HiJ8M",darkShadow:"applicationForm_darkShadow___iYRS",ApplicationForm:"applicationForm_ApplicationForm__R3vUV",container:"applicationForm_container__QF8Tq",titleBlock:"applicationForm_titleBlock__XwbS0",title:"applicationForm_title__GcWpj",close:"applicationForm_close__HfGBW",inputs:"applicationForm_inputs__kmK5l",work:"applicationForm_work__9zPKv",name:"applicationForm_name__fu_ve",warning:"applicationForm_warning__n3Xtl",success:"applicationForm_success__n7wZg",textarea:"applicationForm_textarea__l_eHZ",saveCvBLock:"applicationForm_saveCvBLock__17Xu3",saveIcon:"applicationForm_saveIcon___jhmt",saveCv:"applicationForm_saveCv__moAbV",saveCvError:"applicationForm_saveCvError__utYYt",checkBlock:"applicationForm_checkBlock__D8z_s",send:"applicationForm_send__d0xAC",agree:"applicationForm_agree__0zg7e",span:"applicationForm_span__Wxkqg",checked:"applicationForm_checked__SIh_h",notChecked:"applicationForm_notChecked__GJg3M"}},1589:function(e){e.exports={SecCv:"secCv_SecCv__nI5Ap",container:"secCv_container__vJ7Fj",descrip:"secCv_descrip__C7kBE",apply:"secCv_apply__GSKDc",forDarkShadow:"secCv_forDarkShadow__7GXSv",MobileApply:"secCv_MobileApply___qxfR",pattern:"secCv_pattern__70A_w"}}},function(e){e.O(0,[9774,2888,179],(function(){return a=28,e(e.s=a);var a}));var a=e.O();_N_E=a}]);