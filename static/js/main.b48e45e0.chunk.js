(this["webpackJsonptailwindreact-app"]=this["webpackJsonptailwindreact-app"]||[]).push([[0],{22:function(e,a,t){e.exports=t(40)},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),o=t(2),s=t(4),m=t(3),u=t.n(m),i=t(10),d=t(6),p=t.n(d);t(33),t(35);p.a.initializeApp({apiKey:"AIzaSyD-AMOyztQOEQIFm5ItKttsJGCSRt0G-aI",authDomain:"logindps-ba29e.firebaseapp.com",databaseURL:"https://logindps-ba29e.firebaseio.com",projectId:"logindps-ba29e",storageBucket:"logindps-ba29e.appspot.com",messagingSenderId:"308519979064",appId:"1:308519979064:web:9d4f667dbfa20103ea7ecd"});var b=p.a.auth(),E=p.a.firestore(),v=new p.a.auth.GoogleAuthProvider,f=function(e,a){var t,n,r,l;return u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(e){c.next=2;break}return c.abrupt("return");case 2:return t=E.doc("users/".concat(e.uid)),c.next=5,u.a.awrap(t.get());case 5:if(c.sent.exists){c.next=16;break}return n=e.email,r=e.displayName,l=e.photoURL,c.prev=8,c.next=11,u.a.awrap(t.set(Object(i.a)({displayName:r,email:n,photoURL:l},a)));case 11:c.next=16;break;case 13:c.prev=13,c.t0=c.catch(8),console.error("Error crear el usuario",c.t0);case 16:return c.abrupt("return",h(e.uid));case 17:case"end":return c.stop()}}),null,null,[[8,13]])},h=function(e){var a;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return",null);case 2:return t.prev=2,t.next=5,u.a.awrap(E.doc("users/".concat(e)).get());case 5:return a=t.sent,t.abrupt("return",Object(i.a)({uid:e},a.data()));case 9:t.prev=9,t.t0=t.catch(2),console.error("Error extraer usuario",t.t0);case 12:case"end":return t.stop()}}),null,null,[[2,9]])},g=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),m=Object(s.a)(c,2),u=m[0],i=m[1],d=Object(n.useState)(null),p=Object(s.a)(d,2),E=p[0],f=p[1],h=function(e){var a=e.currentTarget,t=a.name,n=a.value;"userEmail"===t?l(n):"userPassword"===t&&i(n)};return r.a.createElement("div",{className:""},r.a.createElement("nav",{className:"navbar navbar-inverse"},r.a.createElement("ul",{className:"nav navbar-nav"})),r.a.createElement("div",{className:"mt-8"},r.a.createElement("div",{className:"border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"},r.a.createElement("form",null,null!==E&&r.a.createElement("div",{className:"py-4 bg-red-600 w-full text-white text-center mb-3"},E),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Correo Electronico"),r.a.createElement("input",{type:"email",className:"form-control",name:"userEmail",placeholder:"Ingresar email",onChange:function(e){return h(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Contrase\xf1a"),r.a.createElement("input",{type:"password",className:"form-control",name:"userPassword",placeholder:"Ingresar password",onChange:function(e){return h(e)}})),r.a.createElement("a",{href:"https://www.youtube.com/"},r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){!function(e){e.preventDefault(),console.log(" SignIn - signInWithEmailAndPasswordHandler ");var a=b.signInWithEmailAndPassword(t,u).catch((function(e){f("Error, por favor revisar credenciales -> "+e),console.error("Error signing in with password and email ",e)}));console.log(" SignIn - signInWithEmailAndPassword "),console.log(" const user :  "+a),window.location.replace("https://rolando988.github.io/crud/")}(e)}},r.a.createElement("i",{className:"fa fa-lock"}),"  Ingresar")),r.a.createElement("p",{className:"text-center my-3"}," ",r.a.createElement(o.a,{to:"",className:"text-blue-500 hover:text-blue-600"},"No tiene cuenta ?")," ",r.a.createElement("br",null)," ",r.a.createElement(o.a,{to:"passwordReset",className:"text-blue-500 hover:text-blue-600"},"Olvido la contrase\xf1a ?"))),r.a.createElement("button",{className:"btn btn-info btn-block",onClick:function(){b.signInWithPopup(v)}},r.a.createElement("i",{className:"fa fa-google"}),"  Ingresar con Google"))))},N=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),m=Object(s.a)(c,2),i=m[0],d=m[1],p=Object(n.useState)(""),E=Object(s.a)(p,2),v=E[0],h=E[1],g=Object(n.useState)(null),N=Object(s.a)(g,2),w=N[0],x=N[1],y=function(e){var a=e.currentTarget,t=a.name,n=a.value;"userEmail"===t?l(n):"userPassword"===t?d(n):"displayName"===t&&h(n)};return r.a.createElement("div",{className:""},r.a.createElement("nav",{className:"navbar navbar-inverse"},r.a.createElement("ul",{className:"nav navbar-nav"})),r.a.createElement("div",{className:"mt-8"},r.a.createElement("h1",{className:"text-3xl mb-2 text-center font-bold"},"Crear Cuenta"),r.a.createElement("div",{className:"border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"},null!==w&&r.a.createElement("div",{className:"py-4 bg-red-600 w-full text-white text-center mb-3"},w),r.a.createElement("form",{className:""},r.a.createElement("label",{htmlFor:"displayName",className:"block"},"Nombre:"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"displayName",placeholder:"Ingresar Nombre",onChange:function(e){return y(e)}})),r.a.createElement("label",{htmlFor:"userEmail",className:"block"},"Correo:"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",name:"userEmail",id:"userEmail",value:t,placeholder:"Ingresar Correo",onChange:function(e){return y(e)}})),r.a.createElement("label",{htmlFor:"userPassword",className:"block"},"Contrase\xf1a :"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",name:"userPassword",id:"userEmail",value:i,placeholder:"Ingresar Contrase\xf1a",onChange:function(e){return y(e)}})),r.a.createElement("button",{className:"bg-green-400 hover:bg-green-500 w-full py-2 text-white",onClick:function(e){!function(e){var a,n;u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.preventDefault(),x(""),r.prev=2,r.next=5,u.a.awrap(b.createUserWithEmailAndPassword(t,i));case 5:a=r.sent,n=a.user,f(n,{displayName:v}),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),x("Error , Por favor intentar de nuevo : "+r.t0);case 13:l(""),d(""),h("");case 16:case"end":return r.stop()}}),null,null,[[2,10]])}(e)}},r.a.createElement("i",{class:"fa fa-save"}),"  Guardar")),r.a.createElement("p",{className:"text-center my-3"}," ",r.a.createElement(o.a,{to:"/",className:"text-blue-500 hover:text-blue-600"},"Regresar Login")," "))))},w=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),m=Object(s.a)(c,2),u=m[0],i=m[1],d=Object(n.useState)(null),p=Object(s.a)(d,2),E=p[0],v=p[1];return r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-inverse"},r.a.createElement("ul",{class:"nav navbar-nav"})),r.a.createElement("div",{className:"mt-8"},r.a.createElement("h1",{className:"text-xl text-center font-bold mb-3"},"Cambiar contrase\xf1a"),r.a.createElement("div",{className:"border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"},r.a.createElement("form",{action:""},u&&r.a.createElement("div",{className:"py-3 bg-green-400 w-full text-white text-center mb-3"},"Por favor revisar su correo electronico"),null!==E&&r.a.createElement("div",{className:"py-3 bg-red-600 w-full text-white text-center mb-3"},E),r.a.createElement("label",{htmlFor:"userEmail",className:"w-full block"},"Correo:"),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",name:"userEmail",id:"userEmail",value:t,placeholder:"Ingresar Correo",onChange:function(e){return function(e){var a=e.currentTarget,t=a.name,n=a.value;"userEmail"===t&&l(n)}(e)}})),r.a.createElement("button",{className:"w-full bg-blue-400 text-white py-3",onClick:function(e){!function(e){e.preventDefault(),b.sendPasswordResetEmail(t).then((function(){i(!0),setTimeout((function(){i(!1)}),3e3)})).catch((function(){v("Error resetting password")}))}(e)}},r.a.createElement("i",{class:"fa fa-save"})," Guardar")),r.a.createElement(o.a,{to:"/",className:"my-2 text-blue-700 hover:text-blue-800 text-center block"},"\u2190 Regresar"))))},x=t(17),y=t(18),O=t(20),j=t(19),C=t(21),k=Object(n.createContext)({user:null}),I=function(e){function a(){var e,t;Object(x.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(O.a)(this,(e=Object(j.a)(a)).call.apply(e,[this].concat(r)))).state={user:null},t.componentDidMount=function(){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(" UserProvider componentDidMount : "),b.onAuthStateChanged((function(e){var a;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(f(e));case 2:a=n.sent,console.log(" Usuario triggered componentDidMount : "+a),t.setState({user:a}),console.log("++++++++++++++++++++++++++++++++++");case 6:case"end":return n.stop()}}))}));case 2:case"end":return e.stop()}}))},t.setUserContext=function(e){t.setState({usertmp:e})},t}return Object(C.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e=this.state.user;return console.log(" render -> Usuario UserProvider : "+e),r.a.createElement(k.Provider,{value:e},this.props.children)}}]),a}(n.Component),P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Esta compa\xf1ia se fund\xf3 en el 2020, Mas que una compa\xf1ia, somos una solucion"))},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Estas en la pagina de contacto. Aqui encontraras informaci\xf3n para contactar a la compa\xf1ia"),r.a.createElement("p",null,"Telefono: 789-456-123"))},U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("h1",null,"Pagina de ayuda")))},A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("h1",null,"Pagina de Usario")))},R=function(){var e=Object(n.useContext)(k),a=e.photoURL,t=e.displayName,l=e.email;console.log(" Usuario ProfilePage : "+t+" - "+l);return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-inverse"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"WebSiteName")),r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"active"},r.a.createElement(o.a,{to:"/"},"Inicio")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"info"},"Info")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"contacto"},"Contactanos")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"user"},"User")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"help"},"Help")),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){b.signOut()}},"Sign out")))),r.a.createElement(o.b,null,r.a.createElement(P,{exact:!0,path:"info"}),r.a.createElement(S,{exact:!0,path:"contacto"}),r.a.createElement(U,{exact:!0,path:"help"}),r.a.createElement(A,{exact:!0,path:"user"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("span",{className:"float-right"},r.a.createElement("div",{style:{background:"url(".concat(a||"https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png",")  no-repeat center center"),backgroundSize:"cover",height:"100px",width:"100px"},className:"border border-blue-300"}),r.a.createElement("br",null),"Nombre : ",r.a.createElement("h2",{className:"text-2xl font-semibold"},t),r.a.createElement("br",null),"Correo: ",r.a.createElement("h3",{className:"italic"},l))))))};var F=function(){var e=Object(n.useContext)(k);return console.log(" Usuario Application : "+e),e?r.a.createElement(R,null):r.a.createElement(o.b,null,r.a.createElement(g,{path:"/"}),r.a.createElement(N,{path:"signUp"}),r.a.createElement(w,{path:"passwordReset"}))};var D=function(){return r.a.createElement(I,null,r.a.createElement(F,null),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"PRUEBAS LOGIN")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(39);c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.b48e45e0.chunk.js.map