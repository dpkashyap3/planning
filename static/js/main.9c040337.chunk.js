(this.webpackJsonpplanner=this.webpackJsonpplanner||[]).push([[0],{43:function(e,a,t){e.exports=t(57)},45:function(e,a,t){},50:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=(t(45),t(9)),c=t.n(l),m=(t(49),t(60)),s=t(61),u=t(42),i=(t(50),t(12)),o=t(62),E=t(64),d=t(63),b=t(59),p=t(6);var f=Object(p.b)(null,{createTeam:function(e,a,t){return{type:"CREATE_TEAM",name:e,ttype:a,users:t}}})((function(e){var a=e.createTeam,t=Object(n.useState)(""),l=Object(i.a)(t,2),c=l[0],m=l[1];return r.a.createElement(o.a,{bg:"light",expand:"lg"},r.a.createElement(o.a.Brand,{href:"#home"},"Planner"),r.a.createElement(E.a,{className:"ml-auto"},r.a.createElement(d.a,{inline:!0},r.a.createElement(d.a.Label,{className:"mr-2 ml-2",type:"label"},"Select Type"),r.a.createElement(d.a.Control,{as:"select",size:"sm"},r.a.createElement("option",null,"Choose Any"),r.a.createElement("option",null,"Teams")),r.a.createElement(d.a.Label,{className:"ml-2 mr-2"},"Team Name"),r.a.createElement(d.a.Control,{type:"text",size:"sm",placeholder:"Enter Here",id:"name",onChange:function(e){return m(e.target.value)}}),r.a.createElement(b.a,{className:"ml-2",variant:"warning",size:"sm",onClick:function(){return a(c,"Teams")}},"CREATE"))))})),h=t(66);var v=Object(p.b)((function(e){return{data:e}}),{setTeam:function(e){return{type:"SET_TEAM",item:e}}})((function(e){var a=e.data.teams;return r.a.createElement(m.a,null,r.a.createElement("h2",{className:"mb-5 mt-5"},"Teams"),r.a.createElement(h.a,null,a.map((function(a,t){return r.a.createElement(h.a.Item,{style:{cursor:"pointer"},className:"ListItem",variant:"primary",key:t,onClick:function(){e.setTeam(a)}},a.name)}))))})),y=t(65);var g=Object(p.b)(null,{createUser:function(e,a,t){return{type:"CREATE_USER",id:e,name:a,desc:t}}})((function(e){var a=e.createUser,t=e.id,l=Object(n.useState)(""),c=Object(i.a)(l,2),u=c[0],o=c[1],E=Object(n.useState)(""),p=Object(i.a)(E,2),f=p[0],h=p[1];return r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement(y.a,{className:"mb-2 ml-5 bg-secondary text-white"},r.a.createElement(y.a.Body,null,r.a.createElement(d.a.Label,{className:"ml-2 mr-2"},"Name"),r.a.createElement(d.a.Control,{type:"text",id:"username",size:"sm",onChange:function(e){return o(e.target.value)},placeholder:"Enter Here"}),r.a.createElement(d.a.Label,{className:"ml-2 mr-2"},"Description"),r.a.createElement(d.a.Control,{as:"textarea",id:"desc",size:"sm",onChange:function(e){return h(e.target.value)},placeholder:"Enter Here"}),r.a.createElement("hr",null),r.a.createElement(b.a,{variant:"warning",size:"sm",onClick:function(){return a(t,u,f)}},"Create User +")))))}));var C=Object(p.b)((function(e){return{data:e.users}}),{deleteUser:function(e){return{type:"DELETE_USER",key:e}}})((function(e){return r.a.createElement(m.a,{className:"top-bottom"},e.data.map((function(a){return r.a.createElement(s.a,{key:a.id},r.a.createElement(y.a,{className:"mb-2 bg-light text-dark"},r.a.createElement(y.a.Body,null,r.a.createElement(d.a.Label,{className:"ml-2 mr-2"},"Name"),r.a.createElement(d.a.Control,{type:"text",size:"sm",placeholder:"Enter Here",value:a.name,disabled:!0}),r.a.createElement(d.a.Label,{className:"ml-2 mr-2"},"Desciption"),r.a.createElement(d.a.Control,{style:{resize:"none",maxHeight:"500px"},as:"textarea",size:"sm",placeholder:"Enter Here",value:a.desc,disabled:!0}),r.a.createElement("hr",null),r.a.createElement(b.a,{variant:"danger",size:"sm",onClick:function(){return e.deleteUser(a.id)}},"Delete User"))))})))})),T=t(41);var N=Object(p.b)(null,{searchUser:function(e){return{type:"SEARCH_USER",name:e}}})((function(e){var a=Object(n.useState)(),t=Object(i.a)(a,2),l=t[0],c=t[1];return r.a.createElement(m.a,null,r.a.createElement(o.a,null,r.a.createElement(d.a,{inline:!0,className:"ml-auto"},r.a.createElement(T.a,null,r.a.createElement(d.a.Label,{className:"mr-2 ml-2",type:"label"},"Search"),r.a.createElement(d.a.Control,{type:"text",size:"sm",placeholder:"Enter Username",onChange:function(e){return c(e.target.value)}}),r.a.createElement(b.a,{className:"ml-2",variant:"warning",size:"sm",onClick:function(){return e.searchUser(l)}},"Go..")))))}));var j=Object(p.b)((function(e){return{data:e}}),null)((function(e){var a=e.data.setTeam;return r.a.createElement(m.a,null,r.a.createElement("h2",{className:"mt-5 display-4"},a?a.name:"Select Your Team"),a.id?r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("hr",null),r.a.createElement(m.a,{style:{display:"flex",overflow:"auto",maxHeight:"700px",width:"100%"}},r.a.createElement(s.a,null,r.a.createElement(g,{id:a.id})),r.a.createElement(m.a,{className:"top-bottom"},r.a.createElement(C,null)))):null)}));var O=function(){return r.a.createElement(m.a,{fluid:"false"},r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement(f,null))),r.a.createElement(s.a,null,r.a.createElement(u.a,{lg:2,md:2,sm:12,style:{minHeight:"100%"},className:"bg-secondary text-white"},r.a.createElement(v,null)),r.a.createElement(u.a,{lg:8,md:8,sm:12,style:{height:"92.4vh"}},r.a.createElement(j,null))))},S=t(15),x=t(26),U=[],R=0,k=[],w=0,z=[],A=Object(S.b)({teams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CREATE_TEAM":return e=[].concat(Object(x.a)(e),[{id:R+=1,name:a.name,ttype:a.ttype,users:a.users}]);default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CREATE_USER":return e=[].concat(Object(x.a)(e),[{id:w+=1,teamid:a.id,name:a.name,desc:a.desc}]),console.log(e),e;case"DELETE_USER":var t=e.filter((function(e){return e.id!==a.key}));return t;case"SEARCH_USER":var n=e.filter((function(e){return e.name===a.name}));return n||e;default:return e}},setTeam:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_TEAM":return console.log(e),a.item;default:return e}}}),H=Object(S.c)(A);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:H},r.a.createElement(O,null))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9c040337.chunk.js.map