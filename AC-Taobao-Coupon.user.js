// ==UserScript==
// @name         AC-����-�Ա���è�Ż�ȯ��ѯ��ȡ,����Ż�ȯ,��100Ԫ������ȯ��,ʡǮ����,��ȯ������Ż�,ƽ���Ż�20%
// @version      5.2
// @description  ���Ҳ�ѯ�Ա���Ʒ��ѯ�Ƿ�����Ż�ȯ,���ִ���Ż�ȯ,��3Ԫ|10Ԫ|20Ԫ|40Ԫ���Ż�ȯ��ȡ,����ر�
// @author       AC
// @include      https://item.taobao.com/item.htm*
// @include      https://detail.tmall.com/item.htm*
// @include      https://s.taobao.com/search*
// @include      https://cart.taobao.com/*
// @note         2018.04.30-V5.2 �����Ż�ȯ����ѯ���
// @note         2018.03.18-V5.1 �����±���
// @note         2018.03.18-V5.0 �������ﳵҳ����������
// @note         2018.03.10-V4.9 �����ϸ��汾���µ�����
// @note         2018.03.08-V4.8 ������һ����ťѡ��
// @note         2018.01.23-V4.5 ��������˵��
// @note         2018.01.22-V4.4 �޸��ϸ��汾���µ��µ�BUG����������������
// @note         2018.01.18-V4.3 �Ż�������ʾЧ������ʾ��������б��Զ�ɾ������Ŀ
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
if(location.href.indexOf("item.taobao.com") + location.href.indexOf("detail.tmall.com") >= 0) {
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    var goodID = getQueryString("id");
    if (location.href.indexOf("ali_trackid") < 0) {
        queryData(goodID);
    }
    function AutoStart(time, cssSelector, dealFunc) {
        var timerNode = setInterval(function () {
            try {
                if (document.querySelector(cssSelector).style.display == "") {
                    clearInterval(timerNode);
                    dealFunc();
                }
            } catch (e) {
            }
        }, time);
    }
    function acBuyScript(result) {
        var tt = setInterval(function () {
            var node = document.querySelector(".acBuyScriptCoupon");
            if (node != null) {
                clearInterval(tt);
                if (result.count == 1) {
                    node.innerHTML = "!"+result.mod_json_details.priceDiscount+"Ԫ�Ż�ȯ!";
                    var TitleNode = document.querySelector("div#J_Title h3, div.tb-detail-hd h1");
                    var goodTitle = TitleNode.firstChild.nodeValue.trim();
                    node.href = "https://cent.ntaow.com/coupon.jsp?mQuery=" + encodeURI(goodTitle);
                } else {
                    node.innerHTML = "���Żݻ������Ż�";
                    node.setAttribute("style", "font-size: 11px;color:#6c6c6c");
                }
            }
        }, 50);
    }
    function queryData(goodID) {
        cgoodTitle = document.title;
        var ret = GM_xmlhttpRequest({
            method: "GET", responseType: 'jsonp', url: "https://cent.ntaow.com/getDetails_json.jsp?&auctionId=" + goodID + "&title=" + cgoodTitle,
            onload: function (res) {
                res = res.responseText.replace("acBuyScript", "").replace("(", "").replace(/\)$/, "");
                res = JSON.parse(res);
                acBuyScript(res);
            }
        });
    }
    AutoStart(100, ".tb-detail-hd, .tb-main-title", function () {
        var TitleNode = document.querySelector("div#J_Title h3, div.tb-detail-hd h1");
        var goodTitle = TitleNode.firstChild.nodeValue.trim();
        var querySimilar = "https://cent.ntaow.com/coupon.jsp?mQuery=" + encodeURI(goodTitle);
        var queryInSite = "https://s.taobao.com/search?q=" + encodeURI(goodTitle) + "&";
        var faNode = document.querySelector("div#J_Title p.tb-subtitle, div.tb-detail-hd h1");
        var insNode = document.createElement("div");
        insNode.style = "font-size: 32px;font-weight: bold;font-family:microsoft yahei;";
        var htmlText = "<a class='acBuyScriptCoupon' href='javascript:void(0);' target='_blank' style='color: red;'>=������=</a>";
        htmlText += "&nbsp;&nbsp;<a href=" + querySimilar + " target='_blank' style='color: red;'>[������]</a>";
        htmlText += "&nbsp;&nbsp;<a href=" + queryInSite + " target='_blank' style='color: red;'>[վ����]</a>";
        insNode.innerHTML = htmlText;
        faNode.appendChild(insNode);
        var htmlTB = "<a style='padding: 6px 12px;ine-height:26px;text-align: center;display: inline-block;margin-bottom: 0;font-size: 14px;font-weight: normal;height:26px;lwhite-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 1px solid transparent;border-radius:2px;color: #fff;background-color: #DF231C;#FF0036;margin-left:10px' href='https://cent.ntaow.com/coupon.jsp?mQuery="+encodeURI(goodTitle)+"'>��ȡ�Ż�ȯ</a>";
        var htmlTMALL = "<div class='tb-action' style='margin-top:0'><a style='display: inline-block;border-radius:2px;color: #fff;background-color: #DF231C;padding: 6px 12px;margin-bottom: 0;font-size: 14px;font-weight: normal;height:26px;line-height:26px;width:156px;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 1px solid transparent;' href='https://cent.ntaow.com/coupon.jsp?mQuery="+encodeURI(goodTitle)+"'>��ȡ�Ż�ȯ</a></div>";
        var anoInsNode = document.createElement("div");
        if(location.host.indexOf('taobao') > 0){
            anoInsNode.innerHTML = htmlTB;
            document.querySelector('.tb-action').append(anoInsNode);
        }else{
            anoInsNode.innerHTML = htmlTMALL;
            document.querySelector('.tb-sku').append(anoInsNode);
        }
    });
}else if(location.href.indexOf("s.taobao.com/search") > 0){
    var counter = 0, max = 10;
    var tt = setInterval(function () {
        var nodes = document.querySelectorAll(".items .item-ad");
        if(nodes != null){
            clearInterval(tt);
            for(var i = 0; i<nodes.length; i++){
                nodes[i].className = "item J_MouserOnverReq  ";
            }
        }
        counter++;
        if(counter >= max){
            clearInterval(tt);
        }
    }, 100);
} else if(location.href.indexOf("cart.taobao.com") >= 0){
    setInterval(function(){
        if(document.querySelector("#J_OrderList .item-basic-info") != null){
            var htmlCart = "<a href='https://cent.ntaow.com/coupon.jsp?mQuery=AAAAAAAAAA' style='height:22px !important;color:red;font-size:16px;border-radius:1px;padding:2px;border-color:#fea356;border-style: dashed;'>�����Ż���Ϣ</a>";
            var nodes = document.querySelectorAll(".order-content .item-basic-info");
            for(i = 0; i < nodes.length; i++){
                var title = nodes[i].querySelector("a").getAttribute("title");
                if(title != null){
                    var addHTMLText = htmlCart.replace("AAAAAAAAAA", encodeURI(title));
                    var insNode = document.createElement("div");
                    insNode.className = "ac-tb-add";
                    insNode.style = "display: inline-block";
                    insNode.innerHTML = addHTMLText;
                    if(nodes[i].parentNode.querySelector(".item-icons") && nodes[i].parentNode.querySelector(".item-icons").querySelector(".ac-tb-add") == null){
                        nodes[i].parentNode.querySelector(".item-icons").appendChild(insNode);
                    }
                }
            }
        }
    }, 1000);
}