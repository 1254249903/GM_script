// ==UserScript==
// @name         AC-�Ա���è��Ʒ�Ż���Ϣ��ѯ
// @version      2.0
// @description  �Ա���è��Ʒ��ѯ�Ƿ�����Ż�ȯ
// @author       AC
// @match        https://item.taobao.com/item.htm*
// @match        https://detail.tmall.com/item.htm*
// @note         2017.10.30-V2.0 �޸���ĳЩҳ���ϣ������ȡ����ȷ������
// @note         2017.10.28-V1.0 ��һ�汾��edit from https://greasyfork.org/zh-TW/scripts/34604
// @run-at       document-start
// ==/UserScript==
// .tb-detail-hd, .tb-main-title
var actaobaoT = setInterval(function(){
    if(document.querySelectorAll(".tb-detail-hd, .tb-main-title").length > 0){
        clearInterval(actaobaoT);
        var TitleNode = document.querySelector("div#J_Title h3, div.tb-detail-hd h1");
        var goodTitle = TitleNode.lastChild.nodeValue.trim();
        var queryUrl = "https://ntaow.com/coupon.jsp?mQuery=" +encodeURI(goodTitle);
        var faNode = document.querySelector("div#J_Title p.tb-subtitle, div.tb-detail-hd h1");
        var insNode = document.createElement("div");
        insNode.style = "font-size: xx-large;font-weight: bold;font-family:microsoft yahei;";
        insNode.innerHTML = "<a href="+queryUrl+" target='_blank' style='color: red;'>===�����Ż�===</a><br/>";
        faNode.appendChild(insNode);
    }
}, 200);