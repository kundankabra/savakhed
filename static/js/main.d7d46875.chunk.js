(this.webpackJsonpsavakhed=this.webpackJsonpsavakhed||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(5),i=a.n(n),c=a(19),l=a.n(c),o=(a(25),a(8)),r=a(9),h=a(11),d=a(10),u=a(18),b=(a(26),a(17)),j=(a(27),function(e){var t=e.isToggled,a=e.onToggle,n=e.label;return Object(s.jsxs)("div",{className:"switch-container",children:[Object(s.jsxs)("label",{className:"switch",children:[Object(s.jsx)("input",{type:"checkbox",checked:t,onChange:a}),Object(s.jsx)("span",{className:"slider"})]}),Object(s.jsx)("span",{className:"tag",children:n})]})}),m=(a(28),function(e){var t=e.onInput,a=e.onSearch,i=Object(n.useState)(!1),c=Object(b.a)(i,2),l=c[0],o=c[1],r=Object(n.useState)("\u090f\u0915\u091f\u093e \u091c\u0940\u0935 \u0938\u0926\u093e\u0936\u093f\u0935"),h=Object(b.a)(r,2),d=h[0],u=h[1];return Object(s.jsxs)("form",{className:"form",children:[Object(s.jsxs)("section",{children:[Object(s.jsx)("input",{className:"search-bar",type:"text",placeholder:"Search by Book name / Author name",onInput:t}),Object(s.jsx)("button",{className:"search-button",type:"submit",onClick:a,children:"Search"})]}),Object(s.jsx)(j,{className:"toggle-button",isToggled:l,onToggle:function(){o(!l),setTimeout((function(){u(l?"\u090f\u0915\u091f\u093e \u091c\u0940\u0935 \u0938\u0926\u093e\u0936\u093f\u0935":"\u0905\u0921\u0932\u093e \u0939\u0930\u0940 \u0911\u091f\u094b\u0938\u091c\u0947\u0937\u094d\u091f\u091a\u0947 \u092a\u093e\u092f \u0927\u0930\u0940")}),200)},label:d})]})}),v=(a(29),function(e){var t=e.tableHeaders,a=void 0===t?[]:t,n=e.tableElements,i=void 0===n?[]:n,c=e.searched,l=e.setCurrentDetails;return Object(s.jsx)("div",{className:"table-super",children:i.length&&c?Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsx)("tr",{children:a.map((function(e,t){return Object(s.jsx)("th",{children:e},t)}))})}),Object(s.jsx)("tbody",{children:i.map((function(e,t){return Object(s.jsxs)("tr",{onClick:function(){return l(e)},children:[Object(s.jsx)("td",{children:e.dakhalId}),Object(s.jsx)("td",{children:e.vibhagId}),Object(s.jsx)("td",{children:Object(s.jsx)("a",{href:"#/details/".concat(e.id),children:e.pustakName.join(" ")})}),Object(s.jsx)("td",{children:e.lekhak.join(" ")})]},t)}))})]}):Object(s.jsx)("div",{children:"No results found"})})}),g=a(13);a(37),a(31);g.a.initializeApp({apiKey:"AIzaSyCzHYtN3HUc7uNhG15YD3hrnyiX_poQUrM",authDomain:"devsavakhed.firebaseapp.com",projectId:"devsavakhed",storageBucket:"devsavakhed.appspot.com",messagingSenderId:"774083254382",appId:"1:774083254382:web:b184cb1b0851be9474ae7f",measurementId:"G-RCY6EWCX6V"});g.a.auth();var O=g.a.firestore(),k=(g.a,["\u0905","\u0906","\u0907","\u0908","\u0909","\u090a","\u090f","\u0910","\u0913","\u0914","\u0905\u0902","\u0905\u0903","\u0915","\u0916","\u0917","\u0918","\u0919","\u091a","\u091b","\u091c","\u091d","\u091e","\u091f","\u0920","\u0921","\u0922","\u0923","\u0924","\u0925","\u0926","\u0927","\u0928","\u092a","\u092b","\u092c","\u092d","\u092e","\u092f","\u0930","\u0932","\u0935","\u0936","\u0937","\u0938","\u0939","\u0933","\u0915\u094d\u0937","\u091c\u094d\u091e","\u0924\u094d\u0930"]),x=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).search=function(e,t){O.collection("bookList").where(e,"array-contains-any",t).get().then((function(e){e.forEach((function(e){var t=e.data();s.setState({results:s.state.results.concat([Object(u.a)(Object(u.a)({},t),{},{id:e.id})])}),s.getMulakshara(t.lekhak),s.getMulakshara(t.pustakName)})),s.setState({tableHeaders:["Dakhal-ID","Vibhag-ID","Book","Author"]})})).catch((function(e){return console.error(e)}))},s.getMulakshara=function(e){var t=[];e.forEach((function(e){var a=[];e.split("").forEach((function(e){k.includes(e)&&a.push(e)})),t.push(a)})),console.log(t)},s.fetchResults=function(e){if(e.preventDefault(),document.querySelector(".container").style.placeItems="center",s.state.input.length>0){document.querySelector(".container").style.placeItems="flex-start center",s.setState({tableHeaders:[],results:[],searched:!0});var t=s.state.input.toLowerCase().split(" ");if(t.sort((function(e,t){return-(e.length>t.length)||+(e.length<t.length)})),t.length>10){var a=t.length;t.splice(9,a-10)}s.search("pustakName",t),s.search("lekhak",t)}else s.setState({tableHeaders:[],results:[],searched:!1})},s.logger=function(e,t){console.log(t,e)},s.state={searched:!1,input:"",tableHeaders:[],results:[]},s}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"logo",children:["\u0938\u093e\u0930\u094d\u0935\u091c\u0928\u093f\u0915 \u0935\u093e\u091a\u0928\u093e\u0932\u092f ",Object(s.jsx)("br",{})," \u0930\u093e\u091c\u0917\u0941\u0930\u0942\u0928\u0917\u0930"]}),Object(s.jsx)(m,{onInput:function(t){return e.setState({input:t.target.value.toLowerCase()})},onSearch:function(t){return e.fetchResults(t)}}),Object(s.jsx)(v,{setCurrentDetails:this.props.setCurrentDetails,tableHeaders:this.state.tableHeaders,tableElements:this.state.results,searched:this.state.searched})]})})}}]),a}(n.Component);a(33),a(34);var p=function(e){return console.log(e),Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"heading",children:e.bookName}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"description",children:e.children})]})},C=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={gotGoogleData:!1,GresultScore:0,GarticleBody:"",Gname:"",Gdescription:"",gotFirebaseData:!1,jsonData:[],bookDetail:{}},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=window.location.href.split("/"),t=e[e.length-1];console.log("url id",t);var a=this.props.bookDetail;(void 0===a?{}:a).pustakName||this.getFirebaseData(),this.getGoogleData()}},{key:"getGoogleData",value:function(){var e=this,t=new XMLHttpRequest,a=this.props.bookDetail.pustakNameEnglish;t.addEventListener("load",(function(){console.log(t.responseText),e.setState({jsonData:JSON.parse(t.responseText)});var a=e.state.jsonData.itemListElement,s=(void 0===a?[0]:a)[0],n=s.result,i=void 0===n?{}:n,c=s.resultScore,l=void 0===c?{}:c,o=i.detailedDescription,r=void 0===o?"":o,h=i.name,d=void 0===h?{}:h,u=i.description,b=void 0===u?"":u,j=r.articleBody,m=void 0===j?"":j;e.setState({gotGoogleData:!0,GresultScore:l,GarticleBody:m,Gname:d,Gdescription:b})})),t.open("GET","https://kgsearch.googleapis.com/v1/entities:search?query="+a+"&key=AIzaSyAY9Boy7kdeOmi7JYAfI2zR8Ij3iF_zgxM&limit=1&indent=True"),t.send()}},{key:"getFirebaseData",value:function(){var e=this;O.collection("bookList").where("id","==",this.props.bookDetail.dakhalId).get().then((function(t){t.forEach((function(t){var a=t.data();e.setState({bookDetail:a})}))})).catch((function(e){return console.error(e)}))}},{key:"nameArrayToString",value:function(e){for(var t="",a=0;a<e.length;a++)0!==a&&(t+=" "),t+=this.capitalizeString(e[a]);return t}},{key:"capitalizeString",value:function(e){var t="";return t+=e.charAt(0).toUpperCase(),t+=e.slice(1)}},{key:"render",value:function(){var e=this.state.bookDetail,t=this.props.bookDetail;console.log(t);var a=t.pustakName?t:e;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"details_back",children:[Object(s.jsx)("a",{href:"#/search",children:Object(s.jsx)("button",{className:"back_btn",children:"Go Back"})}),Object(s.jsx)("hr",{className:"hr"})]}),a.pustakName&&Object(s.jsx)("div",{className:"flex-container",children:Object(s.jsxs)("div",{className:"cardDetails",children:[Object(s.jsx)("div",{className:"details_image",children:Object(s.jsx)("img",{src:"https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",alt:"Book Cover",className:"book_image"})}),Object(s.jsxs)("div",{className:"book_details",children:[Object(s.jsx)("hr",{className:"hr-inLabel"}),Object(s.jsxs)("div",{className:"rows",children:[Object(s.jsx)("span",{className:"label",children:"dakhalId"}),Object(s.jsxs)("span",{className:"book_name",children:[a.dakhalId," "]})]}),Object(s.jsx)("hr",{className:"hr-inLabel"}),Object(s.jsxs)("div",{className:"rows",children:[Object(s.jsx)("span",{className:"label",children:"vibhagId"}),Object(s.jsx)("span",{className:"book_name",children:a.vibhagId})]}),Object(s.jsx)("hr",{className:"hr-inLabel"}),Object(s.jsxs)("div",{className:"rows",children:[Object(s.jsx)("span",{className:"label",children:"pustakName"}),Object(s.jsx)("span",{className:"book_name",children:a.pustakName.join(" ")})]}),Object(s.jsx)("hr",{className:"hr-inLabel"}),Object(s.jsxs)("div",{className:"rows",children:[Object(s.jsx)("span",{className:"label",children:"lekhak"}),Object(s.jsx)("span",{className:"book_name",children:a.lekhak.join(" ")})]}),Object(s.jsx)("hr",{className:"hr-inLabel"}),Object(s.jsxs)("div",{className:"rows",children:[Object(s.jsx)("span",{className:"label",children:"pustakPrakar"}),Object(s.jsx)("span",{className:"book_name",children:a.pustakPrakar})]}),Object(s.jsx)("hr",{className:"hr-inLabel"}),Object(s.jsx)("br",{})]})]})}),this.state.GresultScore>100&&Object(s.jsx)(p,{bookName:this.state.Gname,children:Object(s.jsxs)("div",{className:"googleDetails",children:[Object(s.jsxs)("div",{className:"eachgoogleDetails",children:["Result Score : ",Object(s.jsx)("div",{className:"googleResult",children:this.state.GresultScore})]}),""!=this.state.GarticleBody&&Object(s.jsxs)("div",{className:"eachgoogleDetails",children:["Article Body : ",Object(s.jsx)("div",{className:"googleResult",children:this.state.GarticleBody})]}),""!=this.state.Gdescription&&Object(s.jsxs)("div",{className:"eachgoogleDetails",children:["Description : ",Object(s.jsx)("div",{className:"googleResult",children:this.state.Gdescription})]}),Object(s.jsx)("div",{className:"source",children:"source : Google "})]})})]})}}]),a}(n.Component),f=a(14),N=(a(35),[{id:"1","vibhag id":"11",bookName:"The Alchemist",author:"Paulo Coelho"},{id:"2","vibhag id":"22",bookName:"Yoga",author:"Swami Vivekananda"},{id:"3","vibhag id":"33",bookName:"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"4","vibhag id":"44",bookName:"The Alchemist",author:"Paulo Coelho"},{id:"5","vibhag id":"55",bookName:"Yoga",author:"Swami Vivekananda"},{id:"6","vibhag id":"66",bookName:"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"7","vibhag id":"77",bookName:"The Alchemist",author:"Paulo Coelho"},{id:"8","vibhag id":"88",bookName:"Yoga",author:"Swami Vivekananda"},{id:"9","vibhag id":"99",bookName:"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"1","vibhag id":"11",bookName:"Wings of Fire",author:"APJ"},{id:"2","vibhag id":"22",bookName:"Yoga",author:"Swami Vivekananda"},{id:"3","vibhag id":"33",bookName:"Lorem Ipsum is simply dummy text",author:"Lorem Ipsum"},{id:"4","vibhag id":"44",bookName:"The Alchemist",author:"Paulo Coelho"}]),y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).renderAuthors=function(){return n.state.authorList.map((function(e){return Object(s.jsx)("div",{className:"renderAuthors",children:Object(s.jsx)(p,{bookName:e.author})})}))},n.state={character:"a",newItem:N,authorList:N,tableHeaders:["id","vibhag id","bookName","author"],matching_authors:[]},n.handleChange=n.handleChange.bind(Object(f.a)(n)),n}return Object(r.a)(a,[{key:"componentWillMount",value:function(){this.setState({})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({character:e.target.value});var a=this.state.newItem.filter((function(e){return e.author.toLowerCase().includes(t.toLowerCase())?e:null}));this.setState({authorList:a})}},{key:"render",value:function(){this.state.character;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"ButtonContainer",children:[Object(s.jsx)("button",{onClick:this.handleChange,value:"a",children:"A"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"b",children:"B"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"c",children:"C"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"d",children:"D"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"e",children:"E"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"f",children:"F"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"g",children:"G"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"h",children:"H"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"i",children:"I"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"j",children:"J"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"k",children:"K"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"l",children:"L"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"m",children:"M"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"n",children:"N"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"o",children:"O"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"p",children:"P"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"q",children:"Q"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"r",children:"R"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"s",children:"S"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"t",children:"T"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"u",children:"U"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"v",children:"V"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"w",children:"W"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"x",children:"X"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"y",children:"Y"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"z",children:"Z"})]}),Object(s.jsxs)("div",{className:"ButtonContainer",children:[Object(s.jsx)("button",{onClick:this.handleChange,value:"0",children:"0"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"1",children:"1"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"2",children:"2"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"3",children:"3"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"4",children:"4"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"5",children:"5"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"6",children:"6"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"7",children:"7"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"8",children:"8"}),Object(s.jsx)("button",{onClick:this.handleChange,value:"9",children:"9"})]}),Object(s.jsx)("div",{children:this.renderAuthors()})]})}}]),a}(n.Component),S=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).setPath=function(){var t=window.location.href.split("#");t.length>1&&(t[1].includes("details")?e.setState({show:"details"}):t[1].includes("lekhakList")?e.setState({show:"lekhakList"}):e.setState({show:"listing"}))},e.state={show:"listing",currentDetails:{}},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",(function(){console.log("The hash has changed!"),e.setPath()}),!1),this.setPath()}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"App",children:["details"===this.state.show&&Object(s.jsx)(C,{bookDetail:this.state.currentDetails}),"lekhakList"===this.state.show&&Object(s.jsx)(y,{}),"listing"===this.state.show&&Object(s.jsx)(x,{setCurrentDetails:function(t){return e.setState({currentDetails:t})}})]})}}]),a}(n.Component),D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))};l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root")),D()}},[[36,1,2]]]);
//# sourceMappingURL=main.d7d46875.chunk.js.map