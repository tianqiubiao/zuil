/*
 * #news_about  媒体报道分页
 * #sell_money_list  定期理财feny
 * .money_item_list
 * #other_money_list 他人转让分页列表
 * */

var regex = /[\da-zA-Z]{6,20}/
var phoneReg = /^(1[3-5|7-8]\d)\d{8}$/;
var regTel = /^((13\d)|(14[4,7])|(15[^4,\D])|(17[0,6,7,8])|(18\d))(\d{8})$/;
var regPas = /^([^\s'‘’]{6,12})$/;
var regWidth = /^(\d||\d+)\/(\d||\d+)(份)$/

/*
 * a:点击id
 * b:显示父级id
 * c：显示元素
 * d:点击颜色
 *
 * */

function code(a, b, c, d, e) {
    var ulList = document.getElementById(a), ulLists = ulList.getElementsByTagName(e);
    var divList = document.getElementById(b), divLists = divList.getElementsByClassName(c);
    ~function bindCard(far, son) {
        for (var i = 0, len = far.length; i < len; i++) {
            ~function (i) {
                far[i].onclick = function (e) {
                    e.stopPropagation()
                    e.returnValue = false;
                    for (var j = 0, len = son.length; j < len; j++) {
                        if (j === i) {
                            if (e.target === far[i]) {
                                $('#bandCard').css('display', 'block');
                                $('.my_account').css('display', 'none')
                            } else {
                                $('#bandCard').css('display', 'none');
                                $('.my_account').css('display', 'block')
                            }

                            far[i].className = d;
                            son[i].className = c + " navDis";

                            continue;
                        } else {

                            far[j].className = "  pointer ";
                            son[j].className = c;

                        }
                    }
                }
            }(i)
        }
    }(ulLists, divLists)
}

/*
 * 理财点击切换
 * */
itemList("money_item_list", 'bgOrange');
/*分页切换*/
//itemList('fyList', 'fyListBg')
function itemList(list1, list2) {
    var fys = document.getElementsByClassName(list1)
    for (var o = 0, lengthA = fys.length; o < lengthA; o++) {
        fyList(fys[o], list2)
    }
}
function fyList(a, b) {
    $(a).find('li').click(function () {
                              var fyList = $(a).find('li');
                              for (var i = 0, len = fyList.length; i < len; i++) {
                                  if (this === fyList.get(i)) {
                                      fyList.get(i).className = b
                                  } else {
                                      fyList.get(i).className = ""

                                  }
                              }
                          }
    )
}


/*签到*/
$('#true_qd').click(function () {
                        $(this).text('已签到');
                        $(this).attr("class", 'noqd')
                        $('#my_account_qd').css('display', 'block');
                        accountQianDao();
                        $('#true_qd').unbind('click');
                    }
);
function accountQianDao() {
    var timer = window.setTimeout(function () {
                                      $('#my_account_qd').css('display', 'none');
                                      window.location.href = 'account_qdxiangqing.html';
                                      window.clearTimeout(timer);
                                      accountQianDao = null;
                                  }, 3000
    )
}
/*弹出层*/
var a = null;
$('.sign').click(function () {
                     a = this.getAttribute('data-type');
                     $('.sign_on').css('display', 'block');
                     $('.sign_on').find('.' + a).css('display', 'block')
                 }
)
/*关闭弹出层*/
$('.sign_close').click(function (e) {
                           $('.sign_on').css('display', 'none');
                           $('.' + a).css('display', 'none');
                           a = null;
                       }
);

/*同意协议跳转*/
$('.spanImg_seco').click(function () {
                             if ($(this).children()[0].alt === 'false') {
                                 $(this).children().css('display', 'block');
                                 $(this).children()[0].alt = 'true';
                                 var that = $(this);
                                 $('.true_sign_on').click(function () {
                                                              if (that.children('img')[0].alt === "true" && phoneReg.test($('#sing0').val())) {

                                                                  window.location.href = 'zhucechenggong.html';
                                                                  //发送请求
                                                              } else {
                                                                  alert('2')
                                                              }
                                                          }
                                 )
                             } else {
                                 $(this).children().css('display', 'none');
                                 $(this).children()[0].alt = 'false';
                                 $('.true_sign_on').unbind('click');

                             }
                         }
);

/*密码验证*/
$('input').blur(function (e) {
                    if (this.id === "sing0") {
                        if ($(this).val().length === 0) {
                            $('#worUesr').text('请输入手机号！')
                        } else if (!phoneReg.test($(this).val())) {
                            $('#worUesr').text('请输入正确手机号！')

                        } else {
                            $('#worUesr').text('')
                        }
                    } else if (this.id === "sing1") {
                        var that = $(this);
                        var a = $('#passW')
                        //passWord(that, a)

                    } else if (this.id === "sing2") {
                        var a = $('#passWT')
                        var that = $(this);
                        //passWord(that, a)
                    } else if (this.id === "sing3") {

                    } else if (this.id === "sing4") {

                    }
                }
);
function passWord(that, a) {

    if (that.val().length === 0) {
        a.html('请输入密码！')
    } else if (that.val().length <= 12 && that.val().length >= 6) {
        if (regex.test(that.val())) {
            a.html('密码不符合要求')
        } else {
            a.html('2')
        }
    } else if (!(that.val().length >= 6 && that.val().length <= 12)) {
        a.html('密码长度不符合！ ')
    } else if (a === $('#passWT')) {
        that.val() === $('#sing1').val() ? a.html('') : a.html('两次密码输入不一致！')
    } else {
        a.html('1')
    }
}
/*进入账户*/
$('#account_in').click(function () {
                           window.location.href = 'w-wodezhnghu.html'
                       }
)
function dataHref() {
    $("*[data-href]").click(function () {
                                var url = $(this).attr("data-href");
                                var target = $(this).attr("data-target");
                                if (url != "") {
                                    if (target == "_blank") {
                                        window.open(url, target);

                                    } else if (target == "_self") {
                                        window.open(url, target);

                                    } else if (target == "_parent") {
                                        window.open(url, target);

                                    } else if (target == "_top") {
                                        window.open(url, target);

                                    } else {
                                        window.location.href = url;

                                    }
                                } else {
                                    return false;
                                }
                            }
    );
}


/*进度条*/
function bfb_deco() {
    $('.bfb_yuan').each(function (index) {
                            var that = $(this);
                            var yuanCenter = $(this).find('.yuan_center');
                            var yuanTop = $(this).find('.yuan_top');
                            var bfb_J = $(this).find('.bfb_J').get(0).innerText;
                            $(this).find('.height_yuan').css('height', a(bfb_J));
                            function a(bfb_J) {
                                if (index === 0 && that.find('.bfb_J').width() != 100) {
                                    that.find('.bfb_J').css('font-size', '46px');
                                    that.css('border', ' 2px solid #fdeeac');
                                    yuanCenter.css('background', '#f5c259');
                                    yuanTop.css('background', '#ffeeac');
                                    return (100 - parseInt(bfb_J)) + "%";
                                } else {

                                    switch (bfb_J) {
                                        case '已满标':
                                            border();
                                            if (that.find('.bfb_J').width() === 100) {

                                                that.find('.bfb_J').css('font-size', '24px');
                                            } else {
                                                that.find('.bfb_J').css('font-size', '32px');
                                            }

                                            that.find('.bfb_J').css('color', '#FFE98D');
                                            return '0%';
                                            break;
                                        case '已结束':
                                            return function () {
                                                if (that.find('.bfb_J').width() === 100) {

                                                    that.find('.bfb_J').css('font-size', '24px');
                                                } else {
                                                    that.find('.bfb_J').css('font-size', '32px');
                                                }

                                                that.css('border', '2px solid #eee');
                                                yuanCenter.css('background', '#ccc');
                                                yuanTop.css('background', '#eee');
                                                return '0'
                                            };
                                            break;
                                        case '还款中':
                                            border();
                                            if (that.find('.bfb_J').width() === 100) {
                                                that.find('.bfb_J').css('font-size', '24px');
                                            } else {
                                                that.find('.bfb_J').css('font-size', '32px');
                                            }

                                            return '0%';
                                            break;
                                        default:

                                            border();
                                            if (that.find('.bfb_J').width() === 100) {
                                                that.find('.bfb_J').css('font-size', '24px');
                                            } else {
                                                that.find('.bfb_J').css('font-size', '46px');
                                            }

                                            that.parent().parent().parent().find('.lcFDn').removeClass('posrel');
                                            that.parent().parent().parent().find('.lcFDF').css('display', 'block');
                                            return (100 - parseInt(bfb_J)) + "%";
                                            break;
                                    }
                                }

                                function border() {
                                    that.css('border', '2px solid #CDF0F5');
                                    yuanCenter.css('background', '#6ed3d6');
                                    yuanTop.css('background', '#CDF0F5')

                                }
                            }
                        }
    );
    $('.zr .lcFD').each(function () {

                            var bfb_J = $(this).find('.bfb_J').get(0).innerText;
                            var fang = $(this).find('.bfb_fang');
                            var fang_span = $(this).find('.weight_fang');
                            var lcFDF = $(this).find('.lcFDF');
                            var lcFDQ = $(this).find('.lcFDQ');
                            fang_span.css('', a());
                            function a() {
                                if (bfb_J === '已结束') {
                                    fang.css('border', '2px solid #eee');
                                    fang_span.css('background', '#ccc');
                                    lcFDF.css('display', 'none');
                                    lcFDQ.get(0).className = 'lcFDQ posrel';
                                    fang_span.css({'background': '#ccc', 'width': '100%'});
                                } else {
                                    if (regWidth.test(bfb_J)) {
                                        fang.css('border', '2px solid #CDF0F5');
                                        fang_span.css({
                                                          'background': '#6dd3d7',
                                                          'width': (regWidth.exec(bfb_J)[1] / regWidth.exec(bfb_J)[2]) * 100 + '%'
                                                      }
                                        );
                                    } else {
                                        lcFDF.css('display', 'none');
                                        lcFDQ.get(0).className = 'lcFDQ posrel';
                                    }

                                }
                            }
                        }
    );


    $('.moneySellCenter .mCLi6').each(function (index) {
                                          var that = $(this);
                                          var mcLi7 = that.next('.mCLi7');
                                          var mcLi7Num = mcLi7.find('p').get(0).innerText;

                                          var sell_height_num = that.find('.sellHeightNum').get(0).innerText;
                                          that.find('.sellHeight').css('height', function () {
                                                                           switch (mcLi7Num) {
                                                                               case '已满标':
                                                                                   mcLi7.addClass('bgYellow');
                                                                                   return '0';
                                                                                   break;
                                                                               case '还款中':
                                                                                   mcLi7.addClass('bgGrey');
                                                                                   return '0';
                                                                                   break;
                                                                               case '已结束':
                                                                                   mcLi7.addClass('bgGrey');
                                                                                   that.children().first().addClass('bgGrey').removeClass('bgGreen');
                                                                                   return '0';
                                                                                   break;
                                                                               default:
                                                                                   if (index === 0) {
                                                                                       that.children().first().css('background', '#f5c259').removeClass('bgGreen');
                                                                                       console.log(this);
                                                                                       $(this).css('background', '#ffeeac');
                                                                                   }
                                                                                   mcLi7.addClass('bgPink');
                                                                                   return (100 - parseInt(sell_height_num)) + "%";
                                                                                   break;
                                                                           }

                                                                       }
                                          )
                                      }
    )
    $('.moneyZrCenter .mCLi6').each(function () {
                                        var that = $(this);
                                        var bfb_J = $(this).find('.bfb_J').text();
                                        var mcLi7 = that.next('.mCLi7');
                                        var mcLi7Num = mcLi7.find('p').get(0).innerText;
                                        //var sell_height_num = that.find('.sellHeightNum').get(0).innerText;
                                        that.find('.zrWidth').css('width', function () {
                                                                      switch (mcLi7Num) {
                                                                          case '已结束':
                                                                              mcLi7.addClass('bgGrey');
                                                                              $(this).addClass('bgGrey')
                                                                              return '100%';
                                                                              break;
                                                                          default:
                                                                              mcLi7.addClass('bgPink');
                                                                              return (regWidth.exec(bfb_J)[1] / regWidth.exec(bfb_J)[2]) * 100 + '%'
                                                                              break;
                                                                      }
                                                                  }
                                        )
                                    }
    )
}
bfb_deco();
/*千分符*/
function splits(str) {
    var str2 = str.toString().split(".")[1]
    str2 = typeof (str2) === "undefined" ? '.00' : '.' + str2;
    return str.toString().split(".")[0].split("").reverse().join("").replace(/(\d{3}(?!$))/g, "$1,").split('').reverse().join('') + str2;
}

/*分页控件*/
function Pages() {


}

function inputVal(ele) {
    return $(ele).blur(function () {
                           return this.val()
                       }
    )
}
/*登录 退出*/
~function () {
    function setCookie(c_name, value, millisec) {
        var exdate = new Date();
        var num = parseInt(Math.random() * 1000000000);
        exdate.setTime(exdate.getTime() + millisec)
        //document.cookie = c_name + "=" + escape(value)
        //		+ ((millisec == null) ? "" : ";expires=" + exdate.toGMTString());
        document.cookie = c_name + "=" + escape(c_name)
            + ((millisec == null) ? "" : ";expires=" + exdate.toGMTString());
        document.cookie = value + '=' + escape(value)
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

    function deleteCookie(name) {
        var date = new Date();
        date.setTime(date.getTime() - 10000);
        document.cookie = name + "=v; expires=" + date.toGMTString();
    }


    var tel = $('.tel'), telVal = inputVal(tel);
    var pas = $('.pas'), padVal = inputVal(pas);
    var sign_up = $('.sign_up');


    sign_up.click(function () {
                      var telV = tel.val();
//    var cookie = document.cookie;
//    cookie = {"name": tel.val(), "value": b64_md5(pas.val())};
//     var tim = setCookie(tel.val(),b64_md5( pas.val()), '86400');
                      setCookie(tel, pas);
                      pas.val('');
                      $('.top').get(0).style.display = 'none';
                      $('.top').get(1).style.display = 'block';
                      $('.sign_on').css('display', 'none');
                      $('.' + a).css('display', 'none');
                      a = null;
                      $('#uesr_account').text('[' + telV + ']')
//        console.log(setCook(tel, pas).name)
//        console.log(b64_md5(setCook(tel, pas).value))
                  }
    )

    $('.clearCook').click(function () {
                              deleteCookie(tel.val());
                              $('.top').get(1).style.display = 'none';
                              $('.top').get(0).style.display = 'block';
                          }
    );
}();
/*交易记录颜色*/
function jyColor() {
    var reg = /^[+|-]/;
    var reg0 = /^[+]/;
    $color = $('.jy_color ul li:nth-child(3)');
    $color.each(function (index) {
                    if (reg.test($color[index].innerHTML)) {
                        if (reg0.test($color[index].innerHTML)) {
                            $color[index].style.color = '#339900'
                        } else {
                            $color[index].style.color = '#FF0000'
                        }
                    } else {

                    }
                }
    )

}
jyColor();

dataHref();
/*铺满屏幕*/
function secondHeight1() {
    if ($('div').hasClass('my_account')) {
        return $('.my_account')
    } else {
        return $('body')
    }
}
secondHeight1() === $('body') ? $('body') : secondHeight1().css('min-height', '548px');
























