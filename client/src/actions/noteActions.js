import axios from 'axios';
import { GET_NOTES, ADD_NOTE, EDIT_NOTE, DELETE_NOTE, ITEMS_LOADING } from './types';

export const getNotes = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/notes')
    .then(res => 
      dispatch({
        type: GET_NOTES,
        payload: res.data
      })
    )
    .catch (error => {
      console.log(error);
    });
};

export const addNote = todo => dispatch => {
  axios
    .post('/notes', todo)
    .then(res => 
      dispatch({
        type: ADD_NOTE,
        payload: res.data
      })
    );
};

export const editNote = todo => dispatch => {
  axios
    .patch(`/notes/${todo._id}`, todo)
    .then(res => {
      dispatch({
        type: EDIT_NOTE,
        payload: res.data
      })
    }
    )
};

export const deleteNote = id => dispatch => {
  axios
    .delete(`/notes/${id}`)
    .then(res => 
      dispatch({
        type: DELETE_NOTE,
        payload: id
      })
    );
};

export const setItemsLoading = todo => {
  return {
    type: ITEMS_LOADING
  }
};