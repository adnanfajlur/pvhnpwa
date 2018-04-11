'use strict';

function firstLoad() {
  var page = window.location.pathname;
  var search = new URL(window.location.href).searchParams.get('page');
  if (page === '/' && search === null) {
    window.history.pushState({}, null, '/?page=1');
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('../sw.js');
  });
}

firstLoad();