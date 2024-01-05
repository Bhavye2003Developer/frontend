const express = require('express')
const types = require('./types')
const cors = require('cors')
const db = require('./db')
const auth = require('./auth')

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())


app.get("/signup", (req, res, next) => {
    console.log("This is signup page")
    // goes to /signup post request
})

// new user
app.post("/signup", (req, res) => {
    const user = req.body
    const parsedUser = types.user.safeParse(user)
    if (parsedUser.success === false) {
        res.json({
            msg: "body invalid!"
        })
        return
    }

    db.user.findOne({ email: user.email }).exec().then((userExisted) => {
        if (userExisted) {
            res.json({
                msg: "email already exists!"
            })
            return
        }
        const newUser = new db.user(user)
        newUser.save().then(() => {
            res.json({
                msg: "user created successfully..."
            })
        }).catch(err => {
            res.json({
                msg: 'error occured'
            })
        })
    })
})


app.post("/login", async (req, res) => {
    const user = req.body
    const parsedUser = types.login.safeParse(user)

    if (parsedUser.success === false) {
        res.json({
            msg: "body invalid!"
        })
        return
    }

    const loginedUser = await db.user.findOne({ email: user.email, password: user.password }).exec()

    if (!loginedUser) {
        res.json({
            msg: "email or password invalid!"
        })
        return
    }

    const loginToken = auth.generateToken(loginedUser)
    res.json({
        msg: "successfully logged in",
        token: loginToken
    })
})


// authentication middleware
app.use(auth.auth)

app.get("/todos", async (req, res) => {

    // @ts-ignore
    const email = req.email
    const todos = await db.todo.find({ email })
    res.status(200).json({
        todos
    })
})

app.post("/todo", (req, res) => {
    const todo = req.body
    // @ts-ignore
    todo.email = req.email
    const parsedTodo = types.todo.safeParse(todo)

    if (parsedTodo.success === false) {
        console.log(parsedTodo.error)
        res.json({
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
    // @ts-ignore
    const email = req.email
    const parsedId = types.markCompleted.safeParse(id)

    if (parsedId.success === false) {
        res.status(411).json({
            msg: "id not found"
        })
    }
    try {
        await db.todo.findOneAndUpdate({ _id: id.id, email }, { completed: true }).exec()
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