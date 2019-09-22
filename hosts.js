const host = 'http://crm.hongsizg.com';

const apis = {
	passport: {
		login: `${host}/api/passport/dologin`,
	},
	user: {
		repassword: `${host}/api/user/repassword`,
		editUser: `${host}/api/user/editUser`,
		bindUUid: `${host}/api/user/bindUUid`
	},
	customer: {
		sea: `${host}/api/customer/sea`,
		mine: `${host}/api/customer/mine`,
		today: `${host}/api/customer/today`,
		apply: `${host}/api/customer/apply`,
		doApply: `${host}/api/customer/doApply`,
		searchAllocate: `${host}/api/customer/searchAllocate`,
		getBaseData: `${host}/api/customer/getBaseData`,
		createCustomer: `${host}/api/customer/createCustomer`,
		editCustomer: `${host}/api/customer/editCustomer`,
		getCustomer: `${host}/api/customer/getCustomer`
	},
	visit: {
		doVisitCustomer: `${host}/api/visit/doVisitCustomer`,
		visitCustomer: `${host}/api/visit/visitCustomer`,
		logs:`${host}/api/visit/logs`
	},
	order: {
		createOrder: `${host}/api/order/createOrder`,
		getOrder: `${host}/api/order/getOrder`,
		entire: `${host}/api/order/entire`,
		wedding: `${host}/api/order/wedding`,
		banquet: `${host}/api/order/banquet`
	},
	region: {
		getAreaList: `${host}/api/region/getAreaList`
	},
	dingding: {
		getUserInfo: `${host}/api/dingtalk/getUserInfo`,
		getDingSign: `${host}/api/dingtalk/getDingSign`
	}
};

export default apis;