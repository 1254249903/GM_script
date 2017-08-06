// ==UserScript==
// @name AC-baidu�� �Ż��ٶȡ��ѹ����ȸ��������֮�ض���ȥ��+ȥ���+favicon
// @icon            https://coding.net/u/zb227/p/zbImg/git/raw/master/img0/icon.jpg
// @grant		    GM_xmlhttpRequest
// @author          AC
// @create          2015-11-25
// @run-at          document-start
// @version         11.5
// @connect         *
// @include         http://www.baidu.com/*
// @include         https://www.baidu.com/*
// @include         http://www.sogou.com/*
// @include         https://www.sogou.com/*
// @include         /^https?://\w+.bing.com/.*/
// @include         /^https?\:\/\/encrypted.google.[^\/]+/
// @include         /^https?\:\/\/www.google.[^\/]+/
// @include         https://*.zhidao.baidu.com/*
// @include         https://zhidao.baidu.com/*
// @home-url        https://greasyfork.org/zh-TW/scripts/14178
// @namespace       1353464539@qq.com
// @copyright       2017, AC
// @description     1.�@�^�ٶȡ��ѹ������Y���е��Լ������D朽ӣ�ֱ���L��ԭʼ�W�-�������ܿ��� 2.ȥ���ٶȵĶ����� 3.���Favicon��ʾ 4.��Ӽ��� 5.����ѡ�����Ϲ���
// @lastmodified    2017-08-04
// @feedback-url    https://greasyfork.org/zh-TW/scripts/14178
// @note            2017.08.06-V11.5 �޸��������쳣��Ԥ��֮�����Ӱٶ�����ҳ��Ĵ����
// @note            2017.08.05-V11.4 �����������ͽ����ַ����
// @note            2017.08.04-V11.3 �޸�������Ӣ�ﲻ�õ��µ�ƴд���󣬸�лshj�ֵ�ָ��
// @note            2017.08.03-V11.2 �������ȸ������±�ǩ��; �Ƴ�����������ӵ��»���
// @note            2017.07.22-V11.1 �����˿���ģʽ�����Կ������߹ر�ĳЩ�Լ���ϲ���Ĺ��ܣ����������Ͻǣ���SuperPreload����
// @note            2017.06.25-V10.1 �޸��ϴθ��µ��µİٶ�ȥ��������
// @note            2017.06.25-V10.0 �޸��ϴθ��µ��µİٶ�֪���ٴγ���������
// @note            2017.06.24-V9.9 �����˷�ҳ�����⣬������εĳ���Ӧ��û��̫��������
// @note            2017.06.24-V9.8 ������bing�ϵ�ͼƬfavicon��ַ;���Ҿ���������MO��������������ҳ�濨��;�޸��ѹ����ض�������
// @note            2017.06.23-V9.7 �ϴ�����~��������˳�������˹ȸ�favicon����
// @note            2017.06.23-V9.6 �޸��˹ȸ��ض��������~~�ҵĹ�
// @note            2017.06.11-V9.5 ����ʹ��DOM��ʽ������ҳ���ˣ�ʹ��timer+MO���������������cpuռ��ʱ���˲ʱ����ռ��
// @note            2017.05.26-V9.4 �ָ�faviconģʽ����������ű�������ȫ�ˣ�����Ҫ�Ժ���˵
// @note            2017.05.15-V9.3 ��ʱ�Ƴ��ٶ��ұ߲����Ĺ���Ƴ�ģʽ��׼���´��Ż������ټ���
// @note            2017.05.12-V9.2 ��ʱ�Ƴ��ȸ�İ�ȫ����ģʽ����Ϊ�ܸ��ӵ�ԭ��
// @note            2017.05.12-V9.1 ��ʱ�Ƴ�Favicon����ʾ����Ϊ���������ˣ�����Ҫ�����Լ�ȥװ����ű��ɣ������ٶ�ȥ���
// @note            2017.05.12-V9.0 ������ȥ�ض���+ȥ���+Favicon��ʾ
// @note            2017.05.12-V8.7 ������ȥ���Ľű�����ǰ���Ǹ�ȥ���Ľű��Ͳ�����
// @note            2017.05.12-V8.6 �޸��ȸ谲ȫ������BUG V2
// @note            2017.05.12-V8.4 ������Ĭ�����ιȸ�İ�ȫ��������
// @note            2017.05.05-V8.3 �޸�include��Χ̫С���µİٶ�֪������������
// @note            2017.05.04-V8.2 �����޸��˰ٶ�֪��ͼƬ�滻�����ֵ������BUG; ˳�㴦����superapi.zhidao.baidu.com; �����ȸ���������ض���ȥ��
// @note            2017.05.04-V8.1 �����޸��˰ٶ�֪��ͼƬ�滻�����ֵ������BUG��˳�㴦����superapi.zhidao.baidu.com
// @note            2017.05.04-V8.0 �����޸��˰ٶ�֪��ͼƬ�滻�����ֵ������BUG��������
// @note            2017.03.28-V7.6 �޸���ViolentMonkey�ϵĲ�֧�ֵ�����
// @note            2017.03.28-V7.5 �����޸�chrome�ϵ�����
// @note            2017.03.21-V7.4 ���Դ���Edge�ϲ�֧�ֵ����⣬���������Edge�����TamperMonkey֧��������
// @note            2017.03.19-V7.3 �޸��򿪰ٶ�֮���ٴε�����ٶ�һ�¡����µ��޷������ض�������
// @note            2017.03.19-V7.2 δ֪ԭ��chrome��MutationObserver�޷�ʹ���ˣ������ع���ǰ��DOMNodeInserted
// @note            2017.02.17-V7.0 �޸��ѹ�����������ض�������+�ĸ�����
// @note            2017.02.17-V6.9 �޸��ѹ�����������ض�������
// @note            2016.12.10-V6.8 ***
// @note            2016.10.27-V6.7 �޸�����ǰ���ظ��������ڵ�������Ӧ��С�˺ܶ࣬����Ҳ�Ͳ����ˣ��о�������
// @note            2016.04.24-V6.6 �ָ���ǰ�İ汾����Ϊ����������
// @note            2015.12.01-V5.0 �����ѹ���֧�֣�����֧�����Ǻܺ�
// @note            2015.11.25-V2.0 �Ż����Ѿ�����ʵ��ַ�Ĳ��ٳ��Ի�ȡ
// @note            2015.11.25-V1.0 ���ȥ���ٶ��ض���Ĺ���
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_addStyle
// ==/UserScript==

// ���Σ����ǲ�����setInterval�������о������Ļ��ٶ�Ӧ�ñ�Dom�죬Ҳ��MO���ã���ΪMO��Ҫ�������ܵ��ã�ʵ���Ի�����timer
// ֮�󣺻��ǲ���MO�ķ�ʽ������
(function(){
    var fatherName = new Array(
        "c-container", //baidu1
        "rc", //google
        "b_algo", //bing1
        "b_ans", //bing2
        "vrwrap", //sogou1
        "rb"//sogou2
    );
    var isRedirectEnable = true;
    var isAdsEnable = true;
    var isFaviconEnable = true;
    var isCounterEnable = false;
    LoadSetting(); // ��ȡ����������Ϣ
    var Stype; // ȥ�ض����ѡ��
    var Ftype; // favicon��ѡ��
    var Ctype; // Counter��ѡ��
    var maxOneHtmlHeight=2500;
    var ACMO = window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;
    var option = {'childList':true,'subtree':true};
    var observer = new ACMO(function(records){
        try{
            if(records.length<100){
                if(records.length > 5 || document.body.scrollHeight > 4000){
                    setTimeout(function(){
                        // ���û��SuperPreload�Ļ���ô�ͻ��Զ��������
                        ShowSetting();
                    }, 3000);
                    ACHandle();
                }
                if(isAdsEnable){
                    removeAD_baidu_sogou(); // �Ƴ��ٶȹ��
                }
            }
        }catch(e){}
    });
    document.addEventListener('DOMContentLoaded', function(e) {
        setTimeout(function(){
            // ���û��SuperPreload�Ļ���ô�ͻ��Զ��������
            ShowSetting();
        }, 3000);
    }, false);
    if (location.host.indexOf("www.baidu.com") > -1) {
        Stype = "h3.t>a";
        Ftype = ".result-op, .c-showurl";
        Ctype = "#content_left>div[srcid] *[class~=t],[class~=op_best_answer_question]";
        startBaidu();
    } else if (location.host.indexOf("sogou") > -1) {
        Stype = "h3.pt>a, h3.vrTitle>a";
        Ftype = "cite[id*='cacheresult_info_']";
        Ctype = ".results>div";
        srartOthers();
    } else if (location.host.indexOf("google") > -1){
        Stype = "";
        Ftype = "._Rm";
        Ctype = ".srg>div[class~=g] *[class~=r],._yE>div[class~=_kk]";
        srartOthers();
    } else if (location.host.indexOf("bing") > -1){
        Stype = "";
        Ftype = ".b_attribution>cite";
        Ctype = "#b_results>li[class~=b_ans],#b_results>li[class~=b_algo],#b_results>li[class~=b_algo]";
        srartOthers();
        maxOneHtmlHeight = 4000;
    } else {
        addStyle(".word-replace{display: none  !important;}");
        return;
    }
    addStyle("a{text-decoration:none}"); // �Ƴ���Щ���»���
    function ShowSetting(){
        // ��������ڵĻ�����ô�Լ�����һ��-copy from superPreload
        if(document.querySelector("#sp-fw-container") == null){
            GM_addStyle('#sp-fw-container{z-index:999999!important;text-align:left!important;}#sp-fw-container *{font-size:13px!important;color:black!important;float:none!important;}#sp-ac-main-head{position:relative!important;top:0!important;left:0!important;}#sp-ac-span-info{position:absolute!important;right:1px!important;top:0!important;font-size:10px!important;line-height:10px!important;background:none!important;font-style:italic!important;color:#5a5a5a!important;text-shadow:white 0px 1px 1px!important;}#sp-fw-container input{vertical-align:middle!important;display:inline-block!important;outline:none!important;height:auto !important;padding:0px !important;margin-bottom:0px !important;}#sp-fw-container input[type="number"]{width:50px!important;text-align:left!important;}#sp-fw-container input[type="checkbox"]{border:1px solid #B4B4B4!important;padding:1px!important;margin:3px!important;width:13px!important;height:13px!important;background:none!important;cursor:pointer!important;visibility:visible !important;position:static !important;}#sp-fw-container input[type="button"]{border:1px solid #ccc!important;cursor:pointer!important;background:none!important;width:auto!important;height:auto!important;}#sp-fw-container li{list-style:none!important;margin:3px 0!important;border:none!important;float:none!important;}#sp-fw-container fieldset{border:2px groove #ccc!important;-moz-border-radius:3px!important;border-radius:3px!important;padding:4px 9px 6px 9px!important;margin:2px!important;display:block!important;width:auto!important;height:auto!important;}#sp-fw-container legend{line-height:20px !important;margin-bottom:0px !important;}#sp-fw-container fieldset>ul{padding:0!important;margin:0!important;}#sp-fw-container ul#sp-ac-a_useiframe-extend{padding-left:40px!important;}#sp-ac-rect{position:relative!important;top:0!important;left:0!important;float:right!important;height:10px!important;width:10px!important;padding:0!important;margin:0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid white!important;-webkit-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;-moz-box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;box-shadow:inset 0 5px 0 rgba(255,255,255,0.3),0 0 3px rgba(0,0,0,0.8)!important;opacity:0.8!important;}#sp-ac-dot,#sp-ac-cur-mode{position:absolute!important;z-index:9999!important;width:5px!important;height:5px!important;padding:0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid white!important;opacity:1!important;-webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;-moz-box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;box-shadow:inset 0 -2px 1px rgba(0,0,0,0.3),inset 0 2px 1px rgba(255,255,255,0.3),0px 1px 2px rgba(0,0,0,0.9)!important;}#sp-ac-dot{right:-3px!important;top:-3px!important;}#sp-ac-cur-mode{left:-3px!important;top:-3px!important;width:6px!important;height:6px!important;}#sp-ac-content{padding:0!important;margin:5px 5px 0 0!important;-moz-border-radius:3px!important;border-radius:3px!important;border:1px solid #A0A0A0!important;-webkit-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;-moz-box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;box-shadow:-2px 2px 5px rgba(0,0,0,0.3)!important;}#sp-ac-main{padding:5px!important;border:1px solid white!important;-moz-border-radius:3px!important;border-radius:3px!important;background-color:#F2F2F7!important;background:-moz-linear-gradient(top,#FCFCFC,#F2F2F7 100%)!important;background:-webkit-gradient(linear,0 0,0 100%,from(#FCFCFC),to(#F2F2F7))!important;}#sp-ac-foot{position:relative!important;left:0!important;right:0!important;min-height:20px!important;}#sp-ac-savebutton{position:absolute!important;top:0!important;right:2px!important;}#sp-fw-container .sp-ac-spanbutton{border:1px solid #ccc!important;-moz-border-radius:3px!important;border-radius:3px!important;padding:2px 3px!important;cursor:pointer!important;background-color:#F9F9F9!important;-webkit-box-shadow:inset 0 10px 5px white!important;-moz-box-shadow:inset 0 10px 5px white!important;box-shadow:inset 0 10px 5px white!important;}');
        var acSettingForm = document.createElement('div');
        acSettingForm.id = 'sp-fw-container';
        acSettingForm.innerHTML = "<div id='sp-fw-container' style='position: fixed; top: 20px; right: 38px;'>\n" +
                    "    <div id='sp-ac-rect' style='background-color: rgb(3, 139, 0);' title='��ҳ״̬'>\n" +
                    "        <div id='sp-ac-dot' style='display: block; background-color: rgb(0, 255, 5);'></div>\n" +
                    "    </div>\n" +
                    "    <div id='sp-ac-content' style='display: none;'>\n" +
                    "        <div id='sp-ac-main'>\n" +
                    "        <fieldset id='sp-ac-autopager-field' style='display:block;'>\n" +
                    "            <legend title='�Զ���ҳģʽ���������' style='color: red !important;'>AC-�ض�������</legend>\n" +
                    "            <ul>\n" +
                    "                <li><input title='AC-�ض���' id='sp-ac-redirect' name='sp-ac-a_separator' title='AC-�ض���' type='checkbox' "+(isRedirectEnable?'checked':'')+">������-�ض�����\n" +
                    "                </li>\n" +
                    "                <li><input title='AC-ȥ���' id='sp-ac-ads' name='sp-ac-a_force' type='checkbox' "+(isAdsEnable?'checked':'')+">����1-ȥ��湦��\n" +
                    "                </li>\n" +
                    "                <li><input title='AC-���Favicon' id='sp-ac-favicon' name='sp-ac-a_force' type='checkbox' "+(isFaviconEnable?'checked':'')+">����2-Favicon����\n" +
                    "                </li>\n" +
                    "                <li><input title='AC-��ӱ��' id='sp-ac-counter' name='sp-ac-a_force' type='checkbox' "+(isCounterEnable?'checked':'')+">����3-��Ź���</li>\n" +
                    "                <li><a href='http://wpa.qq.com/msgrd?v=1&uin=1353464539&site=qq&menu=yes' style='color:red !important;'>�Ὠ�飬Ѱ��������ű����Ƶ���</a></li>"+
                    "            </ul>\n" +
                    "            <span id='sp-ac-savebutton' class='sp-ac-spanbutton' title='��������' style='position: relative !important;float: right !important;'>����</span>\n" +
                    "        </fieldset>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>";
            document.body.appendChild(acSettingForm);
            var rectt1, rectt2;
            document.querySelector("#sp-ac-rect").addEventListener('mouseover', function(e) {
                rectt1 = setTimeout(function(){
                    document.querySelector("#sp-ac-content").style.display = 'block';
                }, 100);
            }, false);
            document.querySelector("#sp-ac-rect").addEventListener('mouseout', function(e) {
                clearTimeout(rectt1);
            }, false);

            acSettingForm.addEventListener('mouseover', function(e) {
                clearTimeout(rectt2);
            }, false);

            acSettingForm.addEventListener('mouseout', function(e) {
                if (e.relatedTarget && e.relatedTarget.disabled) return; //for firefox and chrome
                rectt2 = setTimeout(function(){
                    document.querySelector("#sp-ac-content").style.display = 'none';
                }, 288);
            }, false);
        }else if(document.querySelector("#sp-ac-content") == null){
            var acSettingInner = document.createElement('fieldset');
            acSettingInner.id = 'sp-ac-content';
            acSettingInner.style = 'display: none;';
            acSettingInner.innerHTML =
                        "            <legend title='�Զ���ҳģʽ���������' style='color: red !important;'>AC-�ض�������</legend>\n" +
                        "            <ul>\n" +
                        "                <li><input title='AC-�ض���' id='sp-ac-redirect' name='sp-ac-a_separator' title='AC-�ض���' type='checkbox' "+(isRedirectEnable?'checked':'')+">������-�ض�����\n" +
                        "                </li>\n" +
                        "                <li><input title='AC-ȥ���' id='sp-ac-ads' name='sp-ac-a_force' type='checkbox' "+(isAdsEnable?'checked':'')+">����1-ȥ��湦��\n" +
                        "                </li>\n" +
                        "                <li><input title='AC-���Favicon' id='sp-ac-favicon' name='sp-ac-a_force' type='checkbox' "+(isFaviconEnable?'checked':'')+">����2-Favicon����\n" +
                        "                </li>\n" +
                        "                <li><input title='AC-��ӱ��' id='sp-ac-counter' name='sp-ac-a_force' type='checkbox' "+(isCounterEnable?'checked':'')+">����3-��Ź���</li>\n" +
                        "            </ul>\n" +
                        "            <span id='sp-ac-savebutton' class='sp-ac-spanbutton' title='��������' style='position: relative !important;float: right !important;'>����</span>\n";
            document.querySelector("#sp-fw-main").appendChild(acSettingInner);
        }
        document.querySelector("#sp-ac-savebutton").addEventListener('click', function(e) {
            // ���湦��
            GM_setValue("isRedirectEnable", document.querySelector("#sp-ac-redirect").checked);
            GM_setValue("isAdsEnable", document.querySelector("#sp-ac-ads").checked);
            GM_setValue("isFaviconEnable", document.querySelector("#sp-ac-favicon").checked);
            GM_setValue("isCounterEnable", document.querySelector("#sp-ac-counter").checked);
            window.location.reload();
        }, false);
    }
    function LoadSetting(){
        isRedirectEnable = GM_getValue("isRedirectEnable",  true);
        isAdsEnable      = GM_getValue("isAdsEnable",  true);
        isFaviconEnable  = GM_getValue("isFaviconEnable",  true);
        isCounterEnable  = GM_getValue("isCounterEnable",  false);
    }
    function startBaidu(){
        var tt = setInterval(function(){
            if(document.querySelector("#content_left")){
                clearInterval(tt);
                /***������Ҫ���ú�MO��������ҳ������--�Զ�������һҳ������***/
                observer.observe(document.querySelector("#wrapper_wrapper"), option);
                // ����ǰ-���Կ�ʼ�����Ǹ�xxx��
                ACHandle();
            }
        }, 200);
    }
    function srartOthers(){
        observer.observe(document, option);
    }
    function ACHandle(){
        if(isRedirectEnable){
            if(Stype != null && Stype != "")
                resetURL(document.querySelectorAll(Stype)); // �ٶ�ȥ�ض���
            removeOnMouseDownFunc(); // �Ƴ�onMouseDown�¼����ȸ�ȥ�ض���
        }
        if(isFaviconEnable){
            addFavicon(document.querySelectorAll(Ftype)); // ���Favicon��ʾ
        }
        if(isCounterEnable){
            addCounter(document.querySelectorAll(Ctype));
        }
    };
    function removeOnMouseDownFunc(){
        try{
            document.querySelectorAll(".g .rc .r a").forEach(function(one){
               one.setAttribute("onmousedown", ""); // �ȸ�ȥ�ض������
               one.setAttribute("target", "_blank"); // �ȸ������±�ǩ��
            });
        }catch(e){}
    }
    function addStyle(css) { //���CSS�Ĵ���--copy��
        var pi = document.createProcessingInstruction(
            'xml-stylesheet',
            'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
        );
        return document.insertBefore(pi, document.documentElement);
    }
    function resetURL(list){
        for(var i = 0; i < list.length; i++){
            // �˷������첽�����ڽ�����ʱ��ʹ��i�������-����!
            // ���ñհ��ķ������������ݵĴ���
            var curhref = list[i].href;
            if(list[i]!= null && list[i].getAttribute("ac_redirectStatus") == null){
                list[i].setAttribute("ac_redirectStatus", "0");
                if(curhref.indexOf("baidu.com") > -1 || curhref.indexOf("sogou.com") > -1){
                  (function(c_curhref){
                    setTimeout(function(){
                        GM_xmlhttpRequest({
                            url: c_curhref,
                            headers: {
                                "Accept": "text/html"
                            },
                            method: "GET",
                            onreadystatechange:function(response) {
                                if(response.status==200){
                                    DealResult(response, c_curhref);
                                }
                            }
                        });
                    },100);
                  })(curhref); //���ݾɵ���ַ��ȥ������c_curhref
                }else if(curhref.indexOf("/interstitial") > -1){
                }else{
                }
            }
        }
    }
    function DealResult(response, c_curhref){ // ���ݻ�ȡ�ɹ����滻ҳ���ַΪ��ʵ��ַ
        var resultURL = response.finalUrl;
        if(Stype.length > 10){
            //������ѹ��Ľ��
            var resultResponseUrl = Reg_Get(response.responseText, "URL='([^']+)'");
            if(resultResponseUrl != null)
                resultURL = resultResponseUrl;
        }
        //console.log(resultURL);
        var indexhref = Reg_Get(c_curhref, "((?:http)[^&]+)");// ����Ҫ��ȡ�������ݣ���Ϊ֮���Ī��������������ck=0.0.0.0.....
        var ccnode = document.querySelectorAll("h3>[href*='"+indexhref+"']")[0];
        if(ccnode != null){
            ccnode.href = resultURL;
        }else{
            //console.log("�������Ѿ��������ű��ɵ���Ŷ"+resultURL);
        }
    }
    function Reg_Get(HTML, reg){
        var RegE = new RegExp(reg);
        try{return RegE.exec(HTML)[1];}catch(e){return"";}
    }
    function removeAD_baidu_sogou(){ // �Ƴ��ٶ����й��
        if(location.host == "www.baidu.com"){
            if(document.querySelectorAll("#content_left")[0] != null){
                var fathers = document.querySelectorAll("#content_left")[0].childNodes;
                var lastId = 0;
                for(var i = 0; i < fathers.length; i++){
                    var currentNode = fathers[i];
                    if(fathers[i].tagName=="DIV" && fathers[i].getAttribute("dealAD") == null){
                        if(null == currentNode.id || "" == currentNode.id){
                            // ����ID��ò�ƶ��ǹ��
                            console.log("�Ƴ���� CLASS="+currentNode.className);
                            currentNode.remove();
                        } else if(currentNode.id == "clone"){
                            // ID ��ʾΪCLONE��Ҳ�ǹ��
                            console.log("�Ƴ���� ID="+currentNode.id);
                            currentNode.remove();
                        } else if(currentNode.className.indexOf("result") != 0 && /^\d+$/.test(currentNode.id)){
                            // class����result...�ģ�����id�Ǵ������ֵ�(�ܴ�)
                            console.log("�Ƴ���� ID="+currentNode.id);
                            currentNode.remove();
                        } else{
                            var node = currentNode.querySelectorAll(".f13>span")[0];
                            if(node != null && node.innerHTML == "���"){
                                console.log("�Ƴ���� ID="+currentNode.id);
                                currentNode.remove();
                            }
                        }
                        currentNode.setAttribute("dealAD", 1);
                    }
                }
            }
        }else if(location.host == "www.sogou.com"){
            try{document.querySelector("#promotion_adv_container").remove();}catch(e){}
            try{document.querySelector("#kmap_business_title").remove();}catch(e){}
            try{document.querySelector("#kmap_business_ul").remove();}catch(e){}
            try{document.querySelector(".rvr-model[style='width:250px;']").style="display:none";}catch(e){}
        }
    }
    function addCounter(citeList){
        var cssText="display:inline-block;background:#FD9999;color:#D7D7D7;font-family:'΢���ź�';font-size:16px;text-align:center;width:20px;line-height:20px;border-radius:50%;float:left;";
        var div = document.createElement('div');
        for(var i=0;i<citeList.length;i++){
            if(citeList[i].getAttribute('sortIndex')){
                continue;
            }else{
                citeList[i].setAttribute('sortIndex',i);
                citeList[i].inner=citeList[i].innerHTML;
                div.innerHTML='<div style=' + cssText + '>' + (i+1) + '</div>';
                citeList[i].innerHTML=div.innerHTML+citeList[i].inner;
            };
        };
    }
    function addFavicon(citeList){
        for (var index = 0; index < citeList.length; index++) {
            var url = replaceAll(citeList[index].innerHTML);
            //console.log(index+"."+url);
            if(null == citeList[index].getAttribute("ac_faviconStatus")){
                if(url == ""){
                    console.log("��Ч��ַ��"+citeList[index].innerHTML);
                    citeList[index].setAttribute("ac_faviconStatus", "-1");
                    continue;
                }
                var curNode = citeList[index];
                var faviconUrl = url;
                for(II = 0; II <= 5; II++){
                    curNode = curNode.parentNode;
                    if(isInUrlList(curNode.className)){
                        break;
                    }
                }
                //console.log(index+"."+faviconUrl+"--"+II);
                if(II <= 5){
                    var tmpHTML = curNode.innerHTML;
                    var pos = tmpHTML.indexOf("fav-url")
                        &tmpHTML.indexOf("favurl")
                        &tmpHTML.indexOf("tit-ico")
                        &tmpHTML.indexOf("img_fav rms_img")
                        &tmpHTML.indexOf("c-tool-")
                        &tmpHTML.indexOf("span class=\"c-icon c-icon-");
                    //���Լ��Ѿ�����favicon��
                    if(pos > -1){
                        console.log("����ͼƬ��"+faviconUrl);
                        citeList[index].setAttribute("ac_faviconStatus", "-2");
                        continue;
                    }
                    //https://api.byi.pw/favicon/?url=???? ���ȶ�
                    //http://"+faviconUrl+"/cdn.ico?defaulticon=http://soz.im/favicon.ico ���ȶ�
                    //https://www.xtwind.com/api/index.php?url=???? ���ˡ�����
                    //https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=sina.cn
                    //�����ַ����ȷ����ô����
                    var host = faviconUrl.replace(/[^.]+\.([^.]+)\.([^.]+)/, "$1.$2");
                    if(curNode.querySelector(".faviconT") == null && host.length>3){
                        var insNode = document.createElement("img");
                        curNode = curNode.children[0]; //firstChild��������text����
                        citeList[index].setAttribute("ac_faviconStatus", "1");
                        curNode.insertBefore(insNode, curNode.firstChild);
                        insNode.className = "faviconT";
                        insNode.style = "vertical-align:sub;height:16px;width:16px;margin-right:5px";
                        insNode.src = "https://favicon.yandex.net/favicon/"+host;
                        insNode.setAttribute("faviconID", "0");
                        insNode.onload = function(){
                            if(insNode.naturalWidth < 16){
                                //console.log("ʧ��2��"+faviconUrl+"��ʱ�޽�");
                                insNode.src = "http://code.taobao.org/svn/zb227IMG/favicon.ico";
                            }
                        };
                    }
                }
            }
        }
        function replaceAll(sbefore){
            var send;
            var result = sbefore.split('-');
            if(location.hostname.indexOf("sogou") > -1 && location.href.indexOf("sogou") < 20){
                // --�ѹ�ר�ã������һ�������ĵĻ�����ַ���ǵڶ���
                sbefore = result[1];
            }
            send = sbefore.replace(/(\/[^/]*|\s*)/ ,"").replace(/<[^>]*>/g, "").replace(/https?:\/\//g,"").replace(/<\/?strong>/g,"").replace(/<\/?b>/g,"").replace(/<?>?/g,"").replace(/( |\/).*/g,"");
            return send;
        }
        function isInUrlList(url){
            var leng = fatherName.length;
            for(var i = 0; i < leng; i++){
                if(url.indexOf(fatherName[i]) >= 0){
                    return true;
                }
            }
            return false;
        }
    }
})();