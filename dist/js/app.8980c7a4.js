(function(i){function e(e){for(var r,o,s=e[0],c=e[1],I=e[2],l=0,v=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(i[r]=c[r]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,I||[]),t()}function t(){for(var i,e=0;e<a.length;e++){for(var t=a[e],r=!0,s=1;s<t.length;s++){var c=t[s];0!==n[c]&&(r=!1)}r&&(a.splice(e--,1),i=o(o.s=t[0]))}return i}var r={},n={app:0},a=[];function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=i,o.c=r,o.d=function(i,e,t){o.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:t})},o.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,e){if(1&e&&(i=o(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var r in i)o.d(t,r,function(e){return i[e]}.bind(null,r));return t},o.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return o.d(e,"a",e),e},o.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var I=0;I<s.length;I++)e(s[I]);var u=c;a.push([0,"chunk-vendors"]),t()})({0:function(i,e,t){i.exports=t("56d7")},"17b5":function(i,e){i.exports="data:image/png;base64,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"},"1ad5":function(i,e,t){},"56d7":function(i,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),n=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[t("header",[i._m(0),t("div",{staticClass:"col search-area"},[t("Search",{attrs:{placeholder:"Cerca un titolo"},on:{search:i.search}})],1)]),t("Test"),t("div",{staticClass:"container"},[t("h2",[i._v("Film")]),t("div",{attrs:{id:"movies"}},i._l(i.movies,(function(i){return t("Card",{key:i.id,attrs:{item:i}})})),1),t("h2",[i._v("Serie tv")]),t("div",{attrs:{id:"series"}},i._l(i.series,(function(i){return t("Card",{key:i.id,attrs:{item:i}})})),1)])],1)},a=[function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"col"},[t("img",{attrs:{id:"logo",src:"https://brand.netflix.com/static/assets/icons/netflix_logo.svg",alt:""}})])}],o=(t("99af"),function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:i.userSearch,expression:"userSearch"}],attrs:{type:"text",placeholder:i.placeholder},domProps:{value:i.userSearch},on:{input:function(e){e.target.composing||(i.userSearch=e.target.value)}}}),t("button",{on:{click:i.searchOut}},[i._v("cerca")])])}),s=[],c={name:"Search",props:["placeholder"],data:function(){return{userSearch:""}},methods:{searchOut:function(){this.$emit("search",this.userSearch)}}},I=c,u=t("2877"),l=Object(u["a"])(I,o,s,!1,null,"7216d28a",null),v=l.exports,f=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{attrs:{id:"container"}},[t("div",{staticClass:"poster"},[t("img",{attrs:{src:""+i.basePhotoUri+i.photoSize+this.item.poster_path}}),t("div",{staticClass:"info"},[t("ul",[t("li",{attrs:{id:"film-name"}},[i._v(i._s(i.item.title||i.item.name))]),t("li",{attrs:{id:"og-film-name"}},[t("em",[i._v(i._s(i.item.original_title||i.item.original_name))])]),t("li",{attrs:{id:"lang"}},[i.hasFLag?t("img",{attrs:{src:i.flagSrc,alt:i.item.original_language}}):t("span",[i._v(" "+i._s(i.item.original_language)+" ")])]),t("li",{attrs:{id:"vote"}},[i._v(i._s(i.item.vote_average))]),t("li",{attrs:{id:"sinox"}},[i._v(" "+i._s(i.item.overview)+" ")])])])])])},A=[],p=(t("caad"),t("2532"),t("5377"),{name:"Card",props:["item"],data:function(){return{flags:["it","en"],basePhotoUri:"https://image.tmdb.org/t/p/",photoSize:"w300/",upHere:!1}},computed:{flagSrc:function(){return t("b967")("./".concat(this.item.original_language,".png"))},hasFlag:function(){return this.flags.includes(this.item.original_language)}}}),g=p,h=(t("8446"),Object(u["a"])(g,f,A,!1,null,"622a376a",null)),d=h.exports,m=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-hover",{scopedSlots:i._u([{key:"default",fn:function(e){var r=e.hover;return[t("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[t("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"}}),t("v-card-text",[t("h2",{staticClass:"text-h6 primary--text"},[i._v(" Magento Forests ")]),i._v(" Travel to the best outdoor experience on planet Earth. A vacation you will never forget! ")]),t("v-card-title",[t("v-rating",{staticClass:"mr-2",attrs:{value:4,dense:"",color:"orange","background-color":"orange",hover:""}}),t("span",{staticClass:"primary--text text-subtitle-2"},[i._v("64 Reviews")])],1),t("v-fade-transition",[r?t("v-overlay",{attrs:{absolute:"",color:"#036358"}},[t("v-btn",[i._v("See more info")])],1):i._e()],1)],1)]}}])})},w=[],b={name:"Test",data:function(){return{overlay:!1}}},C=b,E=Object(u["a"])(C,m,w,!1,null,"6768cf16",null),y=E.exports,O=t("bc3a"),j=t.n(O),x={name:"App",props:[],components:{Search:v,Card:d,Test:y},data:function(){return{movies:[],series:[],api:{language:"it-IT",baseUri:"https://api.themoviedb.org/3",key:"9821bc2a93ba1a28cbc3936527a04e7f",upHere:!0}}},methods:{search:function(i){if(!i)return this.movies=[],void(this.series=[]);var e=this.api,t=e.key,r=e.language,n={params:{language:r,api_key:t,query:i}};this.fetchApi("search/movie",n,"movies"),this.fetchApi("search/tv",n,"series")},fetchApi:function(i,e,t){var r=this;j.a.get("".concat(this.api.baseUri,"/").concat(i),e).then((function(i){r[t]=i.data.results}))}}},M=x,S=(t("5c0b"),Object(u["a"])(M,n,a,!1,null,null,null)),P=S.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(i){return i(P)}}).$mount("#app")},"5c0b":function(i,e,t){"use strict";t("9c0c")},8446:function(i,e,t){"use strict";t("1ad5")},"9c0c":function(i,e,t){},b967:function(i,e,t){var r={"./en.png":"17b5","./it.png":"e33f"};function n(i){var e=a(i);return t(e)}function a(i){if(!t.o(r,i)){var e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}return r[i]}n.keys=function(){return Object.keys(r)},n.resolve=a,i.exports=n,n.id="b967"},e33f:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.8980c7a4.js.map