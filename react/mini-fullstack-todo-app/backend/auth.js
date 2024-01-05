const jwt = require('jsonwebtoken')
const SERVER_SECRET = "root@819910"

function generateToken({ email }) {
    const token = jwt.sign({ email }, SERVER_SECRET)
    return token
}


function authenticate(token) {
    try {
        // user exists
        const user = jwt.verify(token, SERVER_SECRET)
        return user
    }
    catch (err) {
        return null
    }
}


function auth(req, res, next) {
    const loginToken = req.headers.authorization
    const isAuthorised = authenticate(loginToken)
    if (isAuthorised) {
        // @ts-ignore
        req.email = isAuthorised.email
        return next()
    }
    return res.json({
        msg: "you are not authorised!"
    })
}


module.exports = { auth, generateToken }