$(document).ready(function() {
    $(".Step-ul li:even").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
    });
    $("#active01").click(function(){
		$("#FiveImg01").fadeIn(500).siblings("a").hide();
		});
    $("#active02").click(function(){
		$("#FiveImg02").fadeIn(500).siblings("a").hide();
		});
	$("#active03").click(function(){
		$("#FiveImg03").fadeIn(500).siblings("a").hide();
		});
	$("#active04").click(function(){
		$("#FiveImg04").fadeIn(500).siblings("a").hide();
		});
	//首页轮播公告

    var $Notice = $("#notice");
    var len = $Notice.find("li").length;
    var index = 0;
    var textTimer;
    var direction =true;

    $Notice.hover(function() {
        clearInterval(picTimer);
    },function() {
        picTimer = setInterval(function() {
        	if(len>1){
                showNotice(index);
                if(direction){
                    index++;
                }else{
                    index--
                }
                if(index >=len-1) {
                    direction = false;
                }else if(index<1){
                    direction = true;
                }
            }
        },4000);
    }).trigger("mouseleave");

    function showNotice(index) {
        var nowTop = -index*54;
        $Notice.stop(true,false).animate({"top":nowTop+"px"},600);
    }
    //首页轮播结束
});

$(document).ready(function() {
    $(".JobUl .Slide").click(function(){
		$(this).children("span").toggleClass("spanOpen");
		$(this).next(".Slide-Open").slideToggle("slow");
		})
});

$(document).ready(function() {
	$(".bank-content li").click(function(){
			var index = $(this).index();
			$(this).addClass("ClickIn").siblings().removeClass("ClickIn");
			$(".JobUl-box ul").eq(index).fadeIn(200).siblings("ul").hide();
		})
});

$(document).ready(function() {
	$(".Weixin").mousemove(function(){
		$(this).children(".WeixinImg").show();
		$(this).siblings("li").children(".WeiboImg,.appImg").hide();
		});	
	$(".WeixinImg").mouseleave(function(){
		$(this).hide();
		});
		
	$(".Weibo").mousemove(function(){
		$(this).children(".WeiboImg").show();
		$(this).siblings("li").children(".WeixinImg,.appImg").hide();
		});	
	$(".WeiboImg").mouseleave(function(){
		$(this).hide();
		});
		
	$(".App").mousemove(function(){
		$(this).children(".appImg").show();
		$(this).siblings("li").children(".WeixinImg,.WeiboImg").hide();
		});	
	$(".appImg").mouseleave(function(){
		$(this).hide();
		});
});

//显示提示框
function showTip(status,content){
    var target = $(".tipBox");
    target.find(".tips").attr("class","tips "+status);
    target.find(".message").text(content);
    target.show();
    var Width = target.find(".tips")[0].offsetWidth;
    var Height =target.find(".tips")[0].offsetHeight;
    target.find(".tips").css({"margin-left":-Width/2+"px","margin-top":-Height/2+"px"});
    target.find(".tipsDIV").bind("click",function(){
    	closeTip();
    });
    setTimeout(closeTip,3000);
}

//关闭提示框
function closeTip(){
    $(".tipBox").hide();
}

function artMsg(title, content, status){
	var iconName = '';
	if(status == 0){
		iconName = 'succeed';
	}else if(status == -1){
		iconName = 'error';
	}else if(status == 1){
		iconName = 'warning';
	}
	/*art.dialog({
        padding: '20px 35px',
        title: title,
        content: content,
        icon: iconName,
        left: '50%',
        fixed: true,
        drag: true,
        lock: true
    });*/
	showTip(iconName,content);
}

function artConMsg(title, content, status, url){
	var iconName = '';
	if(status == 0){
		iconName = 'succeed';
	}else if(status == -1){
		iconName = 'error';
	}else if(status == 1){
		iconName = 'warning';
	}
	art.dialog({
        padding: '20px 35px',
        title: title,
        content: content,
        icon: iconName,
        left: '50%',
        fixed: true,
        drag: true,
        lock: true,
        button: [
                 {
                     name: '去充值',
                     callback: function () {
                    	 window.location.href = url;
                         return false;
                     },
                     focus: true
                 },
                 {
                     name: '关闭',
                     callback: function () {
                         
                     }
                 }
             ]
    });
}	
	
function artEmailMsg(title, content, status, url){
	var iconName = '';
	if(status == 0){
		iconName = 'succeed';
	}else if(status == -1){
		iconName = 'error';
	}else if(status == 1){
		iconName = 'warning';
	}
	art.dialog({
        padding: '20px 35px',
        title: title,
        content: content,
        icon: iconName,
        left: '50%',
        fixed: true,
        drag: true,
        lock: true,
        button: [
                 {
                     name: '马上去激活',
                     callback: function () {
                    	 window.open(url);
                         return false;
                     },
                     focus: true
                 },
                 {
                     name: '关闭',
                     callback: function () {
                         
                     }
                 }
             ]
    });		
}

/** 强度规则
+ ------------------------------------------------------- +
1) 任何少于8个字符的组合，弱；任何字符数的同类字符组合，弱；
2) 任何字符数的两类字符组合，中；
3) 12位字符数以下的三类或四类字符组合，强；
4) 12位字符数以上的三类或四类字符组合，非常好。
+ ------------------------------------------------------- +
**/
//检测密码强度
function checkStrong(sValue) {
   var modes = 0;
   if (sValue.length < 8)
       return modes;
   if (/\d/.test(sValue))
       modes++;
   //数字
   if (/[a-z]/.test(sValue))
       modes++;
   //小写
   if (/[A-Z]/.test(sValue))
       modes++;
   //大写
   if (/\W/.test(sValue))
       modes++;
   //特殊字符
   switch (modes) {
       case 1:
           return 1;
           break;
       case 2:
           return 2;
       case 3:
       case 4:
           return sValue.length < 12 ? 3 : 4;
           break;
   }
}