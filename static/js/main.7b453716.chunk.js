(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{30:function(e,a,t){e.exports=t(61)},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(25),l=t.n(r),s=t(11),o=t(8),i=t(2),u=t(5),m=t.n(u),d=t(6);function p(e){var a=void 0!==e.label||""!==e.label,t=e.isPassword?"password":e.isMail?"mail":"";return c.a.createElement("div",{className:"inputText_container"},a&&c.a.createElement("label",{className:"inputText_label"},e.label),c.a.createElement("input",{className:"inputText_input",onKeyDown:function(a){if(e.onEnter&&"Enter"===a.key)return console.log("try to enter "),e.onEnter(a)},onChange:function(a){if(e.onChangeValue)return e.onChangeValue(a.target.value)},type:t,defaultValue:e.defaultValue}))}function f(e){var a=e.delayActionTime,t=e.onClick,n=e.className,r=e.label,l=e.link;return c.a.createElement("input",{onClick:l?function(){return a?setTimeout((function(){return c.a.createElement(o.a,{to:l})}),a):c.a.createElement(o.a,{to:l})}:function(e){return a?setTimeout((function(){t(e)}),a):t(e)},type:"button",className:"btn ".concat(n),value:r})}var v=t(29),E=t(1),g={token:localStorage.localToken||null,user:{}},b=function(e,a){if("OK"===a.payload.status){var t=a.payload,n=t.token,c=t.user;localStorage.localToken=n;var r=Object(E.a)({},e,{profil:Object(E.a)({},e.profil,{connected:!0,token:n,user:c})});return Object(E.a)({},r)}return e},h=function(){return!1},y=t(7),N=t.n(y),_=t(10),k=t.n(_),O=function(e){return N.a.get("".concat("https://bettroad-back.david6.fr","/gamedays"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.data})).catch((function(e){return console.log("================="),console.log(e),e}))},j=function(e){return k()(e).format("LL")},w=function(e,a){var t=a.payload[1],n=function(e){var a=t.find((function(a){return a.id===e}));if(void 0!==a)return{id:a.id,name:a.name}};console.log("action.payload : ",a.payload);var c=a.payload[0].map((function(e){return Object(E.a)({},e,{betstypes:e.betstypes.map((function(e){return Object(E.a)({},e,{betstype_categorie:n(e.betstype_categorie)})}))})})),r=c.filter((function(e){return k()(e.day).isBefore(Date.now())&&e})).sort((function(e,a){return e.day<a.day})).map((function(e){return Object(E.a)({},e,{day:j(e.day)})})),l=c.filter((function(e){return k()(e.day).isAfter(Date.now())&&e})).sort((function(e,a){return e.day>a.day})).map((function(e){return Object(E.a)({},e,{day:j(e.day)})}));return Object(E.a)({},e,{gamedays:{next:l[0],futuregames:l.splice(1,l.length),pastgames:r}})},x=function(e,a){return Object(E.a)({},e,{playersTeam:a.payload})};function z(e,a){switch(a.type){case"login":return b(e,a);case"logout":return h(e,a);case"storegamedays":return w(e,a);case"saveplayers":return x(e,a);default:console.log("noope")}}var C={profil:Object(E.a)({},g),gamedays:Object(E.a)({},{next:null,futureGames:null,pastGames:null}),playersTeam:Object(v.a)([])},T=Object(n.createContext)(C),S=function(e){var a=e.children,t=Object(n.useReducer)(z,C),r=Object(d.a)(t,2),l=r[0],s=r[1];return c.a.createElement(T.Provider,{value:{state:l,dispatch:s}},a)},V=function(){var e=Object(n.useContext)(T);return{state:e.state,dispatch:e.dispatch}},A=function(e,a){return N.a.post("".concat("https://bettroad-back.david6.fr","/auth/local"),{identifier:e,password:a}).then((function(e){var a={status:"OK",token:e.data.jwt,user:{id:e.data.user.id,name:e.data.user.username,role:e.data.user.role.name,confirmed:e.data.user.confirmed}};if("OK"===e.statusText)return a})).catch((function(e){return console.log("================="),console.log(e),{status:"ERROR",token:!1}}))};function I(){var e=V(),a=(e.state,e.dispatch),t=Object(n.useState)(""),r=Object(d.a)(t,2),l=r[0],s=r[1],i=Object(n.useState)(""),u=Object(d.a)(i,2),v=u[0],E=u[1],g=Object(n.useState)(!1),b=Object(d.a)(g,2),h=b[0],y=b[1],N=function(e){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,m.a.awrap(A(l,v));case 3:if("OK"!==(t=n.sent).status){n.next=7;break}return h&&y(!0),n.abrupt("return",a({type:"login",payload:t}));case 7:return n.abrupt("return",y(!0));case 8:case"end":return n.stop()}}))};return localStorage.localToken?c.a.createElement(o.a,{to:"/"}):c.a.createElement("section",{className:"login_page"},c.a.createElement("div",null,h&&"vos identifiants sont incorrects"),c.a.createElement("form",{className:"form_connect",method:"post",onSubmit:N},c.a.createElement(p,{isMail:!0,label:"Votre login",onChangeValue:function(e){return s(e)},defaultValue:"",onEnter:N}),c.a.createElement(p,{isPassword:!0,label:"Votre mot de passe",onChangeValue:function(e){return E(e)},defaultValue:"",onEnter:N}),c.a.createElement(f,{label:"Se connecter !",onClick:N})))}var B=function(e){return N.a.get("".concat("https://bettroad-back.david6.fr","/betstype-categories"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.data})).catch((function(e){return console.log("================="),console.log(e),e}))},D=function(e){return N.a.get("".concat("https://bettroad-back.david6.fr","/players"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.data.map((function(e){return e.name}))})).catch((function(e){return console.log("================="),console.log(e),e}))},K=function(e){var a,t,n;return m.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,m.a.awrap(O(e));case 2:return a=c.sent,c.next=5,m.a.awrap(B(e));case 5:return t=c.sent,c.next=8,m.a.awrap(D(e));case 8:return n=c.sent,c.abrupt("return",[a,t,n]);case 10:case"end":return c.stop()}}))},P=t(28),L=t.n(P);function M(e){return c.a.createElement("div",{className:"modal_container"},c.a.createElement("div",{className:"shadow_back",onClick:function(){return e.closeAction()}}),c.a.createElement("div",{className:"modal"},e.children))}function R(e){var a=e.label,t=e.className;return c.a.createElement("span",{className:"badge ".concat(t)},c.a.createElement("p",null,a))}function G(e){var a=e.name,t=e.size,n=e.color;if("stadium"===a)return c.a.createElement("span",{className:"picto_container"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -1 512.01423 512",height:t,width:t,className:""},c.a.createElement("g",null,c.a.createElement("path",{d:"m352.492188 194.214844h-192.96875c-2.953126.015625-5.703126 1.503906-7.328126 3.972656l-20.039062 32.308594c41.054688 5.445312 82.4375 8.070312 123.851562 7.855468 41.414063.214844 82.792969-2.410156 123.851563-7.855468l-20.214844-32.574219c-1.628906-2.339844-4.304687-3.722656-7.152343-3.707031zm0 0","data-original":"#000000",className:"active-path","data-old_color":"#000000",fill:n}),c.a.createElement("path",{d:"m113.175781 227.582031 24.1875-39.019531c4.894531-7.472656 13.222657-11.984375 22.160157-12.003906h192.96875c1.148437 0 2.207031.089844 3.265624.175781 7.667969.957031 14.535157 5.210937 18.804688 11.652344l24.273438 39.195312c60.558593-10.152343 95.515624-25.6875 95.515624-37.78125 0-10.371093-25.601562-23.226562-70.9375-33.105469.230469-.667968.371094-1.367187.421876-2.074218v-110.476563c0-4.875-3.949219-8.828125-8.828126-8.828125-2.664062.03125-5.167968 1.285156-6.785156 3.398438l-51.203125 25.601562c-2.386719 1.199219-3.894531 3.640625-3.894531 6.3125s1.507812 5.113282 3.894531 6.3125l49.171875 24.582032v51.738281c-46.699218-7.9375-93.984375-11.941407-141.355468-11.960938v-132.464843c0-4.875-3.953126-8.8281255-8.828126-8.8281255-2.664062.0273437-5.164062 1.2773435-6.789062 3.3906255l-51.199219 25.597656c-2.386719 1.199218-3.894531 3.640625-3.894531 6.3125s1.507812 5.113281 3.894531 6.3125l49.160157 24.59375v75.085937c-44.421876.078125-88.773438 3.578125-132.660157 10.460938.175781-.546875.292969-1.113281.351563-1.6875v-108.824219c0-4.875-3.953125-8.828125-8.828125-8.828125-4.175781.039063-7.738281 3.035156-8.492188 7.140625l-49.503906 24.71875c-2.386719 1.199219-3.894531 3.640625-3.894531 6.3125 0 2.667969 1.507812 5.113281 3.894531 6.308594l49.167969 24.585937v48.585938c.042968 1.617187.539062 3.191406 1.433594 4.539062-51.597657 10.089844-80.984376 24.0625-80.984376 35.1875 0 12.09375 34.957032 27.628907 95.511719 37.78125zm0 0","data-original":"#000000",className:"active-path","data-old_color":"#000000",fill:n}),c.a.createElement("path",{d:"m105.9375 326.628906c0-14.628906-11.855469-26.484375-26.480469-26.484375-14.628906 0-26.484375 11.855469-26.484375 26.484375v139.210938c16.96875 8.1875 34.710938 14.664062 52.964844 19.332031zm0 0","data-original":"#000000",className:"active-path","data-old_color":"#000000",fill:n}),c.a.createElement("path",{d:"m35.316406 466.28125v-139.652344c0-24.378906 19.761719-44.140625 44.140625-44.140625 24.375 0 44.136719 19.761719 44.136719 44.140625v158.894532c-.019531 4.316406-.703125 8.605468-2.03125 12.710937 26.847656 5.84375 54.074219 9.765625 81.480469 11.742187v-156.867187c0-29.25 23.710937-52.964844 52.964843-52.964844 29.25 0 52.964844 23.714844 52.964844 52.964844v156.867187c27.402344-1.980468 54.628906-5.90625 81.480469-11.742187-1.328125-4.105469-2.015625-8.394531-2.03125-12.710937v-158.894532c0-24.378906 19.761719-44.140625 44.136719-44.140625s44.136718 19.761719 44.136718 44.140625v139.652344c7.527344-4.476562 14.464844-9.875 20.65625-16.066406 8.804688-7.9375 14.078126-19.058594 14.65625-30.898438v-225.101562c-.03125 1.605468-.308593 3.199218-.820312 4.722656.511719-1.523438.789062-3.117188.820312-4.722656.027344-.652344-.03125-1.304688-.175781-1.941406-1.855469 16.066406-21.453125 29.128906-52.085937 39.28125 13.578125-3.851563 26.519531-9.671876 38.410156-17.277344-34.496094 24.285156-129.828125 41.730468-242.148438 41.730468-43.105468.160157-86.167968-2.648437-128.882812-8.40625-1.765625-.253906-3.285156-.519531-5.015625-.773437l-.050781.050781c-49.824219-7.386718-88.277344-18.792968-107.820313-32.34375 11.921875 7.546875 24.882813 13.308594 38.46875 17.109375-30.71875-10.066406-50.492187-23.128906-52.523437-39.109375-.1445315.546875-.2070315 1.113282-.1757815 1.679688.0273437 1.613281.3046875 3.210937.8203125 4.738281-.511719-1.527344-.7890625-3.125-.8203125-4.738281v225.101562c.5781255 11.839844 5.8515625 22.960938 14.6523435 30.898438 6.191406 6.191406 13.132813 11.589844 20.65625 16.066406zm472.851563-261.472656c-2.789063 3.675781-6.167969 6.867187-10.003907 9.433594 3.835938-2.566407 7.214844-5.757813 10.003907-9.433594zm2.761719-5.078125c-.605469 1.613281-1.40625 3.144531-2.382813 4.566406.980469-1.410156 1.777344-2.933594 2.382813-4.539063zm-506.96875 5.246093c2.726562 3.554688 6.007812 6.652344 9.710937 9.171876-3.699219-2.515626-6.980469-5.601563-9.710937-9.148438zm-2.867188-5.210937c.601562 1.597656 1.394531 3.117187 2.363281 4.519531-.964843-1.394531-1.761719-2.902344-2.363281-4.492187zm0 0","data-original":"#000000",className:"active-path","data-old_color":"#000000",fill:n}),c.a.createElement("path",{d:"m459.042969 326.628906c0-14.628906-11.859375-26.484375-26.484375-26.484375s-26.484375 11.855469-26.484375 26.484375v158.542969c18.253906-4.667969 35.996093-11.144531 52.96875-19.332031zm0 0","data-original":"#000000",className:"active-path","data-old_color":"#000000",fill:n}),c.a.createElement("path",{d:"m291.316406 502.296875v-149.1875c0-19.5-15.808594-35.308594-35.308594-35.308594-19.503906 0-35.3125 15.808594-35.3125 35.308594v149.1875c23.835938 1.148437 46.789063 1.148437 70.621094 0zm0 0","data-original":"#000000",className:"active-path","data-old_color":"#000000",fill:n}))," "))}function J(e){var a=e.gameInfos,t=(e.type,e.onClick,a);return c.a.createElement("div",{className:"vignet past_game "},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-85"},c.a.createElement("h3",null,t.day),c.a.createElement("p",{className:"location"},c.a.createElement(G,{name:"stadium",color:"#2C4153",size:"30"})," ",c.a.createElement("span",{className:"game_location_name"},t.city)),c.a.createElement("div",{className:"vignet_bets_container"},c.a.createElement("h4",null,"les paris ouverts :"),c.a.createElement("div",{className:"horizontal_list vignet_bets_list"},t.betstypes.map((function(e){return c.a.createElement(R,{key:e.id,label:e.name,className:"vignet_bet"})})))))))}function Q(e){var a=e.gameInfos,t=e.type,n=e.onClick,r=a;return c.a.createElement("div",{className:"vignet next_game ".concat(t)},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-85"},c.a.createElement("h3",null,r.day),c.a.createElement("p",{className:"location"},c.a.createElement(G,{name:"stadium",color:"#2C4153",size:"30"})," ",c.a.createElement("span",{className:"game_location_name"},r.city)),c.a.createElement("div",{className:"vignet_bets_container"},c.a.createElement("h4",null,"les paris ouverts :"),c.a.createElement("div",{className:"horizontal_list vignet_bets_list"},r.betstypes.map((function(e){return c.a.createElement(R,{key:e.id,label:e.name,className:"vignet_bet"})}))))),c.a.createElement("div",{className:"col-15 btn-fullsize"},c.a.createElement(f,{label:"pariez !",className:"btn_fullsize",onClick:n}))))}function q(e){var a=e.gameInfos,t=(e.onClick,a);return c.a.createElement("div",{className:"vignet future_game"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-85"},c.a.createElement("h4",null,t.day),c.a.createElement("p",{className:"location"},c.a.createElement(G,{name:"stadium",color:"#2C4153",size:"30"})," ",c.a.createElement("span",{className:"game_location_name"},t.city)),t.betstypes.length>1?c.a.createElement("div",{className:"vignet_bets_container"},c.a.createElement("h4",null,"les paris ouverts :"),c.a.createElement("div",{className:"horizontal_list vignet_bets_list"},t.betstypes.map((function(e){return c.a.createElement(R,{key:e.id,label:e.name,className:"vignet_bet"})})))):c.a.createElement("div",null,"Aucun paris disponnible"))))}function F(e){var a=V(),t=a.state,r=a.dispatch,l=Object(n.useState)(!1),s=Object(d.a)(l,2),o=s[0],i=s[1],u=Object(n.useState)(!1),p=Object(d.a)(u,2),v=p[0],E=p[1],g=Object(n.useState)(!1),b=Object(d.a)(g,2),h=b[0],y=b[1],N=function(e){switch(e){case"Equipe":return"Quelle equipe";case"Joueur":return c.a.createElement("div",null,c.a.createElement("select",null,t.playersTeam.map((function(e,a){return c.a.createElement("option",{key:a},e)}))));case"Nombre":return"Quel nombre";case"Oui/Non":return c.a.createElement("div",null,h?"Oui":"Non",c.a.createElement(L.a,{onChange:y,checked:h,className:"react-switch",id:"normal-switch"}));case"Temps":return"Quel temps";default:return"fuck"}};return Object(n.useEffect)((function(){o||null!==t.gamedays.next||function(){var e;m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.awrap(K(t.profil.token));case 2:return e=a.sent,r({type:"storegamedays",payload:[e[0],e[1]]}),r({type:"saveplayers",payload:e[2]}),a.abrupt("return",{status:"ok"});case 6:case"end":return a.stop()}}))}(),null!==t.gamedays.next&&i(!0),console.log(t)}),[o,t]),o?c.a.createElement("div",{className:"page calendar"},c.a.createElement("section",{className:"section_games"},c.a.createElement("div",{className:"next_game_container"},c.a.createElement("h2",null,"Prochaine journ\xe9e de match"),c.a.createElement(Q,{gameInfos:t.gamedays.next,onClick:function(){return E(!0)}}))),c.a.createElement("section",{className:"section_games"},c.a.createElement("div",{className:"future_games_container"},c.a.createElement("h2",null,"Matchs \xe0 venir"),c.a.createElement("div",{className:"future_games_list"},t.gamedays.futuregames.map((function(e){return c.a.createElement(q,{key:e.id,gameInfos:e})}))))),c.a.createElement("section",{className:"section_games"},c.a.createElement("div",{className:"past_games_container"},c.a.createElement("h2",null,"Matchs d\xe9j\xe0 jou\xe9s"),c.a.createElement("div",{className:"past_games_list"},t.gamedays.pastgames.map((function(e){return c.a.createElement(J,{key:e.id,gameInfos:e})}))))),v&&c.a.createElement(M,{closeAction:function(){return E(!1)}},t.gamedays.next.betstypes.map((function(e){return console.log(e.betstype_categorie.name),c.a.createElement("div",{key:e.id},e.name,N(e.betstype_categorie.name))})),c.a.createElement(f,{label:"Soumettre le pari !"}))):c.a.createElement("div",null,"LOADING...")}function H(e){return c.a.createElement("div",null," gameday ")}t(60);var U=Object(i.a)();l.a.render(c.a.createElement((function(){var e=function(e){return localStorage.localToken||"LoginPage"===e.type.name?c.a.createElement(S,null,e):c.a.createElement(S,null,c.a.createElement(I,null))};return c.a.createElement(s.a,{history:U},c.a.createElement(o.b,{exact:!0,path:"/",render:function(){return e(c.a.createElement(F,null))}}),c.a.createElement(o.b,{exact:!0,path:"/login",render:function(){return e(c.a.createElement(I,null))}}),c.a.createElement(o.b,{exact:!0,path:"/betscalendar",render:function(){return e(c.a.createElement(F,null))}}),c.a.createElement(o.b,{exact:!0,path:"/gamedays/:id",render:function(){return e(c.a.createElement(H,null))}}))}),null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.7b453716.chunk.js.map