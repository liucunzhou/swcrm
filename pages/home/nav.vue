<template>
	<view class="pages">
		<view style="margin-left: 10px;margin-bottom: 10px;font-size: 16px;font-weight: 700;">
			<text style="color: #0CAAF0;font-size: 8px;margin-right: 5px;">▶ </text> 客资管理
		</view>
		<view class="box_flex">
			<view class="imgText" @click="goToSea()">
				<img src="../../commonimg/information.png" mode=""></img>
				<text>客资公海</text>
			</view>
			<view class="imgText" @click="goToMine(0,0,'我的客资')">
				<img src="../../commonimg/myinformation.png" mode=""></img>
				<text>我的客资</text>
			</view>
			<view class="imgText" @click="goToMine(2,0,'成单客资')">
				<img src="../../commonimg/myorder.png" mode=""></img>
				<text>成单客资</text>
			</view>
			<view class="imgText" @click="goToMine(3,0,'失效客资')">
				<img src="../../commonimg/lose.png" mode=""></img>
				<text>失效客资</text>
			</view>
			<view class="imgText" @click="goToMine(5,0,'有效客资')">
				<img src="../../commonimg/youxiao.png" mode=""></img>
				<text>有效客资</text>
			</view>
			<view class="imgText" @click="goToMine(0,0,'未跟进客资')">
				<img src="../../commonimg/weigenjin.png" mode=""></img>
				<text>未跟进客资</text>
			</view>
			<view class="imgText" @click="goToMine(0,1,'进店客资')">
				<img src="../../commonimg/jindian.png" mode=""></img>
				<text>进店客资</text>
			</view>
			<view class="imgText" @click="goToMine(1,0,'跟进中客资')">
				<img src="../../commonimg/genjinzhong.png" mode=""></img>
				<text>跟进中客资</text>
			</view>
		</view>
		<view style="margin-left: 10px;margin-bottom: 10px;font-size: 16px;font-weight: 700;">
			<text style="color: #0CAAF0;font-size: 8px;margin-right: 5px;">▶ </text> 订单管理
		</view>
		<view class="box_flex">
			<view class="imgText" @click="goToOrder(2)">
				<img src="../../commonimg/information.png" mode=""></img>
				<text>一站式</text>
			</view>
			<view class="imgText" @click="goToOrder(0)">
				<img src="../../commonimg/myinformation.png" mode=""></img>
				<text>婚宴订单</text>
			</view>
			<view class="imgText" @click="goToOrder(1)">
				<img src="../../commonimg/myorder.png" mode=""></img>
				<text>婚庆订单</text>
			</view>
		</view>
	</view>
</template>

<script>
	import dingtalk from '@/dingtalk.open.js'
	let platform = dingtalk.env.platform;
	if (platform != 'notInDingTalk') {
		dingtalk.ready(function() {
			dingtalk.biz.navigation.hideBar({
				hidden: true,
				onSuccess: function(result) {},
				onFail: function(err) {}
			})
		});
	}
	
	export default {
		data() {
			return {

			}
		},
		methods: {
			goToSea() {
				uni.navigateTo({
					url: '../customer/sea'
				})
			},
			goToMine(status, is_into_store, page_title) {
				uni.navigateTo({
					url: '../customer/mine?status=' + status + '&is_into_store=' + is_into_store + '&page_title=' + page_title
				})
			},
			goToOrder(orderType) {
				if(orderType==0) { // 婚宴
					uni.navigateTo({
						url: '../order/banquet'
					});
				} else if(orderType == 1) { // 婚庆
					uni.navigateTo({
						url: '../order/wedding'
					});
				} else { // 一站式
					uni.navigateTo({
						url: '../order/entire'
					});
				}
			}
		}
	}
</script>

<style>
	.pages {
		width: 100vw;
		height: 100vh;
		padding: 10px 10px;
		box-sizing: border-box;
		background: #fff;
	}

	.box_flex {
		display: flex;
		justify-content: left;
		flex-wrap: wrap;
	}

	.imgText {
		width: 25%;
		height: 80px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.imgText img {
		width: 40px;
		height: 40px;
	}
</style>
