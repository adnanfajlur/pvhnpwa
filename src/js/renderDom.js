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
  deleteDom(elContent)
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
          a({
            className: 'commentCount',
            onclick: () => changeUrl(`/item?id=${n.id}`)
          }, `${n.comments_count} comments`),
        )
      )
    ))
  ))
  : renderNotif('Data Not Found')
}

function renderComment(data) {
  deleteDom(elContent)
  const parser = (param) => {
    const DOM = new DOMParser().parseFromString(param, 'text/html')
    return DOM.body
  }
  const onComment = (param) => {
    const render = div(
      span({ style: {fontWeight: 'bold', marginRight: '10px'} }, `${param.user}`),
      span(`${param.time_ago}`),
      div({ id: 'comments-content' }, parser(param.content)),
      onComments(param.comments)
    )
    return render
  }

  const onComments = (param) => {
    const render = div(
      param.map(n => div(
        { id: 'comments-list' },
        onComment(n)
      ))
    )
    return render
  }

  elContent.appendChild(div(
    a({
      className: 'typoTitle',
      target: '_blank',
      rel: `noopener external`,
      title: `${data.title}`,
      href: `${data.url}`,
    }, data.title),
    div({ className: 'details'},
      span({ style: {fontWeight: 'bold'} },` by ${data.user}`),
      span(` ${data.time_ago}`),
      span({ style: {marginLeft: '15px'} },` ${data.points || 0} ★`),
    ),
    div({style: {
      margin: '20px 0',
      padding: '16px',
      background: '#f9f9f9',
    }}, `No Content`),
    div({ id: `comment`},
      div({ id: `comments-count`}, `${data.comments_count || 0} Comments`),
      div().innerHTML = onComments(data.comments)
    )
  ))
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
  deleteDom(elContent)
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
  deleteDom(elContent)
  const pages = halaman();
  const search = new URL(window.location.href).searchParams.get(`${pages === 'item' ? 'id' : 'page'}`);
  const page = pages === 'news' ? 'newest' : pages;
  renderNotif('Loading...');
  fetchAsync(page, search)
    .then(data => page === 'item' ? renderComment(data) : renderList(data))
    .catch(err => renderNotif(`ERROR!!! ${err.message}`))
}

function changeUrl(param) {
  window.history.pushState({}, null, param);
  const active = [].slice.call(document.getElementsByClassName('active'))
  active.map(n => n.className = '')
  rePage();
  fetchData();
  if (param.slice(1, param.indexOf('?')) !== 'item') {
    getEl(`link${param.slice(1, param.indexOf('?'))}`).className = 'active';
  }
}

async function fetchAsync(page, search) {
  renderOffline()
  const base = `https://hnpwa.com/api/v0`;
  let url = ``;
  if (page === 'item') {
    elPagination.style.display = 'none'
    url = `${base}/item/${search}.json`
  } else {
    url = `${base}/${page === '' ? 'news' : page}.json?page=${search}`
    elPagination.style.display = 'flex'
    getEl(`link${halaman()}`).className = 'active'
  }
  let response = await fetch(url, {
    header: {
      'Access-Control-Allow-Origin': '*'
    }
  });
  let data = await response.json();
  deleteDom(elContent)
  return data;
}

function renderOffline() {
  if (!window.navigator.onLine) {
    getEl('main').appendChild(div({
      style: {
        position: 'fixed',
        bottom: '0',
        width: '100vw',
        textAlign: 'center',
        padding: '5px 0',
        color: '#fff',
        background: '#c0392b'
      },
      id: 'divOffline'
    },
      span(`No Connections Are Available`)
    ))
  } else if (getEl('divOffline') !== null) {
    getEl('main').removeChild(getEl('divOffline'))
  }
}

fetchData()
renderPagination()

window.changeUrl = changeUrl