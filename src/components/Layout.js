import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Link,
    Navigate,
    NavLink,
    Outlet,
    redirect,
    useLocation,
    useNavigate,
} from "react-router-dom";
import { logout } from "../_actions/user_action";

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.userData);

    const logoutHandler = () => {
        const confirm = window.confirm("로그아웃 하시겠습니까? ");
        if (confirm) {
            dispatch(logout()).then(() => {
                navigate("/login");
            });
        } else {
            return null;
        }
    };
    // landing페이지와 login페이지일 때 뒤로가기 생략
    if (location.pathname === "/") {
        return (
            <div>
                <nav className="bg-blue-200 pb-7 text-center">
                    {/* {user && user ? (
                        <ul className='flex justify-center'>
                            <li className='p-2'>
                                <Link to='/mypage'>mypage</Link>
                            </li>

                            <li className='p-2'>
                                <div onClick={logoutHandler}>로그아웃</div>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li className='p-2'>
                                <div>
                                    <Link to='login'>로그인</Link>
                                </div>
                            </li>
                        </ul>
                    )} */}
                </nav>
                <Outlet />
            </div>
        );
    } else {
        return (
            <div>
                <div
                    className="prev__button absolute  m-2 p-2 rounded-full bg-slate-500 text-rose-100"
                    onClick={() => navigate(-1)}>
                    {"<"}
                </div>
                <nav className="bg-blue-200 pb-7 text-center">
                    {user && user ? (
                        <ul className="flex justify-center">
                            <li className="p-2">
                                <Link to="/mypage">mypage</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li className="p-2">
                                <div>
                                    <Link to="login">로그인</Link>
                                </div>
                            </li>
                        </ul>
                    )}
                </nav>
                <Outlet />
            </div>
        );
    }
};

export default Layout;
