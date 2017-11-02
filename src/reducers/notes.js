import {
  REQUEST_NOTES,
  RECEIVE_NOTES,
  ADD_NOTE,
  DELETE_NOTE
} from '../actions';

const notes = (state = [], action) => {
  switch (action.type) {
  	case RECEIVE_NOTES:
      return action.notes;
    case ADD_NOTE:
      return [...state, action.note];
    default:
      return state;
  }
};

export default notes;
