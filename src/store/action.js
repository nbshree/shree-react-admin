import {LOGIN, LOGOUT} from "./actionType";

export const login = loginType => {
    return (dispatch) => {
        localStorage.setItem("login", loginType);
        dispatch(({
            type: LOGIN,
            loginType
        }))
    }
};
export const logOut = loginType => {
    return (dispatch) => {
        localStorage.setItem("login", loginType);
        dispatch(({
            type: LOGOUT,
            loginType
        }))
    }
};
