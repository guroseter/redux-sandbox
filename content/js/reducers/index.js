import {LOG_IN, LOG_OUT, RESET_ERROR_MESSAGE} from '../constants/ActionTypes';
import {CONTRACT_LIST_SUCCESS, CONTRACT_LIST_REQUEST, CONTRACT_LIST_FAILURE} from '../constants/ActionTypes';
import {REQUEST_USER_LIST, RECEIVE_USER_LIST} from '../actions/user'
import { combineReducers } from 'redux';

const initialStateUser = null;
const initialStateUsers = {
    isFetching: false,
    items: []
};
const initialStateContractsForUser = {
    didInvalidate: false,
    items: []
}

function user(state = initialStateUser, action){
    switch (action.type) {
        case LOG_IN:
            return action.user;
        case LOG_OUT:
            return null;
        default:
            return state;
    }
}

function users( state = initialStateUsers, action ) {
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

function errorMessage(state = null, action) {
    const {type, error} = action;

    if (type === RESET_ERROR_MESSAGE){
        return null;
    } else if (error) {
        return action.error;
    }
    return state;
}

function contractsForUser( state = initialStateContractsForUser, action ){
    switch (action.type){
        case CONTRACT_LIST_SUCCESS:
            return Object.assign({}, state, {
                items: action.response.results,
                didInvalidate: false,
                isFetching: false
            });
        case CONTRACT_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case CONTRACT_LIST_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: true
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    user, users, contractsForUser, errorMessage
});

export default rootReducer;