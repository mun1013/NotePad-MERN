import { GET_NOTES, ADD_NOTE, EDIT_NOTE, DELETE_NOTE, ITEMS_LOADING } from '../actions/types';

const initialState = {
  noteList: [],
  loading: false
}

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        noteList: action.payload,
        loading: false
      }
    case ADD_NOTE:
      return {
        ...state,
        noteList: [...state.noteList, action.payload]
      }
    case EDIT_NOTE:
      return {
        ...state,
        noteList: state.noteList.map(note => (note._id === action.payload._id) ? action.payload : note)
      }
    case DELETE_NOTE:
      return {
        ...state,
        noteList: state.noteList.filter(note => note._id !== action.payload)
      }
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default noteReducer;