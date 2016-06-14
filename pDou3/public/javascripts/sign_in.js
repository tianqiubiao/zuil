/**
 * Created by 苏伊尔哈 on 2016/5/9.
 */
charset = 'uft8';
//登录界面
var phoneReg = /^(13[0-9]|14[5|7|9]|15[0-9]|17[0|1|[5-8]]|18[0-9])\d{8}$/;


function login() {
    var str = '';
    str += '<div class="sign_in">';
    str += '<div class="sign_top">登录</div>';
    str += '<div class="sign_close"></div>';
    str += '<div class="sign_foot">';
    str += '<div class="sign_footA">';
    str += '<div class="sign_footB sign_footD sign_phone"><input type="tel" placeholder="手机号" class="sign_tel1" id="userId"></div>';
    str += '<div class="sign_footC" id="worUesr" >您输入的手机号有误</div>';
    str += '</div>';
    str += '<div class="sign_footA">';
    str += '<div class="sign_footB sign_footD sign_footE sign_pass"><input type="password" placeholder="密码" class="sign_tel2" id="password"></div>';
    str += '<div class="sign_footC  sign_tel2_2">您输入的密码有误</div>';
    str += '</div>';
    str += '<div class="sign_footE">';
    str += '<div class="sign_footA">';
    str += '<div class="sign_footB"><input type="text" placeholder="不区分大小写" class="sign_tel3"></div>';
    str += '<div class="sign_fooC  sign_tel3_3"></div>';
    str += '</div>';
    str += '<div class="sign_footF"></div>';
    str += '</div>';
    str += '<div class="sign_down" id="loginBtn">登录</div>';
    str += '<div class="sign_in_down">';
    str += '<div class="redNum id_zh">注册领活动本金</div>';
    str += '<div class="queNum oldPassWord">忘记密码</div>';
    str += '</div>';
    str += '</div>';
    str += '</div>';

    $('.sign_on').html(str);
    $('.sign_close').click(function () {
                               $('.sign_on').css('display', '');
                           }
    )
    //登录验证
    //sign_tel1 手机号  sign_tel1_1警告框
    //sign_tel2 密码     sign_tel2_2
    //sign_tel3 验证码   sign_tel3_3
    //手机号验证
    $('#userId').blur(function () {
                          phone()
                      }
    )

    $('.sign_in').keydown(function (event) {
                              if (event.keyCode === 13) {
                                  if (phoneReg.test($('#userId').val())) {
                                      var user = $('#userId').val();
                                      var passWord = $('#password').val();
                                      var obj = {"user": user, "password": passWord}
                                      $("#loginBtn").trigger("click");
                                  }
                              }
                          });
    $("#loginBtn").click(function () {
                             if (phoneReg.test($('#userId').val())) {
                                 var user = $('#userId').val();
                                 var passWord = $('#password').val();
                                 var obj = {"user": user, "password": passWord}
                             }
                         })
    $('.oldPassWord').click(function () {
                                password()
                            });

//注册
    $('.id_zh').click(function () {
                          register();
                      }
    )
}

//实名认证
function trueName() {
    var str = '';
    str += '<div class="name_in">';
    str += '<div class="sign_top">实名认证</div>';
    str += '<div class="sign_close" ></div>';
    str += '<div class="trueNameFoot">';
    str += '<div class="trueNameA">';
    str += '<div>真实姓名：</div>';
    str += '<div><input type="text" class="trueName_1" id="trueName_1" ></div>';
    str += '</div>';
    str += '<div class="trueNameA">';
    str += '<div>身份证号：</div>';
    str += '<div><input type="text" class="trueName_2" id="trueName"></div>';
    str += '</div>';
    str += '<div class="sign_down" id="trueNameDown">立即认证</div>';
    str += '</div>';
    str += '</div>';
    $('.trueName').html(str);
    $('.sign_close').click(function () {
                               $('.sign_on').css('display', '');
                           }
    )
//实名验证
    //trueName_1 name
    //trueName_2 身份证号

    /*
     * -----------------------------------------------------------------------------------------省份-市区县-----年------------月-------日-----
     * /^((1[1|2|3|4|5])|(2[1|2|3])|(3[1|2|3|4|5|6|7])|(4[1|2|3|4|5|6])|(5[0|1|2|3|4])|(6[1|2|3|4|]))(\d{4})(19)([5-9]\d)(0|1[\d])(0|1|2[\d])(?:\d{2})(\d)(?:\d|X)$/
     * var reg=/^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-4]))([0-4]|9)(\d{3})(19)([5-9]\d)(0|1[\d])(0|1|2[\d])(?:\d{2})(\d)(?:\d|X)$/;
     * var reg=/^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-4]))(\d{4})(19)([5-9]\d)(0|1[\d])(0|1|2[\d])(?:\d{2})(\d)(?:\d|X)$/;
     * 中文正则
     * var re = /[^\u4e00-\u9fa5]/;
     * */
    $('.trueName').css('display', 'block');
    var re = /[^\u4e00-\u9fa5]/;
    var reg = /^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-4]))([0-4]|9)(\d{3})(19)([5-9]\d)(0|1[\d])([0-2][\d])(?:\d{2})(\d)(?:\d|X|x)$/;
    $('#trueName').blur(function () {
                            var st = $('#trueName').val();
                            if (st.length === 18) {
                                if (!re.test(st)) {
                                    $(this).parent().css('border-color', 'red');
                                } else {
                                    $(this).parent().css('border-color', '#ccc');
                                }
                            } else {
                                $(this).parent().css('border-color', 'red');
                            }
                        }
    )
    $('#trueName_1').blur(function (e) {
                              //name(e)
                              var str = $('#trueName_1').val();
                              if (!re.test(str)) {
                                  if (str.length >= 2) {
                                      $(this).parent().css('border-color', '#ccc');
                                  } else {
                                      $(this).parent().css('border-color', 'red');
                                  }
                              } else {
                                  $(this).parent().css('border-color', 'red');
                              }


                          }
    )
    $('#trueNameDown').click(function (e) {


                             })


}

//注册页面
function register() {
    var str = "";
   str+='  <div class="sing">';
    str += '<div class="sign_close" ></div>';
    str+='<div class="singIn">';

    str+='<div class="singInL"><img src="public/images/sing-in.png" alt=""></div>';
    str+='<div class="singInR">';
    str+='<div class="singInR1">';
    str+='<div class="singInRL"><span>*</span>注册手机号</div>';
    str+='<div class="singInRR"><input type="tel" placeholder="您在P兜的身份凭证" id="sing0"></div>';
    str+='</div>';
    str+='<div class="singInR1">';
    str+='<div class="singInRL"><span>*</span>登录密码</div>';
    str+='<div class="singInRR"><input type="text" placeholder="请设置6-12位密码" id="sing1"></div>';
    str+='</div>';
    str+='<div class="singInR1">';
    str+='<div class="singInRL"><span>*</span>确认登录密码</div>';
    str+='<div class="singInRR"><input type="text" placeholder="请确认密码" id="sing2"></div>';
    str+='</div>';
    str+='<div class="singInR1" style="margin-top: 0">';
    str+='<div class="singInRL"><span>*</span>验证码</div>';
    str+='<div class="singInRR"><input type="text" placeholder="不区分大小写" id="sing3">';
    str+='</div>';
    str+='<div class="trueImg">';
    str+='<div></div>';
    str+='<div>点击换图</div>';
    str+='</div>';
    str+='</div>';
    str+='<div class="singInR1">';
    str+='<div class="singInRL">邀请码</div>';
    str+='<div class="singInRR"><input type="text" placeholder="选填" id="sing4"></div>';
    str+='</div>';
    str+='<div class="singInLas  trueDisplay" id="sing5">';
    str+=' <span><img src="public/images/greenT.png" alt="false"></span>我已阅读并同意 <a href="javascript:;">《P兜理财用户服务协议》</a>';
    str+='</div>';
    str+='<div class="singInLast true_sign_on"><a href="javascript:;">注&nbsp;册</a></div>';
    str+='<div id="worUesr"></div>';
    str+='<div id="passW"></div>';
    str+='<div id="passWT"></div>';
    str+='<div id="trueI"></div>';
    str+='</div>';
    str+='</div>';
    str+='</div>';
    $('.sign_on').html(str).css('display', 'block');
    $('.sign_close').css('left', '95%').css('top', '50px');
    $('.sign_close').click(function () {
                               $('.sign_on').css('display', 'none')
                           }
    )
    $('.trueDisplay>span').click(function() {
        if($(this).children()[0].alt==='false'){
            $(this).children().css('display', 'block');
            $(this).children()[0].alt='true';
            $('.true_sign_on').click(function(){alert(1)
           //发送请求；
            })
        }else {
            $(this).children().css('display', 'none');
            $(this).children()[0].alt='false';
            $('.true_sign_on').unbind('click');
        }

    })
    $('#userId').blur(function () {
                          phone()
                      }
    );

}

//绑定交易列表  ：没有数据
function my_accountList1() {
    var str = ''
    str += '<ul>';
    str += '<li>时间</li>';
    str += '<li>交易类型</li>';
    str += '<li>金额</li>';
    str += '<li>账户余额</li>';
    str += '<li>备注</li>';
    str += '</ul>';
    $('#my_accountList1').html(str);
}
//手机号验证
function phone() {
    if ($('#userId').val().length === 0) {
        $('#worUesr').css('display', 'block');
        $('#worUesr').html('请输入手机号！')
    } else {
        if (!phoneReg.test($('#userId').val())) {
            $('#worUesr').css('display', 'block');
            $('#worUesr').html('请输入正确手机号！')

        } else {
            $('#worUesr').css('display', 'none');
        }
    }


}

function password() {
    var str = '';
    str += '<div class="sign_close"></div>';
    str += '<div class="password">';

    str += '<div class="passwordTop"><span></span>  找回密码</div>';
    str += '<div class="passwordFoot">';
    str += '<div class="passwordFootA">';
    str += '<div class="passwordFootB"><span>*</span>手机号码</div>';
    str += '<div class="passwordFootC">';
    str += '<div class="passwordFootD"><input type="tel" placeholder="请输入您的手机号码" id="userId"></div>';
    str += '</div>';
    str += '</div>';
    str += '<div class="passwordFootA">';
    str += '<div class="passwordFootB"><span>*</span>图形验证码</div>';
    str += '<div class="passwordFootC">';
    str += '<div class="passwordFootE"><input type="text" placeholder="不区分大小写"></div>';
    str += '<div class="passwordFootF">';
    str += '<div></div>';
    str += '<div>点击换图</div>';
    str += '</div>';
    str += '</div>';
    str += '</div>';
    str += '<div class="passwordFootDown">下一步</div>';
    str += '</div>';
    str += '<div id="worUesr">1</div>';
    str += '<div id="trueI">4</div>';
    str += '</div>';
    $('.sign_on').html(str).css('display', 'block');
    $('.sign_close').css('left', '95%').css('top', '50px');
    $('.sign_close').click(function () {
                               $('.sign_on').css('display', 'none')
                           }
    )
    $('#userId').blur(function () {
                          phone()
                      }
    );
    $('.passwordFootDown').click(function () {
                                     passNext();
                                 }
    )
}
function twoPassWord(that) {
    var firstPass = $('#firstPass').val(), secPass = $('#secPass').val();
    var those = that.val();
    return those.length === 0 ? that.parent().parent().parent().next().css('display', 'block').html('请输入密码') : a(those);
    function a(those) {
        console.log(those.length)
        return (those.length >= 6 && those.length <= 12) ? that.parent().parent().parent().next().css('display', 'none') : that.parent().parent().parent().next().css('display', 'block').html('请输入正确密码！');
    }
}
//重置密码
function passNext() {
    var st = '';
    st += '<div class="passwordTop"><span></span>  重置密码</div>';
    st += '<div class="passwordFoot">';
    st += '<div class="passwordFootA">';
    st += '<div class="passwordFootB">账号</div>';
    st += '<div class="passwordFootC">';
    st += '<div class="passwordFootD" style="border: none;line-height: 40px;font-size: 30px;">18500047625</div>';
    st += '</div>';
    st += '</div>';
    st += '<div class="passwordFootA">';
    st += '<div class="passwordFootB"><span>*</span>登录密码</div>';
    st += '<div class="passwordFootC">';
    st += '<div class="passwordFootD"><input type="password" placeholder="请输入6-12位密码" id="firstPass"></div>';
    st += '</div>';
    st += '</div>';
    st += '<div id="worUesr">1</div>';
    st += '<div class="passwordFootA">';
    st += '<div class="passwordFootB"><span>*</span>手机号码</div>';
    st += '<div class="passwordFootC">';
    st += '<div class="passwordFootD"><input type="password" placeholder="请确认密码" id="secPass"></div>';
    st += '</div>';
    st += '</div>';
    st += '<div id="trueI">4</div>';
    st += '<div class="passwordFootDown">确认修改</div>';
    st += '</div>';

    $('.password').html(st);
    $('#worUesr').css('top', '267px');
    $('#trueI').css('top', '327px');
    $('input[type="password"]').blur(function (e) {
                                         that = $(this);
                                         return twoPassWord(that)
                                     })

}






























