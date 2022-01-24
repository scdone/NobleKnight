const express = require('express')
const app = express()
const cors = require('cors')
const session = require('express-session')
require('dotenv').config()

const { SERVER_PORT, SESSION_SECRET } = process.env


const ctrl = require('./controller')


app.use(express.json())
app.use(cors())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUnititialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 72
  }
}))


app.get('/', (req, res) => {
    res.send('Hello World!!!');
  });

app.get('/allEvents', ctrl.getAllEvents)
app.get('/api/playerHistory/:id', ctrl.getPlayerHistory)
app.get('/api/leaderboard', ctrl.getLeaderboard)

app.post(`/auth/createAccount`, ctrl.createAccount)
app.post(`/auth/login`, ctrl.login)

app.post('/api/saveGame', ctrl.saveGame)

// app.get('/allUsers', ctrl.getAllUsers) -- this was a test




app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))