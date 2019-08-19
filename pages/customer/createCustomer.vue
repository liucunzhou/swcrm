<template>
	<view class="pages">
	    <view class="msg">
			<view class="ordertype">
				<view class="ordertype_text">订单类型:</view>
				<view class="ordertype_value"> 
				  <picker mode="selector" @change="typeFn" :range="typeArray">
					 <img src="../../commonimg/fanhui.png"></img><text>{{typeData}}</text>
				  </picker>
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">签约日期:</view>
				<view class="ordertype_value"> 
                    <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
                        <view class="picker">
                          当前选择: {{date}}
                        </view>
                    </picker>                     
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">举办日期:</view>
				<view class="ordertype_value"> 
					<picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
					    <view class="picker">
					      当前选择: {{date}}
					    </view>
					</picker>
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">新人名字:</view>
				<view class="ordertype_value"> 
				 <!-- <text>2019-02-02</text>	 -->
				   <input type="text" value="name" />   
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">联系电话:</view>
				<view class="ordertype_value"> 
				 <!-- <text>2019-02-02</text>	 -->
				   <input type="text" value="18737061903" />   
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">宴会厅:</view>
				<view class="ordertype_value"> 
				 <picker mode="selector" @change="typeFn" :range="typeArray">
					 <img src="../../commonimg/fanhui.png"></img> <text>{{typeData}}</text>
				 </picker>
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">价格:</view>
				<view class="ordertype_value"> 
				 <!-- <text>2019-02-02</text>	 -->
				   <input type="text" value="100000" />   
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">桌数:</view>
				<view class="ordertype_value"> 
				 <!-- <text>2019-02-02</text>	 -->
				   <input type="text" value="18737061903" />   
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">桌标:</view>
				<view class="ordertype_value">
					<v-select :options="['Canada', 'United States']"></v-select>
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">婚宴提成:</view>
				<view class="ordertype_value"> 
				 <!-- <text>2019-02-02</text>	 -->
				   <input type="text" value="18737061903" />   
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">婚庆提成:</view>
				<view class="ordertype_value"> 
				 <!-- <text>2019-02-02</text>	 -->
				   <input type="text" value="18737061903" />   
				</view>
			</view>
		</view>
		
		<view class="Submit">
			<text>立即提交</text>
			<text>重置</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: '2019-08-18',
				typeData:"婚宴",
				typeArray:['中国', '美国', '巴西', '日本']
			}
		},
		created() {
			// //动态设置头部title
			// uni.setNavigationBarTitle({
			// 	title:"动态标题"
			// })
		},
		methods:{
			nameFn(){
				console.log("ssss")
			},
			//订单类型
			typeFn(e){
				let index=e.detail.value;
				this.typeData=this.typeArray[index]
			}
		}
	}
</script>

<style>
	.pages{
		width: 100%;
		height: 100%;
		padding: 10px 10px;
		box-sizing: border-box;
		overflow: auto;
		background: #ffff;
	}
	.msg{
		width: 100%;
		height: auto;
		border-radius: 5px;
		padding: 0px 0px;
		box-sizing: border-box;
		/* background: #f3f3f3; */
	}
	.ordertype{
		background: #fff;
		width: 100%;
		height: auto;
		padding: 3px 0px;
		display: flex;
		justify-content: center;
		border-bottom: 1px solid #F2F2F2;
		box-shadow: 1px 1px 1px #F8F8F8;
		margin-bottom: 10px;
		padding-left: 20px;
		box-sizing: border-box;
	}
	.ordertype text{
		 display: flex;
		 justify-content: right;
		 float: right;
		 display: inline-block;
		 margin-right: 10px;
	}
	.ordertype input{
	    	float: right;
		 display: flex;
		 justify-content: right;
		 text-align: right;
	}
     .ordertype_text{
		 display: inline-block;
		 width: 20%;
		 line-height: 30px;
	 }
	  .ordertype_value{
		 display: inline-block;
		 width: 79%;
		 padding: 5px 5px;
		 box-sizing: border-box;
	    /* display: flex;
	     justify-content:right; */
	 }
	 .ordertype_value input{
		 text-align: right;
		 width: 100%;
		 padding-right: 10px;
		 box-sizing: border-box;
		 color: #9E9E9E;
	 }
	 .ordertype_value text{
	        float: right;
			color: #9E9E9E;
	 }
	 .ordertype_value img{
		 width: 15px;
		 height: 15px;
		 vertical-align: top;
		 margin-top: 5px;
		 text-align: right;
		 float: right;
	 }
	 .Submit{
		 position: fixed;
		 width: 100%;
		 bottom: 0px;
		 padding: 10px 10px;
		 text-align: center;
		 display: flex;
		 box-sizing: border-box;
		 justify-content: space-around;
	 }
 	 .Submit text{
		 padding: 3px 3px;
		 border:1px solid #F2F2F2;
		 margin: 0 10px;
		 display: inline-block;
		 width: 100px;
		 background: #0CAAF0;
		 border-radius: 20px;
	 }
	 .Submit text:first-child{
		 background: #00B6F6;
		 color: #fff;
	 }
	 .Submit text:nth-child(2){
	      color: #000;
		  border: 1px #F8F8F8 solid;
		  background: #F8f8f8;
	 }
</style>
