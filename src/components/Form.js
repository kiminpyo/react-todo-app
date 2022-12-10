import React from "react";

const Form = ({ value, setValue, onSubmit }) => {
    console.log("form is rendering");
    // 할 일 입력
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    // 할 일 등록

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="할 일 입력하세요"
                    value={value}
                    onChange={handleChange}
                />
                <button type="submit"> 입력</button>
            </form>
        </>
    );
};

export default Form;
