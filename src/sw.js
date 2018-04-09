
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

console.log('this is my custom service worker');

workbox.precaching.precacheAndRoute([
  {
    "url": "img/icon/coffe-32.png",
    "revision": "3e0951a9fdde86a8172867a189eb404c"
  },
  {
    "url": "img/icon/favicon.ico",
    "revision": "811544eeac820d3eca1f54448e79fee9"
  },
  {
    "url": "index.html",
    "revision": "1d2d4ce99fd817d0abd2db3e569a702e"
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
    "revision": "8bc43853925caacc59f7f3fab634fee4"
  }
]);