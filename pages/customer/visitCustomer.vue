<template>
	<view class="pages">
		<view class="header_name">
			<view>客户姓名: {{customer.realname}}</view>
			<view>渠道: {{customer.source_text}}</view>
		</view>
		<view class="center_box">
			<view class="center_header">
				<text class="center_header_left">客户信息</text>
			</view>
			<view class="center_time">
				<text class="field">信息类型</text>
				<text class="dilimter">:</text>
				<view class="value">
					<picker mode="selector" @change="newsTypeFn" :value="newsType" :range="newsTypes">
						<view class="uni-input">{{newsTypes[newsType]}}</view>
					</picker>
				</view>
			</view>
			<view class="center_time">
				<text class="field">平台来源</text>
				<text class="dilimter">:</text>
				<view class="value">
					<picker @change="bindSourceChange" data-key="source_index" :value="source_index" :range="sources" range-key="title">
						<view class="uni-input">{{sources[source_index]['title']}}</view>
					</picker>
				</view>
			</view>
			<view class="center_time">
				<text class="field">推荐来源</text>
				<text class="dilimter">:</text>
				<view class="value">
					<input type="text" :value="recommender" data-key="recommender" @input="inputChange" @blur="blurChange" placeholder="请填写推荐来源" placeholder-style="font-size:24rpx;" />
				</view>
			</view>
			<view class="center_time">
				<text class="field">桌数</text>
				<text class="dilimter">:</text>
				<input type="text" :value="banquet_size" data-key="banquet_size" @input="inputChange" @blur="blurChange" placeholder="请输入桌数" />
			</view>
			<view class="center_time">
				<text class="field">预算</text>
				<text class="dilimter">:</text>
				<input type="text" :value="budget" data-key="budget" @input="inputChange" @blur="blurChange" placeholder="请输入预算" />
			</view>
			<view class="center_time">
				<text class="field">婚期</text>
				<text class="dilimter">:</text>
				<input type="text" :value="wedding_date" data-key="wedding_date" placeholder="例:2019-12-12/2019-12-12" />
			</view>
			<view class="center_time">
				<text class="field">输入酒店</text>
				<text class="dilimter">:</text>
				<input type="text" :value="hotel_text" data-key="hotel_text" @input="inputChange" @blur="blurChange" placeholder="请输入酒店" />
			</view>
			<view class="center_time">
				<text class="field">选择城市</text>
				<text class="dilimter">:</text>
				<view class="value">
					<picker @change="bindCityChange" data-key="city_index" :value="city_index" :range="cities" range-key="shortname">
						<view class="uni-input">{{cities[city_index]['shortname']}}</view>
					</picker>
				</view>
			</view>
			<view class="center_time">
				<text class="field">选择区域</text>
				<text class="dilimter">:</text>
				<view class="value">
					<picker @change="bindAreaChange" :value="area_index" :range="areas" range-key="shortname">
						<view class="uni-input">{{areas[area_index]['shortname']}}</view>
					</picker>
				</view>
			</view>
			<view class="center_time">
				<text class="field">修改区域</text>
				<text class="dilimter">:</text>
				<view class="value">
					<input type="text" :value="zone" data-key="zone" @input="inputChange" @blur="blurChange" placeholder="修改区域" placeholder-style="font-size:24rpx;" />
				</view>
			</view>
			<view class="center_time">
				<text class="field">客户姓名</text>
				<text class="dilimter">:</text>
				<input type="text" :value="realname" data-key="realname" @input="inputChange" @blur="blurChange" placeholder="输入客户姓名" placeholder-style="font-size:24rpx;" />
			</view>
			<view class="center_time">
				<text class="field">联系电话</text>
				<text class="dilimter">:</text>
				<text class="value">{{customer.mobile}}</text>
			</view>
		</view>
		<view class="center_box">
			<view class="center_header">
				<text class="center_header_left">跟进人员 ({{groupLength}})</text>
			</view>

			<!-- 跟进记录-->
			<view class="followMsg" v-for="item in group" v-bind:key="item.id">
				<view class="follow_date" style="letter-spacing: 2px;">回&nbsp;访&nbsp;者&nbsp;：{{item.user_id}}</view>
				<view class="follow_date" style="letter-spacing: 2px;">获取时间：{{item.allocate_create_time}}</view>
				<view class="follow_date" style="letter-spacing: 2px;">下次回访：{{item.next_visit_time}}</view>
				<view class="follow_date" style="letter-spacing: 2px;">回访次数：{{item.visit_times}}</view>
			</view>

		</view>
		<view class="center_box">
			<view class="center_header">
				<text class="center_header_left">跟进记录 ({{logs.length}})</text>
			</view>
			<!-- 跟进记录-->
			<view class="followMsg" v-for="log in logs" v-bind:key="log.id">
				<view class="follow_date">{{log.create_time}}</view>
				<view class="follow_main"><text>{{log.user_id}}</text></view>
				<view class="follow_main"><text>{{log.content}}</text></view>
				<view class="follow_main"><text style="letter-spacing: 2px;">跟进状态：{{log.status}}</text></view>
			</view>
		</view>

		<view class="bottommeiu">
			<view @click="toVisitCustomer">
				<view class="meiutext">
					<img src="../../commonimg/follow.png"></img>
					<text>写跟进</text>
				</view>
			</view>
			<view class="line"></view>
			<view class="meiuphone" @click="isLaberbox=true">
				<img src="../../commonimg/phone.png"></img>
				<text>电话</text>
			</view>
			<view class="line"></view>
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
	export default {
		data() {
			let newsTypes = ['婚宴信息','婚庆信息','一站式'];
			let sources = [{'title':'无'}];
			let cities = [{'shortname':'无'}];
			let areas = [{'shortname':'无'}];
			
			return {
				customer: {},
				logs: {},
				group: {},
				groupLength: 0,
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
				realname: ''
			}
		},
		onLoad(options) {
			this.getCustomerVisits(options.member_id);
			this.getBaseData();
		},
		methods: {
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
							for (var i in _this.group) {
								groupLength++
							}
							_this.groupLength = groupLength;

							_this.banquet_sizes = response.result.scales;
							console.log(_this.banquet_sizes);
							// _this.budgets = response.result.budgets;
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
				uni.navigateTo({
					url: 'doVisitCustomer?member_id=' + _this.customer.id + '&realname=' + _this.realname
				})
			},
			createOrder(e){
				 uni.navigateTo({
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
			}
		}
	}
</script>

<style>
	.pages {
		width: 100%;
		box-sizing: border-box;
		margin-bottom: 60px;
		background: #FFFFFF;
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
		padding: 5px 20px;
		box-sizing: border-box;
		border-bottom: 1px solid #CCCCCC;
		margin-bottom: 20px;
	}

	.center_box {
		width: 96%;
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

	.meiutext {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5px;
		padding-left: 20px;
		box-sizing: border-box;
		font-size: 12px;
	}

	.meiutext img {
		width: 25px;
		height: 25px;

	}

	.meiuphone {
		margin-top: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-right: 23px;
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
