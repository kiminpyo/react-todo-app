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
                    className="w-4/5 ml-4 "
                    type="text"
                    placeholder="할 일 입력하세요"
                    value={value}
                    onChange={handleChange}
                />

                <div className="text-end mr-10">
                    {" "}
                    <button
                        className="bg-blue-100 text-xl m-2 rounded-lg p-1 "
                        type="submit">
                        {" "}
                        ❤️입력
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
