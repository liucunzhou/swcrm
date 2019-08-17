<template>
	<view class="pages">
		<!-- <view class="phone_box">
			<view class="phone_box_follow">
				<navigator url="../../tabBar/home/followUp">
				  <img src="../../../commonimg/follow.png"></img>
				</navigator>
			</view>
			<view class="phone_box_phone"  @click="isLaberbox=true">
				<img src="../../../commonimg/phone.png"></img>
			</view>
		</view> -->
	   <view class="header_name">
		   <view>name</view>
		   <view>渠道: 。。。</view>
	   </view>
	   <view class="center_box">
		   <view class="center_header">  
		     <text class="center_header_left">客户信息</text> 
			 <!-- <text class="center_header_right">预算： 3-10万元</text> -->
		   </view>
		   <view class="center_time"> 
		      <text>需求桌数：</text>
			  <input type="text" value="" placeholder="例:3-10桌" />
		   	   
		   </view>
		   <view class="center_time"> 
		       <text>预&nbsp&nbsp&nbsp&nbsp&nbsp算：</text>
		   	    <input type="text" value="" placeholder="例:3-10万" />
		   </view>
		   <view class="center_time"> 
		      <text >婚&nbsp&nbsp&nbsp&nbsp&nbsp期：</text>
			  <input type="text" value="" placeholder="例:2019-12-12/2019-12-12" />
		   </view>
		    <view class="center_time"> 
		      <text>咨询酒店：  </text>
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
	   				   <text class="center_header_left">跟进人员</text> 
	   				</view> 		   
	   				<!-- 跟进记录-->
	   				<view class="followMsg">
						 <view class="follow_date" style="letter-spacing: 2px;">回&nbsp访&nbsp者&nbsp：111</view>
						 <view class="follow_date" style="letter-spacing: 2px;">获取时间：2019-08-12</view>
						 <view class="follow_date" style="letter-spacing: 2px;">下次回访：2019-08-12</view>
						 <view class="follow_date" style="letter-spacing: 2px;">回访次数：111</view>
	   				</view>
	   </view>
	   <view class="center_box">
				<view class="center_header" >  
				   <text class="center_header_left">跟进记录 (3)</text> 
				</view> 		   
				<!-- 跟进记录-->
				<view class="followMsg">
					<view class="follow_date">2019-12-12 周五  08:08</view>
	                <view class="follow_main"><text>名字</text></view>   
					<view class="follow_main"><text>内容</text></view>   
					 <view class="follow_main"><text style="letter-spacing: 2px;">跟进状态：跟踪</text></view>   
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
		box-sizing: border-box;
		margin-bottom: 60px;
		background: #FFFFFF;
	}
	.phone_box{
		position: fixed;
		right: 0;
		top: 70%;
	    width: 50px;
		height: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.phone_box_follow{
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-content: center;
	}
	.phone_box_follow img{
		width: 30px;
		height: 30px;
	}
	.phone_box_phone img{
		width: 30px;
		height: 30px
	}
	.phone_box_phone{
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-content: center;
	}
	.header_name{
		width: 100%;
		padding: 5px 20px;
		box-sizing: border-box;
		border-bottom:1px solid #CCCCCC ;
		margin-bottom: 20px;
	}
	.center_box{
		width: 90%;
		height: auto;
		background: #F8F8F8;
		border-radius: 6px;
		margin: 10px auto;
		overflow: hidden;
	}
	.center_header{
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
	.center_header_left{
		float: left;
		letter-spacing: 2px;
	}
	.center_header_right{
		float: right;
		letter-spacing: 2px;
	}
	.center_time{
		padding: 0px 15px;
		display: flex;
		justify-content: left;
		align-items: center;
	}
	.center_time text:nth-child(1){
		letter-spacing: 2px;
		font-size: 14px;
		color: #91989c;
	}
	.center_time input:nth-child(2){
		font-size: 14px;
		width: 200px;
		display: inline-block;
		color: #91989c;
	}
	.center_time text:nth-child(2){
		font-size: 14px;
		color: #91989c;
	}
	.center_time text{
		line-height: 30px;
		display: inline-block;
	}
	.center_time:last-child{
		border-bottom: none;
	}
	.followMsg{
		padding: 7px 10px;
		color: #91989c;
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
		border: 1px solid #F2F2F2;
		box-sizing: border-box;
		display:flex ;
		justify-content: space-around;
		background: #fff;	
		
	}
	.meiutext{
     display: flex;
     flex-direction: column;
     align-items: center;
	 margin-top: 5px;
	 padding-left:20px ;
	 box-sizing: border-box;
		font-size: 12px;
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
		font-size: 12px;
	}
	
	.meiuphone img{
	   width: 25px;
	   height: 25px;
	   
	}
	.line{
		width: 1px;
		height: 60px;
		background: #F2F2F2;
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
