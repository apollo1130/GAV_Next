_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"+pvy":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return i}));var r="LOGIN_REQUEST",a="LOGIN_SUCCESS",c="LOGIN_FAIL",o="REGISTER_REQUEST",s="REGISTER_SUCCESS",i="REGISTER_FAIL"},Ajgj:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("o0o1"),a=n.n(r),c=n("HaE+"),o=n("rOcY"),s=(n("+pvy"),n("ZPNs"),n("nGE6")),i=n("vDqi"),l=n.n(i),u=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.getSession)();case 3:if(!(t=e.sent)){e.next=11;break}return n=t.access_token,e.next=8,l.a.get("".concat(o.a.baseUrl,"/api/me"),{headers:{Authorization:"Bearer ".concat(n),Accept:"application/json"}});case 8:return r=e.sent,c=r.data,e.abrupt("return",c);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},B8DE:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return b}));var r=n("rePB"),a=n("nKUr"),c=n("Ff2n"),o=n("cWnB"),s=n("T/rR");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=e.title,n=e.loading,r=e.size,i=e.loaderMsg,u=Object(c.a)(e,["title","loading","size","loaderMsg"]);return Object(a.jsxs)(o.a,l(l({},u),{},{children:[t,n&&Object(a.jsx)(s.a,{className:"ml-3 mb-1",animation:"border",role:"status",size:r,children:Object(a.jsx)("span",{className:"sr-only",children:"".concat(i)})})]}))};u.defaultProps={title:"My Button",size:"sm",variant:"primary",loaderMsg:"Loading..."};var b=function(e){var t=e.title,n=e.icon,r=Object(c.a)(e,["title","icon"]);return Object(a.jsxs)(o.a,l(l({variant:"outline-primary",className:"d-flex align-items-center justify-content-between w-100 social-btn px-3 pb-sm-2 pb-0 pt-sm-1 pt-0"},r),{},{children:[Object(a.jsx)("span",{className:"social-btn-icon",children:n}),t,Object(a.jsx)("span",{})]}))};b.defaultProps={title:"My Social Button"}},laF5:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var r=n("rePB"),a=n("Ff2n"),c=n("nKUr");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=function(e){var t=e.label,n=e.type,r=e.name,a=e.value,o=e.onChange;return Object(c.jsxs)("div",{className:"auth-input-container",children:[Object(c.jsx)("input",{autoComplete:"off",name:r,type:n,required:!0,value:a,onChange:function(e){return o(e)}}),Object(c.jsx)("label",{htmlFor:"text",className:"auth-input-label-container",children:Object(c.jsx)("span",{className:"auth-input-label-name",children:t})})]})};i.defaultProps={type:"text"};var l=function(e){var t=e.label,n=e.type,r=e.value,o=e.name,i=e.handleOwner,l=Object(a.a)(e,["label","type","value","name","handleOwner"]);return Object(c.jsxs)("div",{className:"reg-form-input d-xl-flex justify-content-between",children:[Object(c.jsx)("label",{className:"d-lg-inline-block d-block",children:t}),Object(c.jsx)("input",s({type:n,value:r,name:o,onChange:function(e){return i(e)}},l))]})};l.defaultProps={type:"text"}},pqMH:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("yfTL")}])},yfTL:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("o0o1"),c=n.n(a),o=n("HaE+"),s=n("B8DE"),i=n("laF5"),l=n("FGyW"),u=n("20a2"),b=n("29yR"),j=n("+jxT"),f=n("ma3e"),p=n("YFqc"),d=n.n(p),m=n("q1tI"),O=n("2v50"),g=n("nGE6"),h=n("Ajgj");function y(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,c=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw c}}}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e=Object(u.useRouter)(),t=Object(m.useState)(""),n=t[0],a=t[1],p=Object(m.useState)(""),x=p[0],v=p[1],w=Object(m.useState)(!0),N=w[0],E=w[1],S=Object(m.useState)(!1),P=S[0],_=S[1],k=Object(m.useState)(""),C=(k[0],k[1],function(e){"username"===e.target.name?a(e.target.value):"password"===e.target.name&&v(e.target.value)}),I=function(e){console.log(e.target.name),void 0!==e.target.name&&Object(g.signIn)(e.target.name)};return Object(m.useEffect)(Object(o.a)(c.a.mark((function t(){var n,r,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=new URLSearchParams(window.location.search),r=y(n);try{for(r.s();!(a=r.n()).done;)a.value[0]}catch(c){r.e(c)}finally{r.f()}return _(!0),t.next=6,Object(h.a)();case 6:o=t.sent,console.log("me data",o),o&&(2===o.pessoa_cadastro_id&&e.push("/registrar-fornecedor-form"),3===o.pessoa_cadastro_id&&e.push("/registrar-motorista-form")),_(!1);case 10:case"end":return t.stop()}}),t)}))),[]),Object(r.jsxs)("div",{className:"login-area text-center",children:[Object(r.jsx)(l.a,{style:{zIndex:99999}}),Object(r.jsxs)("div",{className:"login-outer",children:[Object(r.jsx)("div",{className:"login-logo mb-4",children:Object(r.jsx)(d.a,{href:"/",children:Object(r.jsx)("img",{className:"cursor-pointer",src:"/images/logo.png",alt:""})})}),Object(r.jsx)("div",{className:"login-form",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_(!0);try{Object(g.signIn)("credentials",{username:n,password:x}).then((function(e){console.log("data",e)})).catch((function(e){Object(O.a)("error",e),_(!1)}))}catch(t){Object(O.a)("error",t),_(!1)}},children:[Object(r.jsxs)("div",{className:"mr-4",children:[Object(r.jsx)(i.a,{required:!0,type:"email",label:"Email",name:"username",value:n,onChange:C}),Object(r.jsx)(i.a,{required:!0,type:N?"password":"text",label:"Senha",name:"password",value:x,onChange:C})]}),Object(r.jsx)("div",{className:"login-eye-icon d-flex justify-content-end",children:N?Object(r.jsx)(f.b,{onClick:function(){return E(!N)},className:"mb-3",size:"20"}):Object(r.jsx)(f.c,{onClick:function(){return E(!N)},className:"mb-3",size:"20"})}),Object(r.jsxs)("p",{className:"login-forget d-flex justify-content-center align-items-center",children:[Object(r.jsx)(f.e,{className:"mr-3"}),"Esqueceu sua senha?"]}),Object(r.jsx)("div",{className:"mx-3 mt-3",children:Object(r.jsx)(s.b,{loading:P,title:"Entrar",type:"submit",className:"w-100 py-lg-2 py-1 login-btn"})})]})}),Object(r.jsxs)("div",{className:"login-footer",children:[Object(r.jsx)("p",{className:"login-text-left text-left pt-4",children:"Ou entre com"}),Object(r.jsx)("div",{className:"mx-3 mt-3",children:Object(r.jsx)(s.a,{title:"Google",icon:Object(r.jsx)(b.a,{}),name:"google",onClick:I})}),Object(r.jsx)("div",{className:"mx-3 mt-3",children:Object(r.jsx)(s.a,{title:"Facebook",icon:Object(r.jsx)(j.a,{}),name:"facebook",onClick:I})}),Object(r.jsxs)("p",{className:"login-bottom-text",children:["N\xe3o tem uma conta?",Object(r.jsx)(d.a,{href:"/escolha-registro",children:Object(r.jsx)("span",{className:"cursor-pointer",children:" Cadastre-se"})})]})]})]})]})}}},[["pqMH",0,1,5,12,16,19,2,3,4,7,13]]]);