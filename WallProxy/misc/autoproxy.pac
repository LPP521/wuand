// Update:2015.6.12.1415
function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
function FindProxyForURL(url, host) {
// youku
if (
regExpMatch(url, "^https?:\/\/.*?(?:youku|qiyi|iqiyi|letv|sohu|ku6|ku6cdn|pps|bilibili|acg|loli|hdslb|acgvideo)\.(?:com|tv|cn|net)\/crossdomain\.xml$")
) return "PROXY yk.pp.navi.youku.com:80";
// gae
if (
// google
dnsDomainIs(host, "google.com") ||
dnsDomainIs(host, "google.com.hk") ||
dnsDomainIs(host, "google.co.id") ||
dnsDomainIs(host, "goo.gl") ||
dnsDomainIs(host, "gstatic.com") ||
dnsDomainIs(host, "googleusercontent.com") ||
dnsDomainIs(host, "ggpht.com") ||
dnsDomainIs(host, "appspot.com") ||
dnsDomainIs(host, "googleapis.com") ||
dnsDomainIs(host, "googlecode.com") ||
dnsDomainIs(host, "blogger.com") ||
dnsDomainIs(host, "blogspot.com") ||
dnsDomainIs(host, "blogblog.com") ||
dnsDomainIs(host, "android.com") ||
dnsDomainIs(host, "google-analytics.com") ||
dnsDomainIs(host, "googlelabs.com") ||
dnsDomainIs(host, "panoramio.com") ||
dnsDomainIs(host, "googlesource.com") ||
host == "auth.keyhole.com" ||
host == "domains.googlesyndication.com" ||
dnsDomainIs(host, "feedburner.com") ||
dnsDomainIs(host, "googlemail.com") ||
dnsDomainIs(host, "android.com") ||
dnsDomainIs(host, "googleadservices.com") ||
dnsDomainIs(host, "chromium.org") ||
dnsDomainIs(host, "chrome.com") ||
dnsDomainIs(host, "g.co") ||
dnsDomainIs(host, "gmail.com") ||
dnsDomainIs(host, "youtube.com") ||
dnsDomainIs(host, "ytimg.com") ||
dnsDomainIs(host, "youtube-nocookie.com") ||
dnsDomainIs(host, "googlevideo.com") ||
dnsDomainIs(host, "doubleclick.net") ||
host == "youtu.be" ||
dnsDomainIs(host, "googledrive.com") ||
dnsDomainIs(host, "golang.org") ||
// facebook
dnsDomainIs(host, "facebook.com") ||
dnsDomainIs(host, "fbcdn.net") ||
dnsDomainIs(host, "facebook.net") ||
dnsDomainIs(host, "fb.me") ||
dnsDomainIs(host, "akamaihd.net") ||
dnsDomainIs(host, "instagram.com") ||
// twitter
dnsDomainIs(host, "twitter.com") ||
dnsDomainIs(host, "t.co") ||
dnsDomainIs(host, "twimg.com") ||
dnsDomainIs(host, "tweetdeck.com") ||
host == "bitly.com" ||
host == "api.mobilepicture.com" ||
dnsDomainIs(host, "tinypic.com") ||
dnsDomainIs(host, "twitpic.com") ||
dnsDomainIs(host, "yfrog.com") ||
// wikipedia
dnsDomainIs(host, "wikipedia.org") ||
dnsDomainIs(host, "wikimedia.org") ||
dnsDomainIs(host, "wikibooks.org") ||
dnsDomainIs(host, "wikinews.org") ||
dnsDomainIs(host, "wikiquote.org") ||
dnsDomainIs(host, "wikisource.org") ||
dnsDomainIs(host, "wiktionary.org") ||
dnsDomainIs(host, "wikimediafoundation.org") ||
dnsDomainIs(host, "mediawiki.org") ||
// yahoo
dnsDomainIs(host, "yahoo.com") ||
shExpMatch(url, "*://*.yimg.com/*") ||
dnsDomainIs(host, "flickr.com") ||
dnsDomainIs(host, "staticflickr.com") ||
dnsDomainIs(host, "yahooapis.com") ||
// github
dnsDomainIs(host, "github.com") ||
dnsDomainIs(host, "fastly.net") ||
dnsDomainIs(host, "githubapp.com") ||
dnsDomainIs(host, "githubusercontent.com") ||
// other
dnsDomainIs(host, "foursquare.com") ||
dnsDomainIs(host, "katomodels.com") || 
dnsDomainIs(host, "sourceforge.net") ||
dnsDomainIs(host, "sf.net") ||
dnsDomainIs(host, "bit.ly") ||
dnsDomainIs(host, "amazonaws.com") ||
dnsDomainIs(host, "tigerdoor.net") ||
dnsDomainIs(host, "thatguywiththeglasses.com") ||
dnsDomainIs(host, "plurk.com") ||
dnsDomainIs(host, "iqlinkus.com") ||
dnsDomainIs(host, "pageflakes.com") ||
dnsDomainIs(host, "4chan.org") ||
dnsDomainIs(host, "pt80.net") ||
dnsDomainIs(host, "inoreader.com") ||
dnsDomainIs(host, "feedly.com") ||
dnsDomainIs(host, "dailymotion.com") ||
dnsDomainIs(host, "dmcdn.net") ||
dnsDomainIs(host, "fc2.com") ||
dnsDomainIs(host, "line.me") ||
dnsDomainIs(host, "klip.me") ||
dnsDomainIs(host, "simplecd.me") ||
dnsDomainIs(host, "html5rocks.com") ||
dnsDomainIs(host, "edgecastcdn.net") ||
dnsDomainIs(host, "drupal.org") ||
dnsDomainIs(host, "wordpress.com") ||
dnsDomainIs(host, "wp.com") ||
dnsDomainIs(host, "gravatar.com") ||
dnsDomainIs(host, "vimeo.com") ||
dnsDomainIs(host, "vimeocdn.com") ||
dnsDomainIs(host, "edgesuite.net") ||
dnsDomainIs(host, "deviantart.com") ||
dnsDomainIs(host, "deviantart.net") ||
dnsDomainIs(host, "tumblr.com") ||
dnsDomainIs(host, "btdigg.org") ||
dnsDomainIs(host, "wuand.com") ||
dnsDomainIs(host, "pinimg.com") ||
dnsDomainIs(host, "kongregate.com") ||
dnsDomainIs(host, "thehobbit.com") ||
dnsDomainIs(host, "bridgebase.com") ||
dnsDomainIs(host, "pinterest.com") ||
dnsDomainIs(host, "abercrombie.com") ||
dnsDomainIs(host, "davetabs.com") ||
dnsDomainIs(host, "tampermonkey.net") ||
dnsDomainIs(host, "twitch.tv") ||
dnsDomainIs(host, "ttvnw.net") ||
dnsDomainIs(host, "shutterstock.com") ||
dnsDomainIs(host, "soundcloud.com") ||
dnsDomainIs(host, "habbo.com") ||
dnsDomainIs(host, "antsmarching.org") ||
dnsDomainIs(host, "v2ex.com") ||
dnsDomainIs(host, "ted.com") ||
dnsDomainIs(host, "tedcdn.com") ||
dnsDomainIs(host, "pastebin.com") ||
dnsDomainIs(host, "ip.cn") ||
dnsDomainIs(host, "netcraft.com") ||
dnsDomainIs(host, "top500.org") ||
dnsDomainIs(host, "onlinejudge.org") ||
dnsDomainIs(host, "ebags.com") ||
// news
dnsDomainIs(host, "nytimes.com") ||
dnsDomainIs(host, "nyt.com") ||
dnsDomainIs(host, "nanzao.com") ||
dnsDomainIs(host, "tmagazine.com") ||
dnsDomainIs(host, "nytimg.com") ||
dnsDomainIs(host, "wsj.com") ||
dnsDomainIs(host, "wsj.net") ||
dnsDomainIs(host, "voanews.com") ||
// netdisk
dnsDomainIs(host, "dropbox.com") ||
dnsDomainIs(host, "dropboxusercontent.com") ||
dnsDomainIs(host, "mediafire.com") ||
dnsDomainIs(host, "multiupload.com") ||
dnsDomainIs(host, "cloudfront.net") ||
dnsDomainIs(host, "freakshare.com") ||
dnsDomainIs(host, "bitshare.com") ||
dnsDomainIs(host, "4shared.com") ||
shExpMatch(url, "*://onedrive.live.com/*") ||
dnsDomainIs(host, "getuploader.com") ||
dnsDomainIs(host, "torrentkitty.org") ||
// jp
shExpMatch(url, "*://*.jp/*") ||
dnsDomainIs(host, "dlsite.com") ||
dnsDomainIs(host, "pixiv.net") ||
dnsDomainIs(host, "dmm.com") ||
dnsDomainIs(host, "akabeesoft2.com") ||
dnsDomainIs(host, "akabeesoft3.com") ||
dnsDomainIs(host, "akatsukiworks.com") ||
dnsDomainIs(host, "alicesoft.com") ||
dnsDomainIs(host, "cosmiccute.com") ||
dnsDomainIs(host, "hibiki-site.com") ||
dnsDomainIs(host, "minori.ph") ||
dnsDomainIs(host, "tenco.cc") ||
dnsDomainIs(host, "wheel-soft.com") ||
dnsDomainIs(host, "getchu.com") ||
dnsDomainIs(host, "2ch.net") ||
shExpMatch(url, "http://203.104.209.*/*") ||
// hk
dnsDomainIs(host, "discuss.com.hk") ||
// tw
shExpMatch(url, "*://*.tw/*") ||
dnsDomainIs(host, "xuite.net") ||
dnsDomainIs(host, "twbbs.org") ||
dnsDomainIs(host, "ptt.cc") ||
dnsDomainIs(host, "momoho45.com") ||
dnsDomainIs(host, "hotupub.com") ||
dnsDomainIs(host, "eslite.com") ||
dnsDomainIs(host, "mobile01.com") ||
dnsDomainIs(host, "pixnet.net") ||
dnsDomainIs(host, "pixnet.cc") ||
// picture
dnsDomainIs(host, "sadpanda.us") ||
dnsDomainIs(host, "imgtiger.com") ||
dnsDomainIs(host, "imgchili.com") ||
dnsDomainIs(host, "uploadhouse.com") ||
dnsDomainIs(host, "imgur.com") ||
dnsDomainIs(host, "photobucket.com") ||
dnsDomainIs(host, "imagestorming.com") ||
dnsDomainIs(host, "xpics.us") ||
dnsDomainIs(host, "uyl.me") ||
dnsDomainIs(host, "snapgram.co") ||
dnsDomainIs(host, "aojiao.org") ||
dnsDomainIs(host, "imm.io") ||
dnsDomainIs(host, "snapgram.co") ||
dnsDomainIs(host, "iceimg.com") ||
dnsDomainIs(host, "uploadfr.com") ||
dnsDomainIs(host, "picrar.com") ||
// adult
dnsDomainIs(host, "javbus.com") ||   
dnsDomainIs(host, "avsow.com") ||   
dnsDomainIs(host, "beeg.com") || 
dnsDomainIs(host, "piring.com") ||
dnsDomainIs(host, "t66y.com") ||
dnsDomainIs(host, "sexinsex.net") ||
dnsDomainIs(host, "sis001.com") ||
dnsDomainIs(host, "mimip2p.net") ||
dnsDomainIs(host, "touch99.com") ||
dnsDomainIs(host, "mycould.com") ||
dnsDomainIs(host, "6park.com") ||
dnsDomainIs(host, "hd1080.org") ||
host == "69.46.75.46" ||
host == "205.164.48.248" ||
dnsDomainIs(host, "jkforum.net") ||
dnsDomainIs(host, "sex8.cc") ||
dnsDomainIs(host, "crazys.cc") ||
dnsDomainIs(host, "baixing.me") || 
dnsDomainIs(host, "avsp2p.com") ||
dnsDomainIs(host, "tvboxnow.com") ||
dnsDomainIs(host, "av9.cc") ||
dnsDomainIs(host, "ktzhk.com") ||
dnsDomainIs(host, "18p2p.com") ||
dnsDomainIs(host, "s-dragon.org") ||
dnsDomainIs(host, "aisex.com") ||
host == "67.220.90.13" ||
host == "67.220.91.20" ||
dnsDomainIs(host, "lyfhk.net") ||
dnsDomainIs(host, "nuvid.com") ||
dnsDomainIs(host, "c-queen.net") ||
dnsDomainIs(host, "xtube.com") ||
dnsDomainIs(host, "yymaya.com") ||
dnsDomainIs(host, "avdvd.net") ||
dnsDomainIs(host, "ck101.com") ||
dnsDomainIs(host, "pornhub.com") ||
dnsDomainIs(host, "youporn.com") ||
dnsDomainIs(host, "redtube.com") ||
dnsDomainIs(host, "e-hentai.org") ||
dnsDomainIs(host, "cool18.com") ||
host == "38.103.161.155" 
) return "PROXY 127.0.0.1:8087";
return "DIRECT";
}

