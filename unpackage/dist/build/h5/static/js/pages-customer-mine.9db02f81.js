(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-customer-mine"],{3873:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"pages"},[a("v-uni-view",{staticClass:"header_box"},[a("v-uni-view",{staticClass:"header_back",on:{click:function(t){t=e.$handleEvent(t),e.goBack()}}},[a("img",{attrs:{src:i("fd18")},on:{click:function(t){t=e.$handleEvent(t),e.goBack()}}})]),a("v-uni-view",{staticClass:"header_all",on:{click:function(t){t=e.$handleEvent(t),e.showPageNavFn(t)}}},[a("v-uni-text",[e._v(e._s(e.pageNav[e.pageNavIndex])),e.isShowPageNav?a("img",{staticClass:"header_allimg",attrs:{src:i("fd18")}}):a("img",{staticClass:"header_allimgs",attrs:{src:i("fd18")}})])],1),a("v-uni-view",{staticClass:"header_search",on:{click:function(t){t=e.$handleEvent(t),e.isShowSearchCompontent=!e.isShowSearchCompontent}}},[e._v("筛选")])],1),a("v-uni-view",{staticClass:"page-search"},[e.isShowPageNav?a("v-uni-view",{staticClass:"allcusList",on:{click:function(t){t=e.$handleEvent(t),e.closePageNavFn(t)}}},[a("v-uni-view",{staticClass:"allcusList_box"},e._l(e.pageNav,function(t,i){return a("v-uni-view",{key:i,class:["allcusList_main",e.pageNavIndex==i?"activeallcusList_main":""],on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.PageNavFn(i)}}},[a("v-uni-text",[e._v(e._s(t))]),e.pageNavIndex==i?a("v-uni-text",[e._v("✓")]):e._e()],1)}),1)],1):e._e(),a("v-uni-view",{staticClass:"topmuie"},[a("v-uni-view",{staticClass:"seek"},[a("v-uni-input",{attrs:{type:"text","placeholder-style":"font-size:13px",value:e.keywords,"data-key":"keywords",placeholder:"请输入手机号进行查询"},on:{input:function(t){t=e.$handleEvent(t),e.inputChange(t)}}}),a("img",{attrs:{src:i("a834")},on:{click:function(t){t=e.$handleEvent(t),e.search(t)}}})],1)],1),e.isShowSearchCompontent?a("v-uni-view",{staticClass:"topmuieFixed"},[a("v-uni-view",{staticClass:"topmuieFixed_main"},[a("v-uni-view",{staticClass:"topmuieFixed_box"},[a("v-uni-view",{staticClass:"searchNavBar"},e._l(e.searchBar,function(t,i){return a("v-uni-text",{key:i,class:e.searchNavIndex===i?"searchNavSelected":"",on:{click:function(t){t=e.$handleEvent(t),e.searchNav(i)}}},[e._v(e._s(t.title))])}),1),a("v-uni-view",{staticClass:"topmuieFixed_right"},e._l(e.searchBar[e.searchNavIndex]["items"],function(t,i){return a("v-uni-text",{key:i,class:e.searchBar[e.searchNavIndex]["index"]===i?"searchItemSelected":"",on:{click:function(t){t=e.$handleEvent(t),e.searchNavItem(i)}}},[e._v(e._s(t.title?t.title:t.realname))])}),1)],1),e.isShowDateRange?a("v-uni-view",{staticClass:"clocedtime"},[a("v-uni-picker",{attrs:{mode:"date",value:e.startDate},on:{change:function(t){t=e.$handleEvent(t),e.startDateChange(t)}}},[a("v-uni-view",{staticClass:"uni-input"},[a("v-uni-text",[e._v("开始时间:"+e._s(e.startDate))])],1)],1),a("v-uni-picker",{attrs:{mode:"date",value:e.endDate},on:{change:function(t){t=e.$handleEvent(t),e.endDateChange(t)}}},[a("v-uni-view",{staticClass:"uni-input"},[a("v-uni-text",[e._v("结束时间:"+e._s(e.endDate))])],1)],1)],1):e._e(),e._v("--\x3e"),a("v-uni-view",{staticClass:"topmuieFixed_setting"},[a("v-uni-text",{on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.emptyFn(t)}}},[e._v("清空")]),a("v-uni-text",{on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.makeSure(t)}}},[e._v("确定")])],1)],1)],1):e._e()],1),e._l(e.customers,function(t,i){return a("v-uni-view",{key:t.id,staticClass:"msg"},[a("v-uni-text",{staticClass:"msgtopright"},[e._v(e._s(i+1))]),a("v-uni-view",{staticClass:"statuTag"},[e._v(e._s(t.active_status))]),a("v-uni-view",{on:{click:function(i){i=e.$handleEvent(i),e.navToCustomer(t.member_id)}}},[a("v-uni-view",{staticClass:"msg_header"},[a("v-uni-view",{staticClass:"header_left"},[a("v-uni-text",{staticClass:"names"},[e._v("姓名：")]),a("v-uni-text",{staticClass:"namemain"},[e._v(e._s(t.realname))])],1)],1),a("v-uni-view",{staticClass:"msg_text"},[a("v-uni-text",{staticClass:"names"},[e._v("预算：")]),a("v-uni-text",{staticClass:"namemain"},[e._v(e._s(t.budget))])],1),a("v-uni-view",{staticClass:"msg_text"},[a("v-uni-text",{staticClass:"names"},[e._v("桌数：")]),a("v-uni-text",{staticClass:"namemain"},[e._v(e._s(t.banquet_size))])],1),a("v-uni-view",{staticClass:"msg_text"},[a("v-uni-text",{staticClass:"names"},[e._v("酒店：")]),a("v-uni-text",{staticClass:"namemain"},[e._v(e._s(t.hotel_text))])],1),a("v-uni-view",{staticClass:"msg_text"},[a("v-uni-text",{staticClass:"names"},[e._v("区域：")]),a("v-uni-text",{staticClass:"namemain"},[e._v(e._s(t.zone))])],1)],1)],1)}),a("uni-load-more",{attrs:{status:e.dstatu}})],2)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},4013:function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a"),i("4917");var n=a(i("5176")),s=a(i("8c66")),o=a(i("f97e")),r=o.default.env.platform,l={components:{uniLoadMore:s.default},data:function(){var e=["全部客户","我的客户","我的下属客户"],t=[{title:"跟进状态",field:"status",index:0,match:"statuses",items:[]},{title:"客户来源",field:"source",index:0,match:"sources",items:[]},{title:"员工列表",field:"staff",index:0,match:"staffes",items:[]},{title:"获取时间",field:"create_time",index:0,items:[{id:"",title:"不限"},{id:"today",title:"今天"},{id:"date_range",title:"自定义"}]}];return{page_title:"我的客资",params:{},page:0,dstatu:"more",isShowSearchCompontent:!1,searchObj:{},searchBar:t,searchNavIndex:0,searchSelectedItemIndex:0,keywords:"",customers:[],pageNav:e,pageNavIndex:0,isShowPageNav:!1,isShowDateRange:!1,startDate:"",endDate:"",token:null}},onLoad:function(e){this.token=this.$getToken(),this.params=e,void 0!=e.page_title&&(this.page_title=e.page_title,uni.setNavigationBarTitle({title:e.page_title})),this.getCustomerList()},created:function(){this.getBaseData()},onShow:function(){"notInDingTalk"!=r&&o.default.ready(function(){o.default.biz.navigation.hideBar({hidden:!0,onSuccess:function(e){},onFail:function(e){}})})},onReachBottom:function(){this.getCustomerList(this)},methods:{getCustomerList:function(e){this.dstatu="loading";var t=this,i=t.$apis.customer.mine;console.log(this.token);var a={};a["page"]=t.page,this.keywords?(a={},a["keywords"]=this.keywords):a=(0,n.default)(t.params,a,t.searchObj),a["token"]=t.token,uni.request({url:i,method:"POST",data:a,dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var i=e.data;"0"==i.code?(i.data.length>0?(t.customers=t.customers.concat(i.data),t.dstatu="more"):t.dstatu="noMore",t.customers.length>=i.count&&(t.dstatu="noMore")):uni.showToast({title:i.msg}),t.page=t.page+1}})},navToCustomer:function(e){uni.navigateTo({url:"../visit/details?member_id=".concat(e)})},getBaseData:function(){var e=this,t=e.$apis.customer.getBaseData,i=this.$getToken(),a={token:i};uni.request({url:t,method:"POST",data:a,dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var i=t.data;if("0"==i.code)for(var a in console.log(e.searchBar),e.searchBar){var n=e.searchBar[a];if(void 0!=n["match"]){var s=n["match"];e.searchBar[a]["items"]=i.data[s]}}else uni.showToast({title:i.msg})}})},goBack:function(){uni.navigateBack({delta:0})},PageNavFn:function(e){this.pageNavIndex=e},showPageNavFn:function(){this.isShowPageNav=!this.isShowPageNav},closePageNavFn:function(){this.isShowPageNav=!this.isShowPageNav},searchNav:function(e){this.searchNavIndex=e},searchNavItem:function(e){var t=this.searchNavIndex;console.log("searchNavIndex is:",t),this.searchBar[t]["index"]=e,"date_range"==this.searchBar[t]["items"][e]["id"]?this.isShowDateRange=!0:this.isShowDateRange=!1},startDateChange:function(e){this.startDate=e.detail.value},endDateChange:function(e){this.endDate=e.detail.value},emptyFn:function(){var e=this;this.searchBar.forEach(function(t,i){console.log(this),e.searchBar[i]["index"]=0}),e.isShowDateRange=!1},makeSure:function(){var e=this,t={};this.searchBar.forEach(function(i,a){if("create_time"==i.field){var n=i.field,s=i.index,o=i.items[s]["id"];"date_range"==o&&(o=e.startDate+"~"+e.endDate),t[n]=o}else{var r=i.field,l=i.index,d=i.items[l]["id"];t[r]=d}}),this.page=0,this.customers=[],this.searchObj=t,this.isShowSearchCompontent=0,this.getCustomerList()},inputChange:function(e){var t=e.currentTarget.dataset.key;this[t]=e.detail.value},search:function(){this.page=1,this.customers=[];var e=this,t=(e.$apis.customer.mine,{});if(t["token"]=this.$getToken(),""==this.keywords)return uni.showToast({title:"请填写要搜索的手机号"}),!1;this.getCustomerList()}}};t.default=l},"4cb3":function(e,t,i){"use strict";i.r(t);var a=i("4013"),n=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},"6b0c":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".pages[data-v-5930372e]{width:100%;\n\t/* height: 100%; */padding:90px 12px 30px 12px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:auto;position:relative;background:#0caaf0}.header_box[data-v-5930372e]{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;left:0;top:0;width:100%;height:42px;padding:10px 0 0 0;z-index:10;background:#fff;color:#00000;-webkit-box-sizing:border-box;box-sizing:border-box}.header_back[data-v-5930372e]{-webkit-box-flex:0;-webkit-flex:0 %?38?%;-ms-flex:0 %?38?%;flex:0 %?38?%;padding-left:%?16?%}.header_back img[data-v-5930372e]{width:100%;height:auto;vertical-align:middle;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.header_all[data-v-5930372e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:30px;text-align:center}.header_allimg[data-v-5930372e]{margin-left:10px;width:15px;height:auto;-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);vertical-align:middle}.header_allimgs[data-v-5930372e]{margin-left:10px;width:15px;height:auto;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);vertical-align:middle}.header_search[data-v-5930372e]{-webkit-box-flex:0;-webkit-flex:0 2rem;-ms-flex:0 2rem;flex:0 2rem;padding:0 %?16?%}.allcusList[data-v-5930372e]{width:100%;height:100vh;background:rgba(0,0,0,.2);position:fixed;top:40px;left:0;z-index:10}.allcusList_box[data-v-5930372e]{width:100%;height:auto;background:#fff}.allcusList_main[data-v-5930372e]{padding:0 30px;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:auto;line-height:35px;border-bottom:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.allcusList_main[data-v-5930372e]:last-child{border:none}.activeallcusList_main[data-v-5930372e]{color:#0caaf0}.topmuie[data-v-5930372e]{background:#fff;width:100%;height:80px;padding-top:40px;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;left:0;border-bottom:1px solid #f4f4f4;z-index:4}\n\n/* 筛选弹框 */.topmuieFixed[data-v-5930372e]{width:100%;height:100vh;background:rgba(0,0,0,.3);position:fixed;top:80px;left:0;z-index:4}.topmuieFixed_main[data-v-5930372e]{width:100%;height:100%;background:#fff}.topmuieFixed_box[data-v-5930372e]{width:100%;height:100%;clear:both;overflow:hidden}.searchNavBar[data-v-5930372e]{width:50%;height:100%;overflow:scroll;float:left;background:#f8f8f8;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:left;-webkit-align-items:left;-ms-flex-align:left;align-items:left;-webkit-box-sizing:border-box;box-sizing:border-box}.searchNavBar uni-text[data-v-5930372e]{line-height:40px;padding-left:10px}.searchNavSelected[data-v-5930372e]{line-height:30px;background:#fff;color:#0caaf0}.topmuieFixed_right[data-v-5930372e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;float:right;width:50%;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:left;-webkit-align-items:left;-ms-flex-align:left;align-items:left;overflow:scroll;-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:12px}.topmuieFixed_right uni-text[data-v-5930372e]{line-height:30px;font-size:15px}.searchItemSelected[data-v-5930372e]{color:#0caaf0}.clocedtime[data-v-5930372e]{width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.topmuieFixed_setting[data-v-5930372e]{position:fixed;bottom:0;width:100%;height:40px;background:#fff;border-top:1px #f2f2ff2 solid;font-size:16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;line-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box}.topmuieFixed_setting uni-text[data-v-5930372e]{width:50%;display:inline-block;text-align:center}.topmuieFixed_setting uni-text[data-v-5930372e]:first-child{border-right:1px solid #f2f2f2}.topmuieFixed_setting uni-text[data-v-5930372e]:nth-child(2){border-right:1px solid #f2f2f2}.screen[data-v-5930372e]{width:50%;height:40px;display:inline-block;text-align:center;line-height:45px;text-align:center;float:left}.screen_allimg[data-v-5930372e]{margin-left:10px;width:15px;height:auto;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);vertical-align:middle}.screen_allimgs[data-v-5930372e]{margin-left:10px;width:15px;height:auto;-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);vertical-align:middle}.seek[data-v-5930372e]{float:right;text-align:center;width:100%;height:40px;line-height:45px;text-align:center;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;border-top:3px solid #0caaf0}.seek img[data-v-5930372e]{padding-right:12px;width:38px;height:38px;display:inline-block;vertical-align:top;text-align:right;float:right}.seek uni-input[data-v-5930372e]{height:40px;width:80%;float:left;text-align:left;padding-left:12px}.msg[data-v-5930372e]{width:100%;height:auto;border-radius:5px;background:#fff;padding:0 20px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:1px 1px 10px #f4f4f4;box-shadow:1px 1px 10px #f4f4f4;position:relative;margin:10px 0}.msgtopright[data-v-5930372e]{position:absolute;top:5px;right:5px;display:inline-block;width:15px;height:15px;text-align:center;line-height:15px;font-size:10px;color:#fff;background:#0caaf0;border-radius:50%}.msg_header[data-v-5930372e]{width:100%;padding:15px 0;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:solid #f2f2f2 1px;margin-bottom:5px}.msg_text[data-v-5930372e]{width:100%;padding:8px 0}.names[data-v-5930372e]{color:#1e1e1e;letter-spacing:4px;margin-right:10px}.namemain[data-v-5930372e]{color:#989898;letter-spacing:3px}.clocedtime[data-v-5930372e]{position:fixed;bottom:40px;width:100%;background:#fff;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.statuTag[data-v-5930372e]{position:absolute;right:%?70?%;top:%?10?%;padding:%?1?% %?8?%;font-size:%?18?%;list-style:%?18?%;border-radius:%?10?%;color:#fff;background:#14aaf0}",""])},"71f2":function(e,t,i){"use strict";i.r(t);var a=i("3873"),n=i("4cb3");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("caa7");var o=i("2877"),r=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"5930372e",null);t["default"]=r.exports},"97bc":function(e,t,i){var a=i("6b0c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("710d5ea8",a,!0,{sourceMap:!1,shadowMode:!1})},caa7:function(e,t,i){"use strict";var a=i("97bc"),n=i.n(a);n.a}}]);