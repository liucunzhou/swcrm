(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-switch-switch"],{cbf4:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title"},[t._v("默认样式")]),n("v-uni-view",[n("v-uni-switch",{attrs:{checked:""},on:{change:function(i){i=t.$handleEvent(i),t.switch1Change(i)}}}),n("v-uni-switch",{on:{change:function(i){i=t.$handleEvent(i),t.switch2Change(i)}}})],1),n("v-uni-view",{staticClass:"uni-title"},[t._v("不同颜色和尺寸的switch")]),n("v-uni-view",[n("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{checked:"",color:"#FFCC33"}}),n("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{color:"#FFCC33"}})],1),n("v-uni-view",{staticClass:"uni-title"},[t._v("推荐展示样式")])],1),n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"uni-list-cell-db"},[t._v("开启中")]),n("v-uni-switch",{attrs:{checked:""}})],1),n("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"uni-list-cell-db"},[t._v("关闭")]),n("v-uni-switch")],1)],1)],1)},c=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return c})},cd54:function(t,i,n){"use strict";n.r(i);var e=n("f21f"),c=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(i,t,function(){return e[t]})}(s);i["default"]=c.a},df63:function(t,i,n){"use strict";n.r(i);var e=n("cbf4"),c=n("cd54");for(var s in c)"default"!==s&&function(t){n.d(i,t,function(){return c[t]})}(s);var a=n("2877"),u=Object(a["a"])(c["default"],e["a"],e["b"],!1,null,null,null);i["default"]=u.exports},f21f:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"switch 开关"}},methods:{switch1Change:function(t){console.log("switch1 发生 change 事件，携带值为",t.target.value)},switch2Change:function(t){console.log("switch2 发生 change 事件，携带值为",t.target.value)}}};i.default=e}}]);