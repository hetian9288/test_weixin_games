/*
* Copyright (C) 2018 FarmFriend Co., Ltd. All rights reserved.
*/
Page({
	data:{

	},
	onLoad:function(options){
		//页面加载时触发。一个页面只会调用一次，可以在onLoad的参数中获取打开当前路径中的参数。
		//参数 options Object 打开当前页面路径中的参数
		console.log('pageC >> onLoad , options ::',options);
	},
	onReady:function(){
		//页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
		console.log('pageC >> onReady');
	},
	onShow:function(){
		//页面显示/切入前台时触发
		console.log('pageC >> onShow');
	},
	onHide:function(){
		//页面隐藏/切入后台时触发。
		console.log('pageC >> onHide');
	},
	onUnload:function(){
		//页面卸载时触发。
		console.log('pageC >> onUnload');
	},
	//自定义方法
	navigateToD:function(){
		//保留当前页面，跳转到应用内的某个页面，但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。
		console.log('%cpageC==============navigateToD=============','color:red');
		wx.navigateTo({
			url:'/pages/page-d/index'
		});
	},
	redirectToD:function(){
		//关闭当前页面，跳转到应用内的某个页面，但是不允许跳转到tabbar页面
		console.log('%cpageC==============redirectToD=============','color:red');
		wx.redirectTo({
			url:'/pages/page-d/index'
		});
	},
	reLaunchToD:function(){
		//关闭所有页面，打开到应用内的某个页面
		console.log('%cpageC==============reLaunchToD=============','color:red');
		wx.reLaunch({
			url:'/pages/page-d/index'
		});
	},
	switchTabToA:function(){
		//跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
		console.log('%cpageC==============switchTabToA=============','color:red');
		wx.switchTab({
			url:'/pages/page-a/index'
		});
	},
	switchTabToB:function(){
		//跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
		console.log('%cpageC==============switchTabToB=============','color:red');
		wx.switchTab({
			url:'/pages/page-b/index'
		});
	},
	navigateToC:function(){
		//保留当前页面，跳转到应用内的某个页面，但是不能跳到 tabbar 页面。使用 wx.navigateBack可以返回到原页面。
		console.log('%cpageC==============navigateToC=============','color:red');
		wx.navigateTo({
			url:'/pages/page-c/index'
		});
	},
});











