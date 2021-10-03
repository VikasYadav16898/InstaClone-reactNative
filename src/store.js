import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducer';

import thunk from 'redux-thunk'; //for middlewares.
const middleware = [thunk];

import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
