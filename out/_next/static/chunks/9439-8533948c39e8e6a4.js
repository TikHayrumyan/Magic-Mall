(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9439],{838:function(e,a,t){"use strict";t.r(a);var n=t(5893),r=t(8461),i=t.n(r),s=t(9321),o=t(1664),l=t.n(o),c=(t(5966),t(960),t(5152));function u(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){u(e,a,t[a])}))}return e}var p=t.n(c)()(Promise.all([t.e(571),t.e(2568)]).then(t.t.bind(t,2568,23)),{loadableGenerated:{webpack:function(){return[2568]}},ssr:!1}),g={autoplayTimeout:4e3,autoplay:!0,smartSpeed:3e3,dots:!0,items:1};a.default=function(e){var a=e.specialOffers,t=(0,s.I)(),r=t.HOST_API_IMG,o=t.lang;return(0,n.jsxs)("div",{className:i().discounts,children:[(0,n.jsx)("div",{className:i().container,children:(0,n.jsx)("div",{className:i().discountsBlock,children:null===a||void 0===a?void 0:a.map((function(e){var a=e.id,t=e.image,s=e.title,c=e.logo,u=e.link,d=e.link_am,p=e.link_ru,g=e.title_am,f=e.title_ru;return(0,n.jsx)(l(),{href:"en"==o?u:"ru"==o?p:d,children:(0,n.jsx)("a",{children:(0,n.jsx)("div",{className:i().item,children:(0,n.jsx)("div",{className:i().background,style:{backgroundImage:"url(".concat(r+t,")")},children:(0,n.jsxs)("div",{className:i().logoBlock,children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{className:i().logo,alt:"logo",src:r+c})}),(0,n.jsx)("div",{className:i().BrandName,children:"en"==o?s:"am"==o?g:f})]})})})})},a)}))})}),(0,n.jsx)("div",{className:i().mobileContainer,children:(0,n.jsx)(p,d({},g,{className:"owl-theme owl-specialOfferMobileNews",nav:!1,dots:!0,loop:!0,margin:0,children:null===a||void 0===a?void 0:a.map((function(e){var a=e.id,t=e.image,s=e.title,c=e.logo,u=e.link,d=e.link_am,p=e.link_ru,g=e.title_am,f=e.title_ru;return(0,n.jsx)(l(),{href:"en"==o?u:"ru"==o?p:d,children:(0,n.jsx)("a",{children:(0,n.jsx)("div",{className:i().itemMobile,children:(0,n.jsx)("div",{className:i().backgroundMobile,style:{backgroundImage:"url(".concat(r+t,")")},children:(0,n.jsxs)("div",{className:i().logoBlockMobile,children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{className:i().logoMobile,alt:"logo",src:r+c})}),(0,n.jsx)("div",{className:i().BrandNameMobile,children:"en"==o?s:"am"==o?g:f})]})})})})},a)}))}))})]})}},9439:function(e,a,t){"use strict";t.r(a);var n=t(4051),r=t.n(n),i=t(5893),s=t(5675),o=t.n(s),l=t(1812),c=t.n(l),u=t(1664),d=t.n(u),p=t(7294),g=t(9669),f=t.n(g),v=t(9321),m=t(1358),b=t.n(m),h=t(838),N=t(2063);function _(e,a,t,n,r,i,s){try{var o=e[i](s),l=o.value}catch(c){return void t(c)}o.done?a(l):Promise.resolve(l).then(n,r)}function k(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){k(e,a,t[a])}))}return e}a.default=function(){var e=(0,p.useState)(""),a=e[0],t=e[1],n=(0,p.useState)(!1),s=n[0],l=n[1],u=(0,p.useState)({data:[],loading:!1,type:void 0,initialOffSet:0,itemLength:0,specialOffers:[]}),g=u[0],m=u[1],k=(0,v.I)(),x=k.HOST_API,C=(k.HOST_API_IMG,k.lang),P=(0,p.useState)(null),w=(P[0],P[1],(0,p.useState)(0)),j=w[0],L=w[1],O=(0,p.useState)(0),B=O[0],E=O[1],S=(0,p.useRef)(null),A=function(e){window.scrollTo({top:null===e||void 0===e?void 0:e.offsetTop,left:0,behavior:"smooth"})};(0,p.useEffect)((function(){R(void 0)}),[]),(0,p.useEffect)((function(){L(Math.ceil(g.itemLength/3))}),[g.loading,g.itemLength]),(0,p.useEffect)((function(){R(void 0,B),A(S.current)}),[B]);var R=function(){var e,a=(e=r().mark((function e(a,t,n){var i,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i={},void 0!=a?i.type=a:0!=t&&(i.offset=t),e.next=5,f()({url:x+"news",method:"POST",headers:{"content-type":"application/json"},data:JSON.stringify(y({},i))});case 5:s=e.sent,console.log(s,"response News"),s.data.news.length&&200==s.status?m({data:s.data.news,loading:!0,type:a,initialOffSet:0,itemLength:s.data.count,specialOffers:s.data.specialOffers}):0==s.data.news.length&&200==s.status&&m({data:[],loading:!0,type:a,initialOffSet:0,specialOffers:[]}),l(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})),function(){var a=this,t=arguments;return new Promise((function(n,r){var i=e.apply(a,t);function s(e){_(i,n,r,s,o,"next",e)}function o(e){_(i,n,r,s,o,"throw",e)}s(void 0)}))});return function(e,t,n){return a.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[g.loading&&(0,i.jsx)("div",{className:c().SecNews,children:(0,i.jsxs)("div",{className:c().container,children:[(0,i.jsx)("div",{className:c().titleBlock,children:(0,i.jsx)("div",{className:c().title,children:N.I.NewsPageCategoryNews[C]})}),(0,i.jsxs)("div",{tabIndex:0,onBlur:function(){l(!1)},className:c().dropDownBlock,ref:S,children:[(0,i.jsxs)("div",{className:c().floor,onClick:function(){l(!s)},children:[(0,i.jsx)("div",{className:c().allFloors,children:""==a?"".concat(N.I.NewsPageSelectAll[C]):a}),(0,i.jsx)("div",{className:s?c().upArr:c().dArr})]}),(0,i.jsxs)("div",{className:s?c().floorDropDown:c().floorDropDownClose,children:[(0,i.jsx)("div",{onClick:function(){R(void 0),t("".concat(N.I.NewsPageSelectAll[C]))},children:N.I.NewsPageSelectAll[C]}),(0,i.jsx)("div",{onClick:function(){R(1),t("".concat(N.I.NewsPageCategoryNews[C]))},children:N.I.headerMenuNews[C]}),(0,i.jsx)("div",{onClick:function(){R(2),t("".concat(N.I.NewsPageCategoryEvents[C]))},children:N.I.NewsPageCategoryEvents[C]})]})]}),g.data.map((function(e,a){var t=e.id,n=e.date,r=e.title,s=e.title_am,l=e.title_ru,u=e.description,p=e.description_am,g=e.description_ru,f=e.thumbnail;return(0,i.jsx)(d(),{href:"/newsSinglePage/".concat(t),children:(0,i.jsx)("a",{children:(0,i.jsx)("div",{className:c().pagination,children:(0,i.jsxs)("div",{className:a%2!=1?c().PaginationContainerReverse:c().PaginationContainer,children:[(0,i.jsxs)("div",{className:c().descripBlock,children:[(0,i.jsx)("div",{className:c().pattern,children:(0,i.jsx)("img",{alt:"pattern",src:"/img/newsPage/secNews/pattern.svg"})}),(0,i.jsxs)("div",{className:c().dateBlock,children:[(0,i.jsx)("div",{className:c().calendar,children:(0,i.jsx)("img",{alt:"calendar",src:"/img/newsPage/secNews/calendar.svg"})}),(0,i.jsx)("div",{className:c().date,children:n})]}),(0,i.jsx)("div",{className:c().descripTitleBlock,children:(0,i.jsx)("div",{className:c().descripTitle,children:"en"==C?r:"ru"==C?l:s})}),(0,i.jsx)("div",{className:c().descriptionBlock,children:(0,i.jsx)("div",{className:c().description,children:"en"==C?u:"ru"==C?g:p})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:c().imgMobile,alt:"img",src:"https://apimall.weflex.am"+f,width:764,height:589})}),(0,i.jsxs)("div",{className:c().btnBlock,children:[(0,i.jsx)("button",{className:c().button,children:N.I.buttonSeeMore[C]}),(0,i.jsx)("div",{className:c().arrow,children:(0,i.jsx)("img",{alt:"arrow",src:"/img/newsPage/secNews/arrow.svg"})}),(0,i.jsx)("div",{className:c().patternMobile,children:(0,i.jsx)("img",{alt:"pattern",src:"/img/newsPage/secNews/pattern.svg"})})]})]}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:c().img,alt:"img",src:"https://apimall.weflex.am"+f,width:764,height:589})})]})})})},t)})),(0,i.jsx)(b(),{breakLabel:"...",nextLabel:(0,i.jsx)("img",{alt:"prev",src:"/img/newsPage/secNews/next.svg",onClick:function(){A(S.current)}}),onPageChange:function(e){var a=3*e.selected;E(a)},pageRangeDisplayed:2,pageCount:j,previousLabel:(0,i.jsx)("img",{alt:"prev",src:"/img/newsPage/secNews/prev.svg",onClick:function(){A(S.current)}}),renderOnZeroPageCount:null,breakClassName:c().ellipsis,activeClassName:c().activePage,previousClassName:c().previous,containerClassName:c().paginationContainerNumbers,pageClassName:c().Li,activeLinkClassName:c().activePage})]})}),(0,i.jsx)(h.default,{specialOffers:g.specialOffers})]})}},8461:function(e){e.exports={discounts:"discounts_discounts__z3bvk",container:"discounts_container__mMGhL",discountsBlock:"discounts_discountsBlock__bsWEy",background:"discounts_background__SMhE6",logoBlock:"discounts_logoBlock__8r_Xh",BrandName:"discounts_BrandName__fifix",logo:"discounts_logo__tbAzx",mobileContainer:"discounts_mobileContainer__nrl3U",itemMobile:"discounts_itemMobile__2xctJ",backgroundMobile:"discounts_backgroundMobile__cA_A_",logoBlockMobile:"discounts_logoBlockMobile__8SAX5",BrandNameMobile:"discounts_BrandNameMobile__iqWEP",logoMobile:"discounts_logoMobile__V0qJ_"}},1812:function(e){e.exports={SecNews:"secNews_SecNews__CKJHk",container:"secNews_container__sLiV2",titleBlock:"secNews_titleBlock__dGvIo",title:"secNews_title__jdiue",descripBlock:"secNews_descripBlock__E9Hge",img:"secNews_img__3SIcJ",dateBlock:"secNews_dateBlock__SVayp",date:"secNews_date__bVFS6",pagination:"secNews_pagination__Zc7He",PaginationContainer:"secNews_PaginationContainer__9NVa2",PaginationContainerReverse:"secNews_PaginationContainerReverse__eGZw3",descripTitleBlock:"secNews_descripTitleBlock__Q3FUc",descripTitle:"secNews_descripTitle__iHlEP",descriptionBlock:"secNews_descriptionBlock__2Uduq",description:"secNews_description__1u9HU",btnBlock:"secNews_btnBlock__KTP2f",button:"secNews_button__BSoxD",arrow:"secNews_arrow__z2eid",pattern:"secNews_pattern__Z_6pN",dropDownBlock:"secNews_dropDownBlock__jTYK5",floor:"secNews_floor__6z7tR",allFloors:"secNews_allFloors__bYkl6",dArr:"secNews_dArr__4oKyh",upArr:"secNews_upArr__hHRiF",floorDropDown:"secNews_floorDropDown__BoNBc",floorDropDownClose:"secNews_floorDropDownClose__Rn6VG",paginationContainerNumbers:"secNews_paginationContainerNumbers__X_AQ2",activePage:"secNews_activePage__iWEU8",ellipsis:"secNews_ellipsis__aeXmk",Li:"secNews_Li__P0iiF",imgMobile:"secNews_imgMobile__t8mql",patternMobile:"secNews_patternMobile__3wtrn"}},1358:function(e,a,t){var n;n=e=>(()=>{var a={703:(e,a,t)=>{"use strict";var n=t(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,a,t,r,i,s){if(s!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:r};return t.PropTypes=t,t}},697:(e,a,t)=>{e.exports=t(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:a=>{"use strict";a.exports=e}},t={};function n(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}};return a[e](i,i.exports,n),i.exports}n.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return n.d(a,{a:a}),a},n.d=(e,a)=>{for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{default:()=>k});var e=n(98),a=n.n(e),t=n(697),i=n.n(t);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}var o=function(e){var t=e.pageClassName,n=e.pageLinkClassName,r=e.page,i=e.selected,o=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,d=e.href,p=e.extraAriaContext,g=e.pageLabelBuilder,f=e.rel,v=e.ariaLabel||"Page "+r+(p?" "+p:""),m=null;return i&&(m="page",v=e.ariaLabel||"Page "+r+" is your current page",t=void 0!==t?t+" "+o:o,void 0!==n?void 0!==l&&(n=n+" "+l):n=l),a().createElement("li",{className:t},a().createElement("a",s({rel:f,role:d?void 0:"button",className:n,href:d,tabIndex:i?"-1":"0","aria-label":v,"aria-current":m,onKeyPress:u},c(u)),g(r)))};o.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};const l=o;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c.apply(this,arguments)}var u=function(e){var t=e.breakLabel,n=e.breakAriaLabel,r=e.breakClassName,i=e.breakLinkClassName,s=e.breakHandler,o=e.getEventListener,l=r||"break";return a().createElement("li",{className:l},a().createElement("a",c({className:i,role:"button",tabIndex:"0","aria-label":n,onKeyPress:s},o(s)),t))};u.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabel:i().string,breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};const d=u;function p(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:a}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},f.apply(this,arguments)}function v(e,a){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},v(e,a)}function m(e,a){if(a&&("object"===g(a)||"function"==typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function N(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var _=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&v(e,a)}(o,e);var t,n,r,i,s=(r=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=h(r);if(i){var t=h(this).constructor;e=Reflect.construct(a,arguments,t)}else e=a.apply(this,arguments);return m(this,e)});function o(e){var t,n;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o),N(b(t=s.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;t.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})})),N(b(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;t.handleClick(e,null,a<n-1?a+1:void 0,{isNext:!0})})),N(b(t),"handlePageSelected",(function(e,a){if(t.state.selected===e)return t.callActiveCallback(e),void t.handleClick(a,null,void 0,{isActive:!0});t.handleClick(a,null,e)})),N(b(t),"handlePageChange",(function(e){t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),N(b(t),"getEventListener",(function(e){return N({},t.props.eventListener,e)})),N(b(t),"handleClick",(function(e,a,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.isPrevious,s=void 0!==i&&i,o=r.isNext,l=void 0!==o&&o,c=r.isBreak,u=void 0!==c&&c,d=r.isActive,p=void 0!==d&&d;e.preventDefault?e.preventDefault():e.returnValue=!1;var g=t.state.selected,f=t.props.onClick,v=n;if(f){var m=f({index:a,selected:g,nextSelectedPage:n,event:e,isPrevious:s,isNext:l,isBreak:u,isActive:p});if(!1===m)return;Number.isInteger(m)&&(v=m)}void 0!==v&&t.handlePageChange(v)})),N(b(t),"handleBreakClick",(function(e,a){var n=t.state.selected;t.handleClick(a,e,n<e?t.getForwardJump():t.getBackwardJump(),{isBreak:!0})})),N(b(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),N(b(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),N(b(t),"getElementPageRel",(function(e){var a=t.state.selected,n=t.props,r=n.nextPageRel,i=n.prevPageRel,s=n.selectedPageRel;return a-1===e?i:a===e?s:a+1===e?r:void 0})),N(b(t),"pagination",(function(){var e=[],n=t.props,r=n.pageRangeDisplayed,i=n.pageCount,s=n.marginPagesDisplayed,o=n.breakLabel,l=n.breakClassName,c=n.breakLinkClassName,u=n.breakAriaLabels,p=t.state.selected;if(i<=r)for(var g=0;g<i;g++)e.push(t.getPageElement(g));else{var f=r/2,v=r-f;p>i-r/2?f=r-(v=i-p):p<r/2&&(v=r-(f=p));var m,b,h=function(e){return t.getPageElement(e)},N=[];for(m=0;m<i;m++){var _=m+1;if(_<=s)N.push({type:"page",index:m,display:h(m)});else if(_>i-s)N.push({type:"page",index:m,display:h(m)});else if(m>=p-f&&m<=p+(0===p&&r>1?v-1:v))N.push({type:"page",index:m,display:h(m)});else if(o&&N.length>0&&N[N.length-1].display!==b&&(r>0||s>0)){var k=m<p?u.backward:u.forward;b=a().createElement(d,{key:m,breakAriaLabel:k,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,m),getEventListener:t.getEventListener}),N.push({type:"break",index:m,display:b})}}N.forEach((function(a,t){var n=a;"break"===a.type&&N[t-1]&&"page"===N[t-1].type&&N[t+1]&&"page"===N[t+1].type&&N[t+1].index-N[t-1].index<=2&&(n={type:"page",index:a.index,display:h(a.index)}),e.push(n.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:n},t}return t=o,(n=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext,r=e.pageCount,i=e.forcePage;void 0===a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(r)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(r,"). Did you forget a Math.ceil()?")),void 0!==a&&a>r-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a," > ").concat(r-1,").")),void 0!==i&&i>r-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(r-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount,r=a.hrefAllControls;if(t)return r||e>=0&&e<n?t(e+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var t=this.state.selected,n=this.props,r=n.pageClassName,i=n.pageLinkClassName,s=n.activeClassName,o=n.activeLinkClassName,c=n.extraAriaContext,u=n.pageLabelBuilder;return a().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,rel:this.getElementPageRel(e),pageClassName:r,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var t=this.props,n=t.disabledClassName,r=t.disabledLinkClassName,i=t.pageCount,s=t.className,o=t.containerClassName,l=t.previousLabel,c=t.previousClassName,u=t.previousLinkClassName,d=t.previousAriaLabel,g=t.prevRel,v=t.nextLabel,m=t.nextClassName,b=t.nextLinkClassName,h=t.nextAriaLabel,N=t.nextRel,_=this.state.selected,k=0===_,y=_===i-1,x="".concat(p(c)).concat(k?" ".concat(p(n)):""),C="".concat(p(m)).concat(y?" ".concat(p(n)):""),P="".concat(p(u)).concat(k?" ".concat(p(r)):""),w="".concat(p(b)).concat(y?" ".concat(p(r)):""),j=k?"true":"false",L=y?"true":"false";return a().createElement("ul",{className:s||o,role:"navigation","aria-label":"Pagination"},a().createElement("li",{className:x},a().createElement("a",f({className:P,href:this.getElementHref(_-1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":d,rel:g},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),a().createElement("li",{className:C},a().createElement("a",f({className:w,href:this.getElementHref(_+1),tabIndex:y?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":L,"aria-label":h,rel:N},this.getEventListener(this.handleNextPage)),v)))}}])&&function(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),o}(e.Component);N(_,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),breakAriaLabels:i().shape({forward:i().string,backward:i().string}),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),N(_,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const k=_})(),r})(),e.exports=n(t(7294))}}]);