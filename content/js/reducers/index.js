import {LOG_IN, LOG_OUT} from '../constants/ActionTypes';
import {REQUEST_USER_LIST, RECEIVE_USER_LIST} from '../actions/user'
import { combineReducers } from 'redux';

const initialStateUser = null;
const initialStateUsers = {
    isFetching: false,
    items: []
};

export default function user(state = initialStateUser, action){
    switch (action.type) {
        case LOG_IN:
            return action.person;
        case LOG_OUT:
            return null;
        default:
            return state;
    }
}

export default function users( state = initialStateUsers, action ) {
    switch (action.type){
        case RECEIVE_USER_LIST:
            return Object.assign({}, state, {
                items: action.users,
                isFetching: false
            });
        case REQUEST_USER_LIST:
            return Object.assign({}, state, {
                isFetching: true
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    user, users
});

export default rootReducer;