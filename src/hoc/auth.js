import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useNavigate } from "react-router-dom";
export default function (SpecificComponent, option, adminRoute = null) {
    function Authentication(props) {
        const navigate = useNavigate();
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(auth()).then((response) => {
                if (!response.payload.isAuth) {
                    //로그인 하지 않고 메인페이지 진입시
                    if (option) {
                        alert("로그인이 필요한 페이지입니다");
                        navigate("/login");
                    }
                } else {
                    if (adminRoute) {
                        navigate("/");
                    } else {
                        //로그인을 한상태인데 로그인페이지 진입시
                        if (option === false) {
                            navigate("/");
                        }
                    }
                }
            });
        }, []);
        return <SpecificComponent />;
    }
    return Authentication;
}
