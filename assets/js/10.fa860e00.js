(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{195:function(t,e,a){"use strict";function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return r}))},196:function(t,e,a){"use strict";var r=a(4),s=a(13),c=a(14),n=a(61),o=a(59),l=a(7),i=a(97).f,u=a(98).f,p=a(9).f,d=a(99).trim,f=r.Number,m=f,v=f.prototype,y="Number"==c(a(60)(v)),b="trim"in String.prototype,g=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var a,r,s,c=(e=b?e.trim():d(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+e}for(var n,l=e.slice(2),i=0,u=l.length;i<u;i++)if((n=l.charCodeAt(i))<48||n>s)return NaN;return parseInt(l,r)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof f&&(y?l((function(){v.valueOf.call(a)})):"Number"!=c(a))?n(new m(g(e)),a,f):g(e)};for(var h,N=a(8)?i(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;N.length>_;_++)s(m,h=N[_])&&!s(f,h)&&p(f,h,u(m,h));f.prototype=v,v.constructor=f,a(10)(r,"Number",f)}},218:function(t,e,a){},219:function(t,e,a){},246:function(t,e,a){"use strict";a(218)},247:function(t,e,a){"use strict";a(219)},459:function(t,e,a){"use strict";a.r(e);a(25),a(96);var r=a(195),s=(a(196),a(24),{name:"MinjiRecordPlayer",props:{color:{type:String,default:"red",validator:function(t){return["red","purple","blue","green"].indexOf(t.toLowerCase())>=0}}},data:function(){return{state:!1}},methods:{playSong:function(){var t=document.querySelector(".record.".concat(this.color)),e=document.querySelector(".tone-arm.".concat(this.color)),a=document.querySelector(".my-song.".concat(this.color));!1===this.state?(t.classList.add("on"),e.classList.add("play"),setTimeout((function(){a.play()}),500)):(t.classList.remove("on"),e.classList.remove("play"),a.pause()),this.state=!this.state},changeVolume:function(t){document.querySelector(".my-song.".concat(this.color)).volume=Number(t.target.value)}}}),c=(a(246),a(1)),n={components:{"m-player":Object(c.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"player",class:Object(r.a)({},"".concat(t.color),!0)},[e("div",{staticClass:"record",class:Object(r.a)({},"".concat(t.color),!0)},[e("div",{staticClass:"label"})]),t._v(" "),e("div",{staticClass:"tone-arm",class:Object(r.a)({},"".concat(t.color),!0)},[e("div",{staticClass:"control"})]),t._v(" "),e("button",{staticClass:"btn",class:Object(r.a)({},"".concat(t.color),!0),on:{click:t.playSong}}),t._v(" "),e("div",{staticClass:"slider-container"},[e("input",{staticClass:"slider",class:Object(r.a)({},"".concat(t.color),!0),attrs:{type:"range",min:"0",max:"1",step:"0.1",value:"0.7"},on:{input:t.changeVolume}})]),t._v(" "),e("audio",{staticClass:"my-song",class:Object(r.a)({},"".concat(t.color),!0),attrs:{loop:"",src:"https://od.lk/s/MjlfMjM4MjYxNDBf/ddudu.mp3",preload:"auto"}})])}),[],!1,null,"37b7539f",null).exports},data:function(){return{block:'\n      <m-player></m-player>\n      <m-player color="purple"></m-player>\n      <m-player color="blue"></m-player>\n      <m-player color="green"></m-player>\n      '.replace(/^\s*/gm,"").trim()}},created:function(){Promise.all([a.e(0),a.e(2)]).then(a.t.bind(null,450,7)),a.e(1).then(a.t.bind(null,451,7)).then((function(t){t.initHighlightingOnLoad()}))}},o=(a(247),Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"player-page"},[e("div",{staticClass:"player-group"},[e("div",{staticClass:"player-wrapper"},[e("m-player"),t._v(" "),e("div",{staticClass:"gap"}),t._v(" "),e("m-player",{attrs:{color:"purple"}})],1),t._v(" "),e("div",{staticClass:"player-wrapper"},[e("m-player",{attrs:{color:"blue"}}),t._v(" "),e("div",{staticClass:"gap"}),t._v(" "),e("m-player",{attrs:{color:"green"}})],1)]),t._v(" "),e("div",{staticClass:"code-block"},[e("pre",[e("code",{staticClass:"html"},[t._v(t._s(t.block))])])])])}),[],!1,null,"f1c69c56",null));e.default=o.exports}}]);