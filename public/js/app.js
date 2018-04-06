// change url

let data = {
  loading: false,
}

function changeUrl(param) {
  deleteDom()
  console.log(data.loading)
  window.history.pushState({}, null, param)
  const page = window.location.pathname.slice(1);
  const search = new URL(window.location.href).searchParams.get('page');
  fetchAsync(page, search)
    .then(data => window.renderList(data))
    .catch(err => console.log(err))
}

function deleteDom() {
  const content = document.getElementById('content')
  while (content.firstChild) {
    content.removeChild(content.firstChild)
  }
}

// get data function
async function fetchAsync(page, search) {
  let response = await fetch(`https://hnpwa.com/api/v0/${page === '' ? 'top' : page}.json?page=${search}`);
  let data = await response.json();
  return data;
}