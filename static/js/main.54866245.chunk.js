(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n,a=c(7),s=c.n(a),r=c(5),l=c(6),i=c(1),o=(c(22),c(23),r.b),d=r.c,u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(n||(n={}));var h=c(0),O=function(){var e=d((function(e){return e.todos})),t=d((function(e){return e.filter})),c=t.query,a=t.status,s=o(),r=d((function(e){return e.currentTodo})),l=Object(i.useMemo)((function(){return function(e,t,c){var a=e.filter((function(e){var t=e.completed;switch(c){case n.ALL:return!0;case n.ACTIVE:return!t;case n.COMPLETED:return t;default:return!0}}));return t?a.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())})):a}(e,c,a)}),[c,a,e]);return l.length?Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:l.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"todo",className:r?"has-background-info-light":"",children:[Object(h.jsx)("td",{className:"is-vcentered",children:e.id}),Object(h.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(u(e))},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:(null===r||void 0===r?void 0:r.id)===e.id?"far fa-eye-slash":"far fa-eye"})})})})]},e.id)}))})]}):Object(h.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})},f=c(2),m={query:"",status:n.ALL},x=function(e){return{type:"filter/SELECT",payload:e}},v=function(e){return{type:"filter/QUERY",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SELECT":return Object(f.a)(Object(f.a)({},e),{},{status:t.payload});case"filter/QUERY":return Object(f.a)(Object(f.a)({},e),{},{query:t.payload});default:return e}},y=function(){var e=o(),t=d((function(e){return e.filter})),c=t.query,a=t.status;return Object(h.jsxs)("form",{className:"field has-addons",onSubmit:function(e){e.preventDefault()},children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(t){e(x(t.target.value))},children:[Object(h.jsx)("option",{value:n.ALL,children:"All"}),Object(h.jsx)("option",{value:n.ACTIVE,children:"Active"}),Object(h.jsx)("option",{value:n.COMPLETED,children:"Completed"})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(t){e(v(t.target.value))}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return e(v(""))}})})]})]})},N=(c(25),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})});function g(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var E=function(){var e=o(),t=d((function(e){return e.currentTodo})),c=Object(i.useState)(!1),n=Object(l.a)(c,2),a=n[0],s=n[1],r=Object(i.useState)(null),u=Object(l.a)(r,2),b=u[0],O=u[1];return Object(i.useEffect)((function(){var e;s(!0),null!==t&&void 0!==t&&t.userId&&(e=t.userId,g("/users/".concat(e))).then(O).finally((function(){return s(!1)}))}),[null===t||void 0===t?void 0:t.userId]),Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),a?Object(h.jsx)(N,{}):Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(h.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return e(j())}})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(h.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(h.jsx)("a",{href:"mailto:".concat(null===b||void 0===b?void 0:b.email),children:null===b||void 0===b?void 0:b.name})]})]})]})]})},T=c(11),C=function(e){return{type:"todos/SET",payload:e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?[].concat(Object(T.a)(e),Object(T.a)(t.payload)):e},S=function(){var e=o(),t=d((function(e){return e.todos})),c=d((function(e){return e.currentTodo})),n=Object(i.useState)(!1),a=Object(l.a)(n,2),s=a[0],r=a[1];return Object(i.useEffect)((function(){r(!0),g("/todos").then((function(t){return e(C(t))})).finally((function(){return r(!1)}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(y,{})}),Object(h.jsxs)("div",{className:"block",children:[s&&Object(h.jsx)(N,{}),!s&&!!t.length&&Object(h.jsx)(O,{})]})]})})}),c&&Object(h.jsx)(E,{})]})},k=c(4),w=c(13),A=c(14),I=Object(k.combineReducers)({currentTodo:b,filter:p,todos:L}),M=Object(k.createStore)(I,Object(w.composeWithDevTools)(Object(k.applyMiddleware)(A.a))),D=function(){return Object(h.jsx)(r.a,{store:M,children:Object(h.jsx)(S,{})})};s.a.render(Object(h.jsx)(D,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.54866245.chunk.js.map