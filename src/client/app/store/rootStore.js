import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

//middlewares
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(rootReducer, middleware);
export default store;
