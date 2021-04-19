(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{40:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(10),r=n.n(c),o=(n(40),n(32)),i=n(7),s=n(25),l=(n(47),n(48),n(49),n(1)),u=function(e){var t=e.children;return Object(l.jsx)("div",{className:"Container",children:t})},m=(n(51),n(84)),b=n(82),j=n(26),f=(n(52),function(e){var t=e.children,n=e.onClick;Object(j.a)(e,["children","onClick"]);return Object(l.jsx)("button",{type:"button",onClick:n,className:"IconButton",children:t})});f.defaultProps={onClick:function(){return null},children:null};var d,h=f;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function g(e,t){var n=e.title,c=e.titleId,r=p(e,["title","titleId"]);return a.createElement("svg",O({fill:"currentColor",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60.963 60.842",style:{enableBackground:"new 0 0 60.963 60.842"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,d||(d=a.createElement("path",{d:"M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611 c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611 l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 C61.42,57.647,61.42,54.687,59.595,52.861z"})))}var v=a.forwardRef(g),x=(n.p,n(83)),C=n(8),y={addContact:Object(C.b)("contacts/add",(function(e){var t=e.name,n=e.number;return{payload:{id:Object(x.a)(),name:t,number:n}}})),removeContact:Object(C.b)("contacts/remove"),changeFilter:Object(C.b)("contacts/changeFilter")},F=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},w=Object(i.b)((function(e){var t=e.phoneBook,n=t.items,a=t.filter;return{items:F(n,a)}}),(function(e){return{onRemoveContact:function(t){return e(y.removeContact(t))}}}))((function(e){var t=e.items,n=e.onRemoveContact;return Object(l.jsx)(m.a,{component:"ul",className:"ContactList",children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(l.jsx)(b.a,{timeout:250,classNames:"ContactList__item-fade",children:Object(l.jsxs)("li",{className:"ContactList__item",children:[Object(l.jsxs)("p",{className:"ContactList__name",children:[a,": ",c]}),Object(l.jsx)(h,{className:"ContactList__button",onClick:function(){return n(t)},"aria-label":"Remove Contact",children:Object(l.jsx)(v,{width:"12",height:"12",fill:"#fff"})})]},t)},t)}))})})),N=n(12),k=n(27),L=n(28),S=n(34),_=n(33),B=(n(53),n(54),function(e){var t=e.message;return Object(l.jsx)(b.a,{in:t,timeout:250,classNames:"Notification-fade",unmountOnExit:!0,children:Object(l.jsx)("div",{className:"Overlay",children:Object(l.jsx)("p",{className:"Notification",children:t})})})}),E=function(e){Object(S.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",message:null},e.setMessage=function(t){e.setState({message:t}),setTimeout((function(){e.setState({message:null})}),2500)},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(N.a)({},a,c))},e.setMessage=function(t){e.setState({message:t}),setTimeout((function(){e.setState({message:null})}),2500)},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number;""!==a?""!==c?(""===a&&""===c&&e.setMessage("Enter data to each of inputs: [name & number]!"),e.props.items.find((function(e){return e.name.toLowerCase()===a.toLowerCase()}))?e.setMessage("Contact ".concat(a," is \u0430lready exists!")):(e.props.onSubmit(a,c),e.setState({name:"",number:""}))):e.setMessage("Enter concact phone number, please!"):e.setMessage("Enter concact name, please!")},e}return Object(L.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.message;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(B,{message:a}),Object(l.jsxs)("form",{className:"ContactForm",onSubmit:this.handleSubmit,children:[Object(l.jsx)("label",{className:"Label",htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{type:"text",value:t,id:"name",className:"ContactForm__input",name:"name",onChange:this.handleChange,placeholder:"Anton Cherny",autoFocus:!0}),Object(l.jsx)("label",{className:"Label",htmlFor:"number",children:"Number"}),Object(l.jsx)("input",{type:"tel",value:n,id:"number",className:"ContactForm__input",name:"number",required:!0,onChange:this.handleChange,placeholder:"+38 (066) 000-00-00"}),Object(l.jsx)("button",{type:"submit",className:"ContactForm__button",children:"Add contact"})]})]})}}]),n}(a.Component);E.defaultProps={};var I,P=Object(i.b)((function(e){return{items:e.phoneBook.items}}),(function(e){return{onSubmit:function(t,n){return e(y.addContact({name:t,number:n}))}}}))(E),M=(n(55),Object(i.b)((function(e){return{value:e.phoneBook.filter,items:e.phoneBook.items}}),(function(e){return{onChangeFilter:function(t){return e(y.changeFilter(t.target.value))},onClearFilter:function(t){return e(y.changeFilter(""))}}}))((function(e){var t=e.value,n=e.onChangeFilter,a=e.onClearFilter,c=e.items;return Object(l.jsx)(b.a,{in:c.length>1,timeout:250,classNames:"Filter-fade",unmountOnExit:!0,onExiting:function(){return a()},children:Object(l.jsxs)("div",{className:"filterForm",children:[Object(l.jsx)("label",{htmlFor:"find",className:"Label filterLabel",children:"Find contact by name"}),Object(l.jsx)("input",{type:"text",value:t,id:"find",className:"filterInput",onChange:n})]})})}))),T=(n(56),function(){return Object(l.jsx)(b.a,{in:!0,appear:!0,timeout:500,classNames:"Title-SlideIn",unmountOnExit:!0,children:Object(l.jsx)("h1",{className:"Title",children:"Phonebook"})})}),A=Object(i.b)((function(e){return{items:e.phoneBook.items}}),null)((function(){return Object(l.jsxs)(u,{children:[Object(l.jsx)(T,{}),Object(l.jsx)(P,{}),Object(l.jsx)(M,{}),Object(l.jsx)(w,{})]})})),R=n(15),z=n(29),D=n.n(z),J=n(9),q=n(30),X=n.n(q),G=n(6),H=Object(C.c)([],(I={},Object(N.a)(I,y.addContact,(function(e,t){return[t.payload].concat(Object(R.a)(e))})),Object(N.a)(I,y.removeContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),I)),K=Object(C.c)("",Object(N.a)({},y.changeFilter,(function(e,t){return t.payload}))),Q=Object(G.c)({items:H,filter:K}),U=[].concat(Object(R.a)(Object(C.d)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})),[D.a]),V={key:"phoneBook",storage:X.a,blacklist:["filter"]},W=Object(C.a)({reducer:{phoneBook:Object(J.g)(V,Q)},middleware:U,devTools:!1}),Y={store:W,persistor:Object(J.h)(W)},Z=n(31),$=n.n(Z),ee=function(){return Object(l.jsx)($.a,{type:"Oval",color:"#00BFFF",height:300,width:300,timeout:2500})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};r.a.render(Object(l.jsx)(i.a,{store:Y.store,children:Object(l.jsx)(s.a,{loading:Object(l.jsx)(ee,{}),persistor:Y.persistor,children:Object(l.jsx)(o.a,{children:Object(l.jsx)(A,{})})})}),document.getElementById("root")),te()}},[[80,1,2]]]);
//# sourceMappingURL=main.c78685ae.chunk.js.map