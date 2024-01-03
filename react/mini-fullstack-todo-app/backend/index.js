const express = require('express')
const types = require('./types')


const app = express()
const port = 3000

app.use(express.json())


app.get("/todos", (req, res) => {
    res.send("todos")
})

app.post("/todo", (req, res) => {
    let todo = req.body
    try {
        todo = types.todo.parse(todo)
        console.log(todo)
    }
    catch (err) {
        res.send("Invalid body")
        return
    }
    res.send("created")
})

app.put("/completed", (req, res) => {
    res.send()
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})