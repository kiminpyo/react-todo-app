import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from "./List";
const Lists = React.memo(({ handleClick, todoData, setTododata }) => {
    // 할 일 완료
    console.log("lists is rendering");
    const handleEnd = (result) => {
        const newTodaData = todoData;
        console.log(result);
        if (!result.destination) {
            return;
        }
        const [renderedItem] = newTodaData.splice(result.source.index, 1);
        console.log(renderedItem);

        newTodaData.splice(result.destination.index, 0, renderedItem);
    };
    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId='todo'>
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}>
                            {todoData.map((v, i) => (
                                <Draggable
                                    key={v.id}
                                    draggableId={v.id.toString()}
                                    index={i}>
                                    {(provided, snapshot) => (
                                        <List
                                            handleClick={handleClick}
                                            todoData={todoData}
                                            setTododata={setTododata}
                                            id={v.id}
                                            title={v.title}
                                            checked={v.checked}
                                            provided={provided}
                                            snapshot={snapshot}
                                        />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
});

export default Lists;
