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
					<input type="text" placeholder-style="font-size:13px" :value="keywords" data-key="keywords" @input="inputChange" placeholder="请输入手机号进行查询" />
					<img src="@/commonimg/findminimg.png" @click="search"></img>
				</view>
			</view>

			<!-- 筛选弹框 -->
			<view class="topmuieFixed" v-if="isShowSearchCompontent">
				<view class="topmuieFixed_main">
					<view class="topmuieFixed_box">
						<view class="searchNavBar">
							<text @click.stop="searchNav(index)" :class="searchNavIndex===index?'searchNavBartext':''" v-for="(item,index) in searchNavBar"
							 :key="index">{{item}}</text>
						</view>
						<view class="topmuieFixed_right">
							<template v-if="searchItemsFields!='' && searchNavIndex!==2">
								<text @click.stop="searchNavItemClick(index)" :class="searchSelectedItemIndex===index?'searchItemsFields':''" v-for="(item,index) in searchItemsFields"
								 :key="index">{{item.title}}</text>
							</template>
							<template v-if="searchItemsFields!='' && searchNavIndex==2">
								<text @click.stop="searchNavItemClick(index)" :class="searchSelectedItemIndex===index?'searchItemsFields':''" v-for="(item,index) in searchItemsFields"
								 :key="index">{{item.realname}}</text>
							</template>
							<template v-if="searchNavIndex===3||searchNavIndex===4||searchNavIndex===5||searchNavIndex===6">
								<text @click.stop="searchNavItemClick(index)" :class="searchSelectedItemIndex===index?'searchItemsFields':''" v-for="(item,index) in searchDateTextItems"
								 :key="index">{{item}}</text>
							</template>
						</view>
					</view>

					<view class="clocedtime" v-if="searchNavIndex > 2 && searchSelectedItemIndex===searchDateTextItems.length - 1">
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
		components: {uniLoadMore},
		comments:{
			uniLoadMore
		},
		data() {
			let pageNav = [
				"全部客户",
				"我的客户",
				"我的下属客户"
			];
			
			let searchNavBar = [
				"跟进状态",
				"客户来源",
				"负责人",
				"分配时间",
			];
			
			let searchDateTextItems = [
				"今天",
				"自定义"
			];
			
			let searchDateFieldItems = [
				"today",
				"date_range",
			];
			
			return {
				keywords: '',
				customers: [],
				pageNav: pageNav,
				pageNavIndex: 0,
				isShowPageNav: false,
				isShowSearchCompontent: false,
				searchNavBar: searchNavBar,
				searchDateTextItems: searchDateTextItems,
				searchDateFieldItems: searchDateFieldItems,
				searchItemsFields: [],
				searchNavIndex: 0,
				searchSelectedItemIndex: 0,
				startDate: "", //开始时间
				endDate: "", //结束时间
				getBaseDatas: {}, //筛选数据
				page_title: '我的客资',
				params: {},
				page: 1,
				dstatu: 'more',
				searchObj:{},
				token:null
			}
		},
		onLoad(params) {
			this.token =this.$getToken()
			this.params = params;
			if(params.page_title != undefined){
				this.page_title = params.page_title;
				uni.setNavigationBarTitle({
					title: params.page_title
				})
			}
			this.getCustomerList();
			
		},
		onReachBottom(){
			console.log('dibu')
			this.getCustomerList(this)
		},
		created() {
			//请求筛选信息
			this.getBaseData();
		},
		onShow() {
			// if (platform != 'notInDingTalk') {
			// 	dingtalk.ready(function() {
			// 		dingtalk.biz.navigation.hideBar({
			// 			hidden: true,
			// 			onSuccess: function(result) {},
			// 			onFail: function(err) {}
			// 		})
			// 	});
			// }
		},
		methods: {
			// 获取客资列表
			getCustomerList(res){
				//设置底部为加载中
				this.dstatu = 'loading'
				
				let _this = this;
				let url = _this.$apis.customer.mine;
				console.log(this.token)
				let params = {}
				params['token'] = _this.token;
				params['page'] = _this.page;
				if(this.searchObj.key){
					params[this.searchObj.key] = _this.searchObj.value
				}
				if(this.keywords){
					params['keywords'] = this.keywords;
				}
				uni.request({
					url: url,
					method: 'POST',
					data: params,
					dataType: 'json',
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					success: (res) => {
						console.log(1)
						let result = res.data;
						if (result.code == '0') {
							// _this.customers = result.data;
							if(result.data.length>0){
								_this.customers = _this.customers.concat(result.data);
								_this.dstatu = 'more'
							}else{
								_this.dstatu = 'noMore'
							}
							
							//检查半页数据的情况
							if(_this.customers.length >= result.count ){
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
					url: `visitCustomer?member_id=${memberId}`
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
							this.getBaseDatas = result.data;

							this.searchItemsFields = this.getBaseDatas.statuses;

							// 信息类型
							_this.newsTypes = result.data.news_types;
							// 来源
							_this.sources = result.data.sources;

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
				this.searchSelectedItemIndex = 0;

				switch (index) {
					case 0: // 跟进状态选择
						this.searchItemsFields = this.getBaseDatas.statuses;
						break;
					case 1: // 客户来源选择
						this.searchItemsFields = this.getBaseDatas.sources;
						break;
					case 2: // 负责人选择
						console.log('hhhh’');
						this.searchItemsFields = this.getBaseDatas.staffes;
						break;
					case 3: // 创建时间
						this.searchItemsFields = '';
						break;
				}
			},
			//筛选右边点击
			searchNavItemClick(index) {
				this.searchSelectedItemIndex = index;
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
				this.searchNavIndex = '';
				this.searchSelectedItemIndex = '';
			},
			// 确认搜索
			makeSure() {
				console.log(this.searchNavIndex, this.searchSelectedItemIndex);
				let field = '';
				let search = {}
				switch(this.searchNavIndex) {
					case 0: // 跟进状态
						field = 'status';
						
						search.value = this.searchSelectedItemIndex
						break;
					
					case 1: // 客资来源
						field = 'source';
						search.value = this.searchSelectedItemIndex
						break;
					
					case 2: // 负责人
						field = 'staff';
						search.value = this.searchSelectedItemIndex
						break;
						
					case 3: // 创建时间
						field = 'create_time';
							if(searchIndex == this.searchDateTextItems.length - 1) {
								value = this.startDate + '~' + this.endDate;
							} else {
								value = this.searchDateFieldItems[searchIndex];	
							}
						search.value = value
						break;
				}
				search.key = field
				// let value = 0;
				// if(this.searchNavIndex < 3) {
				// 	let index = this.searchSelectedItemIndex;
				// 	let value = 0;
				// 	if (this.searchItemsFields[index]['id']!=undefined) {
				// 		value = this.searchItemsFields[index]['id'];
				// 	}
				// } else {
				// 	let searchIndex = this.searchSelectedItemIndex;
				// 	if(searchIndex == this.searchDateTextItems.length - 1) {
				// 		value = this.startDate + '~' + this.endDate;
				// 	} else {
				// 		value = this.searchDateFieldItems[searchIndex];	
				// 	}
				// }
				//将页面清空
				this.page = 0 
				this.customers = []
				this.searchObj = search
				//关闭筛选框
				this.isShowSearchCompontent = 0
				this.getCustomerList().bind(this)
				// 开始搜索
				// uni.navigateTo({
				// 	url: 'mine?' + field + '=' + value + '&page_title=' + this.page_title
				// });
				
			},
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			search() {
				this.page =1
				this.customers = []
				let _this = this;
				let url = _this.$apis.customer.mine;
				let params = {};
				params['token'] = this.$getToken();
				if(this.keywords == '') {
					uni.showToast({
						title: '请填写要搜索的手机号'
					});
					return false;
				}
				
				
				this.getCustomerList()
				// uni.request({
				// 	url: url,
				// 	method: 'POST',
				// 	data: params,
				// 	dataType: 'json',
				// 	header: {
				// 		'content-type': 'application/x-www-form-urlencoded',
				// 	},
				// 	success: (res) => {
				// 		let result = res.data;
				// 		if (result.code == '0') {
				// 			// _this.customers = result.data;
				// 			_this.customers = result.data;
				// 		} else {
				// 			uni.showToast({
				// 				title: result.msg
				// 			})
				// 		}
				// 		
				// 		_this.page = _this.page + 1;
				// 	}
				// })
			}
		},
	}
</script>

<style>
	@import url("../../common/common.css");
	.statuTag{
		position:absolute;
		right:70rpx;
		top:10rpx;
		padding: 1rpx 8rpx;
		font-size:18rpx;
		list-style: 18rpx;
		border-radius:10rpx;
		color:white;
		background: rgb(20,170,240);
	}
</style>