(window["webpackJsonpreact-app"]=window["webpackJsonpreact-app"]||[]).push([[0],{37:function(t,e,n){t.exports=n(66)},66:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(32),c=n.n(r),l=n(19),i=n(6),d=n(7),s=n(9),u=n(8),p=n(10),m=n(14),h=n(11),f=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{textDecoration:n.props.todo.completed?"line-through":"none",background:"#f4f4f4",padding:" 10px",paddingRight:"20px",borderBottom:"1px #ccc dotted"}},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",n," ",a.a.createElement("button",{style:b,onClick:this.props.delTodo.bind(this,e)},"x")))}}]),e}(o.Component),b={background:"#ff0000",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},v=f,g=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return console.log(this.props.todos),this.props.todos.map((function(e){return a.a.createElement(v,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(a.a.Component);var y={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},E={color:"#fff",textDecoration:"none"},j=function(){return a.a.createElement("header",{style:y},a.a.createElement("h1",null,"TodoList"),a.a.createElement(m.b,{style:E,to:"/"},"Home")," ","|"," ",a.a.createElement(m.b,{style:E,to:"/about"},"About"))},O=n(35),k=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(t){return n.setState(Object(O.a)({},t.target.name,t.target.value))},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{style:{display:"flex"},onSubmit:this.onSubmit},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange,style:{flex:"10",padding:"5px"}}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);function x(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is Todolist app v1.0.0 It is part of React Module."))}var w=n(36),C=n.n(w),T=n(18),S=n.n(T),A=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n.delTodo=function(t){S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter((function(e){return e.id!==t})))})}))},n.addTodo=function(t){var e={id:C.a.v4(),title:t,completed:!1};n.setState({todos:[].concat(Object(l.a)(n.state.todos),[e])})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(j,null),a.a.createElement(h.a,{path:"/",exact:!0,render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{addTodo:t.addTodo}),a.a.createElement(g,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(h.a,{path:"/about",component:x}))))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.338a76ac.chunk.js.map