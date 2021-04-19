(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(7),c=n.n(r),o=(n(35),n(36),n(37),n(38),n(1)),i=function(e){var t=e.children;return Object(o.jsx)("div",{className:"Container",children:t})},s=(n(40),n(59)),l=n(57),u=n(19),m=(n(41),function(e){var t=e.children,n=e.onClick;Object(u.a)(e,["children","onClick"]);return Object(o.jsx)("button",{type:"button",onClick:n,className:"IconButton",children:t})});m.defaultProps={onClick:function(){return null},children:null};var b,f=m;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function j(e,t){var n=e.title,r=e.titleId,c=d(e,["title","titleId"]);return a.createElement("svg",h({fill:"currentColor",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60.963 60.842",style:{enableBackground:"new 0 0 60.963 60.842"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,b||(b=a.createElement("path",{d:"M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611 c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611 l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 C61.42,57.647,61.42,54.687,59.595,52.861z"})))}var p=a.forwardRef(j),O=(n.p,n(5)),v={ADD:"contacts/add",REMOVE:"contacts/remove",CHANGE_FILTER:"contacts/changeFilter"},g=n(58),x={addContact:function(e){var t=e.name,n=e.number;return{type:v.ADD,payload:{id:Object(g.a)(),name:t,number:n}}},removeContact:function(e){return{type:v.REMOVE,payload:e}},changeFilter:function(e){return{type:v.CHANGE_FILTER,payload:e}}},C=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},y=Object(O.b)((function(e){var t=e.phoneBook,n=t.items,a=t.filter;return{items:C(n,a)}}),(function(e){return{onRemoveContact:function(t){return e(x.removeContact(t))}}}))((function(e){var t=e.items,n=e.onRemoveContact;return Object(o.jsx)(s.a,{component:"ul",className:"ContactList",children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(o.jsx)(l.a,{timeout:250,classNames:"ContactList__item-fade",children:Object(o.jsxs)("li",{className:"ContactList__item",children:[Object(o.jsxs)("p",{className:"ContactList__name",children:[a,": ",r]}),Object(o.jsx)(f,{className:"ContactList__button",onClick:function(){return n(t)},"aria-label":"Remove Contact",children:Object(o.jsx)(p,{width:"12",height:"12",fill:"#fff"})})]},t)},t)}))})})),N=n(22),F=n(23),w=n(24),E=n(29),L=n(28),k=(n(48),n(49),function(e){var t=e.message;return Object(o.jsx)(l.a,{in:t,timeout:250,classNames:"Notification-fade",unmountOnExit:!0,children:Object(o.jsx)("div",{className:"Overlay",children:Object(o.jsx)("p",{className:"Notification",children:t})})})}),_=function(e){Object(E.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(F.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",message:null},e.setMessage=function(t){e.setState({message:t}),setTimeout((function(){e.setState({message:null})}),2500)},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(N.a)({},a,r))},e.setMessage=function(t){e.setState({message:t}),setTimeout((function(){e.setState({message:null})}),2500)},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;""!==a?""!==r?(""===a&&""===r&&e.setMessage("Enter data to each of inputs: [name & number]!"),e.props.items.find((function(e){return e.name.toLowerCase()===a.toLowerCase()}))?e.setMessage("Contact ".concat(a," is \u0430lready exists!")):(e.props.onSubmit(a,r),e.setState({name:"",number:""}))):e.setMessage("Enter concact phone number, please!"):e.setMessage("Enter concact name, please!")},e}return Object(w.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.message;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(k,{message:a}),Object(o.jsxs)("form",{className:"ContactForm",onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{className:"Label",htmlFor:"name",children:"Name"}),Object(o.jsx)("input",{type:"text",value:t,id:"name",className:"ContactForm__input",name:"name",onChange:this.handleChange,placeholder:"Anton Cherny",autoFocus:!0}),Object(o.jsx)("label",{className:"Label",htmlFor:"number",children:"Number"}),Object(o.jsx)("input",{type:"tel",value:n,id:"number",className:"ContactForm__input",name:"number",required:!0,onChange:this.handleChange,placeholder:"+38 (066) 000-00-00"}),Object(o.jsx)("button",{type:"submit",className:"ContactForm__button",children:"Add contact"})]})]})}}]),n}(a.Component);_.defaultProps={};var S=Object(O.b)((function(e){return{items:e.phoneBook.items}}),(function(e){return{onSubmit:function(t,n){return e(x.addContact({name:t,number:n}))}}}))(_),R=(n(50),Object(O.b)((function(e){return{value:e.phoneBook.filter,items:e.phoneBook.items}}),(function(e){return{onChangeFilter:function(t){return e(x.changeFilter(t.target.value))},onClearFilter:function(t){return e(x.changeFilter(""))}}}))((function(e){var t=e.value,n=e.onChangeFilter,a=e.onClearFilter,r=e.items;return Object(o.jsx)(l.a,{in:r.length>1,timeout:250,classNames:"Filter-fade",unmountOnExit:!0,onExiting:function(){return a()},children:Object(o.jsxs)("div",{className:"filterForm",children:[Object(o.jsx)("label",{htmlFor:"find",className:"Label filterLabel",children:"Find contact by name"}),Object(o.jsx)("input",{type:"text",value:t,id:"find",className:"filterInput",onChange:n})]})})}))),B=(n(51),function(){return Object(o.jsx)(l.a,{in:!0,appear:!0,timeout:500,classNames:"Title-SlideIn",unmountOnExit:!0,children:Object(o.jsx)("h1",{className:"Title",children:"Phonebook"})})}),I=Object(O.b)((function(e){return{items:e.phoneBook.items}}),null)((function(){return Object(o.jsxs)(i,{children:[Object(o.jsx)(B,{}),Object(o.jsx)(S,{}),Object(o.jsx)(R,{}),Object(o.jsx)(y,{})]})})),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},T=n(8),A=n(25),D=n(27),P=Object(T.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case v.ADD:return[a].concat(Object(D.a)(e));case v.REMOVE:return e.filter((function(e){return e.id!==a}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case v.CHANGE_FILTER:return a;default:return e}}}),G=Object(T.combineReducers)({phoneBook:P}),H=Object(T.createStore)(G,Object(A.composeWithDevTools)()),V=n(26);c.a.render(Object(o.jsx)(V.a,{children:Object(o.jsx)(O.a,{store:H,children:Object(o.jsx)(I,{})})}),document.getElementById("root")),M()}},[[55,1,2]]]);
//# sourceMappingURL=main.3affce35.chunk.js.map