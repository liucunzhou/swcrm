(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-customer-createCustomer"],{"06dc":function(A,g,C){"use strict";C.r(g);var I=C("f417"),e=C.n(I);for(var t in I)"default"!==t&&function(A){C.d(g,A,function(){return I[A]})}(t);g["default"]=e.a},"263b":function(A,g,C){"use strict";C.r(g);var I=C("dd2b"),e=C("06dc");for(var t in e)"default"!==t&&function(A){C.d(g,A,function(){return e[A]})}(t);C("a625");var i=C("2877"),a=Object(i["a"])(e["default"],I["a"],I["b"],!1,null,"2d6f7138",null);g["default"]=a.exports},"8ddc":function(A,g,C){var I=C("baf0");"string"===typeof I&&(I=[[A.i,I,""]]),I.locals&&(A.exports=I.locals);var e=C("4f06").default;e("76eba2de",I,!0,{sourceMap:!1,shadowMode:!1})},a625:function(A,g,C){"use strict";var I=C("8ddc"),e=C.n(I);e.a},baf0:function(A,g,C){g=A.exports=C("2350")(!1),g.push([A.i,".pages[data-v-2d6f7138]{width:100%;height:100%;padding:10px 10px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:auto;background:#fff}.msg[data-v-2d6f7138]{width:100%;height:auto;border-radius:5px;padding-bottom:40px;-webkit-box-sizing:border-box;box-sizing:border-box\n\t/* background: #f3f3f3; */}.ordertype[data-v-2d6f7138]{background:#fff;width:100%;height:auto;padding:3px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-bottom:1px solid #f2f2f2;-webkit-box-shadow:1px 1px 1px #f8f8f8;box-shadow:1px 1px 1px #f8f8f8;margin-bottom:10px;padding-left:20px;-webkit-box-sizing:border-box;box-sizing:border-box}.ordertype uni-text[data-v-2d6f7138]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:right;-webkit-justify-content:right;-ms-flex-pack:right;justify-content:right;float:right;display:inline-block;margin-right:10px}.ordertype uni-input[data-v-2d6f7138]{float:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:right;-webkit-justify-content:right;-ms-flex-pack:right;justify-content:right;text-align:right}.ordertype_text[data-v-2d6f7138]{display:inline-block;width:20%;line-height:30px}.ordertype_value[data-v-2d6f7138]{display:inline-block;width:79%;padding:5px 5px;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:right}.ordertype_value uni-input[data-v-2d6f7138]{text-align:right;width:100%;padding-right:10px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#9e9e9e}.ordertype_value uni-text[data-v-2d6f7138]{float:right;color:#9e9e9e}.ordertype_value img[data-v-2d6f7138]{width:15px;height:15px;vertical-align:top;margin-top:5px;text-align:right;float:right}.Submit[data-v-2d6f7138]{position:fixed;width:100%;bottom:0;padding:10px 10px;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.Submit uni-text[data-v-2d6f7138]{padding:3px 3px;border:1px solid #f2f2f2;margin:0 10px;display:inline-block;width:100px;background:#0caaf0;border-radius:20px}.Submit uni-text[data-v-2d6f7138]:first-child{background:#00b6f6;color:#fff}.Submit uni-text[data-v-2d6f7138]:nth-child(2){color:#000;border:1px #f8f8f8 solid;background:#f8f8f8}.uni-input[data-v-2d6f7138]{padding:0 %?24?%}",""])},dd2b:function(A,g,C){"use strict";var I=function(){var A=this,g=A.$createElement,I=A._self._c||g;return I("v-uni-view",{staticClass:"pages"},[I("v-uni-view",{staticClass:"msg"},[I("v-uni-view",{staticClass:"ordertype"},[I("v-uni-view",{staticClass:"ordertype_text"},[A._v("信息类型:")]),I("v-uni-view",{staticClass:"ordertype_value"},[I("v-uni-picker",{attrs:{mode:"selector",range:A.newsTypes},on:{change:function(g){g=A.$handleEvent(g),A.newsTypeFn(g)}}},[I("img",{attrs:{src:C("fd18")}}),I("v-uni-text",[A._v(A._s(A.newsTypeText))])],1)],1)],1),I("v-uni-view",{staticClass:"ordertype"},[I("v-uni-text",{staticClass:"ordertype_text"},[A._v("平台来源:")]),I("v-uni-view",{staticClass:"ordertype_value"},[I("v-uni-picker",{attrs:{"data-key":"source_index",value:A.source_index,range:A.sources,"range-key":"title"},on:{change:function(g){g=A.$handleEvent(g),A.bindSourceChange(g)}}},[I("v-uni-view",{staticClass:"uni-input"},[A._v(A._s(A.sources[A.source_index]["title"]))])],1)],1)],1),I("v-uni-view",{staticClass:"ordertype"},[I("v-uni-view",{staticClass:"ordertype_text"},[A._v("新人名字:")]),I("v-uni-view",{staticClass:"ordertype_value"},[I("v-uni-input",{attrs:{type:"text",value:A.realname,"data-key":"realname",placeholder:"请填写新人姓名"},on:{input:function(g){g=A.$handleEvent(g),A.inputChange(g)}}})],1)],1),I("v-uni-view",{staticClass:"ordertype"},[I("v-uni-view",{staticClass:"ordertype_text"},[A._v("联系电话:")]),I("v-uni-view",{staticClass:"ordertype_value"},[I("v-uni-input",{attrs:{type:"text",value:A.mobile,"data-key":"mobile",placeholder:"联系电话"},on:{input:function(g){g=A.$handleEvent(g),A.inputChange(g)}}})],1)],1),I("v-uni-view",{staticClass:"ordertype"},[I("v-uni-view",{staticClass:"ordertype_text"},[A._v("选择城市:")]),I("v-uni-view",{staticClass:"ordertype_value"},[I("v-uni-picker",{attrs:{"data-key":"city_index",value:A.city_index,range:A.cities,"range-key":"shortname"},on:{change:function(g){g=A.$handleEvent(g),A.bindCityChange(g)}}},[I("v-uni-view",{staticClass:"uni-input"},[A._v(A._s(A.cities[A.city_index]["shortname"]))])],1)],1)],1),I("v-uni-view",{staticClass:"ordertype"},[I("v-uni-view",{staticClass:"ordertype_text"},[A._v("所在区域:")]),I("v-uni-view",{staticClass:"ordertype_value"},[I("v-uni-picker",{attrs:{value:A.area_index,range:A.areas,"range-key":"shortname"},on:{change:function(g){g=A.$handleEvent(g),A.bindAreaChange(g)}}},[I("v-uni-view",{staticClass:"uni-input"},[A._v(A._s(A.areas[A.area_index]["shortname"]))])],1)],1)],1),I("v-uni-view",{staticClass:"ordertype"},[I("v-uni-view",{staticClass:"ordertype_text"},[A._v("所选区域:")]),I("v-uni-view",{staticClass:"ordertype_value"},[I("v-uni-input",{attrs:{type:"text",value:A.zone,"data-key":"zone",placeholder:"选择区域"},on:{input:function(g){g=A.$handleEvent(g),A.inputChange(g)}}})],1)],1),I("v-uni-view",{staticClass:"ordertype"},[I("v-uni-view",{staticClass:"ordertype_text"},[A._v("选择酒店:")]),I("v-uni-view",{staticClass:"ordertype_value"},[I("v-uni-input",{attrs:{type:"text",value:A.hotel_text,"data-key":"hotel_text",placeholder:"填写酒店"},on:{input:function(g){g=A.$handleEvent(g),A.inputChange(g)}}})],1)],1),I("v-uni-view",{staticClass:"ordertype"},[I("v-uni-view",{staticClass:"ordertype_text"},[A._v("桌数:")]),I("v-uni-view",{staticClass:"ordertype_value"},[I("v-uni-input",{attrs:{type:"text",value:A.banquet_size,"data-key":"banquet_size",placeholder:"请填写桌数"},on:{input:function(g){g=A.$handleEvent(g),A.inputChange(g)}}})],1)],1),I("v-uni-view",{staticClass:"ordertype"},[I("v-uni-view",{staticClass:"ordertype_text"},[A._v("预算:")]),I("v-uni-view",{staticClass:"ordertype_value"},[I("v-uni-input",{attrs:{type:"text",value:A.budget,"data-key":"budget",placeholder:"请填写预算"},on:{input:function(g){g=A.$handleEvent(g),A.inputChange(g)}}})],1)],1),I("v-uni-view",{staticClass:"ordertype"},[I("v-uni-view",{staticClass:"ordertype_text"},[A._v("举办日期:")]),I("v-uni-view",{staticClass:"ordertype_value"},[I("v-uni-picker",{attrs:{mode:"date",value:A.wedding_date,start:"2015-09-01",end:"2119-09-01"},on:{change:function(g){g=A.$handleEvent(g),A.bindDateChange(g)}}},[I("v-uni-view",{staticClass:"picker"},[A._v(A._s(A.wedding_date))])],1)],1)],1),I("v-uni-view",{staticClass:"ordertype"},[I("v-uni-view",{staticClass:"ordertype_text"},[A._v("备注:")]),I("v-uni-view",{staticClass:"ordertype_value"},[I("v-uni-input",{attrs:{type:"text",value:A.remark,"data-key":"remark",placeholder:"请填写备注"},on:{input:function(g){g=A.$handleEvent(g),A.inputChange(g)}}})],1)],1)],1),I("v-uni-view",{staticClass:"Submit"},[I("v-uni-text",{on:{click:function(g){g=A.$handleEvent(g),A.submit(g)}}},[A._v("立即提交")]),I("v-uni-text",[A._v("重置")])],1)],1)},e=[];C.d(g,"a",function(){return I}),C.d(g,"b",function(){return e})},f417:function(A,g,C){"use strict";var I=C("288e");Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0,C("28a5"),C("a481");var e=I(C("f97e")),t=e.default.env.platform,i={data:function(){var A=["婚宴信息","婚庆信息","一站式"],g=(new Date).toLocaleDateString();g=g.replace(/\//g,"-");var C=[{title:"无"}],I=[{shortname:"无"}],e=[{shortname:"无"}];return{recommender:"",realname:"",mobile:"",banquet_size:"",budget:"",newsType:0,newsTypeText:"婚宴信息",newsTypes:A,source_text:"",source_index:0,sources:C,wedding_date:g,hotel_text:"",city_index:0,cities:I,area_index:0,areas:e,zone:"",remark:""}},created:function(){},onLoad:function(){this.getBaseData()},onShow:function(){"notInDingTalk"!=t&&e.default.ready(function(){e.default.biz.navigation.hideBar({hidden:!0,onSuccess:function(A){},onFail:function(A){}})})},methods:{getBaseData:function(){var A=this,g=A.$apis.customer.getBaseData,C=this.$getToken(),I={token:C};uni.request({url:g,method:"POST",data:I,dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(g){var C=g.data;"0"==C.code?(A.newsTypes=C.data.news_types,A.sources=C.data.sources,A.cities=C.data.cities,A.city_index=C.data.city_index,A.areas=C.data.areas):uni.showToast({title:C.msg})}})},inputChange:function(A){var g=A.currentTarget.dataset.key;this[g]=A.detail.value},newsTypeFn:function(A){var g=A.detail.value;this.newsType=g,this.newsTypeText=this.newsTypes[g]},bindDateChange:function(A){var g=A.detail.value;this.wedding_date=g},bindSourceChange:function(A){console.log("value is",A.detail.value);var g=A.detail.value;this["source_index"]=g},bindCityChange:function(A){var g=this,C=A.detail.value;g["city_index"]=C;var I=this.cities[C],e=g.$apis.region.getAreaList,t=this.$getToken(),i={token:t,id:I.id};uni.request({url:e,method:"POST",data:i,dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(A){var C=A.data;"0"==C.code?(g.areas=C.data,g.area_index=0):uni.showToast({title:C.msg})}})},bindAreaChange:function(A){var g=A.detail.value;this["area_index"]=g,console.log(this["areas"]);var C=this["areas"][g]["shortname"],I=this["zone"];if(""==I)I=C;else{var e=I.split(",");-1==e.indexOf(C)&&e.push(C),I=e.join()}this["zone"]=I},submit:function(){var A=this,g=A.$apis.customer.createCustomer,C=(A.source_index,A.mobile);if(""==C||isNaN(C))return console.log(C),uni.showToast({title:"请输入正确的手机号",icon:"none"}),!1;var I=A.city_index,e={token:A.$getToken(),news_type:A.newsType,source_id:A.source_id,source_text:A.source_text,realname:A.realname,mobile:A.mobile,city_id:A.cities[I]["id"],zone:A.zone,hotel_text:A.hotel_text,banquet_size:A.banquet_size,budget:A.budget,wedding_date:A.wedding_date,remark:A.remark};uni.request({url:g,method:"POST",data:e,dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(A){var g=A.data;"0"==g.code?uni.navigateTo({url:"mine?page_title=我的客资"}):uni.showToast({title:g.msg})}})}}};g.default=i},fd18:function(A,g){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4JmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTktMDEtMTVUMTg6MjI6NTUrMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOS0wMS0xNVQxODozMTo1MSswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTktMDEtMTVUMTg6MzE6NTErMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MTFlYzhlZWUtNjVkMi0zNTQ2LTg5YmUtMDE3MTk0OTY1OGNiPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjExZWM4ZWVlLTY1ZDItMzU0Ni04OWJlLTAxNzE5NDk2NThjYjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjExZWM4ZWVlLTY1ZDItMzU0Ni04OWJlLTAxNzE5NDk2NThjYjwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDoxMWVjOGVlZS02NWQyLTM1NDYtODliZS0wMTcxOTQ5NjU4Y2I8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTktMDEtMTVUMTg6MjI6NTUrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTI4PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjEyODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8++YH0tAAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAADU0lEQVR42uzdvWoUYRiG4Tt2gmAZRPEnCGLjIUyhiBaChWCpkMJT8AjEWqysIlh5ABbaCC+YRsEDEBQ8ABFMowixyEZEDNmYnZ2Z77mfdmZh2edi/+ab91vZ3t7G5GZFAALwVRCAEYARgBGAEYARgBGAEYARwPDpuu4i8KGqfu5xfNDnV1UC6Kn4W8AD4ALwBXgMPKyq7wJoHEDXdfeAJ/84tAlcq6otAbQN4BtwbI/Db4HLuwgE0BiAruvOAx/2Oe03AgG0B+AosAUcmQfB7FwBNPYR8BS4O8epgyMQQD8ATgDvgdWxIxBAfwjWZt/6R41AAOEIBBCOQADhCAQQjkAA4QgEEI5AAOEIBBCOQADhCAQwDgQFnBwCgQCGBwBwBngzBAIBjAPAYAgEMB4AgyAQwLgALB2BAMYHYKkIBDBOAEtDIIDxAlgKAgGMG0DvCAQwfgC9IhDANAD0hkAA0wHQCwIBTAvAwhEIYHoAFopAANMEsDAEApgugIUgEMC0ARwagQCmD+BQCATQBoD/RiCAdgDsIijg9LwI/hxXI4DpA2D2DrCZgkAA4QgEEI5AAOEIBBCOQADhCAQQjkAA4QgEEI5AAOEIBBCOQADhCASwXAQvq+q6ABoCUFV0XXcQBDeq6oUAGgIwex7zItioqnUBtAdgdQZgbZ+HPKuqOwJo7yOg5igfYL2qNgSQ+SXwNXClqrYF4M9AAUwcgH8EBQPwr+BgAF4MCgbg5eBgAC4ICQbgkrBgAC4KDQbgsvBgAN4YEgzAW8OCAXhzaDCAqPIFcMjycUBEMwAOPBgCR8Q0A8AhUcEAHBPnoEgHRSYCcFRsMACHRQcDcFx8MAA3jAgG4JYxwQDcNCoYgNvGBQNw48hgAG4dGwzAzaODAbh9fDCANXYu6S6tfAGMB8AaO4s5VpdZvgDGAWCw8gUQXr4AwssXQHj5AggvXwDh5QsgvHwBhJcvgPDyBRBevgDCyxdAf+WfAt6NvXwB9AfgFXB17OULoJ/yjwNfp1C+APoBcA74OE/5VbU1lv0CBLBYBJ+As/uVPztXAA0CuA083698AbT9M/AmcB+4BHwGNoBHVfXjr/ME0CIAIwAjACMAIwAjACMAIwAjACMAIwAjALOQ/BoAyS4YPZJjKYoAAAAASUVORK5CYII="}}]);