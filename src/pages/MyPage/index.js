import React from "react";
import Profile from "../../components/Mypage/Profile";
import auth from "../../hoc/auth";

const MyPage = () => {
    return (
        <>
            <Profile />
        </>
    );
};

export default auth(MyPage, true);
