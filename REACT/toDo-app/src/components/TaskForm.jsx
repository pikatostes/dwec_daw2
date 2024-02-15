import React, { useState } from "react";
import "../stylesheet/TaskForm.css";
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {
    const [input, setInput] = useState('');

    const changeManage = e => {
        setInput(e.target.value)
        console.log(e.target.value)
    }

    const dataManage = e => {
        e.preventDefault()
        console.log("sending form")
        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        }

        props.onSubmit(newTask)
    }

    return(
        <form action="" className="task-form" onSubmit={dataManage}>
            <input type="text" name="" id="" className="task-input" onChange={changeManage}/>
            <button className="task-button">Add Task</button>
        </form>
    )
}

export default TaskForm;