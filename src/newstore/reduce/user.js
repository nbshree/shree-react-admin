import {LOGIN, LOGOUT} from "../actionType";

const defaultState = {}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'request getInfo':
            return {...state, loading: true}
        case 'receive getInfo':
            const {data} = action
            return {data: data, loading: false}
        default:
            return state;
    }
}

