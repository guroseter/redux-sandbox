import {LOG_IN, LOG_OUT} from '../constants/ActionTypes';

const initialState = null;

export default function user(state = initialState, action){
    switch (action.type) {
        case LOG_IN:
            return action.person;
        case LOG_OUT:
            return null;
        default:
            return state;
    }
}