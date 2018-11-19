/*
Page(Object) 函数用来注册一个页面，接受一个Object类型参数。
 */ 

Page({
	data:{//页面的初始数据

	}，
	onLoad:function(Object query){//页面加载时触发，一个页面只会调用一次，可以在 onLoad的参数中获取打开当前页面路径中的参数
		// query  :当前页面路径的参数
	},
	onshow:function(){// 页面显示 / 切入前台时触发

	},
	onReady(){//页面初次渲染完成时触发，一个页面只会调用一次，代表页面已经准备妥当可以和视图层进行交互

	}，
	onHide(){//页面隐藏 / 切入后台时触发 。如 navigateTo 或 底部tab切换  或小程序切到后台

	},
	onUnload(){//页面卸载时触发 如 redirectTo 或 navigateBack 到其他页面时

	}，
	onPullDownRefresh(){//监听用户下拉刷新
		/*
			1.需要在app.json 的window选项中或页面配置中开启 enablePullDownRefresh
			2.可以通过wx.startPullDownRefresh 触发下拉刷新，效果和用户手动下拉刷新一直
			3.当处理完数据刷新后，wx.stopPullDownRefresh  停止当前页面的下拉刷新
		 */ 
	},
	onPageScroll(Object){// 监听用户滑动页面事件
		// Object参数说明   
		// 属性 : scrollTop  页面在垂直方向已滚动的距离    类型 : Number
	},
	onShareAppMessage(res){//监听用户点击页面内转发按钮（<button>组件 open-type="share"）或右上角菜单“转发”按钮的行为，并自定义转发内容
		// 注意： 只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
		// res参数说明
		// from :  转发事件来源   button:页面内转发按钮  menu:右上角转发菜单
		// target : 如果from值是button，则target是触发这次事件的button。 否则为undefined
		// webViewUrl : 页面中包含<web-view>组件时，返回当前<web-view>的url
		
		// 此事件需要return 一个 Object，用于自定义转发内容：
		// title ： 转发标题
		// path：转发路径 必须以/ 开头的完整路径
		// imageUrl： 自定义图片路径
	},
	onTabItemTap(Object){//点击tab时触发
		// Object 参数说明
		// index ： 被点击tabItem的序号，从0开始
		// pagePath： 被点击tabItem的页面路径
		// text ： 被点击tabItem的按钮文字
	},
	onShow:function(){
		console.log(this.route);   // Page.route 当前页面的路径
		Page.prototype.setData(Object data,function(){
			//data 这次要改变的数据
			//callback  setData引起的界面更新渲染完毕后的回调函数
		})
		// 注意 ： 直接修改this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致
		// 单词设置的数据不能超过1024kb，请尽量避免一次设置过多的数据
		// 请不要把data中任何一项的value设为undefined，否则这一项将不被设置，并可能遗留一些潜在问题
		// 
		// 对于对象或数组字段，可以直接修改一个其下的子字段，这样做通常比修改整个数组或对象好
	}
})