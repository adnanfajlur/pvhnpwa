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
    "url": "img/android-chrome-192x192.png",
    "revision": "df6540dd80e37ed3b52bb77684e0a586"
  },
  {
    "url": "img/android-chrome-512x512.png",
    "revision": "16da4c86dbd11c9bd5ed41cf7fda8a84"
  },
  {
    "url": "img/apple-touch-icon.png",
    "revision": "23012b5d7f0c0ea06ce0e1b8d46ecba5"
  },
  {
    "url": "img/browserconfig.xml",
    "revision": "a493ba0aa0b8ec8068d786d7248bb92c"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "7011658cb3bca0668022f18af2cf1dee"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "dc86c1763dd8666dec429eb95f95fcd6"
  },
  {
    "url": "img/favicon.ico",
    "revision": "f3f70846cad486fc894f0d6145364266"
  },
  {
    "url": "img/mstile-150x150.png",
    "revision": "300683ed9f564822f6fd16b194c213ae"
  },
  {
    "url": "img/safari-pinned-tab.svg",
    "revision": "b3aae41d39e7e23421e5eac20f47d057"
  },
  {
    "url": "img/site.webmanifest",
    "revision": "b9aa277fcfc34c31db6c7a7ea3469b8c"
  },
  {
    "url": "index.html",
    "revision": "311775668ca02d6b68afad51ae667219"
  },
  {
    "url": "js/app.js",
    "revision": "f3bdf7302ea46c95da718be718445d54"
  },
  {
    "url": "js/buatElement.js",
    "revision": "4f9173a330ced77becfeefa082efc31b"
  },
  {
    "url": "js/renderDom.js",
    "revision": "8bc43853925caacc59f7f3fab634fee4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
