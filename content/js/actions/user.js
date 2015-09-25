import * as types from '../constants/ActionTypes'
import * as $ from 'jquery';

export const REQUEST_USER_LIST = 'REQUEST_USER_LIST';
export const RECEIVE_USER_LIST = 'RECEIVE_USER_LIST';

const API_ROOT = 'https://api.parse.com/1/classes/';

export function logIn(person) {
    return {type: types.LOG_IN, person };
}

export function logOut() {
    return {type: types.LOG_OUT};
}

function requestUserList(){
    return {
        type: REQUEST_USER_LIST
    }
}

function receiveUserList(responseData){
    return {
        type: RECEIVE_USER_LIST,
        users: responseData
    }
}

export function fetchUserList() {
    return dispatch => {
        dispatch(requestUserList);
        return $.ajax({
            type: 'GET',
            headers: {
                'X-Parse-Application-Id': "H6s6CpN4B9dGC0pb1uDqnH8rL0oz4bn2gyNsAI7X",
                'X-Parse-REST-API-Key': "zRdDlnIYWfbRUIvljA9r8LrxnaxVtJvaALx3uelC",
                Accept: "application/json",
                'Content-Type': "application/json"
            },
            url: API_ROOT + 'users'
        }).done(function (response) {
            dispatch(receiveUserList(response.results));
        });
    }

}
