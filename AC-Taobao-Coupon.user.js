// ==UserScript==
// @name         AC-�Ա���è��Ʒ�Ż���Ϣ��ѯ
// @version      2.7
// @description  �Ա���è��Ʒ��ѯ�Ƿ�����Ż�ȯ
// @author       AC
// @include      https://item.taobao.com/item.htm*
// @include      https://detail.tmall.com/item.htm*
// @include      https://s.taobao.com/search?q=*
// @note         2017.11.17-V2.7 �޸��Ż�ȯ��ȡ����ȷ�����⣬�Լ�����������޷���ʾ�Ż�ȯ������
// @note         2017.11.12-V2.6 �򵥸���
// @note         2017.11.11-V2.5 ��ѯ�ٶȸ����٣������Ż�����������������˸�������
// @note         2017.11.10-V2.4 ������Żݣ�����չʾ���Ż���Ϣ��
// @note         2017.11.4-V2.3 ��ʱ��������ģʽ��ѡ��
// @note         2017.11.2-V2.2 ������һ������Ľű�֮���õ���һЩcss�������ּ���Щ������չʾһЩ˫ʮһ��صı�ǩ
// @note         2017.11.1-V2.1 �л�Ϊinclude���򣬶���match���򣬱���GreaseMonkey���޷�ʹ�õ�����
// @note         2017.10.30-V2.0 �޸���ĳЩҳ���ϣ������ȡ����ȷ������
// @note         2017.10.28-V1.0 ��һ�汾��edit from https://greasyfork.org/zh-TW/scripts/34604
// @icon         https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @home-url     https://greasyfork.org/zh-TW/scripts/34606
// @run-at       document-start
// @namespace    1353464539@qq.com
// @require      https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==
// .tb-detail-hd, .tb-main-title
var acJquery = jQuery.noConflict();
function AutoStart(time, cssSelector, dealFunc) {
    var timerNode = setInterval(function () {
        try{
            if (document.querySelector(cssSelector).style.display == "") {
                clearInterval(timerNode);
                dealFunc();
            }
        }catch (e){}
    }, time);
}
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
function addStyle(css) { //���CSS�Ĵ���--copy��
    var pi = document.createProcessingInstruction(
        'xml-stylesheet',
        'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
    );
    return document.insertBefore(pi, document.documentElement);
}
function acBuyScript(result){
    var node = document.querySelector(".acBuyScriptCoupon");
    if(result.count == 1){
        node.innerHTML = "�����Ż�ȯ����";
        node.href = "https://s.click.taobao.com/" + result.mod_json_details.couponUrl;
    }else{
        node.innerHTML = "����ȡ�����Ż�";
    }
}
function relaad(result){
    if(result.count == 0){
        if(result.mod_json_details.couponUrl != ""){
            location.href = "https://s.click.taobao.com/"+result.mod_json_details.couponUrl;
        }
    }
    acBuyScript(result);
}
function queryData(goodID, type){
    setTimeout(function(){
        acJquery.ajax({
            url:"https://www.ntaow.com/getDetails_json.jsp?func="+type+"&auctionId="+goodID,
            dataType:'jsonp',
            success:function(result) {
                console.log(result);
            },
            timeout:3000
        });
    }, 200);
}
if (location.host == "item.taobao.com" || location.host == "detail.tmall.com") {
    AutoStart(100, ".tb-detail-hd, .tb-main-title", function () {
        var TitleNode = document.querySelector("div#J_Title h3, div.tb-detail-hd h1");
        var goodTitle = TitleNode.lastChild.nodeValue.trim();
        var goodID = getQueryString("id");
        var queryCoupon = "https://www.ntaow.com/details.jsp?auctionId=" + goodID;
        var querySimilar = "https://www.ntaow.com/coupon.jsp?mQuery=" + encodeURI(goodTitle);
        var faNode = document.querySelector("div#J_Title p.tb-subtitle, div.tb-detail-hd h1");
        var insNode = document.createElement("div");
        insNode.style = "font-size: 32px;font-weight: bold;font-family:microsoft yahei;";
        var htmlText = "<a class='acBuyScriptCoupon' href='javascript:void(0);' style='color: red;'>==���Ż�==</a>";
        htmlText += "&nbsp;&nbsp;&nbsp;&nbsp;<a href=" + querySimilar + " target='_blank' style='color: red;'>==������==</a>";
        insNode.innerHTML = htmlText;
        faNode.appendChild(insNode);
        if(location.href.indexOf("ali_trackid") > 0){
            queryData(goodID, "acBuyScript");
        }else{
            queryData(goodID, "relaad");
        }
        var jsNode = document.createElement("script");
        jsNode.innerHTML = "function acBuyScript(result){\n" +
            "    var node = document.querySelector(\".acBuyScriptCoupon\");\n" +
            "    if(result.count == 1){\n" +
            "        node.innerHTML = \"�����Ż�ȯ����\";\n" +
            "        node.href = \"https://s.click.taobao.com/\" + result.mod_json_details.couponUrl;\n" +
            "    }else{\n" +
            "        node.innerHTML = \"����ȡ�����Ż�\";\n" +
            "    }\n" +
            "}\n" +
            "function relaad(result){\n" +
            "    if(result.count == 0){\n" +
            "        if(result.mod_json_details.couponUrl != \"\"){\n" +
            "            location.href = \"https://s.click.taobao.com/\"+result.mod_json_details.couponUrl;\n" +
            "        }\n" +
            "    }\n" +
            "    acBuyScript(result);\n" +
            "}";
        document.body.appendChild(jsNode);
    });
} else if (location.host == "s.taobao.com") {
    AutoStart(200, ".m-itemlist", function () {
        addStyle(".m-itemlist .grid .row-4 { margin-top: 1px !important; margin-bottom: 20px;}");
        addStyle('.m-itemlist .grid .row-4, .m-itemlist .icon-has-more { overflow: visible !important;}');
        addStyle(".m-itemlist .grid .item { height: 376px !important;}");
        addStyle(".m-itemlist .grid .icon { margin-top: 3px; !important;}");
        addStyle(".grid .item-ctx-hover .icons { margin-top: 7px !important;}");

        addStyle(".response-wider  .m-itemlist .grid .item { height: 406px !important}");
        addStyle(".response-narrow  .m-itemlist .grid .item { height: 336px !important}");
    });
}