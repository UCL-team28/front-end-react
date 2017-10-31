import fetch from 'isomorphic-fetch';

export const getNotes = () => {
  return {
    type: 'GET_NOTES'
  };
};

export const addNote = note => {
  return {
    type: 'ADD_NOTE',
    note: createNote
  };
};

export const deleteNote = id => {
  return {
    type: 'DELETE_NOTE',
    id: id
  };
};

export const getCategories = () => {
  return {
    type: 'GET_CATEGORIES'
  };
};

export const addCategory = category => {
  return {
    type: 'ADD_CATEGORY',
    category: createCategory
  };
};

export const deleteCategory = id => {
  return {
    type: 'DELETE_CATEGORY',
    id: id
  };
};

export const login = (email, pass) => {
  return {
    type: 'LOGIN',
    email: email,
    pass: pass
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};
