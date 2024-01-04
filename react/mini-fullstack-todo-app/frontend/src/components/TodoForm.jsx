// TodoForm.jsx

import React, { useState } from "react";
import './TodoForm.css';  // Import the associated CSS file for styling

function TodoForm() {

    const [todo, setTodo] = useState(["", "", false]);
    console.log("todoform renders")


    async function sendTodo(todo) {
        console.log(todo.length.toString())
        await fetch('http://localhost:3000/todo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: todo[0],
                description: todo[1],
                completed: todo[2]
            })
        }).then(() => {
            window.location.reload();
        })
    }


    return (
        <div className="todo-form">
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter title"
                onChange={(e) => {
                    setTodo([e.target.value, todo[1]]);
                }}
            /><br /><br />
            <input
                type="text"
                name="description"
                id="description"
                placeholder="Enter description"
                onChange={(e) => {
                    setTodo([todo[0], e.target.value]);
                }}
            /><br /><br />
            <label htmlFor="completed"
                style={{
                    margin: 0,
                    padding: 0,
                    display: "inline-block"
                }}>Completed</label>
            <input
                type="checkbox"
                name="completed"
                id="completed"
                onChange={(e) => {
                    setTodo([todo[0], todo[1], e.target.checked]);
                }}
                style={{
                    margin: 0,
                    padding: 0,
                    width: 20,
                    marginLeft: 10
                }}
            />
            <br /><br /><br />
            <button onClick={() => {
                sendTodo(todo)

            }}>ADD TODO</button>

            <br /><br />
            <div className="todo-details">
                <p>Title: {todo[0]}</p>
                <p>Description: {todo[1]}</p>
                <p>Status: {todo[2] ? "Completed" : "Not Completed"} </p>
            </div>
        </div>
    );
}

export default TodoForm;
