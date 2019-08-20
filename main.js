import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import store from './store'
import dingtalk from './dingtalk.open.js'
import hosts from './hosts.js'

let platform = dingtalk.env.platform;
if(platform != 'notInDingTalk') {
	dingtalk.ready(function() {
		dingtalk.biz.navigation.hideBar({
		    hidden: true,
		    onSuccess : function(result) {
		    },
		    onFail : function(err) {}
		})
	});
}

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}
Vue.prototype.$getToken = function() {
	let token = '';
	try {
		token = uni.getStorageSync('token');
		if (token) {

		} else {
			uni.navigateTo({
				url:'/pages/public/login'
			});
		}
	} catch (e) {
		// error
	}
	
	return token;
}
Vue.prototype.$apis = hosts;

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
