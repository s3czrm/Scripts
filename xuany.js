
/**************************************
脚本功能：知乎 盐故事+知识+书刊+测评
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：20230210
问题反馈：QQ+55749353
食用方法: 配合伟人其他脚本一块食用
测试版本: 8.50.0
QQ会员群：PY作者
TG反馈群：https://t.me/WeiRenQAQ
TG频道群：https://t.me/WeiRenOvO
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


20230210
2.0
******************************/

/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', elgmy = '__0xf4eb0',  __0xf4eb0=['54um5p6B5Y+t77+ewoYx5LyP5aya5pyM5b2w56iU77+Q6L6Z6Ky/5peK5o6v5ou35Lq355i85bSQ5Ly2','RcOZMBbCjg==','w45dasO/w5w=','G8KhwqnDuAU=','Ji7Cqw==','OcK9Qw==','wq5XAsOPwrUGCH4uO8OVH8KBw6Vjw6pH','MjI0wrAn','w583wp8EeQ==','w6PDtX/CtcKG','cU4Ww6gV','wq3DmcKqLRI=','XcK+Dg==','w4rCjsOzEgo=','Q2/DqlUw','wprCvcONT8ONwqvCuUjDng==','w6gzXwE=','VMOfGHDCgg==','T2TCtAA=','Vm3Du1os','w63DoXXCnsKa','LcKlRyd4','V2vCigjDrA==','w4UCwovCi1g=','wrFZwp0Gdw==','S8OXGFnCtQ==','w7VFYsO9w6o=','w63Cmh5Kw5I=','C3/Cg8KyXQ==','J8OxcTQh','w53CqsKkOsKY','Wy7CocKsw6E=','PsKNbiDDmQ==','w6HDnsOXGsOG','wqFtwoIcaA==','OsK3wpLDsyw=','w6UGwofCsVEQw4k=','wqxPwpoaAw==','wrRawrcQKA==','H8KPwpPDqhg=','Ei7ChcOqFkfDpg==','WsKBJhHCrGTDn8KWwrzCq8KJaiBPwpVDw7I=','MMKwwpHDlDw=','OcOZwoFYEA==','VMOVCXrCgC8lE3I=','YMKVwq82','ZU48','VcOICGrClw==','McKHEgXDlg==','WzFscQ==','RcOfC3zClQ==','w5k8VyrCmA==','fsKTw7kiwpYhcMK/w6nCicOeTlLCp8KRQQ==','w7FUJB4nAGwvACZSX8O3ScKBdHBsTsKtEsOzF0rCocOHf8KDw77CqsKTwpnCqE8vwp3CmW4yDCxLF8OfP0bDlMKMZ8K6ZDRoc3pRw50/cFVIWQ==','MAQlwpA=','w6UBwojCq1A=','I8OHwp1EEA==','w7QVfQDCoA==','wo3DuMKpLAA=','KcKdcyRD','CgfCjMKGAw==','w7VDw53CmQ==','w6vCisKxDcK0','BMKjwofDjhw=','wpUbwpXCkg==','wpZcw7F5Ig==','fcKpMCzDtw==','wptHwp8dZQ==','wq40wo3CnMK9','WTBBaW8=','woF8w7JqPg==','SXgEwqnDuh4y','w6Mtwpwcbw==','SsK7Pjk6ZmA=','w4fDlMO2FsOK','wpBywpYiQwJS','woVtw6xt','H8KoZxJDw4/CmQ==','ak41w4IqKMKH','RcKjCBrDgg==','w71EXcOAw6IWXw==','EMKobg==','woIRwojClcK6eGE=','w7tTUMOWw70OU211','w6rDt27Cv8KU','w44RWx3CtA==','I8K3YCvDlQ==','czxgUXU=','DkbCncKQbg==','w67CqsKuG8Kl','GnMt','JcKfUA==','w6TClyZCw7k=','MDjCqcKmFw==','eDPCvMKMw4w=','AMK/ThnDiw==','TkjDiVoE','Bm4DDBc=','ccKjwo4eKA==','PMOewrRgAg==','RcKxwqkLCA==','w5DCjcK+wp1e','fy7CpMK4w6c=','w4TDpFLCp8KK','w7rCicOJFCI=','wrApwrHCtcKZ','bkYcw5ot','w7tQwowkdw==','w6MqwqMjbQ==','w6vDlMOCK8Ol','Q3jDuEI=','asKAHgce','HsOMfyYq','fcKZR2I=','w7ljw4zCosOV','fMOGJxPCjA==','w6vCocO2LSs=','GwbCjsOfAQ==','W2zDh3UW','w6HCkT4MEA==','f8OYLW3CgQ==','wqTCs387w5M=','wq9TwrY0bw==','wp/Do8KiBSk=','ZMODIhHClg==','w7QSwrkBag==','JMKAwpzDhBg=','R8K9HTIB','dcOhIVXCuA==','w6bChyJ8w7E=','XRvCicKUw6M=','YMKfwpoRIA==','wq/DhcKUKx8=','wobDv8KvNxQ=','dHbDiV0e','w7vCtDp6w4A=','w6XCq8KJAsK+','BVDClMKXdg==','wrNXwp4ZUic=','XcOpGA==','w6TCmAdKw4fCpw==','dcO5KA==','WcKOw5A=','FzAW','54uO5p2F5Yye77+OVA/kvrblrpjmn7Xlvb3nqqDvvqzovZror7TmlJ3mj57miYPkur7nmrTltLbkvow=','BU/Cpg==','fmvDuA==','w7Inwps=','w5URE2xp','w5AGwpw0ew==','TmPDs20C','S8KdW3PCiw==','LMOmXysO','HcK3eQ1V','OsK4woM=','SsKTGg==','wrhuwrU=','w67CjSI=','c8Knw50EwpE=','M8K5wr7DgCI=','w6XClREpIQ==','asKTWmXCpsK2w4c=','OV1uw41yOMOWw5TCkxbCqsKYRxTDp8KCPA==','AsK4wovDtxc=','GsO1US0p','VMKpChzDl8OowolQfQ==','w63CjxtCw4E=','w6zCmAtYw5Q=','RQzClw==','JsOswpMj','w5nCisOjCQ==','BcOGegs/','S8KFR3LCkA==','w5ZWwqAPVQ==','w6IAwq3CiGo=','T8KZMhoj','YMKOwrUNIw==','worDgsKzIx8=','PQrCjsOvIA==','ScK/AiDDiQ==','A3sLIyU=','w4Igwr7Ctmo=','I8OmwrEnPw==','EMKjTQp8','woh8woUwDA==','b8Kcw78Uwqc=','Jy/CssKNIw==','w6LCjhoVDw==','wqRowqYyfw==','w4fCvTsyTw==','cMKQHh4a','DkLCgMKURg==','w6XDq2/ClMK6','LhAkwrEM','VETDrXIH','IcObwrdBLw==','fUAvw7YA','w5tzw6fCicO8','FcOXwrwoKQ==','I8KAwo7DuT0=','O8OjwoELKg==','w5l9X8OSw4E=','w4bCrCYOIg==','w5DCkMKtwphy','TsO2FRPCnUwL','LcOoXyUlXg==','PwwTwpc8McKKw4N5wr/DlMKIwpvDhsKgwoxqwqDCtALCr8OvwrcaY8KzKcKWccO2wrAvHsK2wpLCkzIEw4kUwq8XwrXDv0rDr8OQTMO1wotNRsOzOcO5VQQAwqA3w4TCgsK0wrjDlhnDn8OJw5BYwqUNWMOjUMOpC1TDqkHCsSQKw4zDhlfDvMKiwqPDsMOibR7CokXCoGp/w7/DsMOpwq/DrsK0w5pewpZIGMO6EsOwcsOww5QSLQoWw5PCrDtlwqwBP8ORexzCpMOIASTDjTzDgcKVDcKHdAzCj8OiRcOAw63CnsKwVlIwwrJFA8OtFMOCekgZZHIqw5vCjcOHNkEpI3TCmSo2L3sEW8Krw7dccmARw5pGH8K7dARpVXHCqiZKeTB0wrPDlnMewoHDvw7DjcKawrHCgg9ww6MywrJCwoNHCgo/wpAtOsOYWHzDrHVHwo3CrVAcOcKlw7DClj5qNsOCwqPDiFvCnsKPw7/Cm8OAK8OFHcOQw7PChDp5AFVOAsKPKV9Qw4YBG3bDnF7Dv8ObwoDCnMKsDXRjOljCkcO5wqLCuwAJQlvCk8KTw4QKwrXDicOzcMO6w47CiR7Co8KMw6bCnsOGODlqw4B2UMOPw6/CvjMqBkcrTnU0w5c0IRrCnmbCpsKKXsO1w4HCuTVIwpnDpDNKEiENYjbDslM/d01fKU90OsKkZsOiw7plPhjCvUMfXWPCvE7Dtl5fw7HDn33ChWtLScKqwqoJSEdJwqZqw78uPcKjccOsWsOHZ8KowrBpSMK9w5XDq8KCw6JcS8OdwpwXDsOATMKDN8KUCkMDwrjDjw03w51qw6fCglp7w5zCqg/DhBfCviYfwps5ecK3KHkwagbDoFkbwrd6YiAow4IJwofDt8KkPBbDigUfwoBLwpdkw6sYXsO1w4TDrx/CuhnCsH5awox8w7ozNS3CrD4pw5IQD3rCh37DusO0wrFPQEvCuCd3w5rDucOPY8OOVUDCj2nDkcKJwo3CkifDvgxWaCzCnDnDnlTCsyjCiHxHw7PDlcOIBErCsHHCkG3CvcKkfz3DvGlzeVvCrsKHfMKvBsOHw7w1eMKPdMOVOjDCv3Bzw7fCsMKnNcOfw78JAEd0OcKxJQTCi2YyXcOqw5tywr3Cugc2w7LDo8Kfw4hgdcO3fcKVSggHJl0hwpAuRcKfQ8KyLcKvw7bCsylbwpgOZBgiwqPCsMKEe00zwqZtw6LCnxDDkQEdf8KQwr/DmjbDvk5XWsO3w7sxw64swrvCusO1wqIQGlF9VcKHw7bDh8OBw5IQwqkSbsOfw6Juw5LDpgTDpTXCmx7CtMKVQsKTw7vDsEHCjcKiw7vDgsKmwptYw7Quw6nDp8OEw6sYwoDDsTdJAivDn8KtdV/Dg2UEwrsJw4h9GyFGwp3DrV5uw4oxGsO0wqbDrMKqGMOyw4Nsw5QqP8K0Mg8twrvCsl9XCxPDusOswpzCo8KTC8KfwqHCg8KuNsKOwqIGw4l/w4XDhMOQYDw+w5x0F2Ybw77DjXMbwrnDhA/DjGzDksOWw4PDnDwMw5wlGcK2dAzCmCcnA11Lw54OH3bDqDnCjcK7T31jw5fClEsowo04K8OvIsKFKG0kKMOewrwow57CiMKnOiEEJMO+wqc=','FwjCusKMCMKWRg==','w6rCn0/DosK+GnTDtGETw5TCiQnDucKrw7vCkT7Dv8KXG8OVw5XDmH0Sw59kLmxBw6HCoVHChVJNH8OIw6IEw7kWwqXDoD3Dv8Kb','TcKVw7Izw48JeMK0wqfDlw==','U0kyw5kwDMKbw4rDlwPDvcOEGhvCs8KbNjHCnX4Cw58aWcO8w5l/XMKgPQpqAWomw6I4AT1MJW1nexp2fsObfgTCmGQlFcOQwosZwr3Ds2DCr3MTWktMHRlzwrwsRUgXb3webnDChm4zw7d/w7V9Q8KeCcKJwod9HgJMwqrCuQ7DrjLDogfDi8OBwqjCtMK3fwzDgsKzwo7DhMKXb2grwrFmw6RVwpo1wqVgwqbDvhV9w4lIdglfwrg8bsOzwqBFwq5bDsK2TWkYwogdAsO3wopiwpfCvsOow68swq8pR8O+U20hwqc0wozCp8K1wqDCmwtZw4fDo8KqS8OJEyXConc=','SFQvw5kqNsKLw5LDhB7DsMKLGw==','akvDsE8RZggxXTByfcO2dx5aVMOUwprDpSfCq8KOw60mWmTCvcKHUcOVZXrDq2fCjVt9w7PDqsKnCsO/A8OfMcKpwo/CmFBgNUVewqnCpRAlwqrDqDNkIcK0wpINDzrCmlTCuXVqwpt7w4g=','w4lDw5UrccKRbT4+V2bCg8OQwpvDpg==','TMKmJA==','LAQowoEvKMKUw4lv','Y8KPXn/CqMK3w4vDocOcBsKNO8Ktw58=','YTDChg==','54mB5p+Q5Y+D77yawqPCqeS+uOWtleaeoOW9kOept++8mei8g+isneaXkOaOqOaKquS5jueaveW3nuS8tg==','5Yqh6ZmC54um5p+B5Y2N776caC/kvanlrKzmn63lvornqq4=','woZkw40=','wrjDnMKoJxJcUkHCmcKJwoREBWbCvAA=','MMOWSEbCvTLDhMOVwrPCiMKNbjgMwpdkwqRhw6wyPybCigE1wo3Ct8KmO2fCulrCji3CocOtwq7ConDDj0TCiUJWRnczw7fDvsKpwrHDh8Kfwot/FsONfGMrw6gd','wpbCq8OHXg==','EinCisOwFw==','MAQ8wpE9','IEfCncK6RsKr','w6coVw3CosOEAMOx','w4Q0wqE=','djfDssKTXMOyEAPDll3Dqx3Cnw==','SFsTwrHDvw==','w5DDgcO4CsOZ','c8K3w54Ewoo=','wpDCilgww7Y=','wojCg20aw70=','w5xeVMOqw5Q=','w4hTVMO9w6c=','w6zDmH3Ci8K1','dMKaJTLDrA==','w59Qwq0gTQ==','wovCmX0Gw7o=','w6zCn8KaDcKU','NcKFEAbDnQ==','w67DgsOsEcOs','YnYtw6kC','wpnCp8Oj','wq8YwpE=','w6rCqMKq','G8OpVCsqUmLDhsO/','P8KZwq7DhBYFwqLCskgrw7nCqXYa'];(function(_0x2a316d,_0x2ec620){var _0x5ae941=function(_0x5a6e3f){while(--_0x5a6e3f){_0x2a316d['push'](_0x2a316d['shift']());}};var _0x14ee7e=function(){var _0x534109={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4d7058,_0x406010,_0x159683,_0x188eaa){_0x188eaa=_0x188eaa||{};var _0x7545bb=_0x406010+'='+_0x159683;var _0x3a5fe6=0x0;for(var _0x3a5fe6=0x0,_0x4a1388=_0x4d7058['length'];_0x3a5fe6<_0x4a1388;_0x3a5fe6++){var _0x34f122=_0x4d7058[_0x3a5fe6];_0x7545bb+=';\x20'+_0x34f122;var _0xe684a7=_0x4d7058[_0x34f122];_0x4d7058['push'](_0xe684a7);_0x4a1388=_0x4d7058['length'];if(_0xe684a7!==!![]){_0x7545bb+='='+_0xe684a7;}}_0x188eaa['cookie']=_0x7545bb;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3ac1e9,_0x1a275a){_0x3ac1e9=_0x3ac1e9||function(_0x4ce2dd){return _0x4ce2dd;};var _0x11b704=_0x3ac1e9(new RegExp('(?:^|;\x20)'+_0x1a275a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x3efbb1=function(_0x39088a,_0x308c7e){_0x39088a(++_0x308c7e);};_0x3efbb1(_0x5ae941,_0x2ec620);return _0x11b704?decodeURIComponent(_0x11b704[0x1]):undefined;}};var _0x4122fb=function(){var _0x4571a3=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4571a3['test'](_0x534109['removeCookie']['toString']());};_0x534109['updateCookie']=_0x4122fb;var _0x23b255='';var _0x43479d=_0x534109['updateCookie']();if(!_0x43479d){_0x534109['setCookie'](['*'],'counter',0x1);}else if(_0x43479d){_0x23b255=_0x534109['getCookie'](null,'counter');}else{_0x534109['removeCookie']();}};_0x14ee7e();}(__0xf4eb0,0x1c6));var _0x575b=function(_0x48fb79,_0x595516){_0x48fb79=_0x48fb79-0x0;var _0x347304=__0xf4eb0[_0x48fb79];if(_0x575b['initialized']===undefined){(function(){var _0x50d307=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x19d456='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x50d307['atob']||(_0x50d307['atob']=function(_0x5652d0){var _0x3fa34a=String(_0x5652d0)['replace'](/=+$/,'');for(var _0x3eeac8=0x0,_0x319bfc,_0x11acb1,_0x47db71=0x0,_0x564a1d='';_0x11acb1=_0x3fa34a['charAt'](_0x47db71++);~_0x11acb1&&(_0x319bfc=_0x3eeac8%0x4?_0x319bfc*0x40+_0x11acb1:_0x11acb1,_0x3eeac8++%0x4)?_0x564a1d+=String['fromCharCode'](0xff&_0x319bfc>>(-0x2*_0x3eeac8&0x6)):0x0){_0x11acb1=_0x19d456['indexOf'](_0x11acb1);}return _0x564a1d;});}());var _0x48d508=function(_0x112b8f,_0x484eb5){var _0x20bd0c=[],_0x1ab416=0x0,_0x4da048,_0xad2e5a='',_0x5889c4='';_0x112b8f=atob(_0x112b8f);for(var _0x4f74e5=0x0,_0x319b17=_0x112b8f['length'];_0x4f74e5<_0x319b17;_0x4f74e5++){_0x5889c4+='%'+('00'+_0x112b8f['charCodeAt'](_0x4f74e5)['toString'](0x10))['slice'](-0x2);}_0x112b8f=decodeURIComponent(_0x5889c4);for(var _0x3036c4=0x0;_0x3036c4<0x100;_0x3036c4++){_0x20bd0c[_0x3036c4]=_0x3036c4;}for(_0x3036c4=0x0;_0x3036c4<0x100;_0x3036c4++){_0x1ab416=(_0x1ab416+_0x20bd0c[_0x3036c4]+_0x484eb5['charCodeAt'](_0x3036c4%_0x484eb5['length']))%0x100;_0x4da048=_0x20bd0c[_0x3036c4];_0x20bd0c[_0x3036c4]=_0x20bd0c[_0x1ab416];_0x20bd0c[_0x1ab416]=_0x4da048;}_0x3036c4=0x0;_0x1ab416=0x0;for(var _0x8b85dc=0x0;_0x8b85dc<_0x112b8f['length'];_0x8b85dc++){_0x3036c4=(_0x3036c4+0x1)%0x100;_0x1ab416=(_0x1ab416+_0x20bd0c[_0x3036c4])%0x100;_0x4da048=_0x20bd0c[_0x3036c4];_0x20bd0c[_0x3036c4]=_0x20bd0c[_0x1ab416];_0x20bd0c[_0x1ab416]=_0x4da048;_0xad2e5a+=String['fromCharCode'](_0x112b8f['charCodeAt'](_0x8b85dc)^_0x20bd0c[(_0x20bd0c[_0x3036c4]+_0x20bd0c[_0x1ab416])%0x100]);}return _0xad2e5a;};_0x575b['rc4']=_0x48d508;_0x575b['data']={};_0x575b['initialized']=!![];}var _0x98b8ff=_0x575b['data'][_0x48fb79];if(_0x98b8ff===undefined){if(_0x575b['once']===undefined){var _0x397a1f=function(_0x156b8c){this['rc4Bytes']=_0x156b8c;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x397a1f['prototype']['checkState']=function(){var _0x380d6b=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x380d6b['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x397a1f['prototype']['runState']=function(_0x18ff83){if(!Boolean(~_0x18ff83)){return _0x18ff83;}return this['getState'](this['rc4Bytes']);};_0x397a1f['prototype']['getState']=function(_0x3f99b4){for(var _0x54c79d=0x0,_0x3c1b63=this['states']['length'];_0x54c79d<_0x3c1b63;_0x54c79d++){this['states']['push'](Math['round'](Math['random']()));_0x3c1b63=this['states']['length'];}return _0x3f99b4(this['states'][0x0]);};new _0x397a1f(_0x575b)['checkState']();_0x575b['once']=!![];}_0x347304=_0x575b['rc4'](_0x347304,_0x595516);_0x575b['data'][_0x48fb79]=_0x347304;}else{_0x347304=_0x98b8ff;}return _0x347304;};var _0x187fa2=$request[_0x575b('0x0','9jQc')];_0x187fa2[_0x575b('0x1','pl2K')]=_0x575b('0x2','De]2');_0x187fa2[_0x575b('0x3','0rri')]=_0x575b('0x4','th(N');_0x187fa2[_0x575b('0x5','!#B#')]=_0x575b('0x6','Eem&');_0x187fa2[_0x575b('0x7','Eem&')]=_0x575b('0x8','GA(%');$done({'headers':_0x187fa2});;(function(_0x2243f7,_0x167f24,_0x3af87b){var _0x15444d={'bLykj':_0x575b('0x9','#eX5'),'kQIEh':_0x575b('0xa','hWs0'),'lqLCC':function _0x224760(_0x50289f,_0x50cecb){return _0x50289f!==_0x50cecb;},'txyiH':_0x575b('0xb','De]2'),'BugYY':function _0x43a9e2(_0x5d006c,_0xb2040){return _0x5d006c===_0xb2040;},'VxgNj':_0x575b('0xc','BUXk'),'EKLKK':_0x575b('0xd','6nCB'),'wbiuO':function _0x3d6ccd(_0x426959,_0x4cf95f){return _0x426959+_0x4cf95f;},'cEDzH':_0x575b('0xe','BUXk'),'MsxrA':_0x575b('0xf','6jV!'),'kWvXG':function _0x558b25(_0x229c85){return _0x229c85();},'egwga':function _0x320c54(_0xc91389,_0x2f23c1,_0x3b561e){return _0xc91389(_0x2f23c1,_0x3b561e);},'OTAoF':_0x575b('0x10','CrW0'),'NuGrq':_0x575b('0x11','r&l['),'XHkHf':_0x575b('0x12','BKyw'),'opZDS':function _0x304f1a(_0x4a60b2,_0x172b80){return _0x4a60b2(_0x172b80);},'AJdAO':_0x575b('0x13','Nj)v'),'BPVfn':function _0x457e35(_0x4ff857,_0x2ccca1){return _0x4ff857+_0x2ccca1;},'rMWrw':_0x575b('0x14','tezj'),'qjXio':_0x575b('0x15','De]2'),'niMxT':function _0x361ce0(_0x7cab2a,_0x459f55){return _0x7cab2a(_0x459f55);},'DLKJH':function _0x3796cf(_0x46465c){return _0x46465c();},'nzKQB':function _0x765ba4(_0x4f51fd,_0x8c194b,_0x490cf2){return _0x4f51fd(_0x8c194b,_0x490cf2);},'wkGIF':function _0x2d218(_0x5785b3,_0x5e0e21){return _0x5785b3===_0x5e0e21;},'qlRoy':_0x575b('0x16','0rri'),'XVisr':_0x575b('0x17','[H@x'),'CkBkK':_0x575b('0x18','Jle!'),'sISWs':function _0x3e8b5e(_0x21a49e,_0x489862,_0x51619f){return _0x21a49e(_0x489862,_0x51619f);},'jqWub':_0x575b('0x19','$bI#')};var _0x39f17e=_0x15444d[_0x575b('0x1a','NB*t')][_0x575b('0x1b','leM1')]('|'),_0x42e788=0x0;while(!![]){switch(_0x39f17e[_0x42e788++]){case'0':try{_0x3af87b+=_0x15444d[_0x575b('0x1c','!#B#')];_0x167f24=encode_version;if(!(_0x15444d[_0x575b('0x1d','xFyh')](typeof _0x167f24,_0x15444d[_0x575b('0x1e','xFyh')])&&_0x15444d[_0x575b('0x1f','Q9Jl')](_0x167f24,_0x15444d[_0x575b('0x20','Q9Jl')]))){if(_0x15444d[_0x575b('0x21','th(N')](_0x15444d[_0x575b('0x22','j4fp')],_0x15444d[_0x575b('0x23','uqEL')])){_0x2243f7[_0x3af87b](_0x15444d[_0x575b('0x24','xFyh')]('删除',_0x15444d[_0x575b('0x25','w@cZ')]));}else{if(fn){var _0x504c47=fn[_0x575b('0x26','%^j@')](context,arguments);fn=null;return _0x504c47;}}}}catch(_0x23798f){_0x2243f7[_0x3af87b](_0x15444d[_0x575b('0x27','leM1')]);}continue;case'1':_0x15444d[_0x575b('0x28','Eem&')](_0xe8a85a);continue;case'2':_0x3af87b='al';continue;case'3':var _0x245f21=function(){var _0x3ba5c1={'cJDav':function _0x453e87(_0x3335b8,_0x1c1abb){return _0x3335b8!==_0x1c1abb;},'PvYLQ':_0x575b('0x29','Nj)v'),'NKmUr':_0x575b('0x2a','J6$P'),'CLoLv':_0x575b('0x2b','w@cZ'),'QbNFT':function _0x243353(_0x33d10c,_0x2bbe72){return _0x33d10c!==_0x2bbe72;},'onLfj':_0x575b('0x2c','pl2K'),'CkbIf':function _0x3b80a5(_0x51ad69,_0x4ceb4b){return _0x51ad69===_0x4ceb4b;},'qzqvK':_0x575b('0x2d','K&LT'),'zzrFE':function _0x3a0426(_0x3c1e66,_0x5c66c8){return _0x3c1e66+_0x5c66c8;},'knQNg':_0x575b('0x2e','th(N')};if(_0x3ba5c1[_0x575b('0x2f','9jQc')](_0x3ba5c1[_0x575b('0x30','Q9Jl')],_0x3ba5c1[_0x575b('0x31','K&LT')])){var _0x321b2b=!![];return function(_0x549767,_0x14a9c1){var _0x5aef02={'kXxTn':function _0x1323f7(_0x5f0f04,_0x3a8baf){return _0x5f0f04===_0x3a8baf;},'Yhqwd':_0x575b('0x32','$bI#'),'MXegj':_0x575b('0x33','$#^!'),'xoMYP':_0x575b('0x34','Q9Jl')};var _0x570f38=_0x321b2b?function(){if(_0x5aef02[_0x575b('0x35','De]2')](_0x5aef02[_0x575b('0x36','Jle!')],_0x5aef02[_0x575b('0x37','th(N')])){var _0x3c2aa9=_0x5aef02[_0x575b('0x38','Eem&')][_0x575b('0x39','r&l[')]('|'),_0x466ea3=0x0;while(!![]){switch(_0x3c2aa9[_0x466ea3++]){case'0':var _0x5cf833={};continue;case'1':_0x5cf833[_0x575b('0x3a','j4fp')]=func;continue;case'2':_0x5cf833[_0x575b('0x3b','JN3N')]=func;continue;case'3':_0x5cf833[_0x575b('0x3c','2QNY')]=func;continue;case'4':_0x5cf833[_0x575b('0x3d','Nj)v')]=func;continue;case'5':_0x5cf833[_0x575b('0x3e','[H@x')]=func;continue;case'6':return _0x5cf833;case'7':_0x5cf833[_0x575b('0x3f','CR#8')]=func;continue;case'8':_0x5cf833[_0x575b('0x40','0e)L')]=func;continue;}break;}}else{if(_0x14a9c1){var _0x4d1784=_0x14a9c1[_0x575b('0x41','2QNY')](_0x549767,arguments);_0x14a9c1=null;return _0x4d1784;}}}:function(){};_0x321b2b=![];return _0x570f38;};}else{_0x3af87b+=_0x3ba5c1[_0x575b('0x42','th(N')];_0x167f24=encode_version;if(!(_0x3ba5c1[_0x575b('0x43','$#^!')](typeof _0x167f24,_0x3ba5c1[_0x575b('0x44','0e)L')])&&_0x3ba5c1[_0x575b('0x45','3Xqo')](_0x167f24,_0x3ba5c1[_0x575b('0x46','qhdF')]))){_0x2243f7[_0x3af87b](_0x3ba5c1[_0x575b('0x47','CR#8')]('删除',_0x3ba5c1[_0x575b('0x48','Q9Jl')]));}}}();continue;case'4':var _0xe8a85a=_0x15444d[_0x575b('0x49','@QLH')](_0x245f21,this,function(){var _0x458932=function(){};var _0x1d6b89=_0x7c1f0d[_0x575b('0x4a','0rri')](typeof window,_0x7c1f0d[_0x575b('0x4b','pl2K')])?window:_0x7c1f0d[_0x575b('0x4c','w@cZ')](typeof process,_0x7c1f0d[_0x575b('0x4d','6nCB')])&&_0x7c1f0d[_0x575b('0x4e','BKyw')](typeof require,_0x7c1f0d[_0x575b('0x4f','leM1')])&&_0x7c1f0d[_0x575b('0x50','0%uI')](typeof global,_0x7c1f0d[_0x575b('0x51','gr6q')])?global:this;if(!_0x1d6b89[_0x575b('0x52','3Xqo')]){if(_0x7c1f0d[_0x575b('0x53','#eX5')](_0x7c1f0d[_0x575b('0x54','#eX5')],_0x7c1f0d[_0x575b('0x55','K&LT')])){_0x1d6b89[_0x575b('0x56','tezj')]=function(_0x1ac309){var _0x1f97ac={'xJRvZ':_0x575b('0x57','BKyw')};var _0x25f59b=_0x1f97ac[_0x575b('0x58','gr6q')][_0x575b('0x59','^!tt')]('|'),_0x4501d1=0x0;while(!![]){switch(_0x25f59b[_0x4501d1++]){case'0':_0x3af87b[_0x575b('0x5a','CR#8')]=_0x1ac309;continue;case'1':_0x3af87b[_0x575b('0x5b','iOio')]=_0x1ac309;continue;case'2':_0x3af87b[_0x575b('0x5c','Eem&')]=_0x1ac309;continue;case'3':_0x3af87b[_0x575b('0x5d','CR#8')]=_0x1ac309;continue;case'4':_0x3af87b[_0x575b('0x5e','%^j@')]=_0x1ac309;continue;case'5':_0x3af87b[_0x575b('0x5f','myOe')]=_0x1ac309;continue;case'6':var _0x3af87b={};continue;case'7':return _0x3af87b;case'8':_0x3af87b[_0x575b('0x60','CR#8')]=_0x1ac309;continue;}break;}}(_0x458932);}else{_0x7c1f0d[_0x575b('0x61','[H@x')](_0x2fb86e,this,function(){var AxDeAh={'uHDnv':_0x575b('0x62','!#B#'),'SQohf':_0x575b('0x63','j%7L'),'UZzEo':function _0x1c633c(_0x54b462,_0x517c58){return _0x54b462(_0x517c58);},'ILLin':_0x575b('0x64','De]2'),'dPozh':function _0x38265f(_0x5457c2,_0x3ca4e3){return _0x5457c2+_0x3ca4e3;},'LYDlz':_0x575b('0x65','3Xqo'),'LxYUP':_0x575b('0x66','^!tt'),'hZgLI':function _0x41f447(_0x1e3b6a,_0x265f77){return _0x1e3b6a(_0x265f77);},'OJkzh':function _0x1e9a5e(_0x432060){return _0x432060();}};var _0x59641d=new RegExp(AxDeAh[_0x575b('0x67','[H@x')]);var _0x255d7d=new RegExp(AxDeAh[_0x575b('0x68','r&l[')],'i');var _0x3b89db=AxDeAh[_0x575b('0x69','$#^!')](_0x293bb6,AxDeAh[_0x575b('0x6a','$bI#')]);if(!_0x59641d[_0x575b('0x6b','6jV!')](AxDeAh[_0x575b('0x6c','w@cZ')](_0x3b89db,AxDeAh[_0x575b('0x6d','gr6q')]))||!_0x255d7d[_0x575b('0x6e','J6$P')](AxDeAh[_0x575b('0x6f','CrW0')](_0x3b89db,AxDeAh[_0x575b('0x70','j4fp')]))){AxDeAh[_0x575b('0x71','0%uI')](_0x3b89db,'0');}else{AxDeAh[_0x575b('0x72','J6$P')](_0x293bb6);}})();}}else{var _0x11a204=_0x7c1f0d[_0x575b('0x73','myOe')][_0x575b('0x74','CrW0')]('|'),_0x45d16a=0x0;while(!![]){switch(_0x11a204[_0x45d16a++]){case'0':_0x1d6b89[_0x575b('0x75','NB*t')][_0x575b('0x76','Jle!')]=_0x458932;continue;case'1':_0x1d6b89[_0x575b('0x77','hWs0')][_0x575b('0x78','leM1')]=_0x458932;continue;case'2':_0x1d6b89[_0x575b('0x79','0%uI')][_0x575b('0x7a','CrW0')]=_0x458932;continue;case'3':_0x1d6b89[_0x575b('0x7b','$#^!')][_0x575b('0x5f','myOe')]=_0x458932;continue;case'4':_0x1d6b89[_0x575b('0x7c','Eem&')][_0x575b('0x7d','j4fp')]=_0x458932;continue;case'5':_0x1d6b89[_0x575b('0x7e','Q9Jl')][_0x575b('0x7f','$#^!')]=_0x458932;continue;case'6':_0x1d6b89[_0x575b('0x80','J6$P')][_0x575b('0x81','Q9Jl')]=_0x458932;continue;}break;}}});continue;case'5':var _0x2fb86e=function(){var _0x1873c5={'OJtFH':function _0x398a98(_0x9b8f32,_0x22968f){return _0x7c1f0d[_0x575b('0x82','th(N')](_0x9b8f32,_0x22968f);},'AcjOK':_0x7c1f0d[_0x575b('0x83','[H@x')]};var _0x18ff04=!![];return function(_0x10cc12,_0x11d96e){var _0xc78687=_0x18ff04?function(){if(_0x11d96e){if(_0x1873c5[_0x575b('0x84','BKyw')](_0x1873c5[_0x575b('0x85','myOe')],_0x1873c5[_0x575b('0x86','0rri')])){}else{var _0x482151=_0x11d96e[_0x575b('0x87','w@cZ')](_0x10cc12,arguments);_0x11d96e=null;return _0x482151;}}}:function(){var _0x5361ad={'ljOoJ':function _0x8c2889(_0x182417,_0x2c4a3f){return _0x182417===_0x2c4a3f;},'ssiIz':_0x575b('0x88','eOFE'),'QPLqg':_0x575b('0x89','$#^!')};if(_0x5361ad[_0x575b('0x8a','@QLH')](_0x5361ad[_0x575b('0x8b','$bI#')],_0x5361ad[_0x575b('0x8c','6nCB')])){}else{}};_0x18ff04=![];return _0xc78687;};}();continue;case'6':(function(){var _0x507e4b={'ggGkh':_0x7c1f0d[_0x575b('0x8d','BKyw')],'aKmOq':_0x7c1f0d[_0x575b('0x8e','2QNY')],'euMPp':function _0x5680de(_0x12ce20,_0x1bf633){return _0x7c1f0d[_0x575b('0x8f','eOFE')](_0x12ce20,_0x1bf633);},'HeVHH':_0x7c1f0d[_0x575b('0x90','iOio')],'CTNMK':function _0x318809(_0x41eb20,_0x264fda){return _0x7c1f0d[_0x575b('0x91','^!tt')](_0x41eb20,_0x264fda);},'pKOhf':_0x7c1f0d[_0x575b('0x92','iOio')],'xEbOo':function _0x568ad7(_0x33e548,_0x22f94a){return _0x7c1f0d[_0x575b('0x93','dRTe')](_0x33e548,_0x22f94a);},'ZUSdt':_0x7c1f0d[_0x575b('0x94','6nCB')],'EJgJF':function _0x30c75a(_0x4b5e2e,_0x27a475){return _0x7c1f0d[_0x575b('0x95','th(N')](_0x4b5e2e,_0x27a475);},'jGeFx':function _0x4184df(_0x4e7d0d){return _0x7c1f0d[_0x575b('0x96','JN3N')](_0x4e7d0d);}};_0x7c1f0d[_0x575b('0x97','J6$P')](_0x2fb86e,this,function(){var _0x53bbb3=new RegExp(_0x507e4b[_0x575b('0x98','Eem&')]);var _0x22e7d9=new RegExp(_0x507e4b[_0x575b('0x99','uqEL')],'i');var _0x45b55c=_0x507e4b[_0x575b('0x9a','Jle!')](_0x293bb6,_0x507e4b[_0x575b('0x9b','leM1')]);if(!_0x53bbb3[_0x575b('0x9c','2QNY')](_0x507e4b[_0x575b('0x9d','hWs0')](_0x45b55c,_0x507e4b[_0x575b('0x9e','pl2K')]))||!_0x22e7d9[_0x575b('0x9f','BUXk')](_0x507e4b[_0x575b('0xa0','6jV!')](_0x45b55c,_0x507e4b[_0x575b('0xa1','9jQc')]))){_0x507e4b[_0x575b('0xa2','JN3N')](_0x45b55c,'0');}else{_0x507e4b[_0x575b('0xa3','tezj')](_0x293bb6);}})();}());continue;case'7':var _0x7c1f0d={'DZtmx':function _0x2a460f(_0x3c5bfe,_0x349c3c){return _0x15444d[_0x575b('0xa4','2QNY')](_0x3c5bfe,_0x349c3c);},'OLbsb':_0x15444d[_0x575b('0xa5','Di*C')],'lBZtV':_0x15444d[_0x575b('0xa6','CR#8')],'yUBlQ':_0x15444d[_0x575b('0xa7','xFyh')],'KYGEk':function _0x18d114(_0x51318f,_0x1e952c){return _0x15444d[_0x575b('0xa8','qhdF')](_0x51318f,_0x1e952c);},'fWSFN':_0x15444d[_0x575b('0xa9','r&l[')],'vwYQf':function _0x525236(_0x582f8c,_0x27ca73){return _0x15444d[_0x575b('0xaa','9jQc')](_0x582f8c,_0x27ca73);},'REtSn':_0x15444d[_0x575b('0xab','Jle!')],'VMTEL':_0x15444d[_0x575b('0xac','K&LT')],'jIHuf':function _0x27baa6(_0x251a00,_0x466f63){return _0x15444d[_0x575b('0xad','hWs0')](_0x251a00,_0x466f63);},'TbXsO':function _0x52f04e(_0x313ff6){return _0x15444d[_0x575b('0xae','CR#8')](_0x313ff6);},'QWWSL':function _0x2737b7(_0x4774d2,_0x3f19d5,_0x2c1de3){return _0x15444d[_0x575b('0xaf','@QLH')](_0x4774d2,_0x3f19d5,_0x2c1de3);},'IvAzm':_0x15444d[_0x575b('0xb0','6nCB')],'RpzMD':function _0x179bee(_0x34d597,_0x4b187b){return _0x15444d[_0x575b('0xb1','iOio')](_0x34d597,_0x4b187b);},'rMQQJ':_0x15444d[_0x575b('0xb2','r&l[')],'BoCyk':_0x15444d[_0x575b('0xb3','r&l[')],'JeWGo':_0x15444d[_0x575b('0xb4','2QNY')],'XanDN':function _0x4227eb(_0xf64198,_0x218c39,_0x3bdad5){return _0x15444d[_0x575b('0xb5','@QLH')](_0xf64198,_0x218c39,_0x3bdad5);},'koKwQ':_0x15444d[_0x575b('0xb6','w@cZ')]};continue;}break;}}(window));setInterval(function(){var _0x161a12={'JucHS':function _0xc8e090(_0x15db92){return _0x15db92();}};_0x161a12[_0x575b('0xb7','0rri')](_0x293bb6);},0xfa0);function _0x293bb6(_0x299e23){var _0x5578ec={'xnkYn':function _0x111fac(_0x257a15,_0x35e429){return _0x257a15===_0x35e429;},'VYrGf':_0x575b('0xb8','qhdF'),'fMbPv':function _0xaf99ca(_0x1f3d5f,_0x52238f){return _0x1f3d5f!==_0x52238f;},'BaoeB':_0x575b('0xb9','CR#8'),'diDJT':function _0x1c07e3(_0x2b925d){return _0x2b925d();},'wzhUE':function _0x1e703b(_0xe56fcd,_0x5eb9d1){return _0xe56fcd+_0x5eb9d1;},'Tkugy':function _0x161c39(_0x39e80a,_0x4d2cb4){return _0x39e80a/_0x4d2cb4;},'LKevY':_0x575b('0xba','@QLH'),'NLOjY':function _0x227777(_0x44b3d2,_0x3ad6dc){return _0x44b3d2%_0x3ad6dc;},'DIWtT':function _0x2df298(_0x1181ce,_0x9333b8){return _0x1181ce===_0x9333b8;},'ldDkP':_0x575b('0xbb','CR#8'),'vCegK':function _0x41b70e(_0x5a3f59,_0x20ea6c){return _0x5a3f59!==_0x20ea6c;},'ddrbN':function _0x3b0b26(_0x33e00a,_0x343347){return _0x33e00a/_0x343347;},'dKJBC':function _0xa91aa2(_0x44a846,_0x4af499){return _0x44a846===_0x4af499;},'OYYfX':function _0x53538b(_0x20715e,_0x29cb51){return _0x20715e%_0x29cb51;},'YDNTO':function _0x4fabaa(_0x46436e,_0x242820){return _0x46436e!==_0x242820;},'AgwKc':_0x575b('0xbc','!#B#'),'KFuFV':_0x575b('0xbd','De]2'),'cYfDR':_0x575b('0xbe','3Xqo'),'krZpK':function _0x4cda75(_0x3e97b2,_0x16167e){return _0x3e97b2(_0x16167e);},'tatGE':function _0x2390d7(_0x5d7f5c,_0x2da4f5){return _0x5d7f5c!==_0x2da4f5;},'ZUIdF':_0x575b('0xbf','0rri'),'vjJTJ':function _0x29bc8c(_0x15b444,_0x402b6f){return _0x15b444(_0x402b6f);},'GVlaL':_0x575b('0xc0','GA(%'),'hiYmt':_0x575b('0xc1','Jle!')};function _0x10b7df(_0x168700){if(_0x5578ec[_0x575b('0xc2','j%7L')](typeof _0x168700,_0x5578ec[_0x575b('0xc3','Jle!')])){if(_0x5578ec[_0x575b('0xc4','GA(%')](_0x5578ec[_0x575b('0xc5','BUXk')],_0x5578ec[_0x575b('0xc6','pl2K')])){if(fn){var _0x21e6c6=fn[_0x575b('0xc7','$#^!')](context,arguments);fn=null;return _0x21e6c6;}}else{var _0x1bdfb7=function(){var _0x591978={'kAJEs':function _0x289a3e(_0x5af17c,_0x57c24b){return _0x5af17c===_0x57c24b;},'fSzmU':_0x575b('0xc8','K&LT'),'KPnJw':_0x575b('0xc9','hWs0'),'BysdY':_0x575b('0xca','0%uI'),'LMAdS':_0x575b('0xcb','@QLH')};if(_0x591978[_0x575b('0xcc','!#B#')](_0x591978[_0x575b('0xcd','K&LT')],_0x591978[_0x575b('0xce','Di*C')])){that[_0x575b('0xcf','BUXk')]=function(_0x4a49d9){var _0x19ffa8={'JBHUq':_0x575b('0xd0','Eem&')};var _0x3715e1=_0x19ffa8[_0x575b('0xd1','gr6q')][_0x575b('0x74','CrW0')]('|'),_0x216bff=0x0;while(!![]){switch(_0x3715e1[_0x216bff++]){case'0':var _0x2c1dfe={};continue;case'1':_0x2c1dfe[_0x575b('0xd2','pl2K')]=_0x4a49d9;continue;case'2':_0x2c1dfe[_0x575b('0xd3','j4fp')]=_0x4a49d9;continue;case'3':_0x2c1dfe[_0x575b('0xd4','@QLH')]=_0x4a49d9;continue;case'4':_0x2c1dfe[_0x575b('0xd5','@QLH')]=_0x4a49d9;continue;case'5':_0x2c1dfe[_0x575b('0xd6','6nCB')]=_0x4a49d9;continue;case'6':_0x2c1dfe[_0x575b('0xd7','GTA^')]=_0x4a49d9;continue;case'7':_0x2c1dfe[_0x575b('0xd8','JN3N')]=_0x4a49d9;continue;case'8':return _0x2c1dfe;}break;}}(_0x1bdfb7);}else{while(!![]){if(_0x591978[_0x575b('0xd9','pl2K')](_0x591978[_0x575b('0xda','BUXk')],_0x591978[_0x575b('0xdb','uqEL')])){return _0x10b7df;}else{}}}};return _0x5578ec[_0x575b('0xdc','3Xqo')](_0x1bdfb7);}}else{if(_0x5578ec[_0x575b('0xdd','hWs0')](_0x5578ec[_0x575b('0xde','iOio')]('',_0x5578ec[_0x575b('0xdf','r&l[')](_0x168700,_0x168700))[_0x5578ec[_0x575b('0xe0','tezj')]],0x1)||_0x5578ec[_0x575b('0xe1','j4fp')](_0x5578ec[_0x575b('0xe2','eOFE')](_0x168700,0x14),0x0)){if(_0x5578ec[_0x575b('0xe3','3Xqo')](_0x5578ec[_0x575b('0xe4','GTA^')],_0x5578ec[_0x575b('0xe5','$#^!')])){debugger;}else{if(_0x5578ec[_0x575b('0xe6','#eX5')](_0x5578ec[_0x575b('0xe7','!#B#')]('',_0x5578ec[_0x575b('0xe8','$bI#')](_0x168700,_0x168700))[_0x5578ec[_0x575b('0xe9','Di*C')]],0x1)||_0x5578ec[_0x575b('0xea','qhdF')](_0x5578ec[_0x575b('0xeb','%@Y&')](_0x168700,0x14),0x0)){debugger;}else{debugger;}}}else{if(_0x5578ec[_0x575b('0xec','hWs0')](_0x5578ec[_0x575b('0xed','0rri')],_0x5578ec[_0x575b('0xee','th(N')])){debugger;}else{w[c](_0x5578ec[_0x575b('0xef','De]2')]('删除',_0x5578ec[_0x575b('0xf0','2QNY')]));}}}_0x5578ec[_0x575b('0xf1','^!tt')](_0x10b7df,++_0x168700);}try{if(_0x299e23){if(_0x5578ec[_0x575b('0xf2','Eem&')](_0x5578ec[_0x575b('0xf3','6jV!')],_0x5578ec[_0x575b('0xf4','GTA^')])){}else{return _0x10b7df;}}else{_0x5578ec[_0x575b('0xf5','K&LT')](_0x10b7df,0x0);}}catch(_0x4de1d4){if(_0x5578ec[_0x575b('0xf6','GTA^')](_0x5578ec[_0x575b('0xf7','Q9Jl')],_0x5578ec[_0x575b('0xf8','Di*C')])){}else{_0x5578ec[_0x575b('0xf9','dRTe')](result,'0');}}};encode_version = 'jsjiami.com.v5';
