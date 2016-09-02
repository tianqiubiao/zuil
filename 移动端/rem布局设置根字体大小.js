 (function (doc, win) {
        var docEl     = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc    = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 50 * (clientWidth /375) + 'px';
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
        ~ (function(){
            var dpr = scale =1;
            var isIPhone = win.navigator.appVersion.match(/iphone/gi);
            var devicePixelRatio = win.devicePixelRatio;
//            if (!!isIPhone) {
                dpr=devicePixelRatio;
                dpr===3?dpr=2:dpr;
//            } else {
//                dpr = 1;
//            }
            scale = 1 / dpr;
            var metaEl = "";
            metaEl = doc.createElement('meta');
            metaEl.setAttribute('name', 'viewport');
            metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
            if (docEl.firstElementChild) {
                docEl.firstElementChild.appendChild(metaEl);
            } else {
                var wrap = doc.createElement('div');
                wrap.appendChild(metaEl);
                doc.write(wrap.innerHTML);
            }
        })();
    })(document, window);

 ;(function (doc, win) {
     var docEl     = doc.documentElement,statWidth = docEl.clientWidth,
         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
         recalc    = function () {
             var clientWidth = docEl.clientWidth;
             if (!clientWidth) return;
             docEl.style.fontSize = 50 * (clientWidth /375) + 'px';
         };
     if (!doc.addEventListener) return;
     win.addEventListener(resizeEvt, recalc, false);
     doc.addEventListener('DOMContentLoaded', recalc, false);
 })(document, window);