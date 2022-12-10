import React, { lazy, Suspense, useEffect } from "react";
import "./App.css";

import { Link, Outlet, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";
import MyPage from "./pages/MyPage";
import axios from "axios";

const NoMatch = lazy(() => import("./pages/NoMatchPage/index"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/index"));

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <Suspense fallback={<Spinner />}>
                            <MainPage />
                        </Suspense>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<Spinner />}>
                            <NoMatch />
                        </Suspense>
                    }
                />
                <Route
                    path="/mypage"
                    element={
                        <Suspense fallback={<Spinner />}>
                            <MyPage />
                        </Suspense>
                    }
                />
            </Route>
            <Route
                path="/login"
                element={
                    <Suspense fallback={<Spinner />}>
                        <LoginPage />
                    </Suspense>
                }
            />
        </Routes>
    );
};

export default App;
