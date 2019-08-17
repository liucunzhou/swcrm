<template>
	<view class="pages">
	   <view class="header_name">
		   <view>name</view>
		   <view>渠道: 。。。</view>
	   </view>
	   <view class="center_box">
		   <view class="center_header">  
		     <text class="center_header_left">需求桌数：3-10桌</text> 
			 <text class="center_header_right">预算： 3-10万元</text> 
		   </view>
		   <view class="center_time"> 
		      <text>婚期： </text>
			  <text> 2019-12-12/2019-12-12</text>
		   </view>
		    <view class="center_time"> 
		      <text>咨询酒店： </text>
		   	  <text> 酒店名称</text>
		   </view>
		     <view class="center_time"> 
		      <text>所选区域： </text>
		   	  <text> 区域</text>
		   </view>
		    <view class="center_time"> 
		      <text>联系电话： </text>
		   	  <text> 1231313213</text>
		   </view>
	   </view>
	   
	   <view class="center_box">
				<view class="center_header" >  
				   <text class="center_header_left">跟进记录 (3)</text> 
				</view> 		   
				<!-- 跟进记录-->
				<view class="followMsg">
					<view class="follow_date">2019-12-12 周五</view>
					<view class="follow_time"> 08:08</view>
				   	<view class="name_tatus"><text>名字</text>   <text>跟进状态：跟踪</text></view>   
	                <view class="follow_main"><text>内容</text></view>    
				</view>
	   </view>
	   <view class="bottommeiu">
		     <navigator url="../../tabBar/home/followUp">
			  <view class="meiutext">
					  <img src="../../../commonimg/follow.png" ></img>
					  <text>写跟进</text>
			  </view>
		    </navigator>
		  <view class="line"></view>
		  <view class="meiuphone" @click="isLaberbox=true">
			   <img src="../../../commonimg/phone.png" ></img>
			   <text>电话</text>
		  </view>
	   </view>
	   <view class="laberbox" v-if="isLaberbox" @click="boxFn()">
	   	 <view class="laberbox_box">
			 <view class="boxtext" @click.top="bianPhone"> <text> 1379456465</text>    <img class="box_phone" src="../../../commonimg/phone.png" ></img> </view>
			 <view class="boxtext" @click.top="bianPhone"> <text> 1379456465</text>    <img class="box_phone" src="../../../commonimg/phone.png" ></img></view>
	   	 </view>
	   </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			isLaberbox:false,
			}
		},
		methods:{
	
			boxFn(e){
				
				this.isLaberbox=false
			},
			bianPhone(){
				window.event.stopPropagation()
				uni.makePhoneCall({
						phoneNumber: '114' //仅为示例
					});
			}
			
		}
	}
</script>

<style>
	.pages{
		width: 100%;
		height: 100%;
		padding: 0px 0px;
		box-sizing: border-box;
	}
	.header_name{
		width: 100%;
		padding: 5px 10px;
		box-sizing: border-box;
		border-bottom:1px solid #CCCCCC ;
		margin-bottom: 20px;
	}
	.center_box{
		width: 90%;
		height: auto;
		border: 1px #ccc solid;
		border-radius: 10px;
		margin: 10px auto;
		
	}
	.center_header{
		width: 100%;
		height: auto;
		padding: 5px 10px;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		clear: both;
		overflow: auto;
	}
	.center_header_left{
		float: left;
	}
	.center_header_right{
		float: right;
	}
	.center_time{
		padding: 0px 10px;
		border-bottom: 1px solid #ccc;
	}
	.center_time text{
		display: block;
	}
	.center_time:last-child{
		border-bottom: none;
	}
	.followMsg{
		padding: 0 10px;
	}
	.name_tatus{
		clear: both;
		overflow: auto;
	}
	.name_tatus text:first-child{
		float: left;
	}
	.name_tatus text:last-child{
		float: right;
	}
	
	.bottommeiu{
		width: 100%;
		height: 60px;
		position: fixed;
		bottom: 0px;
		left: 0px;
		border: 1px solid #ccc;
		box-sizing: border-box;
		display:flex ;
		justify-content: space-around;
		/* padding: 5px 0px; */
		
	}
	.meiutext{
     display: flex;
     flex-direction: column;
     align-items: center;
         margin-top: 5px;
		 padding-left:20px ;
		 box-sizing: border-box;
	}
	.meiutext img{
	  width: 25px;
	  height: 25px;
	     
	}
	.meiuphone{
		margin-top: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-right:23px ;
		box-sizing: border-box;
	}
	
	.meiuphone img{
	   width: 25px;
	   height: 25px;
	}
	.line{
		width: 1px;
		height: 60px;
		background: #ccc;
	}
	.laberbox{
		width: 100vw;
		height: 100vh;
		position: absolute;
		left: 0px;
		top: 0px;
		background: rgba(0,0,0,.3);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.laberbox_box{
		width: 300px;
		height: auto;
		padding-bottom: 20px;
		background: #fff;
		padding: 10px 10px;
		box-sizing: border-box;
	}
	.box_phone{
		width: 20px;
		height: 20px;
		vertical-align: middle;
		
	}
	.boxtext{
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
	}
</style>
