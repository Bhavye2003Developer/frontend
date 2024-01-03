const zod = require('zod')


const todo = zod.z.object({
    title: zod.z.string(),
    description: zod.z.string()
})


const markCompleted = zod.z.object({
    id: zod.z.string()
})


module.exports = {
    todo, markCompleted
}