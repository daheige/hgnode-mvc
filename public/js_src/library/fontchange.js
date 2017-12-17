'use strict';

(function (win, doc) {
    var resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
    function change() {
        doc.documentElement.style.fontSize = doc.documentElement.clientWidth / 375 * 2 + 'px';
    }
    change();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, change, false);
})(window, document);