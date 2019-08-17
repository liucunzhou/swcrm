<template>
	<view class="pages">
	    <view class="msg">
			<navigator url="../../tabBar/home/dateil">
				<view class="msg_header">
					<view class="header_left">
					  <text class="names">姓名： </text><text class="namemain">张小姐</text>
					</view>	
				</view>
			   <view class="msg_text">
				   <text class="names">预算：</text> <text class="namemain">8-1w元/桌</text>
			   </view>
			   <view class="msg_text">
				   <text class="names">桌数：</text> <text class="namemain">12/桌</text>
			   </view>
			   <view class="msg_text">
				   <text class="names">酒店：</text> <text class="namemain">瑞金</text>
				</view>
			   <view class="msg_text">
				   <text class="names">区域：</text> <text class="namemain">黄埔</text>
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
			
		}
	}
	
</script>

<style>
	.pages{
		width: 100%;
		height: 100%;
		padding: 10px 15px;
		box-sizing: border-box;
		overflow: auto;
		background: #FFFFFF;
	}
	.msg{
		width: 100%;
		height: auto;
		border-radius: 5px;
		background: #fff;
		padding: 0px 20px;
		box-sizing: border-box;
		box-shadow: 1px 1px 10px #F4F4F4;
	}
	.msg_header{
		width: 100%;
		padding: 15px 0px;
		box-sizing: border-box;
		border-bottom:solid #F2F2F2 1px;
		margin-bottom: 5px; 
		
	}
	.msg_text{
		width: 100%;
		padding: 8px 0;
	}
	.names{
		color: #1E1E1E;
		letter-spacing: 4px;
		margin-right: 10px;
	}
	.namemain{
		color: #989898;
		letter-spacing: 3px;

	}
</style>
