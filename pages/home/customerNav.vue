<template>
	<view class="pages">
		<view style="margin-left: 10px;margin-bottom: 10px;font-size: 16px;font-weight: 700;">
			<text style="color: #0CAAF0;font-size: 8px;margin-right: 5px;">▶ </text> 客资管理
		</view>
		<view class="box_flex">
			<view class="imgText" @click="toSea">
				<img src="../../commonimg/information.png" mode=""></img>
				<text>客资公海</text>
			</view>
			<view class="imgText">
				<img src="../../commonimg/myinformation.png" mode=""></img>
				<text>我的客资</text>
			</view>
			<view class="imgText">
				<img src="../../commonimg/myorder.png" mode=""></img>
				<text>我的订单</text>
			</view>
			<view class="imgText">
				<img src="../../commonimg/lose.png" mode=""></img>
				<text>失效客资</text>
			</view>
			<view class="imgText">
				<img src="../../commonimg/lose.png" mode=""></img>
				<text>有效客资</text>
			</view>
			<view class="imgText">
				<img src="../../commonimg/lose.png" mode=""></img>
				<text>未跟进客资</text>
			</view>
			<view class="imgText">
				<img src="../../commonimg/lose.png" mode=""></img>
				<text>进店客资</text>
			</view>
			<view class="imgText">
				<img src="../../commonimg/lose.png" mode=""></img>
				<text>跟进中客资</text>
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
		  toSea(){
			  uni.navigateTo({
   			  	url:'sea'
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
		background: #fff;
	}
	.box_flex{
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
	.imgText img{
		width: 40px;
		height: 40px;
	}
</style>
