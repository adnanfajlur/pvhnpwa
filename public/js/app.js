function firstLoad() {
  const page = window.location.pathname;
  const search = new URL(window.location.href).searchParams.get('page');
  if (page === '/' && search === null) {
    window.history.pushState({}, null, '/?page=1');
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/js/sw.js');
  });
}

firstLoad()