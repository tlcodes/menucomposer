(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(4),r=n.n(c),l=(n(17),n(5)),o=n(6),s=n(9),m=n(7),d=n(10),u=(n(19),n(8)),p=n(1),h=n(2),E={items:[{title:"home",input:"home",valid:!0,open:!1,id:"1",conditions:[{name:"contains_number",isValid:!0,checked:!1},{name:"2_chars_min",isValid:!0,checked:!1},{name:"not_empty",isValid:!0,checked:!1}]},{title:"about",input:"about",valid:!0,open:!1,id:"2",conditions:[{name:"contains_number",isValid:!0,checked:!1},{name:"2_chars_min",isValid:!0,checked:!1},{name:"not_empty",isValid:!0,checked:!1}]},{title:"contact",input:"contact",valid:!0,open:!1,id:"3",conditions:[{name:"contains_number",isValid:!0,checked:!1},{name:"2_chars_min",isValid:!0,checked:!1},{name:"not_empty",isValid:!0,checked:!1}]}],history:[],modal:!1,expanded:!1};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":var n=Math.random().toString(),a=[].concat(Object(h.a)(e.items),[{title:"",input:"",valid:!1,open:!1,id:n,conditions:[{name:"contains_number",isValid:!0,checked:!1},{name:"2_chars_min",isValid:!0,checked:!1},{name:"not_empty",isValid:!1,checked:!0}]}]);return Object(p.a)({},e,{history:[].concat(Object(h.a)(e.history),[e.items]),items:a});case"REMOVE_ITEM":var i=e.items.filter(function(e){return e.id!==t.id});return Object(p.a)({},e,{history:[].concat(Object(h.a)(e.history),[e.items]),items:i});case"CANCEL_ACTION":if(e.history.length){var c=e.history[e.history.length-1],r=e.history;return r.splice(r.length-1,1),Object(p.a)({},e,{items:c,history:r})}return e;case"UPDATE_ITEM":var l=t.updatedProps.hasOwnProperty("input")?e.history:[].concat(Object(h.a)(e.history),[e.items]),o=e.items.find(function(e){return e.id===t.id});(o=Object(p.a)({},o,t.updatedProps)).valid=!o.conditions.map(function(e){return e.isValid}).includes(!1);var s=e.items.map(function(e){return e.id===t.id?Object(p.a)({},o):e});return Object(p.a)({},e,{items:s,history:l});case"OPEN_CLOSE_ALL":var m=e.items.map(function(e){return Object(p.a)({},e,{open:t.open})});return Object(p.a)({},e,{items:m,history:[].concat(Object(h.a)(e.history),[e.items]),expanded:t.open});case"MODAL":return Object(p.a)({},e,{modal:!e.modal});default:return e}},v=i.a.createContext();function b(e){var t=Object(a.useReducer)(f,E),n=Object(u.a)(t,2),c=n[0],r={items:c.items,modal:c.modal,expanded:c.expanded,dispatch:n[1]};return i.a.createElement(v.Provider,{value:r},e.children)}var k=function(e){var t=Object(a.useContext)(v),n=t.items,c=t.expanded,r=t.dispatch,l=n.length?n.map(function(e){return i.a.createElement("div",{key:e.id,className:e.valid?"green":"red",id:"menu-item"},e.input||"Edit Item Title"," ",i.a.createElement("sub",null,e.input.length))}):null;return i.a.createElement("div",{className:"heading"},i.a.createElement("div",{className:"menu"},l),i.a.createElement("button",{className:"expand",onClick:function(){var e=n.reduce(function(e,t){return t.open?e+=1:e},0)<n.length/2;r({type:"OPEN_CLOSE_ALL",open:e})}},c?"Close All Items":"Expand All Items"),e.titleList.reduce(function(e,t){return t.valid?e+=1:e},0)>=4&&i.a.createElement("button",{className:"check",onClick:function(){return r({type:"MODAL"})}},"Check Infos"))},_=function(){var e=Object(a.useContext)(v),t=e.items,n=e.dispatch,c=t.map(function(e){var t={id:e.id,title:e.title,true_cond:[],false_cond:[],unchecked:[]};return e.conditions.forEach(function(e){e.isValid&&e.checked?t.true_cond.push(e.name):!e.isValid&&e.checked?t.false_cond.push(e.name):t.unchecked.push(e.name)}),Object(p.a)({},t)});return i.a.createElement("div",{id:"modal"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("p",null,"Total items: ",t.length),i.a.createElement("div",{className:"modal-list"},c.length?c.map(function(e){return i.a.createElement("div",{key:"modal"+e.id,className:"modal-item"},i.a.createElement("h3",null,e.title||"empty title"),i.a.createElement("ul",null,i.a.createElement("li",{className:"green"},"True conditions:",i.a.createElement("br",null),e.true_cond.join(", ").replace(/_/g," ")||"none (nothing checked?)"),i.a.createElement("li",{className:"red"},"False conditions:",i.a.createElement("br",null),e.false_cond.join(", ").replace(/_/g," ")||"none (All good!)"),i.a.createElement("li",{className:"blue"},"Unchecked: (not verified)",i.a.createElement("br",null),e.unchecked.join(", ").replace(/_/g," ")||"none")))}):null),i.a.createElement("button",{className:"close",onClick:function(){return n({type:"MODAL"})}},"\xd7")))};var y=function(e){var t=Object(a.useContext)(v).dispatch,n=e.item,c=n.title,r=n.id,l=n.open,o=n.input,s=n.conditions,m=function(e){var n=e.target.checked?d(e.target.name,o):{name:e.target.name,isValid:!0,checked:!1},a=s.map(function(t){return t.name===e.target.name?n:t});t({type:"UPDATE_ITEM",id:r,updatedProps:{conditions:a}})},d=function(e,t){switch(e){case"contains_number":return{name:e,isValid:/[0-9]/.test(t),checked:!0};case"2_chars_min":return{name:e,isValid:t.length>=2,checked:!0};case"not_empty":return{name:e,isValid:""!==t,checked:!0};default:return}};return i.a.createElement("div",{className:"item"},i.a.createElement("button",{onClick:function(){return t({type:"UPDATE_ITEM",id:r,updatedProps:{open:!e.item.open}})},className:"open-item-btn "+(l?"open-item":"close-item")},">"),i.a.createElement("span",null,c||"Edit Item Title"),i.a.createElement("button",{onClick:function(){return t({type:"REMOVE_ITEM",id:r})}},"\xd7"),i.a.createElement("div",{id:"form-container",className:l?"open-form":"close-form"},i.a.createElement("form",{onSubmit:function(n){n.preventDefault(),t({type:"UPDATE_ITEM",id:r,updatedProps:{title:e.item.input}})}},i.a.createElement("sup",null,o.length),i.a.createElement("input",{type:"text",value:o,onChange:function(e){var n=s.map(function(t){return t.checked?d(t.name,e.target.value):t});t({type:"UPDATE_ITEM",id:r,updatedProps:{input:e.target.value,conditions:n}})}}),i.a.createElement("input",{type:"submit",value:"Edit"}),i.a.createElement("fieldset",null,i.a.createElement("legend",null,"Conditions:"),s.map(function(e,t){return i.a.createElement("div",{key:"cond"+t,className:"conditions"},i.a.createElement("input",{type:"checkbox",id:"cond"+t,name:e.name,onChange:m,checked:e.checked}),i.a.createElement("label",{htmlFor:"cond"+t},e.name.replace(/_/g," ")))})))))};var O=function(){var e=Object(a.useContext)(v),t=e.items,n=e.modal,c=e.dispatch,r=t.length?t.map(function(e){return i.a.createElement(y,{key:e.id,item:e})}):null;return i.a.createElement("div",{className:"composer"},i.a.createElement(k,{titleList:t.map(function(e){return{title:e.title,input:e.input,valid:e.valid}})}),i.a.createElement("div",null,i.a.createElement("button",{className:"cancel",onClick:function(){return c({type:"CANCEL_ACTION"})}},"cancel"),i.a.createElement("span",{className:"composer-title"},"Menu Composer"),i.a.createElement("button",{onClick:function(){return c({type:"ADD_ITEM"})}},"+")),r,n&&i.a.createElement(_,null))},g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(b,null,i.a.createElement("div",{className:"App"},i.a.createElement(O,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.83fdc4da.chunk.js.map