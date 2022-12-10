import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import Spinner from "../Spinner";

const Profile = () => {
    const user = useSelector((state) => state.user.userData);

    if (user) {
        return (
            <div className='h-screen w-screen text-center'>
                <div className='w-full text-center max-w-sm  m-auto'>
                    <ul>
                        <li className='p-3'>id : {user._id}</li>
                        <li className='p-3'>email :{user.email}</li>
                        <li className="p-3">name: {user.name ? user.name : undefined }</li>
                        <li className='p-3 bg-blue-100 hover:bg-blue-200 cursor-pointer active:bg-blue-100'>
                            <button className=''>password 수정</button>
                        </li>
                        <li className='p-3'>
                            {user.isAdmin ? "수정" : undefined}
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return <Spinner />;
    }
};

export default Profile;
