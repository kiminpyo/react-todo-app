import React, { useCallback, useMemo, useState } from "react";

const List = React.memo(
    ({
        todoData,
        setTododata,
        id,
        title,
        checked,
        provided,
        snapshot,
        handleClick,
    }) => {
        const [editTitle, setEditTitle] = useState(title);
        const [isEdit, setIsEdit] = useState(false);
        console.log("list is rendering");

        const checkHandler = (id) => {
            let newTodoData = todoData.map((v) => {
                if (v.id === id) {
                    v.checked = !v.checked;
                }
                return v;
            });
            setTododata(newTodoData);
        };

        const handleEditChange = (e) => {
            setEditTitle(e.target.value);
        };
        const handleSaveClick = useCallback(
            (e) => {
                e.preventDefault();
                let newTododata = todoData.map((v) => {
                    if (v.id === id) {
                        v.title = editTitle;
                    }
                    return v;
                });
                setTododata(newTododata);
                localStorage.setItem("todoData", JSON.stringify(newTododata));
                setIsEdit((prev) => !prev);
            },
            [editTitle]
        );

        if (isEdit) {
            return (
                <div className="bg-blue-50 p-2 m-4  rounded-xl ">
                    <div className="flex justify-between">
                        <div>
                            <form onSubmit={handleSaveClick}>
                                <input
                                    onChange={handleEditChange}
                                    value={editTitle}
                                    autoFocus
                                />
                            </form>
                        </div>
                        <div className="flex ">
                            <div className="bg-gray-40 pr-3 font-bold">
                                <button onClick={handleSaveClick} type="submit">
                                    💾save
                                </button>
                            </div>
                            <div className="bg-gray-40 ">
                                <button onClick={() => handleClick(id)}>
                                    ✖️
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div
                className={`${
                    snapshot.isDragging
                        ? "bg-slate-500 m-4 p-2 rounded-xl"
                        : "bg-blue-50 p-2 m-4 rounded-xl "
                }`}
                key={id}
                {...provided.draggableProps}
                ref={provided.innerRef}
                {...provided.dragHandleProps}>
                <div className="flex justify-between">
                    <div>
                        <input
                            type="checkbox"
                            defaultChecked={false}
                            onClick={() => checkHandler(id)}
                        />
                        <span
                            className={
                                checked
                                    ? "line-through text-xl p-2 font-mono"
                                    : "text-xl p-2 font-mono"
                            }>
                            {title}
                        </span>
                    </div>
                    <div className="flex ">
                        <div className="bg-gray-40 pr-3  font-bold">
                            <button onClick={() => setIsEdit(true)}>
                                📋edit
                            </button>
                        </div>

                        <div className="bg-gray-40">
                            <button onClick={() => handleClick(id)}> ✖️</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

export default List;
