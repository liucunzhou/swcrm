(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-node-info-get-node-info"],{"1c4a":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".movable[data-v-6302cc9b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.block[data-v-6302cc9b]{height:%?400?%;width:%?400?%;background-color:#fff;border:1px solid #ccc;position:relative;margin:0 auto;margin-bottom:%?30?%}uni-movable-area[data-v-6302cc9b]{height:%?400?%;width:%?400?%;position:relative}.target[data-v-6302cc9b]{height:%?80?%;width:%?80?%;line-height:%?80?%;text-align:center;color:#fff;background-color:#4cd964;font-size:%?28?%;position:absolute}.info[data-v-6302cc9b]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.b[data-v-6302cc9b]{font-weight:700;width:%?150?%;display:inline-block}.span[data-v-6302cc9b]{width:%?100?%;display:inline-block}",""])},4882:function(t,e,i){var n=i("1c4a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("d74cd43c",n,!0,{sourceMap:!1,shadowMode:!1})},"6ff9":function(t,e,i){"use strict";i.r(e);var n=i("7b85"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"7b85":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"createSelectorQuery",top:0,left:"0px",info:[]}},onReady:function(){this.getNodeInfo()},methods:{setPosition:function(){this.left=Math.random()*uni.upx2px(320)+"px",this.top=Math.random()*uni.upx2px(320)+"px",this.getNodeInfo()},getNodeInfo:function(){var t=this;uni.createSelectorQuery().select(".target").boundingClientRect().exec(function(e){var i=e[0];if(i){var n=[];for(var a in i)"id"!==a&&"dataset"!==a&&n.push({key:a,val:i[a]});t.info=n}})}}};e.default=n},"9a28":function(t,e,i){"use strict";var n=i("4882"),a=i.n(n);a.a},a83f:function(t,e,i){"use strict";i.r(e);var n=i("abbe"),a=i("6ff9");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("9a28");var c=i("2877"),r=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"6302cc9b",null);e["default"]=r.exports},abbe:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",{staticClass:"movable block"},[i("v-uni-movable-area",[i("v-uni-movable-view",{staticClass:"target",attrs:{direction:"all"},on:{change:function(e){e=t.$handleEvent(e),t.getNodeInfo(e)}}},[t._v("Drag")])],1)],1),i("v-uni-view",{staticClass:"movable"},[i("v-uni-view",{staticClass:"info"},t._l(t.info,function(e,n){return i("v-uni-view",{key:n},[i("v-uni-text",{staticClass:"b"},[t._v(t._s(e.key))]),i("v-uni-text",{staticClass:"span"},[t._v(t._s(e.val))])],1)}),1)],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}}]);