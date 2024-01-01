import React, { useState } from 'react'
import './App.css'
import { Button } from './components/Button.jsx'
import Clock from './components/Clock.jsx'





function App() {

  const [todos, setTodos] = useState([{ title: "Enter title", description: "Description", completed: false }])

  const user = {
    firstname: "Bhavye",
    lastname: "Jain",
    age: 20
  }


  return (
    <>
      <div>
        {/* <Button></Button> */}
        <input type="text" name="note" id="note" placeholder='enter new note...' /><br /><br />
        <button onClick={() => {
          // @ts-ignore
          const note = document.getElementById("note").value
          const allTodos = todos.slice(0)
          allTodos.push({
            title: note,
            description: "hello",
            completed: false
          })
          setTodos(allTodos)
        }}>add todo</button>


        <br /><br /><br />

        <div>
          {todos.map((todo, index) => {
            return <li key={index}>
              Title: {todo.title}
            </li>
          })}
        </div>

        {/* {
          user.firstname + " " + user.lastname
        } */}


      </div>
    </>
  )
}


export default App