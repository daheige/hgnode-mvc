require.config({
    paths: {
        "fontchange": "library/fontchange",
        "jquery": "library/jquery-1.11.1.min",
        "jquery-cookie": "library/jquery.cookie",
        "jquery-rotate": "library/jquery-rotate-2.2",
        "json2": "library/json2",
        "scale_750": "library/scale_750",
        "dropload": "plugins/dropload/dropload"
    },
    //解决浏览器不支持的依赖关系
    shim: {
        'jquery-cookie': ['jquery'],
        'jquery-rotate': ['jquery'],
        'dropload': ['jquery'],
    },
    waitSeconds: 100 // ie load modules timeout bug fixed
});
