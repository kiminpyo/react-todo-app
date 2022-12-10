import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import auth from "../../hoc/auth";
import { loginUser } from "../../_actions/user_action";
export default auth(function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();

        let body = {
            email: email,
            password: pw,
        };
        dispatch(loginUser(body)).then((response) => {
            if (response.payload.loginSuccess) {
                navigate("/");
            } else {
                alert("error");
            }
        });
    };
    console.log(email);
    return (
        <>
            <div
                style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100vh",
                }}
            >
                <form onSubmit={onSubmit}>
                    <label htmlFor='email'>email:</label>
                    <input
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor='password'>password:</label>
                    <input
                        type='password'
                        onChange={(e) => setPw(e.currentTarget.value)}
                    />
                    <button type='submit'>login</button>
                </form>
            </div>
        </>
    );
}, false);
