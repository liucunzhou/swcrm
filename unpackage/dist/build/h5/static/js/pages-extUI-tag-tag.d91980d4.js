(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-tag-tag"],{"217d":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,".uni-tag[data-v-9adaf52a]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?32?%;height:%?60?%;line-height:calc(%?60?% - 2px);font-size:%?28?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#333;border-radius:%?6?%;background-color:#f8f8f8;border:1px solid #f8f8f8}.uni-tag--circle[data-v-9adaf52a]{border-radius:%?30?%}.uni-tag--mark[data-v-9adaf52a]{border-radius:0 %?30?% %?30?% 0}.uni-tag--disabled[data-v-9adaf52a]{opacity:.5}.uni-tag--small[data-v-9adaf52a]{height:%?40?%;padding:0 %?16?%;line-height:calc(%?40?% - 2px);font-size:%?24?%}.uni-tag--primary[data-v-9adaf52a]{color:#fff;background-color:#007aff;border:1px solid #007aff}.uni-tag--primary.uni-tag--inverted[data-v-9adaf52a]{color:#007aff;background-color:#fff;border:1px solid #007aff}.uni-tag--success[data-v-9adaf52a]{color:#fff;background-color:#4cd964;border:1px solid #4cd964}.uni-tag--success.uni-tag--inverted[data-v-9adaf52a]{color:#4cd964;background-color:#fff;border:1px solid #4cd964}.uni-tag--warning[data-v-9adaf52a]{color:#fff;background-color:#f0ad4e;border:1px solid #f0ad4e}.uni-tag--warning.uni-tag--inverted[data-v-9adaf52a]{color:#f0ad4e;background-color:#fff;border:1px solid #f0ad4e}.uni-tag--error[data-v-9adaf52a]{color:#fff;background-color:#dd524d;border:1px solid #dd524d}.uni-tag--error.uni-tag--inverted[data-v-9adaf52a]{color:#dd524d;background-color:#fff;border:1px solid #dd524d}.uni-tag--inverted[data-v-9adaf52a]{color:#333;background-color:#fff;border:1px solid #f8f8f8}",""])},2444:function(t,a,e){"use strict";e.r(a);var i=e("4dee"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,function(){return i[t]})}(r);a["default"]=n.a},2714:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.text?e("v-uni-view",{staticClass:"uni-tag",class:[t.disabled?"uni-tag--disabled":"",t.inverted?"uni-tag--inverted":"",t.circle?"uni-tag--circle":"",t.mark?"uni-tag--mark":"","uni-tag--"+t.size,"uni-tag--"+t.type],on:{click:function(a){a=t.$handleEvent(a),t._onClick(a)}}},[t._v(t._s(t.text))]):t._e()},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},4443:function(t,a,e){"use strict";var i=e("9bba"),n=e.n(i);n.a},4828:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},mark:{type:Boolean,default:!1}},methods:{_onClick:function(){this.disabled||this.$emit("click")}}};a.default=i},"4dee":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("f00f"));function n(t){return t&&t.__esModule?t:{default:t}}var r={components:{uniTag:i.default},data:function(){return{type:"default",inverted:!1}},methods:{setType:function(){var t=["default","primary","success","warning","error"],a=t.indexOf(this.type);t.splice(a,1);var e=Math.floor(4*Math.random());this.type=t[e]},setInverted:function(){this.inverted=!this.inverted}}};a.default=r},5075:function(t,a,e){"use strict";var i=e("e83b"),n=e.n(i);n.a},"5ce1":function(t,a,e){"use strict";e.r(a);var i=e("6c7a"),n=e("2444");for(var r in n)"default"!==r&&function(t){e.d(a,t,function(){return n[t]})}(r);e("4443");var s=e("2877"),l=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"6a3a701a",null);a["default"]=l.exports},"6c7a":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"example"},[e("v-uni-view",{staticClass:"example-title"},[t._v("实心标签")]),e("v-uni-view",[e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{text:"标签"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{text:"标签",type:"primary"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{text:"标签",type:"success"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{text:"标签",type:"warning"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{text:"标签",type:"error"}})],1)],1),e("v-uni-view",{staticClass:"example-title"},[t._v("空心标签")]),e("v-uni-view",[e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{inverted:!0,text:"标签"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{inverted:!0,text:"标签",type:"primary"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{inverted:!0,text:"标签",type:"success"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{inverted:!0,text:"标签",type:"warning"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{inverted:!0,text:"标签",type:"error"}})],1)],1),e("v-uni-view",{staticClass:"example-title"},[t._v("圆角样式")]),e("v-uni-view",[e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{circle:!0,text:"标签",type:"primary",size:"small"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{inverted:!0,circle:!0,text:"标签",type:"success",size:"small"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{circle:!0,text:"标签",type:"warning"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{inverted:!0,circle:!0,text:"标签",type:"error"}})],1)],1),e("v-uni-view",{staticClass:"example-title"},[t._v("标记样式")]),e("v-uni-view",[e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{mark:!0,text:"标签",type:"primary",size:"small"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{mark:!0,text:"标签",type:"success",size:"small"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{mark:!0,text:"标签",type:"warning"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{mark:!0,circle:!0,text:"标签",type:"error"}})],1)],1),e("v-uni-view",{staticClass:"example-title"},[t._v("点击事件")]),e("v-uni-view",[e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{type:t.type,text:"标签"},on:{click:function(a){a=t.$handleEvent(a),t.setType(a)}}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{circle:!0,inverted:t.inverted,text:"标签",type:"primary"},on:{click:function(a){a=t.$handleEvent(a),t.setInverted(a)}}})],1)],1),e("v-uni-view",{staticClass:"example-title"},[t._v("小标签")]),e("v-uni-view",[e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{text:"标签",size:"small"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{text:"标签",type:"primary",size:"small"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{text:"标签",type:"success",size:"small"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{inverted:!0,mark:!0,text:"标签",type:"warning",size:"small"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{inverted:!0,circle:!0,text:"标签",type:"error",size:"small"}})],1)],1),e("v-uni-view",{staticClass:"example-title"},[t._v("不可点击状态")]),e("v-uni-view",{staticClass:"page-section"},[e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{disabled:!0,text:"标签"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{disabled:!0,text:"标签",type:"primary"}})],1),e("v-uni-view",{staticClass:"tag-view"},[e("uni-tag",{attrs:{inverted:!0,disabled:!0,text:"标签",type:"error",size:"small"}})],1)],1)],1)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},"6fec":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,"uni-page-body[data-v-6a3a701a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff}uni-view[data-v-6a3a701a]{font-size:%?28?%;line-height:inherit}.example[data-v-6a3a701a]{padding:0 %?30?% %?30?%}.example-title[data-v-6a3a701a]{font-size:%?32?%;line-height:%?32?%;color:#777;margin:%?40?% %?25?%;position:relative}.example .example-title[data-v-6a3a701a]{margin:%?40?% 0}.example-body[data-v-6a3a701a]{padding:0 %?40?%}.tag-view[data-v-6a3a701a]{margin:%?10?% %?20?%;display:inline-block}body.?%PAGE?%[data-v-6a3a701a]{background-color:#fff}",""])},"9bba":function(t,a,e){var i=e("6fec");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("312b42e7",i,!0,{sourceMap:!1,shadowMode:!1})},e83b:function(t,a,e){var i=e("217d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("476fbbfb",i,!0,{sourceMap:!1,shadowMode:!1})},ee19:function(t,a,e){"use strict";e.r(a);var i=e("4828"),n=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(a,t,function(){return i[t]})}(r);a["default"]=n.a},f00f:function(t,a,e){"use strict";e.r(a);var i=e("2714"),n=e("ee19");for(var r in n)"default"!==r&&function(t){e.d(a,t,function(){return n[t]})}(r);e("5075");var s=e("2877"),l=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"9adaf52a",null);a["default"]=l.exports}}]);