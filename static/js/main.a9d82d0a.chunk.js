(this.webpackJsonpreactmyown=this.webpackJsonpreactmyown||[]).push([[0],{81:function(t,e,n){},82:function(t,e,n){},93:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),s=(n(81),n(82),n(65)),i=n(35),l=n(126),j=n(135),u=n(132),b=n(139),d=n(134),O=n(48),m=n(128),h=n(130),x=n(133),f=n(131),g=n(140),p=n(6),v=Object(l.a)({root:{maxWidth:345}}),k=function(t){var e,n=t.task,a=t.deleteTask,c=t.index,r=v();return Object(p.jsx)(g.a,{mr:3,mb:3,children:Object(p.jsxs)(m.a,{elevation:3,className:r.root,children:[Object(p.jsx)(h.a,{children:Object(p.jsxs)(f.a,{children:[Object(p.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n.label}),Object(p.jsx)(u.a,{variant:"body2",color:"textSecondary",component:"p",children:n.text})]})}),Object(p.jsxs)(x.a,{children:[Object(p.jsx)(d.a,(e={size:"small",color:"secondary",onClick:function(){return a(c)}},Object(O.a)(e,"size","small"),Object(O.a)(e,"color","secondary"),Object(O.a)(e,"children","Delete"),e)),Object(p.jsx)(d.a,{size:"small",color:"primary",children:"Go to task"})]})]})})},S=Object(l.a)({form:{maxWidth:500,marginBottom:20},formInput:{marginBottom:20},formHeader:{marginBottom:5}}),y=function(){var t=S(),e=Object(a.useState)(""),n=Object(i.a)(e,2),c=n[0],r=n[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),O=l[0],m=l[1],h=Object(a.useState)([]),x=Object(i.a)(h,2),f=x[0],g=x[1],v=Object(a.useState)(""),y=Object(i.a)(v,2),N=y[0],I=y[1],B=Object(a.useState)(""),E=Object(i.a)(B,2),T=E[0],C=E[1],w=function(t){g(f.filter((function(e,n){return n!==t})))};return Object(a.useEffect)((function(){!function(){if(null===localStorage.getItem("tasks"))localStorage.setItem("tasks",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("tasks"));g(t)}}()}),[]),Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(f))}),[f]),Object(p.jsxs)(j.a,{container:!0,children:[Object(p.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),c&&O){var e={label:c,text:O};g([].concat(Object(s.a)(f),[e])),r(""),m("")}I(c?"":"Enter your task"),C(O?"":"Enter your task text")},className:t.form,children:[Object(p.jsx)(u.a,{className:t.formHeader,variant:"h6",children:"Add your tasks"}),Object(p.jsx)(b.a,{onChange:function(t){return r(t.target.value)},value:c,className:t.formInput,variant:"outlined",label:"Enter task",error:!!N,helperText:N,fullWidth:!0}),Object(p.jsx)(b.a,{onChange:function(t){return m(t.target.value)},value:O,className:t.formInput,variant:"outlined",label:"Enter task",error:!!T,helperText:T,fullWidth:!0}),Object(p.jsx)(d.a,{type:"submit",variant:"contained",color:"primary",children:"Add"})]}),Object(p.jsx)(j.a,{container:!0,children:f.map((function(t,e){return Object(p.jsx)(k,{deleteTask:w,task:t,index:e},e)}))})]})},N=function(){return Object(p.jsx)("div",{})},I=n(136),B=n(137),E=n(138),T=n(63),C=n.n(T),w=Object(l.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)}}})),J=function(){var t=w();return Object(p.jsx)("div",{className:t.root,children:Object(p.jsx)(I.a,{position:"static",children:Object(p.jsxs)(B.a,{variant:"dense",children:[Object(p.jsx)(E.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(p.jsx)(C.a,{})}),Object(p.jsx)(u.a,{variant:"h6",color:"inherit",children:"To do list"})]})})})},F=function(t){var e=t.children;return Object(p.jsxs)("div",{children:[Object(p.jsx)(J,{}),Object(p.jsx)(j.a,{container:!0,children:Object(p.jsx)(g.a,{p:3,children:e})})]})},W=n(64),z=n(11);var D=function(){return Object(p.jsx)(W.a,{children:Object(p.jsx)(F,{children:Object(p.jsxs)(z.c,{children:[Object(p.jsx)(z.a,{exact:!0,path:"/",component:y}),Object(p.jsx)(z.a,{path:"/task/:id",component:N})]})})})},A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root")),A()}},[[93,1,2]]]);
//# sourceMappingURL=main.a9d82d0a.chunk.js.map