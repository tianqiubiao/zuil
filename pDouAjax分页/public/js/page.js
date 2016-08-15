//    obj.runOneGet(1, '1', '1a', '1u', 20);
//        类型 展示数据id 分页列表id  页码id  页码数量


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

var objPage = {
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
//           fn(con, id);执行方法
    },
    bindPage: function (pageUId, t, pageId) {
        var str = "";
        if (t >= 9) {
            $('#' + pageUId).css({'width': 33 * t});
            $('#' + pageUId).parent().css({'overflow': 'hidden', 'width': '289px'})
        } else {
            $('#' + pageId).css({'width': 154 + 33 * t});
        }
        for (var i = 1; i <= t; i++) {
            str += "<li>" + i + "</li>";
        }
        document.getElementById(pageUId).innerHTML = str;
    },
    changePage: function (pageUId, pageId, t) {
        var num = $('#' + pageId).attr('page');
        var oLis = document.getElementById(pageUId).getElementsByTagName("li");
        for (var i = 0, len = oLis.length; i < len; i++) {
            if (t > 9) {
                if (num - 5 >= 0 && t - num >= 4) {
                    $('#' + pageUId).css('left', -32 * (num - 5) + 'px')
                }
            }
            oLis[i].className = (i + 1) == num ? "fyListBg" : null;
        }
    },
    changeClick: function (id, pageId, pageUId, type, t) {
        var weNum = $('#' + pageId).attr('page');
        document.getElementById(pageId).onclick = function (e) {
            e = e || window.event;
            var tar = e.target || e.srcElement;
            if (tar.tagName.toLowerCase() === "li") {
                weNum = Number(tar.innerHTML);
                $('#' + pageId).attr('page', weNum);
                objPage.runGet(id, pageUId, type, t, pageId);
                return;
            }
            if (tar.className === "fylistBtn fir") {
                weNum = 1;
                $('#' + pageId).attr('page', weNum);
                objPage.runGet(id, pageUId, type, t, pageId);
                return;
            }

            if (tar.className === "fylistBtn last") {
                weNum = t;
                $('#' + pageId).attr('page', weNum);
                objPage.runGet(id, pageUId, type, t, pageId);
                return;
            }

            if (tar.className === "fylistBtn pre") {
                if (weNum == 1) {
                    return;
                }
                weNum--;
                $('#' + pageId).attr('page', weNum);
                objPage.runGet(id, pageUId, type, t, pageId);
                return;
            }

            if (tar.className === "fylistBtn next") {
                if (weNum == t) {
                    return;
                }

                weNum++;
                $('#' + pageId).attr('page', weNum);
                objPage.runGet(id, pageUId, type, t, pageId);
                return;
            }
        }
    },
    runGet: function (id, pageUId, type, t, pageId) {
        $ajax("/myRegularInvsetRepayment?currPage=" + $('#' + pageId).attr('page') + "&regularType=" + type, function (con) {
                  objPage.bindList(con, id);
                  objPage.changePage(pageUId, pageId, t);
              }
        );
    },
    runOneGet: function (type, id, pageId, pageUId, t) {
        $ajax("/myRegularInvsetRepayment?currPage=" + 1 + "&regularType=" + type, function (con) {
                  objPage.bindList(con, id);
                  objPage.bindPage(pageUId, t, pageId);
                  objPage.changePage(pageUId, pageId, t);
                  objPage.changeClick(id, pageId, pageUId, type, t);
              }
        )
    }
}
$('#t1').click(function () {
                   var obj = new Object(objPage);
                   obj.runOneGet(1, '1', '1a', '1u', 20);
                   $('#t1').unbind('click')
               }
)
$('#t2').click(function () {
                   var obj = new Object(objPage);
                   obj.runOneGet(1, '2', '2a', '2u', 6)
                   $('#t2').unbind('click')
               }
)
function fn(con, id) {

}