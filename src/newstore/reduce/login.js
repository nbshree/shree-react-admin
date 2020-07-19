import {LOGIN, LOGOUT} from "../actionType";

const defaultState = {}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'request login':
            return {...state, loading: true}
        case 'receive login':
            const {data} = action
            return {data: data, loading: false}
        case 'request loginOut':
            return {...state, loading: true}
        case 'receive loginOut':
            return {loading: false}
        default:
            return state;
    }
}

