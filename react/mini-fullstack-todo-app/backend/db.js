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
    completed: { type: Boolean, default: false }
})

const todo = mongoose.model('todo', todoSchema)


module.exports = {
    todo
}