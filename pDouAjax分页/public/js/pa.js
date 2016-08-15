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
var page = 1;
function unAttr(that) {
    var a = $(that).attr('date-pagination');
    $ajax("/myRegularInvsetRepayment?currPage=" + page + "&regularType=" + 1, function (con) {
              bindList(con, a);
              $(that).attr('date-pagination', '');

          }
    );
}

$('#hui').click(function () {
                    var that = this;
                    unAttr(that);
                    $(this).unbind('click')
                }
)
$('#jie').click(function () {
                    var that = this;
                    unAttr(that)
                    $(this).unbind('click')
                }
)
$('.fyList').each(function () {
                      $(this).click(function (e) {
                                        console.log(e.target)
                                    }
                      )
                  }
)
function bindList(data, a) {
    var str = "";
    var mapLIst = data.mapListRepayment;
    for (var i = 0; i < mapLIst.length; i++) {
        var cur = mapLIst[i];
        if (a === 'huikuan') {
            console.log(cur)
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

        } else if (a === 'jieshu') {
            str += '<ul><li>';
            str += '<div class="deco">' + cur.bidTitle + '</div>';
            str += '<div>3个月·12%·先息后本</div></li>';
            str += '<li>' + cur.transferNumber + '</li>';
            str += '<li>' + cur.InvestId + '</li>';
            str += '<li>' + cur.toRepaymentTime + '</li>';
            str += '<li><span class="colorNum">回款详情</span></li></ul> ';
        }

    }
    var dataList = document.getElementById(a);
    console.log(a)
    dataList.innerHTML = str;
    dataHref()
}

//回款中
function huikuan() {
    var str = '';
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
//已结束
function jieshu() {
    var str = '';
    str += '<ul><li>';
    str += '<div class="deco">' + cur.bidTitle + '</div>';
    str += '<div>3个月·12%·先息后本</div></li>';
    str += '<li>' + cur.transferNumber + '</li>';
    str += '<li>' + cur.InvestId + '</li>';
    str += '<li>' + cur.toRepaymentTime + '</li>';
    str += '<li><span class="colorNum">回款详情</span></li></ul> ';
}
//活动本金
function huodongBenjin() {
    var str = '';
    str += '<ul>';
    str += '<li>8000</li>';
    str += '<li>2016-01-01</li>';
    str += '<li>2016-01-07</li>';
    str += '<li>25.7</li>';
    str += '</ul>';
}
//交易记录
function jiaoyiJilu() {
    var str = '';
    str += '<ul>';
    str += '<li>2016-04-13 15:58:52</li>';
    str += '<li>充值</li>';
    str += '<li style="color: rgb(51, 153, 0);">+10，000，000.00</li>';
    str += '<li>1，000.00</li>';
    str += '<li>充值</li>';
    str += '</ul>';
}
//我的消息
function xiaoxi() {
    var str = '';
    str += '<div class="account_masgerList">';
    str += '<div class="row account_masgerListTop">';
    str += '<span class="chickbtn">';
    str += '<input type="checkbox" id="checkboxInput3" name="subBox">';
    str += '<label for="checkboxInput3"></label>';
    str += '</span>提现最新状态提醒 <span class="right">2006.03.03 14:30:00</span></div>';
    str += '<div class=" account_masgerListFoot" style="display: none">';
    str += '<div>您申请提现的374349.00云已成功到尾号2129的银行卡账户</div>';
    str += '<div>申请日期 <span>2016-0303 14:25:35</span></div>';
    str += '<div>提现金额：<span class="color_pink">100.00</span>元</div>';
    str += '<div class="row"><span>最新状态：已到账</span> <span class="right yellowNum">查看详情 &gt;&gt;</span>';
    str += '</div></div></div>';
}
//定期理财
function dingQiLiCai() {
    var str = '';
    str += '<div data-href="w-dingqitoubiao.html"><ul>';
    str += '<li class="bgGreen mCLi1"><p>定宝</p></li>';
    str += '<li class="queNum  mCLi2"><p>按月付息</p>';
    str += '<p>到期换本</p></li>';
    str += '<li class="mCLi3">';
    str += '<p><span class="redNum">10</span><span class="redNum">%</span><span class="lightOrangeNum">+</span><span class="lightOrangeNum">2</span><span class="lightOrangeNum">%</span></p>;
    str += '</li>';
    str += '<li class="mCLi4 lightGreenNum">';
    str += '<p><span>2</span>个月</p>';
    str += '</li>';
    str += '<li class="mCLi5 lightGreenNum">';
    str += '<p><span>250,000.00</span><span>/</span><span>50</span><span>万</span></p>';
    str += '</li>';
    str += '<li class="mCLi6 sellHeight">';
    str += '<span class="bgGreen"></span>';
    str += '<span class="bglightGreen sellHeight" style="height: 0%;"></span>';
    str += '<span class="sellHeightNum">100%</span>';
    str += '</li>';
    str += '<li class="mCLi7  bgPink"><p>立即购买</p></li>';
    str += '</ul></div>';
}

//他人转让
function taRenZhuanRang() {
    var str = '';
    str += '<ul data-href="w-goumaizhuanrang.html">';
    str += '<li class="bgGreen mCLi1"><p>定宝</p></li>';
    str += '<li class="queNum  mCLi2"><p>按月付息</p>';
    str += '<p>到期还本</p></li>';
    str += '<li class="mCLi3">';
    str += '<div><span class="redNum">10.01</span><span class="redNum">%</span></div>';
    str += '<div>年化收益率</div></li>';
    str += '<li class="mCLi5 lightGreenNum">';
    str += '<div><span>180</span><span>天</span></div>';
    str += '<div>剩余期限</div></li>';
    str += '<li class="mCLi6">';
    str += '<div class="lcFDCO">';
    str += '<div class="lcFDCI"><div>';
    str += '<div class="zrWidth" style="width: 27.7778%;"></div>';
    str += '<p class="bfb_J">50/180份</p>';
    str += '</div></div></div></li>';
    str += '<li class="mCLi7 bgPink"><p>立即购买</p></li></ul>';
}





