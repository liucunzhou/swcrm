<template>
	<view class="column_down">
		<view class="downmsg" > 
		   <navigator url="../../tabBar/home/password">
				<text>修改密码</text>
			</navigator>
		</view>
		<view class="downmsg"> 
			<text>修改昵称</text>
			<input value="name" @blur="nameFn"></input>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods:{
			nameFn(){
				console.log("ssss")
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
</style>
