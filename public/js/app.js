function firstLoad() {
  const page = window.location.pathname;
  const search = new URL(window.location.href).searchParams.get('page');
  if (page === '/' && search === null) {
    window.history.pushState({}, null, '/?page=1');
  }
}

firstLoad()