import counterReducer from "./features/Counter/reducer"
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'

let rootReducer = combineReducers({
    counter: counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;