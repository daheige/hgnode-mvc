"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){"function"==typeof define&&define.amd?define(["library/jquery-1.11.1.min"],e):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?e(require("library/jquery-1.11.1.min")):e(jQuery)}(function(e){function o(e){return r.raw?e:encodeURIComponent(e)}function n(e){return r.raw?e:decodeURIComponent(e)}function t(o,n){var t=r.raw?o:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(i," ")),r.json?JSON.parse(e):e}catch(e){}}(o);return e.isFunction(n)?n(t):t}var i=/\+/g,r=e.cookie=function(i,u,c){if(void 0!==u&&!e.isFunction(u)){if("number"==typeof(c=e.extend({},r.defaults,c)).expires){var f=c.expires,p=c.expires=new Date;p.setTime(+p+864e5*f)}return document.cookie=[o(i),"=",function(e){return o(r.json?JSON.stringify(e):String(e))}(u),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var s=i?void 0:{},a=document.cookie?document.cookie.split("; "):[],d=0,y=a.length;d<y;d++){var m=a[d].split("="),l=n(m.shift()),b=m.join("=");if(i&&i===l){s=t(b,u);break}i||void 0===(b=t(b))||(s[l]=b)}return s};r.defaults={},e.removeCookie=function(o,n){return void 0!==e.cookie(o)&&(e.cookie(o,"",e.extend({},n,{expires:-1})),!e.cookie(o))}});