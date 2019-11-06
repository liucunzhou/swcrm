let syncDingdingId = function(token) {
	let user = {};
	try{
		user = uni.getStorageSync('user');
		if (platform != 'notInDingTalk') {
			if(user.dingding == '') { // 未绑定dingdingId的去绑定dingdingID
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
								header: {'content-type': 'application/x-www-form-urlencoded'},
								success: (res) => {
									try {
										uni.setStorageSync('token', res.data.result.token);
										uni.setStorageSync('user', res.data.result.user);
									} catch (e) {
										uni.showModal({
											title: '提示',
											content: "同步钉钉ID失败，\n点击’确认‘，重新登录",
											showCancel: false,
											success: function(res) {
												try {
													uni.clearStorageSync();
													uni.redirectTo({
														url: '/pages/public/login'
													});
												} catch (e) {
													uni.showToast({
														title: "退出异常，请重试"
													})
												}
											}
										});
									}
								},
								fail: (res) => {

								}
							})
						}
					});
				});
			}
		} else {
			let msg = '请在钉钉上使用';
			errDingEvnMsg(msg);
		}
		
	} catch (e) {
		// 获取不到用户信息跳转到登录界面
		uni.redirectTo({
			url: '/pages/public/login'
		});
	}
	
	return user.dingding;
}