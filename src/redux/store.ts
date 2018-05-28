import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const middleware = [thunk];
const createLogger = require('redux-logger').createLogger;
middleware.push(
    createLogger({
        level: 'info',
        collapsed: true
    })
);

const composeEnhancer = process.env.NODE_ENV !== 'production' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const configureStore = () => {
    return createStore(rootReducer, composeEnhancer(applyMiddleware(...middleware)));
};

export default configureStore;