
#脚本功能：樊登读书 会员+付费课程
#下载地址：appstore
#软件版本：所有
#脚本作者：伟人
#更新时间：2022-11-22
#问题反馈：QQ+55749353
#作者QQ:55749353
#QQ会员群：暂无
#TG反馈群：https://t.me/+tOQEwAEP0B81YzVl
#TG频道群：暂无
#使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

[mitm]
hostname = *dushu*
[rewrite_local]

^http[s]?:\/\/.+dushu.+(v101/content|book/v100/info|/play/duration|/v100/index).*$ url request-body "token":"[^"]+ request-body "token":"20221117rUwJa1id5I0oUDDYTJk
^http[s]?:\/\/.+dushu.+(v101|v100|program/v100)\/(content|play/duration|index|list|userInfo|vipInfo|info|ceiltip|mainList|getMarketInfoByType) url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/FD.js


 
;var encode_version = 'jsjiami.com.v5', bmnih = '__0xf0297',  __0xf0297=['HAjCn8OGwpI=','WcOKfDTCtw==','w7h/YGnDgR9TQwnDq8OjX8Kd','w7/Dljh6w4fDucOxw7g4wqXCpn7CrW/DicKdcMK6','w6zDiW12wq8rLiYBTVNmw4w=','RTbDn25qwoDDnR7CnsOUw6zDtHzDlMK/w5QN','R8KPwrzCiMKAw7zCjkLCrsOZZj/Chlw=','w45NwrUha8O3wq3DisO4wpjDuWRHwqLDhsOsS0wpbSI4eyzDtA==','PWvCosOqwqbCt8On','PFAENA==','w6LCtMKMJ8O2wpfDpQrCqA==','wqrDkTgjw6dLPg==','WcKfQMKyIsKY','MGTCssOu','Xn7DpEzCr2o=','w63DoDdAwqYefEvCmA==','wpooKgvDmMOnwoY=','w6XDi8Obw68=','wqEoS8K5w4XDtz8tbcOCw6E=','cC3DvhzDmMKp','ZMOLd8OU','wqfDksKxGsKZwpjDuGliw7Z4','ZsOYZsOQ','w7rDtTFI','w67DrsONwqYlRsKewqh1UsK7','wrF7NDw=','DMKYw7nDmQ==','UMKcwovCoMOLw68r','wrU7UMK/','Ui02bko=','XcKOwr3CtA==','JcK7woDDjRXCow==','wqIuVsK3w5nDsTsHfQ==','XxMfBVXDiQs=','Qj4rbg==','Qw4eEkPDpwBG','5Lyp5LuH56GP6KaD','wpNVwo4X','wpY+PgfDksONwr/CmwczFg==','wqzDo8K7wpU=','YcOcYsOBfMOwRsOYw70=','w6nDnsObw77CoMKMQRTCi0QOw4XDp8K7w6XDmj9AwrjDq8OrRUduwp7DrTB5w4wtW0RHwo/DjsKRB1s9DirDr8OEw5bDhsKmwoUOPsKNwoLDrMOuw5zDtSbChMK4d8KOeMO5KSfCqsKcw7bDvsObwq0ow5bDgX7CrERSw7MNw5jDigd6RMKAVA==','GcK4w5nDtQ==','csKUWBY=','wqbDvQvDnWRfwojCsBI=','wrnDiC5ww5jDhMO2','wrTDhz50','LUIVJ8KIFT01CHA=','R3XDqVHComjDlsOaMHrCmU4=','bFvDk8OqwrzDmF1lfQ==','XcKbXcKXOcKFw7UFw6A=','wrzDpx3DkXJ3woc=','wpDDtHYm','WGTDukrCombDkcObAA==','X8OuSiPChxoP','w6Ygw55Bw6MbWQZFGxfDlMKJ','w7dUwpnCvMKxw4HCtyLDu27CjgrDtw==','wp9bwo41wrLDm8K8w4cB','bQPDtsK9','w65+w7tKw7XCm8Ogw4cy','cy7DtijDhMKkCHw=','wrdvwoLCugnDnsOVwpbDtsOhwr/Dg8K0','wqNmIRrCn0VCXwI=','IVHCssOfwrPDpMKZT0M/w4rCjDY=','a1zDgsObwrbDuUpubA==','EsKwwq1xwq8+fmjDrw==','NgLCr8O2wqTChlc=','wqfDnign','wrzDgyRyw5TDow==','w7vDrsOW','54mJ5p+15Y6c77+Ew4gG5LyA5a295p2w5byA56uf77yP6L+C6K2d5peN5o605oqf5LqA55qr5bS95L2X','5Yqd6ZmI54mx5p625Y+/7763aMKx5L+15a6O5py+5byN56q1','wovDssK2wrfDgA==','wqLDjsK6GMKNwpDDu0Bv','wo1fHAzCmA==','J8KJw7/DksOT'];(function(_0x4134cd,_0x29b52b){var _0x2285b8=function(_0x49e8b4){while(--_0x49e8b4){_0x4134cd['push'](_0x4134cd['shift']());}};_0x2285b8(++_0x29b52b);}(__0xf0297,0x17e));var _0x5ab2=function(_0x1ba705,_0x515cbd){_0x1ba705=_0x1ba705-0x0;var _0xa45277=__0xf0297[_0x1ba705];if(_0x5ab2['initialized']===undefined){(function(){var _0x6d4abf=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x143105='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x6d4abf['atob']||(_0x6d4abf['atob']=function(_0x5e1982){var _0xab5e05=String(_0x5e1982)['replace'](/=+$/,'');for(var _0x337988=0x0,_0x581494,_0x5d44d6,_0x598bac=0x0,_0x192dce='';_0x5d44d6=_0xab5e05['charAt'](_0x598bac++);~_0x5d44d6&&(_0x581494=_0x337988%0x4?_0x581494*0x40+_0x5d44d6:_0x5d44d6,_0x337988++%0x4)?_0x192dce+=String['fromCharCode'](0xff&_0x581494>>(-0x2*_0x337988&0x6)):0x0){_0x5d44d6=_0x143105['indexOf'](_0x5d44d6);}return _0x192dce;});}());var _0x31280a=function(_0x51febb,_0x3fc60c){var _0x4c389b=[],_0x4b7fd5=0x0,_0xc74a96,_0x3f8396='',_0x496e2d='';_0x51febb=atob(_0x51febb);for(var _0x26b8eb=0x0,_0x3ec0a0=_0x51febb['length'];_0x26b8eb<_0x3ec0a0;_0x26b8eb++){_0x496e2d+='%'+('00'+_0x51febb['charCodeAt'](_0x26b8eb)['toString'](0x10))['slice'](-0x2);}_0x51febb=decodeURIComponent(_0x496e2d);for(var _0x3b8091=0x0;_0x3b8091<0x100;_0x3b8091++){_0x4c389b[_0x3b8091]=_0x3b8091;}for(_0x3b8091=0x0;_0x3b8091<0x100;_0x3b8091++){_0x4b7fd5=(_0x4b7fd5+_0x4c389b[_0x3b8091]+_0x3fc60c['charCodeAt'](_0x3b8091%_0x3fc60c['length']))%0x100;_0xc74a96=_0x4c389b[_0x3b8091];_0x4c389b[_0x3b8091]=_0x4c389b[_0x4b7fd5];_0x4c389b[_0x4b7fd5]=_0xc74a96;}_0x3b8091=0x0;_0x4b7fd5=0x0;for(var _0xb587aa=0x0;_0xb587aa<_0x51febb['length'];_0xb587aa++){_0x3b8091=(_0x3b8091+0x1)%0x100;_0x4b7fd5=(_0x4b7fd5+_0x4c389b[_0x3b8091])%0x100;_0xc74a96=_0x4c389b[_0x3b8091];_0x4c389b[_0x3b8091]=_0x4c389b[_0x4b7fd5];_0x4c389b[_0x4b7fd5]=_0xc74a96;_0x3f8396+=String['fromCharCode'](_0x51febb['charCodeAt'](_0xb587aa)^_0x4c389b[(_0x4c389b[_0x3b8091]+_0x4c389b[_0x4b7fd5])%0x100]);}return _0x3f8396;};_0x5ab2['rc4']=_0x31280a;_0x5ab2['data']={};_0x5ab2['initialized']=!![];}var _0x505ddc=_0x5ab2['data'][_0x1ba705];if(_0x505ddc===undefined){if(_0x5ab2['once']===undefined){_0x5ab2['once']=!![];}_0xa45277=_0x5ab2['rc4'](_0xa45277,_0x515cbd);_0x5ab2['data'][_0x1ba705]=_0xa45277;}else{_0xa45277=_0x505ddc;}return _0xa45277;};var body=$response['body'];var url=$request['url'];var obj=JSON['parse'](body);const p1=_0x5ab2('0x0','9q2)');const p2='/v100/list';const p3=_0x5ab2('0x1','e55&');const p4='/v101/userInfo';const p5=_0x5ab2('0x2','wI^f');const p6=_0x5ab2('0x3','Y(Q6');const p7='/v100/ceiltip';const p8=_0x5ab2('0x4','sbVR');const p9=_0x5ab2('0x5','C)1M');if(url[_0x5ab2('0x6','(VFh')](p1)!=-0x1){obj[_0x5ab2('0x7','KAAs')]['free']=!![];body=JSON[_0x5ab2('0x8','pqWx')](obj);}if(url[_0x5ab2('0x9','wI^f')](p2)!=-0x1){for(var i=0x0;i<obj['data'][_0x5ab2('0xa','z***')];i++){obj['data'][i]['free']=!![];obj[_0x5ab2('0xb','(VFh')][i][_0x5ab2('0xc','@$Zm')]=!![];}body=JSON[_0x5ab2('0xd','i*Re')](obj);}if(url[_0x5ab2('0xe','6MFv')](p3)!=-0x1){for(var i=0x0;i<obj[_0x5ab2('0xf',']WGl')][_0x5ab2('0x10','(55c')][_0x5ab2('0x11','Fem]')];i++){obj[_0x5ab2('0x12','Fk4o')][_0x5ab2('0x13','4b!E')][i][_0x5ab2('0x14','Fk4o')]=!![];obj[_0x5ab2('0x15','i*Re')][_0x5ab2('0x16','qDu(')][i]['unlock']=!![];}obj['data'][_0x5ab2('0x17','9q2)')]=!![];obj[_0x5ab2('0x18','sbVR')][_0x5ab2('0x19','Cc!!')]=!![];obj[_0x5ab2('0x1a','(55c')][_0x5ab2('0x1b','*son')]=!![];obj[_0x5ab2('0x1c','Cc!!')][_0x5ab2('0x1d','gULw')]=!![];body=JSON[_0x5ab2('0x1e','(55c')](obj);}if(url[_0x5ab2('0x1f','[Cdi')](p4)!=-0x1){obj[_0x5ab2('0x20','*son')]['is_vip']=!![];obj[_0x5ab2('0x18','sbVR')][_0x5ab2('0x21','[Cdi')]=_0x5ab2('0x22','[Cdi');obj[_0x5ab2('0x23','S8aJ')][_0x5ab2('0x24','6MFv')]=0x1d8d8f773708;obj[_0x5ab2('0x25','$3c0')][_0x5ab2('0x26','Fk4o')]=_0x5ab2('0x27',']WGl');obj[_0x5ab2('0x28','nbQx')][_0x5ab2('0x29','2#(0')]=!![];body=JSON[_0x5ab2('0x2a','$a)4')](obj);}if(url[_0x5ab2('0x2b','e55&')](p5)!=-0x1){obj['data']['endTime']=0x1d8d8f773708;obj[_0x5ab2('0x2c','e55&')][_0x5ab2('0x2d','KAAs')]=0x1;body=JSON[_0x5ab2('0x1e','(55c')](obj);}if(url['indexOf'](p6)!=-0x1){obj['data'][_0x5ab2('0x2e','@$Zm')][_0x5ab2('0x2f','nOfV')]='本课程已解锁成功!';obj['data'][_0x5ab2('0x30','z***')]=!![];body=JSON['stringify'](obj);}if(url[_0x5ab2('0x31','$a)4')](p7)!=-0x1){delete obj[_0x5ab2('0x32','Le2E')];body=JSON[_0x5ab2('0x33','@$Zm')](obj);}if(url[_0x5ab2('0x34','FoCT')](p8)!=-0x1){for(var i=0x0;i<obj['data'][_0x5ab2('0x35','&wO)')]['hotCourse']['length'];i++){obj['data'][_0x5ab2('0x36','WdB^')][_0x5ab2('0x37','S8aJ')][i]['hasOwned']=!![];obj[_0x5ab2('0x38','Uj&c')]['hotTopCourses'][_0x5ab2('0x39','F1ur')][i][_0x5ab2('0x3a','Fem]')]=!![];}for(var i=0x0;i<obj['data'][_0x5ab2('0x3b','z@yM')][_0x5ab2('0x3c','9q2)')]['length'];i++){obj[_0x5ab2('0xf',']WGl')][_0x5ab2('0x3d','Yyro')][_0x5ab2('0x3e','nOfV')][i]['hasOwned']=!![];obj[_0x5ab2('0xf',']WGl')]['hotTopCourses'][_0x5ab2('0x3f','OBV#')][i]['offShelf']=!![];}body=JSON['stringify'](obj);}if(url[_0x5ab2('0x40','S5Gf')](p9)!=-0x1){for(var i=0x0;i<obj[_0x5ab2('0x41','wI^f')][_0x5ab2('0x42','e55&')];i++){obj['data'][i]['hasBuy']=0x1;}body=JSON['stringify'](obj);}$done({'body':body});;(function(_0x4eaea6,_0x46e3d7,_0x4781c6){var _0x12b00c={'CpyCL':_0x5ab2('0x43','qDu('),'IYBrI':function _0x4f4317(_0x2a5e13,_0x3aab33){return _0x2a5e13===_0x3aab33;},'ZVMUh':'jsjiami.com.v5','Oprjc':function _0x2db714(_0x455f63,_0xd3a74e){return _0x455f63+_0xd3a74e;},'CdTUN':_0x5ab2('0x44','kT@L'),'oJRrH':_0x5ab2('0x45','!#(p')};_0x4781c6='al';try{_0x4781c6+=_0x12b00c[_0x5ab2('0x46','$3c0')];_0x46e3d7=encode_version;if(!(typeof _0x46e3d7!==_0x5ab2('0x47','4b!E')&&_0x12b00c['IYBrI'](_0x46e3d7,_0x12b00c[_0x5ab2('0x48','9q2)')]))){_0x4eaea6[_0x4781c6](_0x12b00c[_0x5ab2('0x49','sbVR')]('删除',_0x12b00c[_0x5ab2('0x4a','S5Gf')]));}}catch(_0x4a0b6a){_0x4eaea6[_0x4781c6](_0x12b00c[_0x5ab2('0x4b','FoCT')]);}}(window));;encode_version = 'jsjiami.com.v5';
