// @flow

import React from 'react';
import { render } from 'react-dom';

import Routes from './router/routes';

let store = {};

render(<Routes store={store} />, document.querySelector('#root'));
