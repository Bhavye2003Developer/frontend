const express = require('express')
const types = require('./types')


const app = express()
const port = 3000

app.use(express.json())


app.get("/todos", (req, res) => {
    res.send("todos")
})

app.post("/todo", (req, res) => {
    const todo = req.body
    const parsedTodo = types.todo.safeParse(todo)
    console.log(parsedTodo)

    if (parsedTodo.success === false) {
        res.status(411).json({
            msg: "invalid body"
        })
    }
    console.log(parsedTodo)
})



app.put("/completed", (req, res) => {
    const id = req.body
    const parsedId = types.markCompleted.safeParse(id)

    if (parsedId.success === false) {
        res.status(411).json({
            msg: "id not found"
        })
    }

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})