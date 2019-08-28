<template>
	<view class="pages">
		
		<view class="tobar">
			<view class="tobar_textL" >
				<img v-if="isactiveL" @click="backlogFn" src="../../../commonimg/small.png"></img>
				<img v-if="!isactiveL" @click="backlogFn" src="../../../commonimg/activesmall.png"></img>
				<text :class="isactiveL?'':'activetext'">待办</text>
			</view>
			<view class="circle" @click="isBottom=true">
				<img v-if="isCircle" @click="circlefn" src="../../../commonimg/jiahao.png"></img>
				<img v-if="!isCircle" @click="circlefn" src="../../../commonimg/activejahao.png"></img>
			</view>
			<navigator url="../../tabBar/home/Customers">
					<view class="tobar_textR">
						 <img v-if="isactiveR" @click="guestFn" src="../../../commonimg/kezi.png"></img>
						 <img v-if="!isactiveR" @click="guestFn" src="../../../commonimg/activekezi.png"></img>
						<text :class="isactiveR?'':'activetext'">客资</text>
					</view>
			</navigator>
		
		</view>
		<!-- 头部 -->
		<view class="haers">
			<view class="haers_img" @click="columnFn">  
			    <img  class="baidian" src="../../../commonimg/dianidan.png"></img>
			    <img   class="touImg" src="../../../commonimg/activekezi.png"></img>
				<text   class="pointImg" ></text>
			 </view>
		</view>
		<!-- 侧栏 -->
		<view class="columnmian" :style="{transform: 'translateX('+translate+'%)'}">
			<view class="column">
				<view class="column_up">
					<view class="column_center">
						<img src="../../../commonimg/activejahao.png"></img>
						<view>name</view>
						<view>name</view>
					</view>
				</view>
				<view class="column_down">
					<view class="downmsg" > 
					   <navigator url="../../tabBar/home/inform">
							<img src="../../../commonimg/informmsg.png"></img>
							<text>通知中心</text>
						</navigator>
					</view>
					<view class="downmsg"> 
					  <navigator url="../../tabBar/home/setTing">
						<img src="../../../commonimg/setting.png"></img>
						<text>设置</text>
					   </navigator>
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
				   <navigator url="../../tabBar/home/msgList">
	  				    <view class="backlognumber">2</view>
						<img class="backlog_msg_img" src="../../../commonimg/relation.png"></img>
						<text>今天需要联系的客户</text>
						<img class="fanhui" src="../../../commonimg/fanhui.png"></img>
					</navigator>
				</view>
			</view>
			<view class="backlog_main">
				<view class="backlog_msg" > 
				   <navigator url="../../tabBar/home/msgList">
					    <view class="backlognumber">2</view>
						<img class="backlog_msg_img" src="../../../commonimg/orders.png"></img>
						<text>派单给我的客户</text>
						<img class="fanhui" src="../../../commonimg/fanhui.png"></img>
					</navigator>
				</view>
			</view>
			<view class="backlog_main">
				<view class="backlog_msg" > 
				   <navigator url="../../tabBar/home/msgList">
					    <view class="backlognumber">2</view>
						<img class="backlog_msg_img" src="../../../commonimg/apply.png"></img>
						<text>申请通过的客户</text>
						<img class="fanhui" src="../../../commonimg/fanhui.png"></img>
					</navigator>
				</view>
			</view>
			
		</view>
		<!-- 底部弹框 -->
		<view class="bottombox" v-if="isBottom">
			<view class="boxtext">
				<view class="boxtext_main" @click="newly()">
					<img src="../../../commonimg/newkehu.png"></img>
					<text> 新增客户</text>
				</view>
				<view class="boxtext_main" @click="find()">
					<img src="../../../commonimg/findimg.png"></img>
					<text> 查找客户</text>
				</view>
			</view>
			<view class="bottomclose" @click="isBottom=false">
				<img src="../../../commonimg/closeimg.png"></img>
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
		methods:{
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
			//通知跳转
			// informFn(){
			// 	uni.navigateTo({
			// 		url:'pages/tabBar/home/inform'
			// 	});
			// },
			//新增客户跳转
			newly(){
				uni.navigateTo({
					url:'../../tabBar/home/newly'
				});	
			},
			// 查找客户
			find(){
			   	uni.navigateTo({
			   	url:'../../tabBar/home/findCustomer'
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
		border-top:1px solid #8888 ;
		border-bottom: 1px solid #8888 ;
		background: #FFFFFF;
		
	}
	.tobar_textR{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-left: 20px;
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
		padding-right: 20px;
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
		width: 65px;
		height: 65px;
		background: #FFFFFF;
		border-radius: 50%;
		border:1px solid #CCCCCC;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-55%);
		text-align: center;
		line-height: 70px;
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
	display: flex;
	justify-content: center;
	align-items: center;
	}
	.column_center{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.column_center img{
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	.column_center view{
		height: 20px; 
		font-size: 15px;
	}
	
	.column_down{
		display: flex;
		flex-direction: column;
		padding: 10px 20px;
	}
		
	.downmsg{
	    margin-bottom: 10px;
	}
	.downmsg img{
		width: 30px;
		height: 30px;
		vertical-align: middle;
		margin-right: 20px;
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
	    margin-bottom: 10px;
		font-size:17px;
		clear: both;
		border-bottom:1px solid #ccc ;
		height: 50px;
	}
	.backlog_msg_img{
		width:40x;
		height:40px;
		vertical-align: middle;
		margin-right: 20px;
	}
	.fanhui{
		float: right;
		width: 30px;
		vertical-align: middle;
		height: 30px;
		padding-right: 10px;
	}
	.backlognumber{
		width: 15px;
		height: 15px;
		background: red;
		position: absolute;
		left:30px;
		top: -3px;
		text-align: center;
		font-size: 8px;
		line-height: 15px;
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
	}
	.boxtext_main img{
		width: 50px;
		height: 50px;
	}
</style>
