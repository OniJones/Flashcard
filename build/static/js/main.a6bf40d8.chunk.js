(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{33:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(17),s=c.n(a),i=c(6),d=c(5),b=c(0);var o=function(){return Object(b.jsx)("header",{className:"jumbotron bg-dark",children:Object(b.jsxs)("div",{className:"container text-white",children:[Object(b.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(b.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})};var l=function(){return Object(b.jsx)("div",{className:"NotFound",children:Object(b.jsx)("h1",{children:"Not Found"})})},j=c(2),u=c(4),O=c(3),h=c(18),p=["cards"],m=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"http://localhost:8080",x=new Headers;function f(e){e.cards;return Object(h.a)(e,p)}function v(e,t,c){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(Object(j.a)().mark((function e(t,c,r){var n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((n=e.sent).status<200||n.status>399)){e.next=6;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 6:if(204!==n.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,n.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(r));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function N(e){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(Object(j.a)().mark((function e(t){var c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(m,"/decks?_embed=cards"),e.next=3,v(c,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(Object(j.a)().mark((function e(t,c){var r,n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(m,"/decks"),n={method:"POST",headers:x,body:JSON.stringify(f(t)),signal:c},e.next=4,v(r,n,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(Object(j.a)().mark((function e(t,c){var r;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(m,"/decks/").concat(t,"?_embed=cards"),e.next=3,v(r,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(Object(j.a)().mark((function e(t,c){var r,n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(m,"/decks/").concat(t.id,"?_embed=cards"),n={method:"PUT",headers:x,body:JSON.stringify(f(t)),signal:c},e.next=4,v(r,n,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(Object(j.a)().mark((function e(t,c){var r,n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(m,"/decks/").concat(t),n={method:"DELETE",signal:c},e.next=4,v(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t,c){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(Object(j.a)().mark((function e(t,c,r){var n,a;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/cards"),c.deckId=Number(t),a={method:"POST",headers:x,body:JSON.stringify(c),signal:r},e.next=5,v(n,a,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return H.apply(this,arguments)}function H(){return(H=Object(u.a)(Object(j.a)().mark((function e(t,c){var r;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(m,"/cards/").concat(t),e.next=3,v(r,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return B.apply(this,arguments)}function B(){return(B=Object(u.a)(Object(j.a)().mark((function e(t,c){var r,n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(m,"/cards/").concat(t.id),n={method:"PUT",headers:x,body:JSON.stringify(t)},e.next=4,v(r,n,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(u.a)(Object(j.a)().mark((function e(t,c){var r,n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(m,"/cards/").concat(t),n={method:"DELETE",signal:c},e.next=4,v(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}x.append("Content-Type","application/json");var L=function(e){var t=e.deck,c=Object(i.f)();function r(){return(r=Object(u.a)(Object(j.a)().mark((function e(){var r;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=new AbortController,!window.confirm("Delete this deck?\n\nYou will not be able to recover it.")){e.next=5;break}return e.next=4,I(t.id,r.signal);case 4:c.push("/");case 5:return e.abrupt("return",(function(){return r.abort()}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)("div",{className:"card mb-5",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:t.name}),Object(b.jsxs)("h6",{className:"card-subtitle mb-2 text-muted",children:[t.cards.length," cards"]}),Object(b.jsx)("p",{className:"card-text",style:{flexShrink:1},children:t.description}),Object(b.jsx)(O.b,{to:"/decks/".concat(t.id),className:"card-link",children:Object(b.jsx)("button",{className:"btn btn-secondary",children:"View"})}),Object(b.jsx)(O.b,{to:"/decks/".concat(t.id,"/study"),className:"card-link",children:Object(b.jsx)("button",{className:"btn btn-primary",children:"Study"})}),Object(b.jsx)("button",{className:"btn btn-danger ml-5",onClick:function(){return r.apply(this,arguments)},children:"Delete"})]})})};function R(e){var t=e.decks,c=e.setDecks;Object(r.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(u.a)(Object(j.a)().mark((function t(){var r;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e.signal);case 2:r=t.sent,c(r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[c]);var n=t.map((function(e,t){return Object(b.jsx)(L,{deck:e},t)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"actions",children:Object(b.jsx)(O.b,{to:"/decks/new",children:Object(b.jsxs)("button",{className:"btn btn-secondary",children:[Object(b.jsx)("span",{className:"oi oi-plus mr-2"}),"Create Deck"]})})}),Object(b.jsx)("div",{children:n})]})}function U(e){var t=e.card,c=Object(i.f)(),r=Object(i.h)().url,n=t.id;return Object(b.jsx)("main",{children:Object(b.jsxs)("section",{className:"card",children:[Object(b.jsxs)("div",{className:"container mb-5",children:[Object(b.jsx)("p",{className:"card-text",children:t.front}),Object(b.jsx)("p",{children:t.back})]}),Object(b.jsxs)("div",{className:"d-flex mb-3",children:[Object(b.jsx)(O.b,{to:"".concat(r,"/cards/").concat(n,"/edit"),children:Object(b.jsx)("button",{type:"button",className:"btn btn-secondary mx-3",children:"Edit"})}),Object(b.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){var e=new AbortController;window.confirm("Delete this card?\n\nYou will not be able to recover it.")?function(e,t){return J.apply(this,arguments)}(n,e.signal).then(c.go("0")):c.go("0")},children:"Delete"})]})]})})}function Y(e){var t=e.cards,c=e.setCards,n=Object(r.useState)([]),a=Object(d.a)(n,2),s=a[0],o=a[1],l=Object(i.g)().deckId,h=Object(i.f)();Object(r.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(u.a)(Object(j.a)().mark((function t(){var r;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(l,e.signal);case 2:r=t.sent,o(r),c(r.cards);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){return e.abort()}}),[l,c]);var p=t.map((function(e,t){return Object(b.jsx)(U,{card:e,deckId:l,selectedDeck:s},t)}));return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:s.name})]})}),Object(b.jsx)("div",{className:"card border-0",style:{width:"50rem"},children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h4",{className:"card-title",children:s.name}),Object(b.jsx)("p",{className:"card-text",children:s.description}),Object(b.jsx)(O.b,{to:"/decks/".concat(l,"/edit"),className:"card-link",children:Object(b.jsx)("button",{className:"btn btn-secondary",children:"Edit"})}),Object(b.jsx)(O.b,{to:"/decks/".concat(l,"/study"),className:"card-link",children:Object(b.jsx)("button",{className:"btn btn-primary",children:"Study"})}),Object(b.jsx)(O.b,{to:"/decks/".concat(l,"/cards/new"),className:"card-link",children:Object(b.jsx)("button",{className:"btn btn-primary",children:"Add Cards"})}),Object(b.jsx)("button",{className:"btn btn-danger ml-3",onClick:function(){var e=new AbortController;window.confirm("Delete this deck?\n\nYou will not be able to recover it.")?I(l,e.signal).then(h.push("/")):h.go("/")},children:"Delete"})]})}),Object(b.jsx)("h3",{children:"Cards"}),p]})})}function K(e){var t=e.cards,c=Object(i.g)().deckId;return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h3",{children:"Not Enough Cards"}),Object(b.jsxs)("p",{children:["You need at least 3 cards to study, there are ",t.length," in this deck."]})]})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)(O.b,{to:"/decks/".concat(c,"/cards/new"),children:Object(b.jsx)("button",{type:"button",className:"btn btn primary",children:"Add Cards"})})})})]})}function W(e){var t=e.selectedDeck.cards,c=Object(r.useState)(0),n=Object(d.a)(c,2),a=n[0],s=n[1],o=Object(r.useState)(!0),l=Object(d.a)(o,2),j=l[0],u=l[1],O=Object(i.f)();return t.length<=2?Object(b.jsx)(K,{cards:t}):Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"card",style:{width:"45rem"},children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("h5",{className:"card-title",children:["Card ",a+1," of ",t.length]}),Object(b.jsx)("p",{className:"card-text",children:j?t[a].front:t[a].back}),Object(b.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(){u(!j)},children:"Flip"}),j?null:Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){a<t.length-1?(s(a+1),u(!0)):window.confirm("Restart cards?\n\n Click 'Cancel' to return to Home Page")?(s(0),u(!0)):O.push("/")},children:"Next"})]})})})}function V(){var e=Object(r.useState)({cards:[]}),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(i.g)().deckId;return Object(r.useEffect)((function(){var e=new AbortController;C(a,e.signal).then(n)}),[a]),c.id?c.cards.length<3?Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{children:[Object(b.jsx)("span",{children:"Study"}),":",Object(b.jsx)("span",{children:c.name})]}),Object(b.jsx)("p",{children:"Not Enough Cards"}),Object(b.jsx)(O.b,{to:"/decks/".concat(a,"/cards/new"),children:Object(b.jsx)("button",{type:"button",className:"btn btn-primary",children:"Add Cards"})})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/decks/".concat(a),children:c.name})}),Object(b.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Study"})]})}),Object(b.jsxs)("h1",{children:["Study: ",c.name]}),Object(b.jsx)(W,{selectedDeck:c})]}):Object(b.jsx)("p",{children:"Loading..."})}function M(e){var t=e.editDesc,c=void 0===t?"":t,n=e.editName,a=void 0===n?"":n,s=e.editId,o=void 0===s?"":s,l=e.isNew,O=Object(r.useState)(""),h=Object(d.a)(O,2),p=h[0],m=h[1],x=Object(r.useState)(""),f=Object(d.a)(x,2),v=f[0],k=f[1],N={name:p,description:v},w={name:p,description:v,id:o},g=Object(i.f)();Object(r.useEffect)((function(){m(a),k(c)}),[a,c]);var C=function(){var e=Object(u.a)(Object(j.a)().mark((function e(t){var c,r;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,y(N);case 3:c=e.sent,r=c.id,g.push("/decks/".concat(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(Object(j.a)().mark((function e(t){var c,r;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,D(w);case 3:c=e.sent,r=c.id,g.push("/decks/".concat(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{className:"form-group",onSubmit:l?C:S,children:[Object(b.jsx)("label",{className:"col-form-label",htmlFor:"deckName",children:"Name"}),Object(b.jsx)("input",{id:"deckName",type:"text",name:"name",onChange:function(e){return m(e.target.value)},className:"form-control",value:p,placeholder:"Deck Name"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"deckDescription",children:"Description"}),Object(b.jsx)("textarea",{id:"deckDescription",name:"description",onChange:function(e){return k(e.target.value)},className:"form-control",value:v,rows:"3",placeholder:"Deck Description"}),Object(b.jsx)("br",{}),Object(b.jsxs)("button",{className:"btn btn-secondary",onClick:function(e){e.preventDefault(),g.go(-1)},children:["Cancel"," "]}),Object(b.jsx)("button",{className:"btn btn-primary ml-2",type:"submit",children:"Submit"})]})})}function q(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create Deck"})]})}),Object(b.jsx)(M,{isNew:!0})]})}function z(){var e=Object(i.g)().deckId,t=Object(r.useState)({}),c=Object(d.a)(t,2),n=c[0],a=c[1];return Object(r.useEffect)((function(){var t=new AbortController;function c(){return(c=Object(u.a)(Object(j.a)().mark((function c(){var r;return Object(j.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,C(e,t.signal);case 2:r=c.sent,a(r);case 4:case"end":return c.stop()}}),c)})))).apply(this,arguments)}!function(){c.apply(this,arguments)}()}),[e]),Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit Deck"})]})}),Object(b.jsx)(M,{editDesc:n.description,editName:n.name,editId:e,isNew:!1})]})}function G(e){var t=e.editFront,c=void 0===t?"":t,n=e.editBack,a=void 0===n?"":n,s=e.deckId,o=e.cardId,l=e.isNew,O=Object(r.useState)(""),h=Object(d.a)(O,2),p=h[0],m=h[1],x=Object(r.useState)(""),f=Object(d.a)(x,2),v=f[0],k=f[1],N={front:p,back:v},w={front:p,back:v,id:o,deckId:Number(s)},y=Object(i.f)();Object(r.useEffect)((function(){m(c),k(a)}),[c,a]);var g=function(){var e=Object(u.a)(Object(j.a)().mark((function e(t){var c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,T(s,N);case 3:c=e.sent,m(""),k(""),console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(Object(j.a)().mark((function e(t){var c;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(w),e.next=4,P(w);case 4:c=e.sent,console.log(c),y.push("/decks/".concat(s));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"",children:Object(b.jsxs)("form",{onSubmit:l?g:C,children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("label",{htmlFor:"front",className:"form-label ml-3",children:["Front",Object(b.jsx)("textarea",{className:"form-control",rows:"5",cols:"50",id:"front",type:"text",name:"front",onChange:function(e){return m(e.target.value)},value:p,placeholder:"Front Side of Card"})]})}),Object(b.jsxs)("label",{htmlFor:"back",className:"form-label",children:["Back",Object(b.jsx)("textarea",{className:"form-control",rows:"5",cols:"50",id:"back",type:"text",name:"back",onChange:function(e){return k(e.target.value)},value:v,placeholder:"Back Side of Card"})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-secondary ml-3",onClick:function(e){e.preventDefault(),y.go(-1)},children:l?"Done":"Cancel"}),Object(b.jsx)("button",{type:"submit",className:"btn btn-primary ml-2",children:l?"Submit":"Save"})]})]})})}function Q(){var e=Object(i.g)().deckId,t=Object(r.useState)({}),c=Object(d.a)(t,2),n=c[0],a=c[1];return Object(r.useEffect)((function(){var t=new AbortController;function c(){return(c=Object(u.a)(Object(j.a)().mark((function c(){var r;return Object(j.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,C(e,t.signal);case 2:r=c.sent,a(r);case 4:case"end":return c.stop()}}),c)})))).apply(this,arguments)}!function(){c.apply(this,arguments)}()}),[e]),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"row col",children:Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/decks/".concat(e),children:n.name})}),Object(b.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Add Card"})]})})}),Object(b.jsxs)("h2",{children:[n.name,": Add Card"]}),Object(b.jsx)(G,{deckId:e,isNew:!0})]})}function X(){var e=Object(i.g)(),t=e.deckId,c=e.cardId,n=Object(r.useState)([]),a=Object(d.a)(n,2),s=a[0],o=a[1],l=Object(r.useState)([]),h=Object(d.a)(l,2),p=h[0],m=h[1];return Object(r.useEffect)((function(){var e=new AbortController;function c(){return(c=Object(u.a)(Object(j.a)().mark((function c(){var r;return Object(j.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,C(t,e.signal);case 2:r=c.sent,o(r);case 4:case"end":return c.stop()}}),c)})))).apply(this,arguments)}!function(){c.apply(this,arguments)}()}),[t]),Object(r.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(u.a)(Object(j.a)().mark((function t(){var r;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(c,e.signal);case 2:r=t.sent,m(r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[c]),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"row col",children:Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(O.b,{to:"/decks/".concat(t),children:s.name})}),Object(b.jsxs)("li",{className:"breadcrumb-item active","aria-current":"page",children:["Edit Card ",c]})]})})}),Object(b.jsx)("h2",{children:"Edit Card"}),Object(b.jsx)(G,{deckId:t,editFront:p.front,editBack:p.back,cardId:c,isNew:!1})]})}var Z=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),j=s[0],u=s[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(o,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{exact:!0,path:"/decks/new",children:Object(b.jsx)(q,{})}),Object(b.jsx)(i.a,{exact:!0,path:"/decks/:deckId",children:Object(b.jsx)(Y,{cards:j,setCards:u})}),Object(b.jsx)(i.a,{exact:!0,path:"/decks/:deckId/edit",children:Object(b.jsx)(z,{})}),Object(b.jsx)(i.a,{exact:!0,path:"/decks/:deckId/study",children:Object(b.jsx)(V,{cards:j,setCards:u})}),Object(b.jsx)(i.a,{path:"/decks/:deckId/cards/new",children:Object(b.jsx)(Q,{})}),Object(b.jsx)(i.a,{path:"/decks/:deckId/cards/:cardId/edit",children:Object(b.jsx)(X,{})}),Object(b.jsx)(i.a,{exact:!0,path:"/",children:Object(b.jsx)(R,{decks:c,setDecks:n})}),Object(b.jsx)(i.a,{children:Object(b.jsx)(l,{})})]})})]})};var $=function(){return Object(b.jsx)("div",{className:"app-routes",children:Object(b.jsx)(i.c,{children:Object(b.jsx)(i.a,{path:"/",children:Object(b.jsx)(Z,{})})})})};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O.a,{children:Object(b.jsx)($,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.a6bf40d8.chunk.js.map