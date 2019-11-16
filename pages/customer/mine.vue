<template>
	<view class="pages">
		<view class="header_box">
			<view class="header_back" @click="goBack()">
				<img @click="goBack()" src="../../commonimg/fanhui.png"></img>
			</view>
			<view class="header_all" @click="showPageNavFn">
				<text>{{pageNav[pageNavIndex]}}
					<img class="header_allimg" v-if="isShowPageNav" src="../../commonimg/fanhui.png"></img>
					<img class="header_allimgs" v-else src="../../commonimg/fanhui.png"></img>
				</text>
			</view>
			<view class="header_search" @click="isShowSearchCompontent=!isShowSearchCompontent">筛选</view>
		</view>

		<view class="page-search">
			<view class="allcusList" @click="closePageNavFn" v-if="isShowPageNav">
				<view class="allcusList_box">
					<view v-for="(item,index) in pageNav" :key="index" @click.stop="PageNavFn(index)" :class="['allcusList_main',pageNavIndex==index?'activeallcusList_main':'']">
						<text>{{item}}</text><text v-if="pageNavIndex==index">✓</text>
					</view>
				</view>
			</view>

			<view class="topmuie">
				<view class="seek">
					<input type="text" placeholder-style="font-size:13px" :value="keywords" data-key="keywords" @input="inputChange"
					 placeholder="请输入手机号进行查询" />
					<img src="@/commonimg/findminimg.png" @click="search"></img>
				</view>
			</view>

			<!-- 筛选弹框 -->
			<view class="topmuieFixed" v-if="isShowSearchCompontent">
				<view class="topmuieFixed_main">
					<view class="topmuieFixed_box">
						<view class="searchNavBar">
							<text @click="searchNav(index)" :class="searchNavIndex===index?'searchNavSelected':''" v-for="(item,index) in searchBar"
							 :key="index">{{item.title}}</text>
						</view>
						
						<view class="topmuieFixed_right">
							<text @click="searchNavItem(index)" :class="searchBar[searchNavIndex]['index']===index ? 'searchItemSelected':''"
							 v-for="(item,index) in searchBar[searchNavIndex]['items']" :key="index">{{item.title?item.title:item.realname}}</text>
						</view>
					</view>

					<view class="clocedtime" v-if="isShowDateRange">
						<picker mode="date" :value="startDate" @change="startDateChange">
							<view class="uni-input"><text>开始时间:{{startDate}}</text></view>
						</picker>
						<picker mode="date" :value="endDate" @change="endDateChange">
							<view class="uni-input"><text>结束时间:{{endDate}}</text></view>
						</picker>
					</view>

					<view class="topmuieFixed_setting">
						<text @click.stop="emptyFn">清空</text>
						<text @click.stop="makeSure">确定</text>
					</view>
				</view>
			</view>
		</view>

		<view class="msg" v-for="(customer,index) in customers" v-bind:key="customer.id">
			<text class="msgtopright">{{index+1}}</text>
			<view class="statuTag">
				{{customer.active_status}}
			</view>
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
		<!-- 下拉标签 -->
		<uni-load-more :status="dstatu"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue'
	import dingtalk from '@/dingtalk.open.js'
	let platform = dingtalk.env.platform;

	export default {
		components: {
			uniLoadMore
		},
		data() {
			let pageNav = [
				"全部客户",
				"我的客户",
				"我的下属客户"
			];

			let searchBar = [{
					title: '跟进状态',
					field: 'status',
					index: 0,
					match: 'statuses',
					items: []
				},
				{
					title: '客户来源',
					field: 'source',
					index: 0,
					match: 'sources',
					items: []
				},
				{
					title: '员工列表',
					field: 'staff',
					index: 0,
					match: 'staffes',
					items: []
				},
				{
					title: '获取时间',
					field: 'create_time',
					index: 0,
					items: [
						{
							id: '',
							title: '不限'
						},
						{
							id: 'today',
							title: '今天'
						},
						{
							id: 'date_range',
							title: '自定义'
						}
					]
				}
			];

			let startDate = (new Date()).format("yyyy-MM-dd");
			let endDate = (new Date()).format("yyyy-MM-dd");
			return {
				// 页面加载
				page_title: '我的客资',
				params: {},
				page: 0,
				dstatu: 'more',
				
				// 高级搜索
				isShowSearchCompontent: false,
				searchObj: {},				
				searchBar: searchBar,
				searchNavIndex: 0,
				searchSelectedItemIndex: 0,
				keywords: '',
				
				// 客资列表
				customers: [],
				pageNav: pageNav,
				pageNavIndex: 0,
				isShowPageNav: false,
				
				// 自定义事件
				isShowDateRange: false,
				startDate: startDate,
				endDate: endDate,
				token: null
			}
		},
		onLoad(params) {
			this.token = this.$getToken()
			this.params = params;
			if (params.page_title != undefined) {
				this.page_title = params.page_title;
				uni.setNavigationBarTitle({
					title: params.page_title
				})
			}
			this.getCustomerList();
		},
		created() {
			// 请求筛选信息
			this.getBaseData();
		},
		onShow() {
			// 钉钉中隐藏页面标题
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
		// 底部加载更多
		onReachBottom() {
			this.getCustomerList(this)
		},
		methods: {
			// 获取客资列表
			getCustomerList(res) {
				//设置底部为加载中
				this.dstatu = 'loading'
				let _this = this;
				let url = _this.$apis.customer.mine;
				console.log(this.token)
				let params = {}
				params['page'] = _this.page;
				if (this.keywords) {
					params = {};
					params['keywords'] = this.keywords;
				} else {
					params = Object.assign(_this.params, params, _this.searchObj);
				}
				params['token'] = _this.token;
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
							// _this.customers = result.data;
							if (result.data.length > 0) {
								_this.customers = _this.customers.concat(result.data);
								_this.dstatu = 'more'
							} else {
								_this.dstatu = 'noMore'
							}

							//检查半页数据的情况
							if (_this.customers.length >= result.count) {
								_this.dstatu = 'noMore'
							}

						} else {
							uni.showToast({
								title: result.msg
							})
						}

						_this.page = _this.page + 1;
					}
				})
			},

			navToCustomer(memberId) {
				uni.navigateTo({
					url: `../visit/details?member_id=${memberId}`
				});
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
							// _this.getBaseDatas = result.data;
							console.log(_this.searchBar);
							for(let i in _this.searchBar) {
								let item = _this.searchBar[i];
								if(item['match'] != undefined) {
									let match = item['match'];
									_this.searchBar[i]['items'] =  result.data[match];
								}
							}
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
			PageNavFn(index) {
				this.pageNavIndex = index;
			},

			//显示全部客户弹框
			showPageNavFn() {
				this.isShowPageNav = !this.isShowPageNav;
			},
			
			//关闭全部客户弹框
			closePageNavFn() {
				this.isShowPageNav = !this.isShowPageNav
			},

			//筛选左边点击
			searchNav(index) {
				this.searchNavIndex = index;
			},
			
			//筛选右边点击
			searchNavItem(index) {
				let searchNavIndex = this.searchNavIndex;
				console.log('searchNavIndex is:',searchNavIndex);
				this.searchBar[searchNavIndex]['index'] = index;
				if(this.searchBar[searchNavIndex]['items'][index]['id'] == 'date_range') {
					this.isShowDateRange = true;
				} else {
					this.isShowDateRange = false;
				}
			},

			//开始时间
			startDateChange(e) {
				this.startDate = e.detail.value
			},
			
			//结束时间
			endDateChange(e) {
				this.endDate = e.detail.value
			},
			
			// 清空
			emptyFn() {
				let _this = this;
				this.searchBar.forEach(function(item, index) {
					console.log(this);
					_this.searchBar[index]['index'] = 0;
				});
				_this.isShowDateRange = false;
			},
			
			// 确认搜索
			makeSure() {
				let _this = this;
				let search = {};
				this.searchBar.forEach(function(item, index){
					if(item.field == 'create_time') {
						let field = item.field;
						let selectedIndex = item.index;
						let value = item.items[selectedIndex]['id'];
						if (value == 'date_range') {
							value = _this.startDate + '~' + _this.endDate;
						}
						search[field] = value;
					} else {
						let field = item.field;
						let selectedIndex = item.index;
						let value = item.items[selectedIndex]['id'];
						search[field] = value;
					}
					
				});

				//将页面清空
				this.page = 0
				this.customers = []
				this.searchObj = search
				
				//关闭筛选框
				this.isShowSearchCompontent = 0;
				this.getCustomerList();
			},
			
			inputChange(e) {
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			search() {
				this.page = 1
				this.customers = []
				let _this = this;
				let url = _this.$apis.customer.mine;
				let params = {};
				params['token'] = this.$getToken();
				if (this.keywords == '') {
					uni.showToast({
						title: '请填写要搜索的手机号'
					});
					return false;
				}
				this.getCustomerList()
			}
		},
	}
</script>

<style>
	@import url("../../common/common.css");

	.statuTag {
		position: absolute;
		right: 70rpx;
		top: 10rpx;
		padding: 1rpx 8rpx;
		font-size: 18rpx;
		list-style: 18rpx;
		border-radius: 10rpx;
		color: white;
		background: rgb(20, 170, 240);
	}
</style>
