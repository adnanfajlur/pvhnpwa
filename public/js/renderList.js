import {
  p,
  div,
  span,
  a,
} from './buatElement.js'

function renderList(data) {
  const content = document.getElementById('content')
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

window.renderList = renderList