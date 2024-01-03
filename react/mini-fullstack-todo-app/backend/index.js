const express = require('express')
const types = require('./types')
const db = require('./db')

const app = express()
const port = 3000

app.use(express.json())


app.get("/todos", async (req, res) => {

    const todos = await db.todo.find()
    res.status(200).json({
        todos
    })
})

app.post("/todo", (req, res) => {
    const todo = req.body
    const parsedTodo = types.todo.safeParse(todo)

    if (parsedTodo.success === false) {
        res.status(411).json({
            msg: "invalid body"
        })
        return
    }

    const newTodo = new db.todo(todo)
    newTodo.save().then(() => {
        res.json({
            msg: "success"
        })
        return
    }).catch(err => {
        res.json({
            msg: 'error occured'
        })
    })
})


app.put("/completed", async (req, res) => {
    const id = req.body
    const parsedId = types.markCompleted.safeParse(id)

    if (parsedId.success === false) {
        res.status(411).json({
            msg: "id not found"
        })
    }

    try {
        await db.todo.findByIdAndUpdate(id.id, { completed: true }).exec()
    }
    catch (err) {
        res.status(411).json({
            msg: "id invalid"
        })
        return
    }

    res.json({
        msg: "todo updated"
    })


})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})