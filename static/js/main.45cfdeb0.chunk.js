(this.webpackJsonpsavakhed=this.webpackJsonpsavakhed||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),i=a(1),n=a.n(i),c=a(6),o=a.n(c),r=(a(13),a(2)),l=a(3),h=a(5),d=a(4);a(14),a(15),a(16);var m=function(e){return console.log(e),Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"heading",children:e.bookName}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"description",children:e.children})]})},b=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={gotData:!1,resultScore:0,url:"",license:"",articleBody:"",name:"",description:"",temp:""},e}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){var a=JSON.parse(t.responseText);e.setState({gotData:!0,resultScore:a.itemListElement[0].resultScore,url:a.itemListElement[0].result.detailedDescription.url,license:a.itemListElement[0].result.detailedDescription.license,articleBody:a.itemListElement[0].result.detailedDescription.articleBody,name:a.itemListElement[0].result.name,description:a.itemListElement[0].result.description})})),t.open("GET","https://kgsearch.googleapis.com/v1/entities:search?query="+["the","alchemist"]+"&key=AIzaSyAY9Boy7kdeOmi7JYAfI2zR8Ij3iF_zgxM&limit=1&indent=True"),t.send()}},{key:"render",value:function(){var e=this.state;e.jsonData,e.resultScore,e.url,e.license,e.name,e.description;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"details_back",children:[Object(s.jsx)("a",{href:"#/search",children:Object(s.jsx)("button",{className:"back_btn",children:"Go Back"})}),Object(s.jsx)("hr",{className:"hr"})]}),Object(s.jsx)("div",{className:"flex-container",children:Object(s.jsxs)("div",{className:"cardDetails",children:[Object(s.jsx)("div",{className:"details_image",children:Object(s.jsx)("img",{src:"https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",alt:"Book Image",className:"book_image"})}),Object(s.jsxs)("div",{className:"book_details",children:[Object(s.jsxs)("div",{className:"rows",children:[Object(s.jsx)("div",{className:"label",children:"Book Name"}),Object(s.jsx)("span",{className:"book_name",children:this.props.bookName})]}),Object(s.jsx)("hr",{className:"hr-inLabel"}),Object(s.jsxs)("div",{className:"rows",children:[Object(s.jsx)("span",{className:"label",children:"Author"}),Object(s.jsx)("span",{className:"book_name",children:this.props.author})]}),Object(s.jsx)("hr",{className:"hr-inLabel"}),Object(s.jsxs)("div",{className:"rows",children:[Object(s.jsx)("span",{className:"label",children:"Year Of Release"}),Object(s.jsx)("span",{className:"book_name",children:this.props.year})]}),Object(s.jsx)("hr",{className:"hr-inLabel"}),Object(s.jsxs)("div",{className:"rows",children:[Object(s.jsx)("span",{className:"label",children:"Publication"}),Object(s.jsx)("span",{className:"book_name",children:"The Alchemist"})]}),Object(s.jsx)("hr",{className:"hr-inLabel"}),Object(s.jsx)("br",{})]})]})}),Object(s.jsx)(m,{bookName:"The Alchemist",children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["resultScore : ",this.state.resultScore," "]}),Object(s.jsxs)("p",{children:["url : ",this.state.url," "]}),Object(s.jsxs)("p",{children:["license : ",this.state.license]}),Object(s.jsxs)("p",{children:["articleBody : ",this.state.articleBody," "]}),Object(s.jsxs)("p",{children:["name : ",this.state.name," "]}),Object(s.jsxs)("p",{children:["description : ",this.state.description]})]})})]})}}]),a}(i.Component),j=(a(17),[{id:"1","vibhag id":"11","book name":"The Alchemist",author:"Paulo Coelho"},{id:"2","vibhag id":"22","book name":"Yoga",author:"Swami Vivekananda"},{id:"3","vibhag id":"33","book name":"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"4","vibhag id":"44","book name":"The Alchemist",author:"Paulo Coelho"},{id:"5","vibhag id":"55","book name":"Yoga",author:"Swami Vivekananda"},{id:"6","vibhag id":"66","book name":"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"7","vibhag id":"77","book name":"The Alchemist",author:"Paulo Coelho"},{id:"8","vibhag id":"88","book name":"Yoga",author:"Swami Vivekananda"},{id:"9","vibhag id":"99","book name":"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"1","vibhag id":"11","book name":"The Alchemist",author:"Paulo Coelho"},{id:"2","vibhag id":"22","book name":"Yoga",author:"Swami Vivekananda"},{id:"3","vibhag id":"33","book name":"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"4","vibhag id":"44","book name":"The Alchemist",author:"Paulo Coelho"}]),u=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).filterTable=function(){var e="";if(document.querySelector(".container").style.justifyContent="center",i.state.input.length>0){document.querySelector(".container").style.justifyContent="flex-start",e=Object(s.jsxs)("div",{className:"book-not-found",children:[Object(s.jsx)("h3",{children:"No such book available"}),Object(s.jsx)("h5",{children:"Tip: Try searching for keywords matching the book name or author name"})]});var t=Object.keys(j[0]),a=j.filter((function(e){return e.author.toLowerCase().includes(i.state.input.toLowerCase())||e["book name"].toLowerCase().includes(i.state.input.toLowerCase())}));a.length>0&&(e=Object(s.jsx)("div",{className:"table-super",children:Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsx)("tr",{children:t.map((function(e,t){return Object(s.jsx)("th",{children:e},t)}))})}),Object(s.jsx)("tbody",{children:a.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.id}),Object(s.jsx)("td",{children:e["vibhag id"]}),Object(s.jsx)("td",{children:Object(s.jsx)("a",{href:"#/details",children:e["book name"]})}),Object(s.jsx)("td",{children:e.author})]},t)}))})]})}))}o.a.render(Object(s.jsx)(s.Fragment,{children:e}),document.querySelector(".table"))},i.state={input:""},i}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("form",{className:"form",children:[Object(s.jsx)("input",{className:"search-bar",type:"text",placeholder:"Search by Book name / Author name",onInput:function(t){e.setState({input:t.target.value})}}),Object(s.jsx)("button",{className:"search-button",type:"submit",onClick:function(t){t.preventDefault(),e.filterTable()},children:"Search"})]}),Object(s.jsx)("div",{className:"table"})]})}}]),a}(i.Component),O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).setPath=function(){var t=window.location.href.split("#");t.length>1&&(t[1].includes("details")?e.setState({showListing:!1}):e.setState({showListing:!0}))},e.state={showListing:!0},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",(function(){console.log("The hash has changed!"),e.setPath()}),!1),this.setPath()}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"App",children:this.state.showListing?Object(s.jsx)(u,{}):Object(s.jsx)(b,{bookName:"The Alchemist",author:"Paulo Coelho",year:"2006"})})}}]),a}(i.Component),p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),i(e),n(e),c(e)}))};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.45cfdeb0.chunk.js.map