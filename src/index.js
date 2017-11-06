// @flow

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import notesApp from './reducers';
import Routes from './router/routes';
import { Note, Category } from './models';
import mock from './models/mock';

import thunkMiddleware from 'redux-thunk';

let store = createStore(notesApp, applyMiddleware(thunkMiddleware));

render(<Routes store={store} />, document.querySelector('#root'));
