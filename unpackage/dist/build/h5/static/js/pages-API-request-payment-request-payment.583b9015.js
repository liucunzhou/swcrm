(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-request-payment-request-payment"],{"1ae2":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:n.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticStyle:{background:"#FFF",padding:"50upx 0"}},[e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[n._v("支付金额")]),e("v-uni-view",{staticClass:"uni-h1 uni-center uni-common-mt"},[e("v-uni-text",{staticClass:"rmbLogo"},[n._v("￥")]),e("v-uni-input",{staticClass:"price",attrs:{type:"digit",value:n.price,maxlength:"4"},on:{input:function(t){t=n.$handleEvent(t),n.priceChange(t)}}})],1)],1),e("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"})],1)],1)},o=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o})},"2f6d":function(n,t,e){"use strict";var i=e("a139"),o=e.n(i);o.a},"5b09":function(n,t,e){"use strict";e.r(t);var i=e("5d1c"),o=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);t["default"]=o.a},"5d1c":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(e("a34a"));function o(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,i,o,a,s){try{var c=n[a](s),r=c.value}catch(u){return void e(u)}c.done?t(r):Promise.resolve(r).then(i,o)}function s(n){return function(){var t=this,e=arguments;return new Promise(function(i,o){var s=n.apply(t,e);function c(n){a(s,i,o,c,r,"next",n)}function r(n){a(s,i,o,c,r,"throw",n)}c(void 0)})}}var c={data:function(){return{title:"request-payment",loading:!1,price:1,providerList:[]}},onLoad:function(){},methods:{weixinPay:function(){var n=this;console.log("发起支付"),this.loading=!0,uni.login({success:function(t){console.log("login success",t),uni.request({url:"https://unidemo.dcloud.net.cn/payment/wx/mp?code=".concat(t.code,"&amount=").concat(n.price),success:function(t){if(console.log("pay request success",t),200===t.statusCode)if(0===t.data.ret){console.log("得到接口prepay_id",t.data.payment);var e=t.data.payment;uni.requestPayment({timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:"MD5",paySign:e.paySign,success:function(n){uni.showToast({title:"感谢您的赞助!"})},fail:function(n){uni.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){n.loading=!1}})}else uni.showModal({content:t.data.desc,showCancel:!1});else uni.showModal({content:"支付失败，请重试！",showCancel:!1})},fail:function(t){console.log("fail",t),n.loading=!1,uni.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})}})},fail:function(t){console.log("fail",t),n.loading=!1,uni.showModal({content:"支付失败,原因为: "+t.errMsg,showCancel:!1})}})},requestPayment:function(){var n=s(i.default.mark(function n(t,e){var o,a=this;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return this.providerList[e].loading=!0,n.next=3,this.getOrderInfo(t.id);case 3:if(o=n.sent,console.log("得到订单信息",o),200===o.statusCode){n.next=9;break}return console.log("获得订单信息失败",o),uni.showModal({content:"获得订单信息失败",showCancel:!1}),n.abrupt("return");case 9:uni.requestPayment({provider:t.id,orderInfo:o.data,success:function(n){console.log("success",n),uni.showToast({title:"感谢您的赞助!"})},fail:function(n){console.log("fail",n),uni.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){a.providerList[e].loading=!1}});case 10:case"end":return n.stop()}},n,this)}));function t(t,e){return n.apply(this,arguments)}return t}(),getOrderInfo:function(n){var t="",e="https://demo.dcloud.net.cn/payment/?payid="+n+"&appid="+t+"&total="+this.price;return new Promise(function(n){uni.request({url:e,success:function(t){n(t)},fail:function(t){n(t)}})})},priceChange:function(n){console.log(n.detail.value),this.price=n.detail.value}}};t.default=c},a139:function(n,t,e){var i=e("f9db");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=e("4f06").default;o("7b621204",i,!0,{sourceMap:!1,shadowMode:!1})},b27d:function(n,t,e){"use strict";e.r(t);var i=e("1ae2"),o=e("5b09");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);e("2f6d");var s=e("2877"),c=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"45209a1d",null);t["default"]=c.exports},f9db:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,".rmbLogo[data-v-45209a1d]{font-size:%?40?%}uni-button[data-v-45209a1d]{background-color:#007aff;color:#fff}.uni-h1.uni-center[data-v-45209a1d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.price[data-v-45209a1d]{border-bottom:1px solid #eee;width:%?200?%;height:%?80?%;padding-bottom:%?4?%}.ipaPayBtn[data-v-45209a1d]{margin-top:%?30?%}",""])}}]);