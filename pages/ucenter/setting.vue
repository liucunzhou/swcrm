<template>
	<view class="column_down">
		<view class="downmsg" > 
		   <navigator url="password">
				<text>修改密码</text>
			</navigator>
		</view>
		<view class="downmsg"> 
			<text>修改昵称</text>
			<input :value="realname" @blur="changeRealName"></input>
		</view>
	</view>
</template>

<script>
	import dingtalk from '@/dingtalk.open.js'
	let platform = dingtalk.env.platform;
	
	export default {
		data() {
			
			let user;
			try{
				user = uni.getStorageSync("user");
			}catch(e){
				//TODO handle the exception
			}
	
			let realname = user.realname;
			return {
				realname: realname
			}
		},
		onLoad() {
			
		},
		onShow() {
			if (platform != 'notInDingTalk') {
				dingtalk.ready(function() {
					dingtalk.biz.navigation.hideBar({
						hidden: true,
						onSuccess: function(result) {},
						onFail: function(err) {}
					})
				});
			}
		},
		methods:{
			changeRealName(e){
				let realname = e.detail.value;
				if(realname == '') {
					uni.showToast({
						title: '系统名称不能为空',
						icon: 'none'
					})
				}
				
				let token = this.$getToken();
				let params = {
					token: token,
					realname: realname
				};
				
				let url = this.$apis.user.editUser;
				uni.request({
					url:url,
					method:'POST',
					data: params,
					dataType: 'json',
					header:{
						'content-type':'application/x-www-form-urlencoded',
					},
					success: (res) => {
						let result = res.data;
						if(result.code=='200') {
							let user;
							try{
								user = uni.getStorageSync("user");
							}catch(e){
								//TODO handle the exception
							}
							
							user.realname = realname;
							try{
								uni.setStorageSync("user", user);
							}catch(e){
								//TODO handle the exception
							}
						
							uni.showToast({
								title:result.msg
							});
						} else {
							uni.showToast({
								title:result.msg
							});
						}
					}
				})
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
