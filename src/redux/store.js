import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root.reducer';

const middlewares = [logger];
//https://redux.js.org/tutorials/fundamentals/part-4-store
const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
export { store, persistor };