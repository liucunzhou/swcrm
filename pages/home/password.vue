<template>
	<view>
		<view class="column_down">
			<view class="downmsg" > 
					<text>原密码</text>
					<input  v-model="originalPassword" placeholder="请输入原密码"></input>
			</view>
			<view class="downmsg"> 
				<text>新密码</text>
				<input v-model="newPassword" placeholder="请输入新密码"></input>
			</view>
			<view class="downmsg"> 
				<text>确认密码</text>
				<input v-model="newTruePassword" placeholder="请确认密码"></input>
			</view>
		</view>
		 <view class="trueFn">
			 <button @click="trueFns">确认</button>
		 </view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				originalPassword:"",
				newPassword:"",
				newTruePassword:"",
			}
		},
		methods:{
			nameFn(){
				console.log("ssss")
			},
			//确认
			trueFns(){
				
			}
		}
	}
</script>

<style>
	.column_down{
		display: flex;
		flex-direction: column;
		padding: 10px 20px;
	}
		
	.downmsg{
	    margin-bottom: 10px;
		border-bottom: 1px solid #ccc;
		padding: 5px 0;
	}
	.trueFn{
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0px;
	}
</style>
