import {LOGIN, LOGOUT} from "./actionType";
import httpAjax from '@/utils/httpAjax';

export const login = ({username,password}) => {
    return (dispatch) => {
        localStorage.setItem("login", true);
        dispatch({
            type: 'request login'
        })
        // localStorage.setItem("login", loginType);
        httpAjax.get('/open/login', {
            params: {
                userName: username,
                userPwd: password
            }
        }).then(response => {
            console.log(response)
            if (response.status === 1) {
                dispatch({
                    type: 'receive login',
                    data: response.data
                })
                // loginAuth.setSession(JSON.stringify(response.data));
                // loginAuth.setSessionId(response.data.sessionId);
            }
        }).catch(error => {
        });

    }
};
export const logOut = () => {
    return (dispatch) => {
        localStorage.setItem("login", true);
        dispatch({
            type: 'request login'
        })
        // localStorage.setItem("login", loginType);
        httpAjax.get('/open/loginOut', {}).then(response => {
            console.log(response)
            if (response.status === 1) {
                dispatch({
                    type: 'receive login',
                    data: response.data
                })
                // loginAuth.setSession(JSON.stringify(response.data));
                // loginAuth.setSessionId(response.data.sessionId);
            }
        }).catch(error => {
        });

    }
};
