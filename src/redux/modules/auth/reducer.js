import { actionType } from "./action";


const initialState = {
    isLogin: false,
    token: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH_SUCCESS:
            return Object.assign({}, state, {
                isLogin: true,
                token: action.payload
            })
        case actionType.LOGOUT:
        case actionType.UNAUTHORIZED:
            return Object.assign({}, state, {
                isLogin: false
            });
        case actionType.AUTHORIZED:
            return Object.assign({}, state, {
                isLogin: true
            })
        default:
            return state;
    }
}