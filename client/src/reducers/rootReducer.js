import { combineReducers } from 'redux';
import noteReducer from './noteReducer.js';

const rootReducer = combineReducers({
  todos: noteReducer
});

export default rootReducer;