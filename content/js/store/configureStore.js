import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import callAPIMiddleware from '../middleware/api';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    callAPIMiddleware
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}