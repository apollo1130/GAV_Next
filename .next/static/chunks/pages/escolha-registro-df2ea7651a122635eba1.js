_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{B8DE:function(e,t,c){"use strict";c.d(t,"b",(function(){return j})),c.d(t,"a",(function(){return b}));var s=c("rePB"),r=c("nKUr"),n=c("Ff2n"),a=c("cWnB"),i=c("T/rR");function l(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,s)}return c}function o(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?l(Object(c),!0).forEach((function(t){Object(s.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):l(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}var j=function(e){var t=e.title,c=e.loading,s=e.size,l=e.loaderMsg,j=Object(n.a)(e,["title","loading","size","loaderMsg"]);return Object(r.jsxs)(a.a,o(o({},j),{},{children:[t,c&&Object(r.jsx)(i.a,{className:"ml-3 mb-1",animation:"border",role:"status",size:s,children:Object(r.jsx)("span",{className:"sr-only",children:"".concat(l)})})]}))};j.defaultProps={title:"My Button",size:"sm",variant:"primary",loaderMsg:"Loading..."};var b=function(e){var t=e.title,c=e.icon,s=Object(n.a)(e,["title","icon"]);return Object(r.jsxs)(a.a,o(o({variant:"outline-primary",className:"d-flex align-items-center justify-content-between w-100 social-btn px-3 pb-sm-2 pb-0 pt-sm-1 pt-0"},s),{},{children:[Object(r.jsx)("span",{className:"social-btn-icon",children:c}),t,Object(r.jsx)("span",{})]}))};b.defaultProps={title:"My Social Button"}},Ff2n:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var s=c("zLVn");function r(e,t){if(null==e)return{};var c,r,n=Object(s.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)c=a[r],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}},"T/rR":function(e,t,c){"use strict";var s=c("wx14"),r=c("zLVn"),n=c("TSYQ"),a=c.n(n),i=c("q1tI"),l=c.n(i),o=c("vUet"),j=l.a.forwardRef((function(e,t){var c=e.bsPrefix,n=e.variant,i=e.animation,j=e.size,b=e.children,u=e.as,d=void 0===u?"div":u,O=e.className,m=Object(r.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),p=(c=Object(o.a)(c,"spinner"))+"-"+i;return l.a.createElement(d,Object(s.a)({ref:t},m,{className:a()(O,p,j&&p+"-"+j,n&&"text-"+n)}),b)}));j.displayName="Spinner",t.a=j},cwmC:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/escolha-registro",function(){return c("g0X6")}])},g0X6:function(e,t,c){"use strict";c.r(t);var s=c("nKUr"),r=c("3Z9Z"),n=c("JI6e"),a=c("20a2"),i=(c("YFqc"),c("B8DE")),l=function(e){var t=e.imgUrl,c=e.btnTitle,r=e.spanText,n=e.text,a=e.onClick;return Object(s.jsxs)("div",{className:"single-choice-container",children:[Object(s.jsx)("div",{className:"img-container",children:Object(s.jsx)("img",{className:"w-100",src:t,alt:""})}),Object(s.jsxs)("h3",{className:"single-choice-header text-center",children:["Voc\xea \xe9 ",Object(s.jsx)("span",{children:r})," ",n]}),Object(s.jsx)(i.b,{onClick:a,title:c,className:"single-choice-btn py-2 w-100",size:"lg"})]})},o=c("hor7"),j=c("gccx");t.default=function(){var e=Object(a.useRouter)();return Object(s.jsx)(o.a,{children:Object(s.jsxs)("div",{className:"section-gap",children:[Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)(j.a,{title:"Qual seu objetivo principal?"})}),Object(s.jsxs)(r.a,{className:"justify-content-center",children:[Object(s.jsx)(n.a,{lg:4,className:"mb-lg-0 mb-5",children:Object(s.jsx)(l,{btnTitle:"Sou um motorista",spanText:"MOTORISTA",text:"e quer alugar um ve\xedculo.",imgUrl:"/images/driver/driver.jpg",onClick:function(){e.push({pathname:"/registrar",query:{pessoa_cadastro_id:3}})}})}),Object(s.jsx)(n.a,{lg:{span:4,offset:1},children:Object(s.jsx)(l,{btnTitle:"Sou um fornecedor",spanText:"PROPRIET\xc1RIO",text:"de um ve\xedculo e quer fornecerpara algu\xe9m.",imgUrl:"/images/owner/owner.jpg",onClick:function(){e.push({pathname:"/registrar",query:{pessoa_cadastro_id:2}})}})})]})]})})}},gccx:function(e,t,c){"use strict";var s=c("nKUr");t.a=function(e){var t=e.title;return Object(s.jsx)("h3",{className:"section-title",children:t})}},hor7:function(e,t,c){"use strict";var s=c("nKUr"),r=c("o0o1"),n=c.n(r),a=c("HaE+"),i=c("q1tI"),l=c("20a2"),o=c("6ctO"),j=c("+YzT"),b=c("B8DE"),u=function(){var e=Object(l.useRouter)();return Object(s.jsxs)(o.a,{collapseOnSelect:!0,expand:"lg",className:"w-100 border-bottom mb-3",children:[Object(s.jsx)(o.a.Brand,{href:"/",children:Object(s.jsx)("img",{src:"/images/logo.png"})}),Object(s.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(s.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",children:Object(s.jsxs)(j.a,{className:"ml-lg-auto align-items-center",children:[Object(s.jsxs)(j.a.Link,{onClick:function(){e.push({pathname:"/registrar",query:{pessoa_cadastro_id:2}})},className:"d-flex flex-column text-text-center mx-lg-5",children:[Object(s.jsx)("span",{className:"text-dark",children:"SOU PROPRIET\xc1RIO"}),Object(s.jsx)("span",{className:"text-primary font-weight-bold",children:"QUERO FORNECER"})]}),Object(s.jsxs)(j.a.Link,{onClick:function(){e.push({pathname:"/registrar",query:{pessoa_cadastro_id:3}})},className:"d-flex flex-column text-text-center mx-lg-5",children:[Object(s.jsx)("span",{className:"text-dark",children:"SOU MOTORISTA"}),Object(s.jsx)("span",{className:"text-primary font-weight-bold",children:"QUERO ALUGAR"})]}),Object(s.jsx)(j.a.Link,{href:"/login",children:Object(s.jsx)(b.b,{variant:"outline-primary",title:"Login",className:"px-5 font-weight-bold"})})]})})]})},d=c("7vrA"),O=c("3Z9Z"),m=c("JI6e"),p=c("ma3e"),x=c("Tgqd"),f=c("33Fu"),h=function(){return Object(s.jsx)("div",{className:"public-footer py-3",children:Object(s.jsx)(d.a,{children:Object(s.jsxs)(O.a,{className:"justify-content-center align-items-center",children:[Object(s.jsxs)(m.a,{sm:"4",className:"public-footer__left",children:[Object(s.jsx)("p",{className:"public-footer__title",children:"XD"}),Object(s.jsx)("p",{className:"public-footer__tag",children:"\xa9 2021 GAV - Todos os direitos reservados."})]}),Object(s.jsxs)(m.a,{sm:"2",className:"public-footer__middle",children:[Object(s.jsx)("p",{children:"Sobre"}),Object(s.jsx)("p",{children:"Contato"}),Object(s.jsx)("p",{children:"Termo de Uso"})]}),Object(s.jsxs)(m.a,{sm:"2",children:[Object(s.jsxs)("div",{className:"public-footer__social",children:[Object(s.jsx)(p.d,{className:"public-footer__social-icon"}),Object(s.jsx)("p",{children:"Facebook"})]}),Object(s.jsxs)("div",{className:"public-footer__social",children:[Object(s.jsx)(x.b,{className:"public-footer__social-icon"}),Object(s.jsx)("p",{children:"Instagram"})]}),Object(s.jsxs)("div",{className:"public-footer__social",children:[Object(s.jsx)(f.d,{className:"public-footer__social-icon mr-sm-2"}),Object(s.jsx)("p",{children:"Twitter"})]})]}),Object(s.jsxs)(m.a,{lg:"4",className:"public-footer__right mt-sm-4 mt-lg-0  offset-sm-2 offset-lg-0",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Subscribe to our newsletter"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Email Address","aria-label":"Recipient's username","aria-describedby":"basic-addon2"})]}),Object(s.jsx)("button",{children:Object(s.jsx)("span",{children:"ok"})})]})]})})})},g=c("nGE6"),v=c("orSM");t.a=function(e){var t=e.children,c=Object(i.useState)(null),r=c[0],l=c[1];Object(i.useEffect)((function(){o()}),[]);var o=function(){var e=Object(a.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.getSession)();case 2:t=e.sent,console.log("session",t),l(t&&t.access_token);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(d.a,{children:[r?Object(s.jsx)(v.a,{}):Object(s.jsx)(u,{}),Object(s.jsx)("main",{style:{minHeight:"calc(100vh - 253px)"},children:t})]}),Object(s.jsx)(h,{})]})}}},[["cwmC",0,1,5,8,11,10,2,3,4,6,9]]]);