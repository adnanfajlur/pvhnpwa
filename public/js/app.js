import {
  p,
  div,
  span,
  a,
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
  console.log(data)
  content.appendChild(div(
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
}