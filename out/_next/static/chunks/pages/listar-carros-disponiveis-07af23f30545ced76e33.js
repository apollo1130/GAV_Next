_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{nADC:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),c=n("o0o1"),s=n.n(c),r=n("HaE+"),i=n("q1tI"),l=n("3Z9Z"),o=n("JI6e"),j=n("MX0m"),d=n.n(j),u=n("97+O"),h=n("Tgqd"),b=n("oOSY"),p=n.n(b),x=n("nGE6"),m=n("+NE2"),O=function(e){var t=e.car,n=Object(i.useState)({}),c=(n[0],n[1]),l=Object(i.useRef)(null);Object(i.useEffect)(Object(r.a)(s.a.mark((function e(){var n,a,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.getSession)();case 2:return n=e.sent,console.log("car = ",t),console.log(n),a=new m.a.User({id:1124,name:"Propriet\xe1rio De Carro",welcomeMessage:"Hey, how can I help?"}),e.next=8,o();case 8:r=e.sent,c(r),(i=r.getOrCreateConversation(m.a.oneOnOneId(r.me,a))).setParticipant(r.me),i.setParticipant(a),r.createInbox({selected:i}).mount(l.current);case 15:case"end":return e.stop()}}),e)}))),[]);var o=function(){var e=Object(r.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.ready;case 2:return e.next=4,Object(x.getSession)();case 4:return t=e.sent,console.log("session - ",t),n=new m.a.User({id:t.userId,name:t.name,photo:t.photo,role:"driver"}),e.abrupt("return",new m.a.Session({appId:"tEwRPl0c",me:n}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"my-panel-area__header",children:[Object(a.jsxs)("div",{className:"d-flex",children:[Object(a.jsx)("p",{children:"Antonio"}),Object(a.jsx)(p.a,{starDimension:"15px",rating:4,starSpacing:"5px",starRatedColor:"white",starHoverColor:"white",starEmptyColor:"white",changeRating:function(e){return setRating(e)},numberOfStars:5,name:"rating"})]}),Object(a.jsx)("div",{className:"d-block ml-auto my-panel-area__icon custom-dropdown",children:Object(a.jsxs)(u.a,{drop:"down",children:[Object(a.jsx)(u.a.Toggle,{id:"dropdown-basic",children:Object(a.jsx)(h.d,{})}),Object(a.jsxs)(u.a.Menu,{children:[Object(a.jsx)(u.a.Item,{href:"#/action-1",children:"Bloquear"}),Object(a.jsx)(u.a.Item,{href:"#/action-2",children:"Denunciar"}),Object(a.jsx)(u.a.Item,{href:"#/action-3",children:"Var an\xfancio"})]})]})})]}),Object(a.jsx)("div",{className:"my-3 d-flex justify-content-between",children:t&&2===t.carro_status_id&&Object(a.jsx)("button",{className:"my-panel-area__btn mr-3",children:Object(a.jsx)("p",{children:"Reservar"})})}),Object(a.jsxs)("div",{className:"jsx-1925743923 my-panel-area__chat",children:[Object(a.jsx)(d.a,{id:"1925743923",children:[".chat-container.jsx-1925743923{height:500px;}"]}),Object(a.jsx)("div",{ref:l,className:"jsx-1925743923 chat-container",children:"loading chat..."})]})]})},v=n("3Tox"),g=function(e){var t=e.car,n=e.status,c=e.driverName,s=e.colorStatus,r=e.ratingComponent,l=e.ratingNumber,o=e.title,j=e.location,d=(e.inicio,e.fim,e.hasUnderline),u=e.avatar,h=(e.value1,e.value2,e.value3,Object(i.useState)()),b=(h[0],h[1]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"single-vehicle-area",children:[Object(a.jsx)("p",{className:"text-right single-vehicle-date",children:"Data do contrato"}),Object(a.jsxs)("div",{className:"single-vehicle-container d-flex justify-content-start align-items-center",children:[Object(a.jsx)("div",{className:u?"img-container2":"img-container",children:Object(a.jsx)("img",{className:"img-fluid ".concat(u?"avatar":"image"),src:u||"/images/home/vehicles/sedan.png"})}),Object(a.jsxs)("div",{className:j?"d-flex":"d-flex p-2 pl-md-5 pl-4",children:[Object(a.jsxs)("div",{className:"single-vehicle-title",children:[Object(a.jsx)("p",{children:"Modelo"}),Object(a.jsx)("p",{children:"Placa"}),Object(a.jsx)("p",{children:"Ano"})]}),Object(a.jsxs)("div",{className:"single-vehicle-value",children:[t&&t.modelo&&Object(a.jsx)("p",{children:t.modelo.descricao}),t&&t.placa&&Object(a.jsx)("p",{children:t.placa}),t&&t.ano&&Object(a.jsx)("p",{children:t.ano})]})]}),Object(a.jsx)("div",{className:"",children:r?Object(a.jsx)("div",{className:"pl-5",children:Object(a.jsx)(p.a,{starDimension:"25px",rating:l,starSpacing:"4px",starRatedColor:"#f6bf00",starHoverColor:"#f6bf00",starEmptyColor:"white",changeRating:function(e){return b(e)},numberOfStars:5,name:"rating"})}):o?Object(a.jsx)("p",{className:"single-vehicle-contents single-vehicle-contents--green pl-5",children:"Alugando no momento"}):Object(a.jsxs)("div",{className:"p-4 pt-md-5 pt-0",children:[Object(a.jsxs)("div",{className:"d-flex",children:[Object(a.jsxs)("div",{className:"single-vehicle-title",children:[Object(a.jsx)("p",{children:"Semana"}),Object(a.jsx)("p",{children:"Status"})]}),Object(a.jsxs)("div",{className:"single-vehicle-value",children:[Object(a.jsx)("p",{children:"NEED DATA"}),s?Object(a.jsx)("span",{className:"rent"==n?"single-vehicle-contents single-vehicle-contents--green":"available"==n?"single-vehicle-contents single-vehicle-contents--yellow":"single-vehicle-contents",children:"rent"==n?"Alugadu":"available"==n?"Dispon\xedvel":"Em manuten\xe7\xe3o"}):Object(a.jsx)("p",{children:t&&t.carro_status&&t.carro_status.descricao||""})]})]}),c&&Object(a.jsx)("p",{className:"single-vehicle-bottom-text",children:c&&"nome do motorista"})]})})]})]}),d||Object(a.jsx)(v.a,{})]})},f=n("hOvu"),N=n("rOcY"),w=n("ZPNs"),_=n("qXW5"),y=n("2v50"),S=function(){var e=Object(r.a)(s.a.mark((function e(t,n){var a,c,r,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(x.getSession)();case 3:return a=e.sent,c="Bearer "+a.access_token,r=Object(_.a)("".concat(N.a.baseUrl,"/api/carros-disponiveis?"),t),e.next=8,w.a.get(r,!0,c);case 8:return i=e.sent,l=i.data,n(),e.abrupt("return",l);case 14:return e.prev=14,e.t0=e.catch(0),n(),Object(y.a)("error",e.t0.response&&e.t0.response.data.message||""),e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}(),E=n("FGyW"),C=n("mH5H");t.default=function(e){e.session;var t=Object(i.useState)(),n=(t[0],t[1],Object(i.useState)([])),c=n[0],j=n[1],d=Object(i.useState)(!1),u=d[0],h=d[1],b=Object(i.useState)({}),p=b[0],x=b[1];Object(i.useEffect)(Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:console.log(c);case 3:case"end":return e.stop()}}),e)}))),[]);var m=function(){var e=Object(r.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),t={per_page:15,page:1,include:"modelo, carro_status"},e.next=4,S(t,(function(){h(!1)}));case 4:(n=e.sent)&&j(n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(f.a,{children:u?Object(a.jsx)(C.a,{loading:u}):Object(a.jsxs)("div",{children:[Object(a.jsx)(E.a,{style:{zIndex:99999}}),Object(a.jsxs)(l.a,{className:"align-items-start",children:[Object(a.jsx)(o.a,{lg:6,children:c.length>0?c.map((function(e,t){return Object(a.jsx)("button",{onClick:function(){return x(e)},children:Object(a.jsx)(g,{car:e},t)})})):Object(a.jsx)("div",{children:" No cars found"})}),c.length&&Object(a.jsx)(o.a,{lg:6,className:"my-panel-area",children:Object(a.jsx)(O,{car:p})})]})]})})}},"nl/V":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listar-carros-disponiveis",function(){return n("nADC")}])}},[["nl/V",0,1,5,8,11,10,12,2,3,4,6,9,7,13,14,18]]]);