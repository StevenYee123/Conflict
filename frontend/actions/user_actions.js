import * as UserAPIUtil from "../util/user_api_util";
import { receiveErrors } from "./session_actions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUsers = (users) => {
    return{
        type: RECEIVE_USERS,
        users
    }
}

export const receiveUser = (user) => {
    return{
        type: RECEIVE_USER,
        user
    }
}

export const fetchUsers = () => dispatch => {
    return UserAPIUtil.fetchUsers()
        .then((users) => dispatch(receiveUsers(users)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchUser = (userId) => dispatch => {
    return UserAPIUtil.fetchUser(userId)
        .then((user) => dispatch(receiveUser(user)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)));
};