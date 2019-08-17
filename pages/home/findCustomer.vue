<template>
	<view class="pages">
		<view class="findbox">
			<img src="../../commonimg/findminimg.png"></img>
			<input placeholder-style="font-size:13px;color:#9e9e9e" type="text" value=""  placeholder="例:18737061903"/>
		</view>
		<view class="msg">
			<navigator url="dateil">
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
</script>

<style>
	.pages{
		width: 100vw;
		height: 100vh;
		background: #fff;
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
		border-radius: 5px;
		background: #ffff;
		padding: 0px 30px;
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
