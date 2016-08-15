/*
* 对顶部和底部进行缓存，中间进行更新（locastorge缓存）
*
* locastorge缓存数据
* cookie存储密码加上唯一标识码防止通过cookie入侵更改数据
* 标识码随机生成
* */
//function setCook(tel,pas){
//	var num=parseInt(Math.random()*1000000000);
//	var cookie = document.cookie={"name": tel.val(), "value": b64_md5(pas.val()),"num":num};
//	var tim = setCookie(tel.val(),b64_md5( pas.val()), '86400');
//	return cookie
//}

function getCook(){
	if(!!document.cookie){

	}
}
function deleteCookie(name){
	var date=new Date();
	date.setTime(date.getTime()-10000);
	document.cookie=name+"=v; expires="+date.toGMTString();
}




function setCookie(c_name, value, millisec) {
	var exdate = new Date();
	var num=parseInt(Math.random()*1000000000);
	exdate.setTime(exdate.getTime() + millisec)
	//document.cookie = c_name + "=" + escape(value)
	//		+ ((millisec == null) ? "" : ";expires=" + exdate.toGMTString());
	document.cookie = c_name + "=" + escape(c_name)
		+ ((millisec == null) ? "" : ";expires=" + exdate.toGMTString());
	document.cookie=value+'='+escape(value)
}

function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			console.log(c_start)
			c_end = document.cookie.indexOf(";", c_start)
			if (c_end == -1)
				c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}

