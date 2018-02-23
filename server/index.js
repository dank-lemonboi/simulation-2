const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      app = express(),
      checkForSessions = require('./middlewares/checkForSessions'),
      port = process.env.PORT || 3030,
      massive = require('massive'),
      cors = require('cors'), 
      ctrl = require('./controllers/userController')

require('dotenv').config()

app.use(bodyParser.json());
app.use(cors())

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 2200000}
}))

app.use(checkForSessions);

app.get('/api/users', ctrl.getUsers)
app.post('/api/auth/register', ctrl.newUser)
app.post('/api/auth/login', ctrl.loginSession)

// app.post('/api/auth/login', ctrl.


massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db)
    app.listen(port, () => console.log(`Server listening on port ${port}`))
} )

