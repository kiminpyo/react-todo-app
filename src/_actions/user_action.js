import axios from "axios";
import { AUTH_USER, LOGIN_USER, LOGOUT_USER } from "./type";

export const loginUser = (dataTosubmit) => {
    const request = axios
        .post("/api/users/login", dataTosubmit)
        .then((response) => response.data);

    return {
        type: LOGIN_USER,
        payload: request,
    };
};
export const auth = () => {
    const request = axios
        .get("/api/users/auth")
        .then((response) => response.data);

    return {
        type: AUTH_USER,
        payload: request,
    };
};

export const logout = () => {
    const request = axios
        .get("/api/users/logout")
        .then((response) => response.data);

        return {
            type: LOGOUT_USER,
            payload: request
        }
};
