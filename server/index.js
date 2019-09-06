require('dotenv').config()
const express = require('express')
const massive = require('massive')
const cors = require('cors')
const session = require('express-session')

// Controllers
const ctrl = require('./controller')

// env Variables
const {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET
} = process.env

// App Instance
const app = express()

// TLM
app.use(express.json())
app.use(cors())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 60000
    }
}))

// DataBase Connection
massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('DataBase is Connected ☄️')
    })
    .catch(err => {
        console.log(err)
    })

//Endpoints
app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)
app.get('/api/posts/:userid', ctrl.getPosts)
app.get('/api/post/:postid', ctrl.getPost)
app.post('/api/post/:userid', ctrl.post)
app.post('/api/auth/logout', ctrl.logout)
app.get('/api/auth/me')

// App Listening
app.listen(SERVER_PORT, () => {
    console.log('Server is Running! 🦁')
})