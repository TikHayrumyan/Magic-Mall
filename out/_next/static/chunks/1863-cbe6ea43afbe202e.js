(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1863],{1863:function(e,s,a){"use strict";a.r(s);var n=a(5893),r=a(7294),t=a(9321),i=a(9778),c=a.n(i),l=a(3554),o=a(7352),d=a(7817),_=a(9656),u=a(5307),h=a(888),m=a(2273),g=a(2063);s.default=function(){var e=(0,t.I)(),s=e.lang,a=(e.GlobalSearchData,e.globalSearchResult);return(0,r.useEffect)((function(){console.log(a.data,"globalSearchResult")}),[a.loading]),(0,n.jsx)("div",{className:c().SearchResult,children:(0,n.jsx)("div",{className:c().container,children:a.loading&&0==Object.keys(a.data).length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:c().searchResult,children:[(0,n.jsx)("div",{className:c().titleResult,children:(0,n.jsxs)("div",{className:c().title,children:[g.I.SearchResult[s]," - ",(0,n.jsx)("span",{className:c().result,children:a.searchWord})]})}),(0,n.jsx)("div",{className:c().notResult,children:(0,n.jsx)("p",{children:g.I.SearchNotResult[s]})})]}),(0,n.jsx)("div",{className:c().forCardSubscribeNotResult,children:(0,n.jsx)(m.default,{})})]}):(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:c().titleResult,children:(0,n.jsxs)("div",{className:c().title,children:[g.I.SearchResult[s]," - ",(0,n.jsx)("span",{className:c().result,children:a.searchWord})]})}),a.loading&&Object.keys(a.data).length?(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:c().forCardSubscribe,children:[a.data.shop.length?(0,n.jsx)(h.default,{}):null,a.data.food.length?(0,n.jsx)(d.default,{}):null,a.data.services.length?(0,n.jsx)(u.default,{}):null,a.data.entertainment.length?(0,n.jsx)(o.default,{}):null,a.data.news.length?(0,n.jsx)(_.default,{}):null,a.data.blog.length?(0,n.jsx)(l.default,{}):null]}),(0,n.jsx)(m.default,{})]}):null]})})})}},3554:function(e,s,a){"use strict";a.r(s);var n=a(5893),r=a(385),t=a.n(r),i=a(9321),c=a(5675),l=a.n(c),o=a(2063),d=a(1664),_=a.n(d);s.default=function(){var e,s,a=(0,i.I)(),r=a.lang,c=a.globalSearchResult,d=a.HOST_API_IMG;return(0,n.jsx)("div",{className:t().blog,children:(0,n.jsxs)("div",{className:t().container,children:[(0,n.jsx)("div",{className:t().titleBlog,children:o.I.headerMenuBlog[r]}),null===(e=c.data)||void 0===e||null===(s=e.blog)||void 0===s?void 0:s.map((function(e){var s=e.id,a=e.thumbnail,i=e.title,c=e.title_am,u=e.title_ru,h=e.description,m=e.description_am,g=e.description_ru,b=e.date;return(0,n.jsx)(_(),{href:"/singleBlogPage/".concat(s),children:(0,n.jsx)("a",{children:(0,n.jsxs)("div",{className:t().summerTrend,children:[(0,n.jsx)("div",{children:(0,n.jsx)(l(),{className:t().img,alt:"img",src:d+a,width:749,height:481})}),(0,n.jsxs)("div",{className:t().aboutTrends,children:[(0,n.jsx)("div",{className:t().title,children:"en"==r?i:"ru"==r?u:c}),(0,n.jsxs)("div",{className:t().dateBLock,children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{alt:"calendarIcon",src:"/img/blogPage/secBlog/calendarIcon.svg"})}),(0,n.jsx)("div",{className:t().date,children:b})]}),(0,n.jsx)("div",{className:t().descrip,children:"en"==r?h:"ru"==r?g:m}),(0,n.jsxs)("div",{className:t().btnBlock,children:[(0,n.jsx)("button",{className:t().button,children:o.I.buttonRead[r]}),(0,n.jsx)("div",{className:t().arrow,children:(0,n.jsx)("img",{alt:"arrow",src:"/img/blogPage/secBlog/arrow.svg"})})]}),(0,n.jsx)("div",{className:t().pattern,children:(0,n.jsx)("img",{className:"pattern",src:"/img/blogPage/secBlog/pattern.svg",alt:"pattern"})})]})]})})},s)}))]})})}},7352:function(e,s,a){"use strict";a.r(s);var n=a(5893),r=a(1325),t=a.n(r),i=a(9321),c=(a(5675),a(2063)),l=a(1664),o=a.n(l);s.default=function(){var e,s,a=(0,i.I)(),r=a.lang,l=a.globalSearchResult,d=a.HOST_API_IMG;return(0,n.jsx)("div",{className:t().Entertainment,children:(0,n.jsxs)("div",{className:t().container,children:[(0,n.jsx)("div",{className:t().titleEntertainment,children:c.I.headerMenuEntertainment[r]}),(0,n.jsx)("div",{className:t().entertainments,children:null===(e=l.data)||void 0===e||null===(s=e.entertainment)||void 0===s?void 0:s.map((function(e){var s=e.id,a=e.name,i=e.name_am,c=e.name_ru,l=e.description,_=e.description_am,u=e.description_ru,h=e.thumbnail;return(0,n.jsx)(o(),{href:"/entertainmentSinglePage/".concat(s),children:(0,n.jsx)("a",{children:(0,n.jsx)("div",{className:t().background,style:{backgroundImage:"url(".concat(d+h,")")},children:(0,n.jsx)("div",{className:t().cardContent,style:{backgroundImage:"/img/entertainmentPage/secFilter/cardContent.svg"},children:(0,n.jsxs)("div",{className:t().cardContentContainer,children:[(0,n.jsx)("div",{className:t().title,children:"en"==r?a:"ru"==r?c:i}),(0,n.jsx)("div",{className:t().description,children:"en"==r?l:"ru"==r?u:_}),(0,n.jsx)("div",{className:t().arrowBlock,children:(0,n.jsx)("img",{alt:"arrow",src:"/img/entertainmentPage/secFilter/Arrow.svg"})})]})})})})},s)}))})]})})}},7817:function(e,s,a){"use strict";a.r(s);var n=a(5893),r=a(6922),t=a.n(r),i=a(9321),c=a(2063),l=a(1664),o=a.n(l);s.default=function(){var e,s,a=(0,i.I)(),r=a.lang,l=a.globalSearchResult,d=a.HOST_API_IMG;return(0,n.jsx)("div",{className:t().foods,children:(0,n.jsxs)("div",{className:t().container,children:[(0,n.jsx)("div",{className:t().titleFood,children:c.I.headerMenuFood[r]}),(0,n.jsx)("div",{className:t().food,children:null===(e=l.data)||void 0===e||null===(s=e.food)||void 0===s?void 0:s.map((function(e){var s=e.id,a=e.name,i=e.name_am,l=e.name_ru,_=e.floor,u=e.logo,h=e.thumbnail,m=e.phone,g=e.instagram,b=e.facebook;return(0,n.jsx)(o(),{href:"/foodSinglePage/".concat(s),children:(0,n.jsx)("a",{children:(0,n.jsxs)("div",{className:t().first,style:{backgroundImage:"url(".concat(d+h,")")},children:[(0,n.jsx)("div",{className:t().patternBlock,children:(0,n.jsx)("div",{className:t().patternBackground,style:{backgroundImage:"url(/img/FoodPage/secFilter/cutPattern.svg)"},children:(0,n.jsxs)("div",{className:t().title,children:[(0,n.jsx)("span",{className:t().number,children:_}),(0,n.jsx)("span",{className:t().floor,children:c.I.MallMapPageFloor[r]})]})})}),(0,n.jsxs)("div",{className:t().hoverBlock,children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{className:t().logoBackground,alt:"logo",src:d+u})}),m&&(0,n.jsxs)("div",{className:t().phonBlock,children:[(0,n.jsx)("div",{className:t().phoneIcon,children:(0,n.jsx)("img",{alt:"phoneIcon",src:"/img/icons/whitPhoneIcon.svg"})}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{className:t().number,href:"tel:".concat(m),children:m})})]}),(0,n.jsxs)("div",{className:t().networkBlock,children:[b&&(0,n.jsx)("div",{className:t().facebook,children:(0,n.jsx)(o(),{href:b,children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)("img",{alt:"facebook",src:"/img/icons/Facebook.svg"})})})}),g&&(0,n.jsx)("div",{className:t().instagram,children:(0,n.jsx)(o(),{href:g,children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)("img",{alt:"instagram",src:"/img/icons/Instagram.svg"})})})})]})]}),(0,n.jsxs)("div",{className:t().brandBook,children:[(0,n.jsx)("div",{className:t().brand,children:"en"==r?a:"ru"==r?l:i}),(0,n.jsx)("div",{className:t().iconBook,children:(0,n.jsx)("img",{alt:"iconBook",src:"/img/FoodPage/secFilter/iconBook.svg"})})]})]})})},s)}))})]})})}},9656:function(e,s,a){"use strict";a.r(s);var n=a(5893),r=a(181),t=a.n(r),i=a(9321),c=a(5675),l=a.n(c),o=a(2063),d=a(1664),_=a.n(d);s.default=function(){var e,s,a=(0,i.I)(),r=a.lang,c=a.globalSearchResult,d=a.HOST_API_IMG;return console.log(c.data.food,"globalSearchResult.data.food"),(0,n.jsx)("div",{className:t().News,children:(0,n.jsxs)("div",{className:t().container,children:[(0,n.jsx)("div",{className:t().titleNews,children:o.I.headerMenuNews[r]}),null===(e=c.data)||void 0===e||null===(s=e.news)||void 0===s?void 0:s.map((function(e,s){var a=e.id,i=e.title,c=e.title_am,u=e.title_ru,h=e.description,m=e.description_am,g=e.description_ru,b=e.thumbnail,v=e.date;return(0,n.jsx)(_(),{href:"/newsSinglePage/".concat(a),children:(0,n.jsx)("a",{children:(0,n.jsx)("div",{className:t().pagination,children:(0,n.jsxs)("div",{className:s%2==1?t().PaginationContainer:t().PaginationContainerReverse,children:[(0,n.jsxs)("div",{className:t().descripBlock,children:[(0,n.jsx)("div",{className:t().pattern,children:(0,n.jsx)("img",{alt:"pattern",src:"/img/newsPage/secNews/pattern.svg"})}),(0,n.jsxs)("div",{className:t().dateBlock,children:[(0,n.jsx)("div",{className:t().calendar,children:(0,n.jsx)("img",{alt:"calendar",src:"/img/newsPage/secNews/calendar.svg"})}),(0,n.jsx)("div",{className:t().date,children:v})]}),(0,n.jsx)("div",{className:t().descripTitleBlock,children:(0,n.jsx)("div",{className:t().descripTitle,children:"en"==r?i:"ru"==r?u:c})}),(0,n.jsx)("div",{className:t().descriptionBlock,children:(0,n.jsx)("div",{className:t().description,children:"en"==r?h:"ru"==r?g:m})}),(0,n.jsx)("div",{children:(0,n.jsx)(l(),{className:t().imgMobile,alt:"img",src:d+b,width:764,height:589})}),(0,n.jsxs)("div",{className:t().btnBlock,children:[(0,n.jsx)("button",{className:t().button,children:o.I.buttonSeeMore[r]}),(0,n.jsx)("div",{className:t().arrow,children:(0,n.jsx)("img",{alt:"arrow",src:"/img/newsPage/secNews/arrow.svg"})}),(0,n.jsx)("div",{className:t().patternMobile,children:(0,n.jsx)("img",{alt:"pattern",src:"/img/newsPage/secNews/pattern.svg"})})]})]}),(0,n.jsx)("div",{children:(0,n.jsx)(l(),{className:t().img,alt:"img",src:d+b,width:764,height:589})})]})})})},a)}))]})})}},5307:function(e,s,a){"use strict";a.r(s);var n=a(5893),r=a(9321),t=(a(5675),a(2063)),i=a(1664),c=a.n(i),l=a(42),o=a.n(l);s.default=function(){var e,s,a=(0,r.I)(),i=a.lang,l=a.globalSearchResult,d=a.HOST_API_IMG;return(0,n.jsx)("div",{className:o().services,children:(0,n.jsxs)("div",{className:o().container,children:[(0,n.jsx)("div",{className:o().titleServices,children:t.I.headerMenuServices[i]}),(0,n.jsx)("div",{className:o().service,children:null===(e=l.data)||void 0===e||null===(s=e.services)||void 0===s?void 0:s.map((function(e){var s=e.id,a=e.floor,r=e.logo,l=e.phone,_=e.instagram,u=(e.linkedin,e.facebook);return(0,n.jsx)(c(),{href:"/serviceSinglePage/".concat(s),children:(0,n.jsx)("a",{children:(0,n.jsxs)("div",{className:o().first,children:[(0,n.jsx)("div",{className:o().patternBlock,children:(0,n.jsx)("div",{className:o().patternBackground,style:{backgroundImage:"url(/img/servicePage/secFilter/cutPattern.svg)"},children:(0,n.jsxs)("div",{className:o().title,children:[(0,n.jsx)("span",{className:o().number,children:a}),(0,n.jsx)("span",{className:o().floor,children:t.I.MallMapPageFloor[i]})]})})}),(0,n.jsx)("div",{className:o().bankLogoBlock,children:(0,n.jsx)("div",{className:o().bankLogo,children:(0,n.jsx)("img",{className:o().logo,alt:"bankLogo",src:d+r})})}),(0,n.jsxs)("div",{className:o().hoverBlock,children:[l&&(0,n.jsxs)("div",{className:o().phonBlock,children:[(0,n.jsx)("div",{className:o().phoneIcon,children:(0,n.jsx)("img",{alt:"phoneIcon",src:"/img/icons/whitPhoneIcon.svg"})}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{className:o().number,href:"tel:".concat(l),children:l})})]}),(0,n.jsxs)("div",{className:o().networkBlock,children:[u&&(0,n.jsx)("div",{className:o().facebook,children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)("img",{alt:"facebook",src:"/img/icons/Facebook.svg"})})})}),_&&(0,n.jsx)("div",{className:o().instagram,children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)("img",{alt:"instagram",src:"/img/icons/Instagram.svg"})})})})]})]}),(0,n.jsx)("div",{className:o().brandBook,children:(0,n.jsx)("div",{className:o().iconBook,children:(0,n.jsx)("img",{alt:"iconBook",src:"/img/servicePage/secFilter/iconBook.svg"})})})]},s)})},s)}))})]})})}},888:function(e,s,a){"use strict";a.r(s);var n=a(5893),r=a(9321),t=a(3927),i=a.n(t),c=a(2063),l=a(1664),o=a.n(l);s.default=function(){var e,s,a=(0,r.I)(),t=a.lang,l=a.globalSearchResult,d=a.HOST_API_IMG;return(0,n.jsx)("div",{className:i().Shop,children:(0,n.jsxs)("div",{className:i().container,children:[(0,n.jsx)("div",{className:i().titleShop,children:c.I.headerMenuShop[t]}),(0,n.jsx)("div",{className:i().shops,children:null===(e=l.data)||void 0===e||null===(s=e.shop)||void 0===s?void 0:s.map((function(e){var s=e.id,a=e.name,r=e.floor,l=e.logo,_=e.thumbnail,u=e.phone,h=e.instagram,m=e.facebook,g=e.sale,b=e.sale_am,v=e.sale_ru;return(0,n.jsx)(o(),{href:"/shopSinglePage/".concat(s),children:(0,n.jsx)("a",{children:(0,n.jsxs)("div",{className:i().first,style:{backgroundImage:"url(".concat(d+_,")")},children:[(0,n.jsxs)("div",{className:i().patternBlock,children:[g&&(0,n.jsx)("div",{className:i().salePattern,style:{backgroundImage:"url(/img/shopPage/secFilter/salePattern.svg)"},children:(0,n.jsxs)("div",{className:i().titleSale,children:[(0,n.jsx)("div",{className:i().sale,children:c.I.sale[t]}),(0,n.jsx)("div",{className:i().saleUntil,children:"en"==t?g:"ru"==t?v:b})]})}),g&&(0,n.jsx)("div",{className:i().salePatternMobile,style:{backgroundImage:"url(/img/shopPage/secFilter/salePatternMobile.svg)"},children:(0,n.jsxs)("div",{className:i().titleSaleMobile,children:[(0,n.jsx)("div",{className:i().saleMobile,children:c.I.sale[t]}),(0,n.jsx)("div",{className:i().saleUntilMobile,children:"en"==t?g:"ru"==t?v:b})]})}),(0,n.jsx)("div",{className:i().patternBackground,style:{backgroundImage:"url(/img/shopPage/secFilter/cutPattern.svg)"},children:(0,n.jsxs)("div",{className:i().title,children:[(0,n.jsx)("span",{className:i().number,children:r}),(0,n.jsx)("span",{className:i().floor,children:c.I.MallMapPageFloor[t]})]})})]}),(0,n.jsxs)("div",{className:i().hoverBlock,children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{className:i().logoBackground,alt:"logo",src:d+l})}),u&&(0,n.jsxs)("div",{className:i().phonBlock,children:[(0,n.jsx)("div",{className:i().phoneIcon,children:(0,n.jsx)("img",{alt:"phoneIcon",src:"/img/icons/whitPhoneIcon.svg"})}),(0,n.jsx)("div",{children:(0,n.jsx)("a",{className:i().number,href:"tel:".concat(u),children:u})})]}),(0,n.jsxs)("div",{className:i().networkBlock,children:[m&&(0,n.jsx)("div",{className:i().facebook,children:(0,n.jsx)(o(),{href:m,children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)("img",{alt:"facebook",src:"/img/icons/Facebook.svg"})})})}),h&&(0,n.jsx)("div",{className:i().instagram,children:(0,n.jsx)(o(),{href:h,children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)("img",{alt:"instagram",src:"/img/icons/Instagram.svg"})})})})]})]}),(0,n.jsxs)("div",{className:i().brandBook,children:[(0,n.jsx)("div",{className:i().brand,children:a}),(0,n.jsx)("div",{className:i().iconBook,children:(0,n.jsx)("img",{alt:"iconBook",src:"/img/shopPage/secFilter/iconBook.svg"})})]})]})})},s)}))})]})})}},2273:function(e,s,a){"use strict";a.r(s);var n=a(4051),r=a.n(n),t=a(5893),i=a(2913),c=a.n(i),l=a(7294),o=a(9669),d=a.n(o),_=a(9321),u=a(2063);function h(e,s,a,n,r,t,i){try{var c=e[t](i),l=c.value}catch(o){return void a(o)}c.done?s(l):Promise.resolve(l).then(n,r)}function m(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}function g(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(s){m(e,s,a[s])}))}return e}s.default=function(){var e=(0,_.I)(),s=e.HOST_API,a=e.lang,n=(0,l.useState)(""),i=n[0],o=n[1],m=(0,l.useState)(!1),b=m[0],v=m[1],x=(0,l.useState)({}),j=x[0],p=x[1],k=(0,l.useState)(!1),f=k[0],N=k[1];(0,l.useEffect)((function(){}),[i]);var B=function(){var e,a=(e=r().mark((function e(a){var n,t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),b){e.next=5;break}return p({checked:"checked required"}),N(!1),e.abrupt("return");case 5:if(""!=i){e.next=9;break}return p({email:"email use required"}),N(!1),e.abrupt("return");case 9:if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(String(i))){e.next=15;break}return p({email:"invalid email"}),N(!1),e.abrupt("return");case 15:return n={email:i},e.prev=16,e.next=19,d()({url:s+"subscribe",method:"POST",headers:{"content-type":"application/json"},data:JSON.stringify(n)});case 19:"success"==(t=e.sent).data&&200==t.status?(p({}),o(""),N(!0)):t.data.error&&p(g({},t.data)),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(16),console.log(e.t0);case 26:case"end":return e.stop()}}),e,null,[[16,23]])})),function(){var s=this,a=arguments;return new Promise((function(n,r){var t=e.apply(s,a);function i(e){h(t,n,r,i,c,"next",e)}function c(e){h(t,n,r,i,c,"throw",e)}i(void 0)}))});return function(e){return a.apply(this,arguments)}}();return(0,t.jsx)("div",{className:c().cardSubscribe,children:(0,t.jsxs)("div",{className:c().container,children:[(0,t.jsx)("div",{className:c().cardBackground,style:{backgroundImage:"url(/img/homePage/secCardSubscribe/background.jpg)"}}),(0,t.jsxs)("div",{className:c().cardMain,children:[(0,t.jsx)("div",{className:c().subscribe,children:u.I.CardSubscribeTitle[a]}),(0,t.jsx)("div",{className:c().description,children:u.I.CardSubscribeDescription[a]}),(0,t.jsxs)("form",{className:c().inputBlock,onSubmit:B,children:[(0,t.jsx)("input",{className:c().input,value:i,type:"text",placeholder:u.I.EmailAddress[a],onChange:function(e){return o(e.target.value)}}),(0,t.jsx)("button",{className:c().button,children:(0,t.jsx)("img",{alt:"button",src:"/img/homePage/secCardSubscribe/button.svg"})})]}),(0,t.jsxs)("div",{children:[j.email?(0,t.jsx)("div",{className:c().invalidEmail,children:u.I.wrongEmail[a]}):null,f?(0,t.jsx)("div",{className:c().success,children:u.I.successfullySubscribed[a]}):null]}),(0,t.jsxs)("div",{className:c().accessBlock,children:[(0,t.jsx)("input",{type:"checkbox",className:j.checked?c().notChecked:b,onChange:function(e){return v(e.target.checked)}}),(0,t.jsxs)("div",{className:c().agree,children:[u.I.CardSubscribeAgreeTermsLeft[a],(0,t.jsx)("span",{children:u.I.CardSubscribeAgreeTermsRight[a]})]})]})]})]})})}},2913:function(e){e.exports={cardSubscribe:"cardSubscribe_cardSubscribe__8pxoF",container:"cardSubscribe_container__gxa3h",cardBackground:"cardSubscribe_cardBackground__o0fVD",title:"cardSubscribe_title__S0fR9",cardMain:"cardSubscribe_cardMain__Aa4Cy",subscribe:"cardSubscribe_subscribe__MS28c",description:"cardSubscribe_description__U4_RE",inputBlock:"cardSubscribe_inputBlock__OdElF",input:"cardSubscribe_input__f6Ina",button:"cardSubscribe_button__jyquO",accessBlock:"cardSubscribe_accessBlock__GA4FJ",agree:"cardSubscribe_agree__AhY9_",invalidEmail:"cardSubscribe_invalidEmail__aIfA0",checked:"cardSubscribe_checked__gM7I8",notChecked:"cardSubscribe_notChecked___p3Uv",success:"cardSubscribe_success__0QhS_",news:"cardSubscribe_news__RUjkr"}},385:function(e){e.exports={blog:"blog_blog__NSnnf",container:"blog_container__WdPt0",titleBlog:"blog_titleBlog__EelPN",titleBlock:"blog_titleBlock__YfldK",title:"blog_title__zUZ7D",description:"blog_description__ecQ8q",summerTrend:"blog_summerTrend__7jTqA",aboutTrends:"blog_aboutTrends__qDeiW",dateBLock:"blog_dateBLock__v4SMb",date:"blog_date__Y58ZR",descrip:"blog_descrip__PSGjx",btnBlock:"blog_btnBlock__tEy8j",button:"blog_button__2Ofac",arrow:"blog_arrow__cUaT9",pattern:"blog_pattern__PR3DL",img:"blog_img__XPywG",SecBlog:"blog_SecBlog__V163R"}},1325:function(e){e.exports={Entertainment:"entertainment_Entertainment__YlEnI",container:"entertainment_container__WD23g",titleEntertainment:"entertainment_titleEntertainment__elWg3",entertainments:"entertainment_entertainments__WKqMj",background:"entertainment_background__EdQ0u",cardContent:"entertainment_cardContent__vV5kB",cardContentContainer:"entertainment_cardContentContainer__fUYgu",title:"entertainment_title__wWjC0",description:"entertainment_description__wtwNd",arrowBlock:"entertainment_arrowBlock__YrSzB",buttonBlock:"entertainment_buttonBlock__Vrjh9",button:"entertainment_button__FuCwW",searchResult:"entertainment_searchResult__9NzSX",searchResultNotFound:"entertainment_searchResultNotFound__QG867",filter:"entertainment_filter__P4oYM"}},6922:function(e){e.exports={foods:"foods_foods__vIGbv",container:"foods_container___eH16",titleFood:"foods_titleFood__ogPam",food:"foods_food__PQPGw",first:"foods_first__NRuih",patternBlock:"foods_patternBlock__3dPAB",patternBackground:"foods_patternBackground__ktge_",title:"foods_title__bCPsJ",number:"foods_number__hwiGh",floor:"foods_floor__xzLbC",brandBook:"foods_brandBook__ie4kn",brand:"foods_brand___J_Zt",iconBook:"foods_iconBook__Qw_E7",buttonBlock:"foods_buttonBlock__wuJfa",button:"foods_button__qxOix",hoverBlock:"foods_hoverBlock__KqiZl",logoBackground:"foods_logoBackground__XLjRM",phonBlock:"foods_phonBlock__O2pxI",networkBlock:"foods_networkBlock__hKSnM",searchResult:"foods_searchResult__lpiC5",searchResultNotFound:"foods_searchResultNotFound__El3LI",filter:"foods_filter__7EzkS",CardSubscribe:"foods_CardSubscribe__tVfst"}},181:function(e){e.exports={news:"news_news__YdUtl",container:"news_container___qaMx",titleNews:"news_titleNews__IZdZE",descripBlock:"news_descripBlock__gbt_f",img:"news_img__teem2",dateBlock:"news_dateBlock__FUtlU",date:"news_date__Dgr0L",pagination:"news_pagination__YEPZ1",PaginationContainer:"news_PaginationContainer__63__o",PaginationContainerReverse:"news_PaginationContainerReverse__gCng1",descripTitleBlock:"news_descripTitleBlock__Qimo2",descripTitle:"news_descripTitle___Da4b",descriptionBlock:"news_descriptionBlock__QSPgP",description:"news_description___0u_p",btnBlock:"news_btnBlock__9yJBf",button:"news_button__PS2cL",arrow:"news_arrow__CigQJ",pattern:"news_pattern__SthWL",imgMobile:"news_imgMobile__5boGm",patternMobile:"news_patternMobile__hjN4n",SecNews:"news_SecNews__3C2PH"}},9778:function(e){e.exports={forCardSubscribe:"searchResult_forCardSubscribe__JuAyK",forCardSubscribeNotResult:"searchResult_forCardSubscribeNotResult__kH5Qd",SearchResult:"searchResult_SearchResult__3iYm9",container:"searchResult_container__rwJHL",titleResult:"searchResult_titleResult__5444G",title:"searchResult_title__lwCkG",result:"searchResult_result__UKz53",searchResult:"searchResult_searchResult__Tn5Bt",notResult:"searchResult_notResult__2HI2U"}},42:function(e){e.exports={services:"service_services__Yt_7h",container:"service_container__EKwPh",titleServices:"service_titleServices__k3oZw",service:"service_service__rOaeU",first:"service_first__OHsIA",patternBlock:"service_patternBlock__7DyR_",patternBackground:"service_patternBackground__z_Nhj",title:"service_title__1sz0v",number:"service_number__zat57",floor:"service_floor__v97DS",bankLogoBlock:"service_bankLogoBlock__O4lNr",logo:"service_logo__p_X3X",brandBook:"service_brandBook__mbWvB",brand:"service_brand__YQxFK",iconBook:"service_iconBook__zDMUY",buttonBlock:"service_buttonBlock__r0GFs",button:"service_button__RBKtm",bankLogo:"service_bankLogo__TZWWJ",hoverBlock:"service_hoverBlock__RQQV2",phonBlock:"service_phonBlock__L4lW6",networkBlock:"service_networkBlock__6PMHe",searchResult:"service_searchResult__4_NGk",searchResultNotFound:"service_searchResultNotFound__sPCOZ",filter:"service_filter__t3M5N",CardSubscribe:"service_CardSubscribe__mRJSU"}},3927:function(e){e.exports={Shop:"shop_Shop__6y2Wh",container:"shop_container__5KVnA",shops:"shop_shops__M_6Cl",titleShop:"shop_titleShop__DsLCH",first:"shop_first__YWiB3",patternBlock:"shop_patternBlock__xRxJ5",patternBackground:"shop_patternBackground__6tT1C",title:"shop_title__L8QIH",number:"shop_number__00BHJ",floor:"shop_floor___WDOV",brandBook:"shop_brandBook__qETHR",brand:"shop_brand__mX5ys",iconBook:"shop_iconBook__1txz5",buttonBlock:"shop_buttonBlock__eQVzC",button:"shop_button__spwI1",salePatternMobile:"shop_salePatternMobile___x3xq",salePattern:"shop_salePattern__ibAHL",titleSale:"shop_titleSale__SZCTo",sale:"shop_sale__3Evqb",saleUntil:"shop_saleUntil__f_FyP",hoverBlock:"shop_hoverBlock__84NVI",logoBackground:"shop_logoBackground__Ka0E_",phonBlock:"shop_phonBlock__s_n6G",networkBlock:"shop_networkBlock__xglPh",searchResult:"shop_searchResult__hyQYk",searchResultNotFound:"shop_searchResultNotFound__NCRKQ",filter:"shop_filter___Z8as",CardSubscribe:"shop_CardSubscribe__w8uph",titleSaleMobile:"shop_titleSaleMobile__kRSlQ",saleMobile:"shop_saleMobile__mJCgv",saleUntilMobile:"shop_saleUntilMobile___PLwR"}}}]);