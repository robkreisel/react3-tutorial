import React from 'react'
import { render } from 'react-dom'

const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-component' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'LimeGreen' }),
    ce(MyTitle, { title: 'Rick and Morty', color: 'peru' }),
    ce(MyTitle, { title: 'Silicon Valley', color: 'YellowGreen' })
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
