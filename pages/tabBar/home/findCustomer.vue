<template>
	<view class="pages">
		<view class="findbox">
			<img src="../../../commonimg/findminimg.png"></img>
			<input type="text" value=""  placeholder="例:18737061903"/>
		</view>
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
</script>

<style>
	.pages{
		width: 100vw;
		height: 100vh;
	}
	.findbox{
		width: 90%;
		height: 30px;
		border:1px solid #ccc ;
		margin: 0 auto;
		border-radius:20px ;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 10px;
		box-sizing: border-box;
		margin-bottom: 20px;
	}
	.findbox img{
		width: 20px;
		height: 20px;
	}
	.findbox input{
		width: 90%;
		display: inline-block;
	}
	
	
	.msg{
		width: 90%;
		height: auto;
		margin: 0 auto;
		border:1px solid #ccc;
		border-radius: 5px;
		/* background: red; */
		padding: 0px 50px;
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
