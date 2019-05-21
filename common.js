/*
 * @desc 统一网络请求函数
 * @param { string } method - 如GET、POST、PUT、DELETE、OPTIONS等
 * @param { string } url - 去除主机头的 api 路由
 * @param { object } [data] - 参数
 * @param { object } [header] - 请求头，特殊请求头处理。
 * */
function request(method, url, data, callback, header = true) {
	if (Object.prototype.toString.call(data) !== '[object Object]') {
		header = callback === false ? false : true;
		callback = data;
		data = {};
	}
	if (Object.prototype.toString.call(header) === '[object Boolean]') {
		header = {
			Authorization: `Bearer`
		}
	}
	// 封装好的网络请求函数，成功调用 callback，失败内部处理。
}

/*
 * @desc 生成文件名
 * @returns { string } - '日期 + /xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
 * */
function getFileName () {
	var date = new Date();
	var d = date.getTime();
	var uuid = date.toLocaleDateString('zh-CN') + '/xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c === 'x' ? r : (r&0x3|0x8)).toString(16);
	});
	return uuid;
}

/*
 * @desc 是否为手机号格式
 * @param { string } phone - 手机号
 * @returns { boolean } 返回值为 true 表示手机号格式正确
 * */
function mobilePhoneFormat (phone) {
	return /^[1][3,4,5,6,7,8][0-9]{9}$/.test(phone);
}

/*
 * @desc 是否微信浏览器
 * @returns { boolean } 返回值为 true 表示在微信浏览器里面
 * */
function hasWeChat () {
	return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger";
}
