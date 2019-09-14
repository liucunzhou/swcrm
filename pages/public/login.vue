<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="welcome">欢迎回来！</view>
			<view class="input-content">
				<view class="input-item">
					<input 
						type="text"
						autocomplete="off"
						placeholder="请输入手机号码"
						placeholder-class="input-empty"
						maxlength="11"
						:value="nickname" 
						data-key="nickname" 
						@input="inputChange"
					/>
				</view>
				<view class="input-item">
					<input
						type="password"
						autocomplete="off"
						placeholder="请输入密码"
						placeholder-class="input-empty"
						maxlength="20"
						password
						value=""
						data-key="password"
						@input="inputChange"
						@confirm="toLogin"
					/>
				</view>
			</view>

			<view class="forget-section">
				<text><!--忘记密码?--></text>
			</view>
		</view>
		<button class="confirm-btn" @click="toLogin" :disabled="logining">登录</button>
	</view>
</template>

<script>
import dingtalk from '@/dingtalk.open.js';
let platform = dingtalk.env.platform;

export default {
	data() {
		return {
			nickname: '',
			password: '',
			logining: false
		};
	},
	onLoad() {},
	onShow() {
		if (platform != 'notInDingTalk') {
			dingtalk.ready(function() {
				dingtalk.biz.navigation.hideBar({
					hidden: true,
					onSuccess: function(result) {},
					onFail: function(err) {}
				});
			});
		}
	},
	methods: {
		inputChange(e) {
			const key = e.currentTarget.dataset.key;
			this[key] = e.detail.value;
		},
		async toLogin() {
			this.logining = false;
			const { nickname, password } = this;
			const sendData = {
				nickname,
				password
			};

			let url = this.$apis.passport.login;
			uni.request({
				url: url,
				method: 'POST',
				data: sendData,
				dataType: 'json',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					let result = res.data;
					if (result.code == '200') {
						try {
							uni.setStorageSync('token', result.result.token);
							uni.setStorageSync('user', result.result.user);
							uni.redirectTo({
								url: '/pages/home/index'
							});
						} catch (e) {
							uni.showToast({
								title: '登陆失败'
							});
						}
					} else {
						uni.showToast({
							title: result.msg
						});
					}
				}
			});
		}
	}
};
</script>
<style>
.container {
	width: 100%;
	background: #ffffff;
	padding: 100px 50px;
	box-sizing:border-box;
}
.welcome {
	font-size: 26px;
	margin-bottom: 50px;
}
.input-item {
	width: 100%;
	padding: 20px 0px;
	border-bottom: 1px solid #f2f2f2;
}
.input-item input {
	width: 190px;
	display: inline-block;
}
.confirm-btn {
	margin-top: 100px;
	background: #00b6f6;
	color: #ffff;
	border-radius: 50px;
	width: 100%;
	height: 40px;
	line-height: 40px;
	font-size: 15px;
	font-weight: 700;
	letter-spacing: 2px;
}
.forget-section {
	margin-top: 30px;
}
.forget-section text:first-child {
	color: #0caaf0;
}
.forget-section text:nth-child(2) {
	color: #0caaf0;
	float: right;
}
.forget-section text:nth-child(2) text {
	color: #9e9e9e;
}
.placeholder{
	color: #9e9e9e;
}
</style>
