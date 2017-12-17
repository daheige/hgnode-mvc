(function(doc, win) {
    var ismobile = navigator.userAgent.match(/iphone|ipod|ipad|android/gi),
        dRatio = win.devicePixelRatio,
        dpr = ismobile && typeof dRatio != 'undefined' ? Math.min(dRatio, 3) : (typeof dRatio != 'undefined' ? dRatio : 1), //设备像素比devicePixelRatio
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    //创建节点
    function createViewport() {
        var head = doc.getElementsByTagName('head')[0];
        var meta = doc.getElementsByTagName('meta');
        var metaEl = doc.createElement('meta');
        var head_children = head.children || head.childNodes;

        // 判断是否有vierport 如果有则删除
        for (var i = 0; i < meta.length; i++) {
            if (meta[i].getAttribute('name') === 'viewport') {
                head.removeChild(meta[i]);
                break;
            }
        }
        meta = null; //销毁变量，释放空间

        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'width=device-width,initial-scale=' + 1 / dpr + ',maximum-scale=1,minimum-scale=' + 1 / dpr +
            ',user-scalable=no');
        head.insertBefore(metaEl, head_children[0]);
        head_children = null; //销毁变量，释放空间
    };

    function recalc() {
        var docEl = doc.documentElement || doc.body;
        var width = docEl.clientWidth || win.innerWidth;
        if (width / dpr > 750) {
            width = 750 * dpr;
        }

        //移动端自动适配，pc端固定为100px
        if (ismobile || width <= 750) {
            docEl.style.fontSize = (100 * (width / 750)).toFixed(2) + 'px';
        } else {
            docEl.style.fontSize = 100 + 'px';
        }

        docEl.setAttribute('dpr', dpr);
    };

    //初始化viewport
    createViewport();
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);
