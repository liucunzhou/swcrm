<template>
	<view class="pages">
		<view class="page_box">
			<view class="textbox">
				<textarea @input="inputChange" data-key="remark" placeholder-style="font-size:12px" class="textbox_pla" placeholder="请输入跟进记录" />
				</view>
			 <view class="followName">
			 	<view class="followmsg">
			     	<text>客户姓名：{{realname}}</text>
			 	</view>
				<picker mode="selector" @change="statusChange" :value="status" :range="statuses" range-key="title">
					<view class="uni-input followtatus">{{statuses[status]['title']}}</view>
				</picker>
			 </view>
			 
			 <view class="followName">
			   <picker mode="date"  :value="next_visit_time"  @change="bindTimeChange">
			 		<view class="followmsg" style="width: 94%;">
			 			<text style="width: 100%; color: #000000;"><text >下次跟进时间：</text> <text style="float: right;">{{next_visit_time}}</text></text>	
			 		</view>
			 		<view class="followtatus" style="text-align: right;width: 5%;">
			 			<img src="../../commonimg/fanhui.png"></img>
			 		</view>
			 	 </picker>
			 </view>
			
			 <view class="order">
			 	<text class="Customer_text">是否到店</text>
			      <view class="notorder" @click="is_into_store=false">
			      	<text  :class="is_into_store?'order_box':'activeorder_box'" ></text>
			 		<text  :class="is_into_store?'order_text':'activeorder_text'">未到店</text>
			      </view>		    
			       <view class="notorder" @click="is_into_store=true">
			      	<text :class="!is_into_store?'order_box':'activeorder_box'" ></text>
			      	<text :class="!is_into_store?'order_text':'activeorder_text'">到店</text>
			      </view>
			 </view>
			  
			 <view class="btn">
			 	<button type="primary" :disabled="submit" @click="doVisitCustomer">保存</button>
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
			let statuses = [
				{id: 0, title: "未跟进", is_valid: 1},
				{id: 1, title: "跟进中", is_valid: 1},
				{id: 2, title: "成单客户", is_valid: 1},
				{id: 3, title: "失效客户", is_valid: 1},
				{id: 4, title: "无效客户", is_valid: 1},
				{id: 5, title: "有效客户", is_valid: 1},
				{id: 6, title: "意向客户", is_valid: 1},
			];
			let status = 0;
			let realname = '';
			let submit = true;
			return {
				is_into_store:false,
				next_visit_time:"2019-08-07",
				current: 0,
				isLaberbox:false,
				realname: realname,
				remark: '',
				status: status,
				statuses: statuses,
				submit: submit,
				member_id: 0
			}
		},
		onLoad(options) {
			this.realname = options.realname;
			this.member_id = options.member_id;
		},
		methods:{
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				let value = e.detail.value;
				this[key] = value;
				let status = this.status;
				let statuses = this.statuses;
				let cstatus = statuses[status];
				if(cstatus.id != 3 && cstatus.id != 4 && this.nextVisitTime != '' && this.remark != '') {
					this.submit = false;
				}
			},
			statusChange(e) {
				let status = e.detail.value;
				this.status = status;
				let cstatus = this.statuses[status];
				if(cstatus.id != 3 && cstatus.id != 4 && this.nextVisitTime != '' && this.remark != '') {
					this.submit = false;
				}
			},
			bindTimeChange(e) {
				this.next_visit_time = e.detail.value
				let status = this.status;
				let statuses = this.statuses;
				let cstatus = statuses[status];
				if(cstatus.id != 3 && cstatus.id != 4 && this.nextVisitTime != '' && this.remark != '') {
					this.submit = false;
				}
			},
			doVisitCustomer(e) {
				let _this = this;
				let status = this.status;
				let cstatus = this.statuses[status].id;
				let token = this.$getToken();
				let url = _this.$apis.visit.doVisitCustomer;
				let params = {
					token: token,
					member_id: _this.member_id,
					active_status: cstatus,
					next_visit_time: _this.next_visit_time,
					content: _this.remark,
					is_into_store: _this.is_into_store ? 1 : 0
				};
				uni.request({
					url: url,
					method: 'POST',
					data: params,
					dataType: 'json',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					success: (res) => {
						let response = res.data;
						if (response.code == '200') {
							uni.navigateTo({
								url: 'mine?page_title=我的客资'
							})
						} else {
							uni.showToast({
								title: result.msg
							})
						}
					}
				});
			}
		}
	}
</script>

<style>
	.pages{
		width: 100vw;
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
		line-height:44px;
		height: 44px;
	}
	.followmsg text{
		display:inline-block;
	}
	.followtatus{
		float: right;
		display: inline-block;
		width: 49%;
		height: 44px;
		line-height: 44px;
		text-align: center;
	}
	.followtatus.uni-input {
		padding: 0;
		border-left:1px solid #ccc ;
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
