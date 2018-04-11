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
    "url": "index.html",
    "revision": "bb1d94239bc32bfb4a14d8d424416010"
  },
  {
    "url": "js/app.js",
    "revision": "b8d3c0f4a67bec42f1c8128403f8f78e"
  },
  {
    "url": "js/buatElement.js",
    "revision": "9b1978e5014c142c6432d7b6e32433a9"
  },
  {
    "url": "js/renderDom.js",
    "revision": "1e089492eb74bdedc78e7569d724db00"
  },
  {
    "url": "/",
    "revision": "2c6c10f4bbf40cfaf52c4faa3f8cd9ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/");
