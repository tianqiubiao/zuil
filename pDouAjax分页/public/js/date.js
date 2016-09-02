/**
 * Created by tianqiubiao on 2016/7/1.
 */
function getEle(ele) {
    return document.getElementById(ele);
}
function getTag(ele, a) {
    return ele.getElementsByTagName(a);
}
//function weekList() {
//    var str = '';
//    str += '<div class="relative Date_top"><div class="absolute Date_top1 " id="prevmonth"></div><div class="absolute Date_top2" id="nextmonth"></div><div class="monthDate"><span id="year">2016</span> <span id="month">05</span></div></div>';
//    str += '<div class="weekList"><ul class="row"><li>周日</li><li>周一</li><li>周二</li><li>周三</li><li>周四</li><li>周五</li><li>周六</li></ul></div>';
//    str += '<div class="dayList"><ul class="row" id="dayList"></ul></div>'
//    return str;
//}

var year         = getEle('year'),
    month        = getEle('month'),
    prevM        = getEle('prevmonth'),
    nextM        = getEle('nextmonth'),
    day          = getEle('DayList'),
    monthDayList = isLeapYear(year.innerHTML),
    monthLength;
/*年月加减*/
var aryMonth = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
/*0-11*/
var monthItem = month.innerHTML-1;


function changeAll(dateList){
	//console.log(dateList);
    monthLength = monthDayList[monthItem];
    calendar(dateList);
}

//changeAll();



/*上一月*/
function prevMonth(){
    var year= getEle('year').innerHTML,month=getEle('month').innerHTML, a,b;
    //console.log(typeof(year));
    if (month=== '01') {
        b=year - 1;
        a='12';
    } else {
        a=month;
        a=  a <= 10 ? '0' + (a - 1) :  a - 1;
        b=year;
    }
    monthDayList = isLeapYear(getEle('year').innerHTML);
    //console.log(b + ',' + a);
    return  b+'-'+a
}
/*下一月*/
function nextMonth(){
    var year= getEle('year').innerHTML,month=getEle('month').innerHTML, a,b;
    //console.log(typeof(year));
    if (month=== '12') {
        b= Number(year) + 1;
        a='01';
    } else {
        a=Number(month);
        a < 9 ?a= '0' + (a + 1) :a=  a + 1;
        b=year;
    }
    monthDayList = isLeapYear(getEle('year').innerHTML);
    //console.log(b + ',' + a);
    return  b+'-'+a
}
/*每年每月天数*/
function isLeapYear(y) {
    var secondMonthDays = y % 4 === 0 ? secondMonthDays = '29' : secondMonthDays = '28';
    return ['31', secondMonthDays, '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
}
/* 上月日期*/
function preAll() {
    if (getEle('month').innerHTML=== '01') {
        return new Date(year.innerHTML - 1, 11, monthDayList[11]).getDay();
    } else {
        return new Date(year.innerHTML, getEle('month').innerHTML-2, monthDayList[getEle('month').innerHTML-2]).getDay();
    }
}
/*绑定列表
 * monthItem-1是上个月
 */
function calendar(dateList){
	var itemDate = 0;
    dayList()
    function dayList() {
        var preD = preAll();
        var head = (7 - preD) === 1 ? 0 : preD + 1,
            foot = 42 - head - monthLength;//剩余天数;
        var str = '<ul class="row">';
        var lastDayNum;
        if (monthItem === 0) {
            lastDayNum = monthDayList[11];
        } else {
            lastDayNum = monthDayList[monthItem - 1]
        }
        for (j = 0; j < head; j++) {
            var num = lastDayNum - head + j + 1;
            str += '<li><div class="row font_14"><span class="day right color9">' + num + '</span></div></li>'
        }
        for (var i = 0, len = monthLength; i < len; i++) {
            var a, toDay, money;
            i < 9 ? a = '0' + (i + 1) : a = i + 1;
            toDay = year.innerHTML + '-' + getEle('month').innerHTML + '-' + a;
            money = toDayMoney(toDay);
            if (toDay === money[1]) {
                str += '<li class="bgweek">';
            } else {
                str += '<li>';
            }
            money[0] == null ? money[0] = ' ' : money[0];
            str += '<div class="row font_14"><span class="day right">' + a + '</span></div>';
            str += '<div class=" text-center">' + money[0] + '</div></li>';
        }
        for (var q = 0; q < foot; q++) {//6
            q < 9 ? a = '0' + (q + 1) : a = q + 1;
            var b;
            if (q === 0) {
                if (getEle('month').innerHTML - 1+2 === 13) {
                    b = 1
                } else {
                    b = getEle('month').innerHTML -1 + 2;
                }
                str += '<li><div class="row font_14 color9"><span class="month left ">' + b + '月' + '</span><span class="day right ">' + '01' + '</span></div></li>'
            } else {
                str += '<li><div class="row font_14"><span class="day right color9">' + a + '</span></div></li>'
            }
        }
        str += '</ul>';
        day.innerHTML = str;
        var liIte = getTag(getEle('DayList'), 'li')
        for (var x = 0, ite = liIte.length; x < ite; x++) {
            if (x % 7 === 6) {
                liIte[x].style.marginRight = 0;
            }
        }

    }
    /*当天签到金额*/
    function toDayMoney(toDay) {
    	var a;
        var signList = dateList.signList;
        for (var i = itemDate, len = signList.length; i < len; i++) {
        	//console.log(toDay + "," + signList[i].signDate);
            if (toDay === signList[i].signDate) {
                a = signList[i].signAmount;
                //console.log(a);
                itemDate = i + 1;
            	//console.log(itemDate);
                break;
            }
        }
        //console.log(a);
        getEle('allDays').innerHTML = dateList.totalSignTimes;
        getEle('allMoneys').innerHTML = dateList.totalAmount;
        return [a, dateList.nowDate]
    }

}
$('#prevmonth').click(function(){
    calendar(dateList)
})
//$.ajsx("/myRegularInvsetRepayment"+prevMonth(),calendar(dateList))



