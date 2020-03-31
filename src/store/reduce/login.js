import {LOGIN, LOGOUT} from "../actionType";

export default (state = false, action) => {
    // if (action.type === LOGIN) {
    //     return action.loginType === undefined ? state : action.loginType;
    // } else return state;
    switch (action.type) {
        case LOGIN:
        case LOGOUT:
            return action.loginType === undefined ? state : action.loginType;
        // case  LOGOUT:
        //     return action.loginType === undefined ? state : action.loginType;
        default:
            return state;
    }
}
// export default (state = [], action) => {
//     switch (action.type) {
//         case LOGIN:
//             return action.loginType;
//         default:
//             return state;
//     }
// }
