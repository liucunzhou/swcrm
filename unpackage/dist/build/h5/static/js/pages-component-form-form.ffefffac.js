(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-form-form"],{8814:function(t,i,n){"use strict";n.r(i);var e=n("d0d8"),u=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(i,t,function(){return e[t]})}(a);i["default"]=u.a},a105:function(t,i,n){var e=n("c635");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var u=n("4f06").default;u("32a8cbc7",e,!0,{sourceMap:!1,shadowMode:!1})},a53a:function(t,i,n){"use strict";n.r(i);var e=n("c076"),u=n("8814");for(var a in u)"default"!==a&&function(t){n.d(i,t,function(){return u[t]})}(a);n("b5ad");var s=n("2877"),o=Object(s["a"])(u["default"],e["a"],e["b"],!1,null,"7bebcaf4",null);i["default"]=o.exports},b5ad:function(t,i,n){"use strict";var e=n("a105"),u=n.n(e);u.a},c076:function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-form",{on:{submit:function(i){i=t.$handleEvent(i),t.formSubmit(i)},reset:function(i){i=t.$handleEvent(i),t.formReset(i)}}},[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("switch")]),n("v-uni-view",[n("v-uni-switch",{attrs:{name:"switch"}})],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("radio")]),n("v-uni-radio-group",{attrs:{name:"radio"}},[n("v-uni-label",[n("v-uni-radio",{attrs:{value:"radio1"}}),t._v("选项一")],1),n("v-uni-label",[n("v-uni-radio",{attrs:{value:"radio2"}}),t._v("选项二")],1)],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("checkbox")]),n("v-uni-checkbox-group",{attrs:{name:"checkbox"}},[n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"checkbox1"}}),t._v("选项一")],1),n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"checkbox2"}}),t._v("选项二")],1)],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("slider")]),n("v-uni-slider",{attrs:{value:"50",name:"slider","show-value":""}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{name:"input",placeholder:"这是一个输入框"}})],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{formType:"submit"}},[t._v("Submit")]),n("v-uni-button",{attrs:{type:"default",formType:"reset"}},[t._v("Reset")])],1)],1)],1)],1)},u=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return u})},c635:function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".uni-form-item .title[data-v-7bebcaf4]{padding:%?20?% 0}",""])},d0d8:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"form",pickerHidden:!0,chosen:""}},methods:{pickerConfirm:function(t){this.pickerHidden=!0,this.chosen=t.target.value},pickerCancel:function(t){this.pickerHidden=!0},pickerShow:function(t){this.pickerHidden=!1},formSubmit:function(t){console.log("form发生了submit事件，携带数据为："+JSON.stringify(t.detail.value))},formReset:function(t){console.log("清空数据"),this.chosen=""}}};i.default=e}}]);