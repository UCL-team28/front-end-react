const categories = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [...state, action.category];
    case 'DELETE_CATEGORY':
      return state.filter(category => category.id !== action.id);
    default:
      return state;
  }
};

export default categories;
