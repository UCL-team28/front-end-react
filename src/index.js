// @flow

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import notesApp from './reducers';
import Routes from './router/routes';
import { Note, Category } from './models';

let store = createStore(notesApp, {
  notes: [
    new Note(
      0,
      '03.11.2017',
      'Some note',
      'product',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'https://picsum.photos/600/400',
      'image'
    ),
    new Note(
      1,
      '03.11.2017',
      'Some note',
      'product',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'https://picsum.photos/600/400',
      'image'
    ),
    new Note(
      2,
      '03.11.2017',
      'Some note',
      'product',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'https://picsum.photos/600/400',
      'image'
    ),
    new Note(
      3,
      '03.11.2017',
      'Some note',
      'product',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'https://picsum.photos/600/400',
      'image'
    ),
    new Note(
      4,
      '03.11.2017',
      'Some note',
      'product',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'https://picsum.photos/600/400',
      'image'
    ),
    new Note(
      5,
      '03.11.2017',
      'Some note',
      'product',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'https://picsum.photos/600/400',
      'image'
    ),
    new Note(
      6,
      '03.11.2017',
      'Some note',
      'product',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'https://picsum.photos/600/400',
      'image'
    )
  ],
  categories: [
    new Category(0, 'product'),
    new Category(1, 'frontend'),
    new Category(2, 'backend')
  ],
  token: null
});

render(<Routes store={store} />, document.querySelector('#root'));
