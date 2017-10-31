const token = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      return ['token'];
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};

export default token;
