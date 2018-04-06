const content = document.getElementById('content')

// change url
function changeUrl(param) {
  deleteDom()
  window.history.pushState({}, null, param);
  const page = window.location.pathname.slice(1);
  const search = new URL(window.location.href).searchParams.get('page');
  loadingDom(true);
  fetchAsync(page, search)
    .then(data => window.renderList(data))
    .catch(err => isError())
}

function isError() {
  deleteDom()
  window.renderLoading('ERROR!!!')
}

function loadingDom(param) {
  if (param) {
    window.renderLoading('Loading...')
  } else {
    deleteDom()
  }
}

function deleteDom() {
  while (content.firstChild) {
    content.removeChild(content.firstChild)
  }
}

// get data function
async function fetchAsync(page, search) {
  let response = await fetch(`https://hnpwa.com/api/v0/${page === '' ? 'top' : page}.json?page=${search}`);
  let data = await response.json();
  loadingDom(false)
  return data;
}