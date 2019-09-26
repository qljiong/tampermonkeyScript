// ==UserScript==
// @name         ItHome Clear
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.ithome.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 当前页面的url
    var currentURL = window.location.href;

    // 新闻列表的正则表达式
    var newsList = /list/;

    // 移除新闻类型
    $("strong,#hd,#ft").remove();

    // 移除右侧列表
    $("div.sidebar").remove();

    // 移除相关文章
    $(".related_post").remove();

    // 移除顶部导航
    $("#tt50").remove();

    // 移除热门top文章
    $("#top5").remove();

    // 移除分享按钮
    $(".shareto").remove();

    // 移除大家在看
    $('iframe.dajia').remove();

    // 移除右侧快捷标签
    $("a.app,a.sideweixin,a.tougao").remove();

    // 移除底部无用的导航
    $("div.pre1,div.bx1,div.con-recom").remove();

    // 移除新闻列表里的广告行
    $("li:contains('广告')").remove();

    // 设置底部
    $("div.bx2,div.if").css("padding", 0);

    // 移除顶部banner
    $("body").css("padding-top", 0);

    // 移除新闻类型的浮动
    $(".post_list ul li").css("padding-left", "20px");

    // 如果是新闻列表
    if (newsList.test(currentURL)) {
        // 设置主内容为适合阅读的宽度
        $("#con").css("width", "600px");

        // 分割线宽度
        $(".post_list ul li.hr").css("width", "580px");
    } else {
        // 正文
        $("#con").css("width", "728px");
    }

})();