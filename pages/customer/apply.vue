<template>
	<view class="pages">
		<view class="topmuie">
			<view class="screen" @click="isScreen=true">
				筛选
			</view>
			<view class="seek">
				<img src="../../commonimg/findminimg.png"></img>
				<input type="text" placeholder-style="font-size:13px" value="" placeholder="搜索" />
			</view>
		</view>
		<view class="screenbox" @click="isScreen=false" v-if="isScreen">
			<view class="screen_mian">
				<view @click="goToApply(1)">
					<text>已通过</text>
					<text><text v-if="status==1">✓</text></text>
				</view>
				<view @click="goToApply(0)">
					<text>待通过</text>
					<text><text v-if="status==0">✓</text></text>
				</view>
				<view @click="goToApply(2)">
					<text>未通过</text>
					<text><text v-if="status==2">✓</text></text>
				</view>
			</view>
		</view>
		<view class="msg" v-for="customer in customers" v-bind:key="customer.id">
			<view @click="navToCustomer(customer.member_id)">
				<view class="msg_header">
					<view class="header_left">
						<text class="names">姓名： </text><text class="namemain">{{customer.realname}}</text>
					</view>
				</view>
				<view class="msg_text">
					<text class="names">预算：</text> <text class="namemain">{{customer.budget}}</text>
				</view>
				<view class="msg_text">
					<text class="names">桌数：</text> <text class="namemain">{{customer.banquet_size}}</text>
				</view>
				<view class="msg_text">
					<text class="names">酒店：</text> <text class="namemain">{{customer.hotel_text}}</text>
				</view>
				<view class="msg_text">
					<text class="names">区域：</text> <text class="namemain">{{customer.zone}}</text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import dingtalk from '@/dingtalk.open.js'
	let platform = dingtalk.env.platform;

	export default {
		data() {
			return {
				customers: [],
				isScreen: false,
				status: 0,
			}
		},
		created() {

		},
		onLoad(params) {
			if (platform != 'notInDingTalk') {
				dingtalk.ready(function() {
					dingtalk.biz.navigation.hideBar({
						hidden: true,
						onSuccess: function(result) {},
						onFail: function(err) {}
					})
				});
			}

			this.getCustomerList(params);
			if (params.status != undefined) {
				this.status = params.status;
			} else {
				params.status = 0;
				this.status = 0;
			}
			console.log(this.status);
		},
		methods: {
			getCustomerList(params) {
				let _this = this;
				let url = _this.$apis.customer.apply;
				params['token'] = this.$getToken();
				uni.request({
					url: url,
					method: 'POST',
					data: params,
					dataType: 'json',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					success: (res) => {
						let result = res.data;
						console.log(result);
						if (result.code == '0') {
							_this.customers = result.data;
						} else {
							uni.showToast({
								title: result.msg
							})
						}
					}
				})
			},

			navToCustomer(memberId) {
				uni.navigateTo({
					url: `visitLogs?member_id=${memberId}`
				})
			},
			screenFn(index) {
				this.ScreenIndex = index
			},
			goToApply(status) {
				uni.navigateTo({
					url: `apply?status=${status}`
				})
			}
		}
	}
</script>

<style>
	.pages {
		width: 100%;
		height: 100%;
		padding: 60px 12px 30px 12px;
		box-sizing: border-box;
		overflow: auto;
		position: relative;
		background: #fff;
	}

	.topmuie {
		width: 100%;
		height: 80px;
		padding-top: 40px;
		box-sizing: border-box;
		position: fixed;
		top: 0px;
		left: 0px;
		border-bottom: 1px solid #F4F4F4;
		background: #fff;
	}

	.screenbox {
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, .3);
		position: fixed;
		top: 70px;
		left: 0px;
	}

	.screen_mian {
		width: 100vw;
		height: auto;
		background: #fff;
		display: flex;
		flex-direction: column;
		align-items: left;
		padding: 0 30px;
		box-sizing: border-box;
	}

	.screen_text {
		border-bottom: 1px solid #F2F2F2;
		width: 100%;
		height: auto;
		color: both;
		overflow: auto;
	}

	.screen_text text:first-child {
		line-height: 30px;
		float: left;
	}

	.screen_text text:last-child {
		line-height: 30px;
		float: right;
	}

	.screen_texts text {
		color: #0CAAF0;
	}

	.screen {
		width: 50%;
		height: 40px;
		display: inline-block;
		text-align: center;
		line-height: 45px;
		text-align: center;
		float: left;
	}

	.seek {
		float: right;
		text-align: center;
		width: 50%;
		height: 40px;
		line-height: 45px;
		text-align: center;
		display: inline-block;

		box-sizing: border-box;
	}

	.seek img {
		padding-left: 40px;
		width: 20px;
		height: 20px;
		display: inline-block;
		vertical-align: top;
		margin-top: 10px;
		text-align: right;
	}

	.seek input {
		height: 40px;
		width: 60%;
		float: right;
		text-align: left;
	}

	.msg {

		width: 100%;
		height: auto;
		border-radius: 5px;
		background: #fff;
		padding: 0px 20px;
		box-sizing: border-box;
		box-shadow: 1px 1px 10px #F4F4F4;
	}

	.msg_header {
		width: 100%;
		padding: 15px 0px;
		box-sizing: border-box;
		border-bottom: solid #F2F2F2 1px;
		margin-bottom: 5px;

	}

	.msg_text {
		width: 100%;
		padding: 8px 0;
	}

	.names {
		color: #1E1E1E;
		letter-spacing: 4px;
		margin-right: 10px;
	}

	.namemain {
		color: #989898;
		letter-spacing: 3px;

	}
</style>
