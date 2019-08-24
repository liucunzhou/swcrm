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
// Vue.component('page-search', pageSearch)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
