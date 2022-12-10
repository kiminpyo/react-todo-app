import React, { useCallback, useEffect, useState } from "react";
import Form from "../../components/Form";
import Lists from "../../components/Lists";
import axios from "axios";
import auth from "../../hoc/auth";
const MainPage = () => {

    console.log("app is rendering");
    let localData = localStorage.getItem("todoData");
    const [todoData, setTododata] = useState(JSON.parse(localData) || []);
    const [value, setValue] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();

        let data = {
            id: new Date().getTime().toString(),
            title: value,
            checked: false,
        };
        if (value.trim() === "") return alert("no");
        // 익명함수로 처리해서 기존의 todoData라는 이름대신 prev로 사용
        // state는 읽기전용이다. 건드리지말자.
        setTododata((prev) => [...prev, data]);
        localStorage.setItem("todoData", JSON.stringify([...todoData, data]));
        setValue("");
    };

    const handleRemoveClick = () => {
        const confirm =
            window.confirm("진짜삭제?") === true ? setTododata([]) : null;
        localStorage.setItem("todoData", null);
    };

    const handleClick = useCallback(
        (id) => {
            let newTodoData = todoData.filter((v) => v.id !== id);
            console.log(newTodoData);
            setTododata(newTodoData);
            localStorage.setItem("todoData", JSON.stringify(newTodoData));
        },
        [todoData]
    );
    return (
        <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
            <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 md:w-3/4 '>
                <div className='flex justify-between'>
                    <h1>할 일 목록</h1>
                    <button onClick={handleRemoveClick}>Delete All</button>
                </div>
                <Lists
                    handleClick={handleClick}
                    todoData={todoData}
                    setTododata={setTododata}
                />
                <Form value={value} setValue={setValue} onSubmit={onSubmit} />
            </div>
        </div>
    );
};

export default auth(MainPage);
