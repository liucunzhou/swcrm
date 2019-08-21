<template>
	<view>
		<view class="column_down">
			<view class="downmsg">
				<text>原密码</text>
				<input v-model="password" :value="password" @input="inputChange" placeholder="请输入原密码"></input>
			</view>
			<view class="downmsg">
				<text>新密码</text>
				<input v-model="newpassword" :value="newpassword"  @input="inputChange" placeholder="请输入新密码"></input>
			</view>
		</view>
		<view class="trueFn">
			<button @click="submit">确认</button>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				password: "",
				newpassword: "",
			}
		},
		methods: {
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			submit() {
				let url = this.$apis.user.repassword;
				let token = this.$getToken();
				const {password, newpassword} = this;
				let sendData = {password, newpassword};
				if(sendData.password=='' || sendData.newpassword == '')  {
					uni.showToast({
						title:"请填写密码"
					})
					return false;
				}
				
				if(sendData.password.length < 6 || sendData.newpassword.length < 6)  {
					uni.showToast({
						title:"密码不能少于6位"
					})
					return false;
				}
				
				sendData['token'] = token;
				uni.request({
					url:url,
					method:'POST',
					data: sendData,
					dataType: 'json',
					header:{
						'content-type':'application/x-www-form-urlencoded',
					},
					success: (res) => {
						let result = res.data;
						if(result.code=='200') {
							uni.showToast({
								title: res.msg,
								duration: 2000,
								success: function(){
									uni.navigateBack({
										
									});
								}
							});
						} else {
							uni.showToast({
								title:result.msg
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	.column_down {
		display: flex;
		flex-direction: column;
		padding: 10px 20px;
	}

	.downmsg {
		margin-bottom: 10px;
		border-bottom: 1px solid #ccc;
		padding: 5px 0;
	}

	.trueFn {
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0px;
	}
</style>
