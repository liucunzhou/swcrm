(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-default-nav-default"],{"83e9":function(t,e,n){"use strict";n.r(e);var a=n("c454"),i=n("d6ab");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);var s=n("2877"),r=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"251fa900",null);e["default"]=r.exports},"8abf":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"nav-default",hasSetText:!1,hasSetBg:!1}},methods:{setText:function(){this.hasSetText=!this.hasSetText,uni.setNavigationBarTitle({title:this.hasSetText?"Hello uni-app":"默认导航栏"})},setBg:function(){this.hasSetBg=!this.hasSetBg,uni.setNavigationBarColor({frontColor:this.hasSetBg?"#ffffff":"#000000",backgroundColor:this.hasSetBg?"#007AFF":"#F8F8F8"})}}};e.default=a},c454:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page"},[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-helllo-text"},[t._v("本页标题栏是uni-app的默认配置，开发者可在pages.json里配置文字内容及标题颜色，也可通过api接口将其改变。")]),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{type:"default"},on:{click:function(e){e=t.$handleEvent(e),t.setText(e)}}},[t._v("改变标题栏文字")]),n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.setBg(e)}}},[t._v("改变标题栏颜色")])],1)],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},d6ab:function(t,e,n){"use strict";n.r(e);var a=n("8abf"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a}}]);