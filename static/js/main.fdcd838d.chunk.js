(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{21:function(e,t,n){e.exports=n(51)},26:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),u=n.n(l),c=(n(26),n(2)),i=n(18),o=n.n(i),s=Object(c.b)(null,(function(e){return{handleClick:function(t){return e({type:"ADD_NOMINEE",payload:t})}}}))((function(e){var t=e.results,n=e.handleClick;return t.map((function(e){return r.a.createElement("div",null,r.a.createElement("li",{key:e.imdbid},e.Title," ",e.year),r.a.createElement("button",{onClick:function(){return n(e)}}," Nominate "))}))})),m=Object(c.b)(null,(function(e){return{handleClick:function(t){return e({type:"DELETE_NOMINEE",payload:t})}}}))((function(e){var t=e.nominees,n=e.handleClick;return t.map((function(e){return r.a.createElement("div",null,r.a.createElement("li",{key:e.imdbid},e.Title," ",e.year),r.a.createElement("button",{onClick:function(){return n(e)}}," Remove "))}))})),E=(n(50),Object(c.b)((function(e){return{nominees:e.nominees,results:e.results}}),(function(e){return{handleGetResults:function(t){t.preventDefault();var n=t.target.title.value;e(function(e){return function(t){o.a.get("https://www.omdbapi.com/?s=".concat(e,"&apikey=dcf6bc4b")).then((function(e){return e.data})).then((function(e){return t(function(e){return{type:"FETCH_RESULTS",payload:e}}(e.Search))})).catch(console.error)}}(n))}}}))((function(e){var t=e.nominees,n=e.results,a=e.handleGetResults;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:a},r.a.createElement("label",null,"Title"),r.a.createElement("input",{name:"title",type:"text"}),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("p",null,"Results"),r.a.createElement(s,{results:n}),r.a.createElement("p",null,"Nominees"),r.a.createElement(m,{nominees:t}),t[4]&&r.a.createElement("alert",null,"You have 5 nominees!"))}))),d=n(3),p=n(19),f=n(20),b=[],h=[],y=Object(d.c)({nominees:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NOMINEE":return e.includes(t.payload)?e:[].concat(Object(f.a)(e),[t.payload]);case"DELETE_NOMINEE":return e.filter((function(e){return e!==t.payload}));default:return e}},results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_RESULTS":return t.payload;default:return e}}}),v=Object(d.d)(y,{},Object(d.a)(p.a));u.a.render(r.a.createElement(c.a,{store:v},r.a.createElement(E,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.fdcd838d.chunk.js.map