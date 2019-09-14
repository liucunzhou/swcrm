<template>
	<view class="pages">
		<view class="msg">
			<view class="ordertype">
				<view class="ordertype_text">信息类型:</view>
				<view class="ordertype_value">
					<picker mode="selector" @change="newsTypeFn" :range="newsTypes">
						<img src="../../commonimg/fanhui.png" />
						<text>{{ newsTypeText }}</text>
					</picker>
				</view>
			</view>
			<view class="ordertype">
				<text class="ordertype_text">平台来源:</text>
				<view class="ordertype_value">
					<picker @change="bindSourceChange" data-key="source_index" :value="source_index" :range="sources" range-key="title">
						<view class="uni-input">{{ sources[source_index]['title'] }}</view>
					</picker>
				</view>
			</view>
			<view class="ordertype source">
				<text class="ordertype_text">平台来源:</text>
				<view class="ordertype_value">
					<!-- <picker @change="bindSourceChange" data-key="source_index" :value="source_index" :range="sources" range-key="title">
						<view class="uni-input">{{sources[source_index]['title']}}</view>
					</picker> -->
					<view>
						<input type="text" style="border:1px solid red" @input="selectInput" @focus="select" @blur="noSelect" placeholder="请输入或者选择平台" />
						<scroll-view scroll-y show-scrollbar v-if="sourceDisplay">
							<block v-for="(item, index) in sources">
								<view class="scroll-item" v-show="!item.no">{{ item['title'] }}</view>
							</block>
							<view class="scroll-item" style="text-align: center;" v-show="!sourcesNum">没有匹配的内容</view>
						</scroll-view>
					</view>
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">新人名字:</view>
				<view class="ordertype_value"><input type="text" :value="realname" data-key="realname" @input="inputChange" placeholder="请填写新人姓名" /></view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">联系电话:</view>
				<view class="ordertype_value"><input type="text" :value="mobile" data-key="mobile" @input="inputChange" placeholder="联系电话" /></view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">选择城市:</view>
				<view class="ordertype_value">
					<picker @change="bindCityChange" data-key="city_index" :value="city_index" :range="cities" range-key="shortname">
						<view class="uni-input">{{ cities[city_index]['shortname'] }}</view>
					</picker>
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">所在区域:</view>
				<view class="ordertype_value">
					<picker @change="bindAreaChange" :value="area_index" :range="areas" range-key="shortname">
						<view class="uni-input">{{ areas[area_index]['shortname'] }}</view>
					</picker>
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">所选区域:</view>
				<view class="ordertype_value"><input type="text" :value="zone" data-key="zone" @input="inputChange" placeholder="选择区域" /></view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">选择酒店:</view>
				<view class="ordertype_value"><input type="text" :value="hotel_text" data-key="hotel_text" @input="inputChange" placeholder="填写酒店" /></view>
			</view>

			<view class="ordertype">
				<view class="ordertype_text">桌数:</view>
				<view class="ordertype_value"><input type="text" :value="banquet_size" data-key="banquet_size" @input="inputChange" placeholder="请填写桌数" /></view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">预算:</view>
				<view class="ordertype_value"><input type="text" :value="budget" data-key="budget" @input="inputChange" placeholder="请填写预算" /></view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">举办日期:</view>
				<view class="ordertype_value">
					<picker mode="date" :value="wedding_date" start="2015-09-01" end="2119-09-01" @change="bindDateChange">
						<view class="picker">{{ wedding_date }}</view>
					</picker>
				</view>
			</view>
			<view class="ordertype">
				<view class="ordertype_text">备注:</view>
				<view class="ordertype_value"><input type="text" :value="remark" data-key="remark" @input="inputChange" placeholder="请填写备注" /></view>
			</view>
		</view>

		<view class="Submit">
			<text @click="submit">立即提交</text>
			<text>重置</text>
		</view>
	</view>
</template>

<script>
import dingtalk from '@/dingtalk.open.js';
let platform = dingtalk.env.platform;

export default {
	data() {
		let newsTypes = ['婚宴信息', '婚庆信息', '一站式'];
		let today = new Date().toLocaleDateString();
		today = today.replace(/\//g, '-');
		let sources = [{ title: '无' }];
		let cities = [{ shortname: '无' }];
		let areas = [{ shortname: '无' }];

		return {
			recommender: '',
			realname: '',
			mobile: '',
			banquet_size: '',
			budget: '',
			newsType: 0,
			newsTypeText: '婚宴信息',
			newsTypes: newsTypes,

			source_text: '',
			source_index: 0,
			sources: sources,

			wedding_date: today,
			hotel_text: '',
			city_index: 0,
			cities: cities,
			area_index: 0,
			areas: areas,
			zone: '',
			remark: '',

			//平台来源相关数据
			sourceDisplay: 0,
			selectIndex: 0,
			sourcesNum:1
		};
	},
	created() {},
	onLoad(e) {
		console.log(e);
		if (e.customer) {
			let customer = JSON.parse(e.customer);
			console.log(customer);
			(this.newsType = customer.news_type),
				(this.source_id = customer.source_id),
				(this.realname = customer.realname),
				(this.mobile = customer.mobile),
				// this.cities[city_index]['id'] = customer.city_id,
				(this.zone = customer.zone),
				(this.hotel_text = customer.hotel_text),
				(this.banquet_size = customer.banquet_size),
				(this.budget = customer.budget),
				(this.wedding_date = customer.wedding_date),
				(this.remark = customer.remark);
		}
		this.getBaseData();
	},
	onShow() {
		if (platform != 'notInDingTalk') {
			dingtalk.ready(function() {
				dingtalk.biz.navigation.hideBar({
					hidden: true,
					onSuccess: function(result) {},
					onFail: function(err) {}
				});
			});
		}
	},
	methods: {
		select() {
			console.log(1);
			this.sourceDisplay = 1;
		},
		noSelect() {
			console.log(2);
			this.sourceDisplay = 0;
		},
		selectInput(e) {
			let value = e.detail.value;
			let sources = this.sources;
			let sourcesNum = 0;
			//筛选
			let list = sources.filter(function(e, index, arr) {
				//查找字符串
				let check = e.title.search(value);
				//增加标识符
				if (check >= 0) {
					console.log('+++');
					e.no = 0;
					sourcesNum++
				} else {
					console.log('+++1');
					e.no = 1;
				}
				return e;
			});
			this.sourcesNum = sourcesNum
			this.sources = list;
		},
		selectItem(e) {
			let index = e.currentTarget.dataset.index;
			this.selectIndex = index;
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
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
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
						});
					}
				}
			});
		},
		inputChange(e) {
			const key = e.currentTarget.dataset.key;
			this[key] = e.detail.value;
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
			this.source_index = source_index;
		},
		bindCityChange(e) {
			let _this = this;
			let city_index = e.detail.value;
			_this['city_index'] = city_index;
			let city = this.cities[city_index];

			let url = _this.$apis.region.getAreaList;
			let token = this.$getToken();
			let params = {
				token: token,
				id: city.id
			};
			uni.request({
				url: url,
				method: 'POST',
				data: params,
				dataType: 'json',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					let result = res.data;
					if (result.code == '0') {
						_this.areas = result.data;
						_this.area_index = 0;
					} else {
						uni.showToast({
							title: result.msg
						});
					}
				}
			});
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
		submit() {
			let _this = this;
			let url = _this.$apis.customer.createCustomer;
			let source_index = _this.source_index;
			let mobile = _this.mobile;
			if (mobile == '') {
				console.log(mobile);
				uni.showToast({
					title: '请输入正确的手机号',
					icon: 'none'
				});

				return false;
			}
			let city_index = _this.city_index;
			let source_id = _this.sources[source_index].id;
			let params = {
				token: _this.$getToken(),
				news_type: _this.newsType,
				source_id: source_id,
				realname: _this.realname,
				mobile: _this.mobile,
				city_id: _this.cities[city_index]['id'],
				zone: _this.zone,
				hotel_text: _this.hotel_text,
				banquet_size: _this.banquet_size,
				budget: _this.budget,
				wedding_date: _this.wedding_date,
				remark: _this.remark
			};
			uni.request({
				url: url,
				method: 'POST',
				data: params,
				dataType: 'json',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					let result = res.data;
					if (result.code == '0') {
						uni.navigateTo({
							url: 'mine?page_title=我的客资'
						});
					} else {
						uni.showToast({
							title: result.msg
						});
					}
				}
			});
		}
	}
};
</script>

<style>
.source {
	position: relative;
}
.source scroll-view {
	position: absolute;
	/* border:1px solid  black; */
	/* border-top:none; */
	border-radius: 15rpx;
	top: 80rpx;
	width: 500rpx;
	background: rgba(0, 182, 246, 1);
	color: white;
	z-index: 888;
	display: block;
	max-height: 466rpx;
}
.scroll-item {
	width: 450rpx;
	margin: 0 auto;
	line-height: 1.8rem;
	border-bottom: 1px solid rgb(240, 240, 240);
	padding-right: 10rpx;
	/* border-bottom:1px solid gray; */
}
.pages {
	width: 100%;
	height: 100%;
	padding: 10px 10px;
	box-sizing: border-box;
	overflow: auto;
	background: #ffff;
}

.msg {
	width: 100%;
	height: auto;
	border-radius: 5px;
	padding-bottom: 40px;
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
	border-bottom: 1px solid #f2f2f2;
	box-shadow: 1px 1px 1px #f8f8f8;
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
	width: 20%;
	line-height: 30px;
}

.ordertype_value {
	display: inline-block;
	width: 79%;
	padding: 5px 5px;
	box-sizing: border-box;
	text-align: right;
}

.ordertype_value input {
	text-align: right;
	width: 100%;
	padding-right: 10px;
	box-sizing: border-box;
	color: #9e9e9e;
}

.ordertype_value text {
	float: right;
	color: #9e9e9e;
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
}

.Submit text {
	padding: 3px 3px;
	border: 1px solid #f2f2f2;
	margin: 0 10px;
	display: inline-block;
	width: 100px;
	background: #0caaf0;
	border-radius: 20px;
}

.Submit text:first-child {
	background: #00b6f6;
	color: #fff;
}

.Submit text:nth-child(2) {
	color: #000;
	border: 1px #f8f8f8 solid;
	background: #f8f8f8;
}

.uni-input {
	padding: 0 24rpx;
}
</style>
