[Script]
#iios兑换苹果app
iios获取token_23 = type=http-request, pattern=^https:\/\/www\.iios\.fun\/api\/(base|user\/info)$, script-path=https://raw.githubusercontent.com/Sliverkiss/GoodNight/master/Script/iios.js, timeout=30

#雨辰
ios游戏迷获取token_15 = type=http-request, pattern=^https:\/\/yuchen.tonghuaios.com\/users\?tab=index, script-path=https://raw.githubusercontent.com/Sliverkiss/GoodNight/master/Script/yuchenios.js, timeout=30
#茅台
茅台Token = type=http-request,pattern=^https:\/\/app\.moutai519\.com\.cn\/xhr\/front\/mall\/message\/unRead\/query,requires-body=0,max-size=0,script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/i-maotai.js

#TF信息获取
TF信息获取 = type=http-request,pattern=^https:\/\/testflight\.apple\.com\/v3\/accounts/.*\/apps$,requires-body=0,script-path=https://github.com/w164955/Config/blob/main/JavaScript/TF_keys.js?raw=true
#松鼠
松鼠ios获取token_25 = type=http-request, pattern=^https\:\/\/ios\.songshuyouxi\.com\/user, script-path=sxios.js, timeout=30
#海信
海信数据 = type=http-response,pattern=^https:\/\/sweixin\.hisense\.com\/ecrp\/member\/initMember,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/Hisense.js
#云闪付
http-request ^https:\/\/youhui.95516.com\/newsign\/api\/sharing_power\/showUserTask script-path=ysf.js, timeout=10, tag=云闪付签到获取token
#建行生活
建行数据 = type=http-request,pattern=^https:\/\/yunbusiness\.ccb\.com\/(clp_coupon|clp_service)\/txCtrl\?txcode=(A3341A038|autoLogin),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/jhsh_checkIn.js
#复游度假
获取托迈酷客Cookie = type=http-request,pattern=^https:\/\/apis\.folidaymall\.com\/online\/capi\/uc\/getCount,requires-body=0,max-size=0,script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/ThomasCook.js
#有赞
SakuraCheckbox获取token_54 = type=http-response, pattern=https://h5.youzan.com/wscump/checkin/get_activity_by_yzuid_v2.json.+, script-path=https://gist.githubusercontent.com/Sliverkiss/585daf69a0a6c7243db8993f5394a124/raw/youzan.js, timeout=30
#阿里云
aliyun = type=http-request, pattern=^https:\/\/(auth|aliyundrive)\.alipan\.com\/v2\/account\/token, script-path=https://gist.githubusercontent.com/Sliverkiss/33800a98dcd029ba09f8b6fc6f0f5162/raw/aliyun.js, requires-body=true, max-size=-1, timeout=60
#星星充电
星星充电Cookie = type=http-request,pattern=^https:\/\/gateway\.starcharge\.com\/apph5\/xcxApiV2\/wechat\/starPoint\/sign,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/shengetui/qx/main/xxcd.js

#卫岗
活力伊利token = type=http-request, pattern=^https:\/\/ttdprod-mp\.4008618618\.com\/mallbusiness\/ums\/common\/getMemberInfo, script-path=https://raw.githubusercontent.com/anyehttp/quantumult-x/main/task/wgttd.js
#永辉生活
yhss_v2 = type=http-request, pattern=^https:\/\/api\.yonghuivip\.com\/web\/coupon\/credit\/coupon\/getcreditcouponpageinfo\/v2, script-path=https://gist.githubusercontent.com/Sliverkiss/39c1ea412db7229c5ccb5bf612e067e3/raw/yhss_v2.js, timeout=60

#哔哩哔哩
B站Cookie(APP) = type=http-request, pattern=^https?:\/\/app\.bilibili\.com\/x\/resource\/fingerprint\?, script-path=https://raw.githubusercontent.com/ClydeTime/BiliBili/main/js/BiliBiliDailyBonus.js
B站Cookie(网页) = type=http-request, pattern=^https?:\/\/m\.bilibili\.com/$, script-path=https://raw.githubusercontent.com/ClydeTime/BiliBili/main/js/BiliBiliDailyBonus.js
#牛奶
植白说获取token = type=http-request, pattern=^https:\/\/www\.kozbs\.com\/demo\/wx\/home\/signDay\?userId=.+, script-path=https://gist.githubusercontent.com/Sliverkiss/3bd5650dab5194261d9426869ae8cd38/raw/zbs.js, timeout=10
#中国人保
zgrb = type=http-request, pattern=^https:\/\/zgrb\.epicc\.com\.cn\/G-BASE\/a\/user\/login\/thirdPartyLogin\/v1, script-path=https://gist.githubusercontent.com/Sliverkiss/c2ddf6840d8a9afb45ee407326e7b86d/raw/zgrb.js, requires-body=true, max-size=-1, timeout=60



[MITM]
hostname = %APPEND% www.iios.fun,i.meituan.com,ccsp-egmas.sf-express.com,yuchen.tonghuaios.com,app.moutai519.com.cn,qmwebapi.qmai.cn, webapi.qmai.cn,testflight.apple.com,ios.songshuyouxi.com,sweixin.hisense.com,cps.hisense.com,youhui.95516.com,yunbusiness.ccb.com,apis.folidaymall.com,h5.youzan.com,auth.alipan.com,auth.aliyundrive.com,gateway.starcharge.com,ttdprod-mp.4008618618.com,api.yonghuivip.com,ulp.michelin.com.cn,app.bilibili.com, m.bilibili.com,www.kozbs.com,zgrb.epicc.com.cn

