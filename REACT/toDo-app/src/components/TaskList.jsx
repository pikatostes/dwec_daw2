import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "../stylesheet/TaskList.css";
import Task from "./Task";

function TaskList() {
    const [task, setTask] = useState([]);

    const addtask = task => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const updatedTask = [task, ...task]
            setTask(updatedTask);
        }
    }

    return(
        <>
        <TaskForm onSubmit={addtask}/>
        <div className="task-list-container">
            {
                task.map((task) => 
                    <Task 
                    key={task.id}
                    id={task.id}
                    text={task.text}
                     completed={task.completed}
                    />
                )
            }
        </div>
        </>
    )
}

export default TaskList;