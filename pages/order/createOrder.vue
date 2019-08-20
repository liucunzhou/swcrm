<template>
	<view class="pages">
		<view class="msg">
			<view class="ordertype">
				<view class="ordertype_text">订单类型:</view>
				<view class="ordertype_value">
					<picker mode="selector" @change="newsTypeChange" :range="news_type" :value="newsType">
						<img src="../../commonimg/fanhui.png"></img><text>{{news_type[newsType]}}</text>
					</picker>
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">客资来源:</view>
				<view class="ordertype_value">
					<input type="text" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">推荐渠道:</view>
				<view class="ordertype_value">
					<input type="text" :value="recommender" placeholder="请输入推荐人" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">签约日期:</view>
				<view class="ordertype_value">
					<input type="text" :value="sign_date" placeholder="选择签约日期" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">举办日期:</view>
				<view class="ordertype_value">
					<input type="text" :value="wedding_date" placeholder="请选择举办日期" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">新人名字:</view>
				<view class="ordertype_value">
					<input type="text" :value="realname" placeholder="请输入新人名字" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">联系电话:</view>
				<view class="ordertype_value">
					<input type="text" :value="mobile" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">宴会厅:</view>
				<view class="ordertype_value">
					<input type="text" :value="banquet_hall" placeholder="请输入宴会厅信息" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">价格:</view>
				<view class="ordertype_value">
					<input type="text" :value="entire_price" placeholder="请输入价格" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">折扣:</view>
				<view class="ordertype_value">
					<input type="text" :value="discount" placeholder="请输入折扣" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">桌数:</view>
				<view class="ordertype_value">
					<input type="text" :value="table_amount" placeholder="请输入桌数" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">桌标:</view>
				<view class="ordertype_value">
					<input type="text" :value="table_price" placeholder="请输入桌标" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">酒水费用:</view>
				<view class="ordertype_value">
					<input type="text" :value="wine_fee" placeholder="请输入酒水费用" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">服务费:</view>
				<view class="ordertype_value">
					<input type="text" :value="service_fee" placeholder="请输入服务费" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">应收客人费用:</view>
				<view class="ordertype_value">
					<input type="text" :value="income_customer_fee" placeholder="请输入应收客人费用" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">收婚庆进场费:</view>
				<view class="ordertype_value">
					<input type="text" :value="income_wedding_celebration_admission_fee" placeholder="请输入收婚庆进场费" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">收入总额:</view>
				<view class="ordertype_value">
					<input type="text" :value="income_fee" placeholder="请输入收入总额" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">付酒店进场费:</view>
				<view class="ordertype_value">
					<input type="text" :value="pay_hotel_admission_fee" placeholder="请输入付酒店进场费" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">应付酒店费用:</view>
				<view class="ordertype_value">
					<input type="text" :value="pay_hotel_fee" placeholder="请输入应付酒店费用" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">平台渠道费用:</view>
				<view class="ordertype_value">
					<input type="text" :value="platform_source_fee" placeholder="请输入收婚庆进场费" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">个人渠道费用:</view>
				<view class="ordertype_value">
					<input type="text" :value="person_source_fee" placeholder="请输入个人渠道费用" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">其他费用:</view>
				<view class="ordertype_value">
					<input type="text" :value="other_source_fee" placeholder="请输入其他费用" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">红丝婚庆结算费:</view>
				<view class="ordertype_value">
					<input type="text" :value="hongsi_settlement_fee" placeholder="请输入红丝婚庆结算费" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">婚宴提成:</view>
				<view class="ordertype_value">
					<input type="text" :value="wedding_banquet_commission" placeholder="请输入婚宴提成" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">婚庆提成:</view>
				<view class="ordertype_value">
					<input type="text" :value="wedding_celebration_commission" placeholder="请输入婚庆提成" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">支出总额:</view>
				<view class="ordertype_value">
					<input type="text" :value="total_pay" placeholder="请输入支出总额" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">营收:</view>
				<view class="ordertype_value">
					<input type="text" :value="revenue" placeholder="请输入营收" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">毛利:</view>
				<view class="ordertype_value">
					<input type="text" :value="gross_profit" placeholder="请输入毛利" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">最终提成:</view>
				<view class="ordertype_value">
					<input type="text" :value="end_commission" placeholder="请输入最终提成" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">区域经理提成:</view>
				<view class="ordertype_value">
					<input type="text" :value="manager_commission" placeholder="请输入区域经理提成" />
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">区域经理引流提成:</view>
				<view class="ordertype_value">
					<input type="text" :value="manager_recommend_commission" placeholder="请输入区域经理引流提成" />
				</view>
			</view>
		</view>

		<view class="Submit">
			<text @click="createOrder">立即提交</text>
			<text>重置</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			let news_type = ['婚宴信息', '婚庆信息', '一站式'];
			return {
				member_id: 0,
				news_type: news_type,
				newsType: 0,
				sign_date: "",
				recommender:"",
				wedding_date:"",
				realname:"",
				mobile:"",
				banquet_hall:"",
				entire_price:"",
				discount:"",
				table_amount:"",
				table_price:"",
				wine_fee:"",
				service_fee:"",
				income_customer_fee:"",
				income_wedding_celebration_admission_fee:"",
				income_fee:"",
				pay_hotel_admission_fee:"",
				pay_hotel_fee:"",
				platform_source_fee:"",
				person_source_fee:"",
				other_source_fee:"",
				hongsi_settlement_fee:"",
				wedding_banquet_commission:"",
				wedding_celebration_commission:"",
				total_pay:"",
				revenue:"",
				gross_profit:"",
				end_commission:"",
				manager_commission:"",
				manager_recommend_commission:""
			}
		},
		
		onLoad(params) {
			this.member_id = params.member_id;
			this.getMember();
		},
		methods: {
			getMember() {
				let _this = this;
				let url = _this.$apis.customer.getCustomer;
				let params = {};
				params['token'] = _this.$getToken();
				params['id'] = _this.member_id;
				uni.request({
					url: url,
					method: 'POST',
					data: params,
					dataType: 'json',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					success: (res) => {
						let result = res.data;
						console.log(result);
						if (result.code == '200') {
							_this.realname = result.data.realname;
							_this.mobile = result.data.mobile;
						} else {
							uni.showToast({
								title: result.msg
							})
						}
					}
				})
			},
			//订单类型
			newsTypeChange(e) {
				this.newsType = e.detail.value;
			},
			createOrder(e) {
				let params = {};
				for(let i in this.$data) {
					params[i] = this.$data[i];
				}
				params['token'] = this.$getToken();
				console.log(params);
				let url = this.$apis.order.createOrder;
				uni.request({
					url: url,
					method: 'POST',
					data: params,
					dataType: 'json',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					success: (res) => {
						let result = res.data;
						console.log(result);
						if (result.code == '200') {
							uni.showToast({
								title: result.msg
							})
						} else {
							uni.showToast({
								title: result.msg,
								icon: 'none'
							})
						}
					}
				});
			}
		}
	}
</script>

<style>
	.pages {
		width: 100%;
		height: 100%;
		padding: 10px 10px;
		box-sizing: border-box;
		overflow: auto;
		background: #ffff;
		padding-bottom: 60px;
	}

	.msg {
		width: 100%;
		height: auto;
		border-radius: 5px;
		padding: 0px 0px;
		box-sizing: border-box;
		/* background: #f3f3f3; */
	}

	.ordertype {
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

	.ordertype text {
		display: flex;
		justify-content: right;
		float: right;
		display: inline-block;
		margin-right: 10px;
		
	}

	.ordertype input {
		float: right;
		display: flex;
		justify-content: right;
		text-align: right;
	}

	.ordertype_text {
		display: inline-block;
		width: 35%;
		line-height: 30px;
	}

	.ordertype_value {
		display: inline-block;
		width: 65%;
		padding: 5px 5px;
		box-sizing: border-box;
	}

	.ordertype_value input {
		text-align: right;
		width: 100%;
		padding-right: 10px;
		box-sizing: border-box;
		color: #9E9E9E;
	}

	.ordertype_value text {
		float: right;
		color: #9E9E9E;
	}

	.ordertype_value img {
		width: 15px;
		height: 15px;
		vertical-align: top;
		margin-top: 5px;
		text-align: right;
		float: right;
	}

	.Submit {
		position: fixed;
		width: 100%;
		bottom: 0px;
		padding: 10px 10px;
		text-align: center;
		display: flex;
		box-sizing: border-box;
		justify-content: space-around;
		background: #fff;
	}

	.Submit text {
		padding: 3px 3px;
		border: 1px solid #F2F2F2;
		margin: 0 10px;
		display: inline-block;
		width: 100px;
		background: #0CAAF0;
		border-radius: 20px;
	}

	.Submit text:first-child {
		background: #00B6F6;
		color: #fff;
	}

	.Submit text:nth-child(2) {
		color: #000;
		border: 1px #F8F8F8 solid;
		background: #F8f8f8;
	}
</style>
