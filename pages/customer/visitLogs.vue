<template>
	<view class="pages">
		<view class="header_name">
			<view>客户姓名: {{customer.realname}}</view>
			<view>渠道: {{customer.source_text}}</view>
		</view>
		<view class="center_box">
			<view class="center_header">
				<text class="center_header_left">客户信息</text>
			</view>
			<view class="center_time">
				<text>需求桌数：</text>
				<input type="text" :value="customer.banquet_size" placeholder="例:3-10桌" />
			</view>
			<view class="center_time">
				<text>预&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;算：</text>
				<input type="text" :value="customer.budget" placeholder="例:3-10万" />
			</view>
			<view class="center_time">
				<text>婚&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期：</text>
				<input type="text" :value="customer.wedding_date" placeholder="例:2019-12-12/2019-12-12" />
			</view>
			<view class="center_time">
				<text>咨询酒店： </text>
				<text> {{customer.hotel_text}}</text>
			</view>
			<view class="center_time">
				<text>所选区域： </text>
				<text> {{customer.zone}}</text>
			</view>
			<view class="center_time">
				<text>联系电话： </text>
				<text> {{customer.mobile}}</text>
			</view>
		</view>
		<view class="center_box">
			<view class="center_header">
				<text class="center_header_left">跟进人员 ({{groupLength}})</text>
			</view>

			<!-- 跟进记录-->
			<view class="followMsg" v-for="item in group" v-bind:key="item.id">
				<view class="follow_date" style="letter-spacing: 2px;">回&nbsp;访&nbsp;者&nbsp;：{{item.user_id}}</view>
				<view class="follow_date" style="letter-spacing: 2px;">获取时间：{{item.allocate_create_time}}</view>
				<view class="follow_date" style="letter-spacing: 2px;">下次回访：{{item.next_visit_time}}</view>
				<view class="follow_date" style="letter-spacing: 2px;">回访次数：{{item.visit_times}}</view>
			</view>

		</view>
		<view class="center_box">
			<view class="center_header">
				<text class="center_header_left">跟进记录 ({{logs.length}})</text>
			</view>
			<!-- 跟进记录-->
			<view class="followMsg" v-for="log in logs" v-bind:key="log.id">
				<view class="follow_date">{{log.create_time}}</view>
				<view class="follow_main"><text>{{log.user_id}}</text></view>
				<view class="follow_main"><text>{{log.content}}</text></view>
				<view class="follow_main"><text style="letter-spacing: 2px;">跟进状态：{{log.status}}</text></view>
			</view>
		</view>

		<view class="bottommeiu">
			<view class="meiutext" @click="applyVisit">
				<img src="../../commonimg/follow.png"></img>
				<text>申请回访</text>
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
				member_id: 0,
				customer: {},
				logs: {},
				group: {},
				groupLength: 0,
				isLaberbox: false,
			}
		},
		onLoad(options) {
			this.member_id = options.member_id;
			this.getCustomerVisits(options.member_id);
		},
		onShow() {
			if (platform != 'notInDingTalk') {
				dingtalk.ready(function() {
					dingtalk.biz.navigation.hideBar({
						hidden: true,
						onSuccess: function(result) {},
						onFail: function(err) {}
					})
				});
			}
		},
		methods: {
			getCustomerVisits(member_id) {
				let _this = this;
				let url = _this.$apis.visit.logs;
				let params = {
					member_id: member_id,
					token: this.$getToken()
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
						let response = res.data;
						console.log('结果是:', response.result.customer);
						if (response.code == '200') {
							_this.customer = response.result.customer;
							_this.group = response.result.visits.count;
							_this.logs = response.result.visits.log;
							let groupLength = 0;
							for (var i in _this.group) {
								groupLength++
							}
							_this.groupLength = groupLength;
						} else {
							uni.showToast({
								title: result.msg
							})
						}
					}
				})
			},
			applyVisit() {
				let _this = this;
				let url = _this.$apis.customer.doApply;
				let params = {
					ids: _this.member_id,
					token: this.$getToken()
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
						let response = res.data;
						if (response.code == '200') {
							uni.navigateTo({
								url:'apply'
							})
						} else {
							uni.showToast({
								title: result.msg
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	.pages {
		width: 100%;
		box-sizing: border-box;
		padding-bottom: 22rpx;
		background: #FFFFFF;
		padding-bottom: 100rpx;
	}

	.phone_box {
		position: fixed;
		right: 0;
		top: 70%;
		width: 50px;
		height: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.phone_box_follow {
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	.phone_box_follow img {
		width: 30px;
		height: 30px;
	}

	.phone_box_phone img {
		width: 30px;
		height: 30px
	}

	.phone_box_phone {
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	.header_name {
		width: 100%;
		padding: 5px 20px;
		box-sizing: border-box;
		border-bottom: 1px solid #CCCCCC;
		margin-bottom: 20px;
	}

	.center_box {
		width: 90%;
		height: auto;
		background: #F8F8F8;
		border-radius: 6px;
		margin: 10px auto;
		overflow: hidden;
	}

	.center_header {
		width: 100%;
		height: auto;
		padding: 5px 15px;
		background: #0caaf0;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		clear: both;
		color: #fff;
		overflow: auto;
	}

	.center_header_left {
		float: left;
		letter-spacing: 2px;
	}

	.center_header_right {
		float: right;
		letter-spacing: 2px;
	}

	.center_time {
		padding: 0px 15px;
		display: flex;
		justify-content: left;
		align-items: center;
	}

	.center_time text:nth-child(1) {
		letter-spacing: 2px;
		font-size: 14px;
		color: #91989c;
	}

	.center_time input:nth-child(2) {
		font-size: 14px;
		width: 200px;
		display: inline-block;
		color: #91989c;
	}

	.center_time text:nth-child(2) {
		font-size: 14px;
		color: #91989c;
	}

	.center_time text {
		line-height: 30px;
		display: inline-block;
	}

	.center_time:last-child {
		border-bottom: none;
	}

	.followMsg {
		padding: 7px 10px;
		color: #91989c;
		border-bottom: 1px solid #dedede;
	}

	.followMsg:last-child {
		border: none;
	}

	.name_tatus {
		clear: both;
		overflow: auto;
	}

	.name_tatus text:first-child {
		float: left;
	}

	.name_tatus text:last-child {
		float: right;
	}

	.bottommeiu {
		width: 100%;
		height: 60px;
		position: fixed;
		bottom: 0px;
		left: 0px;
		border: 1px solid #F2F2F2;
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
		background: #fff;

	}

	.meiutext {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5px;
		padding-left: 20px;
		box-sizing: border-box;
		font-size: 12px;
	}

	.meiutext img {
		width: 25px;
		height: 25px;

	}

	.meiuphone {
		margin-top: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-right: 23px;
		box-sizing: border-box;
		font-size: 12px;
	}

	.meiuphone img {
		width: 25px;
		height: 25px;

	}

	.line {
		width: 1px;
		height: 60px;
		background: #F2F2F2;
	}

	.laberbox {
		width: 100vw;
		height: 100vh;
		position: absolute;
		left: 0px;
		top: 0px;
		background: rgba(0, 0, 0, .3);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.laberbox_box {
		width: 300px;
		height: auto;
		padding-bottom: 20px;
		background: #fff;
		padding: 10px 10px;
		box-sizing: border-box;
	}

	.box_phone {
		width: 20px;
		height: 20px;
		vertical-align: middle;

	}

	.boxtext {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
	}
</style>
