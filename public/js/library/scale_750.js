"use strict";!function(i,e){var t=i.documentElement||i.body,n=navigator.userAgent.match(/iphone|ipod|ipad|Mac/gi),o=e.devicePixelRatio,d=n&&void 0!=o?Math.min(o,3):void 0!=o?o:1,a="orientationchange"in window?"orientationchange":"resize";t.setAttribute("dpr",d);var r=function(){var i=t.clientWidth||e.innerWidth;i/d>750&&(i=750*d),t.style.fontSize=i/750*100+"px"};r(),i.addEventListener&&e.addEventListener(a,r,!1)}(document,window);