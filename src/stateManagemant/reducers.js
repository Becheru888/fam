import * as types from './actionTypes';

const initialUser = {
    username:'',
    password:''
};

export function addUserReducer(user = initialUser, action){
    switch (action.type) {
        case types.ADD_USER:
            return {...action.payload}
        default:
            return user;
    }
}