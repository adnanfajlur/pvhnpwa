import {
  p,
  div,
  span,
  a,
} from './buatElement.js'

const getEl = (param) => document.getElementById(param)
const elContent = getEl('content')
const elPagination = getEl('pagination')
const elLeftArrow = getEl('leftArrow')
const halaman = () => window.location.pathname.slice(1)
const page = () => Number(new URL(window.location.href).searchParams.get('page'))

function renderList(data) {
  deleteDom(content)
  data.length > 0 ? elContent.appendChild(div(
    data.map(n => (
      div({ className: 'divWrap' },
        a({
          className: 'typoTitle',
          target: '_blank',
          rel: `noopener external`,
          title: `${n.title}`,
          href: `${n.url}`,
        }, n.title),
        p(n.domain),
        div({ className: 'details'},
          span(`${n.points || 0} ★`),
          span(` by ${n.user}`),
          span(` ${n.time_ago}  `),
          a({ className: 'commentCount' }, `${n.comments_count} comments`),
        )
      )
    ))
  ))
  : renderNotif('Data Not Found')
}

function rePage() {
  document.getElementsByClassName('typoPagination')[0].innerHTML = `${page()}`
  const editArrow = (param) => getEl('leftArrow').className = param
  if (page() >= 2) {
    editArrow('paginationArrow')
  } else {
    editArrow('typoInActive')
  }
}

function renderPagination() {
  elPagination.appendChild(div({ className: 'paginationChild' },
    span({
      id: 'leftArrow',
      className: page() >= 2 ? 'paginationArrow' : 'typoInActive',
      onclick: () => {
        if (page() >= 2) {
          window.history.pushState({}, null, `/${halaman()}?page=${page() - 1}`)
          rePage()
          fetchData()
        }
      },
    }, `< Prev`),
    span({ className: 'typoPagination'}, `${page()}`),
    span({
      className: 'paginationArrow',
      onclick: () => {
        window.history.pushState({}, null, `/${halaman()}?page=${page() + 1}`)
        rePage()
        fetchData()
      },
    }, `Next >`)
  ))
}

function renderNotif(param) {
  deleteDom(content)
  elContent.appendChild(div({ id: 'divNotif' },
    p(param)
  ))
}

function deleteDom(param) {
  while (param.firstChild) {
    param.removeChild(param.firstChild)
  }
}

function fetchData() {
  deleteDom(content)
  const pages = halaman();
  const search = new URL(window.location.href).searchParams.get('page');
  const page = pages === 'news' ? 'newest' : pages;
  renderNotif('Loading...');
  fetchAsync(page, search)
    .then(data => renderList(data))
    .catch(err => renderNotif(`ERROR!!! ${err.message}`))
}

function changeUrl(param) {
  window.history.pushState({}, null, param);
  const active = [].slice.call(document.getElementsByClassName('active'))
  active.map(n => n.className = '')
  rePage();
  fetchData();
  getEl(`link${param.slice(1, param.indexOf('?'))}`).className = 'active'
}

async function fetchAsync(page, search) {
  let response = await fetch(`https://hnpwa.com/api/v0/${page === '' ? 'news' : page}.json?page=${search}`, {
    header: {
      'Access-Control-Allow-Origin': '*'
    }
  });
  let data = await response.json();
  deleteDom(content)
  return data;
}

fetchData()
renderPagination()
getEl(`link${halaman()}`).className = 'active'

window.changeUrl = changeUrl