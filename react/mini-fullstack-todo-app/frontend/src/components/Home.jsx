import { useEffect, useState } from 'react'
import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function Home() {
    const [todos, setTodos] = useState([])

    console.log("app renders")

    useEffect(() => {
        getAllTodos()
    }, [])

    async function getAllTodos() {

        const token = localStorage.getItem("token")
        // console.log(token)

        const data = await fetch("http://localhost:3000/todos", {
            // @ts-ignore
            headers: {
                "Authorization": token
            }
        })
        const response = await data.json()
        console.log(response)
        setTodos(response.todos)
    }

    return (
        <>
            <div>
                <center>
                    <h1><i>FULLSTACK TODO APP</i></h1>
                </center>
                <TodoForm></TodoForm>

                <div>
                    {
                        todos.map(todo => <Todo {...
                            // @ts-ignore
                            todo} key={todo._id}></Todo>)}
                </div>
            </div>
        </>
    )
}

export default Home