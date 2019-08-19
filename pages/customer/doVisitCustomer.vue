<template>
	<view class="pages">
		<view class="page_box">
			<view class="textbox">
			 	<textarea @blur=""  placeholder-style="font-size:12px"  class="textbox_pla"  placeholder="请输入跟进记录" />
			 </view>
			 <view class="followTime">
			 	<text>实际跟进记录：2019-08-07 12:00 </text>
			 </view>
			 <view class="followName">
			 	<view class="followmsg">
			     	<text>客户姓名：name</text>
			 	</view>
			 	<view class="followtatus" @click="isLaberbox=true">
			 		<text>成交</text>
			 		<!-- <img  style="text-align: right;" src="../../commonimg/fanhui.png"></img> -->
			 	</view>
			 </view>
			 
			 <view class="followName">
			   <picker mode="date"  :value="date"  @change="bindTimeChange">
			 		<view class="followmsg" style="width: 94%;">
			 			<text style="width: 100%; color: #000000;"><text >下次跟进时间：</text> <text style="float: right;">{{date}}</text></text>	
			 		</view>
			 		<view class="followtatus" style="text-align: right;width: 5%;">
			 			<img src="../../commonimg/fanhui.png"></img>
			 		</view>
			 	 </picker>
			 </view>
			 <view class="laberbox" v-if="isLaberbox" @click="boxFn()">
			 	 <view class="laberbox_box">
			           <radio-group @change="radioChange">
			 			<label style="transform:scale(0.9);font-size: 16px;" class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
			 				<view>
			 					<radio :value="item.value" :checked="index === current" />
			 				</view>
			 				<view>{{item.name}}</view>
			 			</label>
			        </radio-group>
			 	 </view>
			 </view>
			 <view class="order">
			 	<text class="Customer_text">是否到店</text>
			      <view class="notorder" @click="isOreder=false">
			      	<text  :class="isOreder?'order_box':'activeorder_box'" ></text>
			 		<text  :class="isOreder?'order_text':'activeorder_text'">未到店</text>
			      </view>		    
			       <view class="notorder" @click="isOreder=true">
			      	<text :class="!isOreder?'order_box':'activeorder_box'" ></text>
			      	<text :class="!isOreder?'order_text':'activeorder_text'">到店</text>
			      </view>
			 </view>
			 <view class="order">
			 	<text class="Customer_text">客户到店</text>
			      <view class="notorder" @click="isOreder=false">
			      	<text  :class="isOreder?'order_box':'activeorder_box'" ></text>
			 		<text  :class="isOreder?'order_text':'activeorder_text'">未订单</text>
			      </view>		    
			       <view class="notorder" @click="PurchaseOrder() ">
			      	<text :class="!isOreder?'order_box':'activeorder_box'" ></text>
			      	<text :class="!isOreder?'order_text':'activeorder_text'">订单</text>
			      </view>
			 </view>
			  
			 <view class="btn">
			 	<button type="primary">保存</button>
			 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customer: {},
				isOreder:true,
				isNotoder:true,
				date:"2019-08-07",
				 items: [{
                    value: 'USA',
                    name: '有意向'
                },
                {
                    value: 'CHN',
                    name: '失效',
                    checked: 'true'
                },
                {
                    value: 'BRA',
                    name: '跟进'
                },
     
            ],
            current: 0,
			isLaberbox:false,
			}
		},
		methods:{
			bindTimeChange(e){
				this.date=e.detail.value
			},
			radioChange(e){
				 window.event.stopPropagation()
				 uni.navigateTo({
				 	url:"createOrder"
				 })
			},
			boxFn(e){
				this.isLaberbox=false
			},
			// 点击订单
			PurchaseOrder(){
				this.isOreder=true
				 uni.navigateTo({
					url:"createOrder"
				})
			}
		}
	}
</script>

<style>
	.pages{
		width: 100vw;
		/* height: 100vh; */
		background: #f4f4f4;
		
	}
	.page_box{
		padding: 0 10px;
		box-sizing: border-box;
		background: #FFFFFF;
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
	
	.textbox{
		width: 100%;
		min-height:170px ;
		padding: 5px 10px;
		box-sizing: border-box;
		background: #ffff;
	}
	.textarea{
		font-size: 12px;
	}
	.followTime{
		width: 100%;
		padding: 5px 10px;
		background: #ffff;
		box-sizing: border-box;
	}
	.followTime text{
		display: inline-block;
		padding: 4px 10px;
		background: #F4f4f4;
		color: #0A98D5;
		border-radius:20px ;
		font-size: 12px;
	}
	.followName{
		width: 100%;
		height: auto;
		padding: 5px 10px;
		border-bottom: solid 1px #F4F4F4;
		background: #ffff;
		clear: both;
		overflow: auto;
		box-sizing: border-box;
	}
	.followmsg{
		width: 50%;
		display: inline-block;
		float: left;
		line-height:55px;
	}
	.followmsg text{
		display:inline-block;
	}
	.followtatus{
		float: right;
		display: inline-block;
		width: 49%;
		line-height: 55px;
		text-align: center;
	}
	.followtatus text{
		box-sizing: border-box;
		border-left:1px solid #ccc ;
		padding-left: 50px;
		padding-right: 70px;
		box-sizing: border-box;
		width: 200px;
		color: #0A98D5;
	}
	.followtatus img{
		vertical-align: middle;
		width: 15px;
		height: 15px;
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
		width: 250px;
		height: auto;
		padding-top: 10px;
		padding-bottom: 20px;
		background: #fff;
		border-radius: 6px;
	}
	
	.btn{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.btn uni-button{
		border-radius: 0px;
	}
	.orderbox{
		background: #FFFFFF;
		width: 100%;
		height: 60px;
		border: 1px solid #F2F2F2;
		display: flex;
	}
	.orderbox view{
		width: 50%;
		height: 60px;
		line-height: 60px;
		text-align: center;
		
	}
	.activeorder{
		border-bottom: 1px solid #0066CC;
	}
	.order{
		width: 100%;
		height: auto;
		background: #FFFFFF;
		padding: 10px 0 10px 10px;
		box-sizing: border-box;
		display: flex;
		justify-content: left;
	}
	.Customer_text{
		margin-right: 110px;
	}
	.notorder{
		padding: 0px 5px;
		height: auto;
		background: #FFFFFF;
		display: inline-block;
		display: flex;
		justify-content:left;
		align-items: center;
		margin-left: 20px;
	}
	.order_box{
		width: 8px;
		height: 8px;
		background: #F4F4F4;
		border-radius: 50%;
		display: inline-block;
		line-height: 20px;
		margin-right: 10px;
	}
	.activeorder_box{
		background: #0CAAF0;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		display: inline-block;
		line-height: 20px;
		margin-right: 10px;
	}
	.order_text{
	   color: #000000;
	}
	.activeorder_text{
		color: #0CAAF0;
	}
</style>
