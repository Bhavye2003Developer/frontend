const mongoose = require('mongoose')
require('dotenv').config()


const dbUrl = process.env.DB_URL

// @ts-ignore
mongoose.connect(dbUrl).then(() => {
    console.log("db connected successfully")
}).catch(err => {
    console.log(`error: ${err}`)
})

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    email: String,
    completed: { type: Boolean, default: false }
})

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const todo = mongoose.model('Todo', todoSchema)
const user = mongoose.model("User", userSchema)

module.exports = {
    todo, user
}