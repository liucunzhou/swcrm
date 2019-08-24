<template name="page-search">
	<view>
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
					<img class="screen_allimgs" v-if="isTopmuie" src="@/commonimg/fanhui.png"></img>
					<img class="screen_allimg" v-else src="@/commonimg/fanhui.png"></img>
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
	</view>
</template>

<script>
	export default {
		name: "page-search",
		props: {
			title: {
				type: String,
				default: ""
			}
		}
	}
</script>
