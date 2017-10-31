import { combineReducers } from 'redux';
import notes from './notes';
import categories from './categories';
import token from './token';

const notesApp = combineReducers({
  notes,
  categories,
  token
});

export default notesApp;
