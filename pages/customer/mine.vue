<template>
	<view class="pages">
		<view class="header_box">
			<view class="header_back" @click="goBack()">
				<img @click="goBack()" src="../../commonimg/fanhui.png"></img>
			</view>
			<view class="header_all" @click="showAllcusListFn">
				<text>{{allList[allcusListIndex]}}
					<img class="header_allimg" v-if="isAllList" src="../../commonimg/fanhui.png"></img>
					<img class="header_allimgs" v-else src="../../commonimg/fanhui.png"></img>
				</text>
			</view>
		</view>
		<!-- 全部客户弹框 -->
		<view class="allcusList" @click="closeAllcusListFn" v-if="isAllList">
			<view class="allcusList_box">
				<view v-for="(item,index) in allList" :key="index" @click.stop="allcusListFn(index)" :class="['allcusList_main',allcusListIndex==index?'activeallcusList_main':'']">
					<text>{{item}}</text><text v-if="allcusListIndex==index">✓</text>
				</view>
			</view>
		</view>

		<view class="topmuie">
			<view class="screen" @click="isTopmuie=!isTopmuie">
				<text>筛选
					<img class="screen_allimgs" v-if="isTopmuie" src="../../commonimg/fanhui.png"></img>
					<img class="screen_allimg" v-else src="../../commonimg/fanhui.png"></img>
				</text>
			</view>
			<view class="seek">
				<img src="../../commonimg/findminimg.png"></img>
				<input type="text" placeholder-style="font-size:13px" value="" placeholder="搜索" />
			</view>
		</view>
		<!-- 筛选弹框 -->
		<view class="topmuieFixed" @click="isTopmuie=false" v-if="isTopmuie">
			<view class="topmuieFixed_main">
				<view class="topmuieFixed_box">
					<view class="topmuieFixed_left">
						<text @click.stop="topmuieLeft(index)" :class="topmuieLeftIndex===index?'topmuieFixed_lefttext':''" v-for="(item,index) in topmuieFixed_left"
						 :key="index">{{item}}</text>
					</view>
					<view class="topmuieFixed_right">
						<template v-if="topmuieFixed_righttext!=''">
							<text @click.stop="topmuieRight(index)" :class="topmuieRightIndex===index?'topmuieFixed_righttext':''" v-for="(item,index) in topmuieFixed_righttext"
							 :key="index">{{item.title}}</text>
						</template>
						<template v-if="topmuieLeftIndex===3||topmuieLeftIndex===4||topmuieLeftIndex===5||topmuieLeftIndex===6">
							<text @click.stop="topmuieRight(index)" :class="topmuieRightIndex===index?'topmuieFixed_righttext':''" v-for="(item,index) in topmuieFixed_rightDate"
							 :key="index">{{item}}</text>
						</template>
					</view>
				</view>
				<view class="clocedtime" v-if="topmuieRightIndex===8">
					<picker mode="date" :value="startdate" @change="startDateChange">
						<view class="uni-input"><text>开始时间:{{startdate}}</text></view>
					</picker>
					<picker mode="date" :value="enddate" @change="endDateChange">
						<view class="uni-input"><text>结束时间:{{enddate}}</text></view>
					</picker>
				</view>
				<view class="topmuieFixed_setting">
					<text @click.stop="emptyFn">清空</text>
					<text @click.stop="makeSure">确定</text>
				</view>
			</view>
		</view>

		<view class="msg" v-for="(customer,index) in customers" v-bind:key="customer.id">
			<text class="msgtopright">{{index+1}}</text>
			<view @click="navToCustomer(customer.member_id)">
				<view class="msg_header">
					<view class="header_left">
						<text class="names">姓名： </text><text class="namemain">{{customer.realname}}</text>
					</view>
				</view>
				<view class="msg_text">
					<text class="names">预算：</text> <text class="namemain">{{customer.budget}}</text>
				</view>
				<view class="msg_text">
					<text class="names">桌数：</text> <text class="namemain">{{customer.banquet_size}}</text>
				</view>
				<view class="msg_text">
					<text class="names">酒店：</text> <text class="namemain">{{customer.hotel_text}}</text>
				</view>
				<view class="msg_text">
					<text class="names">区域：</text> <text class="namemain">{{customer.zone}}</text>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customers: [],
				allList: [
					"全部客户",
					"我的客户",
					"我的下属客户"
				],
				allcusListIndex: 0,
				isAllList: false, //是否显示全部客户弹框
				isTopmuie: false, //筛选弹框
				topmuieFixed_left: [
					"跟进状态",
					"客户来源",
					"负责人",
					"实际跟进时间",
					"下次跟进时间",
					"创建时间",
					"更新于",
				],
				topmuieFixed_rightDate: [
					"不限",
					"无",
					"今天",
					"明天",
					"本周",
					"下周",
					"本月",
					"下月",
					"自定义:2019/08/20-2019/08/20",
				],
				topmuieFixed_righttext: [], //筛选右边数据
				topmuieLeftIndex: 0,
				topmuieRightIndex: 0,
				startdate: "", //开始时间
				enddate: "", //结束时间
				getBaseDatas: {}, //筛选数据
			}
		},
		created() {
			//请求筛选信息
			this.getBaseData()
		},
		onLoad(params) {
			uni.setNavigationBarTitle({
				title: params.page_title
			})
			this.getCustomerList(params);
		},
		methods: {
			getCustomerList(params) {
				let _this = this;
				let url = _this.$apis.customer.mine;
				params['token'] = this.$getToken();
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
						if (result.code == '0') {
							_this.customers = result.data;
						} else {
							uni.showToast({
								title: result.msg
							})
						}
					}
				})
			},

			navToCustomer(memberId) {
				uni.navigateTo({
					url: `visitCustomer?member_id=${memberId}`
				})
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
							this.getBaseDatas = result.data;
							this.topmuieFixed_righttext = this.getBaseDatas.statuses;
							// 信息类型
							_this.newsTypes = result.data.news_types;
							// 来源
							_this.sources = result.data.sources;
							_this.cities = result.data.cities;
							// 跟进状态
							_this.statuses = result.data.statuses;
							// 负责人
							_this.staffes = result.data.staffes;

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
			},
			//全部客户切换
			allcusListFn(index) {

				this.allcusListIndex = index;

			},
			//显示全部客户弹框
			showAllcusListFn() {
				this.isAllList = !this.isAllList;
			},
			//关闭全部客户弹框
			closeAllcusListFn() {
				this.isAllList = !this.isAllList
			},
			//筛选左边点击
			topmuieLeft(index) {
				this.topmuieLeftIndex = index;
				this.topmuieRightIndex = 0;
				if (index == 0) {
					this.topmuieFixed_righttext = this.getBaseDatas.statuses;
				}
				if (index == 1) {
					this.topmuieFixed_righttext = this.getBaseDatas.sources;
				}
				if (index == 2) {
					this.topmuieFixed_righttext = this.getBaseDatas.staffes;
				}
				if (index == 3) {
					this.topmuieFixed_righttext = '';
				}
				if (index == 4) {
					this.topmuieFixed_righttext = '';
				}

				if (index == 5) {
					this.topmuieFixed_righttext = '';
				}
				if (index == 6) {
					this.topmuieFixed_righttext = '';
				}
			},
			//筛选右边点击
			topmuieRight(index) {
				this.topmuieRightIndex = index;
			},
			// 清空
			emptyFn() {
				this.topmuieLeftIndex = '';
				this.topmuieRightIndex = '';
			},
			//开始时间
			startDateChange(e) {
				this.startdate = e.detail.value
			},
			//结束时间
			endDateChange(e) {
				this.enddate = e.detail.value
			}
		}
	}
</script>

<style>
	.pages {

		width: 100%;
		height: 100%;
		padding: 90px 12px 30px 12px;
		box-sizing: border-box;
		overflow: auto;
		position: relative;
		background: #0CAAF0;
	}

	.header_box {
		position: fixed;
		left: 0px;
		top: 0px;
		width: 100vw;
		height: 42px;
		padding: 10px 0px 0px 0px;
		box-sizing: border-box;
		z-index: 10;
		background: #FFFFFF;
		color: #00000;
	}

	.header_back {
		width: 7%;
		display: inline-block;
	}

	.header_back img {
		width: 100%;
		height: auto;
		vertical-align: middle;
		transform: rotate(180deg);
	}

	.header_all {
		display: inline-block;
		width: 89%;
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

	.allcusList {
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, .2);
		position: fixed;
		top: 40px;
		left: 0px;
		z-index: 10;

	}

	.allcusList_box {
		width: 100%;
		height: auto;
		background: #FFFFFF;
	}

	.allcusList_main {
		padding: 0px 30px;
		box-sizing: border-box;
		width: 100%;
		height: auto;
		line-height: 35px;
		border-bottom: 1px solid #F2F2F2;
		display: flex;
		justify-content: space-between;
	}

	.allcusList_main:last-child {
		border: none
	}

	.activeallcusList_main {
		color: #0CAAF0;
	}




	.topmuie {
		background: #FFFFFF;
		width: 100%;
		height: 80px;
		padding-top: 40px;
		box-sizing: border-box;
		position: fixed;
		top: 0px;
		left: 0px;
		border-bottom: 1px solid #F4F4F4;
		z-index: 4;
	}

	/* 筛选弹框 */
	.topmuieFixed {
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, .3);
		position: fixed;
		top: 80px;
		left: 0;
		z-index: 4;
	}

	.topmuieFixed_main {
		width: 100%;
		height: auto;
		background: #FFFFFF;
	}

	.topmuieFixed_box {
		width: 100%;
		height: auto;
		clear: both;
		overflow: hidden;
	}

	.topmuieFixed_left {
		width: 50%;
		height: 280px;
		overflow: scroll;
		float: left;
		background: #F8F8F8;
		display: flex;
		flex-direction: column;
		align-items: left;
		box-sizing: border-box;
	}

	.topmuieFixed_left text {
		line-height: 40px;
		padding-left: 10px;
	}

	.topmuieFixed_lefttext {
		line-height: 30px;
		background: #FFFFFF;
		color: #0CAAF0;
	}

	.topmuieFixed_right {
		width: 50%;
		height: 280px;
		overflow: scroll;
		float: right;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.topmuieFixed_right text {
		line-height: 30px;
		font-size: 10px;
	}

	.topmuieFixed_righttext {
		color: #0CAAF0;
	}

	.clocedtime {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
	}

	.topmuieFixed_setting {
		width: 100%;
		height: 40px;
		background: #FFFFFF;
		border-top: 1px #f2f2ff2 solid;
		font-size: 16px;
		display: flex;
		justify-content: space-evenly;
		line-height: 40px;
		box-sizing: border-box;
	}

	.topmuieFixed_setting text {
		width: 50%;
		display: inline-block;
		text-align: center;
	}

	.topmuieFixed_setting text:first-child {
		border-right: 1px solid #F2F2F2;

	}



	.screen {
		width: 50%;
		height: 40px;
		display: inline-block;
		text-align: center;
		line-height: 45px;
		text-align: center;
		float: left;
	}

	.screen_allimg {
		margin-left: 10px;
		width: 15px;
		height: auto;
		transform: rotate(90deg);
		vertical-align: middle;
	}

	.screen_allimgs {
		margin-left: 10px;
		width: 15px;
		height: auto;
		transform: rotate(270deg);
		vertical-align: middle;
	}

	.seek {
		float: right;
		text-align: center;
		width: 50%;
		height: 40px;
		line-height: 45px;
		text-align: center;
		display: inline-block;

		box-sizing: border-box;
	}

	.seek img {
		padding-left: 40px;
		width: 20px;
		height: 20px;
		display: inline-block;
		vertical-align: top;
		margin-top: 10px;
		text-align: right;
	}

	.seek input {
		height: 40px;
		width: 60%;
		float: right;
		text-align: left;
	}

	.msg {

		width: 100%;
		height: auto;
		border-radius: 5px;
		background: #fff;
		padding: 0px 20px;
		box-sizing: border-box;
		box-shadow: 1px 1px 10px #F4F4F4;
		position: relative;
		margin: 10px 0;
	}

	.msgtopright {
		position: absolute;
		top: 5px;
		right: 5px;
		display: inline-block;
		width: 15px;
		height: 15px;
		text-align: center;
		line-height: 15px;
		font-size: 10px;
		color: #FFFFFF;
		background: #0CAAF0;
		border-radius: 50%;
	}

	.msg_header {
		width: 100%;
		padding: 15px 0px;
		box-sizing: border-box;
		border-bottom: solid #F2F2F2 1px;
		margin-bottom: 5px;

	}

	.msg_text {
		width: 100%;
		padding: 8px 0;
	}

	.names {
		color: #1E1E1E;
		letter-spacing: 4px;
		margin-right: 10px;
	}

	.namemain {
		color: #989898;
		letter-spacing: 3px;

	}
</style>
