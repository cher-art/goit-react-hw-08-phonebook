(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{19:function(e,t,n){e.exports={mainHeader:"Header_mainHeader__1kt8t",mainNav:"Header_mainNav__3k66-",singIn:"Header_singIn__3VH76",home:"Header_home__11m1C",login:"Header_login__2Bvwa",registration:"Header_registration__3HT7t",logoutButton:"Header_logoutButton__11qXn"}},20:function(e,t,n){e.exports={contactForm:"Form_contactForm__2bm6X",mainLabel:"Form_mainLabel__zNmmp",mainInput:"Form_mainInput__2j580",formBtn:"Form_formBtn__2LnlG"}},35:function(e,t,n){e.exports={contactList:"ContactList_contactList__3vTYv",contactListErr:"ContactList_contactListErr__2J27E",contactBtn:"ContactList_contactBtn__2CPHz"}},36:function(e,t,n){e.exports={title:"Login_title__2Lkbe",loginForm:"Login_loginForm__-bXJI"}},37:function(e,t,n){e.exports={title:"Registration_title__3OsdX",registrationForm:"Registration_registrationForm__2FXEI"}},49:function(e,t,n){e.exports={mainInput:"Filter_mainInput__2srJO"}},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n(16),o=n.n(r),s=n(3),i=n(4),u="/ ",l="/login",p="/registration",j=n(13),b=n(9),m=n.n(b),h=n(18),d=n(15),f=n.n(d),O="loader/on",v="loader/off",x="contact/set",g=function(e){return{type:"error/set",payload:e}},_=function(){return{type:O}},y=function(){return{type:v}},k="token/set",N="token/reset",w=function(e){return{type:k,payload:e}};f()({url:"",method:"post",header:{"Content-type":"application/json"}});var L=n(19),B=n.n(L),C=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.token})),n=Object(i.g)();return Object(c.useEffect)((function(){t?n.push(u):n.push(l)}),[t]),Object(a.jsx)("header",{className:B.a.mainHeader,children:Object(a.jsxs)("nav",{className:B.a.mainNav,children:[Object(a.jsx)(j.b,{className:B.a.home,to:u,children:"MyContacts"}),t&&Object(a.jsx)("button",{onClick:function(){e(function(e){return function(){var t=Object(h.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(_()),t.next=4,f()({url:"https://goit-phonebook-api.herokuapp.com/users/logout",method:"post",headers:{Authorization:"Bearer ".concat(e)}});case 4:t.sent,n({type:N}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(g(t.t0));case 11:return t.prev=11,n(y()),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()}(t))},className:B.a.logoutButton,children:"LOGOUT"}),Object(a.jsxs)("div",{className:B.a.singIn,children:[Object(a.jsx)(j.b,{className:B.a.registration,to:l,children:"Login"}),Object(a.jsx)(j.b,{className:B.a.login,to:p,children:"Registartion"})]})]})})},I=n(8),F=n(95),E=n(93),H="phoneBook/add",S="phoneBook/delete",D="phoneBook/setLocalStorage",A="filter/edit",J="alert/on",T="alert/off",R=function(e){return{type:S,payload:e}},X=function(e){return{type:x,payload:e}},z=function(e){return{header:{Authorization:"Bearer ".concat(e)}}},q=function(e,t){return function(){var n=Object(h.a)(m.a.mark((function n(a){var c;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(_()),n.next=4,f.a.post("https://goit-phonebook-api.herokuapp.com/contacts",e,z(t));case 4:c=n.sent,a(X(c.data)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),a(g("\u041e\u0443\u0443\u0443\u0443\u0443, \u0449\u043e\u0441\u044c \u0441\u0442\u0430\u043b\u043e\u0441\u044c =D"));case 11:return n.prev=11,a(y()),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(e){return n.apply(this,arguments)}}()},P=n(17),G=n(21),M=n(20),U=n.n(M),V={name:"",number:""},W=function(){var e=Object(c.useState)(V),t=Object(G.a)(e,2),n=t[0],r=t[1],o=n.name,i=n.number,u=Object(s.c)((function(e){return e.contacts})),l=Object(s.c)((function(e){return e.token})),p=Object(s.b)(),j=function(e){var t=e.target;r(Object(I.a)(Object(I.a)({},n),{},Object(P.a)({},t.name,t.value)))};return Object(a.jsxs)("form",{className:U.a.contactForm,onSubmit:function(e){if(e.preventDefault(),o&&i){var t={name:o,number:i};u.some((function(e){return e.name===t.name}))?p({type:J}):(p(q(t,l)),p({type:H,payload:t}),r(V))}},children:[Object(a.jsxs)("label",{className:U.a.mainLabel,children:["Name",Object(a.jsx)("input",{className:U.a.mainInput,onChange:j,name:"name",value:o})]}),Object(a.jsxs)("label",{className:U.a.mainLabel,children:["Number",Object(a.jsx)("input",{className:U.a.mainInput,onChange:j,name:"number",value:i})]}),Object(a.jsx)("button",{className:U.a.formBtn,type:"submit",children:"Add contact"})]})},Y=n(35),K=n.n(Y),Q=(n(85),function(e){var t=e.name,n=e.number,c=e.id,r=Object(s.b)();return Object(a.jsxs)("li",{className:K.a.contactList,children:[t,": ",n,Object(a.jsx)("button",{className:K.a.contactBtn,onClick:function(){var e,t;r((e=c,function(){var n=Object(h.a)(m.a.mark((function n(a){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.a.delete("https://goit-phonebook-api.herokuapp.com/contacts/".concat(e),z(t));case 3:a(R(e)),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),a(g("\u041e\u0443\u0443\u0443\u0443\u0443, \u0449\u043e\u0441\u044c \u0441\u0442\u0430\u043b\u043e\u0441\u044c =D"));case 9:return n.prev=9,a(y()),n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[0,6,9,12]])})));return function(e){return n.apply(this,arguments)}}())),r(R(c))},type:"button",children:"Delete"})]},c)}),Z=n(54),$=Object(Z.a)("filter/edit"),ee=n(49),te=n.n(ee),ne=(n(86),function(){var e=Object(s.c)((function(e){return e.filter})),t=Object(s.b)();return Object(a.jsx)("label",{children:Object(a.jsx)("input",{className:te.a.mainInput,name:"filter",type:"text",onChange:function(e){e.preventDefault();var n=e.target.value;t($(n))},value:e})})}),ae=(n(87),function(){var e=Object(s.c)((function(e){return e.contacts})),t=Object(s.c)((function(e){return e.filter})),n=Object(s.c)((function(e){return e.isAlert})),r=Object(s.c)((function(e){return e.token})),o=Object(s.b)();Object(c.useEffect)((function(){o(function(e){return function(){var t=Object(h.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(_()),t.next=4,f.a.get("https://goit-phonebook-api.herokuapp.com/contacts",z(e));case 4:a=t.sent,console.log(a),n(X(a.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(g("\u041e\u0443\u0443\u0443\u0443\u0443, \u0449\u043e\u0441\u044c \u0441\u0442\u0430\u043b\u043e\u0441\u044c =D"));case 12:return t.prev=12,n(y()),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()}());var e=localStorage.getItem("contacts"),t=JSON.parse(e);e&&(o({type:D,payload:t}),o(q(r)))}),[o]),Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(e))}),[e]);var i=function(){var n=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length>=1?n:e};return Object(a.jsxs)("div",{className:"phoneBook",children:[Object(a.jsx)(F.a,{className:"alertBox",component:"div",children:n?Object(a.jsx)(E.a,{classNames:"alert__Box",mountOnEnter:!0,unmountOnExit:!0,timeout:800,children:Object(a.jsxs)("div",{className:"alert__Box",children:[Object(a.jsx)("h2",{children:"A contact with the same name already exists!"}),Object(a.jsx)("button",{onClick:function(){o({type:T})},className:"alertButton",children:"ok"})]})}):null}),Object(a.jsx)(E.a,{in:!0,appear:!0,timeout:500,classNames:"logo",unmountOnExit:!0,children:Object(a.jsx)("h1",{className:"title",children:"PhoneBook"})}),Object(a.jsx)(E.a,{in:!0,appear:!0,timeout:500,classNames:"form",unmountOnExit:!0,children:Object(a.jsx)(W,{})}),Object(a.jsx)(E.a,{in:i().length>=1,timeout:250,classNames:"contactTitle",unmountOnExit:!0,children:Object(a.jsx)("h2",{className:"findTitle",children:"Find contacts"})}),Object(a.jsx)(E.a,{in:i().length>=1,timeout:250,classNames:"contactTitle",unmountOnExit:!0,children:Object(a.jsx)(ne,{})}),Object(a.jsx)(F.a,{component:"ul",className:"list",children:i().map((function(e){return Object(a.jsx)(E.a,{classNames:"list__item",timeout:800,children:Object(a.jsx)(Q,Object(I.a)({},e))})}))})]})}),ce=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(ae,{})})},re=n(36),oe=n.n(re),se={email:"",password:""},ie=function(){var e=Object(c.useState)(se),t=Object(G.a)(e,2),n=t[0],r=t[1],o=Object(s.b)(),i=function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(I.a)(Object(I.a)({},e),{},Object(P.a)({},n,a))}))};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:oe.a.title,children:"Login"}),Object(a.jsxs)("form",{className:oe.a.loginForm,onSubmit:function(e){var t;e.preventDefault(),o((t=n,function(){var e=Object(h.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(_()),e.next=4,f.a.post("https://goit-phonebook-api.herokuapp.com/users/login",t);case 4:a=e.sent,n(w(a.data.token)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n(g("bad request!"));case 11:return e.prev=11,n(y()),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("input",{onChange:i,type:"email",name:"email",placeholder:"email"}),Object(a.jsx)("input",{onChange:i,type:"password",name:"password",placeholder:"password"}),Object(a.jsx)("button",{type:"submit",children:"Login"}),Object(a.jsxs)("p",{children:["If you already have an account please"," ",Object(a.jsx)(j.b,{to:p,children:"Registered"})]})]})]})},ue=n(37),le=n.n(ue),pe={name:"",email:"",password:""},je=function(){var e=Object(c.useState)(pe),t=Object(G.a)(e,2),n=t[0],r=t[1],o=Object(s.b)(),i=function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(I.a)(Object(I.a)({},e),{},Object(P.a)({},n,a))}))};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:le.a.title,children:"Registration"}),Object(a.jsxs)("form",{className:le.a.registrationForm,onSubmit:function(e){var t;e.preventDefault(),o((t=n,function(){var e=Object(h.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(_()),e.next=4,f.a.post("https://goit-phonebook-api.herokuapp.com/users/signup",t);case 4:a=e.sent,console.log(a),n(w(a.data.token)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(g("bad request!"));case 12:return e.prev=12,n(y()),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("input",{onChange:i,type:"text",name:"name",placeholder:"username",value:n.name}),Object(a.jsx)("input",{onChange:i,type:"text",name:"email",placeholder:"email",value:n.email}),Object(a.jsx)("input",{onChange:i,type:"password",name:"password",placeholder:"password",value:n.password}),Object(a.jsx)("button",{type:"submit",children:"Sing UP"}),Object(a.jsxs)("p",{children:["If you already have an account please",Object(a.jsx)(j.b,{to:l,children:"login"})]})]})]})};n(88);var be=function(){var e=Object(s.c)((function(e){return e.token})),t=Object(i.g)();return Object(c.useEffect)((function(){e?t.push(u):t.push(l)}),[e]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(C,{}),Object(a.jsxs)(i.d,{children:[e?Object(a.jsx)(i.b,{exact:!0,path:u,component:ce}):Object(a.jsx)(i.b,{path:l,component:ie}),Object(a.jsx)(i.b,{path:l,component:ie}),Object(a.jsx)(i.b,{path:p,component:je}),Object(a.jsx)(i.a,{path:l})]})]})},me=n(50),he=n(5),de=n(51),fe=n(39),Oe=n(94),ve=[],xe=Object(he.combineReducers)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(fe.a)(t.payload);case H:return[].concat(Object(fe.a)(e),[Object(I.a)(Object(I.a)({},t.payload),{},{id:Object(Oe.a)()})]);case S:return e.filter((function(e){return e.id!==t.payload}));case x:return t.payload;default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return t.payload;default:return e}},isAlert:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return!0;case T:return!1;default:return e}},loader:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return!0;case v:return!1;default:return e}},token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.payload;case N:return null;default:return e}}}),ge=n(38),_e=n(52),ye=n.n(_e),ke=n(53),Ne=n.n(ke),we=n(25),Le=[Ne.a,we.a],Be={key:"token",storage:ye.a,whitelist:["token"]},Ce=he.applyMiddleware.apply(void 0,Le),Ie=Object(de.composeWithDevTools)(Ce),Fe=Object(ge.a)(Be,xe),Ee=Object(he.createStore)(Fe,Ie),He=Object(ge.b)(Ee);n(91);o.a.render(Object(a.jsx)(s.a,{store:Ee,children:Object(a.jsx)(j.a,{children:Object(a.jsx)(me.a,{loading:null,persistor:He,children:Object(a.jsx)(be,{})})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.c817b279.chunk.js.map