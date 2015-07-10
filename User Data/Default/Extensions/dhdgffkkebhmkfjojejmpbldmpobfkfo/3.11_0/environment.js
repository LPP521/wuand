Registry.registerRaw("environment.js","0",function(){Context.domContentLoaded|=0;Context.pageLoaded|=0;Context.domNodeInserted|=0;Context.props={};Context.adjustLogLevel=function(a){void 0!==a&&(logLevel=a);D|=60<=logLevel};var q=function(){var a={objs:{},push:function(b,c){0!==c&&1!==c&&(c=0);var e=Math.floor(19831206*Math.random()+1);a.objs[e]={fn:b,prio:c};return e},remove:function(b){delete a.objs[b]},get:function(b){for(var c=[],e=0;1>=e;e++)for(var k in a.objs)a.objs.hasOwnProperty(k)&&
(a.objs[k].prio!==e||void 0!==b&&k!=b||c.push(a.objs[k].fn));return void 0===b?c:c[0]},finalize:function(b){if(void 0===b){b=a.get();for(var c=0;c<b.length;c++)b[c]()}else return a.objs[b]&&(c=a.objs[b].fn(),delete a.objs[b]),c}};return a}();Context.adjustLogLevel();var M=function(a){return{}.toString.apply(a).match(/\s([a-z|A-Z]+)/)[1]},A=function(a,b){void 0==b&&(b=100);return b&&a&&(a==document||A(a.parentNode,b-1))},Q=function(){var a=function(){};a.prototype={};return new a},Y=function(){var a=
Q(),b=function(a,b,c,e,d,h){var g=c[e];c[e]=h&&"string"===typeof g?new Function(g):function(){return g.apply(d,arguments)};return b.apply(a,c)},c={setTimeout:{enhance:function(){return b(window,safeWindow.setTimeout,arguments,0,a,!0)}},setInterval:{enhance:function(){return b(window,safeWindow.setInterval,arguments,0,a,!0)}},close:{get:function(){return window.self==window.top?function(a){return X(a)}:window.close}},location:{get:!0,set:function(a){window.location.href=a}},clearInterval:{get:function(){return safeWindow.clearInterval}},
clearTimeout:{get:function(){return safeWindow.clearTimeout}},addEventListener:{enhance:function(){return b(window,safeWindow.addEventListener,arguments,1,a,!0)}},removeEventListener:{enhance:function(){return b(window,safeWindow.removeEventListener,arguments,1,a,!0)}}};["confirm","prompt","alert"].forEach(function(a){c[a]={enhance:safeWindow[a]}});var e=function(b){return b==window?a:b},k=function(a,b,c,e){c||(c=a);var d=function(){var d=a[b].apply(c,arguments);e&&(d=e(d));return d};d.__proto__=
a[b];d.prototype=a[b].prototype;return d},g=function(b){var c,d,e=null,e=function(e){c=e;d=function(){return e.apply(a,arguments)};window[b]=d};a.__defineGetter__(b,function(){return void 0===c||d!==window[b]?window[b]:c});a.__defineSetter__(b,e)},f=function(b,c,d){var h,g=null,f=null,g="function"===typeof c.get?c.get:function(){d&&d.get_cb&&d.get_cb.apply(this,arguments);return void 0===h?e(window[b]):h};"function"===typeof c.set?f=c.set:c.get||(f=function(a){d&&d.set_cb&&d.set_cb.apply(this,arguments);
h=a});g&&a.__defineGetter__(b,g);f&&a.__defineSetter__(b,f)};(function(){var a=0,b=function(b){for(var c=a;c<b;c++)f(String(c),{get:!0});a=Math.max(b,a)};f("length",{},{get_cb:function(){b(window.frames.length)}});b(Math.max(window.frames.length,7))})();for(var d in c)c.hasOwnProperty(d)&&(Context.windowProps[d]=Context.windowProps[d]||!1!==c[d]);var h;for(d in Context.windowProps)if(Context.windowProps.hasOwnProperty(d)&&!1!==c[d]){h={};try{try{c[d]?c[d].wrap?(h.wrap=!0,h.that=c[d].that):c[d].direct?
h.direct=!0:c[d].enhance?h.enhance=c[d].enhance:c[d].get&&(h.get=c[d].get,h.set=c[d].set):"function"===typeof window[d]?Context.windowProps[d].proto?h.wrap=!0:h.direct=!0:"number"===typeof window[d]||"string"===typeof window[d]?h.get=!0:Context.windowProps[d].event&&Context.windowProps[d].proto?h.event=!0:h.direct=!0}catch(t){h.get=!0}h.direct?a[d]=e(window[d]):h.enhance?a[d]=h.enhance:h.event?g(d):h.get||h.set?f(d,h):h.wrap&&function(){var b=d;a[b]=k(window,b,h.that,e)}()}catch(p){console.warn("env: error while creating a new sandbox: "+
p.message)}}B(a,1);return a},Z=function(a,b,c,e,k){var g=null;try{var f=e.sandboxes[a.uuid];f.__TMbackref||(f.__TMbackref={});var d='arguments.callee.__tmid = { uuid: "'+a.uuid+'", run_at: "'+a.options.run_at+'" };\n',h=["context"],t=[void 0],p;for(p in e.elements[a.uuid])if(e.elements[a.uuid].hasOwnProperty(p)){var n=e.elements[a.uuid][p];n.name?n.overwrite?(h.push(n.name),t.push(n.value)):n.scriptid?(f.__TMbackref[n.name+"_"+n.scriptid]=n.value,h.push(n.name),t.push('context.__TMbackref["'+n.name+
"_"+n.scriptid+'"]')):(f[n.name]=n.value,h.push(n.name),t.push("context."+n.name)):D&&console.warn("env: WARN: unexpected item in props elem: "+JSON.stringify(n))}g=[d,"with (context) {\n(function(",h.join(","),") {try {\n",c,b,"\n} catch (e) {if (e.message && e.stack) {console.error(\"ERROR: Execution of script '",a.name.replace(/(['"])/g,"\\$1"),'\' failed! " + e.message);console.log(e.stack.replace(/(\\\\(eval at )?<anonymous>[: ]?)|([\\s.]*at TM_mEval[\\s\\S.]*)/g, ""));} else {console.error(e);}};\n}).apply(context, [',
t.join(","),"]);}\n"].join("");e=function(a,b){(new Function("context",g)).apply(b,[b])};k?k(e,[g,f]):e(g,f)}catch(l){chromeEmu.extension.sendMessage({method:"syntaxCheck",code:[c,b].join("")},function(d){var e="";if(d.errors){var e=c.split("\n").length-1,h="",g;for(g in d.errors){var f=d.errors[g];if(f&&0<=f.line&&f.reason)var k=f.line,h=h+[k>e?"script:":"require:"," (",f.code,") ",f.reason.replace(/.$/,"")," on line: ",k>e?k-e:k," at character: ",f.character,"\n"].join("")}e="JSHINT output:\n"+
h}else e=b;g=l.stack?l.stack.replace(/(\\(eval at )?<anonymous>[: ]?)|([\s.]*at TM_mEval[\s\S.]*)/g,""):"";D||d.errors?console.error("Syntax error @ '"+a.name+"'!\n##########################\n"+e+"##########################\n\n"+g):console.error("Syntax error @ '"+a.name+"'!\n\n",g);safeWindow.setTimeout(function(){D&&chromeEmu.extension.sendMessage({method:"copyToClipboard",data:{content:b,type:"test"},id:"42"},function(){});throw l;},1)})}},w=[],l={events:[],done:{},running:null},y=function(a,b,
c,e){var k={attrChange:0,attrName:null,bubbles:!0,cancelBubble:!1,cancelable:!1,clipboardData:void 0,currentTarget:null,defaultPrevented:!1,eventPhase:0,newValue:null,prevValue:null,relatedNode:null,returnValue:!0,srcElement:null,target:null,timeStamp:(new Date).getTime()};c="string"===typeof c?new Function(c):c;var g=new Event,f;for(f in k)g[f]=k[f];for(f in b)g[f]=b[f];g.type=a;c.apply(e,[g])},C=function(){Context.domContentLoaded=!0;D&&console.log("env: DOMContentLoaded Event!");v()},E=function(a){Context.domNodeInserted||
!D||console.log("env: first DOMNodeInserted Event!");Context.domNodeInserted=!0;l&&l.events.push({event:a,domContentLoaded:Context.domContentLoaded})},F=function(a){Context.domContentLoaded=!0;Context.pageLoaded=!0;D&&console.log("env: load Event!");v()},G=function(){safeDocument.removeEventListener("DOMNodeInserted",E,!1);safeDocument.removeEventListener("DOMContentLoaded",C,!1);safeDocument.removeEventListener("load",F,!1);safeWindow.removeEventListener("unload",G,!1);if(null!=q){for(var a=q.get(),
b=0;b<a.length;b++)a[b]();q=null}chromeEmu.clean&&chromeEmu.clean()},v=function(){for(var a=w.length;0<w.length;)w.shift().fn();window.setTimeout(function(){l&&(l=null)},2E3);return a},H=function(a){if(document.body)a&&(a(),a=null);else{var b=["load","DOMNodeInserted","DOMContentLoaded"],c=function(){b.forEach(function(a){safeDocument.removeEventListener(a,c,!1)});H(a)};b.forEach(function(a){safeDocument.addEventListener(a,c,!1)})}},I=function(a){w.push({fn:a});Context.domContentLoaded?v():D&&console.log("env: schedule for later events!")},
$=function(a){return I(function(){safeWindow.setTimeout(a,1)})},s=[],B=function(a,b){if(!a.__addEventListener){a.__addEventListener=a.addEventListener;a.__removeEventListener=a.removeEventListener;a.removeEventListener=function(a,b,c){"DOMNodeInserted"==a&&l&&l.running==b&&(l.running=null);this.__removeEventListener(a,b,c)};var c=function(a,b,c,f){if(b){var d=s.length;b=parseInt(["DOMContentLoaded"==c?1:2,f?1:2,f?b:3-b,(new Date).getTime()].join("0"));for(c=0;c<s.length;c++)if(f=s[c],!f||!f.prio||
f.prio>b){d=c;break}s.splice(d,0,{prio:b,fn:a})}else s.push({fn:a})};a.addEventListener=function(a,k,g){var f=!0;if("load"==a||"DOMContentLoaded"==a||"DOMNodeInserted"==a){var d=null,h=this;try{d=J(arguments.callee)}catch(t){D&&console.error("env: Error: event "+a,t)}if(d&&"document-idle"!==d.run_at){var p=null;"load"==a?Context.pageLoaded&&(p=function(){y("load",{attrName:"null",newValue:"null",prevValue:"null",eventPhase:Event.AT_TARGET,attrChange:MutationEvent.ADDITION,target:document,relatedNode:document,
srcElement:document},k,h)},f=!1,c(p,b,a,g)):"DOMContentLoaded"==a?Context.domContentLoaded&&(p=function(){y("DOMContentLoaded",{attrName:"null",newValue:"null",prevValue:"null",eventPhase:Event.AT_TARGET,attrChange:MutationEvent.ADDITION,target:document,relatedNode:document,srcElement:document},k,h)},f=!1,c(p,b,a,g)):"DOMNodeInserted"==a&&l&&!l.done[d.uuid]&&(l.done[d.uuid]=!0,p=function(){var b="document-start"!==d.run_at&&"document-body"!==d.run_at;l.running=k;if(l.running){a:if(l)for(var c=l.events.length,
f=0;f<c;f++)if(b&&!l.events[f].domContentLoaded||y("DOMNodeInserted",{attrName:"",newValue:"",prevValue:"",eventPhase:Event.AT_TARGET,target:l.events[f].event.target,relatedNode:l.events[f].event.relatedNode,srcElement:l.events[f].event.srcElement},k,h),!l.running)break a;h.__addEventListener(a,k,g)}l.running=null},c(p));p&&(safeWindow.setTimeout(function(){if(s.length){var a=s.shift();a&&a.fn&&a.fn()}},1),f=!1)}}f&&this.__addEventListener(a,k,g)};q.push(function(){a.removeEventListener=a.__removeEventListener;
a.addEventListener=a.__addEventListener})}Context.windowProps.__addEventListener={proto:!0};Context.windowProps.__removeEventListener={proto:!0}},J=function(a,b){void 0===b&&(b=20);return 0==b?null:!a.__tmid&&a.caller?J(a.caller,b-1):a.__tmid},R=function(a){q.finalize(a)},O=function(a,b,c){var e=TM_context_id+"#"+a,k=null,k=q.push(function(){chromeEmu.extension.sendMessage({method:"unRegisterMenuCmd",name:a,id:e},function(a){})},1);chromeEmu.extension.sendMessage({method:"registerMenuCmd",name:a,
id:TM_context_id,menuId:e,accessKey:c},function(e){e.run&&null!==k&&void 0!==q.get(k)?(safeWindow.setTimeout(function(){b()},1),O(a,b,c)):null!==k&&(q.remove(k),k=null)});return k},S=function(a,b){"boolean"===typeof b?b={loadInBackground:b}:b||(b={});var c=void 0===b.active?void 0===b.loadInBackground?!0:!b.loadInBackground:b.active,e=void 0===b.insert?!0:b.insert,k=null,g=!1,f=null,d,h=chromeEmu.extension.connect("openInTab_"+TM_context_id),t=function(){var a=[];return{run:function(b){b&&a.push(b);
if(k)for(;a.length;)a.pop()()}}}();a&&0==a.search(/^\/\//)&&(a=window.location.protocol+a);h.onMessage.addListener(function(a){a.tabId?g?p():(k=a.tabId,t.run()):a.name?d=a.name:a.close&&(g=!0,f&&(f(),f=void 0))});h.onDisconnect.addListener(function(){h=null});h.postMessage({method:"openInTab",details:{url:a,id:TM_context_id,options:{active:!!c,insert:!!e}},id:TM_context_id});var p=function(){h&&h.postMessage({method:"closeTab",id:TM_context_id})},c={};Object.defineProperties(c,{close:{value:function(){g?
D&&console.debug("env: attempt to close already closed tab!"):(g=!0,p())}},closed:{get:function(){return g}},onclose:{get:function(){return f},set:function(a){f=a}},name:{get:function(){return d},set:function(a){t.run(function(){h&&h.postMessage({method:"nameTab",id:TM_context_id,name:a})})}}});return c},T=function(a,b){var c=!1,e="Object"===M(a)?a:{url:a,name:b};e.url&&"/"===e.url[0]&&(e.url=window.location.origin+e.url);var k=e.context;delete e.context;var g=chromeEmu.extension.connect("download_"+
TM_context_id);g.postMessage({method:"download",details:e,id:TM_context_id});var f=function(a,b){b=b||{};a&&!c&&safeWindow.setTimeout(function(){a.apply(b,[b])},1)};g.onMessage.addListener(function(a){try{a.data&&k&&(a.data.context=k),a.success?e.onload&&(a.data.responseXML&&(a.data.responseXML=safeWindow.unescape(a.data.responseXML)),f(e.onload,a.data)):a.progress?e.onprogress&&f(e.onprogress,a.data):a.timeout?e.ontimeout&&f(e.ontimeout,a.data):e.onerror&&f(e.onerror,a.data)}catch(b){console.log("env: Error: TM_download - ",
b,e)}});return{abort:function(){c=!0}}},U=function(a){var b=!1;a.url&&"/"===a.url[0]&&(a.url=window.location.origin+a.url);var c=a.context;delete a.context;var e=function(){var a={};Object.getOwnPropertyNames(XMLHttpRequest.__proto__).forEach(function(b){a[b]=!0});var b=function(){};Object.getOwnPropertyNames(XMLHttpRequest).forEach(function(c){a[c]||(b[c]=XMLHttpRequest[c])});return b}(),k=function(a,c){c=c||{};a&&!b&&safeWindow.setTimeout(function(){c.__proto__=e;a.apply(c,[c])},1)};if("FormData"!==
M(a.data)){var g=chromeEmu.extension.connect("xhr_"+TM_context_id),f=[];g.postMessage({method:"xhr",details:a,id:TM_context_id});g.onMessage.addListener(function(b){try{if(b.data&&c&&(b.data.context=c),b.data&&b.success){f.length&&(b.data.response_data=f.join(""),f=null);if(b.data.response_data){var d=b.data.response_data,e=b.data.response_types;["response_data","response_types"].forEach(function(a){delete b.data[a]});if(e){var g={response:function(b){var c=a.responseType?a.responseType.toLowerCase():
"",d=function(a){for(var c=new Uint8Array(a.length),d=0;d<a.length;d++)c[d]=b.charCodeAt(d);return c.buffer};return"arraybuffer"==c?d(b):"blob"==c?new Blob([d(b)]):"json"==c?JSON.parse(b):b},responseText:function(a){return a},responseXML:function(a){return(new DOMParser).parseFromString(a,"text/xml")}},l;for(l in g)if(g.hasOwnProperty(l))if(e[l])try{b.data[l]=g[l](d)}catch(q){console.warn("GM_xmlhttpRequest: ",q)}else b.data[l]=null}else console.warn("GM_xmlhttpRequest: got unusual response!"),b.data.responseText=
d}a.onreadystatechange&&k(a.onreadystatechange,b.data);a.onload&&k(a.onload,b.data)}else b.change?a.onreadystatechange&&4!=b.data.readyState&&k(a.onreadystatechange,b.data):b.progress?a.onprogress&&k(a.onprogress,b.data):b.partial?f.push(b.data.partial):b.timeout?a.ontimeout&&k(a.ontimeout,b.data):a.onerror&&k(a.onerror,b.data)}catch(s){console.log("env: Error: TM_xmlhttpRequest",s,a)}})}else{var d=new XMLHttpRequest;void 0===a.async&&(a.async=!0);d.open(a.method,a.url,a.async,a.user,a.password);
if(a.headers)for(g in a.headers)d.setRequestHeader(g,a.headers[g]);a.overrideMimeType&&d.overrideMimeType(a.overrideMimeType);a.responseType&&(d.responseType=a.responseType);"abort error load progress readystatechange timeout".split(" ").forEach(function(b){d["on"+b]=function(){var e="",g=a.url;if(2<d.readyState&&(e=d.getAllResponseHeaders(),4==d.readyState)){e&&(e=e.replace(/TM-finalURL[0-9a-zA-Z]*\: .*[\r\n]{1,2}/,""));var f=d.getResponseHeader("TM-finalURL"+Context.short_id);f&&(g=f)}e={readyState:d.readyState,
status:"",statusText:"",responseHeaders:e,finalUrl:g,context:c};4==d.readyState&&(d.responseType&&""!=d.responseType?e.response=d.response:(e.responseText=d.responseText,e.responseXML=d.responseXML),e.status=d.status,e.statusText=d.statusText);k(a["on"+b],e)}});d.send(a.data)}return{abort:function(){b=!0}}},V=function(a,b){chromeEmu.extension.sendMessage({method:"installScript",url:a,id:TM_context_id},function(a){b&&b(a)})},X=function(a){chromeEmu.extension.sendMessage({method:"closeTab",id:TM_context_id},
function(b){b.error&&console.warn(b.error);a&&a()})},aa=function(a,b){var c=[],e=a.storage,k=a.script.uuid,g=a.script,f=null;(function(){f=chromeEmu.extension.connect("storageListener_"+TM_context_id);f.onMessage.addListener(function(a){if(a.storage)for(var c in a.storage.data)if(a.storage.data.hasOwnProperty(c)){var d=e.data[c];e.data[c]=a.storage.data[c];l(c,d,e.data[c],!0)}a.removed&&(e[a.removed]=b);a.error&&console.log("env: Error: storage listener... :(")});f.postMessage({method:"addStorageListener",
uuid:k,id:TM_context_id})})();var d=function(a){f.postMessage({method:"saveStorageKey",uuid:k,key:a,value:e.data[a],id:TM_context_id,ts:e.ts})},h=function(a,c,d){d===b&&(d=function(a){return a});var e=[],g=null;if(a&&a.length){var g={GM_info:!0},f;for(f in a)if(a.hasOwnProperty(f)){var h=a[f];g[h]=!0}}for(f in c)c.hasOwnProperty(f)&&(h=c[f],g&&!g[d(h.name)]||e.push(h));return e},l=function(a,b,d,e){if(b!=d)for(var g in c)if(c.hasOwnProperty(g)){var f=c[g];if(f&&f.key==a&&f.cb)try{f.cb(a,v(b),v(d),
e)}catch(h){D&&console.warn("env: value change listener of '"+a+"' failed with: "+h.message)}}},p=function(a,b){var d=0,e;for(e in c)c.hasOwnProperty(e)&&c[e].id>d&&(d=e.id);d++;c.push({id:d,key:a,cb:b});return d},n=function(a){for(var b in c)if(c.hasOwnProperty(b)&&c[b].id==a)return delete c[b],!0},s=function(a){var b=e.data[a];e.ts=(new Date).getTime();delete e.data[a];d(a);l(a,b,e.data[a],!1)},w=function(){var a=[],b;for(b in e.data)e.data.hasOwnProperty(b)&&a.push(b);return a},v=function(a,b){if("string"===
typeof a){var c=a[0];a=a.substring(1);switch(c){case "b":return"true"===a;case "n":return Number(a);case "o":try{return JSON.parse(a)}catch(d){console.log("env: parseValueFromStorage: "+d)}return b;default:return a}}else return b},y=function(a,b){return v(e.data[a],b)},A=function(a,b){var c=e.data[a],f=(typeof b)[0];switch(f){case "o":try{b=f+JSON.stringify(b)}catch(g){console.log(g);return}break;default:b=f+b}e.ts=(new Date).getTime();e.data[a]=b;d(a);l(a,c,e.data[a],!1)},B=function(a){for(var b in g.resources){var c=
g.resources[b];if(c.name==a)return c.resText}return null},C=function(a){for(var b in g.resources){var c=g.resources[b];if(c.name==a)return c.resURL}return null},E=function(a){console.log(a)},F=function(a){try{var b=safeDocument.createElement("style");b.textContent=a;(document.head||document.body||document.documentElement||document).appendChild(b);return b}catch(c){console.log("Error: env: adding style "+c)}},G=function(b,c,d,e,f){var g=null,h={method:"notification",id:TM_context_id},k=["timeout",
"text","image","title","highlight"],l=null;"object"===typeof b?l=b:"object"===typeof f&&(l=f);l?(k.forEach(function(a){h[a]=l[a]}),g=l.ondone,e=l.onclick,"function"===typeof c&&(g=c)):("number"===typeof f&&(h.timeout=f),h.image=d,h.title=c,h.text=b);h.text&&(h.image=h.image||a.script.icon64||a.script.icon,h.title=h.title||a.script.name);h.text||h.highlight?chromeEmu.extension.sendMessage(h,function(a){e&&a.clicked&&e();g&&g(!0===a.clicked)}):console.warn("TM_notification: neither a message text nor the hightlight options was given!")},
H=function(a,b,c){var d=typeof b,e="text",f="text/plain";"object"===d?(b.type&&(e=b.type),b.mimetype&&(f=b.mimetype)):"string"===d&&(e=b);chromeEmu.extension.sendMessage({method:"copyToClipboard",data:{content:a,type:e,mimetype:f},id:TM_context_id},function(a){c&&c()})},I=function(a){chromeEmu.extension.sendMessage({method:"getTab",id:TM_context_id,uid:g.uuid},function(b){a&&a(b.data)})},N=function(a,b){chromeEmu.extension.sendMessage({method:"setTab",id:TM_context_id,tab:a,uid:g.uuid},function(a){b&&
b()})},J=function(a){chromeEmu.extension.sendMessage({method:"getTabs",id:TM_context_id,uid:g.uuid},function(b){a&&a(b.data)})},m=function(a,b){var c=window,d="__u__"+Math.floor(19831206*Math.random()+1),e=d+"_";c[d]=a;c[e]=b;var f=Context.eval.call(window,'window["'+d+'"].apply(this, window["'+e+'"])');delete c[d];delete c[e];return f},r=[],x=null,u;for(u in g.grant)if(g.grant.hasOwnProperty(u)&&"none"===g.grant[u]){x=m;break}var z=g.namespace+"_"+!!x;Context.props[z]===b&&(Context.props[z]={sandboxes:{},
elements:{}},q.push(function(){Context.props[z]=null}));if(!x){r.push({name:"window",value:"context",overwrite:!0});var P={window:window};for(u in P)P.hasOwnProperty(u)&&function(){var a=u.replace(/^(.)/g,function(a){return a.toUpperCase()});r.push({name:"unsafe"+a,value:P[u]})}()}r.push({name:"CDATA",value:function(a){this.src=a;this.toXMLString=this.toString=function(){return this.src}}});r.push({name:"uneval",value:function(a){try{return"\\$1 = "+JSON.stringify(a)+";"}catch(b){console.log(b)}}});
r.push({name:"undefined",value:b});r.push({name:"define",value:b});r.push({name:"module",value:b});r.push({name:"console",value:console});x||(r.push({name:"cloneInto",value:function(a,b,c){return a}}),r.push({name:"exportFunction",value:function(a,c,d){d&&d.defineAs!==b&&(c[d.defineAs]=a);return a}}),r.push({name:"createObjectIn",value:function(a,c){var d={};c&&c.defineAs!==b&&(a[c.defineAs]=d);return d}}));m=[];m.push({name:"TM_addStyle",value:F});m.push({name:"TM_deleteValue",value:s});m.push({name:"TM_listValues",
value:w});m.push({name:"TM_getValue",value:y});m.push({name:"TM_log",value:E});m.push({name:"TM_registerMenuCommand",value:O});m.push({name:"TM_unregisterMenuCommand",value:R});m.push({name:"TM_openInTab",value:S});m.push({name:"TM_setValue",value:A});m.push({name:"TM_addValueChangeListener",value:p});m.push({name:"TM_removeValueChangeListener",value:n});m.push({name:"TM_xmlhttpRequest",value:U});m.push({name:"TM_download",value:T});m.push({name:"TM_setClipboard",value:H});m.push({name:"TM_getTab",
value:I});m.push({name:"TM_setTab",value:N});m.push({name:"TM_saveTab",value:N});m.push({name:"TM_getTabs",value:J});m.push({name:"TM_installScript",value:V});m.push({name:"TM_notification",value:G});m.push({name:"TM_getResourceText",value:B,scriptid:g.uuid});m.push({name:"TM_getResourceURL",value:C,scriptid:g.uuid});var K=[],L=new function(){this.GM_addStyle=function(a){return F(a)};this.GM_deleteValue=function(a){return s(a)};this.GM_listValues=function(){return w()};this.GM_getValue=function(a,
b){return y(a,b)};this.GM_addValueChangeListener=function(a,b){return p(a,b)};this.GM_removeValueChangeListener=function(a){return n(a)};this.GM_log=function(a){return E(a)};this.GM_registerMenuCommand=function(a,b,c){return O(a,b,c)};this.GM_unregisterMenuCommand=function(a){return R(a)};this.GM_openInTab=function(a,b){return S(a,b)};this.GM_setValue=function(a,b){return A(a,b)};this.GM_xmlhttpRequest=function(a){return U(a)};this.GM_download=function(){return T.apply(this,arguments)};this.GM_getResourceText=
function(a){return B(a)};this.GM_getResourceURL=function(a){return C(a)};this.GM_notification=function(a,b,c,d,e){return G(a,b,c,d,e)};this.GM_installScript=function(a,b){return V(a,b)};this.GM_getTab=function(a){return I(a)};this.GM_setTab=function(a,b){return N(a,b)};this.GM_saveTab=function(a){return N(a)};this.GM_getTabs=function(a){return J(a)};this.GM_setClipboard=function(a,b,c){return H(a,b,c)};Object.defineProperties(this,{GM_info:{get:function(){var b={observers:1,id:1,enabled:1,hash:1,
fileURL:1},c={script:{}},d;for(d in g)g.hasOwnProperty(d)&&!b[d]&&(c.script[d]=g[d]);b=g.options.updateURL||g.options.fileURL;c.script["run-at"]=g.options.override.run_at||g.options.run_at;c.script.excludes=g.options.override.orig_excludes;c.script.includes=g.options.override.orig_includes;c.script.matches=g.options.override.orig_includes;c.script.grant=g.grant;c.script.unwrap=!1;c.scriptMetaStr=a.header;c.scriptSource=a.code;c.scriptWillUpdate=!!b;c.scriptUpdateURL=b;c.version=a.version;c.scriptHandler=
"Tampermonkey";c.isIncognito=Context.isIncognito;c.downloadMode=Context.downloadMode;return c},enumerable:!0,configurable:!0}})},W=[];for(u in L)W.push({name:u,value:L[u]});K=K.concat(h(g.grant,m,function(a){return a.replace(/^TM_/,"GM_")}));K=K.concat(h(g.grant,W));r=r.concat(K);g.options.compat_prototypes&&(D&&console.log("env: option: add toSource"),Object.prototype.toSource||Object.defineProperties(Object.prototype,{toSource:{value:function(){var a=M(this);if("String"===a)return"(String('"+this.replace(/\'/g,
"\\'")+"'))";if("Number"===a)return"(Number('"+Number(this)+"'))";if("Array"===a){for(var b="(new Array(",c=0;c<this.length;c++)a=M(this[c]),b="Null"===a?b+"null":"Undefined"===a?b+"undefined":b+this[c].toSource(),c+1<this.length&&(b+=",");return b+"))"}return"JSON.parse(unescape('"+safeWindow.escape(JSON.stringify(this))+"'))"},enumerable:!1,writable:!0,configurable:!0}}),D&&console.log("env: option: add some array generics"),"indexOf lastIndexOf filter forEach every map some slice".split(" ").forEach(function(a){if("function"!==
typeof Array[a]){var b={};b[a]={value:function(b){return Array.prototype[a].apply(b,Array.prototype.slice.call(arguments,1))},enumerable:!1,writable:!0,configurable:!0};Object.defineProperties(Array,b)}}));Context.props[z].sandboxes[a.script.uuid]=x?Q():Y();Context.props[z].elements[a.script.uuid]=r;D&&console.debug("env: execute script "+g.name+" @ the "+(x?"un":"")+"safe context now!");Z(g,a.code,a.requires,Context.props[z],x);q.push(function(){f.postMessage({method:"removeStorageListener",uuid:k,
storage:e,id:TM_context_id});try{f.disconnect(),f=null}catch(b){}a=c=null})},L=function(a){var b=function(){aa(a)};"document-start"==a.script.options.run_at?(D&&console.debug("env: run '"+a.script.name+"' ASAP -> document-start"),b()):"document-body"==a.script.options.run_at?(D&&console.debug("env: schedule '"+a.script.name+"' for document-body"),H(b)):"context-menu"==a.script.options.run_at?(D&&console.debug("env: run '"+a.script.name+"' ASAP -> context-menu"),b()):"document-end"==a.script.options.run_at?
(D&&console.debug("env: schedule '"+a.script.name+"' for document-end"),I(b)):(D&&console.debug("env: schedule '"+a.script.name+"' for document-idle"),$(b))};chromeEmu.extension.onMessage.addListener(function(a,b,c){a.id&&a.id!=TM_context_id?console.warn("env: Not for me! "+TM_context_id+"!="+a.id):(b=window.self==window.top,"executeScript"==a.method?a.url&&0!==safeWindow.location.href.search(a.url)?D&&console.log("exec: URL doesn't match",safeWindow.location,a):a.topframe&&!b?D&&console.log("exec: topframe doesn't match",
window.self,a):L(a):"onLoad"==a.method?(document.readyState&&"complete"!==document.readyState||(Context.domContentLoaded=!0,v()),c({})):b&&("loadUrl"==a.method?(window.location=a.url,c({})):"reload"==a.method?(window.location.reload(),c({})):"confirm"==a.method?safeWindow.setTimeout(function(){var b=safeWindow.confirm(a.msg);c({confirm:b})},100):"showMsg"==a.method?safeWindow.setTimeout(function(){safeWindow.setTimeout(function(){safeWindow.alert(a.msg)},1);c({})},100):"setForeignAttr"==a.method?
(window[a.attr]=a.value,c({})):console.log("env: unknown method "+a.method)))});(function(a){a.__evaluate||(a.__evaluate=a.evaluate,a.evaluate=function(a,c,e,k,g){c||(c=this);var f;if("undefined"!=typeof XPathResult){var d=null;try{f=this.__evaluate(a,c,e,k,g)}catch(h){d=h}var l=!1;try{l|=!!f.snapshotLength}catch(p){}try{l|=!!f.singleNodeValue}catch(n){}if(!l&&"."!=a.charAt(0)&&!A(c)){a=("/"==a.charAt(0)?".":"./")+a;try{f=this.__evaluate(a,c,e,k,g)}catch(q){}}if(!l&&d)throw d;}else f=c.selectNodes(a);
return f},q.push(function(){a.evaluate=a.__evaluate}))})(window.HTMLDocument.prototype);B(window.HTMLDocument.prototype,2);safeDocument.addEventListener("DOMContentLoaded",C,!1);safeDocument.addEventListener("load",F,!1);safeDocument.addEventListener("DOMNodeInserted",E,!1);safeWindow.addEventListener("unload",G,!1);D&&console.debug("env: initialized (content, id:"+TM_context_id+", "+window.location.origin+window.location.pathname+") ");Context.scripts.forEach(L)});