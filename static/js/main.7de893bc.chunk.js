(this.webpackJsonpsavakhed=this.webpackJsonpsavakhed||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(2),n=a.n(c),i=a(27),r=a.n(i),o=(a(38),a(6)),l=a(10),h=a(11),d=a(13),u=a(12),j=(a(39),a(16)),b=(a(40),function(e){var t=e.isToggled,a=e.onToggle,c=e.label;return Object(s.jsxs)("div",{className:"switch-container",children:[Object(s.jsxs)("label",{className:"switch",children:[Object(s.jsx)("input",{type:"checkbox",checked:t,onChange:a}),Object(s.jsx)("span",{className:"slider"})]}),Object(s.jsx)("span",{className:"tag",children:c})]})}),k=(a(41),function(e){var t=e.onInput,a=e.onSearch,n=e.searchAgainst,i=e.onChange,r=e.inputValue,o=Object(c.useState)(!1),l=Object(j.a)(o,2),h=l[0],d=l[1],u=Object(c.useState)("\u090f\u0915\u091f\u093e \u091c\u0940\u0935 \u0938\u0926\u093e\u0936\u093f\u0935"),k=Object(j.a)(u,2),p=k[0],m=k[1];return Object(s.jsxs)("form",{className:"form",children:[Object(s.jsxs)("section",{className:"search-filter-section",children:[Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"radio",name:"pustakName",value:"pustakName",checked:"pustakName"===n,onChange:i}),"\u092a\u0941\u0938\u094d\u0924\u0915"]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"radio",name:"lekhak",value:"lekhak",checked:"lekhak"===n,onChange:i}),"\u0932\u0947\u0916\u0915"]})]}),Object(s.jsxs)("section",{className:"input-section",children:[Object(s.jsx)("input",{className:"search-bar",type:"text",placeholder:"Search by ".concat("lekhak"===n?"Author":"Book"," name"),value:r,onInput:t}),Object(s.jsx)("button",{className:"search-button",type:"submit",onClick:a,children:"Search"})]}),Object(s.jsx)(b,{className:"toggle-button",isToggled:h,onToggle:function(){d(!h),setTimeout((function(){m(h?"\u090f\u0915\u091f\u093e \u091c\u0940\u0935 \u0938\u0926\u093e\u0936\u093f\u0935":"\u0905\u0921\u0932\u093e \u0939\u0930\u0940 \u0911\u091f\u094b\u0938\u091c\u0947\u0937\u094d\u091f\u091a\u0947 \u092a\u093e\u092f \u0927\u0930\u0940")}),200)},label:p})]})}),p=(a(42),a.p+"static/media/coming-soon.8dba0f90.jpg"),m=(a(24),["\u0905","\u0906","\u0907","\u0908","\u0909","\u090a","\u090f","\u0910","\u0913","\u0914","\u0905\u0902","\u0905\u0903","\u0915","\u0916","\u0917","\u0918","\u0919","\u091a","\u091b","\u091c","\u091d","\u091e","\u091f","\u0920","\u0921","\u0922","\u0923","\u0924","\u0925","\u0926","\u0927","\u0928","\u092a","\u092b","\u092c","\u092d","\u092e","\u092f","\u0930","\u0932","\u0935","\u0936","\u0937","\u0938","\u0939","\u0933","\u0915\u094d\u0937","\u091c\u094d\u091e","\u0924\u094d\u0930"]),O=function(e){var t=e.book,a=e.setCurrentDetails,c="\u0907\u0902\u0917\u094d\u0930\u091c\u0940";return m.forEach((function(e){t.pustakFullName.includes(e)&&(c="\u092e\u0930\u093e\u0920\u0940")})),Object(s.jsxs)("div",{className:"card-container",onClick:function(){return a(t)},children:[Object(s.jsx)("img",{className:"book-cover",src:p,alt:"book cover"}),Object(s.jsxs)("a",{href:"#/details/".concat(t.id),children:[Object(s.jsx)("span",{className:"book-title",children:t.pustakFullName}),Object(s.jsx)("span",{className:"book-author",children:t.lekhakFullName}),Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("span",{className:"book-category",children:t.pustakPrakar}),Object(s.jsx)("span",{className:"book-language",children:c})]})]})]})},v=(a(25),function(e){var t=e.tableElements,a=e.searched,c=e.setCurrentDetails;return Object(s.jsx)("div",{className:"table-super",children:t.length&&a?Object(s.jsx)(s.Fragment,{children:t.map((function(e,t){return Object(s.jsx)(O,{setCurrentDetails:c,book:e},t)}))}):a?Object(s.jsx)("div",{children:"No results found"}):null})}),g=a(20);a(55),a(44);g.a.initializeApp({apiKey:"AIzaSyCzHYtN3HUc7uNhG15YD3hrnyiX_poQUrM",authDomain:"devsavakhed.firebaseapp.com",projectId:"devsavakhed",storageBucket:"devsavakhed.appspot.com",messagingSenderId:"774083254382",appId:"1:774083254382:web:b184cb1b0851be9474ae7f",measurementId:"G-RCY6EWCX6V"});g.a.auth();var x=g.a.firestore();g.a,a(26);var f=function(e){return"lekhakList"===e.page?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"renderAuthorsShimmer",children:[Object(s.jsx)("div",{className:"authorName shine"}),Object(s.jsx)("div",{className:"bookNames shine"})]}),Object(s.jsxs)("div",{className:"renderAuthorsShimmer",children:[Object(s.jsx)("div",{className:"authorName shine"}),Object(s.jsx)("div",{className:"bookNames shine"})]}),Object(s.jsxs)("div",{className:"renderAuthorsShimmer",children:[Object(s.jsx)("div",{className:"authorName shine"}),Object(s.jsx)("div",{className:"bookNames shine"})]}),Object(s.jsxs)("div",{className:"renderAuthorsShimmer",children:[Object(s.jsx)("div",{className:"authorName shine"}),Object(s.jsx)("div",{className:"bookNames shine"})]})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{className:"book-cover shine"}),Object(s.jsxs)("a",{children:[Object(s.jsx)("span",{className:"book-title shine",style:{height:"15px",width:"50%"}}),Object(s.jsx)("span",{className:"book-author shine",style:{height:"15px",width:"50%"}}),Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("span",{className:"book-category shine",style:{height:"15px",width:"30%"}}),Object(s.jsx)("span",{className:"book-language shine",style:{height:"15px",width:"30%"}})]})]})]}),Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{className:"book-cover shine"}),Object(s.jsxs)("a",{children:[Object(s.jsx)("span",{className:"book-title shine",style:{height:"15px",width:"50%"}}),Object(s.jsx)("span",{className:"book-author shine",style:{height:"15px",width:"50%"}}),Object(s.jsxs)("div",{style:{display:"flex"},children:[Object(s.jsx)("span",{className:"book-category shine",style:{height:"15px",width:"30%"}}),Object(s.jsx)("span",{className:"book-language shine",style:{height:"15px",width:"30%"}})]})]})]})]})},y=["\u094d","\u093e","\u093f","\u0940","\u0941","\u0942","\u0947","\u0948","\u094b","\u094c","\u0902","\u0945","\u0949","\u0903","\u0943"],N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).search=function(e,t){s.setState({loading:!0});var a="pustakName"===e?"pustakFullName":"lekhakFullName";x.collection("bookList").where(a,"==",t.join(" ")).get().then((function(c){var n=[];c.forEach((function(e){var t=e.data();n.push(Object(o.a)(Object(o.a)({},t),{},{id:e.id}))})),s.setState({results:n,loading:!1}),s.props.setParentState({results:n}),0===s.state.results.length&&x.collection("bookList").where(e,"array-contains-any",t).get().then((function(c){var n=[],i=[];c.forEach((function(a){var c=a.data();s.getMulakshara(t)===s.getMulakshara(c[e])?n.push(Object(o.a)(Object(o.a)({},c),{},{id:a.id})):i.push(Object(o.a)(Object(o.a)({},c),{},{id:a.id}))}));var r=[].concat(n,i);s.setState({loading:!1}),s.props.setParentState({results:r}),0===r.length&&(a="pustakName"===e?"pustakMulakshare":"lekhakMulakshare",x.collection("bookList").where(a,"array-contains-any",s.getMulakshara(t).split(" ")).get().then((function(a){var c=[],n=[];a.forEach((function(a){var i=a.data();s.getMulakshara(t)===s.getMulakshara(i[e])?c.push(Object(o.a)(Object(o.a)({},i),{},{id:a.id})):n.push(Object(o.a)(Object(o.a)({},i),{},{id:a.id}))}));var i=[].concat(c,n);s.setState({loading:!1}),s.props.setParentState({results:i})})).catch((function(e){return console.error(e)})))})).catch((function(e){return console.error(e)}))})).catch((function(e){return console.error(e)}))},s.getMulakshara=function(e){var t=[];return e.forEach((function(e){y.forEach((function(t){e=e.replace(new RegExp(t,"g"),"")})),t.push(e)})),t.join(" ")},s.fetchResults=function(e){e.preventDefault();var t=s.props.input;if(t.length){s.setState({searched:!0}),s.props.setParentState({results:[],searched:!0});var a=t.split(" ");a.length>10&&a.splice(9,a.length-10),s.search(s.state.searchAgainst,a)}else s.setState({searched:!1}),s.props.setParentState({results:[],searched:!1})},s.state={loading:!1,searched:!1,input:"",searchAgainst:"pustakName",results:[]},s}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"logo",children:["\u0938\u093e\u0930\u094d\u0935\u091c\u0928\u093f\u0915 \u0935\u093e\u091a\u0928\u093e\u0932\u092f ",Object(s.jsx)("br",{})," \u0930\u093e\u091c\u0917\u0941\u0930\u0942\u0928\u0917\u0930"]}),Object(s.jsx)(k,{onInput:function(t){return e.props.setParentState({input:t.target.value.toLowerCase()})},inputValue:this.props.input,searchAgainst:this.state.searchAgainst,onChange:function(t){return e.setState({searchAgainst:t.target.value})},onSearch:function(t){return e.fetchResults(t)}}),this.state.loading?Object(s.jsx)("div",{className:"table-super",children:Object(s.jsx)(f,{page:"listing"})}):null,Object(s.jsx)(v,{setCurrentDetails:this.props.setCurrentDetails,tableElements:this.props.results,searched:this.state.searched||this.props.input&&this.props.results.length})]})}}]),a}(c.Component),w=a(14),S=a.n(w),C=a(19);a(47),a(48);var D=function(e){return Object(s.jsxs)("div",{className:"google"===e.whichCard?"cardGoogle":"card",children:[Object(s.jsx)("div",{className:"heading",children:e.bookName}),""!=e.bookName&&Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"description",children:e.children})]})},L=a(57),B=a(58),E=a(28);function A(e){var t=window.location.href,a=void 0!==e.quote?e.quote:"",c=void 0!==e.title?e.title:"\u0938\u093e\u0930\u094d\u0935\u091c\u0928\u093f\u0915 \u0935\u093e\u091a\u0928\u093e\u0932\u092f \u0930\u093e\u091c\u0917\u0941\u0930\u0942\u0928\u0917\u0930",n=void 0!==e.description?e.description:e.bookName;return Object(s.jsxs)(E.a,{children:[Object(s.jsx)("title",{children:c}),Object(s.jsx)("meta",{charset:"utf-8"}),Object(s.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),Object(s.jsx)("meta",{name:"csrf_token",content:""}),Object(s.jsx)("meta",{property:"type",content:"website"}),Object(s.jsx)("meta",{property:"url",content:t}),Object(s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),Object(s.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),Object(s.jsx)("meta",{name:"theme-color",content:"#ffffff"}),Object(s.jsx)("meta",{name:"_token",content:""}),Object(s.jsx)("meta",{name:"robots",content:"noodp"}),Object(s.jsx)("meta",{property:"title",content:c}),Object(s.jsx)("meta",{property:"quote",content:a}),Object(s.jsx)("meta",{name:"description",content:n}),Object(s.jsx)("meta",{property:"og:locale",content:"en_US"}),Object(s.jsx)("meta",{property:"og:type",content:"website"}),Object(s.jsx)("meta",{property:"og:title",content:c}),Object(s.jsx)("meta",{property:"og:quote",content:a}),Object(s.jsx)("meta",{content:"image/*",property:"og:image:type"}),Object(s.jsx)("meta",{property:"og:url",content:t}),Object(s.jsx)("meta",{property:"og:site_name",content:"CampersTribe"}),Object(s.jsx)("meta",{property:"og:description",content:n}),"    "]})}var I=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={gotGoogleData:!1,GresultScore:0,GarticleBody:"",Gname:"",Gdescription:"",gotFirebaseData:!1,jsonData:[],bookDetail:{}},s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.bookDetail;(void 0===e?{}:e).pustakName||this.getFirebaseData(),this.getGoogleData()}},{key:"getIdFromUrl",value:function(){var e=window.location.href.split("/");return e[e.length-1]}},{key:"getGoogleData",value:function(){var e=this,t=new XMLHttpRequest,a=this.props.bookDetail.pustakNameEnglish;t.addEventListener("load",(function(){var a=JSON.parse(t.responseText).itemListElement,s=void 0===a?[]:a,c=s.length&&s[0]||{},n=c.result,i=void 0===n?{}:n,r=c.resultScore,o=void 0===r?{}:r,l=i.detailedDescription,h=void 0===l?"":l,d=i.name,u=void 0===d?"":d,j=i.description,b=void 0===j?"":j,k=h.articleBody,p=void 0===k?"":k;e.setState({gotGoogleData:!0,GresultScore:o,GarticleBody:p,Gname:u,Gdescription:b})})),t.open("GET","https://kgsearch.googleapis.com/v1/entities:search?query="+a+"&key=AIzaSyAY9Boy7kdeOmi7JYAfI2zR8Ij3iF_zgxM&limit=1&indent=True"),t.send()}},{key:"getFirebaseData",value:function(){var e=Object(C.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection("bookList").doc(this.getIdFromUrl()).get();case 2:t=e.sent,a=t.data(),console.log(a),this.setState({bookDetail:a});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"nameArrayToString",value:function(e){for(var t="",a=0;a<e.length;a++)0!==a&&(t+=" ");return t}},{key:"render",value:function(){var e=this.state.bookDetail,t=this.props.bookDetail,a=t.pustakName?t:e;return Object(s.jsxs)("div",{className:"fullDetails",children:[Object(s.jsx)(A,{bookName:a.pustakName}),Object(s.jsxs)("div",{className:"flex-container",children:[a.pustakName&&Object(s.jsx)(D,{bookName:"Book Details",children:Object(s.jsx)("div",{className:"cardDetails",children:Object(s.jsxs)("div",{className:"book_details",children:[Object(s.jsxs)("div",{className:"rows",children:[Object(s.jsxs)("div",{className:"col1",children:[Object(s.jsx)("span",{className:"label",children:"Pustak Name"}),Object(s.jsx)("div",{className:"book_name",children:a.pustakName.join(" ")})]}),Object(s.jsxs)("div",{className:"col2",children:[Object(s.jsx)("span",{className:"label",children:"Lekhak"}),Object(s.jsx)("div",{className:"book_name",children:a.lekhak.join(" ")})]})]}),Object(s.jsxs)("div",{className:"rows",children:[Object(s.jsxs)("div",{className:"col1",children:[Object(s.jsx)("span",{className:"label",children:"Dakhal Id"}),Object(s.jsxs)("div",{className:"book_name",children:[a.dakhalId," "]})]}),Object(s.jsxs)("div",{className:"col2",children:[Object(s.jsx)("span",{className:"label",children:"Vibhag Id"}),Object(s.jsx)("div",{className:"book_name",children:a.vibhagId})]})]}),Object(s.jsx)("div",{className:"rows",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{className:"label",children:"Pustak Prakar"}),Object(s.jsx)("div",{className:"book_name",children:a.pustakPrakar})]})}),Object(s.jsxs)("div",{className:"source",children:["Book details provided by : ",a.usermail," "]})]})})}),Object(s.jsx)("div",{className:"whatsappShare",children:Object(s.jsx)(L.a,{title:"Check this book out",separator:" ",url:window.location.href,size:32,children:Object(s.jsx)(B.a,{size:32,round:!0})})}),this.state.GresultScore>140&&""!==this.state.GarticleBody&&Object(s.jsx)(D,{bookName:this.state.Gname,whichCard:"google",children:Object(s.jsxs)("div",{className:"googleDetails",children:[Object(s.jsxs)("div",{className:"eachgoogleDetails",children:["Result Score : ",Object(s.jsx)("div",{className:"googleResult",children:this.state.GresultScore})]}),""!==this.state.GarticleBody&&Object(s.jsxs)("div",{className:"eachgoogleDetails",children:["Article Body : ",Object(s.jsx)("div",{className:"googleResult",children:this.state.GarticleBody})]}),""!==this.state.Gdescription&&Object(s.jsxs)("div",{className:"eachgoogleDetails",children:["Description : ",Object(s.jsx)("div",{className:"googleResult",children:this.state.Gdescription})]}),Object(s.jsx)("div",{className:"source",children:"source : Google "})]})})]})]})}}]),a}(c.Component),P=a(22),G=[{key:"a"},{key:"b"},{key:"c"},{key:"d"},{key:"e"},{key:"f"},{key:"g"},{key:"h"},{key:"i"},{key:"j"},{key:"k"},{key:"l"},{key:"m"},{key:"o"},{key:"p"},{key:"q"},{key:"r"},{key:"s"},{key:"t"},{key:"u"},{key:"v"},{key:"w"},{key:"x"},{key:"y"},{key:"z"}],T=[{key:"\u0915"},{key:"\u0916"},{key:"\u0917"},{key:"\u0918"},{key:"\u0919"},{key:"\u091a"},{key:"\u091b"},{key:"\u091c"},{key:"\u091d"},{key:"\u091e"},{key:"\u091f"},{key:"\u0920"},{key:"\u0921"},{key:"\u0922"},{key:"\u0923"},{key:"\u0924"},{key:"\u0925"},{key:"\u0926"},{key:"\u0927"},{key:"\u0928"},{key:"\u092a"},{key:"\u092b"},{key:"\u092c"},{key:"\u092d"},{key:"\u092e"},{key:"\u092f"},{key:"\u0930"},{key:"\u0932"},{key:"\u0935"},{key:"\u0936"},{key:"\u0937"},{key:"\u0938"},{key:"\u0939"}],M=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).getLekhakNames=function(e){return Object(C.a)(S.a.mark((function t(){var a,s;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.props.setParentState({lekhakLoading:!0,lekhakSearched:!1,isBtnClicked:e,lekhakDict:{}}),t.next=3,x.collection("newMappingTrial").doc(e).get();case 3:a=t.sent,s=a.data().names,s=c.sortKeys(s),c.props.setParentState({lekhakDict:s,lekhakLoading:!1});case 7:case"end":return t.stop()}}),t)})))},c.getLekhakBooks=function(e){return Object(C.a)(S.a.mark((function t(){var a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e,c.props.setParentState({lekhakDict:{},lekhakSearched:!1,lekhakResults:[],currentLekhak:a}),t.next=4,x.collection("bookList").where("lekhakFullName","==","\u091c\u0949\u0928 \u0917\u094d\u0930\u093f\u0936\u092e").get().then((function(e){e.forEach((function(e){var t=e.data();c.props.setParentState({lekhakResults:c.props.lekhakResults.concat([Object(o.a)(Object(o.a)({},t),{},{id:e.id})])})}))}));case 4:c.props.setParentState({lekhakSearched:!0});case 5:case"end":return t.stop()}}),t)})))},c.renderAuthors=function(){return 0!==Object.keys(c.props.lekhakDict).length||c.props.lekhakLoading?Object.keys(c.props.lekhakDict).map((function(e,t){return Object(s.jsxs)("div",{className:"renderAuthors",children:[Object(s.jsxs)("div",{className:"authorName",children:[e," - ",Object(s.jsxs)("span",{children:[c.props.lekhakDict[e]," Books"]})]}),Object(s.jsx)("div",{className:"bookNames",children:Object(s.jsx)("p",{onClick:c.getLekhakBooks(e),children:"View Books"})})]})})):Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:"No mentionable lekhaks found."})})},c.renderAlphabets=function(e){return e.map((function(e){return Object(s.jsx)("button",{value:e.key,className:c.props.isBtnClicked===e.key?"alphabetsClicked":"alphabetsUnclicked",onClick:c.getLekhakNames(e.key),children:e.key})}))},c.state={lekhakLoading:c.props.lekhakLoading,activeTab:c.props.activeTab,lekhakDict:c.props.lekhakDict,lekhakSearched:c.props.lekhakSearched,lekhakResults:c.props.lekhakResults,currentLekhak:c.props.currentLekhak,isBtnClicked:c.props.isBtnClicked},c.toggle=c.toggle.bind(Object(P.a)(c)),c}return Object(h.a)(a,[{key:"toggle",value:function(e){this.props.activeTab!==e&&this.props.setParentState({activeTab:e,lekhakSearched:!1,lekhakDict:1===e?{"\u0915\u0930\u0941\u0923\u093e \u0917\u094b\u0916\u0932\u0947":7,"\u0915\u0943 \u092e\u0941 \u0909\u091c\u0933\u0902\u092c\u0915\u0930":9,"\u0915\u0947 \u0938\u093e\u0917\u0930":75}:{},isBtnClicked:1===e?"\u0915":"a"})}},{key:"sortKeys",value:function(e){for(var t=Object.keys(e).sort((function(e,t){return e<t?-1:e>t?1:0})),a={},s=0;s<t.length;s++)a[t[s]]=e[t[s]],delete e[t[s]];for(s=0;s<t.length;s++)e[t[s]]=a[t[s]];return e}},{key:"goBack",value:function(){this.props.setParentState({lekhakSearched:!1})}},{key:"componentDidMount",value:function(){this.props.setParentState({lekhakSearched:this.props.lekhakSearched})}},{key:"render",value:function(){var e=this,t=navigator.onLine;return console.log("Online? : ",t),t?Object(s.jsxs)("div",{className:"lekhakList",children:[Object(s.jsx)("div",{children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"toggleBtn",children:[Object(s.jsx)("button",{className:1===this.props.activeTab?"clickedBtn":"unclickedBtn",onClick:function(){e.toggle(1)},children:"Marathi"}),Object(s.jsx)("button",{className:2===this.props.activeTab?"clickedBtn":"unclickedBtn",onClick:function(){e.toggle(2)},children:"English"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:1===this.props.activeTab?Object(s.jsx)("div",{className:"ButtonContainer",children:this.renderAlphabets(T)}):null}),Object(s.jsx)("div",{children:2===this.props.activeTab?Object(s.jsx)("div",{className:"ButtonContainer",children:this.renderAlphabets(G)}):null})]})]})}),!this.props.lekhakSearched&&Object(s.jsxs)("div",{className:"authorsList",children:[this.props.lekhakLoading?Object(s.jsx)(f,{page:"lekhakList"}):null,this.renderAuthors()]}),this.props.lekhakSearched&&Object(s.jsxs)("div",{className:"lekhakBooklist",children:[Object(s.jsxs)("h1",{children:["\u0932\u0947\u0916\u0915 : ",this.props.currentLekhak]}),Object(s.jsx)("button",{onClick:this.getLekhakNames(this.props.currentLekhak.charAt(0)),className:"clickedBtn",children:"Go Back"},"keyLekhakGoBackButton"),Object(s.jsx)(v,{setCurrentDetails:this.props.setCurrentDetails,tableElements:this.props.lekhakResults,searched:this.props.lekhakSearched})]})]}):"You are offline. Please check your connection."}}]),a}(c.Component),F=(a(51),a.p+"static/media/search.28b0ad10.svg"),R=a.p+"static/media/lekhak.318f1ea1.svg",_=a.p+"static/media/about.ead10859.svg",U=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={isClicked:1},s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=window.location.href;e.includes("lekhakList")?this.setState({isClicked:2}):e.includes("aboutUs")&&this.setState({isClicked:3})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"mobileNav",children:[Object(s.jsx)("div",{className:1===this.state.isClicked?"mobileNav_clicked":"mobileNav_unclicked",children:Object(s.jsx)("a",{href:"#/search",onClick:function(){return e.setState({isClicked:1})},children:Object(s.jsx)("img",{src:F,className:"searchSvg",alt:"Search Books"})})}),Object(s.jsx)("div",{className:2===this.state.isClicked?"mobileNav_clicked":"mobileNav_unclicked",children:Object(s.jsx)("a",{href:"#/lekhaklist",onClick:function(){return e.setState({isClicked:2})},children:Object(s.jsx)("img",{src:R,className:"lekhakSvg",alt:"Lekhak List"})})}),Object(s.jsx)("div",{className:3===this.state.isClicked?"mobileNav_clicked":"mobileNav_unclicked",children:Object(s.jsx)("a",{href:"#/aboutus",onClick:function(){return e.setState({isClicked:3})},children:Object(s.jsx)("img",{src:_,className:"lekhakSvg",alt:"About US"})})})]})}}]),a}(c.Component),z=a(32);a(52);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var a,s,c=function(e,t){if(null==e)return{};var a,s,c={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var Y=c.createElement("g",null,c.createElement("g",null,c.createElement("path",{d:"M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"})));function X(e,t){var a=e.title,s=e.titleId,n=V(e,["title","titleId"]);return c.createElement("svg",q({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 492 492",style:{enableBackground:"new 0 0 492 492"},xmlSpace:"preserve",ref:t,"aria-labelledby":s},n),a?c.createElement("title",{id:s},a):null,Y)}var H=c.forwardRef(X);a.p;var J=function(){var e=function(){var e=window.location.href;return e.includes("lekhaklist")?"lekhak-list":e.includes("aboutus")?"about-us":e.includes("details")?"details":e.includes("search")?"search":e.includes("recommendation")?"recommendation":"search"},t=function(){var e=document.getElementsByClassName("tabs")[0].children;e&&Object(z.a)(e).forEach((function(e){e?e.children[0].classList.remove("active"):console.log()}))},a=function(e){t(),document.getElementById(e).classList.add("active")};return Object(c.useEffect)((function(){null!=document.getElementById(e())&&document.getElementById(e()).classList.add("active"),window.addEventListener("hashchange",(function(){null!=document.getElementById(e())&&(t(),document.getElementById(e()).classList.add("active"))}),!1)})),Object(s.jsxs)("nav",{className:"nav-bar",children:[window.location.href.includes("details")?Object(s.jsx)("a",{onClick:function(){return window.history.go(-1)},className:"back-link",children:Object(s.jsx)("div",{className:"back-button",children:Object(s.jsx)(H,{})})}):null,Object(s.jsxs)("div",{className:"tabs",children:[Object(s.jsx)("a",{href:"/savakhed/#/search",onClick:function(){a("search")},children:Object(s.jsx)("div",{className:"link-placeholders",id:"search",children:"Search"})}),Object(s.jsx)("a",{href:"/savakhed/#/lekhaklist",onClick:function(){a("lekhak-list")},children:Object(s.jsx)("div",{className:"link-placeholders",id:"lekhak-list",children:"Lekhak List"})}),Object(s.jsx)("a",{href:"/savakhed/#/recommendation",onClick:function(){a("recommendation")},children:Object(s.jsx)("div",{className:"link-placeholders",id:"recommendation",children:"Recommendations"})}),Object(s.jsx)("a",{href:"/savakhed/#/aboutus",onClick:function(){a("about-us")},children:Object(s.jsx)("div",{className:"link-placeholders",id:"about-us",children:"About Us"})}),Object(s.jsx)("a",{href:"/#/search",onClick:function(){a("about-us")},id:"title-id",children:Object(s.jsx)("div",{className:"title",children:e().replace("-"," ")})})]})]})};a(53);var W=function(){return Object(s.jsx)("div",{className:"aboutUs-container",children:Object(s.jsxs)("div",{className:"aboutUs-content",children:[Object(s.jsxs)("div",{className:"aboutUs-page-authors",children:[Object(s.jsx)("img",{src:"https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",alt:"Avatar"}),Object(s.jsx)("img",{src:"https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",alt:"Avatar"}),Object(s.jsx)("img",{src:"https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",alt:"Avatar"}),Object(s.jsx)("img",{src:"https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",alt:"Avatar"})]}),Object(s.jsx)("div",{className:"aboutUs-wordArt",children:Object(s.jsx)("img",{src:"https://bjgp.org/content/bjgp/67/658/231/F1.large.jpg",alt:"Word Cloud"})})]})})};var K=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],n=(t[1],Object(c.useState)(!1)),i=Object(j.a)(n,2),r=i[0],l=i[1];return Object(c.useEffect)((function(){!function(){var e=(new Date).getUTCDate();x.collection("bookList").orderBy("dakhalId","asc").get().then((function(t){for(var s=t.size/365,c=Math.floor((e-1)*s),n=Math.ceil(e*s),i=c;i<=n;i++){var r=t.docs[i].data();a.push(Object(o.a)(Object(o.a)({},r),{},{id:t.docs[i].id}))}l(!0)}))}()})),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(v,{tableHeaders:["Dakhal-ID","Vibhag-ID","Book","Author"],tableElements:a,searched:r,setCurrentDetails:function(e){return console.log(e)}})})},Q=/\/?details\/[a-z0-9A-Z]{20}/,Z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).setPath=function(){var t=window.location.href.split("#");if(t.length>1){var a=t[1].toLowerCase();if(a.includes("details"))Q.test(a)&&e.setState({show:"details"});else a.includes("lekhaklist")?e.setState({show:"lekhaklist"}):t[1].includes("aboutus")?e.setState({show:"aboutus"}):t[1].includes("recommendation")?e.setState({show:"recommendation"}):e.setState({show:"listing"})}},e.state={show:"listing",currentDetails:{},results:[],input:"",lekhakLoading:!1,activeTab:1,lekhakDict:{"\u0915\u0930\u0941\u0923\u093e \u0917\u094b\u0916\u0932\u0947":7,"\u0915\u0943 \u092e\u0941 \u0909\u091c\u0933\u0902\u092c\u0915\u0930":9,"\u0915\u0947 \u0938\u093e\u0917\u0930":75},lekhakSearched:!1,lekhakResults:[],currentLekhak:"",isBtnClicked:"\u0915"},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("hashchange",(function(){e.setPath()}),!1),this.setPath()}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(J,{url:this.state.show}),"details"===this.state.show&&Object(s.jsx)(I,{bookDetail:this.state.currentDetails}),"lekhaklist"===this.state.show&&Object(s.jsx)(M,Object(o.a)({setCurrentDetails:function(t){return e.setState({currentDetails:t})},setParentState:this.setState.bind(this)},this.state)),"listing"===this.state.show&&Object(s.jsx)(N,Object(o.a)({setCurrentDetails:function(t){return e.setState({currentDetails:t})},setParentState:this.setState.bind(this)},this.state)),"aboutus"===this.state.show&&Object(s.jsx)(W,{}),"recommendation"===this.state.show&&Object(s.jsx)(K,{}),Object(s.jsx)(U,{url:this.state.show})]})}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(Z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),$()}},[[54,1,2]]]);
//# sourceMappingURL=main.7de893bc.chunk.js.map