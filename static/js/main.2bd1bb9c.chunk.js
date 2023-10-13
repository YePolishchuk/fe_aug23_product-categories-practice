(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(6),n=c.n(s),r=(c(11),c(12),c(4)),i=c(2),l=c(3),d=c.n(l),o=(c(13),[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}]),j=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],h=c(0),b=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){return Object(i.a)(Object(i.a)({},e),{},{category:j.find((function(t){return t.id===e.categoryId}))})})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{user:o.find((function(t){return t.id===e.category.ownerId}))})})),x=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(r.a)(n,2),l=i[0],x=i[1],u=Object(a.useState)(""),m=Object(r.a)(u,2),O=m[0],f=m[1],p=b;return""!==c&&(p=p.filter((function(e){return e.user.name===c}))),""!==l&&(p=p.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}))),""!==O&&(p=p.filter((function(e){return e.category.title===O}))),Object(h.jsx)("div",{className:"section",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"title",children:"Product Categories"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(h.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",children:"All"}),o.map((function(e){return Object(h.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:d()({"is-active":e.name===c}),onClick:function(){return s(e.name)},children:e.name},e.id)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",onChange:function(e){x(e.target.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(h.jsx)("span",{className:"icon is-right",children:Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(h.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(h.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",onClick:function(){return f("")},children:"All"}),j.map((function(e){return Object(h.jsx)("a",{"data-cy":"Category",className:d()("button","mr-2","my-1",{"is-info":e.title===O}),href:"#/",onClick:function(){return f(e.title)},children:e.title},e.id)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){s(""),x(""),f("")},children:"Reset all filters"})})]})}),Object(h.jsx)("div",{className:"box table-container",children:Object(h.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),!p.length&&Object(h.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(h.jsx)("tbody",{children:p.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"Product",children:[Object(h.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(h.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(h.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(h.jsx)("td",{"data-cy":"ProductUser",className:d()({"has-text-link":"m"===e.user.sex,"has-text-danger":"f"===e.user.sex}),children:e.user.name})]},e.id)}))})]})})]})})};n.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2bd1bb9c.chunk.js.map