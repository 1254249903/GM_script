// ==UserScript==
// @name         AC-�Ա���è�Ż�ȯ��ѯ��ȡ,����Ż�ȯ,��ȯ
// @version      4.2
// @description  �Ա���Ʒ��ѯ�Ƿ�����Ż�ȯ,���ִ���Ż�ȯ,3Ԫ|10Ԫ|20Ԫ|40Ԫ�Ż�ȯ��ȡ,����ر�
// @author       AC
// @include      https://item.taobao.com/item.htm*
// @include      https://detail.tmall.com/item.htm*
// @note         2018.01.07-V4.2 ��������
// @note         2018.01.06-V4.1 �Ƴ����������ƹ�ģʽ2
// @note         2018.01.06-V4.0 �Ƴ����������ƹ�ģʽ
// @note         2018.01.02-V3.8 ���±��������˵��,˳����������ṹ
// @note         2017.12.25-V3.7 �޸�ż�����Ұ�ťʧЧ������
// @note         2017.12.25-V3.6 �޸����µ��µ�С����2����Ӱ��ʹ��
// @note         2017.12.17-V3.5 �޸����µ��µ�С���⣬��Ӱ��ʹ��
// @note         2017.12.05-V3.4 ����վ������ģʽ
// @note         2017.11.22-V3.3 ��������ǰ��ģʽ���޸�BUG
// @note         2017.11.17-V3.2 ����������BUG�޸�
// @note         2017.11.17-V3.1 �Ż����뻺��������
// @note         2017.11.17-V3.0 �޸���һ�����������bug����һ����µ��µ�bugͦ��ġ�����
// @note         2017.11.17-V2.9 �������£��������������ض��������Ӱ�죬ͬʱ��������������
// @note         2017.11.17-V2.8 �ϸ��汾���µ��µ�bug  ...P_P...
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
// @connect      cent.ntaow.com
// @grant        GM_xmlhttpRequest
// ==/UserScript==
// .tb-detail-hd, .tb-main-title

function getQueryString(name) {var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");var r = window.location.search.substr(1).match(reg);if (r != null) return unescape(r[2]); return null;}
var goodID = getQueryString("id");
if(location.href.indexOf("ali_trackid") < 0){
    queryData(goodID);
}
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
function acBuyScript(result){
    var tt = setInterval(function () {
        console.log(result);
        var node = document.querySelector(".acBuyScriptCoupon");
        if(node != null){
            clearInterval(tt);
            if(result.count == 1){
                node.innerHTML = "!�鿴���Ż�!";
                var TitleNode = document.querySelector("div#J_Title h3, div.tb-detail-hd h1");
                var goodTitle = TitleNode.firstChild.nodeValue.trim();
                node.href = "https://cent.ntaow.com/coupon.jsp?mQuery=" + encodeURI(goodTitle);
            }else{
                node.innerHTML = "���Żݻ������Ż�";
                node.setAttribute("style", "font-size: 11px;color:#6c6c6c");
            }
        }
    }, 50);
}
function queryData(goodID){
    cgoodTitle = document.title;
    var ret = GM_xmlhttpRequest({
        method: "GET", responseType: 'jsonp',url: "https://cent.ntaow.com/getGMDetails_json.jsp?&auctionId="+goodID+"&title="+cgoodTitle,
        onload: function(res) {
            res = res.responseText.replace("acBuyScript", "").replace("(", "").replace(/\)$/, "");
            console.log(res);
            res = JSON.parse(res);
            console.log(res);
            acBuyScript(res);
        }
    });
}
AutoStart(100, ".tb-detail-hd, .tb-main-title", function () {
    var TitleNode = document.querySelector("div#J_Title h3, div.tb-detail-hd h1");
    var goodTitle = TitleNode.firstChild.nodeValue.trim();
    var querySimilar = "https://cent.ntaow.com/coupon.jsp?mQuery=" + encodeURI(goodTitle);
    var queryInSite = "https://s.taobao.com/search?q=" + encodeURI(goodTitle);
    var faNode = document.querySelector("div#J_Title p.tb-subtitle, div.tb-detail-hd h1");
    var insNode = document.createElement("div");
    insNode.style = "font-size: 32px;font-weight: bold;font-family:microsoft yahei;";
    var htmlText = "<a class='acBuyScriptCoupon' href='javascript:void(0);' target='_blank' style='color: red;'>=������=</a>";
    htmlText += "&nbsp;&nbsp;<a href=" + querySimilar + " target='_blank' style='color: red;'>[������]</a>";
    htmlText += "&nbsp;&nbsp;<a href=" + queryInSite + " target='_blank' style='color: red;'>[վ����]</a>";
    insNode.innerHTML = htmlText;
    faNode.appendChild(insNode);
});