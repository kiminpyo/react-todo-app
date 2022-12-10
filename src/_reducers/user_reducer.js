import { AUTH_USER, LOGIN_USER, LOGOUT_USER } from "../_actions/type";

export default function (state = {}, action) {
    console.log(action);
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload };
        case AUTH_USER:
            return { ...state, userData: action.payload };
            case LOGOUT_USER:
                return { ...state, logoutSuccess : action.payload}
        default:
            return state;
    }
}
