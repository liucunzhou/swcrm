<template>
	<view class="pages">
		<view class="header_box">
			<view class="header_back" @click="goBack()">
				<img @click="goBack()" src="../../commonimg/fanhui.png"></img>
			</view>
			<view class="header_all">
				<text>回访详情</text>
			</view>
			<!-- <view class="header_search" @tap="edit">编辑</view> -->
		</view>
		
		<view class="header_name">
			<view>客户姓名: {{customer.realname}}</view>
			<view>客资渠道: {{customer.source_text}}</view>
		</view>
		<view class="center_box">
			<view class="center_header uni-flex ">
				<text class="center_header_left">客户信息</text>
			</view>
			<view class="center_time">
				<text class="field">信息类型</text>
				<text class="dilimter">:</text>
				<text class="value">{{newsTypes[newsType]}}</text>
			</view>
			
			<view class="center_time">
				<text class="field">桌数</text>
				<text class="dilimter">:</text>
				<text class="value">{{customer['banquet_size']}}</text>
			</view>
			
			<view class="center_time">
				<text class="field">预算</text>
				<text class="dilimter">:</text>
				<text class="value">{{customer['budget']}}</text>
			</view>
			
			<view class="center_time">
				<text class="field">婚期</text>
				<text class="dilimter">:</text>
				<text class="value">{{customer['wedding_date']}}</text>
			</view>
			
			<view class="center_time">
				<text class="field">输入酒店</text>
				<text class="dilimter">:</text>
				<text class="value">{{customer['hotel_text']}}</text>
			</view>
			<view class="center_time">
				<text class="field">选择城市</text>
				<text class="dilimter">:</text>
				<text class="value">{{cities[city_index]['shortname']}}</text>
			</view>
			<view class="center_time">
				<text class="field">选择区域</text>
				<text class="dilimter">:</text>
				<text class="value">{{areas[area_index]['shortname']}}</text>
			</view>
			<view class="center_time">
				<text class="field">客户姓名</text>
				<text class="dilimter">:</text>
				<text class="value">{{customer.realname}}</text>
			</view>
			<view class="center_time">
				<text class="field">联系电话</text>
				<text class="dilimter">:</text>
				<text class="value">{{customer.mobile}}</text>
			</view>
		</view>
		
		<view class="tab_box">
			<view class="center_box">
				<view class="center_header">
					<text class="center_header_left" :class="{active:!visit_nav_index}" @click="visit_nav_index=0">跟进人员 ({{groupLength}})</text>
					<text class="center_header_right" :class="{active:visit_nav_index}" @click="visit_nav_index=1">跟进记录 ({{logsLength}})</text>
				</view>
				
				<view class="tab_content">
					<template v-if="visit_nav_index==0">
						<!-- 跟进记录-->
						<view class="followMsg" v-for="item in group" v-bind:key="item.id">
							<view class="follow_date" style="letter-spacing: 2px;">回&nbsp;访&nbsp;者&nbsp;：{{item.user_id}}</view>
							<view class="follow_date" style="letter-spacing: 2px;">获取时间：{{item.allocate_create_time}}</view>
							<view class="follow_date" style="letter-spacing: 2px;">下次回访：{{item.next_visit_time}}</view>
							<view class="follow_date" style="letter-spacing: 2px;">回访次数：{{item.visit_times}}</view>
						</view>
					</template>
					
					<!-- 跟进记录-->
					<template v-if="visit_nav_index==1">
						<view class="followMsg" v-for="log in logs" v-bind:key="log.id">
							<view class="follow_date">{{log.create_time}}</view>
							<view class="follow_main"><text>{{log.user_id}}</text></view>
							<view class="follow_main"><text>{{log.content}}</text></view>
							<view class="follow_main"><text style="letter-spacing: 2px;">跟进状态：{{log.status}}</text></view>
						</view>
					</template>
				</view>
			</view>
		</view>

		<view class="bottommeiu">
			<view @click="toVisitCustomer">
				<view class="meiutext">
					<img src="../../commonimg/follow.png"></img>
					<text>写跟进</text>
				</view>
			</view>
			<view class="meiuphone" @click="isLaberbox=true">
				<img src="../../commonimg/phone.png"></img>
				<text>电话</text>
			</view>
			<view @click="createOrder">
				<view class="meiutext">
					<img src="../../commonimg/follow.png"></img>
					<text>申请成单</text>
				</view>
			</view>
		</view>
		
		<view class="laberbox" v-if="isLaberbox" @click="boxFn()">
			<view class="laberbox_box">
				<view class="boxtext" @click="bianPhone">
					<text> {{customer.mobile}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import dingtalk from '@/dingtalk.open.js';
	let platform = dingtalk.env.platform;
	
	export default {
		data() {
			let newsTypes = ['婚宴信息','婚庆信息','一站式'];
			let sources = [{'title':'无'}];
			let cities = [{'shortname':'无'}];
			let areas = [{'shortname':'无'}];
			
			return {
				id:null,
				customer: {},
				logs: {},
				group: {},
				groupLength: 0,
				logsLength: 0,
				isLaberbox: false,
				
				newsType: 0,
				newsTypes: newsTypes,
				source_index: 0,
				sources: sources,
				recommender: '',

				banquet_size: '',
				budget: '',
				wedding_date: '',

				hotel_text: '',
				city_index: 0,
				cities: cities,
				area_index: 0,
				areas: areas,
				zone: '',
				realname: '',
				
				visit_nav_index: 0
			}
		},
		onLoad(options) {
			this.id = options.member_id
			this.getCustomerVisits(options.member_id);
			this.getBaseData();
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
		methods: {
			edit(){
				uni.redirectTo({
				    url: '/pages/customer/edit'  
				});
			},
			getCustomerVisits(member_id) {
				let _this = this;
				let url = _this.$apis.visit.visitCustomer;
				let params = {
					member_id: member_id,
					token: this.$getToken()
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
						console.log('结果是:', response.result.customer);
						if (response.code == '200') {
							_this.customer = response.result.customer;
							for(let i in _this.customer) {
								if(_this.customer[i] !== null) {
									console.log(_this.customer[i],typeof _this.customer[i]);
									_this[i]= _this.customer[i];
								} else {
									_this[i] = '';
								}
							}
						
							_this.group = response.result.visits.count;
							_this.logs = response.result.visits.log;

							let groupLength = 0;
							for (let i in _this.group) {
								groupLength++
							}
							_this.groupLength = groupLength;
							
							let logsLength = 0;
							for (let i in _this.logs) {
								logsLength++
							}
							_this.logsLength = logsLength;
							
							_this.banquet_sizes = response.result.scales;
							_this.hotels = response.result.hotels;

						} else {
							uni.showToast({
								title: result.msg
							})
						}
					}
				})
			},
			bindChange: function(e) {
				const val = e.detail.value
				this.year = this.years[val[0]]
				this.month = this.months[val[1]]
				this.day = this.days[val[2]]
			},
			getBaseData() {
				let _this = this;
				let url = _this.$apis.customer.getBaseData;
				let token = this.$getToken();
				let params = {
					token: token
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
						let result = res.data;
						if (result.code == '0') {
							_this.newsTypes = result.data.news_types;
							_this.sources = result.data.sources;
							_this.cities = result.data.cities;
							_this.city_index = result.data.city_index;
							_this.areas = result.data.areas;
						} else {
							uni.showToast({
								title: result.msg
							})
						}
					}
				})
			},
			boxFn(e) {
				this.isLaberbox = false
			},
			bianPhone(e) {
			
				let mobile = this.customer.mobile;
				console.log(mobile);
				window.event.stopPropagation()
				uni.makePhoneCall({
					phoneNumber: mobile
				});
			},
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				const value = e.detail.value;
				this[key] = value;
			},
			blurChange(e) {
				const key = e.currentTarget.dataset.key;
				const value = e.detail.value;
				this[key] = value;
				if(value != '')
					this.editCustomer(key,value);
			},
			// 信息类型
			newsTypeFn(e) {
				let index = e.detail.value;
				this.newsType = index;
				this.newsTypeText = this.newsTypes[index];
			},
			// 绑定日期
			bindDateChange(e) {
				let wedding_date = e.detail.value;
				this.wedding_date = wedding_date;
			},
			bindSourceChange(e) {
				console.log('value is', e.detail.value);
				let source_index = e.detail.value;
				this['source_index'] = source_index;
				
			},
			bindCityChange(e) {
				console.log(e);
				let city_index = e.detail.value;
				this['city_index'] = city_index;
				
			},
			bindAreaChange(e) {
				let area_index = e.detail.value;
				this['area_index'] = area_index;
				
				console.log(this['areas']);
				let text = this['areas'][area_index]['shortname'];
					
				let zoneStr = this['zone'];
				if (zoneStr == '') {
					zoneStr = text;
				} else {
					let zoneArr = zoneStr.split(',');
					if (zoneArr.indexOf(text) == -1) {
						zoneArr.push(text);
					}
					zoneStr = zoneArr.join();
				}
				this['zone'] = zoneStr;
			},
			toVisitCustomer(e) {
				let _this = this;
				uni.redirectTo({
					url: 'dovisit?member_id=' + _this.customer.id + '&realname=' + _this.realname
				})
			},
			createOrder(e){
				 uni.redirectTo({
				 	url: '../order/createOrder?member_id=' + this.customer.id
				 })
			},
			editCustomer(field, value) {
				let _this = this;
				let url = _this.$apis.customer.editCustomer;
				let token = this.$getToken();
				let params = {
					token: token,
					id: _this.customer.id,
					[field]:value
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
						let result = res.data;
						if (result.code == '0') {
							console.log(res);
						} else {
							uni.showToast({
								title: result.msg
							})
						}
					}
				})
			},
			//返回上一页
			goBack() {
				uni.navigateBack({
					delta: 0
				});
			}
		}
	}
</script>

<style>
	.pages {
		width: 100%;
		box-sizing: border-box;
		background: #FFFFFF;
		padding: 0 12px 66px;
	}
		
	.header_box {
		position: fixed;
		display: flex;
		left: 0px;
		top: 0px;
		width: 100%;
		height: 42px;
		padding: 10px 0px 0px 0px;
		z-index: 10;
		background: #FFFFFF;
		color: #00000;
		box-sizing: border-box;
	}

	.header_back {
		flex: 0 38rpx;
		padding-left: 16rpx;
	}

	.header_back img {
		width: 100%;
		height: auto;
		vertical-align: middle;
		transform: rotate(180deg);
	}

	.header_all {
		flex: 1;
		height: 30px;
		text-align: center;
	}

	.header_allimg {
		margin-left: 10px;
		width: 15px;
		height: auto;
		transform: rotate(270deg);
		vertical-align: middle;
	}

	.header_allimgs {
		margin-left: 10px;
		width: 15px;
		height: auto;
		transform: rotate(90deg);
		vertical-align: middle;
	}

	.header_search {
		flex: 0 2rem;
		padding: 0 16rpx;
	}

		
	.center_edit{
		padding:0 20rpx;
		border:1px solid white;
		border-radius: 15rpx;
	}
	
	.phone_box {
		position: fixed;
		right: 0;
		top: 70%;
		width: 50px;
		height: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.phone_box_follow {
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	.phone_box_follow img {
		width: 30px;
		height: 30px;
	}

	.phone_box_phone img {
		width: 30px;
		height: 30px
	}

	.phone_box_phone {
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	.header_name {
		width: 100%;
		padding: 42px 20px 6px;
		box-sizing: border-box;
		border-bottom: 1px solid #CCCCCC;
		margin-bottom: 20px;
	}

	.center_box {
		width: 100%;
		height: auto;
		background: #F8F8F8;
		border-radius: 6px;
		margin: 10px auto;
		overflow: hidden;
	}

	.center_header {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		border-bottom: 1px solid #ccc;
		clear: both;
		overflow: auto;
		justify-content: space-between;
	}
	.center_header_left {
		box-sizing: border-box;
		padding: 5px 15px;
		height: #000000;
		width: 50%;
		float: left;
		letter-spacing: 2px;
	}
	.center_header_right {
		box-sizing: border-box;
		padding: 5px 15px;
		color: #000000;
		width: 50%;
		float: right;
		letter-spacing: 2px;
	}
	.center_header .active {
		color: #fff;
		background: #0caaf0;
	}
	.center_time {
		padding: 0px 15px;
		display: flex;
		justify-content: left;
		align-items: center;
	}

	.center_time text.field {
		flex: 0 4rem;
		font-size: 14px;
		color: #91989c;
		vertical-align: top;
		text-align: justify;
		text-align-last: justify;
	}

	.center_time text.dilimter {
		flex: 0 8rpx;
	}

	.center_time text.value,
	.center_time text.form-item,
	.center_time input {
		flex: 1;
		font-size: 14px;
		color: #91989c;
		padding-left: 8px;
	}

	.center_time .uni-input {
		background: #F8F8F8;
	}

	.center_time text {
		line-height: 30px;
		display: inline-block;
	}

	.center_time:last-child {
		border-bottom: none;
	}

	.followMsg {
		padding: 7px 10px;
		color: #91989c;
		border-bottom: 1px solid #dedede;
	}

	.name_tatus {
		clear: both;
		overflow: auto;
	}

	.name_tatus text:first-child {
		float: left;
	}

	.name_tatus text:last-child {
		float: right;
	}

	.bottommeiu {
		width: 100%;
		height: 60px;
		position: fixed;
		bottom: 0px;
		left: 0px;
		border: 1px solid #F2F2F2;
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
		background: #fff;

	}
	
	.bottommeiu > view{
		flex: 1;
		border-right: 1px solid #DEDEDE;
		text-align: center;
		padding-top: 5px;
	}
	.bottommeiu > view:last-child{
		border: none;
		vertical-align: middle;
	}

	.meiutext {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5px;
		box-sizing: border-box;
		font-size: 12px;
	}

	.meiutext img {
		width: 25px;
		height: 25px;
	}

	.meiuphone {
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		font-size: 12px;
	}

	.meiuphone img {
		width: 25px;
		height: 25px;

	}

	.line {
		width: 1px;
		height: 60px;
		background: #F2F2F2;
	}

	.laberbox {
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0px;
		top: 0px;
		background: rgba(0, 0, 0, .3);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.laberbox_box {
		width: 200px;
		height: auto;
		padding-bottom: 20px;
		background: #fff;
		padding: 10px 10px;
		box-sizing: border-box;
		border-radius: 20px;
		overflow: scroll;
	}



	.boxtext {
		color: #0CAAF0;
		display: flex;
		justify-content: center;
		border-bottom: 1px solid #F2F2F2;
		line-height: 45px;
		font-size: 15px;
	}

	.boxtext:last-child {
		border: none;
	}
</style>