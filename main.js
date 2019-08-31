import Vue from 'vue'
import App from './App'

// import pageSearch from './components/page-search'
import store from './store'
import hosts from './hosts.js'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

console.log('This is main');

Vue.prototype.$apis = hosts;
// Vue.component('page-search', pageSearch)
Date.prototype.format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S": this.getMilliseconds()
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[
			k]).substr(("" + o[k]).length)));
	return fmt;
}

import dingtalk from '@/dingtalk.open.js'
let platform = dingtalk.env.platform;
let getUserId = function(token) {
	let userid = '';
	try {
		userid = uni.getStorageSync('userid');
		if (userid) {

		} else {
			if (platform != 'notInDingTalk') {
				dingtalk.ready(function() {			
					dingtalk.runtime.permission.requestAuthCode({
						corpId: 'ding7f6f146b7c5505bc35c2f4657eb6378f',
						onSuccess: function(info) {
						
							let url = hosts.dingding.getUserInfo;
							let params = {
								token: token,
								code: info.code
							};
							
							uni.request({
								url: url,
								method: 'POST',
								data: params,
								dataType: 'json',
								header: {
									'content-type': 'application/x-www-form-urlencoded',
								},
								success: (res) => {		
									uni.showToast({
										title: res.result.user.dingding
									})
									try {
									    uni.setStorageSync('token', res.result.token);
										uni.setStorageSync('user', res.result.user);
										uni.setStorageSync('userid', res.result.user.dingding);
									} catch (e) {
									    uni.showToast({
									    	title:'绑定钉钉失败'
									    })
									}
								},
								fail: (res) => {
									uni.showModal({
										title: '错误页面',
										content: res.errMsg,
										showCancel: false,
										cancelText: '',
										confirmText: '',
										success: res => {},
										fail: () => {},
										complete: () => {}
									});
								}
							})
						}
					});
				});
			}
		}
	} catch (e) {}

	return userid;
}

Vue.prototype.$getToken = function() {
	let token = '';
	try {
		token = uni.getStorageSync('token');
		if (token) {
			getUserId(token);
		} else {
			uni.navigateTo({
				url: '/pages/public/login'
			});
		}
	} catch (e) {}

	return token;
}


App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
