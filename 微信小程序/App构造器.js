/* App(Object) 函数用来注册一个小程序，接受一个Object参数，指定小程序的生命周期回调等

	App()必须在 app.js 中调用，必须调用且只能调用一次，不然会出现无法预期的后果
*/
/*
当用户点击左上角
 */
App({
	onLaunch:function(Object){// 小程序初始化完成时(全局只触发一次)
		/** Object参数说明
		path : 打开小程序的路径
		query : 打开小程序的query
		scene : 打开小程序的场景值
		**/
	}
})