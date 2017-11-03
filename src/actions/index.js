import fetch from 'isomorphic-fetch';

import { Note, Category } from '../models';

export const REQUEST_NOTES = 'REQUEST_NOTES'
export const RECEIVE_NOTES = 'RECEIVE_NOTES'
export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

function requestNotes(notebook) {
  return {
    type: REQUEST_NOTES,
    notebook
  }
}

function receiveNotes(notebook, json) {
  return {
    type: RECEIVE_NOTES,
    notebook,
    notes: json.notes.map(note => new Note(
      note.id,
      note.created,
      note.name,
      note.category ? note.category.category : "",
      note.content,
      note.media,
      note.media_type,
    ))
  }
}

export const getNotes = (notebook) => {
  return dispatch => {
    dispatch(requestNotes(notebook))
    return fetch(`http://13.92.34.183/notebook/${notebook}`)
      .then(response => response.json())
      .then(json => dispatch(receiveNotes(notebook, json)))
  }
}

export const addNote = (notebook, data) => {
  return dispatch => {
    return fetch(`http://13.92.34.183/notebook/${notebook}/note`, { method: 'POST',  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }, body: JSON.stringify(data) })
      .then(response => response.json())
      .then(json => dispatch(getNotes(notebook)))
  }
}

export const deleteNote = (notebook, id) => {
  return dispatch => {
    return fetch(`http://13.92.34.183/notebook/${notebook}/note/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(json => dispatch(getNotes(notebook)))
  }
}

function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

function receiveCategories(json) {
  return {
    type: RECEIVE_CATEGORIES,
    categories: json.map(cat => new Category(
      cat.id,
      cat.category
    ))
  }
}

export const getCategories = () => {
  return dispatch => {
    dispatch(requestCategories())
    return fetch(`http://13.92.34.183/categories`)
      .then(response => response.json())
      .then(json => dispatch(receiveCategories(json)))
  }
}

export const addCategory = (data) => {
  return dispatch => {
    return fetch(`http://13.92.34.183/categories`, { method: 'POST',  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }, body: JSON.stringify(data) })
      .then(response => response.json())
      .then(json => dispatch(getCategories()))
  }
}

export const deleteCategory = (id) => {
  return dispatch => {
    return fetch(`http://13.92.34.183/categories/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(json => dispatch(getCategories()))
  }
}

export const login = (email, pass) => {
  return {
    type: LOGIN,
    token: 'hihi',
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};
