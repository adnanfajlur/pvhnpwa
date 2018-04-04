import {
  p,
  div,
  span,
  hokya,
} from './buatElement.js'


async function fetchAsync() {
  let response = await fetch('https://hnpwa.com/api/v0/news.json?page=1');
  let data = await response.json();
  return data;
}

fetchAsync()
  .then(data => renderList(data))
  .catch(err => console.log(err.message))

function renderList(data) {
  const content = document.getElementById('content')
  content.appendChild(div(
    data.map(n => (
      div({ className: 'divWrap' },
        p({ className: 'typoTitle' }, n.title),
        span(n.domain),
        div({ className: 'details'},
          span(`${n.points || 0} ★`),
          span(` by ${n.user}`)
        )
      )
    ))
  ))
}