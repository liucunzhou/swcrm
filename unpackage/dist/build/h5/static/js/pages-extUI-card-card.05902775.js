(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-card-card"],{"04ea":function(e,t,i){"use strict";i.r(t);var a=i("dd50"),n=i("f606");for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);i("5981");var o=i("2877"),l=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"bda58a48",null);t["default"]=l.exports},"0ede":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("04ea"));function n(e){return e&&e.__esModule?e:{default:e}}var r={components:{uniCard:a.default},data:function(){return{}},methods:{clickCard:function(){uni.showToast({title:"点击卡片",icon:"none"})}}};t.default=r},1032:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-ddee933e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff}uni-view[data-v-ddee933e]{font-size:%?28?%;line-height:inherit}.example[data-v-ddee933e]{padding:0 %?30?% %?30?%}.example-title[data-v-ddee933e]{font-size:%?32?%;line-height:%?32?%;color:#777;margin:%?40?% %?25?%;position:relative}.example .example-title[data-v-ddee933e]{margin:%?40?% 0}.example-body[data-v-ddee933e]{padding:0 %?40?%}body.?%PAGE?%[data-v-ddee933e]{background-color:#fff}",""])},"3fc9":function(e,t,i){var a=i("9e92");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("014ee671",a,!0,{sourceMap:!1,shadowMode:!1})},5981:function(e,t,i){"use strict";var a=i("3fc9"),n=i.n(a);n.a},7369:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"example-title"},[e._v("基础卡片")]),i("uni-card",{attrs:{title:"标题文字"},on:{click:function(t){t=e.$handleEvent(t),e.clickCard(t)}}},[e._v("这是一个基础卡片示例，内容样式可自定义，卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、时间等。")]),i("v-uni-view",{staticClass:"example-title"},[e._v("完整卡片")]),i("uni-card",{attrs:{title:"标题文字",thumbnail:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png",extra:"额外信息",note:"Tips"}},[e._v("内容主体，可自定义内容及样式")]),i("v-uni-view",{staticClass:"example-title"},[e._v("通栏卡片")]),i("uni-card",{attrs:{"is-full":!0,title:"DCloud",thumbnail:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png",extra:"2018.12.12",note:"Tips"}},[e._v("内容主体，可自定义内容及样式，内容主体，可自定义内容及样式，内容主体，可自定义内容及样式")])],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"812a":function(e,t,i){"use strict";var a=i("946f"),n=i.n(a);n.a},"898a":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniCard",props:{title:{type:String,default:""},extra:{type:String,default:""},note:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1}},methods:{onClick:function(){this.$emit("click")}}};t.default=a},"946f":function(e,t,i){var a=i("1032");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("63296d12",a,!0,{sourceMap:!1,shadowMode:!1})},"9e92":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'.uni-card[data-v-bda58a48]{margin-left:%?24?%;margin-right:%?24?%;background:#fff;-webkit-box-shadow:none;box-shadow:none;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.uni-card[data-v-bda58a48]:after{content:"";position:absolute;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border:1px solid #c8c7cc;border-radius:%?12?%;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5)}.uni-card__footer[data-v-bda58a48],.uni-card__header[data-v-bda58a48]{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:%?16?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-card__header[data-v-bda58a48]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-card__header-title[data-v-bda58a48]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin-right:%?16?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-card__header-title-text[data-v-bda58a48]{font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.uni-card__header-extra-img-view[data-v-bda58a48]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.uni-card__header-extra-img[data-v-bda58a48]{height:%?40?%;width:%?40?%;margin-right:%?16?%}.uni-card__header-extra-text[data-v-bda58a48]{-webkit-box-flex:0;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;width:30%;margin-left:%?16?%;font-size:%?28?%;text-align:right;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.uni-card__content--pd[data-v-bda58a48]{padding:%?16?%}.uni-card__footer[data-v-bda58a48]{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#999;font-size:%?24?%;padding-top:0}.uni-card--full[data-v-bda58a48]{margin:0}',""])},c88f:function(e,t,i){"use strict";i.r(t);var a=i("7369"),n=i("d00d");for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);i("812a");var o=i("2877"),l=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"ddee933e",null);t["default"]=l.exports},d00d:function(e,t,i){"use strict";i.r(t);var a=i("0ede"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t["default"]=n.a},dd50:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-card",class:e.isFull?"uni-card--full":"",on:{click:function(t){t=e.$handleEvent(t),e.onClick(t)}}},[e.title?i("v-uni-view",{staticClass:"uni-card__header"},[e.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-extra-img-view"},[i("v-uni-image",{staticClass:"uni-card__header-extra-img",attrs:{src:e.thumbnail}})],1):e._e(),i("v-uni-view",{staticClass:"uni-card__header-title-text"},[e._v(e._s(e.title))]),e.extra?i("v-uni-view",{staticClass:"uni-card__header-extra-text"},[e._v(e._s(e.extra))]):e._e()],1):e._e(),i("v-uni-view",{staticClass:"uni-card__content uni-card__content--pd"},[e._t("default")],2),e.note?i("v-uni-view",{staticClass:"uni-card__footer"},[e._v(e._s(e.note))]):e._e()],1)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},f606:function(e,t,i){"use strict";i.r(t);var a=i("898a"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t["default"]=n.a}}]);