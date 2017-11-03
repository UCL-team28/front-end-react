import {
  LOGIN,
  LOGOUT,
} from '../actions';

const token = (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      return action.token;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

export default token;
