require('dotenv').config()
const express = require('express')
const massive = require('massive')
const cors = require('cors')

// Controllers
const ctrl = require('./controller')

// env Variables
const {
    CONNECTION_STRING
} = process.env

// App Instance
const app = express()

// TLM
app.use(express.json())
app.use(cors())

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

// App Listening
app.listen(4000, () => {
    console.log('Server is Running! 🦁')
})