(this.webpackJsonpplanner=this.webpackJsonpplanner||[]).push([[0],{43:function(e){e.exports=JSON.parse('[{"id":1,"name":"Team 1","type":"Teams","users":[{"id":1,"name":"Deepak","desc":"sajdfjaskfjksdfjsd"},{"id":2,"name":"Deep","desc":"sajdfjaskfjksdfjsd"},{"id":3,"name":"Kriyansh","desc":"sajdfjaskfjksdfjsd"}]},{"id":2,"name":"Team 2","type":"Teams","users":[{"id":1,"name":"Pawan","desc":"sajdfjaskfjksdfjsd"},{"id":2,"name":"Arzoo","desc":"sajdfjaskfjksdfjsd"},{"id":3,"name":"Mitansh","desc":"sajdfjaskfjksdfjsd"}]},{"id":3,"name":"Team 3","type":"Teams","users":[{"id":1,"name":"Chaman Lal","desc":"sajdfjaskfjksdfjsd"},{"id":2,"name":"Kamlesh","desc":"sajdfjaskfjksdfjsd"},{"id":3,"name":"Dinki","desc":"sajdfjaskfjksdfjsd"},{"id":4,"name":"Ankit","desc":"sajdfjaskfjksdfjsd"}]}]')},44:function(e,a,t){e.exports=t(58)},46:function(e,a,t){},51:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=(t(46),t(9)),s=t.n(l),c=(t(50),t(61)),m=t(62),i=t(42),u=(t(51),t(18)),d=t(63),o=t(65),E=t(64),f=t(60),j=t(7);var p=Object(j.b)(null,{createTeam:function(e,a,t){return{type:"CREATE_TEAM",name:e,ttype:a,users:t}}})((function(e){var a=e.createTeam,t=Object(n.useState)(""),l=Object(u.a)(t,2),s=l[0],c=l[1];return r.a.createElement(d.a,{bg:"light",expand:"lg"},r.a.createElement(d.a.Brand,{href:"#home"},"Planner"),r.a.createElement(o.a,{className:"ml-auto"},r.a.createElement(E.a,{inline:!0},r.a.createElement(E.a.Label,{className:"mr-2 ml-2",type:"label"},"Select Type"),r.a.createElement(E.a.Control,{as:"select",size:"sm"},r.a.createElement("option",null,"Choose Any"),r.a.createElement("option",null,"Teams")),r.a.createElement(E.a.Label,{className:"ml-2 mr-2"},"Team Name"),r.a.createElement(E.a.Control,{type:"text",size:"sm",placeholder:"Enter Here",id:"name",onChange:function(e){return c(e.target.value)}}),r.a.createElement(f.a,{className:"ml-2",variant:"warning",size:"sm",onClick:function(){return a(s,"Teams")}},"CREATE"))))})),h=t(67);var b=Object(j.b)((function(e){return{data:e}}),{setTeam:function(e){return{type:"SET_TEAM",item:e}}})((function(e){var a=e.data.teams;return r.a.createElement(c.a,null,r.a.createElement("h2",{className:"mb-5 mt-5"},"Teams"),r.a.createElement(h.a,null,a.map((function(a,t){return r.a.createElement(h.a.Item,{style:{cursor:"pointer"},className:"ListItem",variant:"primary",key:t,onClick:function(){e.setTeam(a)}},a.data.name)}))))})),v=t(66);var y=Object(j.b)(null,{createUser:function(e,a,t){return{type:"CREATE_USER",id:e,name:a,desc:t}}})((function(e){var a=e.createUser,t=e.id,l=Object(n.useState)(""),s=Object(u.a)(l,2),i=s[0],d=s[1],o=Object(n.useState)(""),j=Object(u.a)(o,2),p=j[0],h=j[1];return r.a.createElement(c.a,null,r.a.createElement(m.a,null,r.a.createElement(v.a,{className:"mb-2 bg-secondary text-white"},r.a.createElement(v.a.Body,null,r.a.createElement(E.a.Label,{className:"ml-2 mr-2"},"Name"),r.a.createElement(E.a.Control,{type:"text",id:"name",size:"sm",onChange:function(e){return d(e.target.value)},placeholder:"Enter Here"}),r.a.createElement(E.a.Label,{className:"ml-2 mr-2"},"Description"),r.a.createElement(E.a.Control,{as:"textarea",id:"desc",size:"sm",onChange:function(e){return h(e.target.value)},placeholder:"Enter Here"}),r.a.createElement("hr",null),r.a.createElement(f.a,{variant:"warning",size:"sm",onClick:function(){return a(t,i,p)}},"Create User +")))))}));var k=Object(j.b)((function(e){return{data:e}}),null)((function(e){var a=e.data.users;return r.a.createElement(c.a,{className:"top-bottom"},a?a.map((function(e,t){return r.a.createElement(m.a,{key:t},r.a.createElement(v.a,{className:"mb-2 bg-light text-dark"},r.a.createElement(v.a.Body,null,r.a.createElement(E.a.Label,{className:"ml-2 mr-2"},"Name"),r.a.createElement(E.a.Control,{type:"text",size:"sm",placeholder:"Enter Here",value:e.user.name,disabled:!0}),r.a.createElement(E.a.Label,{className:"ml-2 mr-2"},"Desciption"),r.a.createElement(E.a.Control,{style:{resize:"none",maxHeight:"500px"},as:"textarea",size:"sm",placeholder:"Enter Here",value:e.user.desc,disabled:!0}),r.a.createElement("hr",null),r.a.createElement(f.a,{variant:"danger",size:"sm",onClick:function(){return function(e){var t=a.filter((function(a){return a.keyyar!==e}));console.log(t)}(t)}},"Delete User +"))))})):null)})),g=t(43),T=t(41);var N=function(){return r.a.createElement(c.a,null,r.a.createElement(d.a,null,r.a.createElement(E.a,{inline:!0,className:"ml-auto"},r.a.createElement(T.a,null,r.a.createElement(E.a.Label,{className:"mr-2 ml-2",type:"label"},"Search"),r.a.createElement(E.a.Control,{type:"text",size:"sm",placeholder:"Enter Username"}),r.a.createElement(f.a,{className:"ml-2",variant:"warning",size:"sm"},"Go..")))))};var C=Object(j.b)((function(e){return{data:e}}),null)((function(e){var a=e.data.setTeam.data;return r.a.createElement(c.a,null,r.a.createElement("h2",{className:"mt-5 display-4"},a?a.name:"Select Your Team"),a?r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("hr",null),r.a.createElement(c.a,{style:{display:"flex",overflow:"auto",overflowY:"hidden",maxHeight:"650px"}},r.a.createElement(m.a,null,r.a.createElement(y,{id:a.id})),r.a.createElement(c.a,{className:"top-bottom"},g.map((function(e){return r.a.createElement(k,{key:e.id,Data:e.users})}))))):null)}));var x=function(){return r.a.createElement(c.a,{fluid:"false"},r.a.createElement(m.a,null,r.a.createElement(i.a,null,r.a.createElement(p,null))),r.a.createElement(m.a,null,r.a.createElement(i.a,{lg:2,md:2,sm:12,style:{minHeight:"100%"},className:"bg-secondary text-white"},r.a.createElement(b,null)),r.a.createElement(i.a,{lg:8,md:8,sm:12,style:{height:"92.4vh"}},r.a.createElement(C,null))))},O=t(14),w=t(26),z=[],A=0,S=[],L=[],H=Object(O.b)({teams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CREATE_TEAM":var t={id:A+=1,name:a.name,ttype:a.ttype,users:a.users};return e=[].concat(Object(w.a)(e),[{data:t}]);default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CREATE_USER":var t={id:a.id,name:a.name,desc:a.desc};return e=[].concat(Object(w.a)(e),[{user:t}]);default:return e}},setTeam:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_TEAM":return a.item;default:return e}}}),D=Object(O.c)(H);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j.a,{store:D},r.a.createElement(x,null))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.2d64714c.chunk.js.map