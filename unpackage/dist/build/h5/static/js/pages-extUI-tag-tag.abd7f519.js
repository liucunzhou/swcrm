(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-tag-tag"],{"021e":function(t,e,i){"use strict";var a=i("aaa4"),n=i.n(a);n.a},"12fa":function(t,e,i){"use strict";i.r(e);var a=i("c5e7"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},"19ef":function(t,e,i){"use strict";i.r(e);var a=i("3728"),n=i("12fa");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("021e");var s=i("2877"),l=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"4fa7e487",null);e["default"]=l.exports},"34f1":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"example"},[i("v-uni-view",{staticClass:"example-title"},[t._v("实心标签")]),i("v-uni-view",[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",type:"primary"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",type:"success"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",type:"warning"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",type:"error"}})],1)],1),i("v-uni-view",{staticClass:"example-title"},[t._v("空心标签")]),i("v-uni-view",[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,text:"标签"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,text:"标签",type:"primary"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,text:"标签",type:"success"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,text:"标签",type:"warning"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,text:"标签",type:"error"}})],1)],1),i("v-uni-view",{staticClass:"example-title"},[t._v("圆角样式")]),i("v-uni-view",[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{circle:!0,text:"标签",type:"primary",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,circle:!0,text:"标签",type:"success",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{circle:!0,text:"标签",type:"warning"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,circle:!0,text:"标签",type:"error"}})],1)],1),i("v-uni-view",{staticClass:"example-title"},[t._v("标记样式")]),i("v-uni-view",[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{mark:!0,text:"标签",type:"primary",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{mark:!0,text:"标签",type:"success",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{mark:!0,text:"标签",type:"warning"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{mark:!0,circle:!0,text:"标签",type:"error"}})],1)],1),i("v-uni-view",{staticClass:"example-title"},[t._v("点击事件")]),i("v-uni-view",[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{type:t.type,text:"标签"},on:{click:function(e){e=t.$handleEvent(e),t.setType(e)}}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{circle:!0,inverted:t.inverted,text:"标签",type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.setInverted(e)}}})],1)],1),i("v-uni-view",{staticClass:"example-title"},[t._v("小标签")]),i("v-uni-view",[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",type:"primary",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{text:"标签",type:"success",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,mark:!0,text:"标签",type:"warning",size:"small"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,circle:!0,text:"标签",type:"error",size:"small"}})],1)],1),i("v-uni-view",{staticClass:"example-title"},[t._v("不可点击状态")]),i("v-uni-view",{staticClass:"page-section"},[i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{disabled:!0,text:"标签"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{disabled:!0,text:"标签",type:"primary"}})],1),i("v-uni-view",{staticClass:"tag-view"},[i("uni-tag",{attrs:{inverted:!0,disabled:!0,text:"标签",type:"error",size:"small"}})],1)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},3728:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("v-uni-view",{staticClass:"uni-tag",class:[t.disabled?"uni-tag--disabled":"",t.inverted?"uni-tag--inverted":"",t.circle?"uni-tag--circle":"",t.mark?"uni-tag--mark":"","uni-tag--"+t.size,"uni-tag--"+t.type],on:{click:function(e){e=t.$handleEvent(e),t._onClick(e)}}},[t._v(t._s(t.text))]):t._e()},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},4645:function(t,e,i){var a=i("f70c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3cf9d3d4",a,!0,{sourceMap:!1,shadowMode:!1})},"4a6e":function(t,e,i){"use strict";i.r(e);var a=i("34f1"),n=i("92a2");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("bfd6");var s=i("2877"),l=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"1fdc1f7e",null);e["default"]=l.exports},"63cf":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-tag[data-v-4fa7e487]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?32?%;height:%?60?%;line-height:calc(%?60?% - 2px);font-size:%?28?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#333;border-radius:%?6?%;background-color:#f8f8f8;border:1px solid #f8f8f8}.uni-tag--circle[data-v-4fa7e487]{border-radius:%?30?%}.uni-tag--mark[data-v-4fa7e487]{border-radius:0 %?30?% %?30?% 0}.uni-tag--disabled[data-v-4fa7e487]{opacity:.5}.uni-tag--small[data-v-4fa7e487]{height:%?40?%;padding:0 %?16?%;line-height:calc(%?40?% - 2px);font-size:%?24?%}.uni-tag--primary[data-v-4fa7e487]{color:#fff;background-color:#007aff;border:1px solid #007aff}.uni-tag--primary.uni-tag--inverted[data-v-4fa7e487]{color:#007aff;background-color:#fff;border:1px solid #007aff}.uni-tag--success[data-v-4fa7e487]{color:#fff;background-color:#4cd964;border:1px solid #4cd964}.uni-tag--success.uni-tag--inverted[data-v-4fa7e487]{color:#4cd964;background-color:#fff;border:1px solid #4cd964}.uni-tag--warning[data-v-4fa7e487]{color:#fff;background-color:#f0ad4e;border:1px solid #f0ad4e}.uni-tag--warning.uni-tag--inverted[data-v-4fa7e487]{color:#f0ad4e;background-color:#fff;border:1px solid #f0ad4e}.uni-tag--error[data-v-4fa7e487]{color:#fff;background-color:#dd524d;border:1px solid #dd524d}.uni-tag--error.uni-tag--inverted[data-v-4fa7e487]{color:#dd524d;background-color:#fff;border:1px solid #dd524d}.uni-tag--inverted[data-v-4fa7e487]{color:#333;background-color:#fff;border:1px solid #f8f8f8}",""])},7813:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("19ef"));function n(t){return t&&t.__esModule?t:{default:t}}var r={components:{uniTag:a.default},data:function(){return{type:"default",inverted:!1}},methods:{setType:function(){var t=["default","primary","success","warning","error"],e=t.indexOf(this.type);t.splice(e,1);var i=Math.floor(4*Math.random());this.type=t[i]},setInverted:function(){this.inverted=!this.inverted}}};e.default=r},"92a2":function(t,e,i){"use strict";i.r(e);var a=i("7813"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},aaa4:function(t,e,i){var a=i("63cf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("52992bac",a,!0,{sourceMap:!1,shadowMode:!1})},bfd6:function(t,e,i){"use strict";var a=i("4645"),n=i.n(a);n.a},c5e7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},mark:{type:Boolean,default:!1}},methods:{_onClick:function(){this.disabled||this.$emit("click")}}};e.default=a},f70c:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-1fdc1f7e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff}uni-view[data-v-1fdc1f7e]{font-size:%?28?%;line-height:inherit}.example[data-v-1fdc1f7e]{padding:0 %?30?% %?30?%}.example-title[data-v-1fdc1f7e]{font-size:%?32?%;line-height:%?32?%;color:#777;margin:%?40?% %?25?%;position:relative}.example .example-title[data-v-1fdc1f7e]{margin:%?40?% 0}.example-body[data-v-1fdc1f7e]{padding:0 %?40?%}.tag-view[data-v-1fdc1f7e]{margin:%?10?% %?20?%;display:inline-block}body.?%PAGE?%[data-v-1fdc1f7e]{background-color:#fff}",""])}}]);