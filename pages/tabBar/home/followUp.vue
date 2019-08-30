<template>
	<view class="pages">
		<view class="textbox">
			<text>跟进记录：</text>
			<textarea @blur="" auto-height placeholder="请输入跟进记录" />
		</view>
		<view class="followTime">
			<text>实际跟进记录：2019-08-07 12:00 </text>
		</view>
		<view class="followName">
			<view class="followmsg">
		    	<text>客户姓名：</text>
				<text>客户</text>
			</view>
			<view class="followtatus" @click="isLaberbox=true">
				<text>成交</text>
				<img  style="text-align: right;" src="../../../commonimg/fanhui.png"></img>
			</view>
		</view>
		<view class="followName">
		  <picker mode="date"  :value="date"  @change="bindTimeChange">
				<view class="followmsg">
					<text style=" color: #0A98D5;">下次跟进时间</text>
					<text>{{date}}</text>
				</view>
				<view class="followtatus" style="text-align: right;">
					<img src="../../../commonimg/fanhui.png"></img>
				</view>
			 </picker>
		</view>
		<view class="laberbox" v-if="isLaberbox" @click="boxFn()">
			 <view class="laberbox_box">
                  <radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
						<view>
							<radio :value="item.value" :checked="index === current" />
						</view>
						<view>{{item.name}}</view>
					</label>
               </radio-group>
			 </view>
		</view>
		<view class="btn">
			<button type="primary">保存</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date:"2019-08-07",
				 items: [{
                    value: 'USA',
                    name: '美国'
                },
                {
                    value: 'CHN',
                    name: '中国',
                    checked: 'true'
                },
                {
                    value: 'BRA',
                    name: '巴西'
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
				console.log(e)
				 window.event.stopPropagation()
				 uni.navigateTo({
				 	url:"../../tabBar/home/createOrder"
				 })
			},
			boxFn(e){
				this.isLaberbox=false
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
	.textbox{
		width: 100%;
		min-height:170px ;
		padding: 5px 10px;
		box-sizing: border-box;
		background: #ffff;
	}
	.followTime{
		width: 100%;
		padding: 5px 10px;
		background: #ffff;
		box-sizing: border-box;
	}
	.followTime text{
		display: inline-block;
		padding: 4px 5px;
		background: #F4f4f4;
		color: #0A98D5;
		border-radius:20px ;
		font-size: 14px;
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
		width: 75%;
		display: inline-block;
		float: left;
	}
	.followmsg text{
		display: block;
	}
	.followtatus{
		float: right;
		display: inline-block;
		width: 24%;
		line-height: 55px;
		text-align: center;
		
	}
	.followtatus text{
		border-left:1px solid #ccc ;
		padding-left: 20px;
		padding-right: 20px;
		box-sizing: border-box;
		
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
		width: 300px;
		height: auto;
		padding-bottom: 20px;
		background: #fff;
	}
	.btn{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>
