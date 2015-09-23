import * as types from '../constants/ActionTypes'

export function logIn(person) {
    return {type: types.LOG_IN, person };
}

export function logOut() {
    return {type: types.LOG_OUT};
}