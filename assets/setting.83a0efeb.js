import{d as S,r as m,p as T,m as x,o as B,s as k,b as a,e as u,au as I,w as t,av as v,E as n,al as g,I as c,aw as f,R as E,Q as _,am as i,ax as w,c as O,ak as j,D as h,ao as D,T as U,ad as $,ay as J,y as r}from"./vendor.976a7dbd.js";import{i as L}from"./index.9b39ba76.js";var P="/pikpak/assets/aria2-tip-1.e9ebfae4.png",V="/pikpak/assets/aria2-tip-2.f3636f8d.png";const z={class:"list-page"},G=r(" \u7ED1\u5B9Atelegram "),M=n("p",null,null,-1),Q=r("Telegram\u7ED1\u5B9A"),R=n("a",{href:"https://t.me/PikPak_Bot",target:"_blank"},"Telegram\u673A\u5668\u4EBA\u5730\u5740",-1),H=r("aria2\u8BBE\u7F6E "),Z=r("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4FDD\u5B58\u6587\u4EF6\u5939\u7ED3\u6784"),q=r("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4EC5\u4FDD\u5B58\u6587\u4EF6"),K=n("img",{src:P,alt:""},null,-1),W=n("br",null,null,-1),X=n("br",null,null,-1),Y=n("img",{src:V,alt:""},null,-1),ee=r("\u6D4B\u8BD5\u5E76\u4FDD\u5B58"),ue=r("\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E "),ae=r("\u4FDD\u5B58"),te=n("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7F51\u7AD9",-1),le=n("br",null,null,-1),ie=S({setup(oe){const A=m(["\u6DFB\u52A0\u63A8\u5E7F\u4E0B\u8F7D","\u7ED1\u5B9ATelegram","\u76F4\u63A5\u5206\u4EAB\u529F\u80FD","\u4FEE\u6539\u4F20\u8F93\u81EA\u52A8\u8BF7\u6C42\u65B9\u5F0F","\u4F20\u8F93\u53EA\u663E\u793A\u4FDD\u5B58\u4E2D","\u81EA\u5B9A\u4E49\u83DC\u5355","\u8D44\u6E90\u5E93\u5206\u9875\uFF0C\u5206\u4EAB\u79D2\u4F20\u652F\u6301\u6587\u4EF6\u53CA","...."]),l=m({host:"",token:"",dir:!0}),b=()=>{let s={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};l.value.token&&s.params.splice(0,0,"token:"+l.value.token),fetch(l.value.host,{method:"POST",body:JSON.stringify(s),headers:new Headers({"Content-Type":"application/json"})}).then(e=>e.json()).then(e=>{e.error&&e.error.message?window.$message.error(e.error.message):e.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(l.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F"))}).catch(e=>console.error("Error:",e))},F=m(!1),d=m({username:"",password:""}),y=T(),C=()=>{F.value?y.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{},onNegativeClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(d.value))}}):window.localStorage.removeItem("pikpakLoginData")};x(()=>{let s=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");s.dir===void 0&&(s.dir=!0),s.host&&(l.value=s);let e=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");e.username&&e.password&&(d.value=e,F.value=!0)});const p=m(),N=()=>{let s=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(!s&&!s.access_token)return window.$message.error("\u8BF7\u5148\u767B\u9646"),!1;let e=p.value&&decodeURIComponent(p.value).match(/(^|&)token=([^&]*)(&|$)/);if(console.log(e),!e||!e.length||e.length!=4)return window.$message.error("\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5"),!1;L.post("https://api-drive.mypikpak.com/user/v1/bind",{accessToken:s.access_token,thirdType:"TG",thirdToken:e[2]}).then(o=>{p.value="",o.data.bound?window.$message.success("\u7ED1\u5B9A\u6210\u529F"):window.$message.error("\u7ED1\u5B9A\u5931\u8D25")})};return(s,e)=>(B(),k("div",z,[a(u(I),{"default-expanded-names":["-1","0","2"]},{default:t(()=>[a(u(v),{name:"-1"},{header:t(()=>[G,n("a",{onClick:e[0]||(e[0]=f(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#Telegram",target:"_blank"},[a(u(c),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:t(()=>[a(u(g))]),_:1})])]),default:t(()=>[a(u(E),{value:p.value,"onUpdate:value":e[1]||(e[1]=o=>p.value=o),placeholder:"\u590D\u5236telegram\u7ED1\u5B9A\u94FE\u63A5\u5230\u8FD9"},null,8,["value"]),M,a(u(_),{disabled:!p.value,type:"primary",onClick:N},{default:t(()=>[Q]),_:1},8,["disabled"]),R]),_:1}),a(u(v),{name:"0",title:"aria2\u8BBE\u7F6E"},{header:t(()=>[H,n("a",{onClick:e[2]||(e[2]=f(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#arai2",target:"_blank"},[a(u(c),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:t(()=>[a(u(g))]),_:1})])]),default:t(()=>[a(u(D),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:t(()=>[a(u(i),{label:"aria2\u94FE\u63A5\uFF1A"},{default:t(()=>[a(u(E),{value:l.value.host,"onUpdate:value":e[3]||(e[3]=o=>l.value.host=o),placeholder:"\u4F8B\u5982http://localhost:6800/jsonrpc"},null,8,["value"])]),_:1}),a(u(i),{label:"aria2Token\uFF1A"},{default:t(()=>[a(u(E),{value:l.value.token,"onUpdate:value":e[4]||(e[4]=o=>l.value.token=o),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1}),a(u(i),{label:"\u6587\u4EF6\u5939\u8BBE\u7F6E\uFF1A"},{default:t(()=>[a(u(w),{value:l.value.dir,"onUpdate:value":e[5]||(e[5]=o=>l.value.dir=o)},{checked:t(()=>[Z]),unchecked:t(()=>[q]),_:1},8,["value"])]),_:1}),l.value.host&&l.value.host.indexOf("https://")===-1&&l.value.host.indexOf("http://localhost")==-1&&l.value.host.indexOf("http://127.0.0.1")===-1?(B(),O(u(j),{key:0,title:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u6309\u4E0B\u56FE\u8BBE\u7F6E\u5F00\u59CB\u6DF7\u5408\u6A21\u5F0F",type:"info"},{default:t(()=>[K,W,X,Y]),_:1})):h("",!0),a(u(i),null,{default:t(()=>[a(u(_),{type:"primary",onClick:b},{default:t(()=>[ee]),_:1})]),_:1})]),_:1})]),_:1}),a(u(v),{name:"1",title:"\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"},{header:t(()=>[ue,n("a",{onClick:e[6]||(e[6]=f(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#i-6",target:"_blank"},[a(u(c),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:t(()=>[a(u(g))]),_:1})])]),default:t(()=>[a(u(D),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:t(()=>[a(u(i),{label:"\u662F\u5426\u5F00\u542F"},{default:t(()=>[a(u(w),{value:F.value,"onUpdate:value":e[7]||(e[7]=o=>F.value=o)},null,8,["value"])]),_:1}),F.value?(B(),k(U,{key:0},[a(u(i),{label:"\u7528\u6237\u540D"},{default:t(()=>[a(u(E),{value:d.value.username,"onUpdate:value":e[8]||(e[8]=o=>d.value.username=o),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),a(u(i),{label:"\u5BC6\u7801"},{default:t(()=>[a(u(E),{value:d.value.password,"onUpdate:value":e[9]||(e[9]=o=>d.value.password=o),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):h("",!0),a(u(i),null,{default:t(()=>[a(u(_),{type:"primary",onClick:C},{default:t(()=>[ae]),_:1})]),_:1})]),_:1})]),_:1}),a(u(v),{title:"\u5173\u4E8E",name:"2"},{default:t(()=>[a(u($),null,{default:t(()=>[te]),_:1}),le]),_:1}),a(u(v),{title:"\u529F\u80FD\u5217\u8868",name:"3"},{default:t(()=>[a(u(J),{lines:A.value},null,8,["lines"])]),_:1})]),_:1})]))}});export{ie as default};
