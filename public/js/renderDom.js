'use strict';

var fetchAsync = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page, search) {
    var base, url, response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            renderOffline();
            base = 'https://hnpwa.com/api/v0';
            url = '';

            if (page === 'item') {
              elPagination.style.display = 'none';
              url = base + '/item/' + search + '.json';
            } else {
              url = base + '/' + (page === '' ? 'news' : page) + '.json?page=' + search;
              elPagination.style.display = 'flex';
              getEl('link' + halaman()).className = 'active';
            }
            _context.next = 6;
            return fetch(url, {
              header: {
                'Access-Control-Allow-Origin': '*'
              }
            });

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            data = _context.sent;

            deleteDom(elContent);
            return _context.abrupt('return', data);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchAsync(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _buatElement = require('./buatElement.js');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getEl = function getEl(param) {
  return document.getElementById(param);
};
var elContent = getEl('content');
var elPagination = getEl('pagination');
var elLeftArrow = getEl('leftArrow');
var halaman = function halaman() {
  return window.location.pathname.slice(1);
};
var page = function page() {
  return Number(new URL(window.location.href).searchParams.get('page'));
};

function renderList(data) {
  deleteDom(elContent);
  data.length > 0 ? elContent.appendChild((0, _buatElement.div)(data.map(function (n) {
    return (0, _buatElement.div)({ className: 'divWrap' }, (0, _buatElement.a)({
      className: 'typoTitle',
      target: '_blank',
      rel: 'noopener external',
      title: '' + n.title,
      href: '' + n.url
    }, n.title), (0, _buatElement.p)(n.domain), (0, _buatElement.div)({ className: 'details' }, (0, _buatElement.span)((n.points || 0) + ' \u2605'), (0, _buatElement.span)(' by ' + n.user), (0, _buatElement.span)(' ' + n.time_ago + '  '), (0, _buatElement.a)({
      className: 'commentCount',
      onclick: function onclick() {
        return changeUrl('/item?id=' + n.id);
      }
    }, n.comments_count + ' comments')));
  }))) : renderNotif('Data Not Found');
}

function renderComment(data) {
  deleteDom(elContent);
  var parser = function parser(param) {
    var DOM = new DOMParser().parseFromString(param, 'text/html');
    return DOM.body;
  };
  var onComment = function onComment(param) {
    var render = (0, _buatElement.div)((0, _buatElement.span)({ style: { fontWeight: 'bold', marginRight: '10px' } }, '' + param.user), (0, _buatElement.span)('' + param.time_ago), (0, _buatElement.div)({ id: 'comments-content' }, parser(param.content)), onComments(param.comments));
    return render;
  };

  var onComments = function onComments(param) {
    var render = (0, _buatElement.div)(param.map(function (n) {
      return (0, _buatElement.div)({ id: 'comments-list' }, onComment(n));
    }));
    return render;
  };

  elContent.appendChild((0, _buatElement.div)((0, _buatElement.a)({
    className: 'typoTitle',
    target: '_blank',
    rel: 'noopener external',
    title: '' + data.title,
    href: '' + data.url
  }, data.title), (0, _buatElement.div)({ className: 'details' }, (0, _buatElement.span)({ style: { fontWeight: 'bold' } }, ' by ' + data.user), (0, _buatElement.span)(' ' + data.time_ago), (0, _buatElement.span)({ style: { marginLeft: '15px' } }, ' ' + (data.points || 0) + ' \u2605')), (0, _buatElement.div)({ style: {
      margin: '20px 0',
      padding: '16px',
      background: '#f9f9f9'
    } }, 'No Content'), (0, _buatElement.div)({ id: 'comment' }, (0, _buatElement.div)({ id: 'comments-count' }, (data.comments_count || 0) + ' Comments'), (0, _buatElement.div)().innerHTML = onComments(data.comments))));
}

function rePage() {
  document.getElementsByClassName('typoPagination')[0].innerHTML = '' + page();
  var editArrow = function editArrow(param) {
    return getEl('leftArrow').className = param;
  };
  if (page() >= 2) {
    editArrow('paginationArrow');
  } else {
    editArrow('typoInActive');
  }
}

function renderPagination() {
  elPagination.appendChild((0, _buatElement.div)({ className: 'paginationChild' }, (0, _buatElement.span)({
    id: 'leftArrow',
    className: page() >= 2 ? 'paginationArrow' : 'typoInActive',
    onclick: function onclick() {
      if (page() >= 2) {
        window.history.pushState({}, null, '/' + halaman() + '?page=' + (page() - 1));
        rePage();
        fetchData();
      }
    }
  }, '< Prev'), (0, _buatElement.span)({ className: 'typoPagination' }, '' + page()), (0, _buatElement.span)({
    className: 'paginationArrow',
    onclick: function onclick() {
      window.history.pushState({}, null, '/' + halaman() + '?page=' + (page() + 1));
      rePage();
      fetchData();
    }
  }, 'Next >')));
}

function renderNotif(param) {
  deleteDom(elContent);
  elContent.appendChild((0, _buatElement.div)({ id: 'divNotif' }, (0, _buatElement.p)(param)));
}

function deleteDom(param) {
  while (param.firstChild) {
    param.removeChild(param.firstChild);
  }
}

function fetchData() {
  deleteDom(elContent);
  var pages = halaman();
  var search = new URL(window.location.href).searchParams.get('' + (pages === 'item' ? 'id' : 'page'));
  var page = pages === 'news' ? 'newest' : pages;
  renderNotif('Loading...');
  fetchAsync(page, search).then(function (data) {
    return page === 'item' ? renderComment(data) : renderList(data);
  }).catch(function (err) {
    return renderNotif('ERROR!!! ' + err.message);
  });
}

function changeUrl(param) {
  window.history.pushState({}, null, param);
  var active = [].slice.call(document.getElementsByClassName('active'));
  active.map(function (n) {
    return n.className = '';
  });
  rePage();
  fetchData();
  if (param.slice(1, param.indexOf('?')) !== 'item') {
    getEl('link' + param.slice(1, param.indexOf('?'))).className = 'active';
  }
}

function renderOffline() {
  if (!window.navigator.onLine) {
    getEl('main').appendChild((0, _buatElement.div)({
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
    }, (0, _buatElement.span)('No Connections Are Available')));
  } else if (getEl('divOffline') !== null) {
    getEl('main').removeChild(getEl('divOffline'));
  }
}

fetchData();
renderPagination();

window.changeUrl = changeUrl;
window.deleteDom = deleteDom;
window.getEl = getEl;