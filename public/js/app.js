const content = document.getElementById('content')

// change url
function changeUrl(param) {
  deleteDom()
  window.history.pushState({}, null, param)
  const page = window.location.pathname.slice(1);
  const search = new URL(window.location.href).searchParams.get('page');
  loadingDom(true);
  fetchAsync(page, search)
    .then(data => window.renderList(data))
    .catch(err => console.log(err))
}

function loadingDom(param) {
  if (param) {
    window.renderLoading()
  } else {
    while (content.firstChild) {
      content.removeChild(content.firstChild)
    }
  }
}

function deleteDom() {
  while (content.firstChild) {
    content.removeChild(content.firstChild)
  }
}

// get data function
async function fetchAsync(page, search) {
  loadingDom(false);
  let response = await fetch(`https://hnpwa.com/api/v0/${page === '' ? 'top' : page}.json?page=${search}`);
  let data = await response.json();
  return data;
}