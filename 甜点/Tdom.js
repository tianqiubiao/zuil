/**
 * Created by tianqiubiao on 2016/8/15.
 */
/*! Tdom v0.0.02  2016.08.15 */
var aryImgUrl = ["public/images/afterNav.png", "public/images/about_banner.jpg", "public/images/afterNav.png", "public/images/about_banner.jpg"];//图片地址
var aryDateUrl=["sellMoney.html","tarenzhuanrang.html","safe.html","about-team.html"];
var imgStr = '', ulStr = '';
for (var j = 0; j < aryImgUrl.length; j++) {
    imgStr += '<img src=' + aryImgUrl[j]+ ' data-href='+aryDateUrl[j]+ ' style="z-index: ' + -j +'">';
    ulStr += '<li></li>';
}
imgStr += '<img src=' + aryImgUrl[0] + ' data-href='+aryDateUrl[0]+  ' style="z-index: ' + -aryImgUrl.length + '">';
//    $('#banner_img_List').css('width',1920*(aryImgUrl.length+1)+'px');
$('#banner_img_List').css('width', '1920px');
$('#banner_img_List').html(imgStr);
$('#bannerItem').html(ulStr);
dataHref();
(function () {
    var step = 0, count = aryImgUrl.length, moveL = 1920
    var $inner = $("#banner_img_List"), $tip = $("#bannerItem"), $tipList = $tip.children("li");
    window.setTimeout(function () {
                          $($inner.find('img')[step]).stop().animate({opacity: 0}, 1000, function () {
                                                                         $($inner.find('img')[step]).css('display', 'none');
                                                                     }
                          );
                          var autoTimer = window.setInterval(autoMove, 4000);
                      }, 3000
    )
    function autoMove() {
        step++;
        if (step >= count) {
//                $inner.css("left", 0);
            $inner.find('img').css({'display': 'block', 'opacity': 1});
            step = 0;
        }
        $($inner.find('img')[step]).stop().animate({opacity: 0}, 1000, function () {
                                                       $($inner.find('img')[step]).css('display', 'none');
                                                   }
        );
//            $inner.find('img').each(function(){
//                $(this).stop().animate({opacity: 0}, 1000);
//            })
            changeTip();
    }

        function changeTip() {
            var temp = step;
            temp >= count ? temp = 0 : null;
            $tipList.each(function (index, item) {
                index === temp ? $(this).addClass("bg") : $(this).removeClass("bg");
            });
        }

    ->点击焦点实现切换
        $tipList.bind("click", function () {
            window.clearInterval(autoTimer);
            step = $(this).index();
            $inner.stop().animate({left: -step * moveL}, 500);
            changeTip();
            autoTimer = window.setInterval(autoMove, 2000);
        });

    ->左右切换
        $("#banner_img").find('a').click(function () {
            window.clearInterval(autoTimer);
            if ($(this).index() === 2) {
                step--;
                if (step < 0) {
                    $inner.css("left", -count * 1000);
                    step = count - 1;
                }
                $inner.stop().animate({left: -step * moveL}, 500);
                changeTip();
            } else {
                autoMove();
            }

            autoTimer = window.setInterval(autoMove, 2000);
        });
})();
var $inner = $("#banner_img_List"), $tip = $("#bannerItem"), $tipList = $tip.children("li");

autoImg({
            aryImgUrl:aryImgUrl,
            aryDateUrl:aryDateUrl,
            img List:$('#banner_img_List'),
            bannerItem:'bannerItem',
            bannerImg:'banner_img'

        })
var autoImg=function(a){
    var step = 0, count = aryImgUrl.length, moveL = 1920;
    var imgStr = '', ulStr = '';
    for (var j = 0; j < aryImgUrl.length; j++) {
        imgStr += '<img src=' + aryImgUrl[j]+ ' data-href='+aryDateUrl[j]+ ' style="z-index: ' + -j +'">';
        ulStr += '<li></li>';
    }
    imgStr += '<img src=' + aryImgUrl[0] + ' data-href='+aryDateUrl[0]+  ' style="z-index: ' + -aryImgUrl.length + '">';
    $("#"+ a.banner_img_List).css('width', '1920px');
    $("#"+ a.banner_img_List).html(imgStr);
    $("#"+ a.bannerItem).html(ulStr);
    var $inner = $("#"+ a.banner_img_List), $tip = $("#"+ a.bannerItem), $tipList = $tip.children("li");
    window.setTimeout(function () {
                          $($inner.find('img')[step]).stop().animate({opacity: 0}, 1000, function () {
                                                                         $($inner.find('img')[step]).css('display', 'none');
                                                                     });
                          var autoTimer = window.setInterval(autoMove, 4000);
                      }, 3000
    )
    function autoMove() {
        step++;
        if (step >= count) {
//                $inner.css("left", 0);
            $inner.find('img').css({'display': 'block', 'opacity': 1});
            step = 0;
        }
        $($inner.find('img')[step]).stop().animate({opacity: 0}, 1000, function () {
                                                       $($inner.find('img')[step]).css('display', 'none');
                                                   }
        );
//            $inner.find('img').each(function(){
//                $(this).stop().animate({opacity: 0}, 1000);
//            })
//        changeTip();
    }

    //function changeTip() {
    //    var temp = step;
    //    temp >= count ? temp = 0 : null;
    //    $tipList.each(function (index, item) {
    //        index === temp ? $(this).addClass("bg") : $(this).removeClass("bg");
    //    });
    //}

    //$tipList.bind("click", function () {
    //    window.clearInterval(autoTimer);
    //    step = $(this).index();
    //    $inner.stop().animate({left: -step * moveL}, 500);
    //    changeTip();
    //    autoTimer = window.setInterval(autoMove, 2000);
    //});

    //$("#"+ a.banner_img).find('a').click(function () {
    //    window.clearInterval(autoTimer);
    //    if ($(this).index() === 2) {
    //        step--;
    //        if (step < 0) {
    //            $inner.css("left", -count * 1000);
    //            step = count - 1;
    //        }
    //        $inner.stop().animate({left: -step * moveL}, 500);
    //        changeTip();
    //    } else {
    //        autoMove();
    //    }
    //
    //    autoTimer = window.setInterval(autoMove, 2000);
    //});

}