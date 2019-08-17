<template>
	<view class="pages">
	    <view class="msg">
			<navigator url="../../tabBar/home/dateil">
				<view class="msg_header">
					<view class="header_left">
					  <text>姓名:</text><text>张小姐</text>
					</view>	
				</view>
			   <view class="msg_text">
				   <text>预算：</text> <text>8-1w元/桌</text>
			   </view>
			   <view class="msg_text">
				   <text>桌数：</text> <text>12/桌</text>
			   </view>
			   <view class="msg_text">
				   <text>酒店：</text> <text>瑞金</text>
				</view>
			   <view class="msg_text">
				   <text>区域：</text> <text>黄埔</text>
			   </view>	
			</navigator>
		</view>
	</view>
</template>

<script>
		export default {
		data() {
			return {
			}
		},
		created() {
			//动态设置头部title
			uni.setNavigationBarTitle({
				title:"动态标题"
			})
		},
		methods:{
			nameFn(){
				console.log("ssss")
			}
		}
	}
	
	
</script>

<style>
	.pages{
		width: 100%;
		height: 100%;
		padding: 10px 30px;
		box-sizing: border-box;
		overflow: auto;
	}
	.msg{
		width: 100%;
		height: auto;
		border:1px solid #ccc;
		border-radius: 5px;
		padding: 0px 20px;
		box-sizing: border-box;
	}
	.msg_header{
		width: 100%;
		padding: 5px 0;
		box-sizing: border-box;
		border-bottom: dashed #ccc 1px;
	}
	.msg_text{
		width: 100%;
		padding: 5px 0;
	}
</style>
