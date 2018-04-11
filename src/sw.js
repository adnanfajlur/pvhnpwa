/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "img/icon/coffe-32.png",
    "revision": "3e0951a9fdde86a8172867a189eb404c"
  },
  {
    "url": "img/icon/coffe-512.png",
    "revision": "4cd3b5a1f286b552d4c219d705bd749d"
  },
  {
    "url": "img/icon/favicon.ico",
    "revision": "811544eeac820d3eca1f54448e79fee9"
  },
  {
    "url": "index.html",
    "revision": "bb1d94239bc32bfb4a14d8d424416010"
  },
  {
    "url": "js/app.js",
    "revision": "603db79e42b22b80bdf7c865e9048366"
  },
  {
    "url": "js/buatElement.js",
    "revision": "4f9173a330ced77becfeefa082efc31b"
  },
  {
    "url": "js/renderDom.js",
    "revision": "292f35259000df3f40cf2cb387469658"
  },
  {
    "url": "other/manifest.json",
    "revision": "c95966b16d7f270c22908636d6fc3268"
  },
  {
    "url": "/",
    "revision": "2c6c10f4bbf40cfaf52c4faa3f8cd9ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/");
