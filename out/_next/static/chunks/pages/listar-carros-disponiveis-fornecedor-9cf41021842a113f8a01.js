_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{BZ9q:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c}));var a="OWNER_LIST_OF_CARS_REQUEST",r="OWNER_LIST_OF_CARS_SUCCESS",c="OWNER_LIST_OF_CARS_FAIL"},Plw6:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("o0o1"),r=n.n(a),c=n("HaE+"),s=n("rOcY"),i=(n("BZ9q"),n("ZPNs")),o=n("qXW5"),l=n("nGE6"),u=n("2v50"),d=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,d,j,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l.getSession)();case 3:return a=e.sent,c="Bearer "+a.access_token,d=Object(o.a)("".concat(s.a.baseUrl,"/api/proprietario/carros?"),t),e.next=8,i.a.get(d,!0,c);case 8:return j=e.sent,p=j.data,n(),console.log("session",a),e.abrupt("return",p);case 15:return e.prev=15,e.t0=e.catch(0),n(),Object(u.a)("error",e.t0.response&&e.t0.response.data.message||""),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n){return e.apply(this,arguments)}}()},q0bg:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),r=n("o0o1"),c=n.n(r),s=n("HaE+"),i=n("q1tI"),o=n("3Z9Z"),l=n("JI6e"),u=n("MX0m"),d=n.n(u),j=n("97+O"),p=n("Tgqd"),b=n("oOSY"),h=n.n(b),O=n("nGE6"),x=n("+NE2"),v=n("6KDb"),m=n("20a2"),f=n("rOcY"),g=n("ZPNs"),_=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var a,r,s,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={valor_diaria:t,carro_id:n},e.next=4,Object(O.getSession)();case 4:return r=e.sent,s="Bearer "+r.access_token,e.next=8,g.a.post("".concat(f.a.baseUrl,"/api/alugueis"),!0,s,a);case 8:return i=e.sent,o=i.data,console.log("updated data = ",o),e.abrupt("return",o);case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}(),w=function(e){var t=e.car;console.log("car",t);var n=Object(m.useRouter)(),r=Object(i.useState)(!1),o=r[0],l=r[1],u=Object(i.useState)({}),b=(u[0],u[1]),f=Object(i.useRef)(null),g=t&&t.valor_diaria,w=t&&t.carro_status_id;Object(i.useEffect)(Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.getSession)();case 2:return e.sent,e.next=5,N();case 5:t=e.sent,b(t),t.createInbox().mount(f.current);case 9:case"end":return e.stop()}}),e)}))),[]);var N=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.ready;case 2:return e.next=4,Object(O.getSession)();case 4:return t=e.sent,console.log("session - ",t),n=new x.a.User({id:t.userId,name:t.name,photo:t.photo,role:"owner"}),e.abrupt("return",new x.a.Session({appId:"tEwRPl0c",me:n}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(g,w);case 2:t=e.sent,console.log("approved",t),t&&n.push("/meus-veiculos");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"my-panel-area__header",children:[Object(a.jsxs)("div",{className:"d-flex",children:[Object(a.jsx)("p",{children:"Antonio"}),Object(a.jsx)(h.a,{starDimension:"15px",rating:4,starSpacing:"5px",starRatedColor:"white",starHoverColor:"white",starEmptyColor:"white",changeRating:function(e){return setRating(e)},numberOfStars:5,name:"rating"})]}),Object(a.jsx)("div",{className:"d-block ml-auto my-panel-area__icon custom-dropdown",children:Object(a.jsxs)(j.a,{drop:"down",children:[Object(a.jsx)(j.a.Toggle,{id:"dropdown-basic",children:Object(a.jsx)(p.d,{})}),Object(a.jsxs)(j.a.Menu,{children:[Object(a.jsx)(j.a.Item,{href:"#/action-1",children:"Bloquear"}),Object(a.jsx)(j.a.Item,{href:"#/action-2",children:"Denunciar"}),Object(a.jsx)(j.a.Item,{href:"#/action-3",children:"Var an\xfancio"})]})]})})]}),Object(a.jsx)("div",{className:"my-3 d-flex justify-content-between",children:Object(a.jsx)("button",{onClick:function(){return l(!0)},className:"my-panel-area__btn mr-3",children:Object(a.jsx)("p",{children:"Aprovar"})})}),Object(a.jsxs)("div",{className:"jsx-1925743923 my-panel-area__chat",children:[Object(a.jsx)(d.a,{id:"1925743923",children:[".chat-container.jsx-1925743923{height:500px;}"]}),Object(a.jsx)("div",{ref:f,className:"jsx-1925743923 chat-container",children:"loading chat..."})]}),Object(a.jsx)(v.a,{twoBtn:!0,aprovar:!0,show:o,onclick:function(){return S()},onClose:function(){return l(!1)},title:"Tem certeza de que deseja aprovar isso. Essa a\xe7\xe3o n\xe3o pode ser desfeita!"})]})},N=n("3Tox"),S=function(e){var t=e.car,n=e.status,r=e.driverName,c=e.colorStatus,s=e.ratingComponent,o=e.ratingNumber,l=e.title,u=e.location,d=(e.inicio,e.fim,e.hasUnderline),j=e.avatar,p=(e.value1,e.value2,e.value3,Object(i.useState)()),b=(p[0],p[1]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"single-vehicle-area",children:[Object(a.jsx)("p",{className:"text-right single-vehicle-date",children:"Data do contrato"}),Object(a.jsxs)("div",{className:"single-vehicle-container d-flex justify-content-start align-items-center",children:[Object(a.jsx)("div",{className:j?"img-container2":"img-container",children:Object(a.jsx)("img",{className:"img-fluid ".concat(j?"avatar":"image"),src:j||"/images/home/vehicles/sedan.png"})}),Object(a.jsxs)("div",{className:u?"d-flex":"d-flex p-2 pl-md-5 pl-4",children:[Object(a.jsxs)("div",{className:"single-vehicle-title",children:[Object(a.jsx)("p",{children:"Modelo"}),Object(a.jsx)("p",{children:"Placa"}),Object(a.jsx)("p",{children:"Ano"})]}),Object(a.jsxs)("div",{className:"single-vehicle-value",children:[t&&t.modelo&&Object(a.jsx)("p",{children:t.modelo.descricao}),t&&t.placa&&Object(a.jsx)("p",{children:t.placa}),t&&t.ano&&Object(a.jsx)("p",{children:t.ano})]})]}),Object(a.jsx)("div",{className:"",children:s?Object(a.jsx)("div",{className:"pl-5",children:Object(a.jsx)(h.a,{starDimension:"25px",rating:o,starSpacing:"4px",starRatedColor:"#f6bf00",starHoverColor:"#f6bf00",starEmptyColor:"white",changeRating:function(e){return b(e)},numberOfStars:5,name:"rating"})}):l?Object(a.jsx)("p",{className:"single-vehicle-contents single-vehicle-contents--green pl-5",children:"Alugando no momento"}):Object(a.jsxs)("div",{className:"p-4 pt-md-5 pt-0",children:[Object(a.jsxs)("div",{className:"d-flex",children:[Object(a.jsxs)("div",{className:"single-vehicle-title",children:[Object(a.jsx)("p",{children:"Semana"}),Object(a.jsx)("p",{children:"Status"})]}),Object(a.jsxs)("div",{className:"single-vehicle-value",children:[Object(a.jsx)("p",{children:"NEED DATA"}),c?Object(a.jsx)("span",{className:"rent"==n?"single-vehicle-contents single-vehicle-contents--green":"available"==n?"single-vehicle-contents single-vehicle-contents--yellow":"single-vehicle-contents",children:"rent"==n?"Alugadu":"available"==n?"Dispon\xedvel":"Em manuten\xe7\xe3o"}):Object(a.jsx)("p",{children:t&&t.carro_status&&t.carro_status.descricao||""})]})]}),r&&Object(a.jsx)("p",{className:"single-vehicle-bottom-text",children:r&&"nome do motorista"})]})})]})]}),d||Object(a.jsx)(N.a,{})]})},E=n("hOvu"),y=n("Plw6"),C=n("FGyW"),k=n("mH5H");t.default=function(){var e=Object(i.useState)([]),t=e[0],n=e[1],r=Object(i.useState)(!1),u=r[0],d=r[1],j=Object(i.useState)({}),p=j[0],b=j[1];Object(i.useEffect)(Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:case"end":return e.stop()}}),e)}))),[]);var h=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),t={per_page:15,page:1,include:"modelo, carro_status"},e.next=4,Object(y.a)(t,(function(){d(!1)}));case 4:(a=e.sent)&&(n(a.data),b(a.data&&a.data.length>0&&a.data[0]));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log("singleCar",p),Object(a.jsx)(E.a,{children:u?Object(a.jsx)(k.a,{loading:u}):Object(a.jsxs)("div",{children:[Object(a.jsx)(C.a,{style:{zIndex:99999}}),Object(a.jsxs)(o.a,{className:"align-items-start",children:[Object(a.jsx)(l.a,{lg:6,children:t.length>0?t.map((function(e,t){return Object(a.jsx)("button",{onClick:function(){return b(e)},children:Object(a.jsx)(S,{car:e},t)},t)})):Object(a.jsx)("div",{children:" No cars found"})}),t.length&&Object(a.jsx)(l.a,{lg:6,className:"my-panel-area",children:Object(a.jsx)(w,{car:p})})]})]})})}},zILO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listar-carros-disponiveis-fornecedor",function(){return n("q0bg")}])}},[["zILO",0,1,5,8,11,10,12,2,3,4,6,9,7,13,14,15,18]]]);