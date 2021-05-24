import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';

const middlewares = [logger];
//https://redux.js.org/tutorials/fundamentals/part-4-store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;