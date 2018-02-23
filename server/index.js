const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      app = express(),
      checkForSessions = require('./middlewares/checkForSessions'),
      port = process.env.PORT || 3030,
      massive = require('massive'),
      cors = require('cors');

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


massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db)
    app.listen(port, () => console.log(`Server listening on port ${port}`))
} )

