(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-count-down-count-down"],{"049a":function(t,e,o){"use strict";o.r(e);var n=o("ab64"),i=o("92a3");for(var r in i)"default"!==r&&function(t){o.d(e,t,function(){return i[t]})}(r);o("5ef8");var a=o("2877"),u=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,"1dbcda24",null);e["default"]=u.exports},"29fa":function(t,e,o){var n=o("c7e8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("ece14cde",n,!0,{sourceMap:!1,shadowMode:!1})},"38d2":function(t,e,o){"use strict";o.r(e);var n=o("b6b0"),i=o("cde6");for(var r in i)"default"!==r&&function(t){o.d(e,t,function(){return i[t]})}(r);o("ed37");var a=o("2877"),u=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,"5b187f10",null);e["default"]=u.exports},"5ef8":function(t,e,o){"use strict";var n=o("f305"),i=o.n(n);i.a},8714:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("38d2"));function i(t){return t&&t.__esModule?t:{default:t}}var r={components:{uniCountdown:n.default},data:function(){return{}},methods:{timeup:function(){uni.showToast({title:"时间到"})}}};e.default=r},"92a3":function(t,e,o){"use strict";o.r(e);var n=o("8714"),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},a02b:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniCountdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#FFFFFF"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#000000"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},created:function(t){var e=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.countDown(),this.timer=setInterval(function(){e.seconds--,e.seconds<0?e.timeUp():e.countDown()},1e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,e,o,n){return 60*t*60*24+60*e*60+60*o+n},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,e=0,o=0,n=0,i=0;t>0?(e=Math.floor(t/86400),o=Math.floor(t/3600)-24*e,n=Math.floor(t/60)-24*e*60-60*o,i=Math.floor(t)-24*e*60*60-60*o*60-60*n):this.timeUp(),e<10&&(e="0"+e),o<10&&(o="0"+o),n<10&&(n="0"+n),i<10&&(i="0"+i),this.d=e,this.h=o,this.i=n,this.s=i}}};e.default=n},ab64:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",{staticClass:"example"},[o("v-uni-view",{staticClass:"example-title"},[t._v("一般用法")]),o("uni-countdown",{attrs:{day:1,hour:1,minute:12,second:40}}),o("v-uni-view",{staticClass:"example-title"},[t._v("不显示天数")]),o("uni-countdown",{attrs:{"show-day":!1,hour:12,minute:12,second:12}}),o("v-uni-view",{staticClass:"example-title"},[t._v("文字分隔符")]),o("uni-countdown",{attrs:{minute:30,second:0,"show-colon":!1}}),o("v-uni-view",{staticClass:"example-title"},[t._v("修改颜色")]),o("uni-countdown",{attrs:{day:1,hour:2,minute:30,second:0,color:"#FFFFFF","background-color":"#00B26A","border-color":"#00B26A"}}),o("v-uni-view",{staticClass:"example-title"},[t._v("倒计时回调事件")]),o("uni-countdown",{attrs:{"show-day":!1,second:10},on:{timeup:function(e){e=t.$handleEvent(e),t.timeup(e)}}})],1)],1)},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},ac8d:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,"uni-page-body[data-v-1dbcda24]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff}uni-view[data-v-1dbcda24]{font-size:%?28?%;line-height:inherit}.example[data-v-1dbcda24]{padding:0 %?30?% %?30?%}.example-title[data-v-1dbcda24]{font-size:%?32?%;line-height:%?32?%;color:#777;margin:%?40?% %?25?%;position:relative}.example .example-title[data-v-1dbcda24]{margin:%?40?% 0}.example-body[data-v-1dbcda24]{padding:0 %?40?%}.title[data-v-1dbcda24]{margin:%?80?% 0 %?20?% 0}body.?%PAGE?%[data-v-1dbcda24]{background-color:#fff}",""])},b6b0:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"uni-countdown"},[t.showDay?o("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.d))]):t._e(),t.showDay?o("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("天")]):t._e(),o("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.h))]),o("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"时"))]),o("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.i))]),o("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v(t._s(t.showColon?":":"分"))]),o("v-uni-view",{staticClass:"uni-countdown__number",style:{borderColor:t.borderColor,color:t.color,background:t.backgroundColor}},[t._v(t._s(t.s))]),t.showColon?t._e():o("v-uni-view",{staticClass:"uni-countdown__splitor",style:{color:t.splitorColor}},[t._v("秒")])],1)},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},c7e8:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".uni-countdown[data-v-5b187f10]{padding:%?2?% 0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-countdown__splitor[data-v-5b187f10]{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;line-height:%?44?%;padding:0 %?5?%;font-size:%?28?%}.uni-countdown__number[data-v-5b187f10]{line-height:%?44?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?44?%;border-radius:%?6?%;margin:0 %?5?%;font-size:%?28?%;border:1px solid #000;font-size:%?24?%;padding:0 %?10?%}",""])},cde6:function(t,e,o){"use strict";o.r(e);var n=o("a02b"),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},ed37:function(t,e,o){"use strict";var n=o("29fa"),i=o.n(n);i.a},f305:function(t,e,o){var n=o("ac8d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("53dfd67c",n,!0,{sourceMap:!1,shadowMode:!1})}}]);