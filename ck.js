[Script]
#iios兑换苹果app
iios获取token_23 = type=http-request, pattern=^https:\/\/www\.iios\.fun\/api\/(base|user\/info)$, script-path=https://raw.githubusercontent.com/Sliverkiss/GoodNight/master/Script/iios.js, timeout=30
#美团
meituan.cookie_4 = type=http-request, pattern=^https:\/\/i.meituan.com\/evolve\/signin\/signpost\/, requires-body=true, max-size=3145728, script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/meituan/meituan.cookie.js, timeout=60, script-update-interval=0
#顺丰
Rewrite: 顺丰速运 = type=http-request, pattern=^https:\/\/ccsp-egmas.sf-express.com\/cx-app-member\/member\/app\/user\/universalSign,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js,requires-body=true
#雨辰
ios游戏迷获取token_15 = type=http-request, pattern=^https:\/\/yuchen.tonghuaios.com\/users\?tab=index, script-path=https://raw.githubusercontent.com/Sliverkiss/GoodNight/master/Script/yuchenios.js, timeout=30
#茅台
茅台Token = type=http-request,pattern=^https:\/\/app\.moutai519\.com\.cn\/xhr\/front\/mall\/message\/unRead\/query,requires-body=0,max-size=0,script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/i-maotai.js
#霸王茶姬
霸王茶姬token = type=http-request,pattern=^https?:\/\/webapi\.qmai\.cn\/web\/catering\/integral\/sign\/signIn,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Guding88/Script/main/bawangchaji/bwcj_token.js
#bilibili
BiliBili_10 = type=http-request, pattern=^https?:\/\/app\.bilibili\.com\/x\/resource\/domain\?, script-path=https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/Task/BiliBili.js, timeout=60, script-update-interval=0
BiliBili_11 = type=http-request, pattern=^https?:\/\/m.bilibili.com/$, script-path=https://raw.githubusercontent.com/ClydeTime/Quantumult/main/Script/Task/BiliBili.js, timeout=60, script-update-interval=0
#TF信息获取
TF信息获取 = type=http-request,pattern=^https:\/\/testflight\.apple\.com\/v3\/accounts/.*\/apps$,requires-body=0,script-path=https://github.com/w164955/Config/blob/main/JavaScript/TF_keys.js?raw=true
#松鼠
松鼠ios获取token_22 = type=http-request, pattern=^https\:\/\/ios\.xiezhenge\.com\/user, script-path=https://raw.githubusercontent.com/Sliverkiss/GoodNight/master/Script/sxios.js, timeout=30
#海信
海信数据 = type=http-request,pattern=^https:\/\/sweixin\.hisense\.com\/ecrp\/member\/initMember,requires-body=0,max-size=0,script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/Hisense.js
海信签到 = type=http-request,pattern=^https:\/\/cps\.hisense\.com\/customerAth\/activity-manage\/activityUser\/participate,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/Hisense.js
#云闪付
http-request ^https:\/\/youhui.95516.com\/newsign\/api\/sharing_power\/showUserTask script-path=ysf.js, timeout=10, tag=云闪付签到获取token


[MITM]
hostname = %APPEND% www.iios.fun,i.meituan.com,ccsp-egmas.sf-express.com,yuchen.tonghuaios.com,app.moutai519.com.cn,webapi.qmai.cn,app.bilibili.com,m.bilibili.com,testflight.apple.com,ios.xiezhenge.com,sweixin.hisense.com,cps.hisense.com,youhui.95516.com

