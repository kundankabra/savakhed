(this.webpackJsonpsavakhed=this.webpackJsonpsavakhed||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(4),n=s.n(c),i=s(21),r=s.n(i),l=(s(27),s(8)),o=s(9),h=s(11),d=s(10),u=s(15),j=(s(28),s(20)),b=(s(29),function(e){var t=e.isToggled,s=e.onToggle,c=e.label;return Object(a.jsxs)("div",{className:"switch-container",children:[Object(a.jsxs)("label",{className:"switch",children:[Object(a.jsx)("input",{type:"checkbox",checked:t,onChange:s}),Object(a.jsx)("span",{className:"slider"})]}),Object(a.jsx)("span",{className:"tag",children:c})]})}),k=(s(30),function(e){var t=e.onInput,s=e.onSearch,n=Object(c.useState)(!1),i=Object(j.a)(n,2),r=i[0],l=i[1],o=Object(c.useState)("\u090f\u0915\u091f\u093e \u091c\u0940\u0935 \u0938\u0926\u093e\u0936\u093f\u0935"),h=Object(j.a)(o,2),d=h[0],u=h[1];return Object(a.jsxs)("form",{className:"form",children:[Object(a.jsxs)("section",{children:[Object(a.jsx)("input",{className:"search-bar",type:"text",placeholder:"Search by Book name / Author name",onInput:t}),Object(a.jsx)("button",{className:"search-button",type:"submit",onClick:s,children:"Search"})]}),Object(a.jsx)(b,{className:"toggle-button",isToggled:r,onToggle:function(){l(!r),setTimeout((function(){u(r?"\u090f\u0915\u091f\u093e \u091c\u0940\u0935 \u0938\u0926\u093e\u0936\u093f\u0935":"\u0905\u0921\u0932\u093e \u0939\u0930\u0940 \u0911\u091f\u094b\u0938\u091c\u0947\u0937\u094d\u091f\u091a\u0947 \u092a\u093e\u092f \u0927\u0930\u0940")}),200)},label:d})]})}),v=(s(31),function(e){var t=e.tableHeaders,s=void 0===t?[]:t,c=e.tableElements,n=void 0===c?[]:c,i=e.searched,r=e.setCurrentDetails;return Object(a.jsx)("div",{className:"table-super",children:n.length&&i?Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsx)("tr",{children:s.map((function(e,t){return Object(a.jsx)("th",{children:e},t)}))})}),Object(a.jsx)("tbody",{children:n.map((function(e,t){return Object(a.jsxs)("tr",{onClick:function(){return r(e)},children:[Object(a.jsx)("td",{children:e.dakhalId}),Object(a.jsx)("td",{children:e.vibhagId}),Object(a.jsx)("td",{children:Object(a.jsx)("a",{href:"#/details/".concat(e.id),children:e.pustakName.join(" ")})}),Object(a.jsx)("td",{children:e.lekhak.join(" ")})]},t)}))})]}):Object(a.jsx)("div",{children:"No results found"})})}),m=s(17);s(41),s(33);m.a.initializeApp({apiKey:"AIzaSyCzHYtN3HUc7uNhG15YD3hrnyiX_poQUrM",authDomain:"devsavakhed.firebaseapp.com",projectId:"devsavakhed",storageBucket:"devsavakhed.appspot.com",messagingSenderId:"774083254382",appId:"1:774083254382:web:b184cb1b0851be9474ae7f",measurementId:"G-RCY6EWCX6V"});m.a.auth();var O=m.a.firestore(),g=(m.a,["\u0905","\u0906","\u0907","\u0908","\u0909","\u090a","\u090f","\u0910","\u0913","\u0914","\u0905\u0902","\u0905\u0903","\u0915","\u0916","\u0917","\u0918","\u0919","\u091a","\u091b","\u091c","\u091d","\u091e","\u091f","\u0920","\u0921","\u0922","\u0923","\u0924","\u0925","\u0926","\u0927","\u0928","\u092a","\u092b","\u092c","\u092d","\u092e","\u092f","\u0930","\u0932","\u0935","\u0936","\u0937","\u0938","\u0939","\u0933","\u0915\u094d\u0937","\u091c\u094d\u091e","\u0924\u094d\u0930"]),x=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).search=function(e,t){O.collection("bookList").where(e,"array-contains-any",t).get().then((function(e){e.forEach((function(e){var t=e.data();a.setState({results:a.state.results.concat([Object(u.a)(Object(u.a)({},t),{},{id:e.id})])}),a.getMulakshara(t.lekhak),a.getMulakshara(t.pustakName)})),a.setState({tableHeaders:["Dakhal-ID","Vibhag-ID","Book","Author"]})})).catch((function(e){return console.error(e)}))},a.getMulakshara=function(e){var t=[];e.forEach((function(e){var s=[];e.split("").forEach((function(e){g.includes(e)&&s.push(e)})),t.push(s)})),console.log(t)},a.fetchResults=function(e){if(e.preventDefault(),document.querySelector(".container").style.placeItems="center",a.state.input.length>0){document.querySelector(".container").style.placeItems="flex-start center",a.setState({tableHeaders:[],results:[],searched:!0});var t=a.state.input.toLowerCase().split(" ");if(t.sort((function(e,t){return-(e.length>t.length)||+(e.length<t.length)})),t.length>10){var s=t.length;t.splice(9,s-10)}a.search("pustakName",t),a.search("lekhak",t)}else a.setState({tableHeaders:[],results:[],searched:!1})},a.logger=function(e,t){console.log(t,e)},a.state={searched:!1,input:"",tableHeaders:[],results:[]},a}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"logo",children:["\u0938\u093e\u0930\u094d\u0935\u091c\u0928\u093f\u0915 \u0935\u093e\u091a\u0928\u093e\u0932\u092f ",Object(a.jsx)("br",{})," \u0930\u093e\u091c\u0917\u0941\u0930\u0942\u0928\u0917\u0930"]}),Object(a.jsx)(k,{onInput:function(t){return e.setState({input:t.target.value.toLowerCase()})},onSearch:function(t){return e.fetchResults(t)}}),Object(a.jsx)(v,{setCurrentDetails:this.props.setCurrentDetails,tableHeaders:this.state.tableHeaders,tableElements:this.state.results,searched:this.state.searched})]})})}}]),s}(c.Component),p=s(12),f=s.n(p),y=s(16);s(36),s(37);var N=function(e){return Object(a.jsxs)("div",{className:"google"===e.whichCard?"cardGoogle":"card",children:[Object(a.jsx)("div",{className:"heading",children:e.bookName}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"description",children:e.children})]})},D=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={gotGoogleData:!1,GresultScore:0,GarticleBody:"",Gname:"",Gdescription:"",gotFirebaseData:!1,jsonData:[],bookDetail:{}},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.bookDetail;(void 0===e?{}:e).pustakName||this.getFirebaseData(),this.getGoogleData()}},{key:"getIdFromUrl",value:function(){var e=window.location.href.split("/");return e[e.length-1]}},{key:"getGoogleData",value:function(){var e=this,t=new XMLHttpRequest,s=this.props.bookDetail.pustakNameEnglish;t.addEventListener("load",(function(){var s=JSON.parse(t.responseText).itemListElement,a=void 0===s?[]:s,c=a.length&&a[0]||{},n=c.result,i=void 0===n?{}:n,r=c.resultScore,l=void 0===r?{}:r,o=i.detailedDescription,h=void 0===o?"":o,d=i.name,u=void 0===d?"":d,j=i.description,b=void 0===j?"":j,k=h.articleBody,v=void 0===k?"":k;e.setState({gotGoogleData:!0,GresultScore:l,GarticleBody:v,Gname:u,Gdescription:b})})),t.open("GET","https://kgsearch.googleapis.com/v1/entities:search?query="+s+"&key=AIzaSyAY9Boy7kdeOmi7JYAfI2zR8Ij3iF_zgxM&limit=1&indent=True"),t.send()}},{key:"getFirebaseData",value:function(){var e=Object(y.a)(f.a.mark((function e(){var t,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("bookList").doc(this.getIdFromUrl()).get();case 2:t=e.sent,s=t.data(),this.setState({bookDetail:s});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"nameArrayToString",value:function(e){for(var t="",s=0;s<e.length;s++)0!==s&&(t+=" ");return t}},{key:"render",value:function(){var e=this.state.bookDetail,t=this.props.bookDetail,s=t.pustakName?t:e;return Object(a.jsxs)("div",{className:"fullDetails",children:[Object(a.jsx)("div",{className:"details_back",children:Object(a.jsx)("a",{href:"#/search",children:Object(a.jsx)("button",{className:"back_btn",children:"Go Back"})})}),Object(a.jsxs)("div",{className:"flex-container",children:[s.pustakName&&Object(a.jsx)(N,{bookName:"Book Details",children:Object(a.jsx)("div",{className:"cardDetails",children:Object(a.jsxs)("div",{className:"book_details",children:[Object(a.jsxs)("div",{className:"rows",children:[Object(a.jsxs)("div",{className:"col1",children:[Object(a.jsx)("span",{className:"label",children:"Pustak Name"}),Object(a.jsx)("div",{className:"book_name",children:s.pustakName.join(" ")})]}),Object(a.jsxs)("div",{className:"col2",children:[Object(a.jsx)("span",{className:"label",children:"Lekhak"}),Object(a.jsx)("div",{className:"book_name",children:s.lekhak.join(" ")})]})]}),Object(a.jsxs)("div",{className:"rows",children:[Object(a.jsxs)("div",{className:"col1",children:[Object(a.jsx)("span",{className:"label",children:"Dakhal Id"}),Object(a.jsxs)("div",{className:"book_name",children:[s.dakhalId," "]})]}),Object(a.jsxs)("div",{className:"col2",children:[Object(a.jsx)("span",{className:"label",children:"Vibhag Id"}),Object(a.jsx)("div",{className:"book_name",children:s.vibhagId})]})]}),Object(a.jsx)("div",{className:"rows",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"label",children:"Pustak Prakar"}),Object(a.jsx)("div",{className:"book_name",children:s.pustakPrakar})]})}),Object(a.jsx)("br",{})]})})}),this.state.GresultScore>140&&""!==this.state.GarticleBody&&Object(a.jsx)(N,{bookName:this.state.Gname,whichCard:"google",children:Object(a.jsxs)("div",{className:"googleDetails",children:[Object(a.jsxs)("div",{className:"eachgoogleDetails",children:["Result Score : ",Object(a.jsx)("div",{className:"googleResult",children:this.state.GresultScore})]}),""!=this.state.GarticleBody&&Object(a.jsxs)("div",{className:"eachgoogleDetails",children:["Article Body : ",Object(a.jsx)("div",{className:"googleResult",children:this.state.GarticleBody})]}),""!=this.state.Gdescription&&Object(a.jsxs)("div",{className:"eachgoogleDetails",children:["Description : ",Object(a.jsx)("div",{className:"googleResult",children:this.state.Gdescription})]}),Object(a.jsx)("div",{className:"source",children:"source : Google "})]})})]})]})}}]),s}(c.Component),S=s(14),C=(s(38),[{key:"a"},{key:"b"},{key:"c"},{key:"d"},{key:"e"},{key:"f"},{key:"g"},{key:"h"},{key:"i"},{key:"j"},{key:"k"},{key:"l"},{key:"m"},{key:"o"},{key:"p"},{key:"q"},{key:"r"},{key:"s"},{key:"t"},{key:"u"},{key:"v"},{key:"w"},{key:"x"},{key:"y"},{key:"z"}]),w=[{key:"\u0915"},{key:"\u0916"},{key:"\u0917"},{key:"\u0918"},{key:"\u0919"},{key:"\u091a"},{key:"\u091b"},{key:"\u091c"},{key:"\u091d"},{key:"\u091e"},{key:"\u091f"},{key:"\u0920"},{key:"\u0921"},{key:"\u0922"},{key:"\u0923"},{key:"\u0924"},{key:"\u0925"},{key:"\u0926"},{key:"\u0927"},{key:"\u0928"},{key:"\u092a"},{key:"\u092b"},{key:"\u092c"},{key:"\u092d"},{key:"\u092e"},{key:"\u092f"},{key:"\u0930"},{key:"\u0932"},{key:"\u0935"},{key:"\u0936"},{key:"\u0937"},{key:"\u0938"},{key:"\u0939"}],B=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).getLekhakNames=function(e){return Object(y.a)(f.a.mark((function t(){var s,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.setState({isBtnClicked:e}),e,t.next=4,O.collection("lekhakMapping").doc(e).get();case 4:s=t.sent,a=s.data().names,c.setState({lekhakArray:a});case 7:case"end":return t.stop()}}),t)})))},c.getLekhakBooks=function(e){return Object(y.a)(f.a.mark((function t(){var s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e,c.setState({lekhakArray:[],searched:!1,tableHeaders:[],results:[],currentLekhak:s}),t.next=4,O.collection("bookList").where("lekhakNameJoint","==",s).get().then((function(e){e.forEach((function(e){var t=e.data();c.setState({results:c.state.results.concat([Object(u.a)(Object(u.a)({},t),{},{id:e.id})])})}))}));case 4:c.setState({tableHeaders:["Dakhal-ID","Vibhag-ID","Book","Author"],searched:!0});case 5:case"end":return t.stop()}}),t)})))},c.renderAuthors=function(){return c.state.lekhakArray.map((function(e){return Object(a.jsxs)("div",{className:"renderAuthors",children:[Object(a.jsx)("div",{className:"authorName",children:e}),Object(a.jsx)("div",{className:"bookNames",children:Object(a.jsx)("p",{onClick:c.getLekhakBooks(e),children:"View Books"})})]})}))},c.renderAlphabets=function(e){return e.map((function(e){return Object(a.jsx)("button",{value:e.key,className:c.state.isBtnClicked===e.key?"alphabetsClicked":"alphabetsUnclicked",onClick:c.getLekhakNames(e.key),children:e.key})}))},c.state={authorList:[],matching_authors:[],activeTab:"1",lekhakArray:[],searched:!1,tableHeaders:[],results:[],currentLekhak:"",isBtnClicked:null},c.toggle=c.toggle.bind(Object(S.a)(c)),c}return Object(o.a)(s,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;this.state.character;return Object(a.jsxs)("div",{className:"lekhakList",children:[!this.state.searched&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"toggleBtn",children:[Object(a.jsx)("button",{className:"1"===this.state.activeTab?"clickedBtn":"unclickedBtn",onClick:function(){e.toggle("1")},children:"Marathi"}),Object(a.jsx)("button",{className:"2"===this.state.activeTab?"clickedBtn":"unclickedBtn",onClick:function(){e.toggle("2")},children:"English"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:1==this.state.activeTab?Object(a.jsx)("div",{className:"ButtonContainer",children:this.renderAlphabets(w)}):null}),Object(a.jsx)("div",{children:2==this.state.activeTab?Object(a.jsx)("div",{className:"ButtonContainer",children:this.renderAlphabets(C)}):null})]})]}),Object(a.jsx)("div",{className:"authorsList",children:this.renderAuthors()})]}),this.state.searched&&Object(a.jsxs)("div",{className:"lekhakBooklist",children:[Object(a.jsxs)("h1",{children:["\u0932\u0947\u0916\u0915 : ",this.state.currentLekhak]}),Object(a.jsx)(v,{setCurrentDetails:this.props.setCurrentDetails,tableHeaders:this.state.tableHeaders,tableElements:this.state.results,searched:this.state.searched})]})]})}}]),s}(c.Component),I=(s(39),s.p+"static/media/search.28b0ad10.svg"),G=(s.p,s.p+"static/media/author2.5ec21070.svg"),L=s.p+"static/media/about.ead10859.svg",A=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={isClicked:1},e.setButton=e.setButton.bind(Object(S.a)(e)),e}return Object(o.a)(s,[{key:"setButton",value:function(e){}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"mobileNav",children:[Object(a.jsx)("div",{className:1===this.state.isClicked?"mobileNav_clicked":"mobileNav_unclicked",children:Object(a.jsx)("a",{href:"#/search",onClick:function(){return e.setState({isClicked:1})},children:Object(a.jsx)("img",{src:I,className:"searchSvg",alt:"Search Books"})})}),Object(a.jsx)("div",{className:2===this.state.isClicked?"mobileNav_clicked":"mobileNav_unclicked",children:Object(a.jsx)("a",{href:"#/lekhaklist",onClick:function(){return e.setState({isClicked:2})},children:Object(a.jsx)("img",{src:G,className:"lekhakSvg",alt:"Lekhak List"})})}),Object(a.jsx)("div",{className:3===this.state.isClicked?"mobileNav_clicked":"mobileNav_unclicked",children:Object(a.jsx)("a",{href:"#",onClick:function(){return e.setState({isClicked:3})},children:Object(a.jsx)("img",{src:L,className:"lekhakSvg",alt:"About US"})})})]})}}]),s}(c.Component),T=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).setPath=function(){var t=window.location.href.split("#");t.length>1&&(t[1].includes("details")?e.setState({show:"details"}):t[1].includes("lekhaklist")?e.setState({show:"lekhaklist"}):e.setState({show:"listing"}))},e.state={show:"listing",currentDetails:{}},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",(function(){e.setPath()}),!1),this.setPath()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"App",children:["details"===this.state.show&&Object(a.jsx)(D,{bookDetail:this.state.currentDetails}),"lekhaklist"===this.state.show&&Object(a.jsx)(B,{setCurrentDetails:function(t){return e.setState({currentDetails:t})}}),"listing"===this.state.show&&Object(a.jsx)(x,{setCurrentDetails:function(t){return e.setState({currentDetails:t})}}),Object(a.jsx)(A,{})]})}}]),s}(c.Component),_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),_()}},[[40,1,2]]]);
//# sourceMappingURL=main.e283b886.chunk.js.map