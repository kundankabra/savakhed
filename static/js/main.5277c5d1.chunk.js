(this.webpackJsonpsavakhed=this.webpackJsonpsavakhed||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(5),s=a.n(i),c=a(21),o=a.n(c),l=(a(27),a(8)),h=a(9),r=a(11),d=a(10),u=a(13),b=(a(28),[{id:"1","vibhag id":"11",bookName:"The Alchemist",author:"Paulo Coelho"},{id:"2","vibhag id":"22",bookName:"Yoga",author:"Swami Vivekananda"},{id:"3","vibhag id":"33",bookName:"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"4","vibhag id":"44",bookName:"The Alchemist",author:"Paulo Coelho"},{id:"5","vibhag id":"55",bookName:"Yoga",author:"Swami Vivekananda"},{id:"6","vibhag id":"66",bookName:"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"7","vibhag id":"77",bookName:"The Alchemist",author:"Paulo Coelho"},{id:"8","vibhag id":"88",bookName:"Yoga",author:"Swami Vivekananda"},{id:"9","vibhag id":"99",bookName:"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"1","vibhag id":"11",bookName:"The Alchemist",author:"Paulo Coelho"},{id:"2","vibhag id":"22",bookName:"Yoga",author:"Swami Vivekananda"},{id:"3","vibhag id":"33",bookName:"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"4","vibhag id":"44",bookName:"The Alchemist",author:"Paulo Coelho"}]),j=a(20),m=(a(29),function(e){var t=e.isToggled,a=e.onToggle,i=e.label;return Object(n.jsxs)("div",{className:"switch-container",children:[Object(n.jsxs)("label",{className:"switch",children:[Object(n.jsx)("input",{type:"checkbox",checked:t,onChange:a}),Object(n.jsx)("span",{className:"slider"})]}),Object(n.jsx)("span",{className:"tag",children:i})]})}),v=(a(30),function(e){var t=e.onInput,a=e.onSearch,s=Object(i.useState)(!1),c=Object(j.a)(s,2),o=c[0],l=c[1],h=Object(i.useState)("\u090f\u0915\u091f\u093e \u091c\u0940\u0935 \u0938\u0926\u093e\u0936\u093f\u0935"),r=Object(j.a)(h,2),d=r[0],u=r[1];return Object(n.jsxs)("form",{className:"form",children:[Object(n.jsxs)("section",{children:[Object(n.jsx)("input",{className:"search-bar",type:"text",placeholder:"Search by Book name / Author name",onInput:t}),Object(n.jsx)("button",{className:"search-button",type:"submit",onClick:a,children:"Search"})]}),Object(n.jsx)(m,{className:"toggle-button",isToggled:o,onToggle:function(){l(!o),setTimeout((function(){u(o?"\u090f\u0915\u091f\u093e \u091c\u0940\u0935 \u0938\u0926\u093e\u0936\u093f\u0935":"\u0905\u0921\u0932\u093e \u0939\u0930\u0940 \u0911\u091f\u094b\u0938\u091c\u0947\u0937\u094d\u091f\u091a\u0947 \u092a\u093e\u092f \u0927\u0930\u0940")}),200)},label:d})]})}),g=(a(31),function(e){var t=e.tableHeaders,a=void 0===t?[]:t,i=e.tableElements,s=void 0===i?[]:i;return 0===s.length?Object(n.jsx)("div",{children:"No Results found"}):Object(n.jsx)("div",{className:"table-super",children:Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:a.map((function(e,t){return Object(n.jsx)("th",{children:e},t)}))})}),Object(n.jsx)("tbody",{children:s.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.id}),Object(n.jsx)("td",{children:e["vibhag id"]}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:"/#/details",children:e.bookName})}),Object(n.jsx)("td",{children:e.author})]},t)}))})]})})}),O=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).filterTable=function(e){e.preventDefault();var t=n.state.seachString;t.length?n.setState({searched:!0,matching_books:b.filter((function(e){var a=e.author,n=e.bookName;return a.toLowerCase().includes(t)||n.toLowerCase().includes(t)}))}):n.setState({matching_books:[]})},n.state={seachString:"",searched:!1,tableHeaders:["id","vibhag id","bookName","author"],matching_books:[],isSearching:!1,containerClass:""},n.filterTable=n.filterTable.bind(Object(u.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.state.searched;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"container ".concat(t?"searching":""),children:[Object(n.jsxs)("div",{className:"input-box m-auto ".concat(t?"searching":""),children:[Object(n.jsxs)("div",{className:"logo",children:["\u0938\u093e\u0930\u094d\u0935\u091c\u0928\u093f\u0915 \u0935\u093e\u091a\u0928\u093e\u0932\u092f ",Object(n.jsx)("br",{})," \u0930\u093e\u091c\u0917\u0941\u0930\u0942\u0928\u0917\u0930"]}),Object(n.jsx)(v,{onInput:function(t){return e.setState({seachString:t.target.value.toLowerCase()})},onSearch:function(t){return e.filterTable(t)}})]}),t?Object(n.jsx)("div",{className:"search-table m-auto ".concat(t?"searching":""),children:Object(n.jsx)(g,{tableHeaders:this.state.tableHeaders,tableElements:this.state.matching_books})}):null]})})}}]),a}(i.Component),k=a(19);a(32),a(33);var x=function(e){return console.log(e),Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"heading",children:e.bookName}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{className:"description",children:e.children})]})},p=a(15);a(39),a(35);p.a.initializeApp({apiKey:"AIzaSyCzHYtN3HUc7uNhG15YD3hrnyiX_poQUrM",authDomain:"devsavakhed.firebaseapp.com",projectId:"devsavakhed",storageBucket:"devsavakhed.appspot.com",messagingSenderId:"774083254382",appId:"1:774083254382:web:b184cb1b0851be9474ae7f",measurementId:"G-RCY6EWCX6V"});p.a.auth();var C=p.a.firestore(),N=(p.a,function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);return(e=t.call(this)).state={gotData:!1,resultScore:0,url:"",license:"",articleBody:"",name:"",description:"",temp:""},e}return Object(h.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.getData(),this.matches=[];this.matches=this.findLekhaks("a"),console.log("matches outside : "+this.matches)}},{key:"componentWillUnmount",value:function(){console.log("Unmount matches : "+this.matches)}},{key:"findLekhaks",value:function(e){var t=this,a=[];return a=C.collection("bookList").get().then((function(n){var i=[];return n.forEach((function(e){var t=e.data();i.push(t)})),a=[],i.map((function(n){for(var i=n.lekhakNameEnglish,s=i.length,c=!1,o=0;o<s;o++)if(void 0!==i[o][0]&&i[o][0]===e){c=!0;break}c&&a.push(t.toStringLekhakNameEnglish(i))})),a=t.removeDuplicates(a),console.log("matches : "+a),a})).catch((function(e){return console.error(e)}))}},{key:"removeDuplicates",value:function(e){var t=Object(k.a)(new Set(e));console.log("Remove Dups");var a=Object(k.a)(t);return console.log(e),console.log(a),a}},{key:"toStringLekhakNameEnglish",value:function(e){for(var t="",a=0;a<e.length;a++)0!==a&&(t+=" "),t+=e[a];return t}},{key:"getData",value:function(){var e=this,t=new XMLHttpRequest;t.addEventListener("load",(function(){var a=JSON.parse(t.responseText);e.setState({gotData:!0,resultScore:a.itemListElement[0].resultScore,url:a.itemListElement[0].result.detailedDescription.url,license:a.itemListElement[0].result.detailedDescription.license,articleBody:a.itemListElement[0].result.detailedDescription.articleBody,name:a.itemListElement[0].result.name,description:a.itemListElement[0].result.description})})),t.open("GET","https://kgsearch.googleapis.com/v1/entities:search?query="+["the","alchemist"]+"&key=AIzaSyAY9Boy7kdeOmi7JYAfI2zR8Ij3iF_zgxM&limit=1&indent=True"),t.send()}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"details_back",children:[Object(n.jsx)("a",{href:"#/search",children:Object(n.jsx)("button",{className:"back_btn",children:"Go Back"})}),Object(n.jsx)("hr",{className:"hr"})]}),Object(n.jsx)("div",{className:"flex-container",children:Object(n.jsxs)("div",{className:"cardDetails",children:[Object(n.jsx)("div",{className:"details_image",children:Object(n.jsx)("img",{src:"https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",alt:"Book Image",className:"book_image"})}),Object(n.jsxs)("div",{className:"book_details",children:[Object(n.jsxs)("div",{className:"rows",children:[Object(n.jsx)("div",{className:"label",children:"Book Name"}),Object(n.jsx)("span",{className:"book_name",children:this.props.bookName})]}),Object(n.jsx)("hr",{className:"hr-inLabel"}),Object(n.jsxs)("div",{className:"rows",children:[Object(n.jsx)("span",{className:"label",children:"Author"}),Object(n.jsx)("span",{className:"book_name",children:this.props.author})]}),Object(n.jsx)("hr",{className:"hr-inLabel"}),Object(n.jsxs)("div",{className:"rows",children:[Object(n.jsx)("span",{className:"label",children:"Year Of Release"}),Object(n.jsx)("span",{className:"book_name",children:this.props.year})]}),Object(n.jsx)("hr",{className:"hr-inLabel"}),Object(n.jsxs)("div",{className:"rows",children:[Object(n.jsx)("span",{className:"label",children:"Publication"}),Object(n.jsx)("span",{className:"book_name",children:"The Alchemist"})]}),Object(n.jsx)("hr",{className:"hr-inLabel"}),Object(n.jsx)("br",{})]})]})}),Object(n.jsx)(x,{bookName:"The Alchemist",children:Object(n.jsxs)("div",{className:"googleDetails",children:[Object(n.jsxs)("div",{className:"eachgoogleDetails",children:["Result Score : ",Object(n.jsx)("h6",{children:this.state.resultScore})]}),Object(n.jsxs)("div",{className:"eachgoogleDetails",children:["Url : ",Object(n.jsx)("h6",{children:this.state.url})," "]}),Object(n.jsxs)("div",{className:"eachgoogleDetails",children:["License : ",Object(n.jsx)("h6",{children:this.state.license})]}),Object(n.jsxs)("div",{className:"eachgoogleDetails",children:["Article Body : ",Object(n.jsx)("h6",{children:this.state.articleBody})," "]}),Object(n.jsxs)("div",{className:"eachgoogleDetails",children:["Name : ",Object(n.jsxs)("h6",{children:[this.state.name," "]})]}),Object(n.jsxs)("div",{className:"eachgoogleDetails",children:["Description : ",Object(n.jsx)("h6",{children:this.state.description})]})]})})]})}}]),a}(i.Component)),f=(a(37),[{id:"1","vibhag id":"11",bookName:"The Alchemist",author:"Paulo Coelho"},{id:"2","vibhag id":"22",bookName:"Yoga",author:"Swami Vivekananda"},{id:"3","vibhag id":"33",bookName:"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"4","vibhag id":"44",bookName:"The Alchemist",author:"Paulo Coelho"},{id:"5","vibhag id":"55",bookName:"Yoga",author:"Swami Vivekananda"},{id:"6","vibhag id":"66",bookName:"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"7","vibhag id":"77",bookName:"The Alchemist",author:"Paulo Coelho"},{id:"8","vibhag id":"88",bookName:"Yoga",author:"Swami Vivekananda"},{id:"9","vibhag id":"99",bookName:"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"1","vibhag id":"11",bookName:"Wings of Fire",author:"APJ"},{id:"2","vibhag id":"22",bookName:"Yoga",author:"Swami Vivekananda"},{id:"3","vibhag id":"33",bookName:"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"4","vibhag id":"44",bookName:"The Alchemist",author:"Paulo Coelho"}]),L=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).renderAuthors=function(){return i.state.authorList.map((function(e){return Object(n.jsx)("div",{className:"renderAuthors",children:Object(n.jsx)(x,{bookName:e.author})})}))},i.state={character:"a",newItem:f,authorList:f,tableHeaders:["id","vibhag id","bookName","author"],matching_authors:[]},i.handleChange=i.handleChange.bind(Object(u.a)(i)),i}return Object(h.a)(a,[{key:"componentWillMount",value:function(){this.setState({})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({character:e.target.value});var a=this.state.newItem.filter((function(e){return e.author.toLowerCase().includes(t.toLowerCase())?e:null}));this.setState({authorList:a})}},{key:"render",value:function(){this.state.character;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"ButtonContainer",children:[Object(n.jsx)("button",{onClick:this.handleChange,value:"a",children:"A"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"b",children:"B"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"c",children:"C"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"d",children:"D"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"e",children:"E"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"f",children:"F"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"g",children:"G"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"h",children:"H"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"i",children:"I"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"j",children:"J"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"k",children:"K"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"l",children:"L"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"m",children:"M"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"n",children:"N"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"o",children:"O"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"p",children:"P"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"q",children:"Q"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"r",children:"R"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"s",children:"S"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"t",children:"T"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"u",children:"U"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"v",children:"V"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"w",children:"W"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"x",children:"X"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"y",children:"Y"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"z",children:"Z"})]}),Object(n.jsxs)("div",{className:"ButtonContainer",children:[Object(n.jsx)("button",{onClick:this.handleChange,value:"0",children:"0"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"1",children:"1"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"2",children:"2"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"3",children:"3"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"4",children:"4"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"5",children:"5"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"6",children:"6"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"7",children:"7"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"8",children:"8"}),Object(n.jsx)("button",{onClick:this.handleChange,value:"9",children:"9"})]}),Object(n.jsx)("div",{children:this.renderAuthors()})]})}}]),a}(i.Component),y=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).setPath=function(){var t=window.location.href.split("#");t.length>1&&(t[1].includes("details")?e.setState({show:"details"}):t[1].includes("lekhakList")?e.setState({show:"lekhakList"}):e.setState({show:"listing"}))},e.state={show:"listing"},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",(function(){console.log("The hash has changed!"),e.setPath()}),!1),this.setPath()}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:["details"===this.state.show&&Object(n.jsx)(N,{bookName:"The Alchemist",author:"Paulo Coelho",year:"2006"}),"lekhakList"===this.state.show&&Object(n.jsx)(L,{}),"listing"===this.state.show&&Object(n.jsx)(O,{})]})}}]),a}(i.Component),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),S()}},[[38,1,2]]]);
//# sourceMappingURL=main.5277c5d1.chunk.js.map