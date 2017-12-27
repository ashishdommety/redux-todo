import { createStore } from 'redux';
import changeTodosReducer from './Reducer';

let store = createStore(changeTodosReducer);
export default store;
