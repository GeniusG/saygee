/*! device.js 0.2.0 */

(function () {
    var a, b, c, d, e, f, g, h, i, j;
    b = window.device, a = {}, window.device = a, d = window.document.documentElement, j = window.navigator.userAgent.toLowerCase(), a.ios = function () {
        return a.iphone() || a.ipod() || a.ipad()
    }, a.iphone = function () {
        return e("iphone")
    }, a.ipod = function () {
        return e("ipod")
    }, a.ipad = function () {
        return e("ipad")
    }, a.android = function () {
        return e("android")
    }, a.androidPhone = function () {
        return a.android() && e("mobile")
    }, a.androidTablet = function () {
        return a.android() && !e("mobile")
    }, a.blackberry = function () {
        return e("blackberry") || e("bb10") || e("rim")
    }, a.blackberryPhone = function () {
        return a.blackberry() && !e("tablet")
    }, a.blackberryTablet = function () {
        return a.blackberry() && e("tablet")
    }, a.windows = function () {
        return e("windows")
    }, a.windowsPhone = function () {
        return a.windows() && e("phone")
    }, a.windowsTablet = function () {
        return a.windows() && e("touch") && !a.windowsPhone()
    }, a.fxos = function () {
        return (e("(mobile;") || e("(tablet;")) && e("; rv:")
    }, a.fxosPhone = function () {
        return a.fxos() && e("mobile")
    }, a.fxosTablet = function () {
        return a.fxos() && e("tablet")
    }, a.meego = function () {
        return e("meego")
    }, a.cordova = function () {
        return window.cordova && "file:" === location.protocol
    }, a.nodeWebkit = function () {
        return "object" == typeof window.process
    }, a.mobile = function () {
        return a.androidPhone() || a.iphone() || a.ipod() || a.windowsPhone() || a.blackberryPhone() || a.fxosPhone() || a.meego()
    }, a.tablet = function () {
        return a.ipad() || a.androidTablet() || a.blackberryTablet() || a.windowsTablet() || a.fxosTablet()
    }, a.desktop = function () {
        return !a.tablet() && !a.mobile()
    }, a.portrait = function () {
        return window.innerHeight / window.innerWidth > 1
    }, a.landscape = function () {
        return window.innerHeight / window.innerWidth < 1
    }, a.noConflict = function () {
        return window.device = b, this
    }, e = function (a) {
        return -1 !== j.indexOf(a)
    }, g = function (a) {
        var b;
        return b = new RegExp(a, "i"), d.className.match(b)
    }, c = function (a) {
        g(a) || (d.className += " " + a)
    }, i = function (a) {
        g(a) && (d.className = d.className.replace(" " + a, ""))
    }, a.ios() ? a.ipad() ? c("ios ipad tablet") : a.iphone() ? c("ios iphone mobile") : a.ipod() && c("ios ipod mobile") : c(a.android() ? a.androidTablet() ? "android tablet" : "android mobile" : a.blackberry() ? a.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : a.windows() ? a.windowsTablet() ? "windows tablet" : a.windowsPhone() ? "windows mobile" : "desktop" : a.fxos() ? a.fxosTablet() ? "fxos tablet" : "fxos mobile" : a.meego() ? "meego mobile" : a.nodeWebkit() ? "node-webkit" : "desktop"), a.cordova() && c("cordova"), f = function () {
        a.landscape() ? (i("portrait"), c("landscape")) : (i("landscape"), c("portrait"))
    }, h = window.hasOwnProperty("onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(h, f, !1) : window.attachEvent ? window.attachEvent(h, f) : window[h] = f, f(), "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return a
    }) : "undefined" != typeof module && module.exports ? module.exports = a : window.device = a
}).call(this);
