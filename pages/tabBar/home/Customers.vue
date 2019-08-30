<template>
	<view class="pages">
		<view style="">销售管理</view>
		<view class="box_flex">
			<view class="imgText" @click="spcie()">
				<img src="../../../commonimg/information.png" mode=""></img>
				<text>客资公海</text>
			</view>
			<view class="imgText">
				<img src="../../../commonimg/myinformation.png" mode=""></img>
				<text>我的客资</text>
			</view>
			<view class="imgText">
				<img src="../../../commonimg/myorder.png" mode=""></img>
				<text>我的订单</text>
			</view>
			<view class="imgText">
				<img src="../../../commonimg/lose.png" mode=""></img>
				<text>失效客资</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
		
			}
		},
		methods:{
		  spcie(){
			  uni.navigateTo({
   			  	url:'../../tabBar/home/guestInformation'
			  })
		  }
		}
	}
</script>

<style>
	.pages{
		width: 100vw;
		height: 100vh;
		padding: 10px 10px;
		box-sizing: border-box;
	}
	.box_flex{
		display: flex;
		justify-content: left;
	}
	.imgText {
		width: 90px;
	    height: 80px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.imgText img{
		width: 40px;
		height: 40px;
	}
</style>
