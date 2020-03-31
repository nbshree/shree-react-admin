import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import login from './reduce/login';
import thunk from 'redux-thunk'

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(combineReducers({
    login
}),enhancer);
export default store;
