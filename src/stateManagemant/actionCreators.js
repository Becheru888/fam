import * as types from './actionTypes' 


export function inputUser(username, password){
    return {
        type: types.ADD_USER,
        payload: {
            username,
            password
        }
    }
}