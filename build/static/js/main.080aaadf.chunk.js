(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports={Modal:"Modal_Modal__2Ywj6",modal:"Modal_modal__1XFob",modalItem:"Modal_modalItem__2DwRi","google-places-suggestions-container":"Modal_google-places-suggestions-container__35EXp",layout:"Modal_layout__1h3sN"}},22:function(e,t,a){e.exports={CrudView:"CrudView_CrudView__37s-_",Add:"CrudView_Add__2QcmB"}},30:function(e,t,a){e.exports={App:"App_App__S0FAI",active:"App_active__3aTT8"}},31:function(e,t,a){e.exports={Main:"Main_Main__2Tqjz"}},34:function(e,t,a){e.exports=a(49)},43:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(18),r=a.n(c),l=a(7),i=a(11),u=a(27),d=a(10),s=a(3),m="INIT",p="ADD",f="UPDATE",g="REMOVE";var y={categoryLastID:0,category:{id:0,name:""},categories:[],locationLastID:0,location:{id:0,name:"",address:"",coordinates:"",category:""},locations:[]},b=window.localStorage;var E=function(){var e,t,a,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,o=arguments.length>1?arguments[1]:void 0;switch(o.type){case m:var c=JSON.parse(b.getItem("state"));return console.log("INIT"),Object(s.a)({},n,c);case p:return o.payload.dataStruct===n.location?((e=Object(d.a)(n.locations)).push(o.payload.dataToHandle),a=JSON.stringify(Object(s.a)({},n,{locations:e,locationLastID:n.locationLastID+1})),b.setItem("state",a),Object(s.a)({},n,{locations:e,locationLastID:++n.locationLastID})):((e=Object(d.a)(n.categories)).push(o.payload.dataToHandle),a=JSON.stringify(Object(s.a)({},n,{categories:e,categoryLastID:n.categoryLastID+1})),b.setItem("state",a),Object(s.a)({},n,{categories:e,categoryLastID:++n.categoryLastID}));case f:return o.payload.dataStruct===n.location?(t=(e=Object(d.a)(n.locations)).map(function(e){return e.id}).indexOf(o.payload.dataToHandle.id),e[t]=o.payload.dataToHandle,a=JSON.stringify(Object(s.a)({},n,{locations:e})),b.setItem("state",a),Object(s.a)({},n,{locations:e})):(t=(e=Object(d.a)(n.categories)).map(function(e){return e.id}).indexOf(o.payload.dataToHandle.id),e[t]=o.payload.dataToHandle,a=JSON.stringify(Object(s.a)({},n,{categories:e})),b.setItem("state",a),Object(s.a)({},n,{categories:e}));case g:if(o.payload.dataStruct===n.location)return t=(e=Object(d.a)(n.locations)).map(function(e){return e.id}).indexOf(o.payload.id),e.splice(t,1),a=JSON.stringify(Object(s.a)({},n,{locations:e})),b.setItem("state",a),Object(s.a)({},n,{locations:e});t=(e=Object(d.a)(n.categories)).map(function(e){return e.id}).indexOf(o.payload.id),e.splice(t,1),a=JSON.stringify(Object(s.a)({},n,{categories:e})),b.setItem("state",a);var r=Object(d.a)(n.locations);return r=r.filter(function(e){return e.category!==o.payload.id}),Object(s.a)({},n,{categories:e,locations:r});default:return n}},v=a(28),O=a(29),j=a.n(O),h=Object(i.createStore)(Object(i.combineReducers)({mainReducer:E}),{},Object(u.composeWithDevTools)(Object(i.applyMiddleware)(j.a,v.a))),I=(a(43),a(30)),S=a.n(I),w=a(8),_=a(31),D=a.n(_),N=Object(l.b)(function(e){return{categories:e.mainReducer.categories,locations:e.mainReducer.locations}})(function(e){var t=Object(n.useState)([]),a=Object(w.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(null),i=Object(w.a)(l,2),u=i[0],d=i[1],s=null,m=null;Object(n.useEffect)(function(){p()},[e.categories]);var p=function(){var t=e.locations.filter(function(e){return e.category===s.value});if(r(t),t.length>0){var a=t[0].address.split(" ").join("+");d(a)}else d(null)};return o.a.createElement("div",{className:D.a.Main},o.a.createElement("h3",null,"categories"),o.a.createElement("select",{ref:function(e){return s=e},onChange:function(){p()},defaultValue:e.categories.length>0?e.categories[0].name:"none"},e.categories.length>0&&void 0!==e.categories?e.categories.map(function(e){return o.a.createElement("option",{value:e.id,key:e.id},e.name)}):o.a.createElement("option",{value:"none"},"No categories Found")),o.a.createElement("h3",null,"locations"),o.a.createElement("select",{ref:function(e){return m=e},onChange:function(){console.log(JSON.parse(m.value)),d(JSON.parse(m.value).address.split(" ").join("+"))}},c.length>0?c.map(function(e){return o.a.createElement("option",{value:JSON.stringify(e),key:e.id},e.name)}):o.a.createElement("option",{value:"none"},"No locations Found")),console.log(u),null!==u?o.a.createElement("iframe",{title:"maps",width:"600",height:"450",frameBorder:"0",src:"https://www.google.com/maps/embed/v1/place?q=".concat(u,"&key=").concat("AIzaSyAw7dBz3fBk-f9SwRFaFqvPln6e20Tnu9Q"),allowFullScreen:!0}):null)}),T=a(22),L=a.n(T),k=a(13),A=a.n(k),M=a(32),R=a.n(M),x=Object(l.b)(function(e){return{categories:e.mainReducer.categories}},function(e){return{add:function(t){return e(function(e){return{type:p,payload:e}}(t))},update:function(t){return e(function(e){return{type:f,payload:e}}(t))},remove:function(t){return e(function(e){return{type:g,payload:e}}(t))}}})(function(e){var t={},a=Object(n.useState)(!0),c=Object(w.a)(a,2),r=c[0],l=c[1],i=Object.entries(e.data).map(function(a,n){return o.a.createElement("div",{className:A.a.modalItem,key:a[0]},o.a.createElement("label",null,a[0]),"category"===a[0]?o.a.createElement("select",{ref:function(e){return t[a[0]]=e},disabled:"remove"===e.actionType,defaultValue:"add"===e.actionType?"id"===a[0]?e.dataLastID:"":a[1]},e.categories.length>0&&void 0!==e.categories?e.categories.map(function(e){return o.a.createElement("option",{value:e.id,key:e.id},e.name)}):o.a.createElement("option",{value:"none"},"No categories Found")):"address"===a[0]&&"remove"!==e.actionType?o.a.createElement(R.a,{className:A.a.GooglePlacesAutocomplete,ref:function(e){t[a[0]]=e},initialValue:a[1],onSelect:function(e){t[a[0]].value=e.description}}):o.a.createElement("input",{type:"text",required:!0,ref:function(e){return t[a[0]]=e},disabled:"id"===a[0]||"remove"===e.actionType,defaultValue:"add"===e.actionType?"id"===a[0]?e.dataLastID:"":a[1]}))});return o.a.createElement("div",{className:A.a.Modal},o.a.createElement("div",{className:A.a.layout,onClick:function(){e.setModal(!1)}}),o.a.createElement("div",{className:A.a.modal},i,"remove"===e.actionType?o.a.createElement("h3",null,"Are you sure you want to delete ",e.data.name,"?"):null,!1===r?o.a.createElement("h3",null,"All fields are mendatory"):o.a.createElement("div",null),o.a.createElement("div",{className:""},o.a.createElement("button",{onClick:function(){!function(){var a=[],n=!0;"remove"===e.actionType?(a={dataStruct:e.dataStruct,id:e.data.id},e.remove(a)):(a={dataStruct:e.dataStruct,dataToHandle:Object.entries(t).reduce(function(e,t){return"address"===t[0]&&void 0===t[1].value&&(t[1].value=document.querySelector("#google-places-autocomplete-input").value),t[1].value&&"none"!==t[1].value||(n=!1),e[t[0]]=t[1].value,e},{})},l(n),n&&("add"===e.actionType?e.add(a):e.update(a)))}()}},e.actionType),o.a.createElement("button",{onClick:function(){e.setModal(!1)}},"cancel"))))}),C=Object(l.b)(function(e){return{categories:e.mainReducer.categories}})(function(e){var t=Object(n.useState)(!1),a=Object(w.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)("add"),i=Object(w.a)(l,2),u=i[0],d=i[1],s=Object(n.useState)(e.dataStruct),m=Object(w.a)(s,2),p=m[0],f=m[1];return o.a.createElement("div",{className:L.a.CrudView},o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,Object.keys(e.dataStruct).map(function(e){return o.a.createElement("th",{key:e},e)}),o.a.createElement("th",null,"Update"),o.a.createElement("th",null,"Delete"))),o.a.createElement("tbody",null,e.data.map(function(t){return o.a.createElement("tr",{key:t.id},Object.entries(t).map(function(t){return o.a.createElement("td",{key:t[0]},"category"===t[0]?e.categories.filter(function(e){return e.id===t[1]})[0].name:t[1])}),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){r(!0),d("update"),f(t)}},"Update")),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){r(!0),d("remove"),f(t)}},"Delete")))}))),o.a.createElement("button",{className:L.a.Add,onClick:function(){r(!0),d("add"),f(e.dataStruct)}},"Add"),c?o.a.createElement(x,{setModal:r,data:p,actionType:u,dataStruct:e.dataStruct,dataLastID:e.dataLastID}):null)}),J=a(16),V=a(9),F=Object(l.b)(function(e){return{categories:e.mainReducer.categories,locations:e.mainReducer.locations,category:e.mainReducer.category,location:e.mainReducer.location,categoryLastID:e.mainReducer.categoryLastID,locationLastID:e.mainReducer.locationLastID}},function(e){return{init:function(t){return e(function(e){return{type:m,payload:e}}(t))}}})(function(e){Object(n.useEffect)(function(){e.init()},[]);var t=[{path:"/",exact:!0,component:function(){return o.a.createElement(N,null)}},{path:"/main",component:function(){return o.a.createElement(N,null)}},{path:"/categories",component:function(){return o.a.createElement(C,{dataStruct:e.category,data:e.categories,dataLastID:e.categoryLastID})}},{path:"/locations",component:function(){return o.a.createElement(C,{dataStruct:e.location,data:e.locations,dataLastID:e.locationLastID})}}];return o.a.createElement("div",{className:S.a.App},o.a.createElement(J.a,null,o.a.createElement("header",null,o.a.createElement("ul",{style:{listStyleType:"none",padding:0}},o.a.createElement("li",null,o.a.createElement(J.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(J.b,{to:"/categories"},"categories")),o.a.createElement("li",null,o.a.createElement(J.b,{to:"/locations"},"locations")))),t.map(function(e,t){return o.a.createElement(V.a,{key:t,path:e.path,exact:e.exact,component:e.component})})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(l.a,{store:h},o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.080aaadf.chunk.js.map