import { createStore, applyMiddleware } from 'redux';

import reducer from './FormReducer';

const middlewares = [];

export default createStore(reducer, applyMiddleware(...middlewares));
