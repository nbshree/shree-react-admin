import {LOGIN, LOGOUT} from "./actionType";
import httpAjax from '@/utils/httpAjax';

export const login = ({username, password}) => {
    return (dispatch) => {
        localStorage.setItem("login", true);
        dispatch({
            type: 'request login'
        })
        httpAjax.get('/open/login', {
            params: {
                userName: username,
                userPwd: password
            }
        }).then(response => {
            localStorage.setItem("JSESSIONID", response.data.sessionId);
            if (response.status === 1) {
                dispatch({
                    type: 'receive login',
                    data: response.data
                })
            }
        }).catch(error => {
        });

    }
};
export const logOut = () => {
    return (dispatch) => {
        dispatch({
            type: 'request loginOut'
        })
        httpAjax.get('/open/logoff', {}).then(response => {
            console.log(response)
            if (response.status === 1) {
                localStorage.removeItem("JSESSIONID");
                dispatch({
                    type: 'receive loginOut'
                })
            }
        }).catch(error => {
        });

    }
};
export const getInfo = () => {
    return (dispatch) => {
        dispatch({
            type: 'request getInfo'
        })
        httpAjax.get('/system/user/info/load', {params:{id: 5447188719000879104}}).then(response => {
            console.log(response)
            if (response.status === 1) {
                dispatch({
                    type: 'receive getInfo',
                    data: response.data
                })
            }
        }).catch(error => {
        });

    }
};
