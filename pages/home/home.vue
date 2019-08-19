<template>
	<view class="pages">
		
		<view class="tobar">
			<view class="tobar_textL" >
				<img v-if="isactiveL" @click="backlogFn" src="../../commonimg/activesmall.png"></img>
				<img v-if="!isactiveL" @click="backlogFn" src="../../commonimg/activesmall.png"></img>
				<text :class="isactiveL?'activetext':'activetext'">待办</text>
			</view>
			<view class="circle" @click="isBottom=true">
				<img v-if="isCircle" @click="circlefn" src="../../commonimg/activejahao.png"></img>
				<img v-if="!isCircle" @click="circlefn" src="../../commonimg/activejahao.png"></img>
			</view>
			<navigator url="customerNav">
					<view class="tobar_textR">
						 <img v-if="isactiveR" @click="guestFn" src="../../commonimg/activekezi.png"></img>
						 <img v-if="!isactiveR" @click="guestFn" src="../../commonimg/activekezi.png"></img>
						<text :class="isactiveR?'activetext':'activetext'">客资</text>
					</view>
			</navigator>
		
		</view>
		<!-- 头部 -->
		<view class="haers">
			<view class="haers_img" @click="columnFn">  
			    <img  class="baidian" src="../../commonimg/dianidan.png"></img>
			    <img   class="touImg" src="../../commonimg/headerimg.png"></img>
				<text   class="pointImg" ></text>
			 </view>
		</view>
		<!-- 侧栏 -->
		<view class="columnmian" :style="{transform: 'translateX('+translate+'%)'}">
			<view class="column">
				<view class="column_up">
					<view class="column_center">
						<img src="../../commonimg/headerimg.png"></img>
						<view class="name">
							<text>name</text>
							<text>name</text>
						</view>
					</view>
				</view>
				<view class="column_down">
					<view class="downmsg" > 
					   <navigator url="inform">
							<img class="downmsgicon" src="../../commonimg/informmsg.png"></img>
							<text>通知中心</text>
							<img class="downfanhui"  src="../../commonimg/fanhui.png"></img>
						</navigator>
					</view>
					<view class="downmsg"> 
					  <navigator url="setTing">
						<img class="downmsgicon" src="../../commonimg/setting.png"></img>
						<text>设置</text>
						<img class="downfanhui"  src="../../commonimg/fanhui.png"></img>
					   </navigator>
					</view>
					<view class="downmsg"> 
						<img class="downmsgicon" src="../../commonimg/setting.png"></img>
						<text>退出</text>
						<img class="downfanhui"  src="../../commonimg/fanhui.png"></img>
					</view>
				</view>
			</view>
			<!-- 右边侧栏 -->
			<view @click="isColumnFn" class="columnright" v-if="translate==0"></view>
		</view>
		<!-- 主体待办 -->
		<view class="backlog"> 
			<view class="backlog_main">
				<view class="backlog_msg" > 
				   <navigator url="msgList">
	  				    <view class="backlognumber">2</view>
						<img class="backlog_msg_img" src="../../commonimg/orders.png"></img>
						<text>今日跟进</text>
						<img class="fanhui" src="../../commonimg/fanhui.png"></img>
					</navigator>
				</view>
			</view>
			<view class="backlog_main">
				<view class="backlog_msg" > 
				   <navigator url="msgList">
					    <view class="backlognumber">2</view>
						<img class="backlog_msg_img" src="../../commonimg/relation.png"></img>
						<text>我的客资</text>
						<img class="fanhui" src="../../commonimg/fanhui.png"></img>
					</navigator>
				</view>
			</view>
			<view class="backlog_main">
				<view class="backlog_msg" > 
				   <navigator url="msgList">
					    <view class="backlognumber">2</view>
						<img class="backlog_msg_img" src="../../commonimg/apply.png"></img>
						<text>我的申请</text>
						<img class="fanhui" src="../../commonimg/fanhui.png"></img>
					</navigator>
				</view>
			</view>
			
		</view>
		<!-- 底部弹框 -->
		<view class="bottombox" v-if="isBottom">
			<view class="boxtext">
				<view class="boxtext_main" @click="addCustomer()">
					<img src="../../commonimg/newkehu.png"></img>
					<text> 新增客户</text>
				</view>
				<view class="boxtext_main" @click="find()">
					<img src="../../commonimg/findimg.png"></img>
					<text> 查找客户</text>
				</view>
			</view>
			<view class="bottomclose" @click="isBottom=false">
				<img src="../../commonimg/closeimg.png"></img>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isactiveL:true,//待办
				isCircle:true,//圈弹框
				isactiveR:true,//客资
				translate:-100,//
				isBottom:false,//底部弹框
			}
		},
		onLoad() {
			console.log('....');
			this.checkLogin();
		},
		methods:{
			checkLogin(){
				try {
					const token = uni.getStorageSync('token');
					if (token) {
						console.log(token);
					} else {
						uni.navigateTo({
							url:'/pages/public/login'
						});
					}
				} catch (e) {
					// error
				}
			},
			// 待办
			backlogFn(){
				this.isactiveL=!this.isactiveL
			},
			//客资
			guestFn(){
				this.isactiveR=!this.isactiveR
			},
			//圈弹框
			circlefn(){
				this.isCircle=!this.isCircle
			},
			//侧栏
			columnFn(){
				this.translate=0
			},
			//隐藏侧栏
			isColumnFn(){
				this.translate=-100
			},
			addCustomer(){
				uni.navigateTo({
					url:'addCustomer'
				});	
			},
			// 查找客户
			find(){
			   	uni.navigateTo({
			   	url:'findCustomer'
			   });	
			}
		}
	}
</script>

<style>
	.pages{
		background: #FFFFFF;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	.tobar{
		width: 100%;
		height: 60px;
		position: fixed;
		bottom:0px;
		left: 0;
		font-size: 16px;
		display: flex;
		justify-content:space-around;
		align-items: center;
		padding: 10px  20px;
		box-sizing: border-box;
		border-top:1px solid #F2F2F2 ;
		border-bottom: 1px solid #F2F2F2 ;
		background: #FFFFFF;
		
	}
	.tobar_textR{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-left: 35px;
		color:  #a6a6a6;
	}
	.tobar_textR text{
		font-size: 13px;
		
	}
	.tobar_textR img{
		width: 30px;
		height: 30px;
	}
	.tobar_textL{
		display: flex;
		flex-direction: column;
		align-items: center;
		color:  #a6a6a6;
		padding-right: 35px;
	}
	.tobar_textL text{
		font-size: 13px;
		/* color: 0caaf0; */
	}
	.tobar_textL img{
		width: 30px;
		height: 30px;
	}
	.circle {
		position: absolute;
		width: 60px;
		height: 60px;
		background: #FFFFFF;
		border-radius: 50%;
		border:1px solid #F2F2F2;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-55%);
		text-align: center;
		line-height: 60px;
		font-size: 40px;
		background: #FFFFFF;
		padding: 5px 5px;
		box-sizing: border-box;
		 text-align: center;
		 display: flex;
		 justify-content: center;
		 align-content: center;
	}
	.circle img{
		width: 100%;
		height: 100%;
	}
	.activetext{
		color:#0caaf0 ;
	}
	
	
	
	.haers{
		width: 100%;
		height: 50px;
		background:#444a64;
		clear: both;
		display: flex;
		align-items: center;
		
	}
	.haers_img{
		position: relative;
	}
	.haers_img .baidian{
		width: 30px;
		height: 30px;
	}
	.haers_img .touImg{
		width: 30px;
		height: 30px;
	}
	.touImg{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #00CE47;
	}
	.pointImg{
		display: inline-block;
		width: 8px;
		height: 8px;
		background: red;
		position: absolute;
		right: 0;
		top: -2px;
		border-radius: 50%;
	}
	/* 侧栏 */
	.columnmian{
		
		transition: all 1s;
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 99;
	}
	.column{
		width: 70vw;
		height: 100vh;
		background: #FFFFFF;
		display: inline-block;
		float: left;
	}
	.columnright{
		width: 30vw;
		height: 100vh;
		background:rgba(0,0,0,.4);
		display: inline-block;
		float: right;
	}
	.column_up{
		width: 100%;
		height: 150px;
	    background: #444a64;
         padding: 40px 20px;
		 box-sizing: border-box;
		 margin-bottom: 10px;
	}
	.column_center{
	    display: flex;
		justify-content:left
	}
	.column_center img{
		width: 60px;
		height: 60px;
		border-radius: 50%;
		vertical-align: middle;
		padding-right: 20px;
	}
	.column_center .name{
		width: 100px;
		height: auto;
		font-size: 15px;
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		color:#fff;
	}
	 .name text{
		line-height:;
	 }
	.column_down{
		display: flex;
		flex-direction: column;
		padding: 10px 20px;
	}
		
	.downmsg{
	    margin-bottom: 15px;
		clear: both;
	}
	.downmsg .downmsgicon{
		width: 24px;
		height: 24px;
		vertical-align: bottom;
		margin-right: 20px;
	}
	.downfanhui{
		float: right;
		width: 15px;
		height: 15px;
		margin-top: 6px;
		vertical-align: middle;
	}
	/* 待办事项 */
	.backlog{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		padding-top: 10px;
		box-sizing: border-box;
		
	}
	.backlog_main{
		width: 100%;
		box-sizing: border-box;
		padding-left:10px ;
		box-sizing: border-box;
	}
	.backlog_msg{
		position: relative;
		width: 100%;
		font-size:16px;
		clear: both;
		border-bottom:1px solid #f2f2f2 ;
		height: 30px;
         padding: 15px 0px;
	}
	.backlog_msg_img{
		width:30px;
		height:30px;
		vertical-align: bottom;
		margin-right: 15px;
		margin-left: 10px;
	}
	.backlog_msg text{
	   color: #1e1e1e;
		line-height: 30px;
		
	}
	.fanhui{
		float: right;
		width: 15px;
		height: 15px;
		vertical-align: bottom;
		padding-right: 10px;
		margin-top: 7px;
	}
	.backlognumber{
		width: 12px;
		height: 12px;
		background: red;
		position: absolute;
		top: 10px;
		left:30px;
		text-align: center;
		font-size: 1px;
		line-height: 12px;
        border-radius: 50%;
	    color: #FFFFFF;
	}
	.bottombox{
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background:#444a64 ;
	}
	.bottomclose{
		position: absolute;
		bottom: 0;
		left: 50%;
		margin-left: -15px;
	}
	.bottomclose img{
		width: 30px;
		height: 30px;
	}
	.boxtext{
		
		padding:100px 50px 0 50px ;
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.boxtext_main{
		width: 100px;
		height: 140px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
	}
	.boxtext_main img{
		width: 50px;
		height: 50px;
	}
	.boxtext_main text{
		margin-top: 6px;
	}
</style>
