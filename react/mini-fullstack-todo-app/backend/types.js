const zod = require('zod')


const todo = zod.z.object({
    title: zod.z.string(),
    description: zod.z.string(),
    email: zod.z.string().email()
})


const markCompleted = zod.z.object({
    id: zod.z.string()
})

const user = zod.z.object({
    username: zod.z.string(),
    email: zod.z.string().email(),
    password: zod.z.string()
})

const login = zod.z.object({
    email: zod.z.string().email(),
    password: zod.z.string()
})


module.exports = {
    todo, markCompleted, user, login
}