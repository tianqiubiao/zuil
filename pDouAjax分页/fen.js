var $ajax = function (url, callback) {
    var xhr = new XMLHttpRequest;
    url.indexOf("?") > -1 ? url += "&_=" + Math.random() : url += "?_=" + Math.random();
    xhr.open("get", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            var con = xhr.responseText;
            con = JSON.parse(con);
            typeof callback === "function" ? callback(con) : null;
        }
    };
    xhr.send(null);
};
//<div class="fyList row " date-pagination="huikuan" regularType="1" id='1a'>
//<div class="fylistBtn pre">上一页</div>
//    <div>
//    <ul>
//    <li class="fyListBg">1</li>
//    <li>2</li>
//    <li>3</li>
//    <li>4</li>
//    <li>5</li>
//    <li>6</li>
//    <li>7</li>
//    <li>8</li>
//    <li>9</li>
//    </ul>
//    </div>
//    <div class="fylistBtn next">下一页</div>
//    </div>
/*
 * farD=#1a
 * ul=
 *方法执行需要传递分页id，ul的id ，展示内容的id
 * 1 回款
 * 2 结束
 * */
/*
 *
 * 第一次请求：
 *     绑定第一页数据
 *     绑定分页列表；
 *     改变颜色；
 *
 *
 *
 *
 *
 *
 *
 *
 * */

//    var page = 1, totalPage, curPage;
//    $ajax("/myRegularInvsetRepayment?currPage=" + 1 + "&regularType=" + 1, function (con) {
//              var totalPage = con.totalPage;
//              bindList(con);
//              bindPage(totalPage, a);
//              changePage(a)
//          }
//    );
//    $('#1T').click(function () {
//                       $ajax("/myRegularInvsetRepayment?currPage=" + 1 + "&regularType=" + 1, function (con) {
//                                 totalPage = con.totalPage;
//                                 bindList(con);
//                                 bindPage(totalPage, a);
//                                 changePage(a)
//                             }
//                       );
//                       $('#hui').unbind('click');
//                   }
//    )
//    //a
//    $('#2T').click(function () {
//                       $ajax("/myRegularInvsetRepayment?currPage=" + 1 + "&regularType=" + 1, function (con) {
//                                 bindList(con);
//                                 bindPage(totalPage, a);
//                                 changePage(a)
//                             }
//                       );
//                       $(this).attr('date-pagination', '');
//                       $(this).unbind('click')
//                   }
//    )
//var totlePagerep = 15, page = 1, farD = '2a', ul = '2u';
//    Page(totlePagerep, page, '2');
function PAGE(type, id,pageId, pageUId, t){
    var page=1;
     function  bindList(con, id) {
        var str = "";
        var mapLIst = con.mapListRepayment;
        for (var i = 0; i < mapLIst.length; i++) {
            var cur = mapLIst[i];
            str += '<ul><li>';
            str += '<div class="deco">' + cur.bidTitle + '</div>';
            str += '<div>3个月·12%·先息后本</div></li>';
            str += '<li>' + cur.transferNumber + '</li>';
            str += '<li>' + cur.InvestId + '</li>';
            str += '<li>' + cur.bidInvestAmount + '</li>';
            str += '<li>' + cur.nextRepaymentTime + '</li>';
            str += '<li>' + cur.toRepaymentTime + '</li>';
            str += '<li>';
            str += '<div class="colorNum" data-href="w-huikuangixnagqing.html">回款详情</div>';
            str += '<div class="redNum" data-href="w-acountzr.html">转让</div>';
            str += '</li></ul>';
        }
        var dataList = document.getElementById(id);
        dataList.innerHTML = str;

    }
    function bindPage(pageUId, t) {
        var str = "";
        for (var i = 1; i <= t; i++) {
            str += "<li>" + i + "</li>";
        }
        document.getElementById(pageUId).innerHTML = str;
    }
    function  changePage(pageUId) {
        var oLis = document.getElementById(pageUId).getElementsByTagName("li");
        for (var i = 0; i < oLis.length; i++) {
            oLis[i].className = (i + 1) == objPage.page ? "fyListBg" : null;
        }
    }
    function changeClick(id, pageId, pageUId, type,t) {
        document.getElementById(pageId).onclick = function (e) {
            e = e || window.event;
            var tar = e.target || e.srcElement;

            //->说明点击的是每一个LI页码
            if (tar.tagName.toLowerCase() === "li") {
                page = t;
                objPage.runGet(id, pageId, pageUId, type);
                return;
            }

            //->fir:首页 pre:上一页 next:下一页 last:尾页
            if (tar.className === "fylistBtn fir") {
                page = 1;
                objPage.runGet(id, pageId, pageUId, type);
                return;
            }

            if (tar.className === "fylistBtn last") {
                page = t;
                objPage.runGet(id, pageId, pageUId, type);
                return;
            }

            if (tar.className === "fylistBtn pre") {
                if (page == 1) {
                    return;
                }
                page--;
                objPage.runGet(id, pageId, pageUId, type);
                return;
            }

            if (tar.className === "fylistBtn next") {
                console.log(objPage.totalPage)
                if (page == objPage.totalPage) {
                    return;
                }
                page++;
                objPage.runGet(id, pageId, pageUId, type);
                return;
            }
        }
    }
    function runGet(id, pageUId, type,t) {
        $ajax("/myRegularInvsetRepayment?currPage=" + page + "&regularType=" + type, function (con) {
                  objPage.bindList(con, id);
                  objPage.changePage(pageUId);
              }
        );
    }
    function runOneGet(type, id,pageId, pageUId, t) {
        $ajax("/myRegularInvsetRepayment?currPage=" + 1 + "&regularType=" + type, function (con) {
                  objPage.totalPage = t;
                  objPage.bindList(con, id);
                  objPage.bindPage(pageUId, t);
                  objPage.changePage(pageUId);
                  objPage.changeClick(id, pageId, pageUId, type,t)
              }
        )
    }
}
var objPage =new Object({
    page: 1,
    bindList: function (con, id) {
        var str = "";
        var mapLIst = con.mapListRepayment;
        for (var i = 0; i < mapLIst.length; i++) {
            var cur = mapLIst[i];
            str += '<ul><li>';
            str += '<div class="deco">' + cur.bidTitle + '</div>';
            str += '<div>3个月·12%·先息后本</div></li>';
            str += '<li>' + cur.transferNumber + '</li>';
            str += '<li>' + cur.InvestId + '</li>';
            str += '<li>' + cur.bidInvestAmount + '</li>';
            str += '<li>' + cur.nextRepaymentTime + '</li>';
            str += '<li>' + cur.toRepaymentTime + '</li>';
            str += '<li>';
            str += '<div class="colorNum" data-href="w-huikuangixnagqing.html">回款详情</div>';
            str += '<div class="redNum" data-href="w-acountzr.html">转让</div>';
            str += '</li></ul>';
        }
        var dataList = document.getElementById(id);
        dataList.innerHTML = str;

    },
    bindPage: function (pageUId, t) {
        var str = "";
        for (var i = 1; i <= t; i++) {
            str += "<li>" + i + "</li>";
        }
        document.getElementById(pageUId).innerHTML = str;
    },
    changePage: function (pageUId) {
        var oLis = document.getElementById(pageUId).getElementsByTagName("li");
        for (var i = 0; i < oLis.length; i++) {
            oLis[i].className = (i + 1) == objPage.page ? "fyListBg" : null;
        }
    },
    changeClick: function (id, pageId, pageUId, type,t) {
        document.getElementById(pageId).onclick = function (e) {
            e = e || window.event;
            var tar = e.target || e.srcElement;

            //->说明点击的是每一个LI页码
            if (tar.tagName.toLowerCase() === "li") {
                page = t;
                objPage.runGet(id, pageId, pageUId, type);
                return;
            }

            //->fir:首页 pre:上一页 next:下一页 last:尾页
            if (tar.className === "fylistBtn fir") {
                page = 1;
                objPage.runGet(id, pageId, pageUId, type);
                return;
            }

            if (tar.className === "fylistBtn last") {
                page = t;
                objPage.runGet(id, pageId, pageUId, type);
                return;
            }

            if (tar.className === "fylistBtn pre") {
                if (page == 1) {
                    return;
                }
                page--;
                objPage.runGet(id, pageId, pageUId, type);
                return;
            }

            if (tar.className === "fylistBtn next") {
                console.log(objPage.totalPage)
                if (page == objPage.totalPage) {
                    return;
                }
                page++;
                objPage.runGet(id, pageId, pageUId, type);
                return;
            }
        }
    },
    runGet: function (id, pageUId, type,t) {
        $ajax("/myRegularInvsetRepayment?currPage=" + page + "&regularType=" + type, function (con) {
                  objPage.bindList(con, id);
                  objPage.changePage(pageUId);
              }
        );
    },
    runOneGet: function (type, id,pageId, pageUId, t) {
        $ajax("/myRegularInvsetRepayment?currPage=" + 1 + "&regularType=" + type, function (con) {
                  objPage.totalPage = t;
                  objPage.bindList(con, id);
                  objPage.bindPage(pageUId, t);
                  objPage.changePage(pageUId);
                  objPage.changeClick(id, pageId, pageUId, type,t)
              }
        )
    }
});
//    (id, pageId, pageUId, type,t)
$('#t1').click(function () {
                   console.log(1)
                   objPage.runOneGet(1, '1','1a', '1u', 2);
                   $('#t1').unbind('click')
               }
)
$('#t2').click(function () {
                   console.log(2)
                   objPage.runOneGet(1, '2', '2a','2u', 6);
                   $('#t2').unbind('click')
               }
)










































//function (farD, ul, type, inner) {
//    var page = 1, totalPage = 0;
//}
////    id 名 绑定页码 传递ul
//function bindPage(ul) {
//    var str = "";
//    for (var i = 1; i <= totalPage; i++) {
//        str += "<li>" + i + "</li>";
//    }
//    document.getElementById(ul).innerHTML = str;
//}
////    a 传递ul id名 改变页码颜色
//function changePage(ul) {
//    var oLis = document.getElementById(ul).getElementsByTagName("li");
//    for (var i = 0, len = oLis.length; i < len; i++) {
//        if (len > 9 && page >= 5 && page <= totalPage - 4) {
//            oLis[4].className="fyListBg";
//            return;
//        } else {
//            oLis[i].className = (i + 1) == page ? "fyListBg" : null;
//        }
//    }
//}
////wu
//function bindList(data) {
//    var str = "";
//    var mapLIst = data.mapListRepayment;
//    for (var i = 0; i < mapLIst.length; i++) {
//        var cur = mapLIst[i];
//        str += '<ul><li>';
//        str += '<div class="deco">' + cur.bidTitle + '</div>';
//        str += '<div>3个月·12%·先息后本</div></li>';
//        str += '<li>' + cur.transferNumber + '</li>';
//        str += '<li>' + cur.InvestId + '</li>';
//        str += '<li>' + cur.bidInvestAmount + '</li>';
//        str += '<li>' + cur.nextRepaymentTime + '</li>';
//        str += '<li>' + cur.toRepaymentTime + '</li>';
//        str += '<li>';
//        str += '<div class="colorNum" data-href="w-huikuangixnagqing.html">回款详情</div>';
//        str += '<div class="redNum" data-href="w-acountzr.html">转让</div>';
//        str += '</li></ul>';
//    }
//    var dataList = document.getElementById(inner);
//    dataList.innerHTML = str;
//}
//function changeList() {
//    document.getElementById(farD).onclick = function (e) {
//        e = e || window.event;
//        var tar = e.target || e.srcElement;
//
//        if (tar.tagName.toLowerCase() === "li") {
//            page = Number(tar.innerHTML);
//            getInfoModel(ul);
//            return;
//        }
//
//        //->fir:首页 pre:上一页 next:下一页 last:尾页
//        if (tar.className === "fir") {
//            page = 1;
//            getInfoModel(ul);
//            return;
//        }
//
//        if (tar.className === "last") {
//            page = totalPage;
//            getInfoModel(ul);
//            return;
//        }
//
//        if (tar.className === "fylistBtn pre") {
//            if (page == 1) {
//                return;
//            }
//            page--;
//            getInfoModel(ul);
//            return;
//        }
//
//        if (tar.className === "fylistBtn next") {
//            if (page == totalPage) {
//                return;
//            }
//            page++;
//            getInfoModel(ul);
//            return;
//        }
//    };
//
//    function getInfoModel(type) {
//        $ajax("/myRegularInvsetRepayment?currPage=" + page + "&regularType=" + type, function (con) {
//                  bindList(con);
//                  var dataList = document.getElementById(inner);
//                  dataList.innerHTML = str;
//                  changePage(ul)
//              }
//        );
//    }
//
////        使列表居中 宽：33*li+154
//
//}