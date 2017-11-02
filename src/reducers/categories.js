import {
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  ADD_CATEGORY,
  DELETE_CATEGORY
} from '../actions';

const categories = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export default categories;
