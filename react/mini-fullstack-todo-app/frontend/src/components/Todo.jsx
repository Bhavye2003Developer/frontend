import React from "react";
import './Todo.css'

function Todo({ _id, title, description, completed }) {

    console.log("todo renders")

    async function markTodoCompleted(id) {
        await fetch('http://localhost:3000/completed', {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        }).then(() => {
            window.location.reload();
        })
    }

    return (
        <div className="todo" style={{
            margin: 10
        }}>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Completed:</strong> {completed ? "✔️" :
                <>
                    ❌
                    <button onClick={() => { markTodoCompleted(_id) }}>✔️</button>
                </>
            }</p>
        </div>
    );
}

export default Todo;
