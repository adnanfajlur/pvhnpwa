"use strict";

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
self.__precacheManifest = [{
  "url": "index.html",
  "revision": "bb1d94239bc32bfb4a14d8d424416010"
}, {
  "url": "js/app.js",
  "revision": "603db79e42b22b80bdf7c865e9048366"
}, {
  "url": "js/buatElement.js",
  "revision": "4f9173a330ced77becfeefa082efc31b"
}, {
  "url": "js/renderDom.js",
  "revision": "292f35259000df3f40cf2cb387469658"
}, {
  "url": "/",
  "revision": "2c6c10f4bbf40cfaf52c4faa3f8cd9ac"
}].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/");